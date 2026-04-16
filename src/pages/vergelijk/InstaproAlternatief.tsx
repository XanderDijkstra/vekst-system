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
const PAGE_URL = `${SITE_URL}/vergelijk/instapro-alternatief`;

const problems = [
  {
    title: "Je betaalt credits per lead — ook voor slechte leads",
    description:
      "Instapro werkt met een credit-systeem: je koopt credits en betaalt die per lead. Of de lead serieus is of niet, maakt niet uit — je credits zijn op. Veel aannemers merken dat de helft van de leads niet eens reageert op hun bericht.",
  },
  {
    title: "Je profiel verdwijnt tussen honderden anderen",
    description:
      "Instapro heeft duizenden geregistreerde vakmannen. Op elke aanvraag reageren meerdere bedrijven, en de klant krijgt een lijst met profielen die er allemaal hetzelfde uitzien. Jouw unieke kwaliteiten en specialisatie vallen niet op in een gestandaardiseerd profiel.",
  },
  {
    title: "Geen invloed op wanneer en welke leads je krijgt",
    description:
      "Instapro bepaalt welke leads je ziet op basis van hun algoritme. Je hebt geen controle over de kwaliteit, het type klus of de locatie. Dit leidt tot uren verloren aan offertes voor klussen die niet bij je passen of klanten die puur op prijs vergelijken.",
  },
  {
    title: "Platform-reviews helpen je niet op Google",
    description:
      "Alle reviews die je verzamelt op Instapro, blijven op Instapro. Ze verschijnen niet in Google zoekresultaten en bouwen geen eigen online reputatie op. Stop je met Instapro, dan verdwijnen je reviews mee — inclusief alle moeite die je erin hebt gestoken.",
  },
];

const comparison = [
  { aspect: "Kosten per maand", instapro: "€150–€600/maand (credits kopen)", systeem: "€279/maand vast" },
  { aspect: "Kosten per lead", instapro: "€10–€50 per lead (credits)", systeem: "€0 — onbeperkte leads via eigen website" },
  { aspect: "Concurrentie per aanvraag", instapro: "Meerdere vakmannen reageren op dezelfde lead", systeem: "Klant belt rechtstreeks jou" },
  { aspect: "Eigen website", instapro: "Nee — standaard platformprofiel", systeem: "Ja — eigen merk en domein" },
  { aspect: "Google vindbaarheid", instapro: "Geen impact op je positie", systeem: "Volledig geoptimaliseerd voor lokale SEO" },
  { aspect: "Google reviews", instapro: "Reviews blijven op Instapro", systeem: "Automatische Google reviews na elke klus" },
  { aspect: "Leadkwaliteit", instapro: "Wisselend — geen filtering mogelijk", systeem: "Klanten die jou specifiek zoeken" },
  { aspect: "Branding", instapro: "Gestandaardiseerd profiel", systeem: "Volledig eigen branding en portfolio" },
  { aspect: "Afhankelijkheid", instapro: "Afhankelijk van credits en algoritme", systeem: "Eigen systeem, altijd in beheer" },
  { aspect: "Opzettijd", instapro: "Direct", systeem: "Live binnen 7 dagen" },
];

const caseMath = [
  {
    label: "Instapro scenario",
    items: [
      { k: "Credits per maand", v: "€350" },
      { k: "Leads ontvangen", v: "10–15" },
      { k: "Leads die reageren", v: "50%" },
      { k: "Conversie naar opdracht", v: "15%" },
      { k: "Aantal klussen per maand", v: "1–2" },
      { k: "Kosten per gewonnen klus", v: "€175–€350" },
    ],
  },
  {
    label: "Aannemer Systeem scenario",
    items: [
      { k: "Vaste kosten per maand", v: "€279" },
      { k: "Leads ontvangen (via Google)", v: "15–25" },
      { k: "Leads die reageren", v: "90%+ (direct contact)" },
      { k: "Conversie naar opdracht", v: "35%" },
      { k: "Aantal klussen per maand", v: "5–8" },
      { k: "Kosten per gewonnen klus", v: "€35–€55" },
    ],
  },
];

