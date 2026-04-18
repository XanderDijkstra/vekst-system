import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://vekst-systemet.no";

const SectorPage = () => (
  <PageShell>
    <Helmet>
      <title>Digitalisering for håndverkere | Vekst Systemet</title>
      <meta name="description" content="Håndverkerbransjen digitaliserer. Se hvordan håndverkere sparer tid og vokser raskere med smarte digitale systemer." />
      <link rel="canonical" href={`${SITE_URL}/sector/digitalisering-voor-aannemers`} />
      <meta property="og:title" content="Digitalisering for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Håndverkerbransjen digitaliserer. Se hvordan håndverkere sparer tid og vokser raskere med smarte digitale systemer." />
      <meta property="og:url" content={`${SITE_URL}/sector/digitalisering-voor-aannemers`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Bransje</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Digitalisering for håndverkere</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Håndverkerbransjen digitaliserer. Håndverkere som investerer i smarte systemer nå sparer tid, senker kostnader og vokser raskere enn konkurrentene.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Problemer håndverkere kjenner seg igjen i</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Mange håndverkere bruker mer tid på administrasjon enn på selve arbeidet. Tilbud lages manuelt, planlegging går via WhatsApp og Excel, og kundekommunikasjon er reaktiv i stedet for proaktiv.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Hvilke prosesser kan du automatisere?</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {["Tilbudsforespørsler og oppfølging", "Kundekommunikasjon og tapte anrop", "Prosjektplanlegging og teamkoordinering", "Innhenting av anmeldelser og markedsføring", "Fakturering og administrasjon"].map(item => (
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
            <Link to="/demo">Bestill demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </PageShell>
);

export default SectorPage;
