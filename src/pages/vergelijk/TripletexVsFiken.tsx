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
const PAGE_URL = `${SITE_URL}/sammenlign/tripletex-vs-fiken`;

type ToolCard = {
  name: string;
  tagline: string;
  pros: string[];
  cons: string[];
  pricing: string;
  bestFor: string;
};

const tools: ToolCard[] = [
  {
    name: "Tripletex",
    tagline: "Full ERP-pakke - regnskap, timeføring, prosjekt og lønn i ett",
    pros: [
      "Dekker regnskap, fakturering, timeregistrering, prosjekt og lønn i én plattform",
      "Sterk prosjektmodul - ideell for håndverkere med flere samtidige jobber",
      "Innebygd timeregistreringsapp for ansatte på byggeplass",
      "Mobilapp for å logge timer, kjøre og føre utlegg direkte fra jobben",
      "Skalerer godt fra enmannsforetak til bedrifter med 20+ ansatte",
      "Eid av Visma - stabilt, godt etablert, mye integrasjoner",
    ],
    cons: [
      "Høyere månedspris enn Fiken, særlig for enmannsbedrifter",
      "Læringskurve - flere funksjoner betyr mer å sette seg inn i",
      "Enkelte funksjoner krever tilleggsmoduler som koster ekstra",
      "Kan være overkill for en ENK som bare vil fakturere",
    ],
    pricing:
      "Fra ca 249 kr/mnd for enmannsforetak. Pakker med prosjekt, lønn og timeføring ligger typisk 400-700 kr/mnd. Legg til ca 50-100 kr per ekstra bruker.",
    bestFor:
      "Håndverkerbedrifter med 2+ ansatte som trenger timeregistrering, prosjektstyring og lønnskjøring i samme system.",
  },
  {
    name: "Fiken",
    tagline: "Enkel, rimelig, bygget for ENK og små AS",
    pros: [
      "Lavere månedspris enn Tripletex - særlig for enmannsbedrifter",
      "Enkelt å sette seg inn i - laget for folk uten regnskapsbakgrunn",
      "Rask fakturering med mal, klar til å sende samme dag som du starter",
      "God integrasjon mot bank og Altinn - MVA og årsregnskap går stort sett automatisk",
      "Inkluderer alt du trenger for å drive ENK lovlig i Norge",
      "Norsk kundestøtte, aktivt community",
    ],
    cons: [
      "Svak på prosjekt- og timeregistrering - ikke bygget for det",
      "Lønnskjøring finnes men er enkel, egner seg best for 1-3 ansatte",
      "Færre integrasjoner mot håndverker-spesifikke verktøy enn Tripletex",
      "Skalerer dårligere når bedriften vokser til 5+ ansatte",
    ],
    pricing:
      "Fra ca 99 kr/mnd for ENK med lav omsetning. Fullt funksjonell plan 299-449 kr/mnd. Lønnskjøring kommer som tillegg ca 99 kr/mnd per ansatt.",
    bestFor:
      "Enkeltpersonforetak og små AS med 1-3 personer, der hovedbehovet er fakturering, bokføring og MVA - ikke komplekse prosjekter.",
  },
];
const comparison: { aspect: string; tripletex: string; fiken: string }[] = [
  { aspect: "Startpris (ENK)", tripletex: "Ca 249 kr/mnd", fiken: "Ca 99 kr/mnd" },
  { aspect: "Full pakke med ansatte", tripletex: "500-800 kr/mnd", fiken: "300-500 kr/mnd + lønn per ansatt" },
  { aspect: "Fakturering", tripletex: "Ja - avansert", fiken: "Ja - rask og enkel" },
  { aspect: "MVA og Altinn", tripletex: "Ja - automatisk", fiken: "Ja - automatisk" },
  { aspect: "Prosjektstyring", tripletex: "Sterk - egen modul", fiken: "Svak - begrenset" },
  { aspect: "Timeregistrering", tripletex: "Ja - mobilapp for byggeplass", fiken: "Enkel - ikke håndverker-fokusert" },
  { aspect: "Lønnskjøring", tripletex: "Ja - fullverdig", fiken: "Ja - enkel, best for 1-3 ansatte" },
  { aspect: "Mobilapp", tripletex: "Ja - for ansatte og admin", fiken: "Ja - men begrenset" },
  { aspect: "Skalering til 10+ ansatte", tripletex: "Ja - bygget for det", fiken: "Begrenset" },
  { aspect: "Læringskurve", tripletex: "Middels", fiken: "Lav" },
  { aspect: "Eierskap", tripletex: "Visma (norsk)", fiken: "Fiken AS (norsk)" },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hva er hovedforskjellen på Tripletex og Fiken?",
    answer:
      "Tripletex er en full ERP-pakke med regnskap, fakturering, prosjekt, timeregistrering og lønn i samme system. Fiken er enklere og fokuserer på regnskap og fakturering for ENK og små AS. Tripletex er bedre for håndverkerbedrifter med flere ansatte og prosjekter. Fiken er bedre for enmannsforetak som bare trenger å fakturere og rapportere MVA.",
  },
  {
    question: "Hvilken er billigst?",
    answer:
      "Fiken er billigere i startfasen - typisk ca 99 kr/mnd for laveste plan mot Tripletex sine ca 249 kr/mnd. Men når du tar med tilleggsmoduler og ekstra brukere, nærmer totalkostnaden seg hverandre for bedrifter med 3+ ansatte. Regn ut totalen for ditt spesifikke oppsett før du velger.",
  },
  {
    question: "Hvilken passer best for en enmannsbedrift som rørlegger eller elektriker?",
    answer:
      "For en enmannsbedrift - rørlegger, elektriker, maler, tømrer - der hovedoppgavene er å fakturere etter utført jobb og rapportere MVA, er Fiken som regel et bedre valg. Enklere, rimeligere og dekker alle lovkravene. Tripletex begynner å lønne seg når du har 2+ ansatte og trenger timeregistrering per prosjekt.",
  },
  {
    question: "Hva med timeregistrering for ansatte på byggeplass?",
    answer:
      "Tripletex har en egen mobilapp som ansatte bruker for å logge timer direkte fra byggeplassen, koblet til prosjekt og kunde. Fiken har enkel timeregistrering, men den er ikke bygget for mange samtidige prosjekter eller komplekse ansatt-strukturer. Trenger du å vite nøyaktig hvor mange timer hver ansatt brukte på hvert prosjekt, er Tripletex mer egnet.",
  },
  {
    question: "Kan jeg bytte fra Fiken til Tripletex senere?",
    answer:
      "Ja. Begge systemer lar deg eksportere data (kunder, fakturaer, regnskap) og importere i det andre. Overgangen er ikke smertefri - det tar typisk 1-2 uker med oppsett og opplæring - men det er fullt mulig. Starter du lite som ENK, er det helt greit å begynne med Fiken og flytte over til Tripletex når bedriften vokser.",
  },
  {
    question: "Integrerer de seg med andre verktøy?",
    answer:
      "Tripletex har flest integrasjoner - bank, lønn, HR, prosjektstyring, CRM. Fiken har færre, men dekker de viktigste: bank, Altinn, Stripe, PayPal. Hvis du allerede bruker en CRM eller en planleggings-app, sjekk om den integrerer med ditt valg før du bestemmer deg.",
  },
  {
    question: "Løser Tripletex eller Fiken problemet med å få flere kunder?",
    answer:
      "Nei - og det er viktig. Begge er regnskaps- og administrasjonsverktøy. De organiserer kundene du allerede har, men gjør ingenting for å skaffe deg flere. For å få flere leads trenger du en egen nettside, lokal SEO, automatisk lead-oppfølging og anmeldelsessystem. Det er der Vekst Systemet kommer inn - komplementært til Tripletex eller Fiken, ikke en erstatning.",
  },
  {
    question: "Trenger jeg begge?",
    answer:
      "Nei. Velg én for regnskap og drift. I tillegg trenger du et markedsførings- og lead-system (som Vekst Systemet) fordi regnskapsverktøy ikke dekker den siden. Tripletex + Vekst eller Fiken + Vekst er en komplett stack for en moderne håndverkerbedrift.",
  },
  {
    question: "Hva med Visma eAccounting eller PowerOffice Go?",
    answer:
      "Visma eAccounting ligger mellom Fiken og Tripletex i kompleksitet og pris - fint for små AS. PowerOffice Go er et alternativ med sterkt fokus på automasjon, men ofte dyrere enn Tripletex på ekvivalent funksjonalitet. De fleste norske håndverkere velger mellom Tripletex og Fiken fordi de er de to mest etablerte på markedet.",
  },
  {
    question: "Hva om jeg bare vil ha et enkelt fakturaprogram uten regnskap?",
    answer:
      "Da er Fiken overkill - du trenger bare en fakturatjeneste. Men i Norge er regnskapsplikt og MVA-rapportering lovpålagt for alle med foretak, og et kombinert fakturering + regnskap-verktøy som Fiken er ofte billigere totalt enn et frittstående fakturaprogram pluss separat regnskap. Integrert er nesten alltid bedre.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tripletex vs Fiken for håndverkere: Hvilken bør du velge? | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Tripletex og Fiken side om side for håndverkerbedrifter: pris, funksjoner, hvem passer best hvor - og hva ingen av dem løser (spoiler: leads).",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "Tripletex vs Fiken", item: PAGE_URL },
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

