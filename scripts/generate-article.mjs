import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const ARTICLES_FILE = path.join(REPO_ROOT, "src/data/kennisbankArticles.ts");

// Topics aligned with AannemerSysteem.com services:
// websites, online zichtbaarheid, Google-reviews, gemiste oproepen, lokale SEO, meer klanten
const TOPICS = [
  { category: "Website", topic: "Waarom een professionele website essentieel is als aannemer of ZZP'er" },
  { category: "Website", topic: "Hoeveel klanten loop je mis door een slechte of geen website?" },
  { category: "Website", topic: "Website vs. Facebook-pagina: wat werkt beter voor aannemers?" },
  { category: "Website", topic: "Offerte-aanvragen verhogen via je website als aannemer" },
  { category: "Website", topic: "Van visitekaartje naar digitale aanwezigheid: de eerste stap voor vakmensen" },
  { category: "Website", topic: "Je website als verkooptool: hoe aannemers meer leads genereren via hun site" },
  { category: "Reputatie", topic: "Hoe je als aannemer meer Google-reviews krijgt (en waarom dat klanten oplevert)" },
  { category: "Reputatie", topic: "Online reputatie opbouwen als vakman: van nul naar vertrouwd" },
  { category: "Reputatie", topic: "Reviews vs. advertenties: wat werkt beter voor aannemers?" },
  { category: "Reputatie", topic: "Wat klanten online checken voordat ze een aannemer bellen" },
  { category: "Reputatie", topic: "Referral marketing voor aannemers: mond-tot-mondreclame digitaal inzetten" },
  { category: "Lokale SEO", topic: "Lokale SEO voor aannemers: gevonden worden in jouw regio" },
  { category: "Lokale SEO", topic: "Google Bedrijfsprofiel optimaliseren als aannemer: stap voor stap" },
  { category: "Lokale SEO", topic: "Google Maps voor aannemers: zo kom je bovenaan in de kaartresultaten" },
  { category: "Lokale SEO", topic: "Waarom je concurrenten wél online investeren (en jij niet)" },
  { category: "Gemiste oproepen", topic: "Gemiste oproepen = gemiste omzet: hoe je dat als aannemer oplost" },
  { category: "Gemiste oproepen", topic: "Nooit meer een lead missen: automatische opvolging van gemiste oproepen" },
  { category: "Online zichtbaarheid", topic: "De kosten van GEEN online aanwezigheid als aannemer" },
  { category: "Online zichtbaarheid", topic: "Waarom mond-tot-mondreclame alleen niet meer genoeg is voor aannemers" },
  { category: "Online zichtbaarheid", topic: "Social media voor aannemers: wel of niet doen?" },
  { category: "Online zichtbaarheid", topic: "Hoe je als ZZP'er opvalt tussen de concurrentie online" },
  { category: "Vakgebied", topic: "Hoe schilders meer werk binnenhalen via internet" },
  { category: "Vakgebied", topic: "Online marketing voor loodgieters: meer klanten via je website" },
  { category: "Vakgebied", topic: "Als dakdekker meer leads via je website: zo doe je dat" },
  { category: "Vakgebied", topic: "Online zichtbaarheid voor elektriciens: van onzichtbaar naar onmisbaar" },
  { category: "Vakgebied", topic: "Meer klanten als stukadoor: online strategieën die werken" },
  { category: "Vakgebied", topic: "Als tegelzetter gevonden worden op Google: praktische gids" },
  { category: "Vakgebied", topic: "Online marketing voor timmerlieden en metselaars" },
  { category: "Tips", topic: "Automatisering voor kleine aannemers: tijd besparen, meer verdienen" },
  { category: "Tips", topic: "Seizoensgebonden marketing voor aannemers: het hele jaar door werk" },
  { category: "Tips", topic: "De simpelste manier om als aannemer online te starten" },
  { category: "Tips", topic: "X snelle wins voor je online zichtbaarheid als ZZP'er" },
];

// Actual service pages on aannemersysteem.com
const RELATED_LINKS = [
  { label: "Professionele Website", href: "/diensten/lead-generatie" },
  { label: "Review Systeem", href: "/diensten/review-funnel" },
  { label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie" },
  { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" },
  { label: "All-in-One Inbox", href: "/diensten/all-in-one-inbox" },
  { label: "Marketing Campagnes", href: "/diensten/marketing-campagnes" },
  { label: "Onze Diensten", href: "/diensten" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
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

  const prompt = `Je bent een content writer voor AannemerSysteem.com. AannemerSysteem helpt aannemers, ZZP'ers en vakmensen (schilders, loodgieters, dakdekkers, elektriciens, timmerlieden, stukadoors, tegelzetters, metselaars) aan meer klanten via digitale marketing.

Wij leveren:
1. Professionele websites — snelle, mobiele websites die bezoekers omzetten in aanvragen
2. Review funnel — automatisch Google-reviews verzamelen van tevreden klanten
3. Missed Call Text Back — gemiste oproepen automatisch opvolgen met een sms

Wij leveren GEEN bouwsoftware, ERP, calculatie, planning tools, urenregistratie, BIM of projectadministratie.

Schrijf een informatief kennisbank-artikel in het Nederlands over:
"${topicEntry.topic}"

Doelgroep: ZZP'ers, eenmanszaken en kleine aannemersbedrijven (2-10 man) in Nederland.
Toon: direct, no-nonsense. Vakman spreekt vakman. Geen marketingjargon of buzzwords.
Schrijf alsof je een collega-vakman adviseert. Gebruik concrete voorbeelden herkenbaar voor vakmensen.
Wissel vakgebieden af in voorbeelden: schilder, loodgieter, dakdekker, elektricien, timmerman, stukadoor, metselaar, tegelzetter.
Sluit af met een sectie die subtiel verwijst naar AannemerSysteem.com.

Geef je antwoord ALLEEN als JSON (geen markdown, geen uitleg erbuiten):
{
  "slug": "kebab-case-slug-max-6-woorden",
  "title": "Pakkende titel in het Nederlands",
  "description": "Korte beschrijving van 1-2 zinnen die het artikel samenvat",
  "category": "${topicEntry.category}",
  "readTime": "X min",
  "sections": [
    { "heading": "Sectietitel", "body": "Paragraaf van 3-5 zinnen. Praktisch en concreet." },
    { "heading": "Sectietitel", "body": "Paragraaf van 3-5 zinnen." },
    { "heading": "Sectietitel", "body": "Paragraaf van 3-5 zinnen." },
    { "heading": "Sectietitel", "body": "Paragraaf van 3-5 zinnen." },
    { "heading": "Sectietitel", "body": "Paragraaf van 3-5 zinnen." }
  ],
  "relatedLinks": [
    { "label": "Label", "href": "/diensten/..." },
    { "label": "Label", "href": "/diensten/..." },
    { "label": "Label", "href": "/diensten/..." }
  ]
}

Kies de relatedLinks ALLEEN uit deze opties: ${JSON.stringify(RELATED_LINKS)}
Kies 2-3 links die het meest relevant zijn voor het onderwerp.
Zorg dat de slug uniek is en NIET voorkomt in deze lijst: ${JSON.stringify(existingSlugs)}`;

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

  const newArticleTs = articleToTs(article);

  // Insert before the closing ]; of the articles array
  const updatedContent = existingContent.replace(
    /(\s*\]\s*;\s*$)/m,
    `,\n${newArticleTs}\n];`
  );

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
