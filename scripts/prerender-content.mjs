/**
 * Content prerenderer.
 *
 * Loads the structured data files (wiki terms, kunnskapsbank articles, trade
 * pages) at build time and renders real, answer-first <body> HTML plus
 * per-page JSON-LD for each content route.
 *
 * Why: the SPA only ships an empty `<div id="root">` in its initial HTML.
 * Googlebot renders JS and recovers, but AI answer engines and most non-Google
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, Bytespider, CCBot, Google-Extended)
 * do NOT execute JS — so the entire knowledge library was invisible to exactly
 * the engines this site targets (GEO). We inject the content into #root; React
 * replaces it on hydration, so JS clients are unaffected while crawlers without
 * JS get the full text and structured data.
 *
 * The data is loaded by bundling each .ts entry with esbuild (resolving the
 * `@/` alias and stripping type-only imports) and importing the result — far
 * more robust than regex-parsing 3 000-line data files.
 */
import { build } from "esbuild";
import { pathToFileURL } from "url";
import path from "path";
import os from "os";
import fs from "fs";

const SITE_URL = "https://www.vekst-systemet.no";
const SITE_NAME = "Vekst Systemet";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

// ---------- data loading ----------

let _tmpCounter = 0;
async function loadExport(entry, exportName) {
  const tmp = path.join(
    os.tmpdir(),
    `vs-prerender-${exportName}-${_tmpCounter++}.mjs`,
  );
  await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: tmp,
    logLevel: "silent",
    alias: { "@": path.resolve("src") },
  });
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return mod[exportName];
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

export async function loadContentData() {
  const [wikiTerms, kennisbankArticles, tradePagesObj] = await Promise.all([
    loadExport("src/data/wikiTerms.ts", "wikiTerms"),
    loadExport("src/data/kennisbankArticles.ts", "kennisbankArticles"),
    loadExport("src/data/tradePages.ts", "TRADE_PAGES"),
  ]);
  const trades = Array.isArray(tradePagesObj)
    ? tradePagesObj
    : Object.values(tradePagesObj);
  return { wikiTerms, kennisbankArticles, trades };
}

// ---------- html helpers ----------

