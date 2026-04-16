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
const PAGE_URL = `${SITE_URL}/vergelijk/homedeal-alternatief`;

const problems = [
  {
    title: "Je deelt elke lead met meerdere aannemers",
    description:
      "Homedeal stuurt dezelfde aanvraag naar meerdere bedrijven tegelijk. De klant vergelijkt op prijs en snelheid — niet op vakmanschap. Je besteedt uren aan offertes die nergens toe leiden omdat een concurrent net iets goedkoper was.",
  },
  {
    title: "Leadkosten stijgen, kwaliteit daalt",
    description:
      "De kosten per lead bij Homedeal zijn de afgelopen jaren gestegen terwijl de leadkwaliteit daalt. Veel aanvragen zijn prijsvergelijkers die meerdere offertes opvragen zonder serieuze koopintentie. Je betaalt voor leads die nooit converteren.",
  },
  {
    title: "Geen controle over je presentatie",
    description:
      "Op Homedeal bepaalt het platform hoe je gepresenteerd wordt. Je kunt niet je eigen branding, tone-of-voice of portfolio laten zien. Klanten zien een gestandaardiseerd profiel naast drie andere aannemers — je bent een nummer in een lijst.",
  },
  {
    title: "Je bouwt geen eigen online aanwezigheid op",
    description:
      "Alle energie die je in Homedeal steekt, bouwt niets op voor je eigen bedrijf. Geen Google-positie, geen eigen reviews, geen terugkerende klanten via je website. Stop je met Homedeal, dan start je weer vanaf nul.",
  },
];

const comparison = [
  { aspect: "Kosten per maand", homedeal: "€300–€1.000/maand (variabel, per lead)", systeem: "€279/maand vast" },
  { aspect: "Kosten per lead", homedeal: "€15–€65 per lead, ongeacht kwaliteit", systeem: "€0 — onbeperkte leads via eigen website" },
  { aspect: "Concurrentie per aanvraag", homedeal: "2–4 andere aannemers per lead", systeem: "Klant belt rechtstreeks jou" },
  { aspect: "Eigen website", homedeal: "Nee — gestandaardiseerd platformprofiel", systeem: "Ja — eigen merk en domein" },
  { aspect: "Google vindbaarheid", homedeal: "Geen impact op je eigen positie", systeem: "Volledig geoptimaliseerd voor lokale SEO" },
  { aspect: "Google reviews", homedeal: "Reviews blijven op Homedeal", systeem: "Automatische Google reviews na elke klus" },
  { aspect: "Klantrelatie", homedeal: "Homedeal is de tussenpersoon", systeem: "Directe relatie met klant" },
  { aspect: "Controle over presentatie", homedeal: "Platform bepaalt je profiel", systeem: "Volledig eigen branding en portfolio" },
  { aspect: "Afhankelijkheid", homedeal: "100% afhankelijk van platform", systeem: "Eigen systeem, altijd in beheer" },
  { aspect: "Opzettijd", homedeal: "Direct", systeem: "Live binnen 7 dagen" },
];

const caseMath = [
  {
    label: "Homedeal scenario",
    items: [
      { k: "Leads per maand", v: "12" },
      { k: "Kosten per lead", v: "€40" },
      { k: "Conversie naar opdracht", v: "18%" },
      { k: "Aantal klussen per maand", v: "2" },
      { k: "Kosten per gewonnen klus", v: "€240" },
      { k: "Maandkosten totaal", v: "€480" },
    ],
  },
  {
    label: "Aannemer Systeem scenario",
    items: [
      { k: "Leads per maand (via Google)", v: "15–25" },
      { k: "Kosten per lead", v: "€0 (onbeperkt)" },
      { k: "Conversie naar opdracht", v: "35% (direct contact)" },
      { k: "Aantal klussen per maand", v: "5–8" },
      { k: "Kosten per gewonnen klus", v: "€35–€55" },
      { k: "Maandkosten totaal", v: "€279" },
    ],
  },
];

