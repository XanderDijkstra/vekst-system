import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Clock, Euro, Users, Grid3X3, Paintbrush } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://aannemersysteem.com";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: typeof Calculator;
  status: "live" | "soon";
}

const tools: Tool[] = [
  {
    title: "Leadwaarde calculator",
    description:
      "Bereken wat een lead jouw aannemersbedrijf oplevert. Vul aanvragen per maand, scorings­percentage en projectwaarde in — krijg direct je omzet per maand.",
    href: "/tools/leadwaarde-calculator",
    icon: TrendingUp,
    status: "live",
  },
  {
    title: "Uurtarief calculator aannemer",
    description:
      "Bereken wat je minimaal per uur moet rekenen als aannemer. Op basis van je inkomensdoel, werkbare uren, overhead en belasting — geen giswerk meer.",
    href: "/tools/uurtarief-calculator-aannemer",
    icon: Clock,
    status: "live",
  },
  {
    title: "Projectmarge calculator",
    description:
      "Vul je offertebedrag en kostenposten in — zie direct je bruto- en nettomarge, en hoeveel de kosten mogen stijgen voordat je break-even draait.",
    href: "/tools/projectmarge-calculator",
    icon: Euro,
    status: "live",
  },
  {
    title: "Personeelskosten calculator",
    description:
      "Bereken wat een werknemer écht kost: bruto salaris → totale werkgeverskosten inclusief premies, vakantiegeld, verzuim en werkkleding.",
    href: "/tools/personeelskosten-calculator",
    icon: Users,
    status: "live",
  },
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
];

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gratis rekentools voor aannemers | Aannemer Systeem",
  url: `${SITE_URL}/tools`,
  description:
    "Gratis rekentools voor aannemers: leadwaarde, marketing ROI, uurtarief en meer. Direct in je browser, geen registratie.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: tools.filter((t) => t.status === "live").length,
    itemListElement: tools
      .filter((t) => t.status === "live")
      .map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.title,
        url: `${SITE_URL}${t.href}`,
      })),
  },
};

const ToolsOverview = () => (
  <PageShell>
    <Helmet>
      <title>Rekentools voor aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Gratis rekentools voor aannemers: bereken leadwaarde, marketing ROI, uurtarief en meer. Direct in je browser — geen registratie, geen e-mailadres."
      />
      <link rel="canonical" href={`${SITE_URL}/tools`} />
      <meta property="og:title" content="Rekentools voor aannemers | Aannemer Systeem" />
      <meta
        property="og:description"
        content="Gratis rekentools voor aannemers: leadwaarde, marketing ROI, uurtarief en meer."
      />
      <meta property="og:url" content={`${SITE_URL}/tools`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(toolsSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Rekentools
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Gratis rekentools voor aannemers
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Snelle, eerlijke cijfers voor je eigen bedrijf. Geen registratie, geen e-mailadres —
          vul je getallen in en zie direct waar je staat.
        </motion.p>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
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
            Meer tools op komst
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We bouwen deze toolkit in de open. Volgende releases: max-CPC calculator (wat mag
            een lead kosten), marketing ROI calculator en uurtarief calculator voor
            aannemers. Suggesties?{" "}
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

export default ToolsOverview;
