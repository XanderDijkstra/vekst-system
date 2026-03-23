import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { wikiTerms } from "@/data/wikiTerms";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://aannemersysteem.com";

const WikiTerm = () => {
  const { slug } = useParams<{ slug: string }>();
  const term = wikiTerms.find((t) => t.slug === slug);

  if (!term) {
    return (
      <PageShell>
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground">Term niet gevonden</h1>
            <p className="mt-4 text-muted-foreground">
              Deze term bestaat niet of is verplaatst.
            </p>
            <Button asChild className="mt-8">
              <Link to="/wiki">Terug naar wiki</Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const relatedWikiTerms = wikiTerms.filter((t) =>
    term.relatedTerms.includes(t.slug)
  );

  const canonicalUrl = `${SITE_URL}/wiki/${term.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDescription,
    url: canonicalUrl,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Marketing Wiki voor Aannemers",
      url: `${SITE_URL}/wiki`,
    },
  };

  return (
    <PageShell>
      <Helmet>
        <title>{term.term} | Wiki | Aannemer Systeem</title>
        <meta name="description" content={term.shortDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${term.term} — uitgelegd voor aannemers`} />
        <meta property="og:description" content={term.shortDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container max-w-3xl">
          <Link
            to="/wiki"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Wiki
          </Link>
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              {term.category}
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground leading-tight"
          >
            {term.term}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            {term.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {term.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Related wiki terms */}
          {relatedWikiTerms.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Gerelateerde termen
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedWikiTerms.map((rt) => (
                  <Link
                    key={rt.slug}
                    to={`/wiki/${rt.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    {rt.term}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related services */}
          {term.relatedLinks.length > 0 && (
            <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Gerelateerde diensten
              </h3>
              <div className="flex flex-wrap gap-3">
                {term.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-primary p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground">
              Klaar om te starten?
            </h3>
            <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
              Ontdek hoe wij jouw aannemersbedrijf kunnen helpen met automatisering
              en digitalisering.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/demo">Plan een gratis demo</Link>
            </Button>
          </div>

          {/* Back to wiki */}
          <div className="mt-12 border-t border-border pt-8">
            <Link
              to="/wiki"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar alle begrippen
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default WikiTerm;
