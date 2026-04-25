#!/usr/bin/env node
/**
 * Postbuild prerenderer.
 *
 * For every known route, writes dist/<route>/index.html where the
 * <head> is templated with route-specific title, description, canonical,
 * og:* and twitter:* tags. The <body> stays as the SPA shell — React
 * still hydrates client-side, but crawlers (Google, GPTBot, ClaudeBot,
 * social previews) now see correct page-unique metadata in the initial
 * HTML response instead of the homepage shell on every URL.
 *
 * Vercel serves the generated dist/<route>/index.html before falling
 * through to the SPA rewrite, so unknown routes keep working as a SPA.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const DIST = path.join(REPO_ROOT, "dist");
const SITE_URL = "https://www.vekst-systemet.no";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const read = (rel) => fs.readFileSync(path.join(REPO_ROOT, rel), "utf-8");

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// ---------- Route metadata ----------

/** Static pages with hand-written titles + descriptions. */
const STATIC_ROUTES = [
  {
    path: "/",
    title: "Vekst Systemet — Digitale systemer for moderne håndverkere",
    description:
      "Mindre administrasjon, mer tid på byggeplassen. Vekst Systemet bygger digitale systemer som hjelper håndverkere å automatisere prosessene sine.",
  },
  {
    path: "/tjenester",
    title: "Tjenester | Vekst Systemet",
    description:
      "Komplett digital pakke for håndverkere: nettside, lokal SEO, anmeldelsesfunnel, tapt-anrop-til-SMS, lead-oppfølging og markedsføringskampanjer.",
  },
  {
    path: "/fagomrader",
    title: "Fagområder | Vekst Systemet",
    description:
      "Skreddersydde markedsføringssystemer for hvert håndverkerfag - rørleggere, elektrikere, malere, taktekkere, flisleggere og 40+ andre.",
  },
  {
    path: "/sammenlign",
    title: "Sammenligninger | Vekst Systemet",
    description:
      "Ærlige sammenligninger mellom markedsføringskanaler, lead-plattformer og programvare for håndverkerbedrifter.",
  },
  {
    path: "/kunnskapsbank",
    title: "Kunnskapsbank | Vekst Systemet",
    description:
      "Praktiske artikler om nettside, lokal SEO, anmeldelser, leadgenerering og automatisering for norske håndverkerbedrifter.",
  },
  {
    path: "/wiki",
    title: "Wiki | Markedsføringsbegreper for håndverkere | Vekst Systemet",
    description:
      "Alle markedsførings- og digitale termer forklart på vanlig norsk. Spesielt for håndverkere som vil forstå hvordan nettmarkedsføring fungerer.",
  },
  {
    path: "/blogg",
    title: "Blogg | Vekst Systemet",
    description: "Tanker og resultater fra Vekst Systemet-teamet.",
  },
  {
    path: "/kundecase",
    title: "Kundecase | Vekst Systemet",
    description:
      "Resultater fra norske håndverkerbedrifter som har tatt i bruk Vekst Systemet.",
  },
  {
    path: "/kontakt",
    title: "Kontakt | Vekst Systemet",
    description:
      "Ta kontakt med Vekst Systemet. E-post, telefon eller bestill en gratis demo.",
  },
  {
    path: "/demo",
    title: "Bestill gratis demo | Vekst Systemet",
    description:
      "20-minutters gjennomgang av hvordan Vekst Systemet kan hjelpe din håndverkerbedrift med flere kunder.",
  },
  {
    path: "/priser",
    title: "Priser | Vekst Systemet",
    description:
      "Fast månedspris 2 990 kr. Komplett digital pakke for håndverkere - ingen oppstartskostnad, ingen lange bindinger.",
  },
  {
    path: "/bransje/digitalisering-for-handverkere",
    title: "Digitalisering for håndverkere | Vekst Systemet",
    description:
      "Bransjeoversikt over hvordan håndverkerbedrifter digitaliserer drift og markedsføring i Norge.",
  },
  {
    path: "/nedlastinger",
    title: "Nedlastinger | Vekst Systemet",
    description: "Gratis maler, sjekklister og guider for håndverkerbedrifter.",
  },
  {
    path: "/konfigurator",
    title: "Konfigurator | Vekst Systemet",
    description: "Sett sammen din egen pakke og se prisen.",
  },
];

