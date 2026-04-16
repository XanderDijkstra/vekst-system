import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid3X3, Paintbrush, HardHat, Layers, Ruler } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://aannemersysteem.com";

interface MaterialTool {
  title: string;
  description: string;
  href: string;
  icon: typeof Grid3X3;
  status: "live" | "soon";
}

const materialTools: MaterialTool[] = [
  {
    title: "Tegels berekenen",
    description:
      "Hoeveel tegels, dozen, tegellijm en voegmortel heb je nodig? Kies je formaat, vul de m² in en bestel precies genoeg.",
    href: "/tools/tegels-berekenen",
    icon: Grid3X3,
    status: "live",
  },
  {
    title: "Verf berekenen",
    description:
      "Hoeveel liter verf en blikken heb je nodig? Kies verftype, vul de m² in en weet precies wat je moet bestellen.",
    href: "/tools/verf-berekenen",
    icon: Paintbrush,
    status: "live",
  },
  {
    title: "Beton berekenen",
    description:
      "Bereken hoeveel m³ beton, zakken cement, zand en grind je nodig hebt voor je project.",
    href: "/tools/beton-berekenen",
    icon: HardHat,
    status: "live",
  },
  {
    title: "Laminaat berekenen",
    description:
      "Hoeveel pakken laminaat en ondervloer heb je nodig? Vul de m² in en reken snijverlies mee.",
    href: "/tools/laminaat-berekenen",
    icon: Layers,
    status: "live",
  },
  {
    title: "Behang berekenen",
    description:
      "Bereken hoeveel rollen behang je nodig hebt op basis van kamermaten, raambreedte en patroonrapport.",
    href: "/tools/behang-berekenen",
    icon: Ruler,
    status: "live",
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bouwmaterialen berekenen | Gratis calculators | Aannemer Systeem",
  url: `${SITE_URL}/tools/bouwmaterialen-berekenen`,
  description:
    "Bereken hoeveel bouwmaterialen je nodig hebt: tegels, verf, beton, laminaat en meer. Gratis calculators voor aannemers — direct resultaat, geen registratie.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bouwmaterialen berekenen",
        item: `${SITE_URL}/tools/bouwmaterialen-berekenen`,
      },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: materialTools.filter((t) => t.status === "live").length,
    itemListElement: materialTools
      .filter((t) => t.status === "live")
      .map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.title,
        url: `${SITE_URL}${t.href}`,
      })),
  },
};

const BouwmaterialenHub = () => (
  <PageShell>
    <Helmet>
      <title>Bouwmaterialen berekenen | Gratis calculators | Aannemer Systeem</title>
      <meta
        name="description"
        content="Bereken hoeveel bouwmaterialen je nodig hebt: tegels, verf, beton, laminaat en meer. Gratis calculators voor aannemers — direct resultaat, geen registratie."
      />
      <link rel="canonical" href={`${SITE_URL}/tools/bouwmaterialen-berekenen`} />
      <meta
        property="og:title"
        content="Bouwmaterialen berekenen | Gratis calculators | Aannemer Systeem"
      />
      <meta
        property="og:description"
        content="Bereken hoeveel bouwmaterialen je nodig hebt: tegels, verf, beton, laminaat en meer."
      />
      <meta property="og:url" content={`${SITE_URL}/tools/bouwmaterialen-berekenen`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(hubSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div {...fadeInUp}>
          <Link
            to="/tools"
            className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
          >
            ← Alle rekentools
          </Link>
        </motion.div>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Bouwmaterialen berekenen
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Nooit meer te veel of te weinig bestellen. Kies het materiaal, vul je
          afmetingen in en zie direct hoeveel je nodig hebt — inclusief
          snijverlies en hulpmaterialen.
        </motion.p>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materialTools.map((tool, i) => {
            const card = (
              <div className="group block bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease h-full">
                <tool.icon
                  className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                {tool.status === "soon" && (
                  <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Binnenkort
                  </span>
                )}
              </div>
            );

            return (
              <motion.div
                key={tool.href}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              >
                {tool.status === "live" ? <Link to={tool.href}>{card}</Link> : card}
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeInUp} className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
            Meer materiaalcalculators op komst
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We bouwen deze toolkit uit met calculators voor elk materiaal: beton,
            laminaat, behang, isolatie, gipsplaten, stucwerk en meer. Suggesties?{" "}
            <Link to="/contact" className="underline hover:text-accent transition-colors">
              Laat het weten
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default BouwmaterialenHub;
