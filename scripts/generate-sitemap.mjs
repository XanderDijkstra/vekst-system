#!/usr/bin/env node
/**
 * Generates public/sitemap.xml by parsing the data files at build time.
 * Runs automatically as a prebuild step so the sitemap stays in sync with
 * the actual routes on aannemersysteem.com.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const SITE_URL = "https://aannemersysteem.com";
const OUT_FILE = path.join(REPO_ROOT, "public/sitemap.xml");

const read = (rel) => fs.readFileSync(path.join(REPO_ROOT, rel), "utf-8");

// ---------- Extractors ----------

/** Extract the top-level keys of the TRADE_PAGES record. */
function getTradeSlugs() {
  const src = read("src/data/tradePages.ts");
  const start = src.indexOf("export const TRADE_PAGES");
  if (start === -1) throw new Error("TRADE_PAGES not found");
  // Match until the closing "};" at column 0
  const body = src.slice(start);
  const end = body.indexOf("\n};");
  const section = body.slice(0, end);
  const slugs = [];
  // Match either bare identifier keys (e.g. schilders:) or quoted keys
  // (e.g. "hekwerk-poorten":) at exactly 2-space indent.
  const re = /^  (?:"([a-z][a-z0-9-]*)"|([a-z][a-z0-9-]*)):/gm;
  let m;
  while ((m = re.exec(section)) !== null) {
    slugs.push(m[1] || m[2]);
  }
  return [...new Set(slugs)];
}

/** Extract slugs from a data file with `slug: "xxx"` fields (kennisbank / wiki / servicePages). */
function getSlugsFromFile(rel) {
  const src = read(rel);
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  const slugs = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    slugs.push(m[1]);
  }
  return [...new Set(slugs)];
}

// ---------- Static route lists ----------

const STATIC_PAGES = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/diensten", priority: "0.8", changefreq: "monthly" },
  { loc: "/vakgebieden", priority: "0.8", changefreq: "monthly" },
  { loc: "/vergelijk", priority: "0.8", changefreq: "monthly" },
  { loc: "/kennisbank", priority: "0.7", changefreq: "weekly" },
  { loc: "/wiki", priority: "0.7", changefreq: "weekly" },
  { loc: "/blog", priority: "0.7", changefreq: "weekly" },
  { loc: "/case-studies", priority: "0.6", changefreq: "monthly" },
  { loc: "/contact", priority: "0.6", changefreq: "monthly" },
  { loc: "/demo", priority: "0.8", changefreq: "monthly" },
  { loc: "/prijzen", priority: "0.8", changefreq: "monthly" },
  { loc: "/sector/digitalisering-voor-aannemers", priority: "0.7", changefreq: "monthly" },
];

// Service/systeem detail pages (explicit routes in App.tsx, not covered by
// a data file). Keep in sync with src/App.tsx.
const DIENSTEN_PAGES = [
  "/diensten/lead-generatie",
  "/diensten/klantcommunicatie",
  "/diensten/review-funnel",
  "/diensten/all-in-one-inbox",
  "/diensten/marketing-campagnes",
  "/diensten/lead-follow-up",
  "/diensten/digitalisering-aannemers",
  "/diensten/automatisering-aannemers",
  "/diensten/software-integraties",
  "/diensten/ai-oplossingen",
  "/diensten/offerte-systeem",
  "/diensten/review-systeem",
  "/diensten/planning-systeem",
  "/diensten/marketing-automatisering",
];

// Comparison pages under /vergelijk. Keep in sync with src/App.tsx.
const VERGELIJK_PAGES = [
  "/vergelijk/werkspot-alternatief",
  "/vergelijk/bouwnu-alternatief",
  "/vergelijk/offerteadviseur-alternatief",
  "/vergelijk/lokale-leads-genereren",
  "/vergelijk/seo-vs-google-ads",
];

// Calculator / tool pages under /tools. Keep in sync with src/App.tsx.
const TOOLS_PAGES = [
  "/tools",
  "/tools/leadwaarde-calculator",
  "/tools/uurtarief-calculator-aannemer",
  "/tools/projectmarge-calculator",
  "/tools/personeelskosten-calculator",
  "/tools/tegels-berekenen",
  "/tools/verf-berekenen",
];

// ---------- Build ----------

function urlEntry(loc, priority, changefreq) {
  return `  <url><loc>${SITE_URL}${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

function build() {
  const tradeSlugs = getTradeSlugs();
  const serviceSlugs = getSlugsFromFile("src/data/servicePages.ts");
  const kennisbankSlugs = getSlugsFromFile("src/data/kennisbankArticles.ts");
  const wikiSlugs = getSlugsFromFile("src/data/wikiTerms.ts");

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  lines.push("  <!-- Main pages -->");
  for (const p of STATIC_PAGES) {
    lines.push(urlEntry(p.loc, p.priority, p.changefreq));
  }

  lines.push("");
  lines.push("  <!-- Diensten -->");
  for (const loc of DIENSTEN_PAGES) {
    lines.push(urlEntry(loc, "0.7", "monthly"));
  }

  lines.push("");
  lines.push("  <!-- Vergelijkingen -->");
  for (const loc of VERGELIJK_PAGES) {
    lines.push(urlEntry(loc, "0.8", "monthly"));
  }

  lines.push("");
  lines.push("  <!-- Tools / calculators -->");
  for (const loc of TOOLS_PAGES) {
    lines.push(urlEntry(loc, "0.8", "monthly"));
  }

  lines.push("");
  lines.push(`  <!-- Vakgebieden (${tradeSlugs.length}) -->`);
  for (const slug of tradeSlugs.sort()) {
    lines.push(urlEntry(`/vakgebieden/${slug}`, "0.8", "monthly"));
  }

  lines.push("");
  lines.push(`  <!-- Service pages: websites-voor-* (${serviceSlugs.length}) -->`);
  for (const slug of serviceSlugs.sort()) {
    lines.push(urlEntry(`/${slug}`, "0.7", "monthly"));
  }

  lines.push("");
  lines.push(`  <!-- Kennisbank articles (${kennisbankSlugs.length}) -->`);
  for (const slug of kennisbankSlugs.sort()) {
    lines.push(urlEntry(`/kennisbank/${slug}`, "0.6", "monthly"));
  }

  lines.push("");
  lines.push(`  <!-- Wiki terms (${wikiSlugs.length}) -->`);
  for (const slug of wikiSlugs.sort()) {
    lines.push(urlEntry(`/wiki/${slug}`, "0.6", "monthly"));
  }

  lines.push("</urlset>");
  lines.push("");

  const xml = lines.join("\n");
  fs.writeFileSync(OUT_FILE, xml);

  const totalUrls =
    STATIC_PAGES.length +
    DIENSTEN_PAGES.length +
    VERGELIJK_PAGES.length +
    TOOLS_PAGES.length +
    tradeSlugs.length +
    serviceSlugs.length +
    kennisbankSlugs.length +
    wikiSlugs.length;
  console.log(`sitemap.xml generated: ${totalUrls} URLs`);
  console.log(
    `  static=${STATIC_PAGES.length} diensten=${DIENSTEN_PAGES.length} vergelijk=${VERGELIJK_PAGES.length} tools=${TOOLS_PAGES.length} vakgebieden=${tradeSlugs.length} services=${serviceSlugs.length} kennisbank=${kennisbankSlugs.length} wiki=${wikiSlugs.length}`
  );
}

build();