export const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const ldJson = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(
    /</g,
    "\\u003c",
  )}</script>`;

const p = (text) => (text ? `<p>${esc(text)}</p>` : "");
const sectionsHtml = (sections = []) =>
  sections
    .map((s) => `<section><h2>${esc(s.heading)}</h2>${p(s.body)}</section>`)
    .join("");

const linkList = (links = []) =>
  links.length
    ? `<ul>${links
        .map(
          (l) =>
            `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`,
        )
        .join("")}</ul>`
    : "";

const breadcrumbNav = (crumbs) =>
  `<nav aria-label="Brødsmuler"><ol>${crumbs
    .map(
      (c) =>
        `<li>${c.href ? `<a href="${esc(c.href)}">${esc(c.name)}</a>` : esc(c.name)}</li>`,
    )
    .join("")}</ol></nav>`;

const breadcrumbLd = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.href ? SITE_URL + c.href : c.item,
  })),
});

const itemTitle = (it) =>
  it.title || it.heading || it.label || it.question || "";
const itemBody = (it) =>
  it.description || it.body || it.text || it.answer || "";

const itemsBlock = (title, items = []) =>
  items.length
    ? `<section><h2>${esc(title)}</h2>${items
        .map(
          (it) =>
            `<h3>${esc(itemTitle(it))}</h3>${p(itemBody(it))}`,
        )
        .join("")}</section>`
    : "";

// ---------- per-type renderers ----------

// ---------- build-time FAQ extraction from bespoke .tsx pages ----------

const unescapeJs = (s) =>
  s.replace(/\\"/g, '"').replace(/\\n/g, " ").replace(/\\\\/g, "\\");

/**
 * Pull { question, answer } pairs out of a component's `faqs` array.
 * The pages store each as a single double-quoted string (no concatenation),
 * so a tolerant regex stays in sync with the source without duplicating it.
 */
export function extractFaqs(fileRelPath) {
  let src;
  try {
    src = fs.readFileSync(path.resolve(fileRelPath), "utf-8");
  } catch {
    return [];
  }
  const re =
    /question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push({ question: unescapeJs(m[1]), answer: unescapeJs(m[2]) });
  }
  return out;
}

const faqSection = (faqs) =>
  faqs.length
    ? `<section><h2>Ofte stilte spørsmål</h2>${faqs
        .map((f) => `<h3>${esc(f.question)}</h3>${p(f.answer)}`)
        .join("")}</section>`
    : "";

const faqLd = (faqs) =>
  faqs.length
    ? ldJson({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      })
    : "";

const HUB_LINKS = [
  ["Tjenester", "/tjenester"],
  ["Sammenlign", "/sammenlign"],
  ["Priser", "/priser"],
  ["Bestill demo", "/demo"],
];
const hubNav = () =>
  `<nav aria-label="Relaterte sider"><ul>${HUB_LINKS.map(
    ([l, h]) => `<li><a href="${esc(h)}">${esc(l)}</a></li>`,
  ).join("")}</ul></nav>`;

export function renderComparison({ slug, title, description, faqs }) {
  const url = `${SITE_URL}/sammenlign/${slug}`;
  const crumbs = [
    { name: "Hjem", href: "/" },
    { name: "Sammenlign", href: "/sammenlign" },
    { name: title },
  ];
  const body =
    `<main>${breadcrumbNav(crumbs)}<article>` +
    `<h1>${esc(title)}</h1>` +
    p(description) +
    faqSection(faqs) +
    hubNav() +
    `</article></main>`;
  const head =
    ldJson({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url,
      inLanguage: "nb",
      image: OG_IMAGE,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    }) +
    faqLd(faqs) +
    ldJson(breadcrumbLd(crumbs));
  return { head, body };
}

export function renderService({ slug, title, description, faqs }) {
  const url = `${SITE_URL}/tjenester/${slug}`;
  const crumbs = [
    { name: "Hjem", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: title },
  ];
  const body =
    `<main>${breadcrumbNav(crumbs)}<article>` +
    `<h1>${esc(title)}</h1>` +
    p(description) +
    faqSection(faqs) +
    hubNav() +
    `</article></main>`;
  const head =
    ldJson({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "Norge" },
      offers: {
        "@type": "Offer",
        price: "2990",
        priceCurrency: "NOK",
      },
    }) +
    faqLd(faqs) +
    ldJson(breadcrumbLd(crumbs));
  return { head, body };
}

export function renderHomepage() {
  const systems = [
    ["Leadgenererende nettside", "/tjenester/leadgenerering", "Profesjonell, mobilvennlig nettside bygget for å konvertere besøk til forespørsler."],
    ["Lokal SEO", "/tjenester/lokal-seo", "Kom inn i Googles kartpakke når noen søker «rørlegger Oslo» eller «elektriker Bergen»."],
    ["5-stjerners anmeldelsesfunnel", "/tjenester/anmeldelsesfunnel", "Samle inn Google-anmeldelser automatisk fra fornøyde kunder."],
    ["Tapt-anrop-til-SMS", "/tjenester/kundekommunikasjon", "Automatisk SMS-svar når du ikke rekker telefonen, så du aldri mister en lead."],
    ["Lead-oppfølging", "/tjenester/lead-oppfolging", "Automatisk oppfølging av nye forespørsler via SMS og e-post."],
    ["Markedsføringskampanjer", "/tjenester/markedsforingskampanjer", "Ferdige SMS- og e-postkampanjer for gjenkjøp og anbefalinger."],
  ];

  const body =
    `<main><article>` +
    `<h1>Vekst Systemet — digitale systemer for moderne håndverkere</h1>` +
    p("Vekst Systemet bygger og drifter hele det digitale systemet håndverkerbedrifter i Norge trenger for å få flere kunder: en nettside som konverterer, lokal synlighet i Google, automatiske anmeldelser og oppfølging som fanger opp hver eneste forespørsel. Mindre administrasjon, mer tid på byggeplassen.") +
    `<section><h2>Hvem er det for?</h2>` +
    p("For rørleggere, elektrikere, malere, taktekkere, flisleggere, tømrere og 40+ andre håndverkerfag som vil ha en stabil kundestrøm uten å være avhengig av Mittanbud og betale per lead.") +
    `</section>` +
    `<section><h2>Hva er inkludert?</h2><ul>` +
    systems
      .map(
        ([name, href, desc]) =>
          `<li><a href="${esc(href)}"><strong>${esc(name)}</strong></a> — ${esc(desc)}</li>`,
      )
      .join("") +
    `</ul></section>` +
    `<section><h2>Hva koster det?</h2>` +
    p("Fast månedspris på 2 990 kr for hele pakken — ingen oppstartskostnad og ingen lange bindinger. Se /priser for detaljer.") +
    `</section>` +
    `<nav aria-label="Hovedsider"><ul>` +
    [
      ["Tjenester", "/tjenester"],
      ["Fagområder", "/fagomrader"],
      ["Kunnskapsbank", "/kunnskapsbank"],
      ["Wiki", "/wiki"],
      ["Sammenlign", "/sammenlign"],
      ["Priser", "/priser"],
      ["Bestill demo", "/demo"],
    ]
      .map(([label, href]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`)
      .join("") +
    `</ul></nav>` +
    `</article></main>`;

  const head = ldJson({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digitalt markedsføringssystem for håndverkere",
    serviceType: "Markedsføring og digitalisering for håndverkerbedrifter",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "Country", name: "Norge" },
    offers: {
      "@type": "Offer",
      price: "2990",
      priceCurrency: "NOK",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2990",
        priceCurrency: "NOK",
        unitText: "måned",
      },
    },
  });

  return { head, body };
}

