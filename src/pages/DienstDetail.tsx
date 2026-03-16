import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const dienstData: Record<string, { title: string; description: string }> = {
  "digitalisering-bouwbedrijf": { title: "Digitalisering Bouwbedrijf", description: "Wij helpen bouwbedrijven de stap te maken van papieren processen naar digitale systemen die tijd besparen en fouten voorkomen." },
  "automatisering-bouwbedrijf": { title: "Automatisering Bouwbedrijf", description: "Automatiseer repetitieve taken zoals offertes, follow-ups en planning zodat je team zich kan focussen op wat ertoe doet." },
  "software-integraties": { title: "Software Integraties", description: "Koppel je bestaande software tools aan elkaar zodat data automatisch doorstroomt en je niet meer dubbel werk doet." },
  "ai-oplossingen": { title: "AI Oplossingen", description: "Gebruik kunstmatige intelligentie om slimmer te werken: van automatische offertes tot intelligente planning." },
};

const DienstDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = dienstData[slug || ""] || { title: "Dienst", description: "Meer informatie volgt." };

  return (
    <PageShell>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Dienst</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{data.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{data.description}</p>
          <div className="mt-12">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default DienstDetail;
