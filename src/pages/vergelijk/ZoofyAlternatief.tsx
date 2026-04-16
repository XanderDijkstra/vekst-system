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
const PAGE_URL = `${SITE_URL}/vergelijk/zoofy-alternatief`;

const problems = [
  {
    title: "Lage marges door gefixeerde prijzen",
    description:
      "Zoofy werkt met vaste prijzen per klustype. De klant betaalt een vast bedrag en jij ontvangt een percentage. Dit duwt je marges omlaag, vooral bij klussen die meer tijd kosten dan verwacht. Je hebt geen invloed op de prijs die de klant betaalt.",
  },
  {
    title: "Platform bepaalt je tarief en planning",
    description:
      "Zoofy bepaalt de prijs, koppelt klussen aan je agenda en neemt een commissie. Je bent in feite een onderaannemer van het platform — niet een onafhankelijk bedrijf. Naarmate Zoofy groeit, groeien hun commissies mee en dalen jouw marges.",
  },
  {
    title: "Geen eigen merk of klantrelatie",
    description:
      "Klanten boeken via Zoofy, niet via jou. Ze kennen je bedrijfsnaam niet, ze onthouden 'Zoofy' en boeken de volgende keer weer via het platform. Je bouwt geen eigen naamsbekendheid, geen terugkerende klanten en geen Google-reviews op.",
  },
  {
    title: "Kleine klussen, weinig groei",
    description:
      "Zoofy focust op kleine klusjes: kraan vervangen, lamp ophangen, slot vervangen. Dit zijn klussen van €75–€200. Als je wilt groeien naar grotere projecten, renovaties of vaste klanten, biedt Zoofy daar geen pad voor. Je blijft hangen in de kleinste klussen.",
  },
];

const comparison = [
  { aspect: "Kosten", zoofy: "Commissie per klus (15-30%)", systeem: "€279/maand vast" },
  { aspect: "Prijsbepaling", zoofy: "Platform bepaalt de prijs", systeem: "Jij bepaalt je eigen tarieven" },
  { aspect: "Type klussen", zoofy: "Voornamelijk kleine klusjes (€75–€200)", systeem: "Alle projectgroottes via eigen leads" },
  { aspect: "Eigen website", zoofy: "Nee — je staat op het platform", systeem: "Ja — eigen merk en domein" },
  { aspect: "Google vindbaarheid", zoofy: "Geen impact op je positie", systeem: "Volledig geoptimaliseerd voor lokale SEO" },
  { aspect: "Google reviews", zoofy: "Reviews op Zoofy, niet op Google", systeem: "Automatische Google reviews na elke klus" },
  { aspect: "Klantrelatie", zoofy: "Klant boekt via Zoofy", systeem: "Klant belt en boekt bij jou" },
  { aspect: "Groei-pad", zoofy: "Beperkt tot klusjes-segment", systeem: "Van klein naar groot, volledig in eigen hand" },
  { aspect: "Afhankelijkheid", zoofy: "Volledig afhankelijk van platform", systeem: "Eigen systeem, altijd in beheer" },
  { aspect: "Opzettijd", zoofy: "Direct", systeem: "Live binnen 7 dagen" },
];

const caseMath = [
  {
    label: "Zoofy scenario",
    items: [
      { k: "Klussen per maand", v: "15" },
      { k: "Gemiddelde kluswaarde", v: "€150" },
      { k: "Commissie Zoofy (20%)", v: "−€450" },
      { k: "Netto omzet", v: "€1.800" },
      { k: "Uren besteed", v: "30–40 uur" },
      { k: "Effectief uurtarief", v: "€45–€60" },
    ],
  },
  {
    label: "Aannemer Systeem scenario",
    items: [
      { k: "Leads per maand (via Google)", v: "15–25" },
      { k: "Gemiddelde projectwaarde", v: "€500–€3.000" },
      { k: "Commissie", v: "€0" },
      { k: "Netto omzet (bij 35% conversie)", v: "€2.625–€26.250" },
      { k: "Vaste kosten", v: "€279/maand" },
      { k: "Effectief uurtarief", v: "€65–€85+" },
    ],
  },
];

