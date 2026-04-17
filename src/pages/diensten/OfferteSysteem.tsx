import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Clock,
  TrendingUp,
  Send,
  Eye,
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
  { value: "45 min", description: "gemiddelde tijd die aannemers besteden aan het handmatig maken van één offerte." },
  { value: "38%", description: "van offertes wordt nooit opgevolgd - en daarmee verloren." },
  { value: "2,4x", description: "hogere sluitingsratio met automatische follow-up op offertes." },
];

const problems = [
  {
    title: "Offertes maken kost te veel tijd",
    description: "Je zit 's avonds nog offertes te typen terwijl je overdag op de werf staat. Elke offerte is maatwerk en het kost al snel 30 tot 60 minuten per stuk.",
  },
  {
    title: "Follow-up wordt vergeten",
    description: "Je stuurt een offerte en hoort niks meer. Terugbellen vergeet je omdat je het druk hebt. Ondertussen kiest de klant voor een concurrent die wél opvolgde.",
  },
  {
    title: "Geen overzicht over openstaande offertes",
    description: "Offertes staan verspreid over e-mail, WhatsApp en papieren mappen. Je weet niet precies welke offertes openstaan en welke je moet opvolgen.",
  },
  {
    title: "Geen inzicht in je conversieratio",
    description: "Hoeveel van je offertes worden daadwerkelijk opdrachten? Zonder data kun je niet verbeteren en weet je niet waar je geld laat liggen.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Offerte templates op maat",
    description:
      "Maak professionele offertes in minuten met vooraf ingestelde templates voor jouw type werk. Vul alleen de projectspecifieke details in.",
  },
  {
    icon: Send,
    title: "Verstuur met één klik",
    description:
      "Offertes worden automatisch voorzien van je bedrijfsbranding en verstuurd via e-mail. De klant kan direct online akkoord geven.",
  },
  {
    icon: Eye,
    title: "Tracking & notificaties",
    description:
      "Zie wanneer een klant je offerte opent en hoe lang ze kijken. Je weet precies wanneer het juiste moment is om op te volgen.",
  },
  {
    icon: Clock,
    title: "Automatische follow-up",
    description:
      "Na 3 dagen geen reactie? Het systeem stuurt automatisch een vriendelijke herinnering. Na 7 dagen volgt een tweede. Geen offerte wordt meer vergeten.",
  },
  {
    icon: TrendingUp,
    title: "Inzicht in je pipeline",
    description:
      "Zie in één dashboard hoeveel offertes openstaan, welke zijn geaccepteerd en wat je verwachte omzet is. Data-gedreven beslissingen.",
  },
  {
    icon: CheckCircle2,
    title: "Online akkoord & handtekening",
    description:
      "Klanten accepteren je offerte met één klik en zetten een digitale handtekening. Geen geprint papier, geen gedoe - direct starten.",
  },
];

const steps = [
  {
    step: "01",
    title: "We maken je offerte templates",
    duration: "3–5 dagen",
    description:
      "Op basis van je huidige offertes en werkwijze maken we professionele templates. Met je logo, kleuren en standaard voorwaarden.",
  },
  {
    step: "02",
    title: "Automatiseringen instellen",
    duration: "2–3 dagen",
    description:
      "We configureren de follow-up regels, notificaties en tracking. Alles wordt afgestemd op jouw voorkeur en tempo.",
  },
  {
    step: "03",
    title: "Training & livegang",
    duration: "30 minuten",
    description:
      "We lopen samen door het systeem, oefenen met een test-offerte en beantwoorden al je vragen. Daarna ga je live.",
  },
];

const faqs = [
  {
    question: "Kan ik mijn eigen offerte-layout gebruiken?",
    answer:
      "Ja. We bouwen de templates op basis van jouw huidige stijl en branding. Je offerte ziet eruit alsof je het zelf hebt ontworpen - maar dan in een fractie van de tijd.",
  },
  {
    question: "Hoe werkt het online akkoord?",
    answer:
      "De klant ontvangt een link naar de offerte. Ze kunnen de details bekijken en met één klik akkoord geven. Optioneel kan er een digitale handtekening worden gevraagd.",
  },
  {
    question: "Worden mijn offertes veilig opgeslagen?",
    answer:
      "Ja. Alle offertes worden beveiligd opgeslagen in de cloud. Je kunt ze altijd terugvinden, exporteren of als PDF downloaden.",
  },
  {
    question: "Kan ik zien of een klant mijn offerte heeft geopend?",
    answer:
      "Ja. Je krijgt een melding wanneer de offerte wordt geopend. Je ziet ook hoe vaak en hoe lang de klant de offerte heeft bekeken.",
  },
  {
    question: "Werkt dit samen met mijn boekhoudsoftware?",
    answer:
      "Ja. Geaccepteerde offertes kunnen automatisch worden omgezet naar facturen in je boekhoudsoftware. We koppelen met Exact Online, Moneybird en andere populaire pakketten.",
  },
];

const OfferteSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Offerte Systeem voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Maak professionele offertes in minuten, verstuur met één klik en volg automatisch op. Verhoog je sluitingsratio als aannemer."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/offerte-systeem`} />
      <meta property="og:title" content="Offerte Systeem voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Maak offertes in minuten en volg automatisch op. Meer opdrachten, minder gedoe." />
      <meta property="og:url" content={`${SITE_URL}/diensten/offerte-systeem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Offerte Systeem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Offertes maken in minuten, niet uren
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Het handmatig maken van offertes kost uren en follow-ups worden vaak vergeten.
          Ons systeem automatiseert het hele proces - van aanvraag tot akkoord.
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

    {/* Problems */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Herkenbaar?
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          De problemen die aannemers herkennen bij offertes
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
          Hoe ons offerte systeem werkt
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Van aanvraag tot getekende offerte - alles in één systeem.
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

    {/* CTA banner */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          {...fadeInUp}
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
              Hoeveel offertes laat jij nu liggen?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Plan een kort gesprek en we laten je zien hoe je met automatische follow-up meer offertes omzet naar opdrachten.
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
          Klaar om meer offertes om te zetten naar opdrachten?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Boek een gratis demo en ontdek hoe ons offerte systeem jouw sluitingsratio verhoogt.
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

export default OfferteSysteem;
