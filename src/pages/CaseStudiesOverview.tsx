import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://vekst-systemet.no";

const cases = [
  {
    title: "Tilbudsautomatisering for håndverker",
    slug: "offerte-automatisering-aannemer",
    result: "10 timer i uken spart",
    relatedLinks: [
      { label: "Lead-oppfølging", href: "/tjenester/lead-oppfolging" },
      { label: "Automatisering for håndverkere", href: "/tjenester/automatisering" },
    ],
  },
  {
    title: "Fra 0 til 80+ Google-anmeldelser på 3 måneder",
    slug: "review-systeem-installatiebedrijf",
    result: "80+ Google-anmeldelser",
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
      { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
    ],
  },
  {
    title: "CRM og lead-oppfølging for håndverker",
    slug: "crm-implementatie-aannemer",
    result: "50 % raskere kundeoppfølging",
    relatedLinks: [
      { label: "Alt-i-én innboks", href: "/tjenester/alt-i-en-innboks" },
      { label: "Tapt anrop → SMS", href: "/tjenester/kundekommunikasjon" },
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
];

const CaseStudiesOverview = () => (
  <PageShell>
    <Helmet>
      <title>Kundecase | Vekst Systemet</title>
      <meta name="description" content="Se hvordan andre håndverkere har transformert bedriften sin med våre digitale systemer og automatisering." />
      <link rel="canonical" href={`${SITE_URL}/kundecase`} />
      <meta property="og:title" content="Kundecase | Vekst Systemet" />
      <meta property="og:description" content="Se hvordan andre håndverkere har transformert bedriften sin med våre digitale systemer." />
      <meta property="og:url" content={`${SITE_URL}/kundecase`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Kundecase</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Kundecase</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Se hvordan andre håndverkere har transformert bedriften sin med systemene våre.
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
