import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";

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
  { name: "Dakdekkers", image: dakdekkersImg },
  { name: "Loodgieters", image: loodgieterImg },
  { name: "Elektriciens", image: elektricienImg },
  { name: "Klusbedrijven", image: klusbedrijfImg },
  { name: "Schilders", image: schilderImg },
  { name: "Tuinmannen", image: tuinmanImg },
  { name: "HVAC", image: hvacImg },
  { name: "Aannemers", image: aannemerImg },
  { name: "Tegelzetters", image: tegelzetterImg },
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trades.map((trade, i) => (
            <motion.div
              key={trade.name}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="group relative rounded-2xl overflow-hidden aspect-[5/4] cursor-default"
            >
              <img
                src={trade.image}
                alt={trade.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-wide">
                  {trade.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradesSection;
