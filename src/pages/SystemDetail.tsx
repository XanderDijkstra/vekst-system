import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const systemData: Record<string, { title: string; subtitle: string; problem: string; solution: string; benefits: string[] }> = {
  "lead-generatie": {
    title: "Lead Generatie Website",
    subtitle: "Trek automatisch nieuwe klanten aan",
    problem: "Je bent afhankelijk van mond-tot-mondreclame en mist potentiële klanten die online zoeken naar aannemers.",
    solution: "Wij bouwen een professionele website die geoptimaliseerd is voor zoekmachines en automatisch offerte aanvragen verzamelt.",
    benefits: ["Automatische lead capture", "SEO geoptimaliseerd", "Offerte formulieren", "Integratie met je CRM"],
  },
  "klantcommunicatie": {
    title: "Klantcommunicatie Systeem",
    subtitle: "Mis nooit meer een kans",
    problem: "Op de werf kun je niet altijd opnemen. Elke gemiste oproep is een potentiële klant die naar de concurrent gaat.",
    solution: "Automatisch een SMS versturen wanneer je een oproep mist, zodat de klant weet dat je terugbelt.",
    benefits: ["Automatische SMS bij gemiste oproep", "Professionele uitstraling", "Meer klanten behouden", "Eenvoudig in te stellen"],
  },
  "offerte-systeem": {
    title: "Offerte Automatisering",
    subtitle: "Sneller offertes, meer opdrachten",
    problem: "Het handmatig maken van offertes kost uren en follow-ups worden vaak vergeten.",
    solution: "Een systeem dat offertes gedeeltelijk automatiseert en automatisch opvolgt tot de klant beslist.",
    benefits: ["Templates voor offertes", "Automatische follow-ups", "Digitale handtekeningen", "Overzicht van alle offertes"],
  },
  "review-systeem": {
    title: "Review Systeem",
    subtitle: "Bouw je online reputatie",
    problem: "Tevreden klanten laten zelden een review achter, terwijl dat essentieel is voor nieuwe klanten.",
    solution: "Automatisch een review-verzoek sturen na afronding van een project.",
    benefits: ["Automatische review verzoeken", "Google reviews verhogen", "Professioneel opvolgen", "Meer vertrouwen online"],
  },
  "planning-systeem": {
    title: "Planning Systeem",
    subtitle: "Eén centrale plek voor al je projecten",
    problem: "Planning verspreid over Excel, WhatsApp en papieren agenda's zorgt voor gemiste deadlines en miscommunicatie.",
    solution: "Een centraal planningssysteem waar je team, projecten en deadlines samenkomen.",
    benefits: ["Centraal overzicht", "Team planning", "Deadline management", "Mobiel toegankelijk"],
  },
  "marketing-automatisering": {
    title: "Marketing Automatisering",
    subtitle: "Bereik klanten op het juiste moment",
    problem: "Marketing kost tijd die je niet hebt, maar zonder marketing komen er geen nieuwe klanten.",
    solution: "Automatische marketing campagnes die op de achtergrond draaien terwijl jij op de werf staat.",
    benefits: ["Automatische e-mails", "Social media planning", "Doelgerichte campagnes", "Meetbare resultaten"],
  },
};

const SystemDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = systemData[slug || ""] || systemData["lead-generatie"];

  return (
    <PageShell>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Systeem</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{data.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">{data.subtitle}</p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">Probleem</h2>
              <p className="text-muted-foreground leading-relaxed">{data.problem}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Oplossing</h2>
              <p className="text-muted-foreground leading-relaxed">{data.solution}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Voordelen</h2>
              <ul className="space-y-2">
                {data.benefits.map((b) => (
                  <li key={b} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">
                Plan een gesprek over dit systeem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default SystemDetail;
