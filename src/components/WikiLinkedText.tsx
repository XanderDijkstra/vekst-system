import { Link } from "react-router-dom";
import { wikiTerms } from "@/data/wikiTerms";
import { TRADE_KEYWORD_ENTRIES } from "@/data/tradeKeywords";
import type { ReactNode } from "react";

type LinkKind = "wiki" | "trade";

interface KeywordPattern {
  pattern: RegExp;
  slug: string;
  kind: LinkKind;
  label: string;
}

/**
 * Norwegian short-forms / aliases for wiki terms. Maps a wiki slug to
 * additional surface forms that should link to that term.
 */
const WIKI_SHORT_FORMS: Record<string, string[]> = {
  seo: ["SEO", "søkemotoroptimalisering"],
  "local-seo": ["Lokal SEO", "lokal SEO"],
  "google-bedriftsprofil": [
    "Google Bedriftsprofil",
    "Bedriftsprofil",
    "Google My Business",
    "GMB",
  ],
  "google-ads": ["Google Ads", "Google AdWords"],
  "google-maps": ["Google Maps"],
  "organisk-trafikk": ["organisk trafikk", "organiske besøk", "organisk søketrafikk"],
  "nav-konsistens": ["NAP-konsistens", "NAP"],
  konvertering: ["konvertering", "konverteringer"],
  konverteringsrate: ["konverteringsrate", "konverteringsprosent"],
  lead: ["leads", "lead"],
  "lead-oppfolging": ["lead-oppfølging", "lead oppfølging", "leadoppfølging"],
  cta: ["CTA", "call to action", "call-to-action"],
  anmeldelser: ["anmeldelser", "anmeldelse", "vurderinger"],
  anmeldelsesfunnel: ["anmeldelsesfunnel", "review-funnel"],
  automatisering: ["automatisering", "automatisert", "automatiserte"],
  "automatisk-oppfolging": ["automatisk oppfølging", "automatisert oppfølging"],
  crm: ["CRM"],
  "tapt-anrop-sms": ["tapt anrop", "missed call"],
  webchat: ["webchat", "chatfunksjon"],
  "social-proof": ["social proof", "sosialt bevis"],
  sidehastighet: ["sidehastighet", "lastetid"],
  "mobilvennlig-nettside": ["mobilvennlig nettside", "mobilvennlig"],
  backlinks: ["backlinks", "tilbakelenker"],
  "schema-markup": ["schema markup", "schema"],
  "meta-tittel-og-beskrivelse": ["meta-tittel", "meta-beskrivelse"],
  "betalt-trafikk": ["betalt trafikk"],
  "click-through-rate": ["CTR", "klikkfrekvens"],
  "bounce-rate": ["fluktrate", "bounce rate"],
  landingsside: ["landingsside"],
  funnel: ["funnel"],
  retargeting: ["retargeting"],
  "qr-kode-for-anmeldelser": ["QR-kode for anmeldelser"],
  "ssl-sertifikat": ["SSL-sertifikat", "SSL"],
  "domene-og-hosting": ["domene og hosting"],
  "responsivt-design": ["responsivt design"],
  "a-b-test": ["A/B-test", "A/B-testing"],
  "google-analytics": ["Google Analytics"],
};

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function makePattern(phrase: string): RegExp {
  return new RegExp(`\\b(${escapeRegExp(phrase)})\\b`, "gi");
}

/**
 * Build the unified keyword list once at module init. Wiki phrases take
 * precedence when the exact same phrase is registered for both a wiki
 * term and a trade (rare but possible). Longest phrases come first so
 * "lead-oppfølging" matches before "lead".
 */
function buildKeywordList(): KeywordPattern[] {
  type Raw = { phrase: string; slug: string; kind: LinkKind; label: string };
  const raw: Raw[] = [];

  for (const term of wikiTerms) {
    const clean = term.term.replace(/\s*\(.*?\)\s*/g, "").trim();
    raw.push({ phrase: clean, slug: term.slug, kind: "wiki", label: term.term });

    const forms = WIKI_SHORT_FORMS[term.slug] ?? [];
    for (const form of forms) {
      if (form.toLowerCase() !== clean.toLowerCase()) {
        raw.push({ phrase: form, slug: term.slug, kind: "wiki", label: term.term });
      }
    }
  }

  for (const { slug, keywords } of TRADE_KEYWORD_ENTRIES) {
    for (const phrase of keywords) {
      raw.push({ phrase, slug, kind: "trade", label: phrase });
    }
  }

  // Dedup by lower-cased phrase. Wiki wins ties because it appears first.
  const seen = new Set<string>();
  const dedup: Raw[] = [];
  for (const entry of raw) {
    const key = entry.phrase.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    dedup.push(entry);
  }

  return dedup
    .sort((a, b) => b.phrase.length - a.phrase.length)
    .map((e) => ({
      pattern: makePattern(e.phrase),
      slug: e.slug,
      kind: e.kind,
      label: e.label,
    }));
}

const KEYWORD_LIST = buildKeywordList();

interface Props {
  text: string;
  className?: string;
  /** Wiki slug to skip - used on wiki pages to avoid self-linking. */
  excludeSlug?: string;
}

/**
 * Renders a paragraph with wiki-term and trade-name keywords inline-linked
 * to their respective pages. Links only the first occurrence of each
 * unique slug per block. Trade links go to /fagomrader/<slug>; wiki links
 * go to /wiki/<slug>.
 */
export default function WikiLinkedText({ text, className, excludeSlug }: Props) {
  const linkedKeys = new Set<string>();
  if (excludeSlug) linkedKeys.add(`wiki:${excludeSlug}`);

  const parts: {
    start: number;
    end: number;
    slug: string;
    kind: LinkKind;
    match: string;
  }[] = [];

  for (const { pattern, slug, kind } of KEYWORD_LIST) {
    const key = `${kind}:${slug}`;
    if (linkedKeys.has(key)) continue;
    pattern.lastIndex = 0;
    const m = pattern.exec(text);
    if (!m) continue;
    const start = m.index;
    const end = start + m[0].length;
    const overlaps = parts.some((p) => start < p.end && end > p.start);
    if (overlaps) continue;
    parts.push({ start, end, slug, kind, match: m[0] });
    linkedKeys.add(key);
  }

  if (parts.length === 0) {
    return <p className={className}>{text}</p>;
  }

  parts.sort((a, b) => a.start - b.start);

  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const part of parts) {
    if (part.start > cursor) {
      nodes.push(text.slice(cursor, part.start));
    }
    const href =
      part.kind === "trade" ? `/fagomrader/${part.slug}` : `/wiki/${part.slug}`;
    nodes.push(
      <Link
        key={`${part.kind}-${part.start}`}
        to={href}
        className="text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
      >
        {part.match}
      </Link>,
    );
    cursor = part.end;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <p className={className}>{nodes}</p>;
}
