import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, systemEase } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageShell from "@/components/PageShell";
import type { TradeData } from "@/data/tradePages";

interface TradePageTemplateProps {
  data: TradeData;
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function injectJsonLd(id: string, data: object) {
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}
const SITE_URL = "https://groei-systeem.com";



const TradePageTemplate = ({ data: d }: TradePageTemplateProps) => {
  // SEO: Set document title, meta, canonical, OG, and JSON-LD schemas
  useEffect(() => {
    const pageUrl = `${SITE_URL}/voor-${d.slug}`;

    // Title
    document.title = d.metaTitle;

    // Meta description
    setMeta("description", d.metaDescription);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    // Open Graph
    setMeta("og:title", d.metaTitle, true);
    setMeta("og:description", d.metaDescription, true);
    setMeta("og:url", pageUrl, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:title", d.metaTitle);
    setMeta("twitter:description", d.metaDescription);

    // JSON-LD: FAQPage
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };

    // JSON-LD: Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Website & Marketing Systeem voor ${d.plural.charAt(0).toUpperCase() + d.plural.slice(1)}`,
      provider: {
        "@type": "Organization",
        name: "Groei Systeem",
        url: SITE_URL,
        telephone: "+4740185596",
        email: "info@groei-systeem.com",
      },
      description: `Complete marketing systeem voor ${d.bedrijf}en: website, lokale SEO, reviews automatisering en lead opvolging.`,
      areaServed: { "@type": "Country", name: "Nederland" },
      offers: {
        "@type": "Offer",
        price: "279",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "279",
          priceCurrency: "EUR",
          unitText: "maand",
        },
      },
    };

    // JSON-LD: BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `Voor ${d.plural.charAt(0).toUpperCase() + d.plural.slice(1)}`, item: pageUrl },
      ],
    };

    injectJsonLd("faq-schema", faqSchema);
    injectJsonLd("service-schema", serviceSchema);
    injectJsonLd("breadcrumb-schema", breadcrumbSchema);

    return () => {
      document.getElementById("faq-schema")?.remove();
      document.getElementById("service-schema")?.remove();
      document.getElementById("breadcrumb-schema")?.remove();
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [d]);

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="container text-center">
          <motion.span
            {...fadeInUp}
            className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
          >
            {d.hero.badge}
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-4xl mx-auto"
          >
            {d.hero.headline}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
          >
            {d.hero.subheadline}
          </motion.p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {d.hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="rounded-2xl bg-card p-6 shadow-system-card"
              >
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to={d.cta.buttonUrl}>
                {d.cta.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="link" className="text-primary-foreground/80 hover:text-primary-foreground">
              <Link to="/diensten">Bekijk onze diensten →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.problems.sectionTitle}
          </motion.h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {d.problems.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="rounded-2xl bg-card p-6 shadow-system-card"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-sm font-bold text-destructive">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.solution.sectionTitle}
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {d.solution.intro}
          </motion.p>
          <div className="mt-12 space-y-6">
            {d.solution.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="rounded-2xl bg-card p-8 shadow-system-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-bold text-accent">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.keywords.map((kw, j) => (
                        <span key={j} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CONTENT (SEO body copy) ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.industryContent.sectionTitle}
          </motion.h2>
          <div className="mt-8 space-y-6">
            {d.industryContent.paragraphs.map((p, i) => (
              <motion.p key={i} {...fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.comparison.sectionTitle}
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4"></TableHead>
                  <TableHead>Werkspot / Platforms</TableHead>
                  <TableHead>Traditioneel Bureau</TableHead>
                  <TableHead className="text-accent font-semibold">Groei Systeem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {d.comparison.rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                    <TableCell className="text-muted-foreground">{row.werkspot}</TableCell>
                    <TableCell className="text-muted-foreground">{row.bureau}</TableCell>
                    <TableCell className="font-medium text-foreground bg-accent/5">{row.groeisysteem}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.results.sectionTitle}
          </motion.h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {d.results.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="rounded-2xl border-2 border-accent/20 bg-accent/5 p-6 text-center"
              >
                <div className="text-xl font-bold text-accent">{item.metric}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Veelgestelde vragen over marketing voor {d.plural}
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {d.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-system-card"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED TRADES (SEO interlinking) ── */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Ook voor andere vakgebieden
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {d.relatedTrades.map((trade, i) => (
              <Link
                key={i}
                to={`/voor-${trade.slug}`}
                className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Website voor {trade.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="bg-primary rounded-2xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground">
              {d.cta.headline}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
              {d.cta.subheadline}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link to={d.cta.buttonUrl}>
                  {d.cta.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default TradePageTemplate;
