#!/usr/bin/env node
/**
 * Generates public/sitemap.xml by parsing the data files at build time.
 * Runs automatically as a prebuild step so the sitemap stays in sync with
 * the actual routes on www.vekst-systemet.no.
 *
 * lastmod policy:
 *  - Articles & wiki terms: use the `date` field stored in their data
 *    file (real publish/update date).
 *  - Static pages: use a stable hand-maintained date in STATIC_LASTMOD
 *    so Google doesn't see every URL change every build.
 *  - Trade pages, service pages, downloads, tools: use TRADE_LASTMOD
 *    (bumped when the template materially changes).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const SITE_URL = "https://www.vekst-systemet.no";
const OUT_FILE = path.join(REPO_ROOT, "public/sitemap.xml");

const read = (rel) => fs.readFileSync(path.join(REPO_ROOT, rel), "utf-8");

// Hand-maintained baseline dates. Bump these when the *template* changes,
// not on every deploy. Avoids Google ignoring our lastmod signals.
const STATIC_LASTMOD = "2026-04-25";
const TRADE_LASTMOD = "2026-04-25";
const TOOLS_LASTMOD = "2026-04-25";
const SERVICE_LASTMOD = "2026-04-25";
const DOWNLOAD_LASTMOD = "2026-04-25";

// ---------- Extractors ----------

/** Extract the top-level keys of the TRADE_PAGES record. */
function getTradeSlugs() {
  const src = read("src/data/tradePages.ts");
  const start = src.indexOf("export const TRADE_PAGES");
  if (start === -1) throw new Error("TRADE_PAGES not found");
  const body = src.slice(start);
  const end = body.indexOf("\n};");
  const section = body.slice(0, end);
  const slugs = [];
  const re = /^  (?:"([a-z][a-z0-9-]*)"|([a-z][a-z0-9-]*)):/gm;
  let m;
  while ((m = re.exec(section)) !== null) {
    slugs.push(m[1] || m[2]);
  }
  return [...new Set(slugs)];
}

/** Extract slugs from a data file with `slug: "xxx"` fields. */
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

/**
 * Pair slugs with the date field that follows them in the same article
 * object. Used for kennisbank and wiki entries which have real publish
 * dates we want to expose as lastmod.
 */
function getSlugDatesFromFile(rel) {
  const src = read(rel);
  const re = /slug:\s*"([a-z0-9-]+)"[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g;
  const map = new Map();
  let m;
  while ((m = re.exec(src)) !== null) {
    map.set(m[1], m[2]);
  }
  return map;
}

// ---------- Static route lists ----------

const STATIC_PAGES = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/tjenester", priority: "0.8", changefreq: "monthly" },
  { loc: "/fagomrader", priority: "0.8", changefreq: "monthly" },
  { loc: "/sammenlign", priority: "0.8", changefreq: "monthly" },
  { loc: "/kunnskapsbank", priority: "0.7", changefreq: "weekly" },
  { loc: "/wiki", priority: "0.7", changefreq: "weekly" },
  { loc: "/blogg", priority: "0.7", changefreq: "weekly" },
  { loc: "/kundecase", priority: "0.6", changefreq: "monthly" },
  { loc: "/kontakt", priority: "0.6", changefreq: "monthly" },
  { loc: "/demo", priority: "0.8", changefreq: "monthly" },
  { loc: "/priser", priority: "0.8", changefreq: "monthly" },
  { loc: "/bransje/digitalisering-for-handverkere", priority: "0.7", changefreq: "monthly" },
  { loc: "/nedlastinger", priority: "0.8", changefreq: "monthly" },
];

const DIENSTEN_PAGES = [
  "/tjenester/leadgenerering",
  "/tjenester/kundekommunikasjon",
  "/tjenester/anmeldelsesfunnel",
  "/tjenester/alt-i-en-innboks",
  "/tjenester/markedsforingskampanjer",
  "/tjenester/lead-oppfolging",
  "/tjenester/digitalisering",
  "/tjenester/automatisering",
  "/tjenester/programvareintegrasjoner",
  "/tjenester/ai-losninger",
  "/tjenester/tilbudssystem",
  "/tjenester/anmeldelsessystem",
  "/tjenester/planleggingssystem",
  "/tjenester/markedsforingsautomatisering",
];

const VERGELIJK_PAGES = [
  { loc: "/sammenlign/mittanbud-alternativ", lastmod: "2026-04-21" },
  { loc: "/sammenlign/mittanbud-priser", lastmod: "2026-04-21" },
  { loc: "/sammenlign/mittanbud-vs-anbudstorget", lastmod: "2026-04-21" },
  { loc: "/sammenlign/tripletex-vs-fiken", lastmod: "2026-04-23" },
  { loc: "/sammenlign/crm-for-handverkere", lastmod: "2026-04-23" },
  { loc: "/sammenlign/timeregistrering-for-handverkere", lastmod: "2026-04-23" },
  { loc: "/sammenlign/fakturaprogram-for-handverkere", lastmod: "2026-04-23" },
];

const GUIDE_PAGES = [
  { loc: "/guide/markedsforing-for-handverkere", lastmod: "2026-04-21", priority: "0.9" },
];

