import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Globe,
  ShieldCheck,
  Eye,
  MousePointerClick,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp } from "@/lib/animations";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/tools/marketing-scan`;

interface Finding {
  status: "good" | "warning" | "error";
  label: string;
  detail: string;
}

interface Category {
  name: string;
  score: number;
  findings: Finding[];
}

interface ScanResult {
  score: number;
  summary: string;
  categories: Category[];
  topActions: string[];
  signals: Record<string, unknown>;
}

const CATEGORY_ICONS: Record<string, typeof Search> = {
  Vindbaarheid: Search,
  Technisch: ShieldCheck,
  Vertrouwen: Eye,
  Conversie: MousePointerClick,
};

const STATUS_CONFIG = {
  good: { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  warning: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10" },
  error: { icon: XCircle, color: "text-red-500", bg: "bg-red-500/10" },
};

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 70 ? "stroke-emerald-500" : score >= 40 ? "stroke-amber-500" : "stroke-red-500";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={6} className="text-border" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={6}
          strokeLinecap="round"
          className={color}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <span className="absolute text-3xl font-bold text-foreground tabular-nums">{score}</span>
    </div>
  );
}

const MarketingScan = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const resp = await fetch("/api/marketing-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) throw new Error(data.error || "Scan mislukt");
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gratis Marketing Scan voor Aannemers",
    url: PAGE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description:
      "Scan je aannemer-website en krijg direct een rapport met verbeterpunten voor vindbaarheid, techniek, vertrouwen en conversie.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Marketing Scan", item: PAGE_URL },
      ],
    },
  };

  return (
    <PageShell>
      <Helmet>
        <title>Gratis Marketing Scan voor Aannemers | {SITE_NAME}</title>
        <meta
          name="description"
          content="Scan je website en krijg direct een gratis rapport: vindbaarheid, techniek, vertrouwen en conversie. Speciaal voor aannemers en bouwbedrijven."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Gratis Marketing Scan voor Aannemers" />
        <meta
          property="og:description"
          content="Scan je website en krijg direct een gratis rapport met verbeterpunten."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>

      {/* Hero + Form */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Gratis tool
          </motion.p>
          <motion.h1
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Hoe scoort jouw aannemer-website?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
            Vul je website-URL in en krijg binnen 30 seconden een gratis rapport met
            concrete verbeterpunten — speciaal voor aannemers en bouwbedrijven.
          </motion.p>

          <motion.form
            {...fadeInUp}
            onSubmit={handleScan}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="www.jouwbedrijf.nl"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-10 h-12 bg-white text-foreground border-0"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading || !url.trim()}
              className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Scannen…
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Scan mijn website
                </>
              )}
            </Button>
          </motion.form>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-300"
            >
              {error}
            </motion.p>
          )}
        </div>
      </section>

      {/* Loading state */}
      <AnimatePresence>
        {loading && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 bg-background"
          >
            <div className="container max-w-md text-center">
              <Loader2 className="h-10 w-10 animate-spin text-accent mx-auto" />
              <p className="mt-6 text-lg font-medium text-foreground">Je website wordt gescand…</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We analyseren vindbaarheid, techniek, vertrouwen en conversie. Dit duurt 10–30 seconden.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 md:py-24 bg-background"
          >
            <div className="container max-w-4xl">
              {/* Overall score */}
              <motion.div
                {...fadeInUp}
                className="text-center mb-16"
              >
                <ScoreRing score={result.score} size={140} />
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Score: {result.score}/100
                </h2>
                <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
                  {result.summary}
                </p>
              </motion.div>

              {/* Top actions */}
              {result.topActions?.length > 0 && (
                <motion.div
                  {...fadeInUp}
                  className="mb-12 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Top 3 verbeterpunten
                  </h3>
                  <ol className="space-y-3">
                    {result.topActions.map((action, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed pt-0.5">{action}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )}

              {/* Category breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.categories?.map((cat, ci) => {
                  const Icon = CATEGORY_ICONS[cat.name] || Search;
                  return (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.1 }}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <h3 className="font-semibold text-foreground">{cat.name}</h3>
                        </div>
                        <span
                          className={`text-sm font-bold tabular-nums ${
                            cat.score >= 70
                              ? "text-emerald-500"
                              : cat.score >= 40
                              ? "text-amber-500"
                              : "text-red-500"
                          }`}
                        >
                          {cat.score}/100
                        </span>
                      </div>
                      <div className="space-y-3">
                        {cat.findings?.map((f, fi) => {
                          const cfg = STATUS_CONFIG[f.status];
                          const StatusIcon = cfg.icon;
                          return (
                            <div key={fi} className={`flex gap-3 rounded-lg ${cfg.bg} p-3`}>
                              <StatusIcon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${cfg.color}`} />
                              <div>
                                <p className="text-sm font-medium text-foreground">{f.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                  {f.detail}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA after results */}
              <motion.div
                {...fadeInUp}
                className="mt-16 rounded-2xl bg-primary p-8 md:p-12 text-center"
              >
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Wil je deze punten laten fixen?
                </h3>
                <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
                  Wij bouwen websites en marketing-systemen specifiek voor aannemers.
                  Plan een gratis gesprek en we lopen je rapport samen door.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link to="/demo">
                    Plan een gratis gesprek
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* SEO explainer (always visible, below results or below form) */}
      {!loading && !result && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-3xl">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Wat scant deze tool?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: Search,
                    title: "Vindbaarheid (SEO)",
                    desc: "Title tag, meta description, h1, canonical URL, structured data — alles wat Google nodig heeft.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Technisch",
                    desc: "HTTPS, mobiel-vriendelijk, afbeeldingen met alt-tekst, viewport instellingen.",
                  },
                  {
                    icon: Eye,
                    title: "Vertrouwen",
                    desc: "Telefoonnummer, e-mailadres, KVK-nummer, WhatsApp — signalen die bezoekers overtuigen.",
                  },
                  {
                    icon: MousePointerClick,
                    title: "Conversie",
                    desc: "Contactformulier, klikbaar telefoonnummer, call-to-action — kan een bezoeker makkelijk actie ondernemen?",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <CtaSection />
    </PageShell>
  );
};

export default MarketingScan;
