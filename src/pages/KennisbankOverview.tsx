import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { wikiTerms } from "@/data/wikiTerms";
import { ArrowRight, BookOpen, Lightbulb, Calculator } from "lucide-react";
import authorImg from "@/assets/xander-dijkstra.png";

const SITE_URL = "https://www.vekst-systemet.no";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const latestArticles = [...kennisbankArticles]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

const latestWikiTerms = [...wikiTerms]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

// Group all articles by category, sorted by article count (largest first).
const articlesByCategory = (() => {
  const map = new Map<string, typeof kennisbankArticles>();
  for (const a of kennisbankArticles) {
    const list = map.get(a.category) ?? [];
    list.push(a);
    map.set(a.category, list);
  }
  return Array.from(map.entries())
    .map(([category, articles]) => ({
      category,
      articles: [...articles].sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .sort((a, b) => b.articles.length - a.articles.length);
})();

const kennisbankSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Kunnskapsbank | Vekst Systemet",
  url: `${SITE_URL}/kunnskapsbank`,
  description: "Praktiske artikler om digitalisering, markedsføring og automatisering for håndverkere.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Kunnskapsbank", item: `${SITE_URL}/kunnskapsbank` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: kennisbankArticles.length,
    itemListElement: latestArticles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `${SITE_URL}/kunnskapsbank/${a.slug}`,
    })),
  },
};

const KennisbankOverview = () => (
  <PageShell>
    <Helmet>
      <title>Kunnskapsbank | Vekst Systemet</title>
      <meta name="description" content="Praktiske artikler om digitalisering, markedsføring og automatisering for håndverkere. Lær hvordan du tiltrekker flere kunder." />
      <link rel="canonical" href={`${SITE_URL}/kunnskapsbank`} />
      <meta property="og:title" content="Kunnskapsbank | Vekst Systemet" />
      <meta property="og:description" content="Praktiske artikler om digitalisering, markedsføring og automatisering for håndverkere." />
      <meta property="og:url" content={`${SITE_URL}/kunnskapsbank`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(kennisbankSchema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Kunnskapsbank</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Kunnskapsbank</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Praktiske artikler om digitalisering, markedsføring og automatisering for håndverkere.
        </motion.p>
      </div>
    </section>

    {/* Category blobs: Marketing Wiki + Tips & Tricks */}
    <section className="py-12 md:py-16 bg-muted/40 border-b border-border">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/wiki"
            className="group flex items-center justify-between rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-0.5 transition-all duration-250 ease-system-ease"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground text-lg">Markedsførings-wiki</h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">
                  SEO, leads, konvertering - hva betyr egentlig alt dette? Alle markedsføringsbegreper forklart på vanlig norsk.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
          </Link>

          <Link
            to="/blogg"
            className="group flex items-center justify-between rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-0.5 transition-all duration-250 ease-system-ease"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground text-lg">Tips & triks</h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Praktiske tips om markedsføring, automatisering og å få flere kunder som håndverker.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
          </Link>

          <Link
            to="/verktoy"
            className="group flex items-center justify-between rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-0.5 transition-all duration-250 ease-system-ease"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground text-lg">Kalkulatorer</h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Gratis kalkulatorer: beregn leadverdi, prosjektmargin og mer. Svar direkte, ingen registrering.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Latest blog articles */}
    {latestArticles.length > 0 && (
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Siste artikler
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/kunnskapsbank/${a.slug}`}
                className="group flex flex-col bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
              >
                <span className="inline-block self-start text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {a.category}
                </span>
                <h3 className="font-semibold text-foreground text-lg leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.description}</p>
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                  <img src={authorImg} alt="Xander Dijkstra" className="h-8 w-8 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground">Xander Dijkstra</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{formatDate(a.date)}</span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          {kennisbankArticles.length > 6 && (
            <div className="mt-10 text-center">
              <a
                href="#alle-artikelen"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Se alle {kennisbankArticles.length} artikler <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>
    )}

    {/* All articles by category */}
    {articlesByCategory.length > 0 && (
      <section id="alle-artikelen" className="py-20 md:py-28 bg-card scroll-mt-20">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Alle artikler per kategori
          </motion.h2>
          <motion.p {...fadeInUp} className="text-muted-foreground mb-10 max-w-2xl">
            {kennisbankArticles.length} artikler om markedsføring, SEO, nettside, strategi og fagområder for håndverkere.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articlesByCategory.map(({ category, articles }) => (
              <div key={category} className="bg-background rounded-2xl border border-border p-6">
                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-border">
                  <h3 className="text-base font-bold text-foreground">{category}</h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {articles.length} artikk{articles.length === 1 ? "el" : "ler"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        to={`/kunnskapsbank/${a.slug}`}
                        className="block text-sm leading-snug text-muted-foreground hover:text-accent transition-colors"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Empty state */}
    {kennisbankArticles.length === 0 && (
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Artikler kommer snart</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vi bygger opp kunnskapsbanken vår med praktiske artikler om markedsføring for
            håndverkere. Nye artikler publiseres regelmessig - kom tilbake snart.
          </p>
        </div>
      </section>
    )}

    {/* Latest wiki articles */}
    {latestWikiTerms.length > 0 && (
      <section className="py-20 md:py-28 bg-muted/40 border-t border-border">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Siste wiki-artikler
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestWikiTerms.map((t) => (
              <Link
                key={t.slug}
                to={`/wiki/${t.slug}`}
                className="group flex flex-col bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
              >
                <span className="inline-block self-start text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {t.category}
                </span>
                <h3 className="font-semibold text-foreground text-lg leading-snug">{t.term}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{t.shortDescription}</p>
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                  <img src={authorImg} alt="Xander Dijkstra" className="h-8 w-8 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground">Xander Dijkstra</p>
                    <span className="text-xs text-muted-foreground">{formatDate(t.date)}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/wiki"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Se alle wiki-artikler <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    )}
  </PageShell>
);

export default KennisbankOverview;
