import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.p
            {...fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-6"
          >
            Digitale systemen voor aannemers
          </motion.p>

          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Minder administratie.{" "}
            <span className="text-primary">Meer tijd op de werf.</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl"
          >
            Wij bouwen digitale systemen die aannemers helpen hun processen te
            automatiseren en hun bedrijf efficiënter te laten draaien.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link to="/contact">
                Plan een kennismakingsgesprek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-lg text-base px-8"
            >
              <Link to="/diensten">
                <Play className="mr-2 h-4 w-4" />
                Bekijk onze diensten
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