const faqs = [
  {
    question: "Wat is Instapro precies?",
    answer:
      "Instapro (voorheen Starofservice) is een online platform dat klanten koppelt aan vakmannen. Je maakt een profiel aan, koopt credits en reageert op klusaanvragen. Per lead betaal je credits. Het platform is populair in Nederland maar de kosten per gewonnen klus zijn voor veel aannemers te hoog.",
  },
  {
    question: "Hoeveel kosten credits bij Instapro?",
    answer:
      "Instapro werkt met creditpakketten. De kosten per lead variëren van €10 tot €50 afhankelijk van de categorie en omvang van het project. In de praktijk spenderen de meeste aannemers €150–€600 per maand aan credits. Bij Aannemer Systeem betaal je €279 per maand vast voor onbeperkte leads via je eigen website.",
  },
  {
    question: "Is Instapro beter dan Werkspot?",
    answer:
      "Instapro en Werkspot werken op een vergelijkbare manier: je betaalt per lead en concurreert met andere vakmannen. Instapro is doorgaans iets goedkoper per lead maar heeft een kleiner bereik in Nederland. Beide platforms hebben hetzelfde fundamentele probleem: je bouwt geen eigen online aanwezigheid op.",
  },
  {
    question: "Hoe snel krijg ik leads via mijn eigen website?",
    answer:
      "Google Mijn Bedrijf optimalisaties leveren vaak binnen enkele weken resultaat. Organische zoekresultaten bouwen over 2–4 maanden op. De meeste aannemers zien binnen 3 maanden significant meer aanvragen via hun eigen website dan via Instapro — zonder credits te kopen.",
  },
  {
    question: "Kan ik Instapro blijven gebruiken naast een eigen website?",
    answer:
      "Ja. Veel aannemers gebruiken Instapro als extra kanaal terwijl hun eigen website groeit. Het voordeel is dat je niet meer afhankelijk bent: als Instapro de prijzen verhoogt of de leadkwaliteit daalt, heb je altijd je eigen instroom via Google.",
  },
  {
    question: "Wat als ik niet technisch ben?",
    answer:
      "Dat hoeft ook niet. Wij bouwen je complete systeem: website, Google Mijn Bedrijf, reviews en lead opvolging. Jij vult een kort formulier in en wij doen de rest. Na 7 dagen sta je live — zonder zelf iets technisch te hoeven doen.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Instapro Alternatief: Meer Leads zonder Credits | Aannemer Systeem",
  url: PAGE_URL,
  description: "Instapro kost €10–€50 per lead via credits. Een eigen website levert onbeperkte leads voor €279/maand vast. Vergelijk hier.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Instapro alternatief", item: PAGE_URL },
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

const InstaproAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Instapro Alternatief: Meer Leads zonder Credits | Aannemer Systeem</title>
      <meta name="description" content="Instapro kost €10–€50 per lead via credits. Een eigen website levert onbeperkte leads voor €279/maand vast. Vergelijk hier." />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Instapro Alternatief: Meer Leads zonder Credits" />
      <meta property="og:description" content="Instapro kost €10–€50 per lead. Een eigen website levert onbeperkte leads voor €279/maand." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container max-w-4xl text-center">
        <motion.span {...fadeInUp} className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
          Vergelijking
        </motion.span>
        <motion.h1 {...fadeInUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
          Instapro Alternatief: Meer Leads zonder Credits
        </motion.h1>
        <motion.p {...fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
          Instapro werkt met credits per lead, een standaard profiel en wisselende leadkwaliteit. Ontdek waarom een eigen website meer oplevert — met volledige controle over je instroom.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Boek een gratis gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          De 4 problemen met Instapro voor aannemers
        </motion.h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }} className="rounded-2xl bg-card p-6 shadow-system-card">
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
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
          Instapro vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Een eerlijke vergelijking op de punten die ertoe doen.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Instapro</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.instapro}</TableCell>
                  <TableCell className="font-medium text-foreground bg-accent/5">{row.systeem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Math */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
          De echte wiskunde: credits vs eigen leads
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Zelfde vakman, twee systemen. Kijk wat elke euro oplevert.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseMath.map((scenario, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }} className={`rounded-2xl p-8 shadow-system-card ${i === 1 ? "bg-accent/5 border-2 border-accent/30" : "bg-card border border-border"}`}>
              <p className={`text-xs font-bold uppercase tracking-wide mb-4 ${i === 1 ? "text-accent" : "text-muted-foreground"}`}>{scenario.label}</p>
              <dl className="space-y-3">
                {scenario.items.map((item, j) => (
                  <div key={j} className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-none">
                    <dt className="text-sm text-muted-foreground">{item.k}</dt>
                    <dd className={`text-base font-semibold ${i === 1 ? "text-accent" : "text-foreground"}`}>{item.v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeInUp} className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Cijfers gebaseerd op gemiddelde resultaten bij Nederlandse aannemers in de eerste 6 maanden. Individuele resultaten variëren.
        </motion.p>
      </div>
    </section>

    {/* When useful */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Wanneer is Instapro dan wél handig?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Instapro kan handig zijn als je in een nieuwe regio begint en snel je eerste klanten wilt vinden. De drempel is laag: profiel aanmaken, credits kopen en reageren op leads.
          </p>
          <p>
            Het probleem is dat de kosten per gewonnen klus hoog zijn en je niets opbouwt voor de lange termijn. Elke maand begin je opnieuw met credits kopen, terwijl je eigen Google-positie en website stil staan.
          </p>
          <p>
            De beste strategie: gebruik Instapro als startkanaal terwijl je investeert in je eigen website en Google-profiel. Binnen 3–6 maanden komen je leads via Google en kun je Instapro afbouwen of als extra houden.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Instapro werkt als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Je snel wilt starten in een nieuwe regio en het als tijdelijk kanaal ziet naast eigen marketing.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Instapro werkt niet als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Het je enige leadbron is, je credits steeds opraken of je geen eigen online merk opbouwt.</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Veelgestelde vragen over Instapro alternatieven
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6 shadow-system-card">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

    {/* Related */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Ook interessant</p>
        <h3 className="text-2xl font-bold text-foreground">Welke lead-bron levert het meeste op?</h3>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Vergelijk website, Google Ads, Google Mijn Bedrijf, platforms en social media naast elkaar.</p>
        <div className="mt-6">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/lokale-leads-genereren">Bekijk de vergelijking <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default InstaproAlternatief;