export function renderWikiTerm(term, termBySlug) {
  const url = `${SITE_URL}/wiki/${term.slug}`;
  const crumbs = [
    { name: "Hjem", href: "/" },
    { name: "Wiki", href: "/wiki" },
    { name: term.term },
  ];
  const relatedTerms = (term.relatedTerms || [])
    .map((slug) => termBySlug.get(slug))
    .filter(Boolean)
    .map((t) => ({ label: t.term, href: `/wiki/${t.slug}` }));

  const body =
    `<main>${breadcrumbNav(crumbs)}<article>` +
    `<p>${esc(term.category)}</p>` +
    `<h1>${esc(term.term)}</h1>` +
    p(term.shortDescription) +
    sectionsHtml(term.sections) +
    (relatedTerms.length
      ? `<aside><h2>Relaterte termer</h2>${linkList(relatedTerms)}</aside>`
      : "") +
    (term.relatedLinks && term.relatedLinks.length
      ? `<aside><h2>Relaterte tjenester</h2>${linkList(term.relatedLinks)}</aside>`
      : "") +
    `</article></main>`;

  const head = [
    ldJson({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: term.term,
      description: term.shortDescription,
      url,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Markedsførings-wiki for håndverkere",
        url: `${SITE_URL}/wiki`,
      },
    }),
    ldJson(breadcrumbLd(crumbs)),
  ].join("");

  return { head, body };
}

