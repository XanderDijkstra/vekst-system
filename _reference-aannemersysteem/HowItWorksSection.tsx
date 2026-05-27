import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const steps = [
  { icon: Search, step: "01", title: "Analyse van je huidige processen", description: "We brengen in kaart waar je tijd verliest en welke processen geautomatiseerd kunnen worden." },
  { icon: Wrench, step: "02", title: "We maken je digitale systemen", description: "Op maat gemaakte systemen die naadloos aansluiten bij hoe jij werkt." },
  { icon: Rocket, step: "03", title: "Automatisering bespaart tijd en werk", description: "Meer focus op de werf, minder tijd achter het bureau." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Hoe het werkt
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Van analyse naar resultaat in 3 stappen
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
