import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeInUp, systemEase } from "@/lib/animations";

const CaseStudySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Kundecase
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Håndverker sparer 10 timer i uken
        </motion.h2>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4, ease: systemEase, delay: 0.1 }}
          className="mt-10 bg-card rounded-2xl shadow-system-card p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">Utfordring</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                En håndverker brukte daglig timer på å lage og følge opp tilbud manuelt. Potensielle kunder falt fra på grunn av treg responstid.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Løsning</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Vi implementerte et tilbudsautomatiseringssystem med automatisk oppfølging, en leadgenerering-nettside og SMS-systemet for tapte anrop.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Resultat</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                10 timer i uken spart på administrasjon, 40 % flere tilbud sendt og høyere kundetilfredshet takket være raskere oppfølging.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { icon: Clock, label: "10 timer/uke spart" },
              { icon: TrendingUp, label: "40 % flere tilbud" },
              { icon: Zap, label: "< 5 min responstid" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-sm font-medium text-foreground tabular-nums">
                <stat.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                {stat.label}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-lg">
              <Link to="/kundecase">
                Se alle kundecase
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
