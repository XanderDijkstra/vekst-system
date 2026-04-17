import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://vekst-systemet.no";

import dakdekkersImg from "@/assets/trades/dakdekkers.jpg";
import loodgieterImg from "@/assets/trades/loodgieter.jpg";
import elektricienImg from "@/assets/trades/elektricien.jpg";
import klusbedrijfImg from "@/assets/trades/klusbedrijf.jpg";
import schilderImg from "@/assets/trades/schilder.jpg";
import tuinmanImg from "@/assets/trades/tuinman.jpg";
import hvacImg from "@/assets/trades/hvac.jpg";
import aannemerImg from "@/assets/trades/aannemer.jpg";
import tegelzetterImg from "@/assets/trades/tegelzetter.jpg";

const trades = [
  { name: "Takleggere", image: dakdekkersImg, slug: "dakdekkers" },
  { name: "Rørleggere", image: loodgieterImg, slug: "loodgieters" },
  { name: "Elektrikere", image: elektricienImg, slug: "elektriciens" },
  { name: "Altmuligmenn", image: klusbedrijfImg, slug: "klusbedrijven" },
  { name: "Malere", image: schilderImg, slug: "schilders" },
  { name: "Gartnere", image: tuinmanImg, slug: "hoveniers" },
  { name: "VVS & Klima", image: hvacImg, slug: "hvac" },
  { name: "Entreprenører", image: aannemerImg, slug: "aannemers" },
  { name: "Flisleggere", image: tegelzetterImg, slug: "tegelzetters" },
];

const allTrades = [
  { name: "Altmuligmenn", slug: "klusbedrijven" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Avløpstjeneste", slug: "rioolservice" },
  { name: "Baderomsrenovering", slug: "badkamerrenovatie" },
  { name: "Belegning & Brostein", slug: "bestrating" },
  { name: "Betong & Sement", slug: "beton-cement" },
  { name: "Elektrikere", slug: "elektriciens" },
  { name: "Entreprenører", slug: "aannemers" },
  { name: "Fasaderens", slug: "gevelreiniging" },
  { name: "Feiere", slug: "schoorsteenvegers" },
  { name: "Flisleggere", slug: "tegelzetters" },
  { name: "Fuktbekjempelse", slug: "vochtbestrijding" },
  { name: "Fundamentreparasjon", slug: "funderingsherstel" },
  { name: "Fugearbeid", slug: "voegwerk" },
  { name: "Fyrmontering", slug: "cv-ketel-montage" },
  { name: "Garasjeporter", slug: "garagedeuren" },
  { name: "Gartnere", slug: "hoveniers" },
  { name: "Gjerder & Porter", slug: "hekwerk-poorten" },
  { name: "Glassarbeid", slug: "beglazing" },
  { name: "Glassmester", slug: "glazenwassers" },
  { name: "Gulvlegger", slug: "vloerlegger" },
  { name: "HVAC & Klima", slug: "hvac" },
  { name: "Interiørarkitekter", slug: "binnenhuisarchitecten" },
  { name: "Interiørdesign", slug: "interieurontwerp" },
  { name: "Isolering", slug: "isolatiebedrijven" },
  { name: "Karmer & Vinduer", slug: "kozijnen-ramen" },
  { name: "Kjellerbygging", slug: "kelderbouw" },
  { name: "Kjøkkenmontering", slug: "keukenmonteurs" },
  { name: "Klimaanlegg-installatører", slug: "airco-installateurs" },
  { name: "Ladestasjon-installatører", slug: "laadpaal-installateurs" },
  { name: "Malere", slug: "schilders" },
  { name: "Møbelsnekker", slug: "meubelmakers" },
  { name: "Murerarbeid", slug: "metselwerk" },
  { name: "Parkettgulv", slug: "parketvloeren" },
  { name: "Persienner & Solskjerming", slug: "rolluiken-zonwering" },
  { name: "Pussere", slug: "stukadoors" },
  { name: "Rengjøringsfirma", slug: "schoonmaakbedrijven" },
  { name: "Rydding", slug: "ontruiming" },
  { name: "Ryddetjeneste", slug: "opruimservice" },
  { name: "Rørleggere", slug: "loodgieters" },
  { name: "Sikkerhetsinstallatører", slug: "beveiligingsinstallateurs" },
  { name: "Smarthus", slug: "domotica" },
  { name: "Solcellepaneler", slug: "zonnepanelen" },
  { name: "Stråtekkere", slug: "rietdekkers" },
  { name: "Støpegulv", slug: "gietvloeren" },
  { name: "Svømmebassengbyggere", slug: "zwembadbouwers" },
  { name: "Takleggere", slug: "dakdekkers" },
  { name: "Takopplett", slug: "dakkapellen" },
  { name: "Takrenner", slug: "dakgoten" },
  { name: "Tilbygg & Påbygg", slug: "aanbouw-uitbouw" },
  { name: "Tømrer", slug: "timmerlieden" },
  { name: "Trappeheis & Hjemmeheis", slug: "trapliften-thuisliften" },
  { name: "Varmepumpe-installasjon", slug: "warmtepomp-installatie" },
  { name: "Vinterhagebyggere", slug: "serrebouwers" },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fagområder | Vekst Systemet",
  url: `${SITE_URL}/vakgebieden`,
  description: "Alle fagområder vi leverer digitale systemer, nettsider og markedsføringsautomatisering for.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Fagområder", item: `${SITE_URL}/vakgebieden` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: allTrades.length,
    itemListElement: allTrades.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${SITE_URL}/vakgebieden/${t.slug}`,
    })),
  },
};

const VakgebiedenPage = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Fagområder | Vekst Systemet</title>
        <meta name="description" content="Fra taklegger til gartner - se hvilke fagområder vi bygger digitale systemer for. Utforsk våre spesialiseringer." />
        <link rel="canonical" href={`${SITE_URL}/vakgebieden`} />
        <meta property="og:title" content="Fagområder | Vekst Systemet" />
        <meta property="og:description" content="Fra taklegger til gartner - se hvilke fagområder vi bygger digitale systemer for." />
        <meta property="og:url" content={`${SITE_URL}/vakgebieden`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="container text-center">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto"
          >
            Fagområder vi jobber med
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto leading-relaxed"
          >
            Fra taklegger til gartner - vi hjelper hver håndverker å vokse med smarte digitale systemer.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/demo">Bestill demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured trades grid */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-14"
          >
            Våre spesialiseringer
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trades.map((trade, i) => (
              <motion.div
                key={trade.name}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              >
                <Link
                  to={`/vakgebieden/${trade.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[5/4] block"
                >
                  <img src={trade.image} alt={trade.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-wide">{trade.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All trades by category */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-12"
          >
            Alle fagområder
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {allTrades.map((trade) => (
              <motion.div
                key={trade.name}
                {...fadeInUp}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <Link to={`/vakgebieden/${trade.slug}`} className="text-sm md:text-base text-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-accent/30 hover:decoration-accent">
                  {trade.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-14 text-center">
            <p className="text-muted-foreground mb-6">
              Står ikke ditt fagområde her? Ingen problem - ta kontakt, så ser vi sammen hva vi kan gjøre for deg.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Ta kontakt</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
};

export default VakgebiedenPage;
