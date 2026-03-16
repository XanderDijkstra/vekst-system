import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { Settings, Zap, Plug, Bot } from "lucide-react";

const diensten = [
  { icon: Settings, title: "Digitalisering Bouwbedrijf", href: "/diensten/digitalisering-bouwbedrijf", description: "Van papier naar digitaal. Wij helpen je bedrijf moderniseren." },
  { icon: Zap, title: "Automatisering Bouwbedrijf", href: "/diensten/automatisering-bouwbedrijf", description: "Automatiseer repetitieve taken en bespaar uren per week." },
  { icon: Plug, title: "Software Integraties", href: "/diensten/software-integraties", description: "Koppel je bestaande tools en laat ze naadloos samenwerken." },
  { icon: Bot, title: "AI Oplossingen", href: "/diensten/ai-oplossingen", description: "Gebruik AI om slimmer te werken, niet harder." },
];

const DienstenOverview = () => (
  <PageShell>
    <section className="py-20 md:py-28">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Onze diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Diensten voor bouwbedrijven</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Van strategie tot implementatie — wij bouwen de digitale infrastructuur die jouw bouwbedrijf nodig heeft.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {diensten.map((d) => (
            <Link key={d.href} to={d.href} className="group bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease">
              <d.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default DienstenOverview;
