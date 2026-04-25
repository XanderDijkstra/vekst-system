import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { wikiTerms, wikiCategories } from "@/data/wikiTerms";
import { ArrowRight, BookOpen } from "lucide-react";

const SITE_URL = "https://www.vekst-systemet.no";

const WikiOverview = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wiki | Markedsføringsbegreper for håndverkere | Vekst Systemet",
    url: `${SITE_URL}/wiki`,
    description:
      "Alle markedsførings- og digitale termer forklart på vanlig norsk. Spesielt for håndverkere som vil forstå hvordan nettmarkedsføring fungerer.",
    inLanguage: "nb-NO",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Wiki", item: `${SITE_URL}/wiki` },
      ],
    },
    mainEntity: {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/wiki#set`,
      name: "Vekst Systemet Wiki",
      url: `${SITE_URL}/wiki`,
      hasDefinedTerm: wikiTerms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term.replace(/\s*\(.*?\)\s*/g, "").trim(),
        description: t.shortDescription,
        url: `${SITE_URL}/wiki/${t.slug}`,
      })),
    },
  };

  return (
  <PageShell>
    <Helmet>
      <title>Wiki | Markedsføringsbegreper for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Alle markedsførings- og digitale termer forklart på vanlig norsk. Spesielt for håndverkere som vil forstå hvordan nettmarkedsføring fungerer."
      />
      <link rel="canonical" href={`${SITE_URL}/wiki`} />
      <meta property="og:title" content="Wiki | Markedsføringsbegreper for håndverkere" />
      <meta
        property="og:description"
        content="Alle markedsførings- og digitale termer forklart på vanlig norsk."
      />
      <meta property="og:url" content={`${SITE_URL}/wiki`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
          Markedsføringsbegreper,{" "}
          <span className="text-accent">forklart enkelt</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          SEO, leads, konvertering - du hører det overalt, men hva betyr det egentlig?
          Vi forklarer de viktigste begrepene på normalt norsk. Ingen fagsjargong,
          bare tydelig.
        </motion.p>
      </div>
    </section>

    {/* Terms by category */}
    {wikiCategories.length > 0 ? (
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
                        Les forklaring <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    ) : (
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Wiki kommer snart</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vi bygger opp ordlisten vår med markedsføringsbegreper forklart for
            håndverkere. Kom tilbake snart.
          </p>
        </div>
      </section>
    )}
  </PageShell>
  );
};

export default WikiOverview;
