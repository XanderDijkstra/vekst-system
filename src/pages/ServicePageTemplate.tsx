import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fadeInUp, systemEase } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageShell from "@/components/PageShell";
import type { ServicePageData } from "@/data/servicePages";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { SITE_URL, SITE_NAME, OG_IMAGE_URL, TWITTER_HANDLE } from "@/lib/seo";

interface Props {
  data: ServicePageData;
}

// Service pages link via `trade` slug to their matching online-marketing article.
// Handles slug mismatches between trade-data and kennisbank article slugs.
const TRADE_TO_ARTICLE_SLUG: Record<string, string> = {
  "flyttefirma": "online-marketing-verhuizers",
  "varmepumpe-installasjon": "online-marketing-warmtepomp-installateurs",
  "fyrmontering": "online-marketing-cv-monteurs",
  "solcellepaneler": "online-marketing-zonnepanelen-installateurs",
  "belegning": "online-marketing-stratenmakers",
  "gulvlegger": "online-marketing-vloerleggers",
  "murerarbeid": "online-marketing-metselaars",
  "fugearbeid": "online-marketing-voegbedrijven",
  "karmer-vinduer": "online-marketing-kozijnmonteurs",
  "trappeheis-hjemmeheis": "online-marketing-trapliften",
};

const ServicePageTemplate = ({ data: d }: Props) => {
  const pageUrl = `${SITE_URL}/${d.slug}`;
  const articleSlug = TRADE_TO_ARTICLE_SLUG[d.trade] ?? `online-marketing-${d.trade}`;
  const marketingArticle = kennisbankArticles.find((a) => a.slug === articleSlug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Profesjonell nettside for ${d.tradeName.charAt(0).toUpperCase() + d.tradeName.slice(1)}`,
    provider: {
      "@type": "Organization",
      name: "Vekst Systemet",
      url: SITE_URL,
      telephone: "+4740185596",
      email: "info@vekst-systemet.no",
    },
    description: d.metaDescription,
    areaServed: { "@type": "Country", name: "Norge" },
    offers: {
      "@type": "Offer",
      price: "2990",
      priceCurrency: "NOK",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2990",
        priceCurrency: "NOK",
        unitText: "måned",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Fagområder", item: `${SITE_URL}/fagomrader` },
      {
        "@type": "ListItem",
        position: 3,
        name: d.tradeName.charAt(0).toUpperCase() + d.tradeName.slice(1),
        item: `${SITE_URL}/fagomrader/${d.trade}`,
      },
      { "@type": "ListItem", position: 4, name: `Nettsider`, item: pageUrl },
    ],
  };

  return (
    <PageShell>
      <Helmet>
        <title>{d.metaTitle} | Vekst Systemet</title>
        <meta name="description" content={d.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={d.metaTitle} />
        <meta property="og:description" content={d.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={d.metaTitle} />
        <meta name="twitter:description" content={d.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

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
            transition={{ duration: 0.4, ease: systemEase, delay: 0.05 }}
            className="mx-auto max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground leading-[1.1]"
          >
            {d.hero.headline}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
          >
            {d.hero.subheadline}
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to={`/fagomrader/${d.trade}`}>
                Se {d.tradeName}-siden
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {d.hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: 0.2 + i * 0.05 }}
                className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent tabular-nums">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Kjenner du deg igjen?
          </motion.p>
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
            {d.problems.sectionTitle}
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.problems.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-system-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-destructive" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Hva vi bygger
          </motion.p>
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
            {d.features.sectionTitle}
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {d.features.intro}
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.features.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="bg-background rounded-2xl p-6 shadow-system-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE PAGES ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Sider vi bygger
          </motion.p>
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
            {d.examplePages.sectionTitle}
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {d.examplePages.pages.map((page, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.03 }}
                className="flex items-center gap-3 rounded-xl bg-card border border-border p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{page}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CONTENT ── */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {d.industryContent.sectionTitle}
          </motion.h2>
          <div className="mt-8 space-y-6">
            {d.industryContent.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="text-muted-foreground leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
            Ofte stilte spørsmål
          </motion.h2>
          <Accordion type="multiple" className="space-y-3">
            {d.faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              >
                <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── KENNISBANK CROSS-LINK ── */}
      {marketingArticle && (
        <section className="py-12 bg-card">
          <div className="container max-w-4xl text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Les mer om markedsføring for {d.tradeName}
            </p>
            <h3 className="text-2xl font-bold text-foreground">
              {marketingArticle.title}
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              {marketingArticle.description}
            </p>
            <div className="mt-6">
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Link to={`/kunnskapsbank/${marketingArticle.slug}`}>
                  Les artikkelen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground max-w-2xl mx-auto"
          >
            {d.cta.headline}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            {d.cta.subheadline}
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill en gratis demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/priser">Se priser</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServicePageTemplate;
