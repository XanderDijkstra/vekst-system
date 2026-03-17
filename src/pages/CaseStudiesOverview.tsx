import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const cases = [
  { title: "Offerte automatisering voor aannemer", slug: "offerte-automatisering-aannemer", result: "10 uur per week bespaard" },
  { title: "Planning systeem voor installatiebedrijf", slug: "planning-systeem-installatiebedrijf", result: "30% efficiëntere planning" },
  { title: "CRM implementatie voor bouwbedrijf", slug: "crm-implementatie-bouwbedrijf", result: "50% snellere klantopvolging" },
];

const CaseStudiesOverview = () => (
  <PageShell>
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Case Studies</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Case Studies</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Ontdek hoe andere aannemers hun bedrijf hebben getransformeerd met onze systemen.
        </motion.p>
      </div>
    </section>
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
            >
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm font-medium text-accent tabular-nums">{c.result}</p>
              <p className="mt-2 text-sm text-muted-foreground">Lees meer →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default CaseStudiesOverview;