const faqs = [
  {
    question: "Is Homedeal helemaal niet nuttig?",
    answer:
      "Homedeal kan nuttig zijn als aanvullend kanaal naast je eigen marketing, vooral als je net begint en snel aan de slag wilt. Het probleem is afhankelijkheid: als Homedeal je enige bron van leads is, heb je geen controle over je instroom en betaal je steeds meer per lead zonder iets eigens op te bouwen.",
  },
  {
    question: "Wat is het verschil tussen Homedeal en Werkspot?",
    answer:
      "Beide platforms werken op dezelfde manier: je betaalt per lead en concurreert met andere aannemers op dezelfde aanvraag. Homedeal stuurt doorgaans minder aannemers per lead (2-4 vs 3-5 bij Werkspot), maar de kosten per lead zijn vergelijkbaar. Bij beide platforms bouw je geen eigen online aanwezigheid op.",
  },
  {
    question: "Hoeveel kost Homedeal per maand?",
    answer:
      "De kosten bij Homedeal variëren: je betaalt €15–€65 per lead afhankelijk van de categorie en grootte van het project. De meeste aannemers spenderen €300–€1.000 per maand. Bij Aannemer Systeem betaal je een vast bedrag van €279 per maand voor een complete website, SEO, reviews en lead opvolging — met onbeperkte leads.",
  },
  {
    question: "Hoe snel krijg ik leads via mijn eigen website?",
    answer:
      "Google Mijn Bedrijf optimalisaties leveren vaak binnen enkele weken resultaat. Organische zoekresultaten bouwen over 2–4 maanden op. De meeste aannemers zien binnen 3 maanden meer aanvragen via hun eigen website dan via Homedeal — zonder leadkosten.",
  },
  {
    question: "Kan ik Homedeal blijven gebruiken naast een eigen website?",
    answer:
      "Absoluut. Veel aannemers gebruiken Homedeal als extra kanaal terwijl hun eigen website groeit. Na een paar maanden merk je dat het merendeel van je leads via Google binnenkomt en je Homedeal-budget kunt verlagen of stopzetten.",
  },
  {
    question: "Wat als ik al reviews op Homedeal heb?",
    answer:
      "Reviews op Homedeal blijven op Homedeal — ze helpen niet met je Google-positie. Met Aannemer Systeem bouw je automatisch Google reviews op die wél bijdragen aan je vindbaarheid. Je kunt op je website wel verwijzen naar je Homedeal-score als extra sociaal bewijs.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Homedeal Alternatief: Eigen Leads zonder Leadkosten | Aannemer Systeem",
  url: PAGE_URL,
  description: "Homedeal kost €15–€65 per lead en je deelt elke aanvraag. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk hier.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Homedeal alternatief", item: PAGE_URL },
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

const HomedealAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Homedeal Alternatief: Eigen Leads zonder Leadkosten | Aannemer Systeem</title>
      <meta name="description" content="Homedeal kost €15–€65 per lead en je deelt elke aanvraag. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk hier." />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Homedeal Alternatief: Eigen Leads zonder Leadkosten" />
      <meta property="og:description" content="Homedeal kost €15–€65 per lead. Een eigen website levert onbeperkte leads voor €279/maand." />
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
          Homedeal Alternatief: Eigen Leads zonder Leadkosten
        </motion.h1>
        <motion.p {...fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
          Homedeal rekent €15–€65 per lead, deelt elke aanvraag met meerdere aannemers en bouwt niets op voor jouw bedrijf. Ontdek waarom een eigen website meer oplevert — voor minder geld.
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
          De 4 problemen met Homedeal die niemand vertelt
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
          Homedeal vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Een eerlijke, puntgewijze vergelijking. Geen marketingpraatjes.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Homedeal</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.homedeal}</TableCell>
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
          De echte wiskunde voor een typische aannemer
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Zelfde vakman, twee kanalen. Kijk wat elke euro oplevert.
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
          Cijfers gebaseerd op gemiddelde resultaten bij Nederlandse aannemers in de eerste 6 maanden na implementatie. Individuele resultaten variëren.
        </motion.p>
      </div>
    </section>

    {/* When Homedeal is useful */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Wanneer is Homedeal dan wél handig?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Homedeal kan nuttig zijn als je net begint en snel aan de slag wilt. Het platform brengt vraag en aanbod samen, waardoor je zonder eigen website al leads kunt ontvangen.
          </p>
          <p>
            Het probleem ontstaat wanneer Homedeal je enige bron van klanten is. De leadkosten stijgen jaarlijks, de kwaliteit van leads fluctueert en je hebt geen controle over je instroom. Je bouwt niets eigens op.
          </p>
          <p>
            De slimste aannemers gebruiken Homedeal als aanvulling terwijl ze hun eigen website en Google-positie opbouwen. Na 3–6 maanden komt het merendeel van hun leads via Google — gratis — en wordt Homedeal een optioneel extraatje.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Homedeal werkt als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Je net begint, snel leads nodig hebt en het als tijdelijk kanaal naast eigen marketing ziet.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Homedeal werkt niet als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Het je enige bron van klanten is, je geen eigen merk opbouwt of je hoge leadkosten niet terugverdient.</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Veelgestelde vragen over Homedeal alternatieven
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
        <h3 className="text-2xl font-bold text-foreground">Werkspot vs Aannemer Systeem</h3>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Vergelijk ook Werkspot met een eigen website — dezelfde problemen, net iets ander model.</p>
        <div className="mt-6">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/werkspot-alternatief">Bekijk de vergelijking <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default HomedealAlternatief;
