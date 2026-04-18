#!/usr/bin/env node
/**
 * Bulk seed kennisbankArticles.ts with N Norwegian articles in one run.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-articles-bulk.mjs 20
 *
 * Default count is 10. Topics are rotated through the TOPICS list
 * starting from a pseudo-random offset so multiple runs don't pick
 * the same starting topic. Duplicate slugs are avoided automatically
 * (existing slugs are checked; if a new slug collides, today's date
 * is appended).
 *
 * Unlike generate-article.mjs (the daily cron), this script does NOT
 * commit or push. Run `git add -A && git commit -m "..." && git push`
 * yourself when the bulk run finishes.
 *
 * Rate limiting:
 *   Uses claude-sonnet-4-20250514 with max_tokens=2500 per article.
 *   Inserts a 2-second delay between calls to avoid hitting Anthropic
 *   rate limits. If a call fails, the script retries once with 10s
 *   backoff, then skips to the next topic.
 */
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const ARTICLES_FILE = path.join(REPO_ROOT, "src/data/kennisbankArticles.ts");

// Same topics as the daily generator. Kept in sync manually.
const TOPICS = [
  { category: "Nettside", topic: "Hvorfor en profesjonell nettside er avgjørende for håndverkere og selvstendig næringsdrivende" },
  { category: "Nettside", topic: "Hvor mange kunder mister du på grunn av en dårlig eller ingen nettside?" },
  { category: "Nettside", topic: "Nettside vs. Facebook-side: hva fungerer best for håndverkere?" },
  { category: "Nettside", topic: "Flere tilbudsforespørsler via nettsiden din som håndverker" },
  { category: "Nettside", topic: "Fra visittkort til digital tilstedeværelse: første steg for fagfolk" },
  { category: "Nettside", topic: "Nettsiden som salgsverktøy: hvordan håndverkere får flere leads via egen side" },
  { category: "Omdømme", topic: "Hvordan du som håndverker får flere Google-anmeldelser (og hvorfor det gir kunder)" },
  { category: "Omdømme", topic: "Bygg nett-omdømme som håndverker: fra null til etablert" },
  { category: "Omdømme", topic: "Anmeldelser vs. annonser: hva fungerer best for håndverkere?" },
  { category: "Omdømme", topic: "Hva kunder sjekker på nett før de ringer en håndverker" },
  { category: "Omdømme", topic: "Anbefalinger digitalt: hvordan håndverkere setter jungeltelegrafen i system" },
  { category: "Lokal SEO", topic: "Lokal SEO for håndverkere: bli funnet i din region" },
  { category: "Lokal SEO", topic: "Optimaliser Google Bedriftsprofil som håndverker: steg for steg" },
  { category: "Lokal SEO", topic: "Google Maps for håndverkere: slik kommer du øverst i kartresultatene" },
  { category: "Lokal SEO", topic: "Derfor investerer konkurrentene dine på nett (mens du ikke gjør det)" },
  { category: "Tapte anrop", topic: "Tapte anrop = tapt omsetning: slik løser du det som håndverker" },
  { category: "Tapte anrop", topic: "Aldri miss en lead igjen: automatisk oppfølging av tapte anrop" },
  { category: "Lokal synlighet", topic: "Hva det koster å IKKE være synlig på nett som håndverker" },
  { category: "Lokal synlighet", topic: "Hvorfor jungeltelegrafen alene ikke er nok lenger for håndverkere" },
  { category: "Lokal synlighet", topic: "Sosiale medier for håndverkere: ja eller nei?" },
  { category: "Lokal synlighet", topic: "Hvordan du skiller deg ut blant konkurrentene på nett som selvstendig næringsdrivende" },
  { category: "Fagområde", topic: "Hvordan malere får flere oppdrag via internett" },
  { category: "Fagområde", topic: "Nettmarkedsføring for rørleggere: flere kunder via nettsiden" },
  { category: "Fagområde", topic: "Som taklegger: flere leads via nettsiden - slik gjør du det" },
  { category: "Fagområde", topic: "Synlighet for elektrikere på nett: fra usynlig til uunnværlig" },
  { category: "Fagområde", topic: "Flere kunder som pusser: nettstrategier som faktisk virker" },
  { category: "Fagområde", topic: "Som flislegger - bli funnet på Google: praktisk guide" },
  { category: "Fagområde", topic: "Nettmarkedsføring for tømrere og murere" },
  { category: "Tips", topic: "Automatisering for små håndverkerbedrifter: spar tid, tjen mer" },
  { category: "Tips", topic: "Sesongbasert markedsføring for håndverkere: arbeid hele året" },
  { category: "Tips", topic: "Den enkleste måten å komme i gang på nett som håndverker" },
  { category: "Tips", topic: "Raske gevinster for synligheten din på nett som selvstendig næringsdrivende" },
];

