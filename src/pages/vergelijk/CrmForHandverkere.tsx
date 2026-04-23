import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Info } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fadeInUp, systemEase } from "@/lib/animations";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://www.vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/sammenlign/crm-for-handverkere`;

type Option = {
  name: string;
  tagline: string;
  pros: string[];
  cons: string[];
  pricing: string;
  bestFor: string;
};

const options: Option[] = [
  {
    name: "SuperOffice",
    tagline: "Norsk-utviklet CRM, veletablert, bygget for salgsstyring",
    pros: [
      "Norsk selskap med norsk kundestøtte og opplæring",
      "Solid salgsoppfølging med pipeline, oppgaver og påminnelser",
      "Integrerer med Outlook, Office 365 og Altinn",
      "God mobilapp for å jobbe fra byggeplass eller bil",
    ],
    cons: [
      "Høy startpris - typisk fra 720 kr/bruker/mnd",
      "Læringskurve - bygget for salgsteam, ikke håndverkere",
      "Mye funksjonalitet du som håndverker aldri kommer til å bruke",
      "Overkill for enmannsbedrifter og småbedrifter med under 5 ansatte",
    ],
    pricing: "720-1 400 kr per bruker per mnd etter plan og binding.",
    bestFor:
      "Mellomstore entreprenør- og håndverkerbedrifter med 10+ ansatte og egen salgsrolle.",
  },
  {
    name: "Pipedrive",
    tagline: "Enkel, visuell salgs-CRM - populær blant småbedrifter",
    pros: [
      "Svært enkel å sette opp - du er i gang samme dag",
      "Visuell kanban-pipeline gjør det lett å se hvor hver lead står",
      "Rimelig sammenlignet med SuperOffice og HubSpot",
      "God mobilapp, fungerer bra fra byggeplass",
    ],
    cons: [
      "Ikke bygget for Norge - ingen innebygd Altinn eller norsk MVA-håndtering",
      "Mangler timeregistrering, prosjektstyring og fakturering",
      "Engelsk-først - norsk oversettelse er ok, men ikke alltid god",
      "Trenger integrasjoner mot regnskap og timeregistrering for full arbeidsflyt",
    ],
    pricing: "Fra ca 150 kr/bruker/mnd (Essential) til 850 kr/bruker/mnd (Power).",
    bestFor:
      "Småbedrifter der 1-3 personer jobber med salg og tilbud, og som allerede har separat regnskaps- og fakturaløsning.",
  },
  {
    name: "Tripletex CRM",
    tagline: "CRM-modul i et verktøy du kanskje allerede bruker",
    pros: [
      "Fullt integrert med regnskap, fakturering, timeregistrering og prosjekt",
      "Ingen separat abonnement hvis du allerede bruker Tripletex",
      "Kundedata deles på tvers - én kilde til sannhet",
      "Norsk, stabilt, Visma-eid",
    ],
    cons: [
      "Svakere salgsoppfølging enn en ren CRM som SuperOffice eller Pipedrive",
      "Pipeline-funksjonaliteten er basic - ingen avansert sales forecasting",
      "Krever at hele bedriften bruker Tripletex for å være nyttig",
      "Gir ingen leadgenerering - bare administrasjon av eksisterende kunder",
    ],
    pricing: "Inkludert i Tripletex-pakker - ikke separat CRM-lisens.",
    bestFor:
      "Håndverkerbedrifter som allerede bruker Tripletex og ikke trenger avansert salgsoppfølging.",
  },
  {
    name: "HubSpot CRM",
    tagline: "Markedsleder internasjonalt, gratis grunnplan",
    pros: [
      "Gratis grunnplan med ubegrensede brukere og grunnleggende CRM",
      "Sterk på marketing automation og epostoppfølging",
      "Mange integrasjoner og utvidelser",
      "Stor dokumentasjon og ressurser",
    ],
    cons: [
      "Ikke norsk - ingen Altinn, ingen MVA-håndtering, ingen lokal kundestøtte",
      "Betalte planer blir dyre fort - 500-3 000 kr/bruker/mnd ved salgs-moduler",
      "Bygget for B2B-salgsteam, ikke for håndverkere",
      "Tungvint for en norsk ENK eller liten AS",
    ],
    pricing: "Gratis grunnplan. Betalte planer 500-3 000 kr/bruker/mnd.",
    bestFor:
      "Større håndverker- eller entreprenørbedrifter som driver B2B-salg mot sameier, kommuner og bedriftskunder.",
  },
];
const comparison: { aspect: string; rows: string[] }[] = [
  { aspect: "Startpris", rows: ["720 kr/bruker/mnd", "150 kr/bruker/mnd", "Inkl i Tripletex", "Gratis (begrenset)"] },
  { aspect: "Norsk selskap", rows: ["Ja", "Nei (Estland)", "Ja", "Nei (USA)"] },
  { aspect: "Altinn-integrasjon", rows: ["Ja", "Nei", "Ja", "Nei"] },
  { aspect: "Pipeline-kanban", rows: ["Ja", "Ja - best i klassen", "Enkel", "Ja"] },
  { aspect: "Timeregistrering", rows: ["Via add-on", "Nei", "Ja - innebygd", "Nei"] },
  { aspect: "Fakturering", rows: ["Via add-on", "Nei", "Ja - innebygd", "Via integrasjon"] },
  { aspect: "Prosjektstyring", rows: ["Ja", "Svak", "Ja - innebygd", "Svak"] },
  { aspect: "Marketing automation", rows: ["Grunnleggende", "Grunnleggende", "Ingen", "Sterk"] },
  { aspect: "Mobilapp", rows: ["Ja", "Ja - best i klassen", "Ja", "Ja"] },
  { aspect: "Passer ENK/liten AS", rows: ["Nei", "Ja", "Ja", "Delvis"] },
  { aspect: "Passer 10+ ansatte", rows: ["Ja", "Ja", "Ja", "Ja"] },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Trenger en håndverker egentlig en CRM?",
    answer:
      "Kommer an på størrelsen. En enmannsbedrift med 20-40 kunder per år klarer seg fint med et regneark eller Fiken/Tripletex. En bedrift med 5+ ansatte, mange parallelle prosjekter og gjentakende kunder vil tjene på en CRM. Poenget er ikke teknologien - det er å ha ett sted der kundeinformasjon, tilbud og oppfølging samles.",
  },
  {
    question: "Hva er forskjellen på en CRM og Tripletex/Fiken?",
    answer:
      "Tripletex og Fiken er regnskaps- og faktureringsverktøy som også har kundekort. En ren CRM som SuperOffice eller Pipedrive er bygget rundt salg og oppfølging - pipelines, påminnelser, sannsynlighet for å vinne, aktivitetslogg. Tripletex har en CRM-modul som dekker grunnleggende behov. Pipedrive eller SuperOffice er bedre hvis salg er en fulltidsjobb hos dere.",
  },
  {
    question: "Er CRM og markedsføringsverktøy det samme?",
    answer:
      "Nei. CRM håndterer kundene du allerede har kontakt med. Et markedsføringsverktøy (som Vekst Systemet) skaffer deg kontaktene i utgangspunktet - gjennom nettside, lokal SEO, Google Bedriftsprofil og automatisk lead-oppfølging. En god stack har begge: markedsføring inn, CRM for å lukke. En CRM uten markedsføringssystem er bare en adressebok.",
  },
  {
    question: "Hva er billigst for en enmannsbedrift?",
    answer:
      "HubSpot har en gratis grunnplan som dekker alt en enmannsbedrift trenger i CRM-veien. Pipedrive Essential til ca 150 kr/mnd er neste steg. For en ENK som allerede bruker Tripletex eller Fiken kan det være enklere å bruke det innebygde kundekortet og hoppe over en separat CRM helt.",
  },
  {
    question: "Hvilken passer best for en bedrift med ansatte som jobber på byggeplass?",
    answer:
      "Pipedrive og SuperOffice har begge gode mobilapper. Tripletex-mobilappen er spesielt sterk hvis ansatte også skal registrere timer på samme sted som de ser kundeinfo. Viktigste spørsmål er ikke hvilken CRM er best, men hvilken blir faktisk brukt - den beste appen er den ansatte faktisk åpner.",
  },
  {
    question: "Trenger jeg norsk Altinn-integrasjon i CRM-en?",
    answer:
      "I CRM-en er det sjelden nødvendig - Altinn brukes mest for MVA-rapportering og årsregnskap, som skjer i regnskapsverktøyet ditt. Det viktige er at CRM-en integrerer med regnskapet ditt slik at data flyter automatisk. Tripletex løser det internt. Pipedrive og HubSpot krever integrasjoner via Zapier eller lignende.",
  },
  {
    question: "Kan jeg bytte CRM senere hvis jeg velger feil?",
    answer:
      "Ja, men det er ubehagelig. Eksport og import av kunder, aktiviteter og pipeline tar tid, og historiske data som e-post og aktivitetslogger mister man ofte i overgangen. Velg for dagens behov og den kommende 2-3 års vekstbane - ikke for lengre. Det er bedre å bytte én gang enn å velge for komplekst verktøy fra start.",
  },
  {
    question: "Hvorfor har ikke Vekst Systemet en egen CRM?",
    answer:
      "Vi fokuserer på leadgenerering - nettside, lokal SEO, anmeldelsesautomatisering, tapt-anrop-til-SMS, automatisk lead-oppfølging. Det er komplementært til en CRM. En god stack er: Vekst Systemet for å få leads + Tripletex eller Fiken for regnskap og lett CRM + (valgfritt) SuperOffice eller Pipedrive hvis du har et dedikert salgsteam. Hver komponent løser sitt.",
  },
  {
    question: "Hva med byggebransje-spesifikke verktøy som Byggmappe eller ServiceCard?",
    answer:
      "Det finnes nisjeverktøy bygget for bygg og anlegg - ofte med prosjekt, HMS, kvalitetssikring og CRM i samme pakke. De kan være kraftige, men prisene er høyere og leverandørmarkedet mindre stabilt. For de fleste håndverkerbedrifter fungerer en generell CRM kombinert med Tripletex eller Fiken bedre enn et nisjesystem med færre brukere.",
  },
];

