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
const PAGE_URL = `${SITE_URL}/sammenlign/timeregistrering-for-handverkere`;

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
    name: "Tripletex timeregistrering",
    tagline: "Integrert i hele ERP-stacken - regnskap, prosjekt og lønn i ett",
    pros: [
      "Timene kobles direkte til prosjekt, kunde og ansatt",
      "Går rett inn i lønnskjøring og fakturering - ingen dobbeltføring",
      "Mobilapp for ansatte med GPS-stempling, foto og utleggsregistrering",
      "Godt testet i norsk byggebransje - stabil og norsk kundestøtte",
      "Rapporter på prosjektlønnsomhet, overtid og ikke-fakturerte timer",
    ],
    cons: [
      "Forutsetter at du bruker Tripletex som regnskapssystem",
      "Læringskurve for ansatte - appen er full-featured, ikke minimalistisk",
      "Månedspris stiger med antall brukere",
    ],
    pricing: "Inkludert i Tripletex-pakker - typisk 400-700 kr/mnd + 50-100 kr per ekstra bruker.",
    bestFor:
      "Håndverkerbedrifter med 3+ ansatte som allerede bruker eller vurderer Tripletex for regnskap og prosjektstyring.",
  },
  {
    name: "Tigo",
    tagline: "Byggeplass-fokusert, enkel mobilapp, norsk",
    pros: [
      "Bygget spesielt for bygg og anlegg - ikke tilpasset fra et generelt verktøy",
      "Svært enkel mobilapp som ansatte faktisk bruker - minimalt med klikk",
      "GPS-stempling, foto og notater direkte fra byggeplass",
      "Integrerer med Tripletex, Visma og Fiken for lønn og fakturering",
      "Norsk selskap med norsk support og norsk KS/HMS-forståelse",
    ],
    cons: [
      "Bare timeregistrering - krever separat regnskap og fakturering",
      "Dyrere per bruker enn Tripletex hvis du allerede har full ERP",
      "Begrenset rapportering sammenlignet med full ERP-verktøy",
    ],
    pricing: "Typisk 129-229 kr per bruker per mnd, avhengig av pakke og funksjoner.",
    bestFor:
      "Bedrifter der ansatte jobber mye på byggeplass og der enkelhet + rask registrering er viktigere enn full ERP-integrasjon.",
  },
  {
    name: "Qbis",
    tagline: "Moderne app, rask registrering, fokus på mobil-først",
    pros: [
      "Ren, rask mobilapp - bygget for å åpne, stemple inn, lukke på 10 sekunder",
      "GPS og geofencing sikrer at timene faktisk registreres på riktig sted",
      "Godkjenning og attestering i app - mindre papir og e-post",
      "Integrerer med Tripletex, Visma, Fiken og PowerOffice Go",
      "Norsk kundestøtte og bransjespesifikk forståelse",
    ],
    cons: [
      "Færre funksjoner enn Tripletex på prosjekt og rapportering",
      "Noen funksjoner krever oppgradering til høyere plan",
      "Mindre brukt enn Tripletex - mindre community-materiale",
    ],
    pricing: "Fra ca 99-149 kr per bruker per mnd for grunnplan.",
    bestFor:
      "Håndverkerbedrifter med 2-15 ansatte som vil ha moderne mobilapp uten å bytte hele ERP-et sitt.",
  },
  {
    name: "SmartHverdag",
    tagline: "Rimelig og enkel - for den minste bedriften",
    pros: [
      "Laveste startpris av alternativene - bygget for ENK og mikrobedrifter",
      "Svært enkel å sette opp og komme i gang med",
      "Timeregistrering + enkel fakturering i samme app",
      "Norsk og med norsk support",
    ],
    cons: [
      "Færre funksjoner - ingen GPS-stempling, enkel prosjektstyring",
      "Skalerer dårlig ved 5+ ansatte",
      "Rapportering og analyse er enkle",
      "Færre integrasjoner mot andre verktøy",
    ],
    pricing: "Fra ca 99 kr per bruker per mnd.",
    bestFor:
      "Enmannsbedrifter og bedrifter med 1-3 ansatte der behovet er enkel timeregistrering uten mye komplekse rapporter.",
  },
];
const comparison: { aspect: string; rows: string[] }[] = [
  { aspect: "Pris per bruker/mnd", rows: ["Inkl i Tripletex", "129-229 kr", "99-149 kr", "Fra 99 kr"] },
  { aspect: "Norsk selskap", rows: ["Ja (Visma)", "Ja", "Ja", "Ja"] },
  { aspect: "Byggeplass-fokusert", rows: ["Middels", "Ja - primærfokus", "Ja", "Nei - generell"] },
  { aspect: "GPS-stempling", rows: ["Ja", "Ja", "Ja - med geofencing", "Nei"] },
  { aspect: "Prosjekt-integrert", rows: ["Ja - fullt", "Ja", "Ja", "Enkel"] },
  { aspect: "Fakturering inkludert", rows: ["Ja", "Nei - integreres", "Nei - integreres", "Ja - enkel"] },
  { aspect: "Lønnskjøring", rows: ["Ja", "Via integrasjon", "Via integrasjon", "Nei"] },
  { aspect: "Foto/notater fra app", rows: ["Ja", "Ja", "Ja", "Begrenset"] },
  { aspect: "Attestering i app", rows: ["Ja", "Ja", "Ja - enkelt", "Nei"] },
  { aspect: "Skalering til 20+ ansatte", rows: ["Ja", "Ja", "Ja", "Nei"] },
  { aspect: "Læringskurve for ansatte", rows: ["Middels", "Lav", "Svært lav", "Lav"] },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hva er den beste timeregistreringsappen for håndverkere?",
    answer:
      "Kommer an på bedriftsstørrelsen og hva du allerede bruker. Bruker du Tripletex fra før, er Tripletex-appen et naturlig valg - timene går rett i prosjekt og lønn. Trenger du en enkel, rask app ansatte faktisk vil bruke, er Tigo eller Qbis ofte bedre. For enmannsbedrifter er SmartHverdag rimeligste vei inn.",
  },
  {
    question: "Hvor mye sparer en typisk håndverker på skikkelig timeregistrering?",
    answer:
      "Bedrifter som bytter fra papirskjema eller Excel til en mobilapp rapporterer i snitt 6-8 gjenvunne timer per ansatt per uke. Det kommer fra færre glemte timer, raskere fakturering, mindre administrasjon og bedre grunnlag for prosjektlønnsomhet. Ved 4 ansatte er det 1 200-1 600 timer i året - eller ca 1-1,5 millioner kr i fakturerbar verdi ved 1 000 kr timepris.",
  },
  {
    question: "Er GPS-stempling lovlig i Norge?",
    answer:
      "Ja, med betingelser. Arbeidsgivere kan bruke GPS i timeregistreringsapper hvis det er saklig begrunnet (eks.: prosjekt-riktig timeføring), de ansatte er informert og det gjøres avtale eller drøfting. Datatilsynet har tydelige retningslinjer. De norske appene (Tripletex, Tigo, Qbis) er bygget for å være GDPR- og personvernloven-kompatible, men du er som arbeidsgiver ansvarlig for å følge prosessen.",
  },
  {
    question: "Kan jeg bruke to systemer - ett for timer, ett for regnskap?",
    answer:
      "Ja, det er vanlig. Tigo og Qbis integrerer med Tripletex, Fiken og Visma slik at timene flyter direkte inn i lønn og fakturering. Fordelen er at du får en bedre timeregistreringsapp enn den innebygde i regnskapsverktøyet ditt. Ulempen er at du har to leverandører å forholde deg til og integrasjonen må settes opp riktig.",
  },
  {
    question: "Hva koster det for en bedrift med 5 ansatte?",
    answer:
      "Grovt estimat per måned: Tripletex full pakke ca 500-800 kr/mnd pluss 50-100 kr per ekstra bruker = 900-1 300 kr. Tigo ca 129-229 kr per bruker × 5 = 645-1 145 kr. Qbis fra 99 kr × 5 = 495-745 kr. SmartHverdag skalerer dårlig på 5+, ikke anbefalt. Disse er uten lønn, regnskap eller prosjektmoduler - bare timer.",
  },
  {
    question: "Hvordan får jeg ansatte til å faktisk bruke appen?",
    answer:
      "To ting: appen må være så rask at det tar mindre enn 15 sekunder å stemple inn, og den må kobles til noe ansatte bryr seg om (lønn). De som blir frustrerte er de som må bruke tregt, klønete verktøy. Tigo og Qbis er gode nettopp fordi de har redusert friksjonen kraftig. Rundt opplæring: 10 minutter demo på jobb-start, deretter én-mot-én-oppfølging i 1-2 uker. Unngå å la sjefen føre timer for ansatte - det undergraver hele systemet.",
  },
  {
    question: "Hva med å bruke Excel eller Google Sheets?",
    answer:
      "Fungerer kortsiktig for enmannsbedrifter. Når du har 2+ ansatte kollapser det: timer kommer inn for sent, prosjekter blir feilkontert, fakturering forsinkes, og du mister oversikt over prosjektlønnsomhet. Kostnad per måned for en timeregistreringsapp er 100-200 kr per ansatt; tapt produktivitet av dårlig registrering er 3 000-8 000 kr per ansatt per måned. Regnestykket går alltid i favør av appen.",
  },
  {
    question: "Gir timeregistrering flere kunder?",
    answer:
      "Nei, og det er viktig å skille. Timeregistrering gir deg kontroll over eksisterende drift - det reduserer tapte timer og gjør fakturering raskere. Det skaffer deg ingen nye kunder. For å få flere leads trenger du en egen nettside, lokal SEO, anmeldelsesfunnel og automatisk lead-oppfølging - altså markedsføringssiden av stacken. Vekst Systemet er komplementært til timeregistreringsappen din, ikke konkurrerende.",
  },
  {
    question: "Kan jeg bytte timeregistreringsapp senere?",
    answer:
      "Ja, men det er mer arbeid enn å bytte regnskapsverktøy. Historiske timer må eksporteres, prosjekter må kartlegges på nytt, og ansatte må læres opp på ny app. Velg for dagens behov og 1-2 års vekstbane, ikke lenger. Det er bedre å starte enkelt og bytte én gang enn å velge et for komplisert verktøy fra start.",
  },
];