const faqs = [
  {
    question: "Is Zoofy geschikt voor aannemers?",
    answer:
      "Zoofy is primair gericht op kleine klusjes: kraan repareren, lamp ophangen, deur herstellen. Voor gespecialiseerde aannemers die grotere projecten willen aantrekken (renovaties, verbouwingen, installaties) is het platform te beperkt. De lage projectwaarden en commissiedruk maken het moeilijk om een rendabel bedrijf te draaien via Zoofy alleen.",
  },
  {
    question: "Hoeveel commissie neemt Zoofy?",
    answer:
      "Zoofy neemt een commissie van 15-30% per klus, afhankelijk van het type werk en je profiel. Bij een klusje van €150 houd je dus €105–€127 over. Bij Aannemer Systeem betaal je €279 per maand vast en houd je 100% van je omzet — zonder commissie per klus.",
  },
  {
    question: "Wat als ik nu vooral kleine klussen doe?",
    answer:
      "Kleine klussen zijn een prima startpunt, maar je wilt doorgroeien. Met een eigen website trek je niet alleen de kleine klusjes aan, maar ook de grotere projecten: badkamerrenovaties, keukeninstallaties, verbouwingen. Eén groter project van €3.000 levert meer op dan twintig Zoofy-klusjes — met minder rijtijd en overhead.",
  },
  {
    question: "Hoe snel krijg ik leads via mijn eigen website?",
    answer:
      "Google Mijn Bedrijf optimalisaties leveren vaak binnen weken al eerste resultaten. Organische zoekresultaten bouwen over 2–4 maanden op. De meeste vakmannen zien binnen 3 maanden een stabiele stroom eigen leads via Google — zonder commissie af te dragen.",
  },
  {
    question: "Kan ik Zoofy gebruiken naast een eigen website?",
    answer:
      "Ja. Veel vakmannen gebruiken Zoofy voor de kleine vulklussen terwijl hun eigen website grotere projecten aantrekt. Het verschil is dat je niet meer afhankelijk bent van één platform en je grotere, winstgevendere projecten via je eigen kanaal binnenhaalt.",
  },
  {
    question: "Ik ben net begonnen als zzp'er — wat is de beste start?",
    answer:
      "Als starter kun je Zoofy gebruiken om snel aan de slag te gaan en ervaring op te doen. Maar investeer tegelijkertijd in je eigen website en Google-profiel. Binnen 3–6 maanden heb je een eigen klantenstroom en kun je kiezen welke klussen je aanneemt — in plaats van te wachten op wat het platform je toewijst.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Zoofy Alternatief: Meer Omzet zonder Commissie | Aannemer Systeem",
  url: PAGE_URL,
  description: "Zoofy neemt 15-30% commissie per klus. Een eigen website levert leads zonder commissie voor €279/maand. Vergelijk hier.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Zoofy alternatief", item: PAGE_URL },
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

const ZoofyAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Zoofy Alternatief: Meer Omzet zonder Commissie | Aannemer Systeem</title>
      <meta name="description" content="Zoofy neemt 15-30% commissie per klus en bepaalt je tarief. Een eigen website levert leads zonder commissie voor €279/maand. Vergelijk hier." />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Zoofy Alternatief: Meer Omzet zonder Commissie" />
      <meta property="og:description" content="Zoofy neemt 15-30% commissie. Een eigen website levert leads zonder commissie voor €279/maand." />
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
          Zoofy Alternatief: Meer Omzet zonder Commissie
        </motion.h1>
        <motion.p {...fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
          Zoofy bepaalt je tarief, neemt 15-30% commissie en beperkt je tot kleine klusjes. Ontdek hoe een eigen website je meer omzet, hogere marges en grotere projecten oplevert.
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
          De 4 problemen met Zoofy voor vakmannen
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
          Zoofy vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Een eerlijke vergelijking: commissie-model vs eigen leads.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Zoofy</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.zoofy}</TableCell>
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
          De echte wiskunde: commissie vs eigen klanten
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Zelfde vakman, twee modellen. Kijk waar je meer overhoudt.
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
          Cijfers gebaseerd op gemiddelde resultaten. De shift van kleine klusjes naar grotere projecten maakt het verschil in uurtarief en omzet.
        </motion.p>
      </div>
    </section>

    {/* When useful */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Wanneer is Zoofy dan wél handig?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Zoofy is handig als je net begint als zzp'er en snel je eerste klussen wilt doen. Het platform vult je agenda met kleine klusjes en je hoeft zelf geen marketing te doen.
          </p>
          <p>
            Het probleem is dat je vastloopt: je draait commissie af, je tarief wordt door het platform bepaald en je groeit niet voorbij het klusjes-segment. Veel vakmannen ontdekken na een jaar dat ze hard werken voor een laag effectief uurtarief.
          </p>
          <p>
            De slimste vakmannen gebruiken Zoofy als springplank: ze doen klusjes, bouwen ondertussen hun eigen website en Google-profiel op, en schakelen na 3–6 maanden over naar eigen leads. Grotere projecten, hogere marges, geen commissie.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Zoofy werkt als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Je net begint, snel klusjes wilt doen en het als springplank ziet naar eigen klanten.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Zoofy werkt niet als:</p>
            <p className="mt-2 text-sm text-muted-foreground">Je wilt groeien, hogere marges wilt of moe bent van commissie afdragen per klus.</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Veelgestelde vragen over Zoofy alternatieven
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
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Vergelijk ook Werkspot: een ander model, dezelfde afhankelijkheid.</p>
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

export default ZoofyAlternatief;
