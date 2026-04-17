import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";
import { downloads } from "@/data/downloads";

const SITE_URL = "https://aannemersysteem.com";

const downloadsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gratis downloads voor aannemers | Aannemer Systeem",
  url: `${SITE_URL}/downloads`,
  description:
    "Gratis PDF's, templates en checklists voor aannemers: review-scripts, offerte-template, website-audit, lead-opvolging playbook. Direct downloaden.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Downloads", item: `${SITE_URL}/downloads` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: downloads.length,
    itemListElement: downloads.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.title,
      url: `${SITE_URL}/downloads/${d.slug}`,
    })),
  },
};

const DownloadsOverview = () => (
  <PageShell>
    <Helmet>
      <title>Gratis downloads voor aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Gratis PDF's, templates en checklists voor aannemers: review-scripts, offerte-templates, website-audit checklist en meer. Direct te downloaden."
      />
      <link rel="canonical" href={`${SITE_URL}/downloads`} />
      <meta property="og:title" content="Gratis downloads voor aannemers | Aannemer Systeem" />
      <meta
        property="og:description"
        content="Gratis PDF's, templates en checklists voor aannemers. Direct te downloaden."
      />
      <meta property="og:url" content={`${SITE_URL}/downloads`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(downloadsSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Downloads
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Gratis PDF's, templates en checklists
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Praktische handleidingen die je direct kunt gebruiken in je bedrijf. Review-scripts,
          offerte-templates, website-checklists - allemaal gemaakt voor aannemers.
        </motion.p>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, i) => {
            const card = (
              <div className="group block bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <FileText
                      className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-4 font-semibold text-foreground leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.tagline}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{item.pages} pagina's</span>
                  <span>&middot;</span>
                  <span>{item.format}</span>
                </div>

                {item.status === "soon" ? (
                  <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Binnenkort
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                    <Download className="h-3.5 w-3.5" strokeWidth={2} />
                    Gratis download
                  </span>
                )}
              </div>
            );

            return (
              <motion.div
                key={item.slug}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              >
                <Link to={`/downloads/${item.slug}`}>{card}</Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeInUp} className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
            Wat maakt deze downloads anders?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geen generieke business-templates uit Amerika. Elk document is gemaakt voor de
            Nederlandse bouwsector - met voorbeelden uit de praktijk, herkenbare situaties en
            taal die aannemers ook echt zo gebruiken.
          </p>
        </motion.div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default DownloadsOverview;
