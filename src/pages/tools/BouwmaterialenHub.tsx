import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid3X3, Paintbrush, HardHat, Layers, Ruler, Package, Droplets } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://vekst-systemet.no";

interface MaterialTool {
  title: string;
  description: string;
  href: string;
  icon: typeof Grid3X3;
  status: "live" | "soon";
}

const materialTools: MaterialTool[] = [
  {
    title: "Fliser beregne",
    description:
      "Hvor mange fliser, esker, flislim og fugemasse trenger du? Velg format, fyll inn m² og bestill akkurat nok.",
    href: "/tools/tegels-berekenen",
    icon: Grid3X3,
    status: "live",
  },
  {
    title: "Maling beregne",
    description:
      "Hvor mange liter maling og spann trenger du? Velg malingstype, fyll inn m² og vit nøyaktig hva du skal bestille.",
    href: "/tools/verf-berekenen",
    icon: Paintbrush,
    status: "live",
  },
  {
    title: "Betong beregne",
    description:
      "Beregn hvor mange m³ betong, sekker sement, sand og grus du trenger til prosjektet.",
    href: "/tools/beton-berekenen",
    icon: HardHat,
    status: "live",
  },
  {
    title: "Laminat beregne",
    description:
      "Hvor mange pakker laminat og undergulv trenger du? Fyll inn m² og ta hensyn til kappsvinn.",
    href: "/tools/laminaat-berekenen",
    icon: Layers,
    status: "live",
  },
  {
    title: "Tapet beregne",
    description:
      "Beregn hvor mange ruller tapet du trenger basert på rommål, vindusbredde og mønsterrapport.",
    href: "/tools/behang-berekenen",
    icon: Ruler,
    status: "live",
  },
  {
    title: "Gipsplater beregne",
    description:
      "Beregn hvor mange gipsplater, stenderverk i stål, skruer og sparkelbånd du trenger.",
    href: "/tools/gipsplaten-berekenen",
    icon: Package,
    status: "live",
  },
  {
    title: "Pussarbeid beregne",
    description:
      "Beregn hvor mange kg puss, sekker med gipspuss og primer du trenger per m² vegg eller himling.",
    href: "/tools/stucwerk-berekenen",
    icon: Droplets,
    status: "live",
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Byggematerialer beregne | Gratis kalkulatorer | Vekst Systemet",
  url: `${SITE_URL}/tools/bouwmaterialen-berekenen`,
  description:
    "Beregn hvor mye byggematerialer du trenger: fliser, maling, betong, laminat og mer. Gratis kalkulatorer for håndverkere - umiddelbart resultat, ingen registrering.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/tools` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Byggematerialer beregne",
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
      <title>Byggematerialer beregne | Gratis kalkulatorer | Vekst Systemet</title>
      <meta
        name="description"
        content="Beregn hvor mye byggematerialer du trenger: fliser, maling, betong, laminat og mer. Gratis kalkulatorer for håndverkere - umiddelbart resultat, ingen registrering."
      />
      <link rel="canonical" href={`${SITE_URL}/tools/bouwmaterialen-berekenen`} />
      <meta
        property="og:title"
        content="Byggematerialer beregne | Gratis kalkulatorer | Vekst Systemet"
      />
      <meta
        property="og:description"
        content="Beregn hvor mye byggematerialer du trenger: fliser, maling, betong, laminat og mer."
      />
      <meta property="og:url" content={`${SITE_URL}/tools/bouwmaterialen-berekenen`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(hubSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div {...fadeInUp}>
          <Link
            to="/tools"
            className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
          >
            ← Alle kalkulatorer
          </Link>
        </motion.div>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Byggematerialer beregne
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Aldri mer bestille for mye eller for lite. Velg materialet, fyll inn
          målene dine og se umiddelbart hvor mye du trenger - inkludert
          kappsvinn og hjelpemidler.
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
                    Kommer snart
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
            Flere materialkalkulatorer på vei
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi bygger ut denne verktøykassen med kalkulatorer for hvert materiale: betong,
            laminat, tapet, isolasjon, gipsplater, pussarbeid og mer. Forslag?{" "}
            <Link to="/contact" className="underline hover:text-accent transition-colors">
              Gi oss beskjed
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
