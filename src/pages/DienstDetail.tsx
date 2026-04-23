import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://www.vekst-systemet.no";

const dienstData: Record<string, { title: string; description: string }> = {
  "digitalisering-aannemers": { title: "Digitalisering for håndverkere", description: "Vi hjelper håndverkere med å ta steget fra papirprosesser til digitale systemer som sparer tid og forhindrer feil." },
  "automatisering-aannemers": { title: "Automatisering for håndverkere", description: "Automatiser repetitive oppgaver som tilbud, oppfølging og planlegging, så teamet ditt kan fokusere på det som virkelig betyr noe." },
  "software-integraties": { title: "Programvareintegrasjoner", description: "Koble de eksisterende verktøyene dine sammen så data flyter automatisk og du slipper dobbeltarbeid." },
  "ai-oplossingen": { title: "AI-løsninger", description: "Bruk kunstig intelligens til å jobbe smartere: fra automatiske tilbud til intelligent planlegging." },
  // Former systemen pages
  "klantcommunicatie": { title: "Kundekommunikasjonssystem", description: "På byggeplassen kan du ikke alltid ta telefonen. Vi sørger for at hvert tapt anrop følges opp automatisk via SMS, så du aldri mister en kunde." },
  "offerte-systeem": { title: "Tilbudsautomatisering", description: "Å lage tilbud manuelt tar timer, og oppfølgingen blir ofte glemt. Systemet vårt automatiserer hele prosessen." },
  "review-systeem": { title: "Anmeldelsessystem", description: "Fornøyde kunder legger sjelden igjen en anmeldelse. Vi sender automatisk en anmeldelsesforespørsel etter hvert fullført prosjekt." },
  "planning-systeem": { title: "Planleggingssystem", description: "Planlegging spredt over Excel, WhatsApp og papirkalendere gir kaos. Ett sentralt system gir full oversikt." },
  "marketing-automatisering": { title: "Markedsføringsautomatisering", description: "Markedsføring koster tid du ikke har. De automatiske kampanjene våre går i bakgrunnen mens du er på byggeplassen." },
};

const DienstDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = dienstData[slug || ""] || { title: "Tjeneste", description: "Mer informasjon kommer snart." };

  return (
    <PageShell>
      <Helmet>
        <title>{data.title} | Vekst Systemet</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`${SITE_URL}/tjenester/${slug}`} />
        <meta property="og:title" content={`${data.title} | Vekst Systemet`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={`${SITE_URL}/tjenester/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
      </Helmet>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Tjeneste</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{data.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{data.description}</p>
          <div className="mt-12">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/demo">Bestill demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default DienstDetail;
