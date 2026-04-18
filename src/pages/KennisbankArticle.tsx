import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Clock, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import WikiLinkedText from "@/components/WikiLinkedText";
import authorImg from "@/assets/xander-dijkstra.png";
import { SITE_URL, SITE_NAME, OG_IMAGE_URL, TWITTER_HANDLE } from "@/lib/seo";

const KennisbankArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = kennisbankArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageShell>
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground">Artikkel ikke funnet</h1>
            <p className="mt-4 text-muted-foreground">Denne artikkelen finnes ikke eller er flyttet.</p>
            <Button asChild className="mt-8">
              <Link to="/kennisbank">Tilbake til kunnskapsbank</Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const currentIndex = kennisbankArticles.findIndex((a) => a.slug === slug);
  const nextArticle = kennisbankArticles[currentIndex + 1];
  const prevArticle = kennisbankArticles[currentIndex - 1];

  const canonicalUrl = `${SITE_URL}/kennisbank/${article.slug}`;
  const wordCount = article.sections.reduce((sum, s) => sum + s.body.split(" ").length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: canonicalUrl,
    datePublished: article.date,
    dateModified: article.date,
    wordCount,
    articleSection: article.category,
    inLanguage: "nb",
    image: OG_IMAGE_URL,
    author: { "@type": "Person", name: "Xander Dijkstra" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Kunnskapsbank", item: `${SITE_URL}/kennisbank` },
        { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
      ],
    },
  };

  return (
    <PageShell>
      <Helmet>
        <title>{article.title} | Kunnskapsbank | Vekst Systemet</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content="Xander Dijkstra" />
        <meta property="article:section" content={article.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container max-w-3xl">
          <Link to="/kennisbank" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Kunnskapsbank
          </Link>
          <motion.span {...fadeInUp} className="block text-xs font-bold uppercase tracking-widest text-accent mb-4">
            {article.category}
          </motion.span>
          <motion.h1 {...fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground leading-tight">
            {article.title}
          </motion.h1>
          <motion.div {...fadeInUp} className="mt-6 flex items-center gap-4">
            <img src={authorImg} alt="Xander Dijkstra" className="h-10 w-10 rounded-full object-cover border-2 border-primary-foreground/20" />
            <div>
              <p className="text-sm font-medium text-primary-foreground">Xander Dijkstra</p>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(article.date).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime} lesetid
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {article.description}
          </p>

          <div className="space-y-12">
            {article.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                <WikiLinkedText text={section.body} className="text-muted-foreground leading-relaxed" />
              </motion.div>
            ))}
          </div>

          {/* Related services */}
          {article.relatedLinks.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Relaterte tjenester</h3>
              <div className="flex flex-wrap gap-3">
                {article.relatedLinks.map((link) => (
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
            <h3 className="text-2xl font-bold text-primary-foreground">Klar til å starte?</h3>
            <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
              Se hvordan vi kan hjelpe håndverkerbedriften din med automatisering og digitalisering.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">Bestill en gratis demo</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            {prevArticle ? (
              <Link to={`/kennisbank/${prevArticle.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{prevArticle.title}</span>
                <span className="sm:hidden">Forrige</span>
              </Link>
            ) : <div />}
            {nextArticle ? (
              <Link to={`/kennisbank/${nextArticle.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
                <span className="hidden sm:inline">{nextArticle.title}</span>
                <span className="sm:hidden">Neste</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default KennisbankArticle;
