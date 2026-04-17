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

const SITE_URL = "https://aannemersysteem.com";
const PAGE_URL = `${SITE_URL}/vergelijk/offerteadviseur-alternatief`;

const problems = [
  {
    title: "Je betaalt per aanvraag, niet per opdracht",
    description:
      "Offerteadviseur rekent per lead die je ontvangt, ongeacht of de klant reageert, reageert met een absurd budget of de klus nooit doorgaat. Je rendement hangt volledig af van de kwaliteit van de leads — en die heb je niet in de hand.",
  },
  {
    title: "Klanten vergelijken je op prijs, niet op vakmanschap",
    description:
      "Elke offerteaanvraag gaat naar meerdere aannemers tegelijk. De klant legt de offertes naast elkaar en kiest vrijwel altijd op prijs. Je vakkennis, ervaring of mooie reviews van vorige klussen spelen geen rol meer in de beslissing.",
  },
  {
    title: "Je hebt geen eigen online aanwezigheid",
    description:
      "Alles wat je via Offerteadviseur binnenhaalt, versterkt het platform — niet jouw eigen naam. Potentiële klanten die jou googelen vinden niks, zien geen eigen website en kunnen je niet rechtstreeks benaderen. Stop je morgen, dan is je leadstroom weg.",
  },
  {
    title: "Offertes vergelijken is een prijzenoorlog",
    description:
      "Omdat elke lead naar 3–5 aannemers gaat, ontstaat er automatisch een race naar de bodem. Wie het goedkoopste werkt, wint. Dat is funest voor je marges en je professionaliteit — je zit structureel onder je normale tarief.",
  },
];

const comparison = [
  {
    aspect: "Kostenmodel",
    offerte: "Per aanvraag betalen, ongeacht resultaat",
    systeem: "€279/maand vast — onbeperkt leads",
  },
  {
    aspect: "Kosten per gewonnen klus",
    offerte: "Vaak €150–€400 per opdracht",
    systeem: "€35–€55 bij gemiddelde volume",
  },
  {
    aspect: "Concurrentie per aanvraag",
    offerte: "3–5 aannemers zien dezelfde lead",
    systeem: "Klant belt rechtstreeks jou",
  },
  {
    aspect: "Prijs-vs-vakmanschap",
    offerte: "Klant kiest bijna altijd op prijs",
    systeem: "Klant is al overtuigd door je site",
  },
  {
    aspect: "Eigen website & merk",
    offerte: "Nee",
    systeem: "Ja — eigen merk en domein",
  },
  {
    aspect: "Google vindbaarheid",
    offerte: "Geen impact op eigen SEO",
    systeem: "Volledig geoptimaliseerd",
  },
  {
    aspect: "Google reviews",
    offerte: "Reviews blijven op platform",
    systeem: "Automatische Google reviews",
  },
  {
    aspect: "Klantrelatie",
    offerte: "Platform zit ertussen",
    systeem: "Directe klantrelatie",
  },
  {
    aspect: "Terugkerende klanten",
    offerte: "Moeilijk",
    systeem: "Klanten vinden je direct terug",
  },
];

