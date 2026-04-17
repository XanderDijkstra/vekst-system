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
  { name: "Tilbygg & Påbygg", slug: "aanbouw-uitbouw" },
  { name: "Klimaanlegg-installatører", slug: "airco-installateurs" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Baderomsrenovering", slug: "badkamerrenovatie" },
  { name: "Glassarbeid", slug: "beglazing" },
  { name: "Belegning & Brostein", slug: "bestrating" },
  { name: "Betong & Sement", slug: "beton-cement" },
  { name: "Sikkerhetsinstallatører", slug: "beveiligingsinstallateurs" },
  { name: "Interiørarkitekter", slug: "binnenhuisarchitecten" },
  { name: "Fyrmontering", slug: "cv-ketel-montage" },
  { name: "Takrenner", slug: "dakgoten" },
  { name: "Takopplett", slug: "dakkapellen" },
  { name: "Smarthus", slug: "domotica" },
  { name: "Fundamentreparasjon", slug: "funderingsherstel" },
  { name: "Garasjeporter", slug: "garagedeuren" },
  { name: "Fasaderens", slug: "gevelreiniging" },
  { name: "Støpegulv", slug: "gietvloeren" },
  { name: "Glassmester", slug: "glazenwassers" },
  { name: "Gjerder & Porter", slug: "hekwerk-poorten" },
  { name: "Gartnere", slug: "hoveniers" },
  { name: "Interiørdesign", slug: "interieurontwerp" },
  { name: "Isolering", slug: "isolatiebedrijven" },
  { name: "Kjellerbygging", slug: "kelderbouw" },
  { name: "Kjøkkenmontering", slug: "keukenmonteurs" },
  { name: "Karmer & Vinduer", slug: "kozijnen-ramen" },
  { name: "Ladestasjon-installatører", slug: "laadpaal-installateurs" },
  { name: "Murerarbeid", slug: "metselwerk" },
  { name: "Møbelsnekker", slug: "meubelmakers" },
  { name: "Rydding", slug: "ontruiming" },
  { name: "Ryddetjeneste", slug: "opruimservice" },
  { name: "Parkettgulv", slug: "parketvloeren" },
  { name: "Avløpstjeneste", slug: "rioolservice" },
  { name: "Stråtekkere", slug: "rietdekkers" },
  { name: "Persienner & Solskjerming", slug: "rolluiken-zonwering" },
  { name: "Rengjøringsfirma", slug: "schoonmaakbedrijven" },
  { name: "Feiere", slug: "schoorsteenvegers" },
  { name: "Vinterhagebyggere", slug: "serrebouwers" },
  { name: "Pussere", slug: "stukadoors" },
  { name: "Tømrer", slug: "timmerlieden" },
  { name: "Trappeheis & Hjemmeheis", slug: "trapliften-thuisliften" },
  { name: "Gulvlegger", slug: "vloerlegger" },
  { name: "Fuktbekjempelse", slug: "vochtbestrijding" },
  { name: "Fugearbeid", slug: "voegwerk" },
  { name: "Varmepumpe-installasjon", slug: "warmtepomp-installatie" },
  { name: "Solcellepaneler", slug: "zonnepanelen" },
  { name: "Svømmebassengbyggere", slug: "zwembadbouwers" },
];

const TradesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto"
        >
          Fagene vi hjelper
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-xl mx-auto leading-relaxed"
        >
          Og mange flere…
        </motion.p>

        <motion.div {...fadeInUp} className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to="/vakgebieden">Se alle fagområder</Link>
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
            Alle fagområder
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
            <Link to="/contact">Kom i gang i dag</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradesSection;
