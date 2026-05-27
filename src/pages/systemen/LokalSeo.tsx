import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Building2,
  Star,
  TrendingUp,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";
import LokalSeoAnimation from "@/components/lokal-seo/LokalSeoAnimation";

const SITE_URL = "https://www.vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/tjenester/lokal-seo`;

const stats = [
  { value: "80 %", description: "av nordmenn googler en lokal håndverker før de bestiller." },
  { value: "3", description: "plasser i Googles kartpakke - du må være blant disse tre for å bli sett." },
  { value: "47 %", description: "av lokale Google-klikk går til de tre første kartresultatene." },
];

const features = [
  {
    icon: Building2,
    title: "Google Bedriftsprofil-optimalisering",
    description:
      "Vi setter opp eller forbedrer Google Bedriftsprofilen din: riktig primærkategori, alle tjenester eksplisitt oppført, 20-30 bilder, ukentlige innlegg. Profilen er fundamentet for hele kartpakke-rangeringen din.",
  },
  {
    icon: MapPin,
    title: "Lokal SEO på nettsiden din",
    description:
      "Lokale landingssider, schema-merket for håndverkerbedrifter, NAP-konsistens (Navn, Adresse, Telefon) på tvers av kataloger og en sidestruktur Google forstår. Du rangerer på «rørlegger Oslo», ikke bare på «rørlegger».",
  },
  {
    icon: Star,
    title: "Anmeldelser som rangeringssignal",
    description:
      "Google ranker bedrifter med jevn strøm av positive anmeldelser høyere i kartpakken. Vi automatiserer innsamlingen via anmeldelsesfunnelen, slik at antall og kvalitet bygger seg opp uten manuelt arbeid.",
  },
  {
    icon: TrendingUp,
    title: "Lokal innholdsstrategi",
    description:
      "Bydelsider, fagspesifikt innhold og strategiske backlinks fra norske bransjekataloger. Vi bygger autoritet rundt fagområde + sted - akkurat den kombinasjonen Google bruker for å avgjøre hvem som vinner det lokale søket.",
  },
];

const steps = [
  {
    step: "01",
    title: "Lokal SEO-revisjon",
    duration: "30 minutter",
    description:
      "Vi går gjennom Google Bedriftsprofilen, nettsiden og rangeringen din mot konkurrentene i ditt område. Du får en konkret oversikt over hvilke endringer som gir størst utslag - før du forplikter deg til noe.",
  },
  {
    step: "02",
    title: "Vi bygger lokal SEO-stacken din",
    duration: "3-4 uker",
    description:
      "Profil-overhaling, lokale landingssider, schema-merking, katalog-synkronisering og oppstart av anmeldelsesinnsamlingen. Du leverer bedriftsinformasjon én gang, vi gjør resten.",
  },
  {
    step: "03",
    title: "Lansering og månedlig vekst",
    duration: "Løpende",
    description:
      "Etter lansering jobber systemet automatisk: anmeldelser kommer inn, bydelsider indekseres, profilen holdes aktiv. Du får månedlig rapport på posisjoner, klikk fra kartpakken og innkomne leads.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lokal SEO for håndverkere",
  url: PAGE_URL,
  provider: { "@type": "Organization", name: "Vekst Systemet", url: SITE_URL },
  areaServed: { "@type": "Country", name: "Norge" },
  description:
    "Lokal SEO for håndverkere: Google Bedriftsprofil-optimalisering, lokale landingssider, anmeldelses-strategi og innholdsstrategi som får bedriften din inn i kartpakken på lokale søk.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: `${SITE_URL}/tjenester` },
    { "@type": "ListItem", position: 3, name: "Lokal SEO", item: PAGE_URL },
  ],
};

const LokalSeo = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Lokal SEO for håndverkere | Vekst Systemet</title>
        <meta
          name="description"
          content="Kom inn i Googles kartpakke når noen søker «rørlegger Oslo» eller «elektriker Bergen». Vi optimaliserer Google Bedriftsprofil, nettside og anmeldelser - til en fast månedspris."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Lokal SEO for håndverkere | Vekst Systemet" />
        <meta
          property="og:description"
          content="Bli funnet på Google i ditt arbeidsområde - uten å betale for annonser. Komplett lokal SEO-stack for håndverkerbedrifter."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ═══ Hero ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-3xl mx-auto"
          >
            Lokal SEO for håndverkere
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-5 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto text-center leading-relaxed"
          >
            Bli funnet i kartpakken når noen googler en håndverker i ditt område - uten å betale for annonser.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: 0.1 + i * 0.08 }}
                  className="border border-primary-foreground/15 bg-primary-foreground/[0.06] shadow-lg shadow-black/10 rounded-xl p-5"
                >
                  <span className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</span>
                  <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Se hvordan kartpakken fungerer</h2>
              <div className="rounded-2xl bg-card border border-border">
                <LokalSeoAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center max-w-2xl mx-auto"
          >
            Hva er i lokal SEO-stacken?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Fire deler som jobber sammen for å få bedriften din inn blant de tre øverste på lokale Google-søk.
          </motion.p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
                className="bg-background rounded-2xl p-6 shadow-system-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA banner ═══ */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
                Hvor ranker du nå?
              </h2>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                Bestill en gratis lokal SEO-revisjon. Vi viser deg posisjonen din i kartpakken
                for ditt fagområde og ditt område - og hvilke endringer som gir størst utslag.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Link to="/demo">
                Bestill revisjon
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ How it works ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center"
          >
            Slik fungerer det
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center leading-relaxed"
          >
            Fra revisjon til løpende vekst i tre trinn.
          </motion.p>

          <div className="mt-16 space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">{step.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Related reading ═══ */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center"
          >
            Vil du lære mer først?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center leading-relaxed"
          >
            Gå dypere i lokal SEO med disse praktiske guidene.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/kunnskapsbank/lokal-seo-for-handverkere"
              className="bg-background rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Guide</p>
              <h3 className="font-semibold text-foreground">Lokal SEO for håndverkere: steg-for-steg</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Den fullstendige guiden til hvordan du kommer inn i Googles kartpakke.
              </p>
            </Link>
            <Link
              to="/kunnskapsbank/google-bedriftsprofil-handverker-sjekkliste"
              className="bg-background rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Guide</p>
              <h3 className="font-semibold text-foreground">10-punkts sjekkliste for Google Bedriftsprofil</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Konkret sjekkliste for å optimalisere profilen din på 30 minutter.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Klar til å rangere lokalt?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Bestill en gratis demo. Vi viser deg nøyaktig hva som skal til for å komme inn i kartpakken i ditt område - og hvor lang tid det vil ta.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/tjenester">Se alle tjenester</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default LokalSeo;
