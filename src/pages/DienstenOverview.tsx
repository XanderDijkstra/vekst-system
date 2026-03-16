import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import {
  Globe, PhoneOff, FileText, Star, BarChart3, Calendar,
  Settings, Zap, Plug, Bot,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const sections = [
  {
    heading: "Systemen",
    description: "Digitale systemen die 24/7 voor je werken — elk gebouwd om een specifiek probleem op te lossen.",
    items: [
      { icon: Globe, title: "Lead Generatie Website", href: "/diensten/lead-generatie", description: "Een website die nieuwe klanten aantrekt en offerte aanvragen automatisch verzamelt." },
      { icon: PhoneOff, title: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie", description: "Automatisch een bericht sturen wanneer je een oproep mist." },
      { icon: FileText, title: "Offerte Automatisering", href: "/diensten/offerte-systeem", description: "Maak offertes sneller en volg ze automatisch op." },
      { icon: Star, title: "Review Systeem", href: "/diensten/review-systeem", description: "Verzamel automatisch Google reviews van tevreden klanten." },
      { icon: BarChart3, title: "Marketing Automatisering", href: "/diensten/marketing-automatisering", description: "Bereik je doelgroep automatisch met de juiste boodschap." },
      { icon: Calendar, title: "Planning Systeem", href: "/diensten/planning-systeem", description: "Beheer projecten en planning op één centrale plek." },
    ],
  },
  {
    heading: "Services",
    description: "Van strategie tot implementatie — wij bouwen de digitale infrastructuur die jouw bouwbedrijf nodig heeft.",
    items: [
      { icon: Settings, title: "Digitalisering Bouwbedrijf", href: "/diensten/digitalisering-bouwbedrijf", description: "Van papier naar digitaal. Wij helpen je bedrijf moderniseren." },
      { icon: Zap, title: "Automatisering Bouwbedrijf", href: "/diensten/automatisering-bouwbedrijf", description: "Automatiseer repetitieve taken en bespaar uren per week." },
      { icon: Plug, title: "Software Integraties", href: "/diensten/software-integraties", description: "Koppel je bestaande tools en laat ze naadloos samenwerken." },
      { icon: Bot, title: "AI Oplossingen", href: "/diensten/ai-oplossingen", description: "Gebruik AI om slimmer te werken, niet harder." },
    ],
  },
];

const DienstenOverview = () => (
  <PageShell>
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Onze diensten</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Alles wat je nodig hebt om te groeien</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Van slimme systemen tot volledige implementatie — ontdek hoe wij bouwbedrijven helpen digitaliseren en automatiseren.
        </motion.p>

        {sections.map((section, sIdx) => (
          <div key={section.heading} className={sIdx === 0 ? "mt-16" : "mt-20"}>
            <motion.h2 {...fadeInUp} className="text-2xl font-semibold tracking-tight text-foreground mb-2">
              {section.heading}
            </motion.h2>
            <motion.p {...fadeInUp} className="text-muted-foreground mb-8 max-w-xl">
              {section.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.href}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
                >
                  <Link
                    to={item.href}
                    className="group block bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease h-full"
                  >
                    <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                    <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default DienstenOverview;
