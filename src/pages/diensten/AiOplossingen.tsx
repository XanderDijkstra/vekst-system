import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Brain,
  MessageCircle,
  FileSearch,
  Sparkles,
  Target,
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
  { value: "40%", description: "snellere reactietijd op klantberichten dankzij AI-gestuurde antwoorden." },
  { value: "5x", description: "meer leads kwalificeren zonder extra personeel door AI-classificatie." },
  { value: "24/7", description: "beschikbaarheid voor klanten via slimme chatbots en automatische reacties." },
];

const features = [
  {
    icon: MessageCircle,
    title: "AI Chatbot voor je website",
    description:
      "Een slimme chatbot die vragen van bezoekers beantwoordt, offerteaanvragen opvangt en afspraken plant — ook buiten kantooruren. Getraind op jouw diensten en werkgebied.",
  },
  {
    icon: Brain,
    title: "Slimme lead kwalificatie",
    description:
      "AI analyseert binnenkomende leads en beoordeelt automatisch de kans op een opdracht. Zo weet je welke leads je het eerst moet opvolgen.",
  },
  {
    icon: FileSearch,
    title: "Automatische offerte suggesties",
    description:
      "Op basis van eerdere projecten en klantgegevens genereert AI een concept-offerte die je alleen nog hoeft te controleren en te versturen.",
  },
  {
    icon: Sparkles,
    title: "AI-gegenereerde content",
    description:
      "Van social media posts tot projectbeschrijvingen — AI schrijft content die past bij jouw bedrijf en doelgroep. Je hoeft alleen nog te reviewen.",
  },
  {
    icon: Target,
    title: "Predictieve marketing",
    description:
      "AI analyseert welke klanten het meest waarschijnlijk terugkomen en wanneer. Automatische seizoenscampagnes op precies het juiste moment.",
  },
  {
    icon: Bot,
    title: "Slimme antwoordsuggesties",
    description:
      "Bij elk binnenkomend bericht krijg je AI-suggesties voor een passend antwoord. Eén klik en het bericht is verstuurd — professioneel en persoonlijk.",
  },
];

const useCases = [
  "Chatbot beantwoordt veelgestelde vragen",
  "AI classificeert leads op urgentie en waarde",
  "Automatische offerte concepten genereren",
  "Social media content schrijven",
  "E-mail antwoorden suggereren",
  "Review responses schrijven",
  "Projectbeschrijvingen voor je website",
  "Seizoensgebonden campagne timing",
  "Klantsentiment analyse op reviews",
  "Marktanalyse en concurrentie-inzichten",
];

const steps = [
  {
    step: "01",
    title: "AI-scan van je bedrijf",
    duration: "30 minuten",
    description:
      "We analyseren je huidige werkprocessen en identificeren waar AI het meeste impact kan maken. Niet alles hoeft AI te zijn — we focussen op waar het écht helpt.",
  },
  {
    step: "02",
    title: "Implementatie & training",
    duration: "1–2 weken",
    description:
      "We zetten de AI-tools op en trainen ze met jouw bedrijfsinformatie, diensten en veelgestelde vragen. Zo geeft de AI relevante en accurate antwoorden.",
  },
  {
    step: "03",
    title: "Optimalisatie & uitbreiding",
    duration: "doorlopend",
    description:
      "AI wordt slimmer naarmate het meer data krijgt. We monitoren de prestaties en breiden de toepassingen uit op basis van resultaten.",
  },
];

const faqs = [
  {
    question: "Is AI niet te ingewikkeld voor een aannemersbedrijf?",
    answer:
      "Helemaal niet. Wij zorgen dat de AI op de achtergrond werkt. Je merkt het alleen aan betere antwoorden, snellere opvolging en minder handmatig werk. Je hoeft zelf niets technisch te doen.",
  },
  {
    question: "Merken klanten dat ze met een AI praten?",
    answer:
      "De chatbot is transparant — klanten weten dat het een assistent is. Maar de antwoorden zijn zo goed dat de meeste klanten geen probleem hebben met de interactie. Bij complexe vragen wordt er altijd doorgeschakeld.",
  },
  {
    question: "Hoe weet de AI wat mijn bedrijf doet?",
    answer:
      "We trainen de AI met jouw bedrijfsinformatie: diensten, werkgebied, prijsindicaties en veelgestelde vragen. De AI leert continu bij op basis van nieuwe interacties.",
  },
  {
    question: "Kan AI echt offertes schrijven?",
    answer:
      "AI maakt een concept-offerte op basis van eerdere projecten en de specifieke klantvraag. Jij controleert, past aan waar nodig en verstuurt. Het bespaart je de eerste 80% van het werk.",
  },
  {
    question: "Wat kost het om AI toe te voegen?",
    answer:
      "De basis AI-functionaliteiten (chatbot, antwoordsuggesties) zitten inbegrepen in je abonnement. Geavanceerde AI-toepassingen zoals offerte-generatie zijn beschikbaar als uitbreiding.",
  },
];

const AiOplossingen = () => (
  <PageShell>
    <Helmet>
      <title>AI Oplossingen voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Gebruik kunstmatige intelligentie om slimmer te werken als aannemer. Van AI chatbots tot automatische offertes — ontdek wat AI voor jouw bedrijf kan doen."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/ai-oplossingen`} />
      <meta property="og:title" content="AI Oplossingen voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Gebruik AI om slimmer te werken, niet harder. Ontdek onze AI oplossingen." />
      <meta property="og:url" content={`${SITE_URL}/diensten/ai-oplossingen`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          AI Oplossingen
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Slimmer werken met AI — niet harder
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Kunstmatige intelligentie is geen toekomstmuziek meer. Wij passen AI praktisch toe
          in je aannemersbedrijf — van chatbots en lead kwalificatie tot automatische offertes.
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

    {/* Features */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center max-w-2xl mx-auto"
        >
          Hoe gebruiken aannemers AI?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Praktische AI-toepassingen die direct resultaat leveren — geen buzzwords, maar tools die werken.
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

    {/* Use cases */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Toepassingen
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Wat AI allemaal kan voor jouw bedrijf
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((item, i) => (
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
              Benieuwd wat AI voor jouw bedrijf kan betekenen?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien welke AI-toepassingen direct resultaat opleveren.
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
          Van AI-scan tot werkende oplossingen in drie stappen.
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
          Klaar om AI in te zetten voor je bedrijf?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Boek een gratis demo en ontdek hoe AI jouw aannemersbedrijf slimmer en efficiënter maakt.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Boek een demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/diensten">Bekijk alle diensten</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default AiOplossingen;