export function renderArticle(article) {
  const url = `${SITE_URL}/kunnskapsbank/${article.slug}`;
  const crumbs = [
    { name: "Hjem", href: "/" },
    { name: "Kunnskapsbank", href: "/kunnskapsbank" },
    { name: article.title },
  ];
  const wordCount = (article.sections || []).reduce(
    (sum, s) => sum + String(s.body).split(/\s+/).length,
    0,
  );

  const body =
    `<main>${breadcrumbNav(crumbs)}<article>` +
    `<p>${esc(article.category)}</p>` +
    `<h1>${esc(article.title)}</h1>` +
    p(article.description) +
    `<p>Av Xander Dijkstra${article.date ? ` · ${esc(article.date)}` : ""}${article.readTime ? ` · ${esc(article.readTime)} lesetid` : ""}</p>` +
    sectionsHtml(article.sections) +
    (article.relatedLinks && article.relatedLinks.length
      ? `<aside><h2>Relaterte tjenester</h2>${linkList(article.relatedLinks)}</aside>`
      : "") +
    `</article></main>`;

  const head = [
    ldJson({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      url,
      datePublished: article.date,
      dateModified: article.date,
      wordCount,
      articleSection: article.category,
      inLanguage: "nb",
      image: OG_IMAGE,
      author: { "@type": "Person", name: "Xander Dijkstra" },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    }),
    ldJson(breadcrumbLd(crumbs)),
  ].join("");

  return { head, body };
}

export function renderTrade(trade) {
  const url = `${SITE_URL}/fagomrader/${trade.slug}`;
  const pluralCap =
    (trade.plural || "").charAt(0).toUpperCase() + (trade.plural || "").slice(1);
  const crumbs = [
    { name: "Hjem", href: "/" },
    { name: "Fagområder", href: "/fagomrader" },
    { name: `For ${pluralCap}` },
  ];

  const industry = trade.industryContent || {};
  const industryHtml = industry.sectionTitle
    ? `<section><h2>${esc(industry.sectionTitle)}</h2>${(industry.paragraphs || [])
        .map((para) => p(para))
        .join("")}</section>`
    : "";

  const faqs = trade.faqs || [];
  const faqHtml = faqs.length
    ? `<section><h2>Ofte stilte spørsmål</h2>${faqs
        .map((f) => `<h3>${esc(f.question)}</h3>${p(f.answer)}`)
        .join("")}</section>`
    : "";

  const relatedTrades = (trade.relatedTrades || []).map((rt) => ({
    label: rt.label,
    href: `/fagomrader/${rt.slug}`,
  }));

  const body =
    `<main>${breadcrumbNav(crumbs)}<article>` +
    `<h1>${esc(trade.hero?.headline || trade.metaTitle)}</h1>` +
    p(trade.hero?.subheadline) +
    itemsBlock(trade.problems?.sectionTitle, trade.problems?.items) +
    (trade.solution?.sectionTitle
      ? `<section><h2>${esc(trade.solution.sectionTitle)}</h2>${p(trade.solution.intro)}${(trade.solution.items || [])
          .map((it) => `<h3>${esc(itemTitle(it))}</h3>${p(itemBody(it))}`)
          .join("")}</section>`
      : "") +
    industryHtml +
    itemsBlock(trade.results?.sectionTitle, trade.results?.items) +
    faqHtml +
    (relatedTrades.length
      ? `<aside><h2>Relaterte fagområder</h2>${linkList(relatedTrades)}</aside>`
      : "") +
    `</article></main>`;

  const head = [
    faqs.length
      ? ldJson({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        })
      : "",
    ldJson({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Nettside & markedsføringssystem for ${pluralCap}`,
      provider: {
        "@type": "Organization",
        name: "Vekst Systemet",
        url: SITE_URL,
        telephone: "+4740185596",
        email: "info@vekst-systemet.no",
      },
      description: `Komplett markedsføringssystem for ${trade.bedrijf}: nettside, lokal SEO, automatiske anmeldelser og lead-oppfølging.`,
      areaServed: { "@type": "Country", name: "Norge" },
      offers: {
        "@type": "Offer",
        price: "2990",
        priceCurrency: "NOK",
      },
    }),
    ldJson(breadcrumbLd(crumbs)),
  ].join("");

  return { head, body };
}
