import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { wikiTerms, wikiCategories } from "@/data/wikiTerms";
import { ArrowRight, BookOpen } from "lucide-react";

const SITE_URL = "https://aannemersysteem.com";

const WikiOverview = () => (
  <PageShell>
    <Helmet>
      <title>Wiki | Marketing begrippen voor aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Alle marketing- en digitale termen uitgelegd in gewoon Nederlands. Speciaal voor aannemers die willen begrijpen hoe online marketing werkt."
      />
      <link rel="canonical" href={`${SITE_URL}/wiki`} />
      <meta property="og:title" content="Wiki | Marketing begrippen voor aannemers" />
      <meta
        property="og:description"
        content="Alle marketing- en digitale termen uitgelegd in gewoon Nederlands."
      />
      <meta property="og:url" content={`${SITE_URL}/wiki`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
          <BookOpen className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Wiki</span>
        </motion.div>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Marketing begrippen,{" "}
          <span className="text-accent">gewoon uitgelegd</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          SEO, leads, conversie - je hoort het overal, maar wat betekent het
          eigenlijk? Wij leggen de belangrijkste termen uit in normaal Nederlands.
          Geen vakjargon, gewoon duidelijk.
        </motion.p>
      </div>
    </section>

    {/* Terms by category */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {wikiCategories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <motion.h2
              {...fadeInUp}
              className="text-sm font-bold uppercase tracking-widest text-accent mb-6"
            >
              {category}
            </motion.h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {wikiTerms
                .filter((t) => t.category === category)
                .map((term) => (
                  <Link
                    key={term.slug}
                    to={`/wiki/${term.slug}`}
                    className="group flex flex-col bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
                  >
                    <h3 className="font-semibold text-foreground text-lg leading-snug">
                      {term.term}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {term.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Lees uitleg <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default WikiOverview;
