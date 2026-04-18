import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const ARTICLES_FILE = path.join(REPO_ROOT, "src/data/kennisbankArticles.ts");

// Topics aligned with vekst-systemet.no services:
// nettsider, lokal synlighet, Google-anmeldelser, tapte anrop, lokal SEO, flere kunder
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

// Actual service pages on vekst-systemet.no
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

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is not set.");
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  // Read existing articles file
  const existingContent = fs.readFileSync(ARTICLES_FILE, "utf-8");
  const existingSlugs = [...existingContent.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

  // Pick topic based on day of year to rotate
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start) / 86400000);
  const topicEntry = TOPICS[dayOfYear % TOPICS.length];

  console.log(`Generating article for topic: "${topicEntry.topic}"`);

  const prompt = `Du er en content writer for vekst-systemet.no. Vekst Systemet hjelper håndverkere, selvstendig næringsdrivende og fagfolk (malere, rørleggere, takleggere, elektrikere, tømrere, pussere, flisleggere, murere) med å få flere kunder gjennom digital markedsføring.

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

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
  });

  let rawText = response.content[0].text.trim();

  // Strip markdown code fences if present
  rawText = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");

  let article;
  try {
    article = JSON.parse(rawText);
  } catch (err) {
    console.error("Failed to parse JSON response:", rawText);
    process.exit(1);
  }

  // Ensure slug is URL-safe and unique
  article.slug = slugify(article.slug);
  if (existingContent.includes(`slug: "${article.slug}"`)) {
    const date = new Date().toISOString().split("T")[0];
    article.slug = `${article.slug}-${date}`;
  }

  // Ensure date is set (fallback if the model omitted it)
  if (!article.date) {
    article.date = new Date().toISOString().split("T")[0];
  }

  const newArticleTs = articleToTs(article);

  // Insert before the closing ]; of the articles array.
  // Handles both empty array (`= [];`) and non-empty array (`… }\n];`).
  const isEmpty = /=\s*\[\s*\]\s*;/.test(existingContent);
  const updatedContent = isEmpty
    ? existingContent.replace(/=\s*\[\s*\]\s*;/, `= [\n${newArticleTs}\n];`)
    : existingContent.replace(/(\s*\]\s*;\s*$)/m, `,\n${newArticleTs}\n];`);

  if (updatedContent === existingContent) {
    console.error("Could not find insertion point in kennisbankArticles.ts");
    process.exit(1);
  }

  fs.writeFileSync(ARTICLES_FILE, updatedContent, "utf-8");
  console.log(`Article "${article.title}" written to kennisbankArticles.ts`);

  // Git commit and push to main
  try {
    execSync(`git -C "${REPO_ROOT}" add src/data/kennisbankArticles.ts`);
    execSync(
      `git -C "${REPO_ROOT}" commit -m "blog: add daily article - ${article.title}"`,
      { stdio: "inherit" }
    );
    execSync(`git -C "${REPO_ROOT}" push origin main`, { stdio: "inherit" });
    console.log("Pushed to main on GitHub. Vercel will auto-deploy.");
  } catch (err) {
    console.error("Git error:", err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
