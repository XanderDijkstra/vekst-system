

## Plan: SEO Trade Landing Pages

### What we're building
A reusable trade landing page template at `/voor-[slug]` (e.g., `/voor-schilders`, `/voor-dakdekkers`) with the full layout from the Claude template, restyled to match the existing Groei Systeem design system.

### Files to create/edit

**1. `src/data/tradePages.ts`** — All trade data configs
- Export the `TRADE_DATA` for "schilders" as the first complete config
- Export a `TRADES_LIST` array with slug + component mapping for all 15 trades (initially only schilders will have full content; others will use placeholder data with the same structure)
- Type definition for the trade data shape

**2. `src/pages/TradePageTemplate.tsx`** — The reusable template component
Sections adapted to our styling:

| Claude Section | Our Styling |
|---|---|
| Hero (`orange-50` gradient) | `bg-primary` with `text-primary-foreground`, badge uses `bg-accent` pill, stats in `bg-card shadow-system-card` cards |
| Problems (`gray-50` cards) | `bg-background` section, cards with `bg-card rounded-2xl shadow-system-card`, numbered circles use `bg-destructive/10 text-destructive` |
| Solution (`bg-gray-50`) | `bg-secondary` section, cards with `bg-card rounded-2xl shadow-system-card`, green numbered circles → `bg-accent/10 text-accent` |
| Industry Content | `bg-background`, prose styling with `text-muted-foreground` |
| Comparison Table | `bg-secondary`, use our `Table` components, highlight column with `bg-accent/10` |
| Results | `bg-background`, cards with `bg-accent/10 border-accent/20 text-accent` |
| FAQ | `bg-secondary`, use Radix `Accordion` component from our UI library |
| Related Trades | Links styled as `border-border hover:border-accent` pills |
| Final CTA | Reuse our `CtaSection` pattern (`bg-primary rounded-2xl` with accent button) |

All sections use `framer-motion` `fadeInUp` animations, `PageShell` wrapper, `Plus Jakarta Sans`, and our color tokens (`primary`, `accent`, `muted-foreground`, etc.).

Buttons use our `<Button>` component. Links use `react-router-dom` `<Link>`. FAQ uses our `<Accordion>` component instead of manual state.

**3. `src/pages/TradePageWrapper.tsx`** — Route handler
- Reads `:slug` from URL params
- Looks up trade data from `tradePages.ts`
- Renders `TradePageTemplate` with the data, or redirects to 404

**4. `src/App.tsx`** — Add route
- Add `<Route path="/voor-:slug" element={<TradePageWrapper />} />`

**5. `src/pages/VakgebiedenPage.tsx`** — Update links
- Link featured trade cards to `/voor-[slug]` where pages exist

**6. `src/components/home/TradesSection.tsx`** — Update links
- Link trade image cards to `/voor-[slug]`

### SEO additions
- Each page sets `document.title` and meta description via `useEffect`
- FAQPage + LocalBusiness JSON-LD schema injected via `<script type="application/ld+json">`

### Initial scope
- Full content for **schilders** (using the provided data)
- Template-based placeholder content for the other 14 trades (same structure, generic text that can be swapped later)
- All 15 routes registered

