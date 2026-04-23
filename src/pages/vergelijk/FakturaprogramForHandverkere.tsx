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
const PAGE_URL = `${SITE_URL}/sammenlign/fakturaprogram-for-handverkere`;

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
    name: "Fiken",
    tagline: "Enkelt, rimelig - bygget for ENK og små AS",
    pros: [
      "Rimeligst i startfasen - fra ca 99 kr/mnd for laveste plan",
      "Enkelt å sette seg inn i uten regnskapsbakgrunn",
      "God norsk integrasjon: bank, Altinn, Vipps",
      "Aktivt norsk kundestøtte-community",
    ],
    cons: [
      "Svakere prosjektstyring enn konkurrentene",
      "Skalerer dårlig ved 5+ ansatte",
      "Færre tredjeparts-integrasjoner enn Tripletex",
    ],
    pricing: "Fra ca 99 kr/mnd. Full plan 299-449 kr/mnd. Lønn ca 99 kr per ansatt.",
    bestFor: "ENK og AS med 1-3 personer som trenger lovlig fakturering og regnskap uten komplekse moduler.",
  },
  {
    name: "Tripletex",
    tagline: "Full ERP-pakke - regnskap, prosjekt, timeregistrering, lønn i ett",
    pros: [
      "Dekker alt fra fakturering til prosjekt og lønn i samme system",
      "Sterk prosjektmodul og timeregistrering for byggebransje",
      "Stabilt, Visma-eid, mange integrasjoner",
      "Skalerer godt fra enmannsforetak til 20+ ansatte",
    ],
    cons: [
      "Høyere pris enn Fiken og Conta",
      "Læringskurve - mye funksjonalitet å sette seg inn i",
      "Enkelte funksjoner krever tilleggsmoduler",
    ],
    pricing: "Fra ca 249 kr/mnd. Full pakke 500-800 kr/mnd + 50-100 kr per bruker.",
    bestFor: "Håndverkerbedrifter med 2+ ansatte som trenger prosjekt, timer og lønn i samme system.",
  },
  {
    name: "Conta",
    tagline: "Nyere aktør - enkel, moderne, rimelig",
    pros: [
      "Moderne grensesnitt og rask onboarding",
      "Rimeligere enn Tripletex på tilsvarende funksjonalitet",
      "Gratis plan for helt små bedrifter",
      "God mobilapp",
    ],
    cons: [
      "Mindre etablert enn Fiken og Tripletex - mindre community",
      "Færre tredjeparts-integrasjoner",
      "Begrenset prosjektmodul",
    ],
    pricing: "Gratis grunnplan. Betalte planer 149-399 kr/mnd.",
    bestFor: "Bedrifter som vil ha et moderne, rimelig alternativ og ikke trenger tung prosjektstyring.",
  },
  {
    name: "Visma eAccounting",
    tagline: "Mellomklassen - Visma-pålitelighet for småbedrifter",
    pros: [
      "Stabilt Visma-merkevare, mange norske integrasjoner",
      "Innebygd Altinn og MVA-håndtering",
      "Skalerer oppover mot Visma-suiten",
      "God for bedrifter som senere vil oppgradere til tyngre Visma-løsninger",
    ],
    cons: [
      "Mer komplekst grensesnitt enn Fiken og Conta",
      "Prisen ligger over Fiken og Conta på tilsvarende funksjonalitet",
      "Bedre for generelle SMB enn spesifikt for håndverk",
    ],
    pricing: "Fra ca 249 kr/mnd. Pakker med lønn og utvidet fakturering 400-700 kr/mnd.",
    bestFor: "Bedrifter som allerede bruker Visma andre steder, eller som planlegger å vokse inn i Visma-økosystemet.",
  },
  {
    name: "PowerOffice Go",
    tagline: "Automasjon-fokusert - AI-drevet fakturering og bokføring",
    pros: [
      "Sterk på automasjon - bilag leses inn automatisk",
      "Innebygd bankavstemming og AI-kategorisering",
      "Bra for bedrifter som vil spare tid på administrasjon",
      "Moderne API og integrasjoner",
    ],
    cons: [
      "Høyere startpris enn Fiken og Conta",
      "Læringskurve på de mer avanserte funksjonene",
      "Bedre for tradisjonelle tjenesteytere enn spesifikt håndverk",
    ],
    pricing: "Fra ca 299 kr/mnd. Full pakke med lønn og prosjekt 500-900 kr/mnd.",
    bestFor: "Etablerte bedrifter med mye bilagshåndtering som vil automatisere regnskapsarbeid.",
  },
  {
    name: "24SevenOffice",
    tagline: "Skybasert ERP - dekker regnskap, CRM, prosjekt og lønn",
    pros: [
      "Full ERP med CRM, prosjekt, regnskap, lønn - alt i ett",
      "Kraftig rapportering og analyse",
      "Integrerer bra med norske fagsystemer",
      "Kan erstatte flere separate systemer",
    ],
    cons: [
      "Høyest pris av alternativene",
      "Overkill for små bedrifter",
      "Krever mer implementering og opplæring",
    ],
    pricing: "Fra ca 499 kr/mnd. Full pakke 800-1 500 kr/mnd avhengig av moduler.",
    bestFor: "Mellomstore håndverker- og entreprenørbedrifter med 10+ ansatte og behov for ERP.",
  },
];
const comparison: { aspect: string; rows: string[] }[] = [
  { aspect: "Startpris (kr/mnd)", rows: ["99", "249", "0 (gratis)", "249", "299", "499"] },
  { aspect: "Full plan", rows: ["299-449", "500-800", "149-399", "400-700", "500-900", "800-1 500"] },
  { aspect: "Altinn + MVA", rows: ["Ja", "Ja", "Ja", "Ja", "Ja", "Ja"] },
  { aspect: "Timeregistrering", rows: ["Enkel", "Sterk", "Enkel", "Middels", "Middels", "Sterk"] },
  { aspect: "Prosjekt", rows: ["Svak", "Sterk", "Begrenset", "Middels", "Middels", "Sterk"] },
  { aspect: "Lønnskjøring", rows: ["Tillegg", "Inkludert", "Tillegg", "Tillegg", "Inkludert", "Inkludert"] },
  { aspect: "Mobilapp", rows: ["Ja", "Ja", "Ja", "Ja", "Ja", "Ja"] },
  { aspect: "AI/automasjon", rows: ["Grunnleggende", "Middels", "Grunnleggende", "Middels", "Sterk", "Middels"] },
  { aspect: "Passer ENK", rows: ["Ja - best", "Delvis", "Ja", "Delvis", "Nei", "Nei"] },
  { aspect: "Passer 10+ ansatte", rows: ["Nei", "Ja", "Delvis", "Ja", "Ja", "Ja - best"] },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hvilket fakturaprogram er best for en håndverker som akkurat har startet?",
    answer:
      "Fiken er som regel det første valget - rimelig start, enkelt å komme i gang med, dekker alle lovkravene for ENK og AS. Conta er et godt alternativ hvis du vil ha et moderne grensesnitt. Begge koster mellom 99 og 299 kr per måned i startfasen, og du kan bytte senere hvis behovet vokser.",
  },
  {
    question: "Hvilket er best for en bedrift med 5+ ansatte?",
    answer:
      "Tripletex er det mest brukte valget - full ERP-pakke med timeregistrering, prosjekt, lønn og regnskap i samme system. 24SevenOffice er et alternativ for større bedrifter som også trenger CRM og rapportering. PowerOffice Go og Visma eAccounting fungerer også, men krever ofte tilleggsmoduler for full håndverker-funksjonalitet.",
  },
  {
    question: "Må jeg bruke norsk fakturaprogram?",
    answer:
      "Strengt tatt nei - men veldig anbefalt. Norske programmer har innebygd Altinn-integrasjon, MVA-rapportering, A-meldingen og norsk bankavstemming. Utenlandske verktøy som Stripe, Wave eller Xero mangler disse integrasjonene og krever manuell håndtering eller tilleggsverktøy. For en håndverker er Fiken, Tripletex, Conta, Visma eAccounting eller PowerOffice Go praktisk talt obligatorisk.",
  },
  {
    question: "Hva koster det å bytte fakturaprogram?",
    answer:
      "Selve byttet er typisk gratis - alle systemene kan eksportere kundedata, fakturaer og regnskap. Men det tar tid: 1-3 dager for en enmannsbedrift, 1-3 uker for en bedrift med 5+ ansatte. Du må også bytte over alle integrasjoner (bank, timeregistrering, lønn). Velg rett fra start hvis du kan - skift én gang er mye enklere enn to.",
  },
  {
    question: "Trenger jeg fakturaprogram i tillegg til regnskapsfører?",
    answer:
      "Ja. Regnskapsfører gjør årsavslutning, kompliserte vurderinger og revisjon. Fakturaprogrammet gjør den daglige driften - fakturere kunder, registrere utgifter, sende MVA. De samarbeider: de fleste regnskapsførere kobler seg direkte til ditt Fiken eller Tripletex-kontor og jobber i samme data. Det sparer deg tid og regnskapsføreren for manuell innsamling av bilag.",
  },
  {
    question: "Er gratis alternativer som Conta eller HubSpot good nok?",
    answer:
      "For helt nye ENK med 1-5 fakturaer i måneden kan gratisplaner fungere som testmiljø. Men så snart du vil ha ordentlig MVA-håndtering, flere kunder, prosjektstyring eller flere brukere, må du på betalt plan. Regn med at du uansett havner på 150-400 kr/mnd innen 6 måneder om bedriften faktisk har drift.",
  },
  {
    question: "Hvordan integrerer fakturaprogrammer med timeregistrering?",
    answer:
      "Tripletex og 24SevenOffice har innebygd timeregistrering - ingen integrasjon nødvendig. Fiken, Conta, Visma og PowerOffice Go krever enten en tilleggsmodul eller en tredjepart-app som Tigo eller Qbis. Integrasjonen er automatisk - timene registreres i timeappen og flyter direkte inn i fakturaen. Se vår sammenligning av timeregistreringsapper for håndverkere for detaljer.",
  },
  {
    question: "Gjør fakturaprogrammet at jeg får flere kunder?",
    answer:
      "Nei. Et fakturaprogram gjør at kundene du allerede har blir fakturert raskt og riktig. Det skaffer deg ikke nye. For å få flere leads trenger du markedsføringssystem: egen nettside, lokal SEO, anmeldelsesfunnel, automatisk oppfølging av tapte anrop og nye skjemaleads. Vekst Systemet dekker nettopp den siden - komplementært til Fiken, Tripletex eller hvilket fakturaprogram du velger.",
  },
  {
    question: "Kan jeg bruke fakturaprogram gratis ved å sende fakturaer fra Word?",
    answer:
      "Teknisk sett ja - du kan sende en pdf-faktura fra Word. Men du må fortsatt føre regnskap (lovpålagt), rapportere MVA, avstemme bank og lage årsregnskap. Det å holde dette manuelt i Excel tar 3-5 timer i uken for en enmannsbedrift - mer for større. 99-299 kr per måned er nesten alltid billigere enn tiden du bruker på å gjøre det manuelt. I tillegg: risikoen for feil-rapportering til Skatteetaten er mye høyere uten verktøy.",
  },
];

