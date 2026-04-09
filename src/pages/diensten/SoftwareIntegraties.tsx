import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Plug,
  Link2,
  Database,
  BarChart3,
  Workflow,
  Shield,
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
  { value: "73%", description: "van aannemers gebruikt 3+ losse tools die niet met elkaar communiceren." },
  { value: "6 uur", description: "per week gaat verloren aan handmatig data overzetten tussen systemen." },
  { value: "89%", description: "minder fouten wanneer data automatisch doorstroomt tussen tools." },
];

const features = [
  {
    icon: Link2,
    title: "Alles aan elkaar gekoppeld",
    description:
      "Je website, CRM, boekhouding en planning praten met elkaar. Een nieuwe lead op je website verschijnt automatisch in je CRM en planning.",
  },
  {
    icon: Database,
    title: "Eén bron van waarheid",
    description:
      "Geen dubbele data meer in verschillende systemen. Klantgegevens, projecten en communicatie staan op één centrale plek en worden overal gesynchroniseerd.",
  },
  {
    icon: Workflow,
    title: "Naadloze workflows",
    description:
      "Van offerte-aanvraag tot factuur — elke stap triggert automatisch de volgende actie in het juiste systeem. Geen handmatig overtypen.",
  },
  {
    icon: BarChart3,
    title: "Gecombineerde rapportages",
    description:
      "Zie in één dashboard data uit al je systemen. Hoeveel leads, offertes, projecten en omzet — zonder zelf spreadsheets samen te voegen.",
  },
  {
    icon: Shield,
    title: "Betrouwbaar & veilig",
    description:
      "Alle koppelingen worden beveiligd opgezet en gemonitord. Als er iets misgaat, krijg je een melding en grijpen wij in.",
  },
  {
    icon: Plug,
    title: "Koppeling met bestaande tools",
    description:
      "Je hoeft niet alles te vervangen. Wij koppelen aan wat je al gebruikt — van Exact en Moneybird tot Google Agenda en WhatsApp Business.",
  },
];

const integrations = [
  "Google Mijn Bedrijf",
  "Google Agenda",
  "WhatsApp Business",
  "Exact Online",
  "Moneybird",
  "Mailchimp",
  "Facebook & Instagram",
  "Zapier",
  "Google Analytics",
  "Microsoft Outlook",
  "Stripe / Mollie",
  "Custom API koppelingen",
];

const steps = [
  {
    step: "01",
    title: "Inventarisatie van je toolstack",
    duration: "30 minuten",
    description:
      "We brengen in kaart welke tools je gebruikt en hoe data nu tussen systemen beweegt (of juist niet). Waar zijn de knelpunten?",
  },
  {
    step: "02",
    title: "Koppelingen bouwen & testen",
    duration: "1–2 weken",
    description:
      "We bouwen de integraties, testen elke dataflow en zorgen dat alles betrouwbaar samenwerkt. Inclusief foutafhandeling en monitoring.",
  },
  {
    step: "03",
    title: "Livegang & monitoring",
    duration: "doorlopend",
    description:
      "Na livegang monitoren we alle koppelingen. Als een API wijzigt of een integratie hapert, grijpen we direct in.",
  },
];

const faqs = [
  {
    question: "Welke software kunnen jullie koppelen?",
    answer:
      "We koppelen aan vrijwel elke moderne software die een API aanbiedt. Denk aan boekhoudsoftware (Exact, Moneybird), planningstools, e-mailplatformen, social media en betalingsproviders. Vraag gerust naar jouw specifieke tools.",
  },
  {
    question: "Moet ik mijn huidige software vervangen?",
    answer:
      "Nee. Het idee is juist dat je bestaande tools beter gaan samenwerken. Alleen als een tool echt verouderd is of geen koppeling mogelijk maakt, adviseren we een alternatief.",
  },
  {
    question: "Hoe lang duurt het om alles te koppelen?",
    answer:
      "Standaard koppelingen (zoals Google, WhatsApp, boekhoudsoftware) zijn vaak binnen een paar dagen klaar. Complexere of custom integraties kunnen 1 tot 2 weken duren.",
  },
  {
    question: "Wat als een koppeling stopt met werken?",
    answer:
      "Alle integraties worden gemonitord. Als er iets misgaat — bijvoorbeeld door een API-update — krijgen we automatisch een melding en lossen we het op. Support zit inbegrepen.",
  },
  {
    question: "Kost dit extra bovenop het standaard abonnement?",
    answer:
      "De standaard koppelingen zitten inbegrepen in je abonnement. Voor complexe custom integraties maken we een maatwerkofferte, zodat je precies weet waar je aan toe bent.",
  },
];

const SoftwareIntegraties = () => (
  <PageShell>
    <Helmet>
      <title>Software Integraties voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Koppel je bestaande software tools aan elkaar zodat data automatisch doorstroomt. Geen dubbel werk, geen fouten, één centraal systeem."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/software-integraties`} />
      <meta property="og:title" content="Software Integraties voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Koppel je bestaande tools en laat ze naadloos samenwerken." />
      <meta property="og:url" content={`${SITE_URL}/diensten/software-integraties`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Integraties
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Laat je tools met elkaar praten
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De meeste aannemers gebruiken meerdere tools die niet met elkaar communiceren.
          Wij koppelen alles aan elkaar zodat data automatisch doorstroomt en je niet meer dubbel werk doet.
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
          Waarom software integraties essentieel zijn
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Stop met handmatig kopiëren en plakken. Laat je systemen het werk doen.
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

    {/* Integrations grid */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Koppelingen
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Tools die wij koppelen
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
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
              Gebruik je tools die niet samenwerken?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Laat ons kijken welke koppelingen mogelijk zijn en hoeveel tijd je kunt besparen.
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
          Van inventarisatie tot naadloos gekoppelde systemen in drie stappen.
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
          Klaar om je tools te laten samenwerken?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Boek een gratis demo en ontdek welke integraties het meeste opleveren voor jouw bedrijf.
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

export default SoftwareIntegraties;