const TJENESTER = [
  ["leadgenerering", "Leadgenerering-nettside", "Profesjonell nettside for håndverkere som genererer flere kvalifiserte forespørsler. Optimalisert for Google, mobilvennlig og bygget for konvertering."],
  ["kundekommunikasjon", "Kundekommunikasjon og tapt-anrop-SMS", "Automatisk SMS-svar når du ikke rekker telefonen. Mist aldri en lead igjen mens du står på byggeplassen."],
  ["anmeldelsesfunnel", "5-stjerners anmeldelsesfunnel", "Samle inn Google-anmeldelser automatisk fra fornøyde kunder. Beskytt omdømmet ditt med vårt smarte anmeldelsessystem."],
  ["alt-i-en-innboks", "Alt-i-én-innboks", "Ett sted for SMS, e-post, webchat og skjema-henvendelser. Aldri miss en kunde fordi meldingen havner i feil kanal."],
  ["markedsforingskampanjer", "Markedsføringskampanjer", "Ferdige SMS- og e-postkampanjer for gjenkjøp og anbefalinger. Aktiveres med ett klikk."],
  ["lead-oppfolging", "Lead-oppfølgingssystem", "Automatisk oppfølging av nye leads via SMS og e-post. Øk konverteringen med raske, personlige oppfølginger."],
  ["digitalisering", "Digitalisering for håndverkere", "Hvordan håndverkerbedrifter digitaliserer drift og markedsføring steg for steg."],
  ["automatisering", "Automatisering for håndverkere", "Tidsbesparende automatiseringer for oppfølging, fakturering og planlegging."],
  ["programvareintegrasjoner", "Programvareintegrasjoner", "Koble sammen nettside, CRM, faktura og kalender i én sømløs flyt."],
  ["ai-losninger", "AI-løsninger for håndverkere", "Praktiske AI-verktøy for tilbudsskriving, kundedialog og innhold."],
  ["tilbudssystem", "Tilbudssystem", "Profesjonelle tilbud på 5 minutter med signering og automatisk oppfølging."],
  ["anmeldelsessystem", "Anmeldelsessystem", "Helautomatisert prosess for å be om, følge opp og publisere kundeanmeldelser."],
  ["planleggingssystem", "Planleggingssystem", "Online booking og kalender for håndverkere - kunder booker samtaler uten telefon-ping-pong."],
  ["markedsforingsautomatisering", "Markedsføringsautomatisering", "Hele kundereisen fra første besøk til gjenkjøp, automatisert."],
];

