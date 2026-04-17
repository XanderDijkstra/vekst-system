import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, AlertTriangle } from "lucide-react";
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

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/vergelijk/werkspot-alternatief`;

const problems = [
  {
    title: "Du betaler 150–800 kr per lead, uansett om du får jobben",
    description:
      "Mittanbud tar et fast kreditt-beløp per lead du kjøper, også når kunden ikke svarer, jobben faller bort eller 3-4 andre håndverkere har meldt seg på samme oppdrag. Mange håndverkere bruker 3 000-6 000 kr i måneden på leads uten å vite sikkert hva de får igjen.",
  },
  {
    title: "Du konkurrerer med 3–5 andre håndverkere på pris",
    description:
      "Så snart en kunde legger ut en forespørsel, sendes den til flere håndverkere samtidig. Kunden sammenligner etterpå mest på pris. Fagkunnskapen din, anmeldelsene og kvaliteten teller knapt - den billigste vinner.",
  },
  {
    title: "Du bygger ikke opp egen kundebase eller merkevare",
    description:
      "Kundene som kommer via Mittanbud forblir \"Mittanbud-kunder\". Slutter du på plattformen, stopper også leadstrømmen. Du bygger ingen navngjenkjennelse, ingen anmeldelser på din egen nettside og ingen faste kunder via Google.",
  },
  {
    title: "Anmeldelser på Mittanbud løfter ikke Google-posisjonen din",
    description:
      "Anmeldelser på Mittanbud forblir på Mittanbud. De dukker ikke opp i Google-søk og hjelper ikke den lokale synligheten din. Google Bedriftsprofil og Google-anmeldelser er der kundene faktisk leser seg opp - og det bygger du ikke med Mittanbud.",
  },
];

const comparison = [
  {
    aspect: "Kostnad per måned",
    werkspot: "3 000-6 000 kr/mnd (variabelt, betal per lead)",
    systeem: "2 990 kr/mnd fast",
  },
  {
    aspect: "Kostnad per lead",
    werkspot: "150-800 kr per lead, også uten oppdrag",
    systeem: "0 kr - ubegrensede leads via egen nettside",
  },
  {
    aspect: "Konkurrenter per forespørsel",
    werkspot: "3–5 andre håndverkere ser samme lead",
    systeem: "Kunden ringer deg direkte",
  },
  {
    aspect: "Egen nettside",
    werkspot: "Nei - du står på plattformen",
    systeem: "Ja - egen merkevare og domene",
  },
  {
    aspect: "Google-synlighet",
    werkspot: "Ingen effekt",
    systeem: "Fullt optimalisert for lokal SEO",
  },
  {
    aspect: "Google-anmeldelser",
    werkspot: "Anmeldelser forblir på Mittanbud",
    systeem: "Automatiske Google-anmeldelser etter hver jobb",
  },
  {
    aspect: "Kunderelasjon",
    werkspot: "Mittanbud er mellommannen",
    systeem: "Direkte kontakt med kunden",
  },
  {
    aspect: "Gjentagende kunder",
    werkspot: "Vanskelig - må gå via Mittanbud",
    systeem: "Kundene finner deg igjen direkte",
  },
  {
    aspect: "Avhengighet",
    werkspot: "100 % avhengig av plattformen",
    systeem: "Eget system, alltid i din kontroll",
  },
  {
    aspect: "Oppstartstid",
    werkspot: "Umiddelbart",
    systeem: "Live innen 7 dager",
  },
];

const caseMath = [
  {
    label: "Mittanbud-scenario",
    items: [
      { k: "Leads per måned", v: "10" },
      { k: "Kostnad per lead", v: "500 kr" },
      { k: "Konvertering til oppdrag", v: "20 %" },
      { k: "Antall jobber per måned", v: "2" },
      { k: "Kostnad per vunnet jobb", v: "2 500 kr" },
      { k: "Månedskostnad totalt", v: "5 000 kr" },
    ],
  },
  {
    label: "Vekst Systemet-scenario",
    items: [
      { k: "Leads per måned (via Google)", v: "15–25" },
      { k: "Kostnad per lead", v: "0 kr (ubegrenset)" },
      { k: "Konvertering til oppdrag", v: "35 % (direkte kontakt)" },
      { k: "Antall jobber per måned", v: "5–8" },
      { k: "Kostnad per vunnet jobb", v: "400-600 kr" },
      { k: "Månedskostnad totalt", v: "2 990 kr" },
    ],
  },
];

const faqs = [
  {
    question: "Er Mittanbud helt uten nytte?",
    answer:
      "Mittanbud kan være nyttig hvis du akkurat har startet og ikke har noen egen kundestrøm. Problemet oppstår når du blir avhengig av plattformen. Du betaler per lead, konkurrerer på pris og bygger ingen egen merkevare. De fleste håndverkere kommer bedre ut med en egen nettside som gir kunder døgnet rundt - og eventuelt Mittanbud som en ekstra bi-kanal.",
  },
  {
    question: "Hva er forskjellen på Vekst Systemet og et vanlig markedsføringsbyrå?",
    answer:
      "Et tradisjonelt markedsføringsbyrå tar 15 000-40 000 kr per måned pluss oppstartskostnader, og leverer som regel bare en nettside eller SEO. Vekst Systemet er en komplett pakke: nettside, lokal SEO, anmeldelsesautomatisering, lead-oppfølging og SMS-system for tapte anrop - til 2 990 kr per måned, uten oppstartskostnader.",
  },
  {
    question: "Hva om jeg allerede har en nettside?",
    answer:
      "Det er ikke noe problem. I en gratis samtale ser vi på om nettsiden din trenger en oppgradering eller om det er bedre å bygge helt på nytt. Mange håndverkere oppdager at siden deres ser helt ok ut visuelt, men underpresterer teknisk og på SEO - slik at Google knapt viser dem fram.",
  },
  {
    question: "Hvor fort får jeg leads via min egen nettside?",
    answer:
      "Google Bedriftsprofil-optimaliseringer gir ofte første resultater på noen uker. Organiske søkeresultater bygger seg opp over 2-4 måneder. De fleste håndverkere ser innen 3 måneder vesentlig flere forespørsler via sin egen nettside enn de fikk via Mittanbud - uten lead-kostnader.",
  },
  {
    question: "Kan jeg bruke Mittanbud i tillegg til Vekst Systemet?",
    answer:
      "Ja, absolutt. Mange kunder bruker fortsatt Mittanbud som en ekstra kanal mens den egne nettsiden vokser. Forskjellen er at du da ikke lenger er avhengig av én plattform - og du kan redusere Mittanbud-forbruket etter hvert som dine egne leads begynner å strømme inn.",
  },
  {
    question: "Hva om jeg ikke er fornøyd?",
    answer:
      "Vekst Systemet har ingen lange kontrakter. Du betaler månedlig og kan si opp når som helst. Nettsiden er din - vi låser deg ikke inn i en teknisk avtale slik mange byråer gjør.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mittanbud-alternativ: Slutt å betale per lead | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Mittanbud koster 150-800 kr per lead og du konkurrerer med 3-5 andre håndverkere. En egen nettside gir ubegrensede leads for 2 990 kr/mnd. Sammenlign her.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Mittanbud-alternativ", item: PAGE_URL },
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

const WerkspotAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Mittanbud-alternativ: Slutt å betale per lead | Vekst Systemet</title>
      <meta
        name="description"
        content="Mittanbud koster 150-800 kr per lead og du konkurrerer med 3-5 andre håndverkere. En egen nettside gir ubegrensede leads for 2 990 kr/mnd. Sammenlign her."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Mittanbud-alternativ: Slutt å betale per lead" />
      <meta
        property="og:description"
        content="Mittanbud koster 150-800 kr per lead. En egen nettside gir ubegrensede leads for 2 990 kr/mnd."
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
          Mittanbud-alternativ: Slutt å betale per lead
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Mittanbud tar 150-800 kr per lead, jager deg inn i priskonkurranse med
          3-5 andre håndverkere og bygger ingen egen merkevare. Les hvorfor en
          egen nettside nesten alltid gir mer tilbake - og hva forskjellen er.
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
            <Link to="/prijzen">Se prisene våre →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Problems with Mittanbud */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          De 4 problemene med Mittanbud ingen snakker om
        </motion.h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="rounded-2xl bg-card p-6 shadow-system-card"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Big comparison table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Mittanbud vs egen nettside (Vekst Systemet)
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          En ærlig, punkt-for-punkt-sammenligning. Ingen salgspitch.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Mittanbud</TableHead>
                <TableHead className="text-accent font-semibold">Vekst Systemet</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.werkspot}</TableCell>
                  <TableCell className="font-medium text-foreground bg-accent/5">
                    {row.systeem}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Real math */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Det faktiske regnestykket for en typisk håndverker
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Samme håndverker, to kanaler. Se hva hver krone gir tilbake.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseMath.map((scenario, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className={`rounded-2xl p-8 shadow-system-card ${
                i === 1
                  ? "bg-accent/5 border-2 border-accent/30"
                  : "bg-card border border-border"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-4 ${
                  i === 1 ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {scenario.label}
              </p>
              <dl className="space-y-3">
                {scenario.items.map((item, j) => (
                  <div key={j} className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-none">
                    <dt className="text-sm text-muted-foreground">{item.k}</dt>
                    <dd
                      className={`text-base font-semibold ${
                        i === 1 ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {item.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeInUp} className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Tallene baseres på gjennomsnittlige resultater hos norske håndverkere i de første
          6 månedene etter implementering. Individuelle resultater varierer.
        </motion.p>
      </div>
    </section>

    {/* When Mittanbud is still useful */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Når er Mittanbud likevel nyttig?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Vi er ærlige: Mittanbud har sin berettigelse. Hvis du akkurat har
            startet, ennå ikke har en egen kundestrøm og trenger å komme raskt i
            gang, kan plattformen være et nyttig supplement til de andre kanalene dine.
          </p>
          <p>
            Problemet oppstår når Mittanbud er din eneste kilde til leads. Da er
            du 100 % avhengig av en plattform du ikke kontrollerer - og der
            prisene per lead stiger hvert år.
          </p>
          <p>
            De smarteste håndverkerne bruker Mittanbud som et tillegg mens de
            bygger sin egen nettside, Google Bedriftsprofil og anmeldelser. Etter
            3-6 måneder kommer mesteparten av leadsene deres via egen kanal -
            gratis - og Mittanbud blir bare en "hyggelig bonus".
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Mittanbud fungerer når:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Du akkurat har startet, har kapasitet og ser det som et ekstra
              kanal ved siden av egen markedsføring.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Mittanbud fungerer ikke når:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Det er din eneste kundekilde, eller du ikke bygger egen merkevare
              ved siden av plattformen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Ofte stilte spørsmål om Mittanbud-alternativer
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
            <Link to="/prijzen">Se prisene våre</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/contact">Ta kontakt <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default WerkspotAlternatief;