const TripletexVsFiken = () => (
  <PageShell>
    <Helmet>
      <title>Tripletex vs Fiken for håndverkere: Hvilken bør du velge? | Vekst Systemet</title>
      <meta
        name="description"
        content="Tripletex og Fiken side om side for håndverkerbedrifter: pris, funksjoner, hvem passer best hvor - og hva ingen av dem løser."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Tripletex vs Fiken for håndverkere" />
      <meta
        property="og:description"
        content="Ærlig sammenligning av Norges to største regnskapsverktøy for håndverkerbedrifter."
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
          Tripletex vs Fiken for håndverkere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          De to regnskapsverktøyene nesten alle norske håndverkerbedrifter
          vurderer. Pris, funksjoner, hvem passer best hvor - og det ene
          problemet ingen av dem løser.
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

    {/* Tool cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          De to verktøyene på 30 sekunder
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Begge er norske, begge er etablerte, begge dekker regnskap og
          fakturering lovlig. Men de er bygget for veldig forskjellige typer
          håndverkerbedrifter.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground italic">{t.tagline}</p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent mb-3">Fordeler</p>
                <ul className="space-y-2">
                  {t.pros.map((pro, j) => (
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
                  {t.cons.map((con, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-muted/50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                  Pris
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-3">{t.pricing}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                  Passer best for
                </p>
                <p className="text-sm text-foreground leading-relaxed">{t.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Side om side - punkt for punkt
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Priser er indikative og varierer etter modulvalg og antall brukere.
          Sjekk alltid leverandørens egen prisside før du bestiller.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Tripletex</TableHead>
                <TableHead>Fiken</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.tripletex}</TableCell>
                  <TableCell className="text-muted-foreground">{row.fiken}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Problem neither solves */}
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
            Det ene problemet verken Tripletex eller Fiken løser
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Begge verktøyene er bygget for å{" "}
              <strong className="text-foreground">administrere</strong> bedriften
              din. De tar vare på fakturaer, timer, lønn og MVA. Men ingen av dem
              hjelper deg med å{" "}
              <strong className="text-foreground">få kundene</strong> i
              utgangspunktet.
            </p>
            <p>
              Det spiller ingen rolle hvor god Tripletex er på prosjektstyring
              hvis Google-sidelistingen din er tom. Det spiller ingen rolle hvor
              rask Fiken er til å sende fakturaer hvis du ikke har nok leads til
              å fakturere for i stedet for.
            </p>
            <p>
              Den komplette stacken for en moderne håndverkerbedrift er: ett
              regnskapsverktøy (Tripletex eller Fiken) + ett markedsførings- og
              lead-system (Vekst Systemet - nettside, lokal SEO,
              anmeldelsesfunnel, tapt-anrop-til-SMS og lead-oppfølging). De to
              delene snakker ikke sammen, og det er helt greit - de løser
              forskjellige problemer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Recommendation */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Kort anbefaling
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase }}
            className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
              Velg Fiken hvis
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du er enkeltpersonforetak eller har 1-2 ansatte</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Hovedbehov er fakturering, regnskap og MVA-rapportering</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du vil komme i gang raskt uten mye opplæring</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Budsjett er lavt og forutsigbarhet viktig</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Prosjektene er korte, ikke komplekse</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.08 }}
            className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
              Velg Tripletex hvis
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du har 2+ ansatte som logger timer på byggeplass</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du kjører flere prosjekter samtidig og trenger prosjektstyring</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du forventer å vokse til 5-20 ansatte</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du vil ha lønn, timeføring og regnskap i samme system</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Du tåler en høyere månedspris for mer funksjonalitet</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
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

    {/* Related links */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Også interessant
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/guide/markedsforing-for-handverkere">Markedsføring for håndverkere</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/kunnskapsbank/flere-kunder-som-handverker">Slik får du flere kunder</Link>
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

export default TripletexVsFiken;