const VERKTOY = [
  ["", "Verktøy | Vekst Systemet", "Kalkulatorer og analyseverktøy for håndverkere."],
  ["leadverdi-kalkulator", "Leadverdi-kalkulator | Vekst Systemet", "Regn ut hva én lead faktisk er verdt for din håndverkerbedrift."],
  ["timepris-kalkulator", "Timepris-kalkulator for håndverkere | Vekst Systemet", "Finn riktig timesats basert på kostnader og ønsket resultat."],
  ["personalkostnad-kalkulator", "Personalkostnad-kalkulator | Vekst Systemet", "Hva koster en ansatt deg egentlig - inkludert sosiale kostnader og feriepenger."],
  ["prosjektmargin-kalkulator", "Prosjektmargin-kalkulator | Vekst Systemet", "Regn ut marginen på et prosjekt før du gir tilbud."],
  ["byggematerialer-kalkulator", "Byggematerialer-kalkulator | Vekst Systemet", "Hub med alle byggematerial-kalkulatorer for håndverkere."],
  ["fliser-kalkulator", "Fliser-kalkulator | Vekst Systemet", "Hvor mange fliser trenger du til jobben."],
  ["maling-kalkulator", "Maling-kalkulator | Vekst Systemet", "Malingsforbruk ut fra flate og antall strøk."],
  ["betong-kalkulator", "Betong-kalkulator | Vekst Systemet", "Betongmengde og kostnad for støp og fundament."],
  ["laminat-kalkulator", "Laminat-kalkulator | Vekst Systemet", "Laminatgulv beregnet med svinn."],
  ["tapet-kalkulator", "Tapet-kalkulator | Vekst Systemet", "Tapetmengde med mønsteravpasning."],
  ["gipsplate-kalkulator", "Gipsplate-kalkulator | Vekst Systemet", "Antall gipsplater til vegger og tak."],
  ["puss-kalkulator", "Puss-kalkulator | Vekst Systemet", "Pussmengde og arbeidstid."],
  ["markedsforingsscan", "Markedsføringsscan | Vekst Systemet", "Gratis sjekk av nettsiden og Google-synligheten din."],
];

const SAMMENLIGN = [
  ["mittanbud-alternativ", "Mittanbud-alternativ: Slutt å betale per lead | Vekst Systemet", "Mittanbud koster 150-800 kr per lead og du konkurrerer med 3-5 andre håndverkere. En egen nettside gir ubegrensede leads for 2 990 kr/mnd. Sammenlign her."],
  ["mittanbud-priser", "Mittanbud priser og kreditter forklart | Vekst Systemet", "Hva koster Mittanbud egentlig? Kreditt-systemet, lead-prisene og skjulte kostnader - pluss hva en egen nettside gir for samme budsjett."],
  ["mittanbud-vs-anbudstorget", "Mittanbud vs Anbudstorget: Hvilken bør håndverkere velge? | Vekst Systemet", "Mittanbud og Anbudstorget side om side: leadsvolum, priser, fagområder og konkurranse per lead - pluss alternativet ingen snakker om."],
  ["tripletex-vs-fiken", "Tripletex vs Fiken for håndverkere: Hvilken bør du velge? | Vekst Systemet", "Tripletex og Fiken side om side for håndverkerbedrifter: pris, funksjoner, hvem passer best hvor - og hva ingen av dem løser."],
  ["crm-for-handverkere", "CRM for håndverkere: Hvilken passer bedriften din? | Vekst Systemet", "SuperOffice, Pipedrive, Tripletex og HubSpot sammenlignet for norske håndverkerbedrifter. Pris, funksjoner, hvem passer best hvor."],
  ["timeregistrering-for-handverkere", "Timeregistrering-app for håndverkere: 4 alternativer sammenlignet | Vekst Systemet", "Tripletex, Tigo, Qbis og SmartHverdag side om side. Pris, byggeplass-funksjoner, mobilapp og hvem passer best hvor."],
  ["fakturaprogram-for-handverkere", "Fakturaprogram for håndverkere: 6 alternativer sammenlignet | Vekst Systemet", "Fiken, Tripletex, Conta, Visma eAccounting, PowerOffice Go og 24SevenOffice side om side. Pris, funksjoner og hvem passer best hvor."],
];

const GUIDES = [
  ["markedsforing-for-handverkere", "Markedsføring for håndverkere 2026: Komplett guide | Vekst Systemet", "Hvordan får du flere kunder som håndverker? En ærlig gjennomgang av alle 5 markedsføringskanaler for håndverkere i Norge, med kostnader og konkrete anbefalinger for 2026."],
];

// ---------- Data extractors ----------

function extractTradeMetadata() {
  const src = read("src/data/tradePages.ts");
  const re = /slug:\s*"([a-z0-9-]+)",[\s\S]*?metaTitle:\s*"([^"]+)",\s*metaDescription:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push([m[1], m[2], m[3]]);
  }
  return out;
}