const TOOLS_PAGES = [
  "/verktoy",
  "/verktoy/leadverdi-kalkulator",
  "/verktoy/timepris-kalkulator",
  "/verktoy/prosjektmargin-kalkulator",
  "/verktoy/personalkostnad-kalkulator",
  "/verktoy/byggematerialer-kalkulator",
  "/verktoy/fliser-kalkulator",
  "/verktoy/maling-kalkulator",
  "/verktoy/betong-kalkulator",
  "/verktoy/laminat-kalkulator",
  "/verktoy/tapet-kalkulator",
  "/verktoy/gipsplate-kalkulator",
  "/verktoy/puss-kalkulator",
  "/verktoy/markedsforingsscan",
];

// ---------- Build ----------

function urlEntry(loc, priority, changefreq, lastmod) {
  return `  <url><loc>${SITE_URL}${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

function build() {
  const tradeSlugs = getTradeSlugs();
  const serviceSlugs = getSlugsFromFile("src/data/servicePages.ts");
  const kennisbankSlugs = getSlugsFromFile("src/data/kennisbankArticles.ts");
  const kennisbankDates = getSlugDatesFromFile("src/data/kennisbankArticles.ts");
  const wikiSlugs = getSlugsFromFile("src/data/wikiTerms.ts");
  const wikiDates = getSlugDatesFromFile("src/data/wikiTerms.ts");
  const downloadSlugs = getSlugsFromFile("src/data/downloads.ts");

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  lines.push("  <!-- Main pages -->");
  for (const p of STATIC_PAGES) {
    lines.push(urlEntry(p.loc, p.priority, p.changefreq, STATIC_LASTMOD));
  }

  lines.push("");
  lines.push("  <!-- Tjenester -->");
  for (const loc of DIENSTEN_PAGES) {
    lines.push(urlEntry(loc, "0.7", "monthly", SERVICE_LASTMOD));
  }

  lines.push("");
  lines.push("  <!-- Sammenligninger -->");
  for (const p of VERGELIJK_PAGES) {
    lines.push(urlEntry(p.loc, "0.8", "monthly", p.lastmod));
  }

  lines.push("");
  lines.push("  <!-- Pillar guides -->");
  for (const p of GUIDE_PAGES) {
    lines.push(urlEntry(p.loc, p.priority, "monthly", p.lastmod));
  }

  lines.push("");
  lines.push("  <!-- Verktøy -->");
  for (const loc of TOOLS_PAGES) {
    lines.push(urlEntry(loc, "0.8", "monthly", TOOLS_LASTMOD));
  }

  lines.push("");
  lines.push(`  <!-- Fagområder (${tradeSlugs.length}) -->`);
  for (const slug of tradeSlugs.sort()) {
    lines.push(urlEntry(`/fagomrader/${slug}`, "0.8", "monthly", TRADE_LASTMOD));
  }

  if (serviceSlugs.length > 0) {
    lines.push("");
    lines.push(`  <!-- Service pages (${serviceSlugs.length}) -->`);
    for (const slug of serviceSlugs.sort()) {
      lines.push(urlEntry(`/${slug}`, "0.7", "monthly", SERVICE_LASTMOD));
    }
  }

  if (kennisbankSlugs.length > 0) {
    lines.push("");
    lines.push(`  <!-- Kunnskapsbank articles (${kennisbankSlugs.length}) -->`);
    for (const slug of kennisbankSlugs.sort()) {
      const lastmod = kennisbankDates.get(slug) || STATIC_LASTMOD;
      lines.push(urlEntry(`/kunnskapsbank/${slug}`, "0.8", "monthly", lastmod));
    }
  }

  if (wikiSlugs.length > 0) {
    lines.push("");
    lines.push(`  <!-- Wiki terms (${wikiSlugs.length}) -->`);
    for (const slug of wikiSlugs.sort()) {
      const lastmod = wikiDates.get(slug) || STATIC_LASTMOD;
      lines.push(urlEntry(`/wiki/${slug}`, "0.6", "monthly", lastmod));
    }
  }

  if (downloadSlugs.length > 0) {
    lines.push("");
    lines.push(`  <!-- Nedlastinger (${downloadSlugs.length}) -->`);
    for (const slug of downloadSlugs.sort()) {
      lines.push(urlEntry(`/nedlastinger/${slug}`, "0.7", "monthly", DOWNLOAD_LASTMOD));
    }
  }

  lines.push("</urlset>");
  lines.push("");

  const xml = lines.join("\n");
  fs.writeFileSync(OUT_FILE, xml);

  const totalUrls =
    STATIC_PAGES.length +
    DIENSTEN_PAGES.length +
    VERGELIJK_PAGES.length +
    GUIDE_PAGES.length +
    TOOLS_PAGES.length +
    tradeSlugs.length +
    serviceSlugs.length +
    kennisbankSlugs.length +
    wikiSlugs.length +
    downloadSlugs.length;
  console.log(`sitemap.xml generated: ${totalUrls} URLs`);
  console.log(
    `  static=${STATIC_PAGES.length} tjenester=${DIENSTEN_PAGES.length} sammenlign=${VERGELIJK_PAGES.length} guide=${GUIDE_PAGES.length} verktoy=${TOOLS_PAGES.length} fagomrader=${tradeSlugs.length} services=${serviceSlugs.length} kunnskapsbank=${kennisbankSlugs.length} wiki=${wikiSlugs.length} nedlastinger=${downloadSlugs.length}`
  );
}

build();
