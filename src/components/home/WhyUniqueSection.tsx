import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { Zap, BadgeEuro, FileX2, ShieldCheck, TrendingUp, MessageCircleHeart } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Eenvoudig in gebruik",
    description:
      "Wij bouwen systemen die makkelijk te begrijpen zijn. Geen technische kennis nodig — alles is klik-en-klaar.",
  },
  {
    icon: BadgeEuro,
    title: "Betaalbaar",
    description:
      "Onze abonnementen zijn gebouwd voor groei op lange termijn, niet voor snelle winst. Transparante prijzen, geen verrassingen.",
  },
  {
    icon: FileX2,
    title: "Geen dure contracten",
    description:
      "Als het betaalbaar en goed werkt, waarom zou je dan een contract nodig hebben? Als je tevreden bent, blijf je.",
  },
  {
    icon: MessageCircleHeart,
    title: "Geen onzin",
    description:
      "Wij geloven niet in mooie praatjes. We vertellen je precies wat we gaan doen en leveren dat. Punt.",
  },
  {
    icon: ShieldCheck,
    title: "Bewezen resultaten",
    description:
      "We weten wat werkt en hebben de reviews en case studies om het te bewijzen. Geen gokwerk, maar data.",
  },
  {
    icon: TrendingUp,
    title: "Constante verbeteringen",
    description:
      "We optimaliseren continu onze tools en strategieën, zodat jouw bedrijf altijd voorop loopt.",
  },
];

const WhyUniqueSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto"
        >
          Waarom wij "totaal uniek" zijn…
          <br />
          <span className="text-muted-foreground">net als iedereen, toch?</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="rounded-2xl bg-primary p-7 md:p-8 flex flex-col gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground">
                {usp.title}
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/75 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUniqueSection;