function extractKennisbankMetadata() {
  const src = read("src/data/kennisbankArticles.ts");
  const re = /slug:\s*"([a-z0-9-]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push([m[1], m[2], m[3]]);
  }
  return out;
}

function extractWikiMetadata() {
  const src = read("src/data/wikiTerms.ts");
  const re = /slug:\s*"([a-z0-9-]+)",\s*term:\s*"([^"]+)",\s*shortDescription:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push([m[1], m[2], m[3]]);
  }
  return out;
}

// ---------- HTML templating ----------

function injectMetadata(template, route) {
  const url = SITE_URL + route.path;
  const title = escape(route.title);
  const description = escape(route.description);
  const ogType = route.ogType || "website";

  let html = template;

  // <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${title}</title>`,
  );
  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${description}">`,
  );
  // <link rel="canonical">
  if (/<link\s+rel="canonical"[^>]*>/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${url}" />`,
    );
  }
  // og:url
  html = html.replace(
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${url}">`,
  );
  // og:title
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${title}">`,
  );
  // og:description
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}">`,
  );
  // og:type
  if (/<meta\s+property="og:type"[^>]*>/.test(html)) {
    html = html.replace(
      /<meta\s+property="og:type"[^>]*>/,
      `<meta property="og:type" content="${ogType}" />`,
    );
  }
  // twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${title}">`,
  );
  // twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}">`,
  );

  return html;
}

function writeRoute(template, route) {
  const html = injectMetadata(template, route);
  const segments = route.path.replace(/^\//, "").replace(/\/$/, "");
  const targetDir = segments ? path.join(DIST, segments) : DIST;
  fs.mkdirSync(targetDir, { recursive: true });
  // Avoid overwriting the canonical dist/index.html for "/" — leave it as-is for SPA fallback
  if (route.path === "/") {
    fs.writeFileSync(path.join(DIST, "index.html"), html);
  } else {
    fs.writeFileSync(path.join(targetDir, "index.html"), html);
  }
}

function build() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    console.warn("dist/index.html not found - skipping prerender (run vite build first)");
    return;
  }

  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");
  const routes = [...STATIC_ROUTES];

  for (const [slug, title, description] of TJENESTER) {
    routes.push({ path: `/tjenester/${slug}`, title: `${title} | Vekst Systemet`, description });
  }
  for (const [slug, title, description] of VERKTOY) {
    routes.push({ path: slug ? `/verktoy/${slug}` : "/verktoy", title, description });
  }
  for (const [slug, title, description] of SAMMENLIGN) {
    routes.push({ path: `/sammenlign/${slug}`, title, description });
  }
  for (const [slug, title, description] of GUIDES) {
    routes.push({ path: `/guide/${slug}`, title, description });
  }
  for (const [slug, title, description] of extractTradeMetadata()) {
    routes.push({ path: `/fagomrader/${slug}`, title, description });
  }
  for (const [slug, title, description] of extractKennisbankMetadata()) {
    routes.push({
      path: `/kunnskapsbank/${slug}`,
      title: `${title} | Kunnskapsbank | Vekst Systemet`,
      description,
      ogType: "article",
    });
  }
  for (const [slug, term, description] of extractWikiMetadata()) {
    const cleanTerm = term.replace(/\s*\(.*?\)\s*/g, "").trim();
    routes.push({
      path: `/wiki/${slug}`,
      title: `${cleanTerm} | Wiki | Vekst Systemet`,
      description,
    });
  }

  // Dedup by path
  const seen = new Set();
  const uniq = routes.filter((r) => {
    if (seen.has(r.path)) return false;
    seen.add(r.path);
    return true;
  });

  for (const route of uniq) {
    writeRoute(template, route);
  }

  console.log(`Prerendered ${uniq.length} routes`);
}

build();
