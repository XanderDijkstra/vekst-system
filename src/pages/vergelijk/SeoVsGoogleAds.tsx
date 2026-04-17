import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, Zap } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/vergelijk/seo-vs-google-ads`;

const channels = [
  {
    name: "SEO (lokale vindbaarheid)",
    icon: Search,
    tagline: "Organisch ranken in Google door je website te optimaliseren.",
    pros: [
      "Geen kosten per klik - gratis verkeer na de opbouwfase",
      "Vertrouwen: klanten klikken liever op organische resultaten",
      "Effect bouwt op - hoe langer je bestaat, hoe meer leads",
      "Combineert met Google Mijn Bedrijf voor dominantie in je regio",
    ],
    cons: [
      "Duurt 2–4 maanden voor eerste resultaten zichtbaar zijn",
      "Vereist technische en content-kennis",
      "Google algoritme kan veranderen",
    ],
    cost: "€279/maand vast (bij Aannemer Systeem)",
    speed: "2–4 maanden tot resultaat",
    roi: "Zeer hoog op lange termijn",
  },
  {
    name: "Google Ads (betaalde advertenties)",
    icon: Zap,
    tagline: "Direct bovenaan Google verschijnen door per klik te betalen.",
    pros: [
      "Resultaten binnen 24 uur na activering",
      "Volledige controle over budget en regio",
      "Perfect om pieken op te vangen of nieuwe regio's te testen",
      "Direct meetbaar - je ziet exact wat elke euro oplevert",
    ],
    cons: [
      "Elke klik kost geld - stopt de campagne, stopt de leadstroom",
      "Hoge klikprijzen in populaire niches (€5–€15 per klik)",
      "Vereist goed ingerichte landingspagina om te converteren",
      "Moet continu geoptimaliseerd worden om rendabel te blijven",
    ],
    cost: "€300–€2.000+ per maand (afhankelijk van regio)",
    speed: "Direct (binnen 24 uur)",
    roi: "Hoog bij goede setup - 0 bij slechte setup",
  },
];

const comparison = [
  {
    aspect: "Tijd tot eerste leads",
    seo: "2–4 maanden",
    ads: "Binnen 24 uur",
  },
  {
    aspect: "Kosten per klik",
    seo: "€0 - gratis na opbouw",
    ads: "€2–€15 per klik (vakafhankelijk)",
  },
  {
    aspect: "Vast maandbudget",
    seo: "€279/maand (bij Aannemer Systeem)",
    ads: "Variabel - €300 tot €2.000+ per maand",
  },
  {
    aspect: "Stopt direct als je betaalt",
    seo: "Nee - leads blijven binnenkomen",
    ads: "Ja - geen budget = geen leads",
  },
  {
    aspect: "Vertrouwen van klanten",
    seo: "Hoog - organische resultaten",
    ads: "Lager - wordt als advertentie herkend",
  },
  {
    aspect: "Effect op lange termijn",
    seo: "Groeit maand na maand",
    ads: "Vlak - je blijft betalen om zichtbaar te blijven",
  },
  {
    aspect: "Controle over regio",
    seo: "Gemiddeld - via lokale SEO",
    ads: "Volledig - exact per plaats instelbaar",
  },
  {
    aspect: "Werkt naast Google Mijn Bedrijf",
    seo: "Ja - versterkt elkaar",
    ads: "Ja - maar minder synergie",
  },
  {
    aspect: "Risico bij opzeggen",
    seo: "Laag - website blijft bestaan",
    ads: "Hoog - leads verdwijnen per direct",
  },
];

const recommendations = [
  {
    title: "Begin je net? Start met SEO + Google Mijn Bedrijf",
    description:
      "Je bouwt in 2–4 maanden een fundament op dat jarenlang leads blijft opleveren zonder kosten per klik. De investering is €279/maand - elke maand dat je bestaat, wordt het fundament sterker.",
  },
  {
    title: "Moet het per direct? Gebruik Google Ads tijdelijk",
    description:
      "Heb je over 2 weken een gat in je planning? Google Ads vult dat gat. Reken op €500–€1.500 om in een week 5–10 kwalitatieve leads binnen te halen. Zet ze daarna weer uit zodra je planning vol is.",
  },
  {
    title: "Serieus groeien? Combineer beide",
    description:
      "De slimste aanpak is SEO als fundament (gratis leads 24/7) en Google Ads als versneller wanneer je extra capaciteit hebt. Zo heb je een stabiele basis én de flexibiliteit om op te schalen wanneer nodig.",
  },
];

const faqs = [
  {
    question: "Wat levert meer op voor aannemers: SEO of Google Ads?",
    answer:
      "Op de lange termijn levert SEO vrijwel altijd meer op. SEO bouwt een fundament op dat maand na maand gratis leads oplevert, terwijl Google Ads stopt zodra je budget op is. Voor aannemers die 6+ maanden vooruit denken is SEO de slimste investering. Google Ads is vooral nuttig om snel pieken op te vangen of nieuwe regio's te testen.",
  },
  {
    question: "Hoeveel kost Google Ads per maand voor een aannemer?",
    answer:
      "Dat hangt af van je vakgebied en regio. In populaire niches zoals 'dakkapel' of 'badkamer' betaal je al snel €8–€15 per klik, en je hebt 30–80 klikken per lead nodig. Reken op €500–€2.000 per maand voor een basiscampagne. Voor nichemarkten of minder competitieve regio's kan het vanaf €200 per maand al effectief zijn.",
  },
  {
    question: "Hoe snel rankt een aannemerswebsite in Google?",
    answer:
      "Google Mijn Bedrijf optimalisaties geven vaak binnen 2–6 weken al resultaat - je lokale vindbaarheid neemt zichtbaar toe. Organische zoekresultaten voor regio-specifieke termen bouwen op in 2–4 maanden. Na 6 maanden heb je in de meeste regio's een stevige eerste pagina positie en komt het grootste deel van je leads gratis via Google.",
  },
  {
    question: "Kan ik Google Ads zelf doen of heb ik een expert nodig?",
    answer:
      "Je kunt Google Ads zelf opzetten, maar zonder ervaring verbrand je vaak snel veel geld. De instellingen (keywords, match types, biedingsstrategieën, negatieve keywords) bepalen of je €100 per lead of €500 per lead betaalt. Voor aannemers die serieus willen investeren is een expert die de campagnes opzet en beheert meestal de moeite waard - of kies voor SEO waar de return voorspelbaarder is.",
  },
  {
    question: "Zijn SEO en Google Ads niet hetzelfde?",
    answer:
      "Nee. SEO is het optimaliseren van je website zodat Google hem organisch bovenaan plaatst - zonder betaling. Google Ads is betaald verkeer waarbij je per klik betaalt om bovenaan te verschijnen. Ze staan in dezelfde zoekresultaten (Ads boven, SEO eronder) maar werken volledig verschillend: SEO is een eenmalige opbouw met lange-termijn rendement, Ads is een continue uitgave met directe resultaten.",
  },
  {
    question: "Wat als ik nu al Google Ads draai?",
    answer:
      "Geen probleem. Veel klanten starten bij Aannemer Systeem terwijl ze hun Google Ads campagnes blijven draaien. Zodra onze SEO fundament zich opbouwt, zien ze dat ze hun Ads-budget geleidelijk kunnen verlagen omdat er steeds meer gratis leads via organische resultaten binnenkomen. Na 6–12 maanden zijn veel aannemers helemaal gestopt met betaalde advertenties.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SEO vs Google Ads voor Aannemers: Wat Werkt Beter? | Aannemer Systeem",
  url: PAGE_URL,
  description:
    "SEO of Google Ads? Eerlijke vergelijking voor aannemers: kosten, snelheid, rendement en lange termijn. Welk kanaal past bij jouw bouwbedrijf?",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "SEO vs Google Ads", item: PAGE_URL },
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

const SeoVsGoogleAds = () => (
  <PageShell>
    <Helmet>
      <title>SEO vs Google Ads voor Aannemers: Wat Werkt Beter? | Aannemer Systeem</title>
      <meta
        name="description"
        content="SEO of Google Ads? Eerlijke vergelijking voor aannemers: kosten, snelheid, rendement en lange termijn. Welk kanaal past bij jouw bouwbedrijf?"
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="SEO vs Google Ads voor Aannemers: Wat Werkt Beter?" />
      <meta
        property="og:description"
        content="Eerlijke vergelijking tussen SEO en Google Ads voor aannemers - kosten, snelheid en rendement naast elkaar."
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
          SEO vs Google Ads voor Aannemers
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Betaal je per klik of bouw je een fundament dat gratis blijft
          opleveren? Kosten, snelheid en rendement naast elkaar - zodat je
          weet welk kanaal past bij jouw bouwbedrijf.
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

    {/* Channel cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Twee manieren om in Google te verschijnen
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Beide brengen klanten - maar ze werken fundamenteel verschillend.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {channels.map((c, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border p-8 shadow-system-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.tagline}</p>

              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-muted/40 p-3">
                  <p className="font-semibold text-foreground">Kosten</p>
                  <p className="mt-1 text-muted-foreground">{c.cost}</p>
                </div>
                <div className="rounded-lg bg-muted/40 p-3">
                  <p className="font-semibold text-foreground">Snelheid</p>
                  <p className="mt-1 text-muted-foreground">{c.speed}</p>
                </div>
                <div className="rounded-lg bg-muted/40 p-3">
                  <p className="font-semibold text-foreground">Rendement</p>
                  <p className="mt-1 text-muted-foreground">{c.roi}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">Voordelen</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {c.pros.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-destructive mb-2">Nadelen</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {c.cons.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-destructive">−</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
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
          SEO vs Google Ads - naast elkaar
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Negen belangrijke aspecten, eerlijk vergeleken.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead className="text-accent font-semibold">SEO</TableHead>
                <TableHead>Google Ads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="font-medium text-foreground bg-accent/5">
                    {row.seo}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.ads}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Recommendation section */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Onze eerlijke aanbeveling
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Welk kanaal past bij welke situatie?
        </motion.p>
        <div className="mt-12 space-y-5">
          {recommendations.map((r, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Veelgestelde vragen over SEO en Google Ads
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
        <h3 className="text-2xl font-bold text-foreground">
          Alle lead-kanalen voor aannemers vergelijken
        </h3>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          Website, Google Ads, Google Mijn Bedrijf, Werkspot en social media naast elkaar.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/lokale-leads-genereren">
              Bekijk de vergelijking <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default SeoVsGoogleAds;