const RELATED_LINKS = [
  { label: "Profesjonell nettside", href: "/tjenester/leadgenerering" },
  { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
  { label: "Tapt anrop → SMS", href: "/tjenester/kundekommunikasjon" },
  { label: "Lead-oppfølgingssystem", href: "/tjenester/lead-oppfolging" },
  { label: "Alt-i-én innboks", href: "/tjenester/alt-i-en-innboks" },
  { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
  { label: "Våre tjenester", href: "/tjenester" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[àáâãäåæ]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõöø]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[ñ]/g, "n")
    .replace(/[ç]/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function articleToTs(article) {
  const sectionsTs = article.sections
    .map((s) => `      {\n        heading: ${JSON.stringify(s.heading)},\n        body: ${JSON.stringify(s.body)}\n      }`)
    .join(",\n");

  const linksTs = article.relatedLinks
    .map((l) => `      { label: ${JSON.stringify(l.label)}, href: ${JSON.stringify(l.href)} }`)
    .join(",\n");

  return `  {
    slug: ${JSON.stringify(article.slug)},
    title: ${JSON.stringify(article.title)},
    description: ${JSON.stringify(article.description)},
    category: ${JSON.stringify(article.category)},
    readTime: ${JSON.stringify(article.readTime)},
    date: ${JSON.stringify(article.date)},
    relatedLinks: [
${linksTs}
    ],
    sections: [
${sectionsTs}
    ]
  }`;
}

function buildPrompt(topicEntry, existingSlugs) {
  return `Du er en content writer for vekst-systemet.no. Vekst Systemet hjelper håndverkere, selvstendig næringsdrivende og fagfolk (malere, rørleggere, takleggere, elektrikere, tømrere, pussere, flisleggere, murere) med å få flere kunder gjennom digital markedsføring.

Vi leverer:
1. Profesjonelle nettsider - raske, mobiloptimaliserte nettsider som gjør besøkende til forespørsler
2. Anmeldelsesfunnel - samle Google-anmeldelser fra fornøyde kunder automatisk
3. Tapt anrop → SMS - følg opp tapte anrop automatisk med en SMS

Vi leverer IKKE bygg-programvare, ERP, kalkulasjon, planleggingsverktøy, timeregistrering, BIM eller prosjektadministrasjon.

Skriv en informativ kunnskapsbank-artikkel på norsk bokmål om:
"${topicEntry.topic}"

Målgruppe: selvstendig næringsdrivende (ENK), små håndverkerbedrifter (2-10 ansatte) i Norge.
Tone: direkte, no-nonsense. Fagmann snakker med fagmann. Ingen markedsføringssjargong eller buzzwords.
Skriv som om du rådgir en kollega i bransjen. Bruk konkrete eksempler som er gjenkjennbare for fagfolk.
Bytt mellom ulike fagområder i eksemplene: maler, rørlegger, taklegger, elektriker, tømrer, pusser, murer, flislegger.
Avslutt med en seksjon som subtilt viser til vekst-systemet.no.

Gi svaret KUN som JSON (ingen markdown, ingen forklaringer utenfor):
{
  "slug": "kebab-case-slug-maks-6-ord",
  "title": "Fengende tittel på norsk",
  "description": "Kort beskrivelse på 1-2 setninger som oppsummerer artikkelen",
  "category": "${topicEntry.category}",
  "readTime": "X min",
  "date": "${new Date().toISOString().split("T")[0]}",
  "sections": [
    { "heading": "Seksjonstittel", "body": "Avsnitt på 3-5 setninger. Praktisk og konkret." },
    { "heading": "Seksjonstittel", "body": "Avsnitt på 3-5 setninger." },
    { "heading": "Seksjonstittel", "body": "Avsnitt på 3-5 setninger." },
    { "heading": "Seksjonstittel", "body": "Avsnitt på 3-5 setninger." },
    { "heading": "Seksjonstittel", "body": "Avsnitt på 3-5 setninger." }
  ],
  "relatedLinks": [
    { "label": "Label", "href": "/tjenester/..." },
    { "label": "Label", "href": "/tjenester/..." },
    { "label": "Label", "href": "/tjenester/..." }
  ]
}

Velg relatedLinks KUN fra disse alternativene: ${JSON.stringify(RELATED_LINKS)}
Velg 2-3 lenker som er mest relevante for emnet.
Sørg for at sluggen er unik og IKKE finnes i denne listen: ${JSON.stringify(existingSlugs)}`;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function generateOne(client, topicEntry, existingSlugs) {
  const prompt = buildPrompt(topicEntry, existingSlugs);
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
  });
  let rawText = response.content[0].text.trim();
  rawText = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");
  const article = JSON.parse(rawText);
  article.slug = slugify(article.slug);
  if (!article.date) {
    article.date = new Date().toISOString().split("T")[0];
  }
  return article;
}

function appendArticleToFile(article, currentContent) {
  const newArticleTs = articleToTs(article);
  const isEmpty = /=\s*\[\s*\]\s*;/.test(currentContent);
  if (isEmpty) {
    return currentContent.replace(/=\s*\[\s*\]\s*;/, `= [\n${newArticleTs}\n];`);
  }
  return currentContent.replace(/(\s*\]\s*;\s*$)/m, `,\n${newArticleTs}\n];`);
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is not set.");
    process.exit(1);
  }

  const count = parseInt(process.argv[2] || "10", 10);
  if (!Number.isFinite(count) || count < 1 || count > 200) {
    console.error("Usage: node scripts/generate-articles-bulk.mjs <count 1-200>");
    process.exit(1);
  }

  console.log(`Bulk-generating ${count} Norwegian articles...`);
  console.log(`Topics available: ${TOPICS.length}`);
  console.log("");

  const client = new Anthropic({ apiKey });
  let content = fs.readFileSync(ARTICLES_FILE, "utf-8");
  let existingSlugs = [...content.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

  const startOffset = Math.floor(Math.random() * TOPICS.length);
  let generated = 0;
  let failures = 0;

  for (let i = 0; i < count; i++) {
    const topicEntry = TOPICS[(startOffset + i) % TOPICS.length];
    const label = `[${i + 1}/${count}] "${topicEntry.topic.slice(0, 60)}..."`;
    process.stdout.write(`${label} `);

    let article = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        article = await generateOne(client, topicEntry, existingSlugs);
        break;
      } catch (err) {
        if (attempt === 1) {
          process.stdout.write(`retry... `);
          await sleep(10_000);
        } else {
          process.stdout.write(`FAILED (${err.message})\n`);
        }
      }
    }

    if (!article) {
      failures++;
      continue;
    }

    // Ensure slug is unique in this batch
    if (existingSlugs.includes(article.slug)) {
      const date = new Date().toISOString().split("T")[0];
      article.slug = `${article.slug}-${date}-${i}`;
    }

    content = appendArticleToFile(article, content);
    fs.writeFileSync(ARTICLES_FILE, content, "utf-8");
    existingSlugs.push(article.slug);
    generated++;
    process.stdout.write(`OK (${article.slug})\n`);

    // Pause between calls to stay under rate limits
    if (i < count - 1) {
      await sleep(2000);
    }
  }

  console.log("");
  console.log(`Done. Generated ${generated} article(s), ${failures} failure(s).`);
  console.log(`File updated: ${ARTICLES_FILE}`);
  console.log("");
  console.log("Next steps:");
  console.log("  1. Run: npx tsc --noEmit");
  console.log("  2. Run: node scripts/generate-sitemap.mjs");
  console.log(`  3. Run: git add -A && git commit -m "content: seed ${generated} Norwegian kennisbank articles" && git push origin main`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