const COLUMNS = ["SuperOffice", "Pipedrive", "Tripletex CRM", "HubSpot"];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CRM for håndverkere: Hvilken passer bedriften din? | Vekst Systemet",
  url: PAGE_URL,
  description:
    "De fleste CRM-er er bygget for selgere - ikke håndverkere. Vi sammenligner SuperOffice, Pipedrive, Tripletex CRM og HubSpot med et faglig blikk på hva som faktisk fungerer i byggebransjen.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "CRM for håndverkere", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
};

const CrmForHandverkere = () => (
  <PageShell>
    <Helmet>
      <title>CRM for håndverkere: Hvilken passer bedriften din? | Vekst Systemet</title>
      <meta
        name="description"
        content="SuperOffice, Pipedrive, Tripletex og HubSpot sammenlignet for norske håndverkerbedrifter. Pris, funksjoner, hvem passer best hvor."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="CRM for håndverkere: Hvilken passer bedriften din?" />
      <meta
        property="og:description"
        content="Ærlig sammenligning av de mest brukte CRM-løsningene for norske håndverkerbedrifter."
      />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container max-w-4xl text-center">
        <motion.span
          {...fadeInUp}
          className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
        >
          Sammenligning
        </motion.span>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground"
        >
          CRM for håndverkere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          De fleste CRM-er er bygget for selgere - ikke håndverkere. Her er
          hva som faktisk passer en norsk rørlegger, elektriker eller
          taktekker, og hvilke du bør hoppe over.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Bestill en gratis samtale <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Link to="/sammenlign">Se alle sammenligninger →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Option cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          De fire alternativene i korthet
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Fire CRM-løsninger norske håndverkere oftest vurderer - fra norsk
          salgs-CRM til et amerikansk gratisverktøy. Ingen er perfekt for alle.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {options.map((o, i) => (
            <motion.div
              key={o.name}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground">{o.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground italic">{o.tagline}</p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent mb-3">Fordeler</p>
                <ul className="space-y-2">
                  {o.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-3">Ulemper</p>
                <ul className="space-y-2">
                  {o.cons.map((con, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-muted/50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Pris</p>
                <p className="text-sm text-foreground leading-relaxed mb-3">{o.pricing}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Passer best for</p>
                <p className="text-sm text-foreground leading-relaxed">{o.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Alle fire side om side
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Priser er indikative og varierer etter plan, binding og antall brukere.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/5"></TableHead>
                {COLUMNS.map((c) => (
                  <TableHead key={c}>{c}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  {row.rows.map((v, j) => (
                    <TableCell key={j} className="text-muted-foreground">{v}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* What a CRM does NOT solve */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          {...fadeInUp}
          className="rounded-2xl bg-card p-10 shadow-system-card border-l-4 border-accent"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Info className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            En CRM fyller ikke pipelinen din
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Alle CRM-er - SuperOffice, Pipedrive, Tripletex og HubSpot - gjør
              samme grunnjobb: de organiserer kundene og leadsene du allerede har.
              De skaffer deg ingen nye.
            </p>
            <p>
              For en rørlegger, elektriker eller maler som vil vokse, er
              flaskehalsen nesten aldri kundedata - det er leadstrømmen. Uten
              Google-synlighet, nettside som konverterer, anmeldelser og
              automatisk oppfølging av tapte anrop, er en CRM bare et vakkert
              bilde av et halvt tomt kundekartotek.
            </p>
            <p>
              Den komplette stacken for en moderne håndverkerbedrift: ett
              regnskapsverktøy (Tripletex eller Fiken) + et markedsføringssystem
              som fyller toppen av traktsen (Vekst Systemet) + eventuelt en ren
              CRM hvis du har dedikert salg. Rekkefølgen er viktig - fiks
              leadstrømmen først.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Ofte stilte spørsmål
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-system-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

    {/* Related */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Også interessant
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/tripletex-vs-fiken">Tripletex vs Fiken</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/guide/markedsforing-for-handverkere">Markedsføring for håndverkere</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/priser">Se prisene våre <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default CrmForHandverkere;