const faqs = [
  {
    question: "Is Offerteadviseur hetzelfde als Werkspot?",
    answer:
      "Offerteadviseur en Werkspot werken volgens hetzelfde principe: de klant vult een aanvraagformulier in en het platform verstuurt die naar meerdere aannemers. De business-modellen verschillen in details (abonnementen, credits, betaal-per-lead), maar het eindresultaat is hetzelfde — jij concurreert op prijs en bouwt geen eigen merk op.",
  },
  {
    question: "Waarom krijg ik vaak slechte leads via Offerteadviseur?",
    answer:
      "Offerteplatforms zijn ontworpen om zo veel mogelijk aanvragen te verzamelen — niet per se kwalitatieve. Klanten kunnen snel en vrijblijvend een formulier invullen, en veel van die aanvragen zijn tire-kickers, prijs-shoppers of mensen met onrealistische verwachtingen. Een eigen website trekt klanten aan die jou zelf hebben gevonden en al overtuigd zijn van jouw vakmanschap.",
  },
  {
    question: "Wat is rendabeler: Offerteadviseur of een eigen website?",
    answer:
      "Op de lange termijn is een eigen website vrijwel altijd rendabeler. Bij Offerteadviseur betaal je per aanvraag en die kosten stoppen nooit. Een eigen website kost je een vast bedrag per maand en de leadstroom bouwt zich op tijd op — hoe langer je bestaat, hoe meer leads. Na 6–12 maanden leveren eigen kanalen meestal 2–5x meer klussen op voor hetzelfde budget.",
  },
  {
    question: "Kan ik beide gebruiken?",
    answer:
      "Zeker. Veel aannemers starten met beide: Offerteadviseur voor directe leads en een eigen systeem dat zich opbouwt. Zodra je eigen website voldoende leads binnenhaalt, kun je stoppen met betaald platform-verkeer. Dat is meestal binnen 3–6 maanden haalbaar.",
  },
  {
    question: "Wat kost Aannemer Systeem precies?",
    answer:
      "€279 per maand vast — inclusief website, lokale SEO, review automatisering, lead opvolging en gemiste-oproep-terugbelsysteem. Geen opstartkosten, geen lange contracten, maandelijks opzegbaar. Voor dat bedrag krijg je een volledig eigen systeem dat 24/7 voor je werkt.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Offerteadviseur Alternatief: Meer Klussen voor Minder | Aannemer Systeem",
  url: PAGE_URL,
  description:
    "Offerteadviseur rekent per aanvraag en zet je tegenover 3–5 andere aannemers in een prijzenoorlog. Een eigen website levert onbeperkte leads voor €279/maand.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Offerteadviseur alternatief", item: PAGE_URL },
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

const OfferteadviseurAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Offerteadviseur Alternatief: Stop met Prijzenoorlog | Aannemer Systeem</title>
      <meta
        name="description"
        content="Offerteadviseur zet je tegenover 3–5 andere aannemers in een prijzenoorlog. Een eigen website levert onbeperkte leads voor €279/maand — zonder concurrentie op prijs."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Offerteadviseur Alternatief: Stop met Prijzenoorlog" />
      <meta
        property="og:description"
        content="Offerteadviseur zet je in een prijzenoorlog. Een eigen website levert onbeperkte leads voor €279/maand."
      />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container max-w-4xl text-center">
        <motion.span
          {...fadeInUp}
          className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
        >
          Vergelijking
        </motion.span>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground"
        >
          Offerteadviseur Alternatief: Stop met Prijzenoorlog
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Offerteadviseur stuurt dezelfde aanvraag naar 3–5 aannemers tegelijk.
          Je concurreert op prijs, niet op vakmanschap. Lees hoe een eigen
          website jou eruit haalt als dé keuze — niet als de goedkoopste.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Boek een gratis gesprek <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Link to="/prijzen">Bekijk onze prijzen →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Problems */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Waarom offerte-platforms je marge opeten
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

    {/* Comparison table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Offerteadviseur vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Niet gekleurd — gewoon naast elkaar gezet.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Offerteadviseur</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.offerte}</TableCell>
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

    {/* Balanced section */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Het probleem in één zin
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Offerteplatforms verkopen jouw lead aan meerdere aannemers tegelijk.
            Dat is precies waarom je op prijs moet concurreren — de klant ziet
            drie vergelijkbare offertes en kiest de goedkoopste.
          </p>
          <p>
            Een eigen website draait die dynamiek om. De klant heeft jou gevonden
            via Google, jouw site gelezen, jouw reviews gezien — en belt
            vervolgens alleen jou. Er is geen directe concurrentie meer, geen
            vergelijking met drie anderen. Je bent al gekozen voordat het
            gesprek begint.
          </p>
          <p>
            Dat betekent dat je je normale tarief kunt rekenen — of zelfs hoger —
            omdat vakmanschap, professionaliteit en reviews meetellen in plaats
            van alleen de prijs.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Offerte-platform:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Klant vergelijkt 3–5 offertes naast elkaar en kiest op prijs.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Eigen website:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Klant heeft jou al gekozen voordat het gesprek begint.
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
          Veelgestelde vragen over Offerteadviseur alternatieven
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

    {/* Related comparison */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Ook interessant
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/werkspot-alternatief">Werkspot alternatief</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/homedeal-alternatief">Homedeal alternatief</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/lokale-leads-genereren">Alle kanalen vergelijken <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default OfferteadviseurAlternatief;
