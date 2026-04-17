import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const steps = [
  { icon: Search, step: "01", title: "Analyse av dagens prosesser", description: "Vi kartlegger hvor du mister tid og hvilke prosesser som kan automatiseres." },
  { icon: Wrench, step: "02", title: "Vi bygger de digitale systemene dine", description: "Skreddersydde systemer som passer sømløst med måten du jobber på." },
  { icon: Rocket, step: "03", title: "Automatisering sparer tid og arbeid", description: "Mer fokus på byggeplassen, mindre tid bak skrivebordet." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Slik fungerer det
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Fra analyse til resultat på 3 steg
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-muted/60 tabular-nums select-none">{step.step}</span>
              <div className="mt-4">
                <step.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
