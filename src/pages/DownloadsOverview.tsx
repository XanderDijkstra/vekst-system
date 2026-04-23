import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";
import { downloads } from "@/data/downloads";

const SITE_URL = "https://www.vekst-systemet.no";

const downloadsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gratis nedlastinger for håndverkere | Vekst Systemet",
  url: `${SITE_URL}/nedlastinger`,
  description:
    "Gratis PDF-er, maler og sjekklister for håndverkere: anmeldelses-skript, tilbudsmal, nettside-audit, lead-oppfølgingsplaybook. Last ned direkte.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Nedlastinger", item: `${SITE_URL}/nedlastinger` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: downloads.length,
    itemListElement: downloads.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.title,
      url: `${SITE_URL}/nedlastinger/${d.slug}`,
    })),
  },
};

const DownloadsOverview = () => (
  <PageShell>
    <Helmet>
      <title>Gratis nedlastinger for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Gratis PDF-er, maler og sjekklister for håndverkere: anmeldelsesskript, tilbudsmal, nettside-audit-sjekkliste og mer. Kan lastes ned direkte."
      />
      <link rel="canonical" href={`${SITE_URL}/nedlastinger`} />
      <meta property="og:title" content="Gratis nedlastinger for håndverkere | Vekst Systemet" />
      <meta
        property="og:description"
        content="Gratis PDF-er, maler og sjekklister for håndverkere. Kan lastes ned direkte."
      />
      <meta property="og:url" content={`${SITE_URL}/nedlastinger`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(downloadsSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Nedlastinger
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Gratis PDF-er, maler og sjekklister
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Praktiske veiledninger du kan ta i bruk i bedriften din med en gang.
          Anmeldelsesskript, tilbudsmaler, nettside-sjekklister - alle laget for
          håndverkere.
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
                  <span>{item.pages} sider</span>
                  <span>&middot;</span>
                  <span>{item.format}</span>
                </div>

                {item.status === "soon" ? (
                  <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Kommer snart
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                    <Download className="h-3.5 w-3.5" strokeWidth={2} />
                    Gratis nedlasting
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
                <Link to={`/nedlastinger/${item.slug}`}>{card}</Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeInUp} className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
            Hva gjør disse nedlastingene annerledes?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ingen generiske business-maler fra USA. Hvert dokument er laget for
            den norske byggebransjen - med praktiske eksempler, gjenkjennelige
            situasjoner og et språk håndverkere faktisk bruker.
          </p>
        </motion.div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default DownloadsOverview;