const COLUMNS = ["Tripletex", "Tigo", "Qbis", "SmartHverdag"];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Timeregistrering-app for håndverkere: 4 alternativer sammenlignet | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Tripletex, Tigo, Qbis og SmartHverdag sammenlignet for norske håndverkerbedrifter. Pris, byggeplass-funksjoner og hvem passer best hvor.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "Timeregistrering for håndverkere", item: PAGE_URL },
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

const TimeregistreringForHandverkere = () => (
  <PageShell>
    <Helmet>
      <title>Timeregistrering-app for håndverkere: 4 alternativer sammenlignet | Vekst Systemet</title>
      <meta
        name="description"
        content="Tripletex, Tigo, Qbis og SmartHverdag side om side. Pris, byggeplass-funksjoner, mobilapp og hvem passer best hvor."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Timeregistrering-app for håndverkere: 4 alternativer" />
      <meta
        property="og:description"
        content="Ærlig sammenligning av de mest brukte timeregistreringsappene for norske håndverkerbedrifter."
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
          Timeregistrering-app for håndverkere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Håndverkere taper i snitt 6-8 timer i uka på dårlig
          timeregistrering. Her er de fire mest brukte appene i Norge -
          byggeplass-testet og ærlig sammenlignet.
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
          De fire appene på 30 sekunder
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Fra integrert ERP til ren byggeplass-app. Alle er norske, alle dekker
          det lovpålagte - men de er bygget for forskjellige typer bedrifter.
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
          Priser varierer etter plan og antall brukere. Sjekk alltid aktuelle
          priser hos leverandøren før du bestiller.
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

    {/* What it doesn't solve */}
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
            Timeregistrering reduserer tap - den skaper ikke vekst
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              En god timeregistreringsapp gjør at bedriften din får betalt for
              arbeid du allerede utfører. Det er defensive penger - du slutter å
              tape 6-8 timer i uka på feil føring, glemte notater og trege
              faktureringsrunder.
            </p>
            <p>
              Men appen skaffer deg ingen nye kunder. En rørlegger, elektriker
              eller maler som vil vokse, trenger også en leadstrøm. Det kommer
              fra nettside, lokal SEO, anmeldelser og automatisk lead-oppfølging.
            </p>
            <p>
              Kombinasjonen er kraftig: Tripletex, Tigo eller Qbis for å
              registrere timene presist + Vekst Systemet for å sikre at telefonen
              ringer. Du tetter lekkasjer i drift og åpner krana på topp samtidig.
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
            <Link to="/sammenlign/crm-for-handverkere">CRM for håndverkere</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/verktoy/timepris-kalkulator">Timepris-kalkulator</Link>
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

export default TimeregistreringForHandverkere;
