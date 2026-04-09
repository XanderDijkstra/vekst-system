import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Mail,
  Target,
  Megaphone,
  Repeat,
  Users,
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
  { value: "72%", description: "van aannemers doet geen actieve marketing — en mist daardoor klanten." },
  { value: "3,6x", description: "meer herhaalopdrachten door geautomatiseerde klantcampagnes." },
  { value: "€0", description: "extra tijdsinvestering per campagne na de initiële opzet." },
];

const problems = [
  {
    title: "Geen tijd voor marketing",
    description: "Je staat de hele dag op de werf en hebt 's avonds geen energie meer om aan marketing te denken. Social media posts, e-mails en campagnes blijven liggen.",
  },
  {
    title: "Bestaande klanten worden vergeten",
    description: "Je hebt een lijst met tevreden klanten, maar je doet er niets mee. Seizoensgebonden werk, onderhoud en herhaalopdrachten — het blijft liggen omdat niemand ze benadert.",
  },
  {
    title: "Marketing voelt als geld weggooien",
    description: "Je hebt misschien ooit iets geprobeerd — een Facebook-advertentie of een flyer — maar zonder systeem weet je niet wat werkt en wat niet.",
  },
  {
    title: "Je weet niet wat je moet communiceren",
    description: "Wat stuur je naar klanten? Hoe vaak? Via welk kanaal? Zonder strategie voelt elke poging ongemakkelijk en ineffectief.",
  },
];

const features = [
  {
    icon: Mail,
    title: "E-mail & SMS campagnes",
    description:
      "Stuur gerichte campagnes naar je klantenlijst. Seizoensaanbiedingen, onderhoudstips of nieuwe diensten — alles automatisch en op het juiste moment.",
  },
  {
    icon: Target,
    title: "Segmentatie op maat",
    description:
      "Stuur niet dezelfde boodschap naar iedereen. Segmenteer op type klant, locatie, eerder werk of interesse. Relevante berichten converteren beter.",
  },
  {
    icon: Repeat,
    title: "Terugkerende campagnes",
    description:
      "Stel één keer in, draait elk seizoen. Dakgoot reiniging in het najaar, buitenschilderwerk in het voorjaar — automatische campagnes op het perfecte moment.",
  },
  {
    icon: Megaphone,
    title: "Social media integratie",
    description:
      "Plan social media berichten vooruit en publiceer automatisch. Laat je werk zien op Facebook en Instagram zonder er dagelijks mee bezig te zijn.",
  },
  {
    icon: Users,
    title: "Reactivatie van oude klanten",
    description:
      "Klanten die je langer dan 6 maanden niet hebt gesproken krijgen automatisch een bericht. 'Hoe gaat het met het schilderwerk?' levert verrassend vaak een nieuwe opdracht op.",
  },
  {
    icon: BarChart3,
    title: "Meetbare resultaten",
    description:
      "Zie precies hoeveel mensen je campagne openen, klikken en contact opnemen. Geen onderbuikgevoel, maar harde cijfers over wat werkt.",
  },
];

const campaignExamples = [
  "Seizoensgebonden aanbiedingen (voorjaar/najaar)",
  "Onderhouds-herinneringen voor bestaande klanten",
  "Nieuwjaarsactie met korting op vroegboeken",
  "Reactivatie-campagne voor inactieve klanten",
  "Nieuwsbrief met projectupdates en tips",
  "Referral-campagne: klant-werft-klant",
  "Review-verzoek campagne na oplevering",
  "Welkomstsequentie voor nieuwe leads",
];

const steps = [
  {
    step: "01",
    title: "Marketing strategie bepalen",
    duration: "30 minuten",
    description:
      "We bepalen welke campagnes het meeste opleveren voor jouw type werk. Seizoensgebonden? Reactivatie? Referrals? We kiezen de best passende aanpak.",
  },
  {
    step: "02",
    title: "Campagnes bouwen & inplannen",
    duration: "1 week",
    description:
      "We schrijven de berichten, ontwerpen de e-mails en stellen alles in. Triggers, timing en segmentatie — alles wordt geconfigureerd.",
  },
  {
    step: "03",
    title: "Automatisch draaien & optimaliseren",
    duration: "doorlopend",
    description:
      "De campagnes draaien op de achtergrond. We monitoren de resultaten en optimaliseren op basis van open rates, clicks en conversies.",
  },
];

const faqs = [
  {
    question: "Hoeveel tijd kost marketing automatisering mij?",
    answer:
      "Na de initiële opzet kost het je vrijwel geen tijd. De campagnes draaien automatisch. Je hoeft alleen af en toe de resultaten te bekijken en eventueel content goed te keuren.",
  },
  {
    question: "Heb ik een grote klantenlijst nodig?",
    answer:
      "Nee. Zelfs met een lijst van 50 contacten kun je effectieve campagnes draaien. De lijst groeit automatisch naarmate je meer leads en klanten verzamelt via je website.",
  },
  {
    question: "Schrijven jullie de campagne-teksten?",
    answer:
      "Ja. Wij schrijven alle e-mails, SMS-berichten en social media posts. In jouw toon en stijl. Je keurt alles goed voordat het live gaat.",
  },
  {
    question: "Kunnen klanten zich afmelden?",
    answer:
      "Ja, uiteraard. Elke e-mail bevat een afmeldlink conform de AVG. Afmeldingen worden automatisch verwerkt zodat je altijd compliant bent.",
  },
  {
    question: "Wat levert marketing automatisering concreet op?",
    answer:
      "Onze klanten zien gemiddeld 20-30% meer herhaalopdrachten en 15% meer referrals. De exacte resultaten hangen af van je type werk, seizoen en klantenbestand.",
  },
];

const MarketingAutomatisering = () => (
  <PageShell>
    <Helmet>
      <title>Marketing Automatisering voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Automatische marketingcampagnes die draaien terwijl jij op de werf staat. E-mail, SMS en social media — zonder tijdsinvestering."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/marketing-automatisering`} />
      <meta property="og:title" content="Marketing Automatisering voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Automatische campagnes die klanten opleveren terwijl jij op de werf staat." />
      <meta property="og:url" content={`${SITE_URL}/diensten/marketing-automatisering`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Marketing Automatisering
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Marketing die draait terwijl jij op de werf staat
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De meeste aannemers weten dat marketing belangrijk is, maar hebben er geen tijd voor.
          Onze automatische campagnes draaien op de achtergrond en leveren klanten op — zonder dat jij er iets voor hoeft te doen.
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
          Waarom de meeste aannemers geen marketing doen
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
          Wat wij automatiseren
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Campagnes die automatisch de juiste boodschap op het juiste moment versturen.
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

    {/* Campaign examples */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Voorbeelden
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Campagnes die wij voor je opzetten
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {campaignExamples.map((item, i) => (
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
              Hoeveel herhaalopdrachten laat jij liggen?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien welke campagnes het meeste opleveren voor jouw bedrijf.
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
          Klaar om marketing op autopilot te zetten?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Boek een gratis demo en ontdek hoe automatische campagnes jou meer klanten opleveren.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Boek een demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/diensten">Bekijk alle diensten</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default MarketingAutomatisering;
