import { motion } from "framer-motion";
import { Clock, PhoneMissed, CalendarX, FileStack } from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const problems = [
  {
    icon: FileStack,
    title: "Offertes die te lang blijven liggen",
    description: "Potentiële klanten haken af omdat ze te lang moeten wachten op een offerte.",
  },
  {
    icon: PhoneMissed,
    title: "Gemiste oproepen van potentiële klanten",
    description: "Op de werf kun je niet altijd opnemen. Elke gemiste oproep is een gemiste kans.",
  },
  {
    icon: CalendarX,
    title: "Chaos in planning",
    description: "Projecten, afspraken en deadlines op verschillende plekken bijhouden kost tijd en zorgt voor fouten.",
  },
  {
    icon: Clock,
    title: "Administratie die te veel tijd kost",
    description: "Avonden en weekenden besteden aan papierwerk in plaats van rust of groei.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Herkenbaar?
        </motion.p>
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl"
        >
          De uitdagingen van elke aannemer
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Wij begrijpen aannemers. Dit zijn de problemen die wij dagelijks zien - en oplossen.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-system-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-destructive" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
