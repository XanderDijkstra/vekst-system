import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const articles = [
  { title: "Automatisering voor bouwbedrijven: een praktische gids", slug: "automatisering-bouwbedrijf" },
  { title: "CRM voor aannemers: waarom en hoe", slug: "crm-voor-aannemers" },
  { title: "Planning software voor de bouw", slug: "planning-software-bouw" },
  { title: "Het offerte proces optimaliseren", slug: "offerte-proces-bouw" },
  { title: "AI voor bouwbedrijven: kansen en toepassingen", slug: "ai-voor-bouwbedrijven" },
];

const KennisbankOverview = () => (
  <PageShell>
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Kennisbank</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Kennisbank</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Praktische artikelen over digitalisering en automatisering in de bouwsector.
        </motion.p>
        <div className="mt-12 space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/kennisbank/${a.slug}`}
              className="block bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
            >
              <h3 className="font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Lees meer →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default KennisbankOverview;
