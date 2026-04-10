import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  { name: "Airco installateurs", slug: "airco-installateurs" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Badkamer renovatie", slug: "badkamerrenovatie" },
  { name: "Beglazing", slug: "beglazing" },
  { name: "Bestrating", slug: "bestrating" },
  { name: "Beton & Cement", slug: "beton-cement" },
  { name: "Beveiligingsinstallateurs", slug: "beveiligingsinstallateurs" },
  { name: "Binnenhuisarchitecten", slug: "binnenhuisarchitecten" },
  { name: "Cv-ketel montage", slug: "cv-ketel-montage" },
  { name: "Dakgoten", slug: "dakgoten" },
  { name: "Dakkapellen", slug: "dakkapellen" },
  { name: "Domotica", slug: "domotica" },
  { name: "Funderingsherstel", slug: "funderingsherstel" },
  { name: "Garagedeuren", slug: "garagedeuren" },
  { name: "Gevelreiniging", slug: "gevelreiniging" },
  { name: "Gietvloeren", slug: "gietvloeren" },
  { name: "Glaszetter", slug: "glazenwassers" },
  { name: "Hekwerk & Poorten", slug: "hekwerk-poorten" },
  { name: "Hoveniers", slug: "hoveniers" },
  { name: "Interieurontwerp", slug: "interieurontwerp" },
  { name: "Isolatie", slug: "isolatiebedrijven" },
  { name: "Kelderbouw", slug: "kelderbouw" },
  { name: "Keukenmontage", slug: "keukenmonteurs" },
  { name: "Kozijnen & Ramen", slug: "kozijnen-ramen" },
  { name: "Laadpaal installateurs", slug: "laadpaal-installateurs" },
  { name: "Metselwerk", slug: "metselwerk" },
  { name: "Meubelmakers", slug: "meubelmakers" },
  { name: "Ontruiming", slug: "ontruiming" },
  { name: "Opruimservice", slug: "opruimservice" },
  { name: "Parketvloeren", slug: "parketvloeren" },
  { name: "Rioolservice", slug: "rioolservice" },
  { name: "Rietdekkers", slug: "rietdekkers" },
  { name: "Rolluiken & Zonwering", slug: "rolluiken-zonwering" },
  { name: "Schoonmaakbedrijf", slug: "schoonmaakbedrijven" },
  { name: "Schoorsteenvegers", slug: "schoorsteenvegers" },
  { name: "Serrebouwers", slug: "serrebouwers" },
  { name: "Stukadoor", slug: "stukadoors" },
  { name: "Timmerwerk", slug: "timmerlieden" },
  { name: "Trapliften & Thuisliften", slug: "trapliften-thuisliften" },
  { name: "Vloerlegger", slug: "vloerlegger" },
  { name: "Vochtbestrijding", slug: "vochtbestrijding" },
  { name: "Voegwerk", slug: "voegwerk" },
  { name: "Warmtepomp installatie", slug: "warmtepomp-installatie" },
  { name: "Zonnepanelen", slug: "zonnepanelen" },
  { name: "Zwembadbouwers", slug: "zwembadbouwers" },
];

const TradesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto"
        >
          Vakdiensten die wij helpen
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-xl mx-auto leading-relaxed"
        >
          En nog veel meer…
        </motion.p>

        <motion.div {...fadeInUp} className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to="/vakgebieden">Bekijk alle vakdiensten</Link>
          </Button>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* All trades list */}
        <motion.div {...fadeInUp} className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center mb-10">
            Alle vakgebieden
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {allTrades.map((trade) => (
              <Link key={trade.slug} to={`/vakgebieden/${trade.slug}`} className="flex items-center gap-2.5 group">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm md:text-base text-foreground group-hover:text-accent transition-colors">{trade.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Start vandaag nog</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradesSection;
