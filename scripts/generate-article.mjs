import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const ARTICLES_FILE = path.join(REPO_ROOT, "src/data/kennisbankArticles.ts");

// Rotating topics: marketing & materials for contractors in Belgium & Netherlands
const TOPICS = [
  { category: "Marketing", topic: "Google Ads voor aannemers in België en Nederland: hoe je meer offerteaanvragen krijgt" },
  { category: "Marketing", topic: "SEO voor bouwbedrijven: zo scoor je hoger in Google zonder duur bureau" },
  { category: "Marketing", topic: "WhatsApp Business voor aannemers: klanten sneller bereiken en meer omzet" },
  { category: "Marketing", topic: "Facebook en Instagram advertenties voor aannemers in België en Nederland" },
  { category: "Marketing", topic: "Google reviews voor aannemers: hoe je ze verzamelt en meer klanten krijgt" },
  { category: "Marketing", topic: "E-mail marketing voor bouwbedrijven: klanten terughalen en aanbevelingen genereren" },
  { category: "Marketing", topic: "Je website als verkooptool: hoe aannemers meer leads genereren via hun site" },
  { category: "Marketing", topic: "Referral marketing voor aannemers: mond-tot-mondreclame digitaal inzetten" },
  { category: "Marketing", topic: "Video marketing voor bouwbedrijven: projecten vastleggen en klanten overtuigen" },
  { category: "Marketing", topic: "Prijsstrategie voor aannemers: hoe positioneer je jezelf in de Belgische en Nederlandse markt" },
  { category: "Materialen", topic: "Duurzame bouwmaterialen in 2025: wat werkt en wat loont voor aannemers in BE en NL" },
  { category: "Materialen", topic: "Isolatiematerialen vergelijken: wat kiezen aannemers in België versus Nederland" },
  { category: "Materialen", topic: "Inkoop van bouwmaterialen: hoe bespaar je als aannemer zonder in te leveren op kwaliteit" },
  { category: "Materialen", topic: "Houtbouw versus traditioneel bouwen: trends en kansen voor aannemers" },
  { category: "Materialen", topic: "Prefab en modulair bouwen: wat betekent dit voor aannemers in BE en NL" },
  { category: "Digitalisering", topic: "Digitale offertes voor aannemers: sneller offreren en meer opdrachten binnenhalen" },
  { category: "Digitalisering", topic: "Projectplanning software voor bouwbedrijven: tools die echt werken op de bouwplaats" },
  { category: "Digitalisering", topic: "Facturen en betalingen digitaliseren als aannemer: minder wanbetaling, meer cashflow" },
  { category: "Automatisering", topic: "Gemiste oproepen automatisch opvolgen als aannemer: nooit meer een lead missen" },
  { category: "Automatisering", topic: "Automatische afspraakbevestigingen voor aannemers: klanten beter informeren zonder extra werk" },
  { category: "Bedrijfsvoering", topic: "Personeel werven als aannemer in België en Nederland: uitdagingen en slimme aanpak" },
  { category: "Bedrijfsvoering", topic: "Prijzen berekenen als aannemer: zo stel je een winstgevende offerte op" },
  { category: "Bedrijfsvoering", topic: "Klachtenafhandeling voor aannemers: hoe je van een ontevreden klant een ambassadeur maakt" },
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

  // Pick topic based on day of year to rotate
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start) / 86400000);
  const topicEntry = TOPICS[dayOfYear % TOPICS.length];

  console.log(`Generating article for topic: "${topicEntry.topic}"`);

  const RELATED_LINKS = [
    { label: "Automatisering Bouwbedrijf", href: "/diensten/automatisering-bouwbedrijf" },
    { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" },
    { label: "Klantcommunicatie & SMS", href: "/diensten/klantcommunicatie" },
    { label: "Review Systeem", href: "/diensten/review-funnel" },
    { label: "All-in-One Inbox", href: "/diensten/all-in-one-inbox" },
    { label: "Digitalisering Bouwbedrijf", href: "/diensten/digitalisering-bouwbedrijf" },
    { label: "CRM voor Aannemers", href: "/diensten/crm" },
    { label: "Professionele Website", href: "/diensten/website" },
  ];

  const prompt = `Je bent een content writer voor BouwFlow Boost, een Nederlands/Belgisch SaaS-platform dat aannemers (bouwbedrijven) helpt met digitalisering, automatisering en marketing.

Schrijf een informatief kennisbank-artikel in het Nederlands over het volgende onderwerp:
"${topicEntry.topic}"

Doelgroep: eigenaren van bouwbedrijven en aannemers in België en Nederland.
Toon: praktisch, direct, no-nonsense. Geef concrete tips en cijfers waar mogelijk.

Geef je antwoord ALLEEN als JSON (geen markdown, geen uitleg erbuiten):
{
  "slug": "kebab-case-slug-max-6-woorden",
  "title": "Pakkende titel in het Nederlands",
  "description": "Korte beschrijving van 1-2 zinnen die het artikel samenvat",
  "category": "${topicEntry.category}",
  "readTime": "X min",
  "sections": [
    { "heading": "Sectietitel", "body": "2-3 zinnen inhoud. Praktisch en concreet." },
    { "heading": "Sectietitel", "body": "2-3 zinnen inhoud." },
    { "heading": "Sectietitel", "body": "2-3 zinnen inhoud." },
    { "heading": "Sectietitel", "body": "2-3 zinnen inhoud." },
    { "heading": "Sectietitel", "body": "2-3 zinnen inhoud." }
  ],
  "relatedLinks": [
    { "label": "Label", "href": "/diensten/..." },
    { "label": "Label", "href": "/diensten/..." },
    { "label": "Label", "href": "/diensten/..." }
  ]
}

Kies de relatedLinks ALLEEN uit deze opties: ${JSON.stringify(RELATED_LINKS)}
Zorg dat de slug uniek is en niet voorkomt in deze lijst: ${JSON.stringify(
    [...existingContent.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1])
  )}`;

  const response = await client.messages.create({
    model: "claude-opus-4-6",
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

  // Git commit and push
  try {
    execSync(`git -C "${REPO_ROOT}" add src/data/kennisbankArticles.ts`);
    execSync(
      `git -C "${REPO_ROOT}" commit -m "blog: add daily article - ${article.title}"`,
      { stdio: "inherit" }
    );
    execSync(`git -C "${REPO_ROOT}" push`, { stdio: "inherit" });
    console.log("Pushed to GitHub. Vercel will auto-deploy.");
  } catch (err) {
    console.error("Git error:", err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
