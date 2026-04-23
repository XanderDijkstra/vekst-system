import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://www.vekst-systemet.no";

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
  { name: "Takleggere", image: dakdekkersImg, slug: "takleggere" },
  { name: "Rørleggere", image: loodgieterImg, slug: "rorleggere" },
  { name: "Elektrikere", image: elektricienImg, slug: "elektrikere" },
  { name: "Altmuligmenn", image: klusbedrijfImg, slug: "altmuligmenn" },
  { name: "Malere", image: schilderImg, slug: "malere" },
  { name: "Gartnere", image: tuinmanImg, slug: "gartnere" },
  { name: "VVS & Klima", image: hvacImg, slug: "vvs-klima" },
  { name: "Entreprenører", image: aannemerImg, slug: "entreprenorer" },
  { name: "Flisleggere", image: tegelzetterImg, slug: "flisleggere" },
];

const allTrades = [
  { name: "Altmuligmenn", slug: "altmuligmenn" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Avløpstjeneste", slug: "avlopstjeneste" },
  { name: "Baderomsrenovering", slug: "baderomsrenovering" },
  { name: "Belegning & Brostein", slug: "belegning" },
  { name: "Betong & Sement", slug: "betong-sement" },
  { name: "Elektrikere", slug: "elektrikere" },
  { name: "Entreprenører", slug: "entreprenorer" },
  { name: "Fasaderens", slug: "fasaderens" },
  { name: "Feiere", slug: "feiere" },
  { name: "Flisleggere", slug: "flisleggere" },
  { name: "Fuktbekjempelse", slug: "fuktbekjempelse" },
  { name: "Fundamentreparasjon", slug: "fundamentreparasjon" },
  { name: "Fugearbeid", slug: "fugearbeid" },
  { name: "Fyrmontering", slug: "fyrmontering" },
  { name: "Garasjeporter", slug: "garasjeporter" },
  { name: "Gartnere", slug: "gartnere" },
  { name: "Gjerder & Porter", slug: "gjerder-porter" },
  { name: "Glassarbeid", slug: "glassarbeid" },
  { name: "Glassmester", slug: "vindusvaskere" },
  { name: "Gulvlegger", slug: "gulvlegger" },
  { name: "HVAC & Klima", slug: "vvs-klima" },
  { name: "Interiørarkitekter", slug: "interiorarkitekter" },
  { name: "Interiørdesign", slug: "interiordesign" },
  { name: "Isolering", slug: "isolering" },
  { name: "Karmer & Vinduer", slug: "karmer-vinduer" },
  { name: "Kjellerbygging", slug: "kjellerbygging" },
  { name: "Kjøkkenmontering", slug: "kjokkenmontorer" },
  { name: "Klimaanlegg-installatører", slug: "klimaanlegg-installatorer" },
  { name: "Ladestasjon-installatører", slug: "ladestasjon-installatorer" },
  { name: "Malere", slug: "malere" },
  { name: "Møbelsnekker", slug: "mobelsnekkere" },
  { name: "Murerarbeid", slug: "murerarbeid" },
  { name: "Parkettgulv", slug: "parkett" },
  { name: "Persienner & Solskjerming", slug: "persienner-solskjerming" },
  { name: "Pussere", slug: "pussere" },
  { name: "Rengjøringsfirma", slug: "rengjoringsfirma" },
  { name: "Rydding", slug: "rydding" },
  { name: "Ryddetjeneste", slug: "ryddetjeneste" },
  { name: "Rørleggere", slug: "rorleggere" },
  { name: "Sikkerhetsinstallatører", slug: "sikkerhetsinstallatorer" },
  { name: "Smarthus", slug: "smarthus" },
  { name: "Solcellepaneler", slug: "solcellepaneler" },
  { name: "Stråtekkere", slug: "stratekkere" },
  { name: "Støpegulv", slug: "stopegulv" },
  { name: "Svømmebassengbyggere", slug: "svommebasseng-byggere" },
  { name: "Takleggere", slug: "takleggere" },
  { name: "Takopplett", slug: "takark" },
  { name: "Takrenner", slug: "takrenner" },
  { name: "Tilbygg & Påbygg", slug: "tilbygg-paabygg" },
  { name: "Tømrer", slug: "tomrere" },
  { name: "Trappeheis & Hjemmeheis", slug: "trappeheis-hjemmeheis" },
  { name: "Varmepumpe-installasjon", slug: "varmepumpe-installasjon" },
  { name: "Vinterhagebyggere", slug: "vinterhagebyggere" },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fagområder | Vekst Systemet",
  url: `${SITE_URL}/fagomrader`,
  description: "Alle fagområder vi leverer digitale systemer, nettsider og markedsføringsautomatisering for.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Fagområder", item: `${SITE_URL}/fagomrader` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: allTrades.length,
    itemListElement: allTrades.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${SITE_URL}/fagomrader/${t.slug}`,
    })),
  },
};

const VakgebiedenPage = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Fagområder | Vekst Systemet</title>
        <meta name="description" content="Fra taklegger til gartner - se hvilke fagområder vi bygger digitale systemer for. Utforsk våre spesialiseringer." />
        <link rel="canonical" href={`${SITE_URL}/fagomrader`} />
        <meta property="og:title" content="Fagområder | Vekst Systemet" />
        <meta property="og:description" content="Fra taklegger til gartner - se hvilke fagområder vi bygger digitale systemer for." />
        <meta property="og:url" content={`${SITE_URL}/fagomrader`} />
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
                  to={`/fagomrader/${trade.slug}`}
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
                <Link to={`/fagomrader/${trade.slug}`} className="text-sm md:text-base text-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-accent/30 hover:decoration-accent">
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
              <Link to="/kontakt">Ta kontakt</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
};

export default VakgebiedenPage;
