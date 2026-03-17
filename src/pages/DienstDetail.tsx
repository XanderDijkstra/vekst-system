import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://aannemersysteem.com";

const dienstData: Record<string, { title: string; description: string }> = {
  "digitalisering-bouwbedrijf": { title: "Digitalisering Bouwbedrijf", description: "Wij helpen bouwbedrijven de stap te maken van papieren processen naar digitale systemen die tijd besparen en fouten voorkomen." },
  "automatisering-bouwbedrijf": { title: "Automatisering Bouwbedrijf", description: "Automatiseer repetitieve taken zoals offertes, follow-ups en planning zodat je team zich kan focussen op wat ertoe doet." },
  "software-integraties": { title: "Software Integraties", description: "Koppel je bestaande software tools aan elkaar zodat data automatisch doorstroomt en je niet meer dubbel werk doet." },
  "ai-oplossingen": { title: "AI Oplossingen", description: "Gebruik kunstmatige intelligentie om slimmer te werken: van automatische offertes tot intelligente planning." },
  // Former systemen pages
  "klantcommunicatie": { title: "Klantcommunicatie Systeem", description: "Op de werf kun je niet altijd opnemen. Wij zorgen dat elke gemiste oproep automatisch wordt opgevolgd via SMS, zodat je geen klant meer mist." },
  "offerte-systeem": { title: "Offerte Automatisering", description: "Het handmatig maken van offertes kost uren en follow-ups worden vaak vergeten. Ons systeem automatiseert het hele proces." },
  "review-systeem": { title: "Review Systeem", description: "Tevreden klanten laten zelden een review achter. Wij sturen automatisch een review-verzoek na elk afgerond project." },
  "planning-systeem": { title: "Planning Systeem", description: "Planning verspreid over Excel, WhatsApp en papieren agenda's zorgt voor chaos. Eén centraal systeem brengt overzicht." },
  "marketing-automatisering": { title: "Marketing Automatisering", description: "Marketing kost tijd die je niet hebt. Onze automatische campagnes draaien op de achtergrond terwijl jij op de werf staat." },
};

const DienstDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = dienstData[slug || ""] || { title: "Dienst", description: "Meer informatie volgt binnenkort." };

  return (
    <PageShell>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Dienst</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{data.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{data.description}</p>
          <div className="mt-12">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/demo">Boek een demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default DienstDetail;
