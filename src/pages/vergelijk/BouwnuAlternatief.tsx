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
const PAGE_URL = `${SITE_URL}/vergelijk/bouwnu-alternatief`;

const problems = [
  {
    title: "Je betaalt credits, ook voor leads die nergens heen gaan",
    description:
      "Bouwnu werkt met een credit-systeem waarbij je betaalt om een aanvraag in te zien. Veel aannemers ontdekken dat een groot deel van die leads slecht gekwalificeerd of niet bereikbaar is — maar je credits krijg je niet terug.",
  },
  {
    title: "Dezelfde aanvraag gaat naar meerdere aannemers",
    description:
      "Net als bij andere platforms wordt elke aanvraag naar meerdere vakmannen doorgestuurd. De klant kiest vervolgens meestal op prijs. Je concurreert dus niet op vakmanschap, maar op wie de laagste offerte durft neer te zetten.",
  },
  {
    title: "Je bouwt geen eigen online aanwezigheid op",
    description:
      "Elke euro die je aan Bouwnu uitgeeft, komt ten goede aan het platform — niet aan je eigen vindbaarheid op Google, je reviews of je website. Stop je met Bouwnu, dan stopt ook je leadstroom.",
  },
  {
    title: "Je hebt geen controle over welke leads je krijgt",
    description:
      "Je kunt filteren op regio en vakgebied, maar niet op kwaliteit of budget van de klant. Resultaat: je betaalt vaak voor klussen die buiten je sweet spot vallen of waar de klant een onrealistisch budget heeft.",
  },
];

const comparison = [
  {
    aspect: "Kostenmodel",
    bouwnu: "Credits — betaal per lead die je inziet",
    systeem: "€279/maand vast",
  },
  {
    aspect: "Onbeperkte leads",
    bouwnu: "Nee — per lead afrekenen",
    systeem: "Ja — onbeperkt via eigen site",
  },
  {
    aspect: "Concurrentie per aanvraag",
    bouwnu: "Meerdere aannemers zien dezelfde lead",
    systeem: "Klant belt rechtstreeks jou",
  },
  {
    aspect: "Eigen merk & website",
    bouwnu: "Nee — je profileert op platform",
    systeem: "Eigen website en domein",
  },
  {
    aspect: "SEO & Google vindbaarheid",
    bouwnu: "Geen directe impact",
    systeem: "Volledig geoptimaliseerd",
  },
  {
    aspect: "Google reviews",
    bouwnu: "Reviews blijven op Bouwnu",
    systeem: "Automatische Google reviews",
  },
  {
    aspect: "Klantrelatie",
    bouwnu: "Platform zit ertussen",
    systeem: "Direct contact met klant",
  },
  {
    aspect: "Terugkerende klanten",
    bouwnu: "Moeilijk traceerbaar",
    systeem: "Klanten vinden je direct terug",
  },
  {
    aspect: "Contractvorm",
    bouwnu: "Credit-bundels kopen",
    systeem: "Maandelijks opzegbaar",
  },
];

