import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  Users,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://aannemersysteem.com";

const stats = [
  { value: "62%", description: "van aannemers werkt nog met papieren processen die dagelijks tijd kosten." },
  { value: "4,5 uur", description: "per week besteden aannemers gemiddeld aan administratie die geautomatiseerd kan worden." },
  { value: "3x", description: "sneller werken bedrijven die hun processen hebben gedigitaliseerd." },
];

const features = [
  {
    icon: FileText,
    title: "Digitale offertes & facturen",
    description:
      "Maak en verstuur professionele offertes en facturen vanaf je telefoon. Klanten kunnen direct online akkoord geven en je houdt alles overzichtelijk bij.",
  },
  {
    icon: Globe,
    title: "Professionele online aanwezigheid",
    description:
      "Een moderne website die 24/7 voor je werkt. Potentiële klanten vinden je online, zien je werk en kunnen direct een offerte aanvragen.",
  },
  {
    icon: Smartphone,
    title: "Alles op je telefoon",
    description:
      "Beheer je bedrijf vanaf de bouwplaats. Berichten, leads, planning en klantgegevens - allemaal toegankelijk op je mobiel.",
  },
  {
    icon: Cloud,
    title: "Klantgegevens in de cloud",
    description:
      "Geen losse briefjes of Excel-sheets meer. Al je klantgegevens, projecten en communicatie staan veilig op één centrale plek.",
  },
  {
    icon: TrendingUp,
    title: "Inzicht in je bedrijfsprestaties",
    description:
      "Zie in één dashboard hoeveel leads er binnenkomen, hoeveel offertes je verstuurt en wat je conversieratio is. Data in plaats van onderbuikgevoel.",
  },
  {
    icon: Users,
    title: "Betere klantcommunicatie",
    description:
      "Automatische bevestigingen, herinneringen en updates. Je klanten weten altijd waar ze aan toe zijn, zonder dat jij er tijd aan kwijt bent.",
  },
];

const steps = [
  {
    step: "01",
    title: "Analyse van je huidige processen",
    duration: "30 minuten",
    description:
      "We brengen in kaart hoe je nu werkt: van eerste klantcontact tot facturatie. Waar verlies je tijd? Waar gaan leads verloren? Dit vormt de basis voor je digitale strategie.",
  },
  {
    step: "02",
    title: "Implementatie op maat",
    duration: "1–2 weken",
    description:
      "We zetten je digitale systemen op: website, CRM, automatische opvolging en communicatietools. Alles wordt afgestemd op jouw type werk en werkwijze.",
  },
  {
    step: "03",
    title: "Training & livegang",
    duration: "45 minuten",
    description:
      "We lopen samen door alle systemen, beantwoorden je vragen en zorgen dat je team ermee kan werken. Daarna ga je live en merk je direct het verschil.",
  },
];

const faqs = [
  {
    question: "Moet ik technisch onderlegd zijn om dit te gebruiken?",
    answer:
      "Absoluut niet. Onze systemen zijn gebouwd voor aannemers, niet voor IT-specialisten. Als je een smartphone kunt bedienen, kun je hiermee werken. Bovendien krijg je volledige uitleg en ondersteuning.",
  },
  {
    question: "Hoe lang duurt het voordat alles draait?",
    answer:
      "De meeste bedrijven zijn binnen 1 tot 2 weken volledig operationeel. De website en basis-systemen staan er vaak al binnen een week. Complexere integraties kunnen iets langer duren.",
  },
  {
    question: "Kan ik mijn bestaande tools blijven gebruiken?",
    answer:
      "Ja. We bouwen geen gesloten systeem, maar koppelen waar mogelijk aan je bestaande tools. Gebruik je al een boekhoudprogramma of planningssoftware? Dan zorgen we dat de data doorstroomt.",
  },
  {
    question: "Wat kost digitalisering voor mijn bedrijf?",
    answer:
      "We werken met een vast maandelijks tarief van €279 per maand. Daarin zit alles: website, automatisering, onderhoud en support. Geen verrassingen, geen verborgen kosten.",
  },
  {
    question: "Wat als ik al een website heb?",
    answer:
      "Dan bekijken we samen of je huidige website voldoet of dat een upgrade nodig is. In veel gevallen bouwen we een nieuwe website die specifiek is ingericht op lead generatie - maar we dwingen niets af.",
  },
];

const DigitaliseringAannemers = () => (
  <PageShell>
    <Helmet>
      <title>Digitalisering voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Van papier naar digitaal. Wij helpen aannemers de stap te maken naar digitale processen die tijd besparen, fouten voorkomen en meer klanten opleveren."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/digitalisering-aannemers`} />
      <meta property="og:title" content="Digitalisering voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Van papier naar digitaal. Wij helpen aannemers digitaliseren." />
      <meta property="og:url" content={`${SITE_URL}/diensten/digitalisering-aannemers`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Digitalisering
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Van papier naar digitaal - zonder gedoe
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De meeste aannemers werken nog met losse briefjes, Excel-sheets en WhatsApp-groepen.
          Wij helpen je de stap te maken naar digitale systemen die écht werken op de bouwplaats.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="border border-primary-foreground/15 bg-primary-foreground/[0.06] shadow-lg shadow-black/10 rounded-2xl p-6"
            >
              <span className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</span>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center max-w-2xl mx-auto"
        >
          Wat betekent digitalisering voor jouw bedrijf?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Geen ingewikkelde software, maar praktische tools die aansluiten bij hoe aannemers werken.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="bg-background rounded-2xl p-6 shadow-system-card"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What you get */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Wat je krijgt
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Eén systeem voor je hele bedrijf
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Professionele website",
            "Online offerteformulier",
            "Automatische lead opvolging",
            "Gemiste oproep → SMS",
            "Google Reviews verzamelen",
            "Klant-CRM systeem",
            "E-mail & SMS campagnes",
            "Centrale inbox",
            "Mobiele app",
            "Rapportage dashboard",
            "SEO optimalisatie",
            "Hosting & onderhoud",
          ].map((item, i) => (
            <motion.div
              key={item}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.03 }}
              className="flex items-center gap-3 rounded-xl bg-card border border-border p-4"
            >
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA banner */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          {...fadeInUp}
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
              Benieuwd wat digitalisering voor jouw bedrijf kan betekenen?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien hoe andere aannemers hun bedrijf hebben getransformeerd.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 flex-shrink-0"
          >
            <Link to="/demo">
              Boek een demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center"
        >
          Hoe werkt het?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center leading-relaxed"
        >
          Van eerste gesprek tot volledig digitaal in drie stappen.
        </motion.p>

        <div className="mt-16 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{step.step}</span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Veelgestelde vragen
        </motion.h2>
        <Accordion type="multiple" className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
            >
              <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border bg-background px-6">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container text-center">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Klaar om je bedrijf te digitaliseren?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Boek een gratis demo en ontdek hoe digitalisering jouw aannemersbedrijf naar het volgende niveau tilt.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Boek een demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/diensten">Bekijk alle diensten</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default DigitaliseringAannemers;
