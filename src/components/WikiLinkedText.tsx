import { Link } from "react-router-dom";
import { wikiTerms } from "@/data/wikiTerms";
import type { ReactNode } from "react";

/**
 * Map of keyword patterns to their wiki slugs.
 * Order: longest phrases first so "lead opvolging" matches before "lead".
 */
const wikiKeywords: { pattern: RegExp; slug: string; label: string }[] = [
  ...wikiTerms
    .flatMap((t) => {
      const keywords: { phrase: string; slug: string; label: string }[] = [];
      // Use the term name itself (strip parenthetical)
      const clean = t.term.replace(/\s*\(.*?\)\s*/g, "").trim();
      keywords.push({ phrase: clean, slug: t.slug, label: t.term });

      // Also match common short forms
      const shortForms: Record<string, string[]> = {
        seo: ["SEO", "zoekmachineoptimalisatie"],
        "local-seo": ["Local SEO", "lokale SEO"],
        "google-mijn-bedrijf": ["Google Bedrijfsprofiel", "Google Mijn Bedrijf", "Google Business profiel", "Google Business Profile"],
        conversie: ["conversie", "conversies"],
        lead: ["leads", "lead"],
        "lead-opvolging": ["lead opvolging", "lead follow-up", "lead-opvolging"],
        cta: ["CTA", "call to action", "call-to-action"],
        conversieratio: ["conversieratio", "conversiepercentage"],
        "organisch-verkeer": ["organisch verkeer", "organische bezoekers", "organisch zoekverkeer"],
        reviews: ["reviews", "review", "beoordelingen"],
        "social-proof": ["social proof", "sociaal bewijs"],
        automatisering: ["automatisering", "automatiseren", "geautomatiseerd"],
        crm: ["CRM", "klantenbeheersysteem"],
        "google-ads": ["Google Ads", "Google AdWords"],
        opleverdossier: ["opleverdossier", "opleverdossiers"],
      };

      const forms = shortForms[t.slug] || [];
      for (const form of forms) {
        if (form.toLowerCase() !== clean.toLowerCase()) {
          keywords.push({ phrase: form, slug: t.slug, label: t.term });
        }
      }

      return keywords;
    })
    // Sort longest first
    .sort((a, b) => b.phrase.length - a.phrase.length)
    .map(({ phrase, slug, label }) => ({
      pattern: new RegExp(`\\b(${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "gi"),
      slug,
      label,
    })),
];

interface Props {
  text: string;
  className?: string;
  excludeSlug?: string;
}

/**
 * Renders text with wiki term keywords automatically linked to their wiki pages.
 * Only links the first occurrence of each term per text block.
 */
export default function WikiLinkedText({ text, className, excludeSlug }: Props) {
  const linkedSlugs = new Set<string>();
  if (excludeSlug) linkedSlugs.add(excludeSlug);
  const parts: { start: number; end: number; slug: string; match: string }[] = [];

  for (const { pattern, slug } of wikiKeywords) {
    if (linkedSlugs.has(slug)) continue;
    pattern.lastIndex = 0;
    const m = pattern.exec(text);
    if (!m) continue;
    // Check if this match overlaps with an existing one
    const start = m.index;
    const end = start + m[0].length;
    const overlaps = parts.some(
      (p) => start < p.end && end > p.start
    );
    if (overlaps) continue;
    parts.push({ start, end, slug, match: m[0] });
    linkedSlugs.add(slug);
  }

  if (parts.length === 0) {
    return <p className={className}>{text}</p>;
  }

  // Sort by position
  parts.sort((a, b) => a.start - b.start);

  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const part of parts) {
    if (part.start > cursor) {
      nodes.push(text.slice(cursor, part.start));
    }
    nodes.push(
      <Link
        key={part.start}
        to={`/wiki/${part.slug}`}
        className="text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
      >
        {part.match}
      </Link>
    );
    cursor = part.end;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <p className={className}>{nodes}</p>;
}
