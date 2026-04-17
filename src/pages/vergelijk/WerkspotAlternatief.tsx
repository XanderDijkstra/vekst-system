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
const PAGE_URL = `${SITE_URL}/vergelijk/werkspot-alternatief`;

const problems = [
  {
    title: "Je betaalt €20–€80 per lead, ongeacht of je de klus krijgt",
    description:
      "Werkspot rekent een vast bedrag per lead, ook als de klant niet reageert, de klus niet doorgaat of drie andere aannemers ook hebben gereageerd. Veel aannemers betalen €200–€500 per maand aan leads zonder zeker te weten wat ze ervoor terugkrijgen.",
  },
  {
    title: "Je concurreert met 3–5 andere aannemers op prijs",
    description:
      "Zodra een klant een aanvraag doet, wordt die naar meerdere aannemers tegelijk gestuurd. De klant vergelijkt vervolgens alleen op prijs. Jouw vakmanschap, reviews en kwaliteit tellen nauwelijks — wie het goedkoopste is, wint.",
  },
  {
    title: "Je bouwt geen eigen klantenbestand of merk op",
    description:
      "Alle klanten die via Werkspot komen, blijven 'Werkspot klanten'. Stop je met het platform, dan stopt ook je leadstroom. Je bouwt geen naamsbekendheid op, geen reviews op je eigen website en geen terugkerende klanten via Google.",
  },
  {
    title: "De reviews op Werkspot helpen jouw Google-positie niet",
    description:
      "Reviews op Werkspot blijven op Werkspot. Ze verschijnen niet in Google zoekresultaten en helpen niet met je lokale vindbaarheid. Google Mijn Bedrijf en Google reviews zijn waar klanten écht kijken — en dat bouw je met Werkspot niet op.",
  },
];

const comparison = [
  {
    aspect: "Kosten per maand",
    werkspot: "€200–€800/maand (variabel, betaal per lead)",
    systeem: "€279/maand vast",
  },
  {
    aspect: "Kosten per lead",
    werkspot: "€20–€80 per lead, ook bij geen opdracht",
    systeem: "€0 — onbeperkte leads via eigen website",
  },
  {
    aspect: "Concurrentie per aanvraag",
    werkspot: "3–5 andere aannemers zien dezelfde lead",
    systeem: "Klant belt rechtstreeks jou",
  },
  {
    aspect: "Eigen website",
    werkspot: "Nee — je staat op het platform",
    systeem: "Ja — eigen merk en domein",
  },
  {
    aspect: "Google vindbaarheid",
    werkspot: "Geen impact",
    systeem: "Volledig geoptimaliseerd voor lokale SEO",
  },
  {
    aspect: "Google reviews",
    werkspot: "Reviews blijven op Werkspot",
    systeem: "Automatische Google reviews na elke klus",
  },
  {
    aspect: "Klantrelatie",
    werkspot: "Werkspot is de tussenpersoon",
    systeem: "Directe relatie met klant",
  },
  {
    aspect: "Terugkerende klanten",
    werkspot: "Moeilijk — via Werkspot heen werken",
    systeem: "Klanten vinden je direct terug",
  },
  {
    aspect: "Afhankelijkheid",
    werkspot: "100% afhankelijk van platform",
    systeem: "Eigen systeem, altijd in beheer",
  },
  {
    aspect: "Opzettijd",
    werkspot: "Direct",
    systeem: "Live binnen 7 dagen",
  },
];

