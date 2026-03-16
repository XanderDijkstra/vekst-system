import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] },
};

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          {...fadeInUp}
          className="bg-primary rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground">
            Ontdek hoe jouw bouwbedrijf slimmer kan werken
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
            Plan een vrijblijvend kennismakingsgesprek en ontdek welke systemen jouw bedrijf kunnen transformeren.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link to="/contact">
                Plan een gesprek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
