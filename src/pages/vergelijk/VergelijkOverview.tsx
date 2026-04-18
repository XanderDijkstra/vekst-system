import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { fadeInUp, systemEase } from "@/lib/animations";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://vekst-systemet.no";

const comparisons = [
  {
    slug: "werkspot-alternatief",
    title: "Mittanbud-alternativ",
    description:
      "Slutt å betale per lead? Sammenlign Mittanbud med din egen nettside - hva gir mest tilbake for håndverkerbedriften din?",
    tag: "Mittanbud vs eget system",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Sammenligninger | Vekst Systemet",
  url: `${SITE_URL}/sammenlign`,
  description:
    "Ærlige sammenligninger mellom markedsføringskanaler og plattformer for håndverkere. Mittanbud, Google Ads, Google My Business og egen nettside side om side.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE_URL}/sammenlign/${c.slug}`,
    })),
  },
};

const VergelijkOverview = () => (
  <PageShell>
    <Helmet>
      <title>Sammenligninger | Vekst Systemet</title>
      <meta
        name="description"
        content="Ærlige sammenligninger mellom markedsføringskanaler og plattformer for håndverkere. Mittanbud, Google Ads, Google My Business og egen nettside side om side."
      />
      <link rel="canonical" href={`${SITE_URL}/sammenlign`} />
      <meta property="og:title" content="Sammenligninger | Vekst Systemet" />
      <meta
        property="og:description"
        content="Ærlige sammenligninger mellom markedsføringskanaler og plattformer for håndverkere."
      />
      <meta property="og:url" content={`${SITE_URL}/sammenlign`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container text-center">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Sammenligninger
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto"
        >
          Sammenlign ærlig før du velger
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed"
        >
          Ingen salgspitcher - bare en nøktern sammenligning. Hva fungerer
          faktisk for å få flere kunder som håndverker?
        </motion.p>
      </div>
    </section>

    {/* Comparisons grid */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.slug}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
            >
              <Link
                to={`/sammenlign/${c.slug}`}
                className="group block rounded-2xl bg-card border border-border p-8 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5">
                  <Scale className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {c.tag}
                </p>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {c.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                  Se sammenligningen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Mangler du en sammenligning? Si fra - vi legger den gjerne til.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/kontakt">Send forslag</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default VergelijkOverview;
