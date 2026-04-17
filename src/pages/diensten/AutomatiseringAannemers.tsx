import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Clock,
  Mail,
  CalendarCheck,
  RefreshCw,
  Bell,
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
  { value: "15+ uur", description: "per maand besparen aannemers gemiddeld met automatisering van repetitieve taken." },
  { value: "94%", description: "minder gemiste leads door automatische opvolging binnen 5 minuten." },
  { value: "2,8x", description: "hogere conversie wanneer leads automatisch en snel worden opgevolgd." },
];

const features = [
  {
    icon: Mail,
    title: "Automatische lead opvolging",
    description:
      "Elke nieuwe lead ontvangt automatisch een persoonlijk bericht via SMS of e-mail. Geen handmatig werk, geen vertraging - ook als je op de steiger staat.",
  },
  {
    icon: Bell,
    title: "Slimme herinneringen & notificaties",
    description:
      "Nooit meer een follow-up vergeten. Het systeem herinnert je aan openstaande offertes, geplande terugbelafspraken en klanten die wachten op een reactie.",
  },
  {
    icon: CalendarCheck,
    title: "Geautomatiseerde afspraken",
    description:
      "Klanten plannen zelf een afspraak in je agenda. Bevestigingen en herinneringen gaan automatisch - geen heen-en-weer ge-WhatsApp meer.",
  },
  {
    icon: RefreshCw,
    title: "Terugkerende taken op autopilot",
    description:
      "Review verzoeken na oplevering, seizoenscampagnes voor bestaande klanten, verjaardagsberichten - alles draait automatisch op de achtergrond.",
  },
  {
    icon: Clock,
    title: "Tijdbesparende workflows",
    description:
      "Definieer één keer hoe je werkt en het systeem volgt het proces elke keer op dezelfde manier. Van eerste contact tot factuur.",
  },
  {
    icon: Zap,
    title: "Directe actie bij triggers",
    description:
      "Nieuwe offerte aanvraag? Automatisch een bevestiging. Gemiste oproep? Direct een SMS. Review ontvangen? Automatisch bedankt. Het systeem reageert sneller dan jij kunt.",
  },
];

const automations = [
  "Nieuwe lead → automatische welkomst-SMS",
  "Gemiste oproep → direct SMS terugbelverzoek",
  "Offerte verstuurd → follow-up na 3 dagen",
  "Project afgerond → review verzoek",
  "Review ontvangen → automatisch bedankbericht",
  "Geen reactie op offerte → herinnering na 7 dagen",
  "Nieuwe klant → welkomstmail met bedrijfsinfo",
  "Seizoensstart → campagne naar bestaande klanten",
];

const steps = [
  {
    step: "01",
    title: "We brengen je processen in kaart",
    duration: "30 minuten",
    description:
      "Samen bekijken we welke taken je dagelijks herhaalt en waar de meeste tijd verloren gaat. Dit vormt de basis voor je automatiseringsstrategie.",
  },
  {
    step: "02",
    title: "We bouwen je workflows",
    duration: "1–2 weken",
    description:
      "Op basis van jouw processen bouwen we de automatiseringen. Elke workflow wordt getest en afgestemd op jouw werkwijze.",
  },
  {
    step: "03",
    title: "Livegang & optimalisatie",
    duration: "doorlopend",
    description:
      "Na livegang monitoren we de resultaten en optimaliseren we waar nodig. Je automatiseringen worden steeds slimmer naarmate er meer data binnenkomt.",
  },
];

const faqs = [
  {
    question: "Verlies ik het persoonlijke contact met mijn klanten?",
    answer:
      "Juist niet. Automatisering neemt de repetitieve taken over zodat jij meer tijd hebt voor persoonlijk contact waar het ertoe doet. Berichten worden in jouw naam en stijl verstuurd.",
  },
  {
    question: "Kan ik zelf aanpassingen maken aan de automatiseringen?",
    answer:
      "Ja, je kunt berichten aanpassen, timing wijzigen en workflows aan- of uitzetten. Wij helpen je met de initiële opzet en je kunt daarna zelf bijsturen.",
  },
  {
    question: "Werkt dit ook voor een klein aannemersbedrijf?",
    answer:
      "Zeker. Juist kleinere bedrijven hebben het meeste baat bij automatisering. Je hebt geen personeel nodig voor administratie - het systeem doet het voor je.",
  },
  {
    question: "Hoeveel tijd bespaar ik realistisch gezien?",
    answer:
      "De meeste aannemers besparen 10 tot 20 uur per maand aan administratieve taken. Denk aan lead opvolging, review verzoeken, afspraakbevestigingen en campagnes.",
  },
  {
    question: "Wat gebeurt er als een automatisering niet goed werkt?",
    answer:
      "We monitoren alle automatiseringen en grijpen in wanneer nodig. Je kunt ons altijd bereiken voor aanpassingen of vragen. Support zit inbegrepen in je abonnement.",
  },
];

const AutomatiseringAannemers = () => (
  <PageShell>
    <Helmet>
      <title>Automatisering voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Automatiseer repetitieve taken zoals lead opvolging, review verzoeken en klantcommunicatie. Bespaar 15+ uur per maand als aannemer."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/automatisering-aannemers`} />
      <meta property="og:title" content="Automatisering voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Automatiseer repetitieve taken en bespaar uren per week als aannemer." />
      <meta property="og:url" content={`${SITE_URL}/diensten/automatisering-aannemers`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Automatisering
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Laat het systeem werken terwijl jij op de werf staat
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Lead opvolging, review verzoeken, afspraakbevestigingen - alles wat je elke dag handmatig doet,
          kan automatisch. Zodat jij je kunt focussen op het werk dat ertoe doet.
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
          Wat automatiseren wij voor aannemers?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Slimme automatiseringen die op de achtergrond draaien en jou uren per week besparen.
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

    {/* Automations list */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Voorbeelden
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Automatiseringen die direct resultaat leveren
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {automations.map((item, i) => (
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
              Wil je zien welke automatiseringen het meeste opleveren?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien welke workflows het meeste tijd besparen voor jouw type bedrijf.
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
          Van analyse tot volledig geautomatiseerd in drie stappen.
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
          Klaar om uren per week te besparen?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Boek een gratis demo en ontdek welke automatiseringen het meeste opleveren voor jouw bedrijf.
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

export default AutomatiseringAannemers;
