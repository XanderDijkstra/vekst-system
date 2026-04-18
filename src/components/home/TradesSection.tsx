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
  { name: "Tilbygg & Påbygg", slug: "tilbygg-paabygg" },
  { name: "Klimaanlegg-installatører", slug: "klimaanlegg-installatorer" },
  { name: "Asbestsanering", slug: "asbestsanering" },
  { name: "Baderomsrenovering", slug: "baderomsrenovering" },
  { name: "Glassarbeid", slug: "glassarbeid" },
  { name: "Belegning & Brostein", slug: "belegning" },
  { name: "Betong & Sement", slug: "betong-sement" },
  { name: "Sikkerhetsinstallatører", slug: "sikkerhetsinstallatorer" },
  { name: "Interiørarkitekter", slug: "interiorarkitekter" },
  { name: "Fyrmontering", slug: "fyrmontering" },
  { name: "Takrenner", slug: "takrenner" },
  { name: "Takopplett", slug: "takark" },
  { name: "Smarthus", slug: "smarthus" },
  { name: "Fundamentreparasjon", slug: "fundamentreparasjon" },
  { name: "Garasjeporter", slug: "garasjeporter" },
  { name: "Fasaderens", slug: "fasaderens" },
  { name: "Støpegulv", slug: "stopegulv" },
  { name: "Glassmester", slug: "vindusvaskere" },
  { name: "Gjerder & Porter", slug: "gjerder-porter" },
  { name: "Gartnere", slug: "gartnere" },
  { name: "Interiørdesign", slug: "interiordesign" },
  { name: "Isolering", slug: "isolering" },
  { name: "Kjellerbygging", slug: "kjellerbygging" },
  { name: "Kjøkkenmontering", slug: "kjokkenmontorer" },
  { name: "Karmer & Vinduer", slug: "karmer-vinduer" },
  { name: "Ladestasjon-installatører", slug: "ladestasjon-installatorer" },
  { name: "Murerarbeid", slug: "murerarbeid" },
  { name: "Møbelsnekker", slug: "mobelsnekkere" },
  { name: "Rydding", slug: "rydding" },
  { name: "Ryddetjeneste", slug: "ryddetjeneste" },
  { name: "Parkettgulv", slug: "parkett" },
  { name: "Avløpstjeneste", slug: "avlopstjeneste" },
  { name: "Stråtekkere", slug: "stratekkere" },
  { name: "Persienner & Solskjerming", slug: "persienner-solskjerming" },
  { name: "Rengjøringsfirma", slug: "rengjoringsfirma" },
  { name: "Feiere", slug: "feiere" },
  { name: "Vinterhagebyggere", slug: "vinterhagebyggere" },
  { name: "Pussere", slug: "pussere" },
  { name: "Tømrer", slug: "tomrere" },
  { name: "Trappeheis & Hjemmeheis", slug: "trappeheis-hjemmeheis" },
  { name: "Gulvlegger", slug: "gulvlegger" },
  { name: "Fuktbekjempelse", slug: "fuktbekjempelse" },
  { name: "Fugearbeid", slug: "fugearbeid" },
  { name: "Varmepumpe-installasjon", slug: "varmepumpe-installasjon" },
  { name: "Solcellepaneler", slug: "solcellepaneler" },
  { name: "Svømmebassengbyggere", slug: "svommebasseng-byggere" },
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
            <Link to="/fagomrader">Se alle fagområder</Link>
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

        {/* All trades list */}
        <motion.div {...fadeInUp} className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center mb-10">
            Alle fagområder
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {allTrades.map((trade) => (
              <Link key={trade.slug} to={`/fagomrader/${trade.slug}`} className="flex items-center gap-2.5 group">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm md:text-base text-foreground group-hover:text-accent transition-colors">{trade.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/kontakt">Kom i gang i dag</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradesSection;