const COLUMNS = ["Fiken", "Tripletex", "Conta", "Visma eAcc", "PowerOffice", "24SO"];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fakturaprogram for håndverkere: 6 alternativer sammenlignet | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Fiken, Tripletex, Conta, Visma eAccounting, PowerOffice Go og 24SevenOffice sammenlignet for norske håndverkerbedrifter. Pris, funksjoner og hvem passer best hvor.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "Fakturaprogram for håndverkere", item: PAGE_URL },
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

const FakturaprogramForHandverkere = () => (
  <PageShell>
    <Helmet>
      <title>Fakturaprogram for håndverkere: 6 alternativer sammenlignet | Vekst Systemet</title>
      <meta
        name="description"
        content="Fiken, Tripletex, Conta, Visma eAccounting, PowerOffice Go og 24SevenOffice side om side. Pris, funksjoner og hvem passer best hvor."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Fakturaprogram for håndverkere: 6 alternativer" />
      <meta
        property="og:description"
        content="Ærlig sammenligning av de mest brukte fakturaprogrammene for norske håndverkerbedrifter."
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
          Fakturaprogram for håndverkere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Alle norske håndverkere må fakturere, rapportere MVA og føre
          regnskap. Her er de seks mest brukte fakturaprogrammene i Norge
          sammenlignet med et faglig blikk.
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
          De seks alternativene i korthet
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Alle er norske, alle dekker lovkravene - men de er bygget for ulike
          bedriftsstørrelser og ulike behov.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => (
            <motion.div
              key={o.name}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="rounded-2xl bg-card p-6 shadow-system-card border border-border"
            >
              <h3 className="text-xl font-bold text-foreground">{o.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground italic">{o.tagline}</p>

              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-accent mb-2">Fordeler</p>
                <ul className="space-y-1.5">
                  {o.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-2">Ulemper</p>
                <ul className="space-y-1.5">
                  {o.cons.map((con, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <X className="h-3.5 w-3.5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-xl bg-muted/50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Pris</p>
                <p className="text-xs text-foreground leading-relaxed mb-2">{o.pricing}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Passer best for</p>
                <p className="text-xs text-foreground leading-relaxed">{o.bestFor}</p>
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
          Alle seks side om side
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Indikative priser og funksjoner - sjekk alltid leverandørens egen side
          før bestilling.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]"></TableHead>
                {COLUMNS.map((c) => (
                  <TableHead key={c} className="text-xs">{c}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground text-sm">{row.aspect}</TableCell>
                  {row.rows.map((v, j) => (
                    <TableCell key={j} className="text-muted-foreground text-xs">{v}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Problem it doesn't solve */}
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
            Det fakturaprogrammet ikke gjør
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Uansett hvilken du velger - Fiken, Tripletex, Conta, Visma eAccounting,
              PowerOffice Go eller 24SevenOffice - løser fakturaprogrammet ett sett
              problemer: fakturere kundene du har, rapportere MVA, føre regnskap
              lovlig.
            </p>
            <p>
              Det løser ikke problemet med å få flere kunder. Ingen av disse
              verktøyene gir deg bedre Google-synlighet, flere anmeldelser,
              raskere oppfølging av leads eller en nettside som konverterer.
            </p>
            <p>
              Det er der Vekst Systemet kommer inn - nettside, lokal SEO,
              anmeldelsesfunnel, tapt-anrop-til-SMS og automatisk lead-oppfølging.
              Komplementært til fakturaprogrammet ditt, ikke en erstatning.
              Sammen dekker de hele flyten fra første Google-søk til betalt faktura.
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
            <Link to="/sammenlign/timeregistrering-for-handverkere">Timeregistrering-app</Link>
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

export default FakturaprogramForHandverkere;
