import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const SITE_URL = "https://aannemersysteem.com";
const categories = [...new Set(kennisbankArticles.map((a) => a.category))];

const KennisbankOverview = () => (
  <PageShell>
    <Helmet>
      <title>Kennisbank | Aannemer Systeem</title>
      <meta name="description" content="Praktische artikelen over digitalisering, marketing en automatisering in de bouwsector. Leer hoe je meer klanten aantrekt." />
      <link rel="canonical" href={`${SITE_URL}/kennisbank`} />
      <meta property="og:title" content="Kennisbank | Aannemer Systeem" />
      <meta property="og:description" content="Praktische artikelen over digitalisering, marketing en automatisering in de bouwsector." />
      <meta property="og:url" content={`${SITE_URL}/kennisbank`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Kennisbank</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Kennisbank</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Praktische artikelen over digitalisering, marketing en automatisering in de bouwsector.
        </motion.p>
      </div>
    </section>
    {/* Wiki banner */}
    <section className="py-12 md:py-16 bg-muted/40 border-b border-border">
      <div className="container">
        <Link
          to="/wiki"
          className="group flex items-center justify-between rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-0.5 transition-all duration-250 ease-system-ease"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground text-lg">Marketing Wiki</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">
                SEO, leads, conversie — wat betekent het allemaal? Alle marketing begrippen uitgelegd in gewoon Nederlands.
              </p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
        </Link>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kennisbankArticles.map((a) => (
            <Link
              key={a.slug}
              to={`/kennisbank/${a.slug}`}
              className="group flex flex-col bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
            >
              <span className="inline-block self-start text-xs font-bold uppercase tracking-widest text-accent mb-3">
                {a.category}
              </span>
              <h3 className="font-semibold text-foreground text-lg leading-snug">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {a.readTime}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Lees meer <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default KennisbankOverview;
