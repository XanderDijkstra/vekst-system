import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, PhoneOff, FileText, Star, BarChart3, Calendar } from "lucide-react";

const systems = [
  { icon: Globe, title: "Lead Generatie", href: "/systemen/lead-generatie", description: "Een website die nieuwe klanten aantrekt en offerte aanvragen automatisch verzamelt." },
  { icon: PhoneOff, title: "Klantcommunicatie", href: "/systemen/klantcommunicatie", description: "Automatisch een bericht sturen wanneer je een oproep mist." },
  { icon: FileText, title: "Offerte Systeem", href: "/systemen/offerte-systeem", description: "Maak offertes sneller en volg ze automatisch op." },
  { icon: Star, title: "Review Systeem", href: "/systemen/review-systeem", description: "Verzamel automatisch Google reviews van tevreden klanten." },
  { icon: Calendar, title: "Planning Systeem", href: "/systemen/planning-systeem", description: "Beheer projecten en planning op één centrale plek." },
  { icon: BarChart3, title: "Marketing Automatisering", href: "/systemen/marketing-automatisering", description: "Bereik je doelgroep automatisch met de juiste boodschap." },
];

const SystemenOverview = () => (
  <PageShell>
    <section className="py-20 md:py-28">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Onze systemen</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Digitale systemen voor aannemers</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Elk systeem lost een specifiek probleem op. Samen vormen ze het digitale fundament van jouw bouwbedrijf.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((s) => (
            <Link key={s.href} to={s.href} className="group bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease">
              <s.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default SystemenOverview;
