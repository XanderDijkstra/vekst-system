import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Euro, Hammer, Search, Clock, Users } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://vekst-systemet.no";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: typeof Calculator;
  status: "live" | "soon";
}

const tools: Tool[] = [
  {
    title: "Gratis markedsføringsscan",
    description:
      "Skann nettsiden din og få en rapport med konkrete forbedringspunkter for synlighet, teknikk, tillit og konvertering.",
    href: "/verktoy/markedsforingsscan",
    icon: Search,
    status: "live",
  },
  {
    title: "Leadverdi-kalkulator",
    description:
      "Beregn hva en lead gir håndverkerbedriften din. Fyll inn forespørsler per måned, konverteringsrate og prosjektverdi - se omsetningen per måned direkte.",
    href: "/verktoy/leadverdi-kalkulator",
    icon: TrendingUp,
    status: "live",
  },
  {
    title: "Timepris-kalkulator",
    description:
      "Beregn hva du minst må ta per time som håndverker. Basert på inntektsmål, fakturerbare timer, overhead og skatt - slutt å gjette.",
    href: "/verktoy/timepris-kalkulator",
    icon: Clock,
    status: "live",
  },
  {
    title: "Prosjektmargin-kalkulator",
    description:
      "Fyll inn tilbudsbeløp og kostnadsposter - se brutto- og nettomargin direkte, og hvor mye kostnadene kan stige før du går i null.",
    href: "/verktoy/prosjektmargin-kalkulator",
    icon: Euro,
    status: "live",
  },
  {
    title: "Personalkostnad-kalkulator",
    description:
      "Se den reelle arbeidsgiverkostnaden for en ansatt: bruttolønn, feriepenger, arbeidsgiveravgift, OTP, yrkesskadeforsikring og sykefravær.",
    href: "/verktoy/personalkostnad-kalkulator",
    icon: Users,
    status: "live",
  },
  {
    title: "Byggematerialer-kalkulator",
    description:
      "Beregn hvor mange fliser, hvor mye maling, betong, laminat og andre byggematerialer du trenger - inkludert svinn og hjelpematerialer.",
    href: "/verktoy/byggematerialer-kalkulator",
    icon: Hammer,
    status: "live",
  },
];

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gratis kalkulatorer for håndverkere | Vekst Systemet",
  url: `${SITE_URL}/verktoy`,
  description:
    "Gratis kalkulatorer for håndverkere: leadverdi, markedsførings-ROI, timepris og mer. Direkte i nettleseren, ingen registrering.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
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
      <title>Kalkulatorer for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Gratis kalkulatorer for håndverkere: beregn leadverdi, markedsførings-ROI, timepris og mer. Direkte i nettleseren - ingen registrering, ingen e-postadresse."
      />
      <link rel="canonical" href={`${SITE_URL}/verktoy`} />
      <meta property="og:title" content="Kalkulatorer for håndverkere | Vekst Systemet" />
      <meta
        property="og:description"
        content="Gratis kalkulatorer for håndverkere: leadverdi, markedsførings-ROI, timepris og mer."
      />
      <meta property="og:url" content={`${SITE_URL}/verktoy`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(toolsSchema)}</script>
    </Helmet>

    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p
          {...fadeInUp}
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          Kalkulatorer
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
        >
          Gratis kalkulatorer for håndverkere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Raske, ærlige tall for din egen bedrift. Ingen registrering, ingen e-postadresse -
          fyll inn tallene dine og se hvor du står med en gang.
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
            Flere verktøy på vei
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi bygger denne verktøykassa i åpenhet. Neste ut: max-CPC-kalkulator (hva en lead
            bør få lov til å koste), markedsførings-ROI-kalkulator og timepris-kalkulator for
            håndverkere. Forslag?{" "}
            <Link to="/kontakt" className="underline hover:text-accent transition-colors">
              Si fra
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
