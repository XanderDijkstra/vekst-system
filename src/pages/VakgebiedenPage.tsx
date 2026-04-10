import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://aannemersysteem.com";

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
  { name: "Dakdekkers", image: dakdekkersImg, slug: "dakdekkers" },
  { name: "Loodgieters", image: loodgieterImg, slug: "loodgieters" },
  { name: "Elektriciens", image: elektricienImg, slug: "elektriciens" },
  { name: "Klusbedrijven", image: klusbedrijfImg, slug: "klusbedrijven" },
  { name: "Schilders", image: schilderImg, slug: "schilders" },
  { name: "Tuinmannen", image: tuinmanImg, slug: "hoveniers" },
  { name: "HVAC", image: hvacImg, slug: "hvac" },
  { name: "Aannemers", image: aannemerImg, slug: "aannemers" },
  { name: "Tegelzetters", image: tegelzetterImg, slug: "tegelzetters" },
];

const allTrades = [
  { name: "Aanbouw & Uitbouw", slug: "aanbouw-uitbouw" },
  { name: "Aannemers", slug: "aannemers" },
  { name: "Airco installateurs", slug: "airco-installateurs" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Badkamerrenovatie", slug: "badkamerrenovatie" },
  { name: "Beglazing", slug: "beglazing" },
  { name: "Bestrating", slug: "bestrating" },
  { name: "Beton & Cement", slug: "beton-cement" },
  { name: "Beveiligingsinstallateurs", slug: "beveiligingsinstallateurs" },
  { name: "Binnenhuisarchitecten", slug: "binnenhuisarchitecten" },
  { name: "Cv-ketel montage", slug: "cv-ketel-montage" },
  { name: "Dakdekkers", slug: "dakdekkers" },
  { name: "Dakgoten", slug: "dakgoten" },
  { name: "Dakkapellen", slug: "dakkapellen" },
  { name: "Domotica", slug: "domotica" },
  { name: "Elektriciens", slug: "elektriciens" },
  { name: "Funderingsherstel", slug: "funderingsherstel" },
  { name: "Garagedeuren", slug: "garagedeuren" },
  { name: "Gevelreiniging", slug: "gevelreiniging" },
  { name: "Gietvloeren", slug: "gietvloeren" },
  { name: "Glazenwassers", slug: "glazenwassers" },
  { name: "Hekwerk & Poorten", slug: "hekwerk-poorten" },
  { name: "Hoveniers", slug: "hoveniers" },
  { name: "HVAC", slug: "hvac" },
  { name: "Interieurontwerp", slug: "interieurontwerp" },
  { name: "Isolatiebedrijven", slug: "isolatiebedrijven" },
  { name: "Kelderbouw", slug: "kelderbouw" },
  { name: "Keukenmonteurs", slug: "keukenmonteurs" },
  { name: "Klusbedrijven", slug: "klusbedrijven" },
  { name: "Kozijnen & Ramen", slug: "kozijnen-ramen" },
  { name: "Laadpaal installateurs", slug: "laadpaal-installateurs" },
  { name: "Loodgieters", slug: "loodgieters" },
  { name: "Metselwerk", slug: "metselwerk" },
  { name: "Meubelmakers", slug: "meubelmakers" },
  { name: "Ontruiming", slug: "ontruiming" },
  { name: "Opruimservice", slug: "opruimservice" },
  { name: "Parketvloeren", slug: "parketvloeren" },
  { name: "Rietdekkers", slug: "rietdekkers" },
  { name: "Rioolservice", slug: "rioolservice" },
  { name: "Rolluiken & Zonwering", slug: "rolluiken-zonwering" },
  { name: "Schilders", slug: "schilders" },
  { name: "Schoonmaakbedrijven", slug: "schoonmaakbedrijven" },
  { name: "Schoorsteenvegers", slug: "schoorsteenvegers" },
  { name: "Serrebouwers", slug: "serrebouwers" },
  { name: "Stukadoors", slug: "stukadoors" },
  { name: "Tegelzetters", slug: "tegelzetters" },
  { name: "Timmerlieden", slug: "timmerlieden" },
  { name: "Trapliften & Thuisliften", slug: "trapliften-thuisliften" },
  { name: "Verhuisbedrijven", slug: "verhuisbedrijven" },
  { name: "Vloerlegger", slug: "vloerlegger" },
  { name: "Vochtbestrijding", slug: "vochtbestrijding" },
  { name: "Voegwerk", slug: "voegwerk" },
  { name: "Warmtepomp installatie", slug: "warmtepomp-installatie" },
  { name: "Zonnepanelen", slug: "zonnepanelen" },
  { name: "Zwembadbouwers", slug: "zwembadbouwers" },
];

const VakgebiedenPage = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Vakgebieden | Aannemer Systeem</title>
        <meta name="description" content="Van dakdekker tot tuinman — ontdek voor welke vakgebieden wij digitale systemen maken. Bekijk onze specialisaties." />
        <link rel="canonical" href={`${SITE_URL}/vakgebieden`} />
        <meta property="og:title" content="Vakgebieden | Aannemer Systeem" />
        <meta property="og:description" content="Van dakdekker tot tuinman — ontdek voor welke vakgebieden wij digitale systemen maken." />
        <meta property="og:url" content={`${SITE_URL}/vakgebieden`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="container text-center">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto"
          >
            Vakgebieden die wij bedienen
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto leading-relaxed"
          >
            Van dakdekker tot tuinman — wij helpen elke vakman groeien met slimme digitale systemen.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/demo">Boek een demo</Link>
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
            Onze specialisaties
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
            Alle vakgebieden
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
              Staat jouw vakgebied er niet bij? Geen probleem — neem contact op en we kijken samen wat we voor je kunnen doen.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
};

export default VakgebiedenPage;
