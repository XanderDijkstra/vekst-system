import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  Users,
  MapPin,
  Bell,
  LayoutGrid,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
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
  { value: "34%", description: "van aannemers zegt dat slechte planning hun grootste frustratie is." },
  { value: "8 uur", description: "per week besteden aannemers gemiddeld aan plannen en coördineren." },
  { value: "50%", description: "minder no-shows en dubbele boekingen met een centraal planningssysteem." },
];

const problems = [
  {
    title: "Planning verspreid over meerdere plekken",
    description: "Excel-sheets, WhatsApp-groepen, papieren agenda's en Google Agenda door elkaar. Niemand weet precies wat de planning is en wijzigingen worden gemist.",
  },
  {
    title: "Dubbele boekingen en vergeten afspraken",
    description: "Zonder centraal systeem gebeurt het regelmatig dat je team op de verkeerde plek staat of dat een klant vergeten wordt. Dat kost vertrouwen en geld.",
  },
  {
    title: "Klanten weten niet wanneer je komt",
    description: "Klanten bellen om te vragen wanneer je langskomt. Je team weet het soms zelf ook niet zeker. Dit leidt tot frustratie aan beide kanten.",
  },
  {
    title: "Wijzigingen communiceren is een chaos",
    description: "Als een project uitloopt of een afspraak verschuift, moet je iedereen handmatig informeren. Berichten worden gemist en mensen staan voor een dichte deur.",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Centrale planning",
    description:
      "Eén overzichtelijke agenda voor je hele team. Iedereen ziet dezelfde planning — op kantoor, op de werf of onderweg.",
  },
  {
    icon: Users,
    title: "Teamplanning & toewijzing",
    description:
      "Wijs projecten toe aan specifieke teamleden. Zie direct wie beschikbaar is en wie waar aan het werk is.",
  },
  {
    icon: MapPin,
    title: "Route optimalisatie",
    description:
      "Plan afspraken slim op basis van locatie. Minder rijden, meer productieve uren op de werf.",
  },
  {
    icon: Bell,
    title: "Automatische herinneringen",
    description:
      "Klanten ontvangen automatisch een herinnering de dag ervoor en een uur voor aankomst. Minder no-shows, meer professionaliteit.",
  },
  {
    icon: LayoutGrid,
    title: "Dag-, week- en maandoverzicht",
    description:
      "Bekijk je planning zoals het jou uitkomt. Zoom in op een enkele dag of bekijk de komende maand in één overzicht.",
  },
  {
    icon: Smartphone,
    title: "Mobiel toegankelijk",
    description:
      "Je team bekijkt en beheert de planning vanaf hun telefoon. Adresgegevens, klantnotities en routebeschrijving — alles bij de hand.",
  },
];

const included = [
  "Centrale teamagenda",
  "Klant-afspraakbevestigingen",
  "Automatische herinneringen (SMS)",
  "Dag/week/maand overzicht",
  "Teamlid toewijzing",
  "Google Agenda sync",
  "Klantnotities per afspraak",
  "Mobiele toegang",
];

const steps = [
  {
    step: "01",
    title: "Huidige planning analyseren",
    duration: "30 minuten",
    description:
      "We bekijken hoe je nu plant en waar de knelpunten zitten. Welke informatie ontbreekt? Waar gaan dingen mis?",
  },
  {
    step: "02",
    title: "Systeem inrichten",
    duration: "3–5 dagen",
    description:
      "We zetten je planning op, importeren bestaande afspraken en configureren automatische herinneringen en notificaties.",
  },
  {
    step: "03",
    title: "Team trainen & starten",
    duration: "45 minuten",
    description:
      "We zorgen dat jij en je team met het systeem kunnen werken. Daarna schakel je over en merk je direct het verschil.",
  },
];

const faqs = [
  {
    question: "Kunnen meerdere teamleden de planning bewerken?",
    answer:
      "Ja. Elk teamlid kan de planning bekijken en — afhankelijk van de rechten die je instelt — ook bewerken. Wijzigingen zijn direct zichtbaar voor iedereen.",
  },
  {
    question: "Synchroniseert dit met Google Agenda?",
    answer:
      "Ja. De planning synchroniseert met Google Agenda en Outlook. Afspraken verschijnen automatisch in je persoonlijke agenda.",
  },
  {
    question: "Ontvangen klanten automatisch een bericht?",
    answer:
      "Ja. Bij het inplannen van een afspraak ontvangt de klant automatisch een bevestiging. De dag ervoor en een uur voor aankomst ontvangen ze een herinnering.",
  },
  {
    question: "Kan ik de planning ook op mijn telefoon zien?",
    answer:
      "Ja. De planning is volledig mobiel-responsief. Je team kan op de werf de planning bekijken, klantgegevens inzien en afspraken beheren.",
  },
  {
    question: "Wat als een project uitloopt?",
    answer:
      "Je verschuift eenvoudig de vervolgafspraken in het systeem. Betrokken klanten worden automatisch geïnformeerd over de wijziging.",
  },
];

const PlanningSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Planning Systeem voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Eén centraal planningssysteem voor je hele team. Automatische herinneringen, teamtoewijzing en mobiel toegankelijk. Nooit meer dubbele boekingen."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/planning-systeem`} />
      <meta property="og:title" content="Planning Systeem voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Centrale planning voor aannemers. Automatische herinneringen en mobiel toegankelijk." />
      <meta property="og:url" content={`${SITE_URL}/diensten/planning-systeem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Planning Systeem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Eén planning voor je hele team — altijd up-to-date
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Planning verspreid over Excel, WhatsApp en papieren agenda's zorgt voor chaos.
          Eén centraal systeem brengt overzicht — voor jou, je team en je klanten.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="border border-primary-foreground/10 rounded-2xl p-6"
            >
              <span className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</span>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Problems */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Herkenbaar?
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          De planningsproblemen die aannemers herkennen
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-system-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
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
          Wat zit er in ons planning systeem?
        </motion.h2>
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

    {/* Included */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Inbegrepen
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Alles wat je nodig hebt voor een goede planning
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {included.map((item, i) => (
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
              Klaar met planningschaos?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien hoe een centraal planningssysteem je uren per week bespaart.
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
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">
          Klaar voor overzichtelijke planning?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Boek een gratis demo en ontdek hoe ons planningssysteem je team efficiënter maakt.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Boek een demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/diensten">Bekijk alle diensten</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default PlanningSysteem;
