import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SectorPage = () => (
  <PageShell>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Sector</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Digitalisering voor Aannemers</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          De bouwsector digitaliseert. Aannemers die nu investeren in slimme systemen besparen tijd, verlagen kosten en groeien sneller dan de concurrentie.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Problemen in de bouwsector</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Veel aannemers besteden meer tijd aan administratie dan aan bouwen. Offertes worden handmatig gemaakt, planning gaat via WhatsApp en Excel, en klantcommunicatie is reactief in plaats van proactief.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Welke processen kun je automatiseren?</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {["Offerte aanvragen en opvolging", "Klantcommunicatie en gemiste oproepen", "Project planning en teamcoördinatie", "Review verzameling en marketing", "Facturatie en administratie"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="rounded-lg">
            <Link to="/contact">Ontdek wat wij voor jou kunnen doen <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </PageShell>
);

export default SectorPage;