const faqs = [
  {
    question: "Wat is het verschil tussen Bouwnu en Werkspot?",
    answer:
      "Bouwnu en Werkspot werken beide met een systeem waarbij je betaalt om leads te bemachtigen, maar de prijzen en het credit-model verschillen. In de kern is het probleem hetzelfde: je bent afhankelijk van het platform en betaalt per lead, ongeacht of je de klus krijgt. Een eigen website geeft je onbeperkte leads voor een vast bedrag per maand — zonder tussenpersoon.",
  },
  {
    question: "Is Bouwnu überhaupt wel de moeite waard?",
    answer:
      "Voor sommige aannemers kan Bouwnu een nuttige extra leadbron zijn, vooral als je net begint en nog geen online aanwezigheid hebt. Het wordt pas een probleem wanneer het je enige bron van klanten is. De slimste aannemers gebruiken Bouwnu hooguit als extraatje terwijl ze hun eigen website en Google vindbaarheid opbouwen.",
  },
  {
    question: "Hoeveel kost een gemiddelde lead via Bouwnu?",
    answer:
      "Dat verschilt per vakgebied en regio, maar de meeste aannemers rapporteren kosten tussen de €15 en €70 per gekwalificeerde lead. Reken je dat door naar kosten per gewonnen klus (gemiddeld 15-25% conversie), dan kom je al snel op €100-€400 per binnengehaalde opdracht — elke maand opnieuw.",
  },
  {
    question: "Kan ik Bouwnu stoppen als ik een eigen website heb?",
    answer:
      "Absoluut. Zodra je eigen website voldoende leads oplevert, kun je gewoon stoppen met Bouwnu. Bij Aannemer Systeem bouwen we de eigen leadbron in 2-4 maanden op. Veel klanten starten met beide kanalen en stoppen daarna met de platforms zodra hun eigen systeem de stroom overneemt.",
  },
  {
    question: "Wat levert een eigen website écht op versus Bouwnu?",
    answer:
      "Een eigen website met goede lokale SEO levert 24/7 leads op zonder kosten per lead. De klanten komen rechtstreeks bij jou terecht, vergelijken niet met 4 andere aannemers, en je bouwt een eigen klantenbestand op dat je kunt hergebruiken voor onderhoud, referenties en reviews. Op de lange termijn is dit bijna altijd rendabeler dan platform-afhankelijkheid.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bouwnu Alternatief: Stop met Betalen per Lead | Aannemer Systeem",
  url: PAGE_URL,
  description:
    "Bouwnu werkt met credits — je betaalt voor elke lead die je inziet. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk Bouwnu en een eigen systeem.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Bouwnu alternatief", item: PAGE_URL },
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

const BouwnuAlternatief = () => (
  <PageShell>
    <Helmet>
      <title>Bouwnu Alternatief: Stop met Betalen per Lead | Aannemer Systeem</title>
      <meta
        name="description"
        content="Bouwnu werkt met credits — je betaalt voor elke lead die je inziet. Een eigen website levert onbeperkte leads voor €279/maand. Vergelijk Bouwnu en een eigen systeem."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Bouwnu Alternatief: Stop met Betalen per Lead" />
      <meta
        property="og:description"
        content="Bouwnu werkt met credits. Een eigen website levert onbeperkte leads voor €279/maand."
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
          Bouwnu Alternatief: Stop met Credits Kopen
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Bouwnu werkt met een credit-systeem waar je per lead betaalt — ook als
          die lead niks oplevert. Lees waarom een eigen website in de meeste
          gevallen meer klanten oplevert voor minder geld.
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
          Waarom aannemers stoppen met Bouwnu
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
          Bouwnu vs Eigen Website (Aannemer Systeem)
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Twee manieren om aan klanten te komen, naast elkaar gezet.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Bouwnu</TableHead>
                <TableHead className="text-accent font-semibold">Aannemer Systeem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.bouwnu}</TableCell>
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
          Wanneer werkt Bouwnu wél?
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Bouwnu kan nuttig zijn als je net gestart bent en snel eerste klussen
            nodig hebt. Je hoeft geen website op te zetten, geen SEO op te
            bouwen — je meldt je aan en binnen een dag krijg je leads.
          </p>
          <p>
            Het probleem: die snelheid komt met een prijs. Elke euro gaat naar
            het platform, niet naar je eigen merk. Na een jaar Bouwnu heb je
            nog steeds geen eigen klantenstroom, geen Google vindbaarheid en
            geen online reputatie om op terug te vallen.
          </p>
          <p>
            De beste aanpak: gebruik Bouwnu (of een ander platform) hooguit
            tijdelijk, terwijl je ondertussen je eigen systeem opbouwt. Na 3–6
            maanden heeft je eigen website de leadstroom grotendeels overgenomen
            en kun je de platformkosten stoppen.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Check className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Bouwnu kan werken als:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Je net begint, snel klussen nodig hebt en het als tijdelijke
              overbrugging ziet.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <X className="h-4 w-4" />
            </div>
            <p className="font-semibold text-foreground">Bouwnu werkt niet als:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Je een stabiele, voorspelbare leadstroom wilt zonder steeds meer
              credits te moeten kopen.
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
          Veelgestelde vragen over Bouwnu alternatieven
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

export default BouwnuAlternatief;
