import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe, PhoneOff, FileText, Star, BarChart3, Calendar, FolderKanban, Plug,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const systems = [
  { icon: Globe, title: "Lead Generatie Website", description: "Een website die nieuwe klanten aantrekt en offerte aanvragen automatisch verzamelt.", href: "/systemen/lead-generatie" },
  { icon: PhoneOff, title: "Gemiste Oproep → SMS", description: "Automatisch een bericht sturen wanneer je een oproep mist.", href: "/systemen/klantcommunicatie" },
  { icon: FileText, title: "Offerte Automatisering", description: "Maak offertes sneller en volg ze automatisch op.", href: "/systemen/offerte-systeem" },
  { icon: Star, title: "Review Systeem", description: "Verzamel automatisch Google reviews van tevreden klanten.", href: "/systemen/review-systeem" },
  { icon: BarChart3, title: "Marketing Automatisering", description: "Bereik je doelgroep automatisch met de juiste boodschap op het juiste moment.", href: "/systemen/marketing-automatisering" },
  { icon: Calendar, title: "Planning Systeem", description: "Beheer projecten en planning op één centrale plek.", href: "/systemen/planning-systeem" },
  { icon: FolderKanban, title: "Project Management", description: "Houd overzicht over al je projecten, taken en deadlines.", href: "/systemen/planning-systeem" },
  { icon: Plug, title: "Integraties & Automatisering", description: "Koppel je bestaande tools en laat ze naadloos samenwerken.", href: "/diensten/software-integraties" },
];

const SystemsGridSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Onze systemen
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Digitale systemen die voor je werken
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Elk systeem is gebouwd om een specifiek probleem op te lossen — samen vormen ze het digitale fundament van jouw bouwbedrijf.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
            >
              <Link
                to={system.href}
                className="group block bg-background rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease h-full"
              >
                <system.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors duration-250 ease-system-ease" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-foreground text-sm">{system.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{system.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsGridSection;
