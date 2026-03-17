import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://aannemersysteem.com";

const cases = [
  {
    title: "Offerte automatisering voor aannemer",
    slug: "offerte-automatisering-aannemer",
    result: "10 uur per week bespaard",
    relatedLinks: [
      { label: "Lead Follow-Up", href: "/diensten/lead-follow-up" },
      { label: "Automatisering Bouwbedrijf", href: "/diensten/automatisering-bouwbedrijf" },
    ],
  },
  {
    title: "Van 0 naar 80+ Google reviews in 3 maanden",
    slug: "review-systeem-installatiebedrijf",
    result: "80+ Google reviews",
    relatedLinks: [
      { label: "Review Systeem", href: "/diensten/review-funnel" },
      { label: "Marketing Campagnes", href: "/diensten/marketing-campagnes" },
    ],
  },
  {
    title: "CRM en lead-opvolging voor bouwbedrijf",
    slug: "crm-implementatie-bouwbedrijf",
    result: "50% snellere klantopvolging",
    relatedLinks: [
      { label: "All-in-One Inbox", href: "/diensten/all-in-one-inbox" },
      { label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie" },
      { label: "Lead Generatie Website", href: "/diensten/lead-generatie" },
    ],
  },
];

const CaseStudiesOverview = () => (
  <PageShell>
    <Helmet>
      <title>Case Studies | Aannemer Systeem</title>
      <meta name="description" content="Ontdek hoe andere aannemers hun bedrijf hebben getransformeerd met onze digitale systemen en automatisering." />
      <link rel="canonical" href={`${SITE_URL}/case-studies`} />
      <meta property="og:title" content="Case Studies | Aannemer Systeem" />
      <meta property="og:description" content="Ontdek hoe andere aannemers hun bedrijf hebben getransformeerd met onze digitale systemen." />
      <meta property="og:url" content={`${SITE_URL}/case-studies`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>
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
            <div
              key={c.slug}
              className="group bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease flex flex-col"
            >
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm font-medium text-accent tabular-nums">{c.result}</p>

              {c.relatedLinks.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2">
                  {c.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="inline-flex items-center gap-1 rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default CaseStudiesOverview;
