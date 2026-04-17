import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { fadeInUp, systemEase } from "@/lib/animations";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://aannemersysteem.com";

const comparisons = [
  {
    slug: "werkspot-alternatief",
    title: "Werkspot alternatief",
    description:
      "Stoppen met betalen per lead? Vergelijk Werkspot met een eigen website - wat levert meer op voor jouw bouwbedrijf?",
    tag: "Werkspot vs Eigen Systeem",
  },
  {
    slug: "bouwnu-alternatief",
    title: "Bouwnu alternatief",
    description:
      "Bouwnu werkt met credits - je betaalt voor elke lead die je inziet. Vergelijk Bouwnu en een eigen website naast elkaar.",
    tag: "Bouwnu vs Eigen Systeem",
  },
  {
    slug: "offerteadviseur-alternatief",
    title: "Offerteadviseur alternatief",
    description:
      "Offerteadviseur zet je tegenover 3–5 andere aannemers in een prijzenoorlog. Lees hoe een eigen website dit doorbreekt.",
    tag: "Offerteadviseur vs Eigen Systeem",
  },
  {
    slug: "homedeal-alternatief",
    title: "Homedeal alternatief",
    description:
      "Homedeal deelt elke lead met meerdere aannemers en de kosten stijgen jaarlijks. Vergelijk Homedeal met een eigen website.",
    tag: "Homedeal vs Eigen Systeem",
  },
  {
    slug: "instapro-alternatief",
    title: "Instapro alternatief",
    description:
      "Instapro werkt met credits per lead en een standaard profiel. Lees waarom een eigen website meer oplevert zonder credits.",
    tag: "Instapro vs Eigen Systeem",
  },
  {
    slug: "zoofy-alternatief",
    title: "Zoofy alternatief",
    description:
      "Zoofy bepaalt je tarief en neemt 15-30% commissie. Vergelijk het commissie-model met eigen leads via Google.",
    tag: "Zoofy vs Eigen Systeem",
  },
  {
    slug: "lokale-leads-genereren",
    title: "Beste manieren om lokale leads te genereren",
    description:
      "Website, Google Mijn Bedrijf, Google Ads, Werkspot, social media - welk kanaal levert de meeste lokale leads op voor aannemers?",
    tag: "Kanalen vergelijken",
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads voor aannemers",
    description:
      "Betaal je per klik of bouw je een fundament dat gratis blijft opleveren? Kosten, snelheid en rendement naast elkaar.",
    tag: "SEO vs Ads",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Vergelijkingen | Aannemer Systeem",
  url: `${SITE_URL}/vergelijk`,
  description:
    "Eerlijke vergelijkingen tussen marketing kanalen en platforms voor aannemers. Werkspot, Google Ads, Google Mijn Bedrijf en eigen website naast elkaar.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE_URL}/vergelijk/${c.slug}`,
    })),
  },
};

const VergelijkOverview = () => (
  <PageShell>
    <Helmet>
      <title>Vergelijkingen | Aannemer Systeem</title>
      <meta
        name="description"
        content="Eerlijke vergelijkingen tussen marketing kanalen en platforms voor aannemers. Werkspot, Google Ads, Google Mijn Bedrijf en eigen website naast elkaar."
      />
      <link rel="canonical" href={`${SITE_URL}/vergelijk`} />
      <meta property="og:title" content="Vergelijkingen | Aannemer Systeem" />
      <meta
        property="og:description"
        content="Eerlijke vergelijkingen tussen marketing kanalen en platforms voor aannemers."
      />
      <meta property="og:url" content={`${SITE_URL}/vergelijk`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container text-center">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Vergelijkingen
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto"
        >
          Eerlijk vergelijken voor je kiest
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed"
        >
          Geen verkooppraatjes - alleen naast elkaar zetten. Wat werkt écht om
          meer klanten te krijgen als aannemer?
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
                to={`/vergelijk/${c.slug}`}
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
                  Bekijk vergelijking
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Mis je een vergelijking? Laat het ons weten - we voegen het graag toe.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Suggestie insturen</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default VergelijkOverview;
