import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";

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
  { name: "Aannemers", image: aannemerImg, slug: null },
  { name: "Tegelzetters", image: tegelzetterImg, slug: "tegelzetters" },
];

const allTrades = [
  "Badkamer renovatie", "Beglazing", "Bestrating", "Beton & Cement",
  "Cv-ketel montage", "Dakgoten", "Domotica", "Gevelreiniging",
  "Glaszetter", "Hekwerk & Poorten", "Hoveniers", "Interieurontwerp",
  "Isolatie", "Keukenmontage", "Kozijnen & Ramen", "Metselwerk",
  "Ontruiming", "Opruimservice", "Parketvloeren", "Rioolservice",
  "Rolluiken & Zonwering", "Schoonmaakbedrijf", "Stukadoor",
  "Timmerwerk", "Vloerlegger", "Voegwerk", "Warmtepomp installatie",
  "Zonnepanelen",
];

const VakgebiedenPage = () => {
  return (
    <PageShell>
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
                {trade.slug ? (
                  <Link
                    to={`/voor/${trade.slug}`}
                    className="group relative rounded-2xl overflow-hidden aspect-[5/4] block"
                  >
                    <img src={trade.image} alt={trade.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-wide">{trade.name}</span>
                    </div>
                  </Link>
                ) : (
                  <div className="group relative rounded-2xl overflow-hidden aspect-[5/4] cursor-default">
                    <img src={trade.image} alt={trade.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-wide">{trade.name}</span>
                    </div>
                  </div>
                )}
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
                key={trade}
                {...fadeInUp}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm md:text-base text-foreground">{trade}</span>
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
