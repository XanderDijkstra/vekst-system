import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe, PhoneOff, FileText, Star, BarChart3, Calendar, Settings, Plug,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const systems = [
  { icon: Globe, title: "Leadgenerering-nettside", description: "En nettside som tiltrekker nye kunder og samler tilbudsforespørsler automatisk.", href: "/diensten/lead-generatie" },
  { icon: PhoneOff, title: "Tapt anrop → SMS", description: "Send automatisk en melding når du mister et anrop.", href: "/diensten/klantcommunicatie" },
  { icon: FileText, title: "Tilbudsautomatisering", description: "Lag tilbud raskere og følg dem opp automatisk.", href: "/diensten/offerte-systeem" },
  { icon: Star, title: "Anmeldelsessystem", description: "Samle Google-anmeldelser fra fornøyde kunder automatisk.", href: "/diensten/review-systeem" },
  { icon: BarChart3, title: "Markedsføringsautomatisering", description: "Nå målgruppen din automatisk med riktig budskap til riktig tid.", href: "/diensten/marketing-automatisering" },
  { icon: Calendar, title: "Planleggingssystem", description: "Administrer prosjekter og planlegging på ett sentralt sted.", href: "/diensten/planning-systeem" },
  { icon: Settings, title: "Digitalisering", description: "Fra papir til digitalt. Vi hjelper firmaet ditt å modernisere seg.", href: "/diensten/digitalisering-aannemers" },
  { icon: Plug, title: "Integrasjoner & Automatisering", description: "Koble sammen verktøyene du allerede bruker, så de jobber sømløst.", href: "/diensten/software-integraties" },
];

const SystemsGridSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Våre tjenester
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Digitale systemer som jobber for deg
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Hvert system er laget for å løse et konkret problem - sammen utgjør de det digitale fundamentet i håndverkerbedriften din.
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
