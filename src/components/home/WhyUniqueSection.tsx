import { motion } from "framer-motion";
import { fadeInUp, systemEase } from "@/lib/animations";
import { Zap, BadgeEuro, FileX2, ShieldCheck, TrendingUp, MessageCircleHeart } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Enkelt å bruke",
    description:
      "Vi bygger systemer som er enkle å forstå. Ingen teknisk kunnskap nødvendig - alt er klikk-og-kjør.",
  },
  {
    icon: BadgeEuro,
    title: "Rimelig",
    description:
      "Abonnementene våre er laget for langsiktig vekst, ikke raske penger. Åpne priser, ingen overraskelser.",
  },
  {
    icon: FileX2,
    title: "Ingen dyre kontrakter",
    description:
      "Hvis det er rimelig og fungerer bra, hvorfor trenger du en kontrakt? Er du fornøyd, blir du værende.",
  },
  {
    icon: MessageCircleHeart,
    title: "Ingen tull",
    description:
      "Vi tror ikke på tomme løfter. Vi forteller deg nøyaktig hva vi skal gjøre, og leverer det. Punktum.",
  },
  {
    icon: ShieldCheck,
    title: "Beviste resultater",
    description:
      "Vi vet hva som virker og har anmeldelsene og kundecasene som beviser det. Ingen gjetting - bare data.",
  },
  {
    icon: TrendingUp,
    title: "Kontinuerlig forbedring",
    description:
      "Vi optimaliserer verktøyene og strategiene våre fortløpende, så firmaet ditt alltid ligger i forkant.",
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
          Derfor er vi "helt unike"…
          <br />
          <span className="text-muted-foreground">akkurat som alle andre, ikke sant?</span>
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
