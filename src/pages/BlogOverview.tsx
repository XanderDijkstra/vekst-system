import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { ArrowRight } from "lucide-react";
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

const sortedArticles = [...kennisbankArticles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const BlogOverview = () => (
  <PageShell>
    <Helmet>
      <title>Tips & triks | Vekst Systemet</title>
      <meta name="description" content="Praktiske tips om markedsføring, automatisering og å få flere kunder som håndverker." />
      <link rel="canonical" href={`${SITE_URL}/blogg`} />
      <meta property="og:title" content="Tips & triks | Vekst Systemet" />
      <meta property="og:description" content="Praktiske tips om markedsføring, automatisering og å få flere kunder som håndverker." />
      <meta property="og:url" content={`${SITE_URL}/blogg`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Blogg</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Tips & triks</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Praktiske tips om markedsføring, automatisering og å få flere kunder som håndverker.
        </motion.p>
      </div>
    </section>

    {/* All articles */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {sortedArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((a) => (
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
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Artikler kommer snart</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vi bygger opp bloggen vår med praktiske tips for håndverkere. Kom tilbake snart.
            </p>
          </div>
        )}
      </div>
    </section>
  </PageShell>
);

export default BlogOverview;