const caseMath = [
  {
    label: "Werkspot scenario",
    items: [
      { k: "Leads per maand", v: "10" },
      { k: "Kosten per lead", v: "€45" },
      { k: "Conversie naar opdracht", v: "20%" },
      { k: "Aantal klussen per maand", v: "2" },
      { k: "Kosten per gewonnen klus", v: "€225" },
      { k: "Maandkosten totaal", v: "€450" },
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
    question: "Is Werkspot helemaal niet nuttig?",
    answer:
      "Werkspot kan nuttig zijn als je net begint en nog geen klantenstroom hebt. Het probleem ontstaat wanneer je er afhankelijk van blijft. Je betaalt per lead, concurreert op prijs en bouwt geen eigen merk op. De meeste aannemers zijn beter af met een eigen website die ze 24/7 klanten oplevert — en Werkspot eventueel als extra bijverdienste.",
  },
  {
    question: "Wat is het verschil met een 'gewoon' marketingbureau?",
    answer:
      "Een traditioneel marketingbureau rekent €1.500–€4.000 per maand plus opstartkosten, en levert meestal alleen een website of SEO. Aannemer Systeem is een compleet pakket: website, lokale SEO, review automatisering, lead opvolging én gemiste-oproep-terugbelsysteem — voor €279 per maand, zonder opstartkosten.",
  },
  {
    question: "Wat als ik al een website heb?",
    answer:
      "Dat is geen probleem. In een gratis gesprek kijken we of je bestaande site een upgrade nodig heeft of dat we beter helemaal opnieuw beginnen. Veel aannemers ontdekken dat hun huidige site visueel wel oké is, maar technisch en qua SEO onderpresteert — waardoor Google ze nauwelijks laat zien.",
  },
  {
    question: "Hoe snel krijg ik leads via mijn eigen website?",
    answer:
      "Google Mijn Bedrijf optimalisaties leveren vaak binnen enkele weken al eerste resultaten op. Organische zoekresultaten bouwen over 2–4 maanden op. De meeste aannemers zien binnen 3 maanden significant meer aanvragen via hun eigen website dan ze via Werkspot kregen — en zonder leadkosten.",
  },
  {
    question: "Kan ik Werkspot blijven gebruiken naast Aannemer Systeem?",
    answer:
      "Ja, absoluut. Veel klanten gebruiken Werkspot nog als extra kanaal terwijl hun eigen website groeit. Het verschil is dat je dan niet meer afhankelijk bent van één platform — en je Werkspot-kosten kunnen verlagen zodra je eigen leads binnenstromen.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer:
      "Aannemer Systeem heeft geen lange contracten. Je betaalt maandelijks en kunt altijd opzeggen. De website blijft van jou — we vergrendelen je niet in een technisch contract zoals veel bureaus doen.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Werkspot Alternatief: Stop met Betalen per Lead | Aannemer Systeem",
  url: PAGE_URL,
  description:
    "Werkspot kost €20–€80 per lead en je concurreert met 3–5 andere aannemers. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk hier.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Werkspot alternatief", item: PAGE_URL },
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
      <title>Werkspot Alternatief: Stop met Betalen per Lead | Aannemer Systeem</title>
      <meta
        name="description"
        content="Werkspot kost €20–€80 per lead en je concurreert met 3–5 andere aannemers. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk hier."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Werkspot Alternatief: Stop met Betalen per Lead" />
      <meta
        property="og:description"
        content="Werkspot kost €20–€80 per lead. Een eigen website levert onbeperkte leads voor €279/maand."
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
          Werkspot Alternatief: Stop met Betalen per Lead
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Werkspot rekent €20–€80 per lead, jaagt je in prijs-concurrentie met 3–5
          andere aannemers en bouwt geen eigen merk op. Lees waarom een eigen
          website bijna altijd meer oplevert — en wat het verschil is.
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

    {/* Problems with Werkspot */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          De 4 problemen met Werkspot die niemand vertelt
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
          Werkspot vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Een eerlijke, puntgewijze vergelijking. Geen marketingpraatjes.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Werkspot</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
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
          De echte wiskunde voor een typische aannemer
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Zelfde vakman, twee kanalen. Kijk wat elke euro oplevert.
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
          Cijfers gebaseerd op gemiddelde resultaten bij Nederlandse aannemers in de
          eerste 6 maanden na implementatie. Individuele resultaten variëren.
        </motion.p>
      </div>
    </section>

    {/* When Werkspot is still useful */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Wanneer is Werkspot dan wél handig?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            We zijn eerlijk: Werkspot heeft bestaansrecht. Als je net begint,
            nog geen klantenstroom hebt en snel aan de bak wilt, kan het platform
            een nuttige aanvulling zijn op je bestaande kanalen.
          </p>
          <p>
            Het probleem ontstaat wanneer Werkspot je enige bron van leads is.
            Dan ben je 100% afhankelijk van een platform waar je geen controle
            over hebt — en waar de prijzen per lead jaarlijks stijgen.
          </p>
          <p>
            De slimste aannemers gebruiken Werkspot als extraatje, terwijl ze hun
            eigen website, Google Mijn Bedrijf en reviews opbouwen. Na 3–6 maanden
            komt het grootste deel van hun leads via hun eigen kanaal — gratis —
            en is Werkspot gewoon "leuke bijkomstigheid" geworden.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Werkspot werkt als:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Je net begint, je capaciteit hebt en het als extra kanaal naast
              eigen marketing ziet.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Werkspot werkt niet als:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Het je enige bron van klanten is, of je geen eigen merk opbouwt
              naast het platform.
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
          Veelgestelde vragen over Werkspot alternatieven
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
            <Link to="/vergelijk/homedeal-alternatief">Homedeal alternatief</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/instapro-alternatief">Instapro alternatief</Link>
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

export default WerkspotAlternatief;
