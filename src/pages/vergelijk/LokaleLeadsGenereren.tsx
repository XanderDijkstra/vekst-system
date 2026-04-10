import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  MapPin,
  Megaphone,
  Users,
  Share2,
  Star,
} from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/vergelijk/lokale-leads-genereren`;

const channels = [
  {
    icon: Globe,
    name: "Eigen website + SEO",
    tagline: "De basis waar alles op rust",
    pros: [
      "Onbeperkte leads — geen kosten per aanvraag",
      "Eigen merk en directe klantrelatie",
      "Werkt 24/7 zonder dat je betaalt per click",
      "Groeit exponentieel in waarde over tijd",
    ],
    cons: [
      "Resultaten bouwen op over 2–4 maanden",
      "Vereist continue content en technische optimalisatie",
    ],
    cost: "€279/maand (all-in bij Aannemer Systeem)",
    speed: "2–4 maanden tot eerste pagina Google",
    leadQuality: "Hoog — klanten zoeken gericht",
    scalability: "Enorm — elke extra pagina = extra long-tail leads",
  },
  {
    icon: MapPin,
    name: "Google Mijn Bedrijf",
    tagline: "De sterkste lokale signaal-booster",
    pros: [
      "Gratis om aan te maken en te beheren",
      "Verschijnt bovenaan lokale zoekopdrachten (kaart)",
      "Google reviews wegen extreem zwaar in SERP",
      "Snelle resultaten — vaak binnen weken zichtbaar",
    ],
    cons: [
      "Vereist actief onderhoud (foto's, posts, vragen)",
      "Afhankelijk van reviews en consistentie",
    ],
    cost: "Gratis (maar tijd-intensief om te onderhouden)",
    speed: "2–6 weken zichtbaar effect",
    leadQuality: "Zeer hoog — directe bel- en rij-intentie",
    scalability: "Beperkt tot servicegebied, maar binnen gebied zeer sterk",
  },
  {
    icon: Megaphone,
    name: "Google Ads",
    tagline: "Directe zichtbaarheid, tegen een prijs",
    pros: [
      "Direct bovenaan Google zichtbaar vanaf dag 1",
      "Volledig meetbaar en stuurbaar",
      "Kan gericht worden op stad, regio en keyword",
      "Handig als aanvulling in piek-periodes",
    ],
    cons: [
      "Kost €2–€8 per klik (niet per lead)",
      "Stopt direct zodra je budget op is",
      "Vereist landingspagina's die converteren",
      "Hoge concurrentie voor populaire termen",
    ],
    cost: "€300–€2.000/maand plus beheer",
    speed: "Direct — vanaf dag 1 clicks",
    leadQuality: "Gemiddeld — afhankelijk van landingspagina",
    scalability: "Stopt zodra budget stopt",
  },
  {
    icon: Users,
    name: "Werkspot / Platforms",
    tagline: "Snelle leads, maar tegen een prijs",
    pros: [
      "Geen eigen marketing nodig — leads komen binnen",
      "Handig als tijdelijke brug als je net begint",
      "Duidelijke offerteaanvragen met budget",
    ],
    cons: [
      "€20–€80 per lead, ook zonder opdracht",
      "Je concurreert met 3–5 andere aannemers",
      "Bouwt geen eigen merk of website op",
      "Maakt je afhankelijk van het platform",
    ],
    cost: "€200–€800/maand afhankelijk van volume",
    speed: "Direct — leads binnen dagen",
    leadQuality: "Laag–gemiddeld — prijsvergelijking",
    scalability: "Beperkt en duur bij volume",
  },
  {
    icon: Share2,
    name: "Social media (Instagram / Facebook)",
    tagline: "Sterk voor merkopbouw en visueel werk",
    pros: [
      "Gratis om te beginnen",
      "Perfect voor visueel vakwerk (foto's voor/na)",
      "Sterk voor mond-tot-mond en herhalingsklanten",
      "Goed voor vertrouwen opbouwen",
    ],
    cons: [
      "Organisch bereik is zeer laag geworden",
      "Vereist dagelijks content en interactie",
      "Conversie naar opdrachten is vaak traag",
      "Paid social is duur voor lokale bouw-doelgroep",
    ],
    cost: "Gratis (organisch) tot €200+/maand (paid)",
    speed: "Maanden tot merkeffect",
    leadQuality: "Gemiddeld — lage intentie, hoge inspiratie",
    scalability: "Beperkt zonder betaalde campagnes",
  },
  {
    icon: Star,
    name: "Mond-tot-mond & referenties",
    tagline: "De ultieme lead — maar onvoorspelbaar",
    pros: [
      "Hoogste conversiepercentage (50%+)",
      "Gratis",
      "Klanten komen al met vertrouwen binnen",
      "Geen concurrentie op prijs",
    ],
    cons: [
      "Onvoorspelbaar en niet schaalbaar",
      "Werkt alleen als je klantenbestand al groot is",
      "Geen controle over volume",
    ],
    cost: "€0 direct — investering in service",
    speed: "Onvoorspelbaar — afhankelijk van klanten",
    leadQuality: "Hoogste — warme leads",
    scalability: "Niet schaalbaar",
  },
];

const comparisonMatrix = [
  {
    aspect: "Kosten per maand",
    website: "€279 vast",
    gmb: "Gratis",
    ads: "€300–€2.000+",
    werkspot: "€200–€800",
    social: "€0–€500",
  },
  {
    aspect: "Kosten per lead",
    website: "€0 (onbeperkt)",
    gmb: "€0",
    ads: "€15–€80",
    werkspot: "€20–€80",
    social: "Variabel",
  },
  {
    aspect: "Snelheid eerste leads",
    website: "2–4 mnd",
    gmb: "2–6 wkn",
    ads: "Direct",
    werkspot: "Direct",
    social: "Traag",
  },
  {
    aspect: "Lead kwaliteit",
    website: "Zeer hoog",
    gmb: "Zeer hoog",
    ads: "Gemiddeld",
    werkspot: "Laag",
    social: "Gemiddeld",
  },
  {
    aspect: "Eigen merk bouwt op",
    website: "Ja",
    gmb: "Gedeeltelijk",
    ads: "Nee",
    werkspot: "Nee",
    social: "Ja",
  },
  {
    aspect: "Werkt 24/7 passief",
    website: "Ja",
    gmb: "Ja",
    ads: "Alleen met budget",
    werkspot: "Nee",
    social: "Nee",
  },
  {
    aspect: "Schaalbaar",
    website: "Ja",
    gmb: "Regionaal",
    ads: "Ja (duur)",
    werkspot: "Beperkt",
    social: "Beperkt",
  },
  {
    aspect: "Afhankelijkheid",
    website: "Geen",
    gmb: "Google",
    ads: "Google",
    werkspot: "Platform",
    social: "Meta/TikTok",
  },
];

const faqs = [
  {
    question: "Wat is het beste kanaal om lokale leads te genereren als aannemer?",
    answer:
      "De combinatie eigen website + Google Mijn Bedrijf is voor 90% van de aannemers het sterkste fundament. Beide werken samen: je website geeft Google context en autoriteit, GMB zorgt voor directe lokale zichtbaarheid in de kaart. Andere kanalen (Werkspot, Ads, social) zijn nuttige aanvullingen, maar zouden geen hoofdbron moeten zijn.",
  },
  {
    question: "Moet ik Google Ads doen of juist mijn website verbeteren?",
    answer:
      "Op korte termijn geeft Google Ads directer resultaat, maar elke euro die je stopt in Ads verdwijnt zodra je stopt met betalen. Elke euro die je investeert in een goede website en lokale SEO blijft jarenlang werken. De meeste aannemers zijn beter af met een sterke website en GMB als fundament — en Google Ads alleen inzetten in piekperiodes of voor nieuwe vestigingen.",
  },
  {
    question: "Is Google Mijn Bedrijf echt zo belangrijk?",
    answer:
      "Ja — voor lokale bedrijven zoals aannemers is GMB waarschijnlijk het belangrijkste gratis marketingkanaal dat bestaat. Wanneer iemand zoekt naar 'dakdekker Amsterdam' of 'loodgieter in de buurt', toont Google eerst de kaartresultaten. Dat is waar de eerste 3–5 klikken naartoe gaan. Zonder een geoptimaliseerd GMB profiel ben je voor die klanten compleet onzichtbaar.",
  },
  {
    question: "Hoeveel leads per maand kan ik redelijkerwijs verwachten?",
    answer:
      "Dat hangt af van je vakgebied en regio. Een loodgieter in Amsterdam kan binnen 3–6 maanden naar 20–40 aanvragen per maand via eigen website en GMB. Een kelderbouwer met grotere, specialistische projecten zit eerder op 3–8 hoogwaardige aanvragen per maand. De hoeveelheid is minder belangrijk dan de kwaliteit — één website-lead voor een €45.000 klus is meer waard dan 20 Werkspot-leads.",
  },
  {
    question: "Moet ik alle kanalen tegelijk inzetten?",
    answer:
      "Nee — dat is een valkuil. Begin met het fundament: een goede website en een volledig GMB profiel. Pas wanneer die lopen, voeg je eventueel Google Ads toe voor piekperiodes en social media voor merkopbouw. Werkspot kan een tijdelijke brug zijn terwijl je eigen kanalen opbouwen. De fout die de meeste aannemers maken is overal tegelijk 'iets' doen zonder ergens echt in te investeren.",
  },
  {
    question: "Wat is de snelste manier om leads te krijgen als ik vandaag begin?",
    answer:
      "Snelste effect: (1) maak vandaag je Google Mijn Bedrijf profiel compleet en vraag 5 recente klanten om een review, (2) zet een simpele maar professionele website online met duidelijke diensten en contactinfo, (3) overweeg eventueel een beperkt Google Ads budget voor je belangrijkste zoektermen. Met dit pakket kun je binnen 4–6 weken de eerste echte aanvragen zien — zonder per lead te betalen.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Beste Manieren om Lokale Leads te Genereren als Aannemer | Aannemer Systeem",
  url: PAGE_URL,
  description:
    "Welk kanaal levert de meeste lokale leads op voor aannemers? Vergelijk website, Google Mijn Bedrijf, Google Ads, Werkspot en social media naast elkaar.",
  inLanguage: "nl-NL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vergelijkingen", item: `${SITE_URL}/vergelijk` },
      { "@type": "ListItem", position: 3, name: "Lokale leads genereren", item: PAGE_URL },
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

const LokaleLeadsGenereren = () => (
  <PageShell>
    <Helmet>
      <title>Beste Manieren om Lokale Leads te Genereren als Aannemer | Aannemer Systeem</title>
      <meta
        name="description"
        content="Website, Google Mijn Bedrijf, Google Ads, Werkspot of social media — welk kanaal levert de meeste lokale leads op voor aannemers? Eerlijke vergelijking."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Beste Manieren om Lokale Leads te Genereren als Aannemer" />
      <meta
        property="og:description"
        content="Vergelijk website, Google Mijn Bedrijf, Google Ads, Werkspot en social media naast elkaar."
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
          Beste Manieren om Lokale Leads te Genereren
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Website, Google Mijn Bedrijf, Google Ads, Werkspot of social media — welk
          kanaal levert écht de meeste lokale klanten op voor aannemers? We zetten
          alle opties eerlijk naast elkaar.
        </motion.p>
      </div>
    </section>

    {/* Channel cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          De 6 belangrijkste kanalen voor aannemers
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Voor elk kanaal: wat het kost, hoe snel het werkt en wanneer je het moet
          inzetten.
        </motion.p>
        <div className="mt-12 space-y-6">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
                className="rounded-2xl bg-card border border-border p-8 shadow-system-card"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{c.name}</h3>
                    <p className="mt-1 text-muted-foreground">{c.tagline}</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-accent mb-2">
                          Voordelen
                        </p>
                        <ul className="space-y-1.5">
                          {c.pros.map((p, j) => (
                            <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                              + {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-2">
                          Nadelen
                        </p>
                        <ul className="space-y-1.5">
                          {c.cons.map((p, j) => (
                            <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                              − {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm border-t border-border/60 pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          Kosten
                        </p>
                        <p className="font-semibold text-foreground">{c.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          Snelheid
                        </p>
                        <p className="font-semibold text-foreground">{c.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          Lead kwaliteit
                        </p>
                        <p className="font-semibold text-foreground">{c.leadQuality}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          Schaalbaarheid
                        </p>
                        <p className="font-semibold text-foreground">{c.scalability}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Big matrix */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Alle kanalen in één overzicht
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Een snelle vergelijking op de belangrijkste aspecten.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/6"></TableHead>
                <TableHead className="text-accent font-semibold">Website + SEO</TableHead>
                <TableHead>GMB</TableHead>
                <TableHead>Google Ads</TableHead>
                <TableHead>Werkspot</TableHead>
                <TableHead>Social</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonMatrix.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="font-medium text-foreground bg-accent/5">
                    {row.website}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.gmb}</TableCell>
                  <TableCell className="text-muted-foreground">{row.ads}</TableCell>
                  <TableCell className="text-muted-foreground">{row.werkspot}</TableCell>
                  <TableCell className="text-muted-foreground">{row.social}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Our recommendation */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Onze eerlijke aanbeveling
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Voor 90% van de aannemers is de beste strategie simpel: bouw een sterk
            fundament van <strong className="text-foreground">eigen website + Google Mijn Bedrijf</strong>,
            en gebruik andere kanalen alleen als aanvulling.
          </p>
          <p>
            Een eigen website met goede lokale SEO blijft jarenlang werken. Elke
            euro die je erin investeert blijft leads opleveren — ook jaren later.
            Google Mijn Bedrijf is gratis en zet je bovenaan de kaart bij lokale
            zoekopdrachten. Samen dekken deze twee kanalen 70–90% van alle zoekende
            klanten.
          </p>
          <p>
            Google Ads kan nuttig zijn in piek-periodes of voor nieuwe vestigingen,
            maar het stopt zodra je budget op is. Werkspot is handig als tijdelijke
            brug als je nét begint, maar zorg dat je er niet van afhankelijk wordt.
            Social media werkt vooral voor visueel werk en merkopbouw — niet voor
            directe leads.
          </p>
          <p className="text-foreground font-semibold">
            Onze klanten zien gemiddeld binnen 3 maanden meer leads via hun eigen
            website dan ze ooit via Werkspot haalden — en zonder per lead te
            betalen.
          </p>
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
          Veelgestelde vragen over lokale leadgeneratie
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
          Ook interessant
        </p>
        <h3 className="text-2xl font-bold text-foreground">
          Werkspot alternatief: stop met betalen per lead
        </h3>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          Diepere vergelijking tussen Werkspot en een eigen website voor aannemers.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/vergelijk/werkspot-alternatief">
              Bekijk de vergelijking <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default LokaleLeadsGenereren;
