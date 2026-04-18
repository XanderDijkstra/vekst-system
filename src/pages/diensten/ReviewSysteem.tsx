import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  MessageSquare,
  TrendingUp,
  Shield,
  ThumbsUp,
  Send,
  AlertTriangle,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "92%", description: "av forbrukerne leser anmeldelser på nett før de velger en håndverker." },
  { value: "4,7★", description: "gjennomsnittlig score hos kundene våre etter implementering av anmeldelsessystemet." },
  { value: "8x", description: "flere anmeldelser per måned gjennom automatiske forespørsler etter levering." },
];

const problems = [
  {
    title: "Fornøyde kunder legger ikke igjen anmeldelser",
    description: "Du leverer utmerket arbeid, men kundene glemmer å legge igjen en anmeldelse. Imens har konkurrentene dine titalls 5-stjerners anmeldelser som overbeviser nye kunder.",
  },
  {
    title: "Negative anmeldelser har for stor effekt",
    description: "Én misfornøyd kunde kan skade omdømmet ditt hvis du ikke har positive anmeldelser å veie opp med. Uten en aktiv anmeldelsesstrategi er du sårbar.",
  },
  {
    title: "Du tør ikke be om anmeldelser",
    description: "Det føles ubehagelig å be kunder om å legge igjen en anmeldelse. Du vil ikke virke påtrengende, men uten anmeldelser går du glipp av et kraftig markedsføringsverktøy.",
  },
  {
    title: "Anmeldelsene ligger ikke på de riktige stedene",
    description: "Kanskje har du noen anmeldelser, men de ligger spredt eller på plattformer ingen ser på. Google og nettsiden din er stedene som betyr noe.",
  },
];

const features = [
  {
    icon: Send,
    title: "Automatiske anmeldelsesforespørsler",
    description:
      "Etter hvert avsluttet prosjekt sender systemet automatisk en anmeldelsesforespørsel via SMS eller e-post. Kunden trenger bare å klikke og gi en score.",
  },
  {
    icon: Star,
    title: "Smart anmeldelsesfilter",
    description:
      "Fornøyde kunder (4-5 stjerner) blir sendt direkte til Google. Ved lavere score får du først et varsel slik at du kan løse det før det legges ut offentlig.",
  },
  {
    icon: MessageSquare,
    title: "Automatiske svar på anmeldelser",
    description:
      "Hver anmeldelse får automatisk et personlig og profesjonelt svar. Dette viser at du er engasjert og øker synligheten din i Google.",
  },
  {
    icon: ThumbsUp,
    title: "Anmeldelser på nettsiden din",
    description:
      "De beste anmeldelsene dine vises automatisk på nettsiden. Besøkende ser umiddelbart sosialt bevis - uten at du trenger å gjøre noe.",
  },
  {
    icon: Shield,
    title: "Omdømmeovervåking",
    description:
      "Få et varsel med en gang ved nye anmeldelser. Se i ett dashboard gjennomsnittsscoren din, antall anmeldelser og trender over tid.",
  },
  {
    icon: TrendingUp,
    title: "Flere anmeldelser = flere kunder",
    description:
      "Bedrifter med flere og bedre anmeldelser rangerer høyere i Google og blir oftere valgt. Hver anmeldelse er en investering i framtidig vekst.",
  },
];

const steps = [
  {
    step: "01",
    title: "Sette opp anmeldelsessystemet",
    duration: "2–3 dager",
    description:
      "Vi konfigurerer anmeldelsessystemet med bedriftsopplysningene dine, profil og preferanser. SMS- og e-postmaler lages skreddersydd.",
  },
  {
    step: "02",
    title: "Samle inn de første anmeldelsene",
    duration: "1–2 uker",
    description:
      "Vi sender de første anmeldelsesforespørslene til dine nylige kunder. De fleste håndverkere har allerede 5-10 nye Google-anmeldelser innen to uker.",
  },
  {
    step: "03",
    title: "Automatisk drift",
    duration: "løpende",
    description:
      "Fra nå av sender systemet automatisk anmeldelsesforespørsler etter hvert prosjekt. Du trenger ikke tenke på det - anmeldelsene strømmer inn av seg selv.",
  },
];

const faqs = [
  {
    question: "Hvordan vet kundene at de må legge igjen en anmeldelse?",
    answer:
      "Etter levering mottar de automatisk en SMS eller e-post med en direkte lenke til Google-bedriftsprofilen din. Det tar dem bokstavelig talt 30 sekunder.",
  },
  {
    question: "Hva hvis en kunde vil legge igjen en dårlig anmeldelse?",
    answer:
      "Systemet filtrerer på tilfredshet. Ved en score lavere enn 4 stjerner får du først et varsel slik at du kan ta kontakt. Kunden blir ikke sendt direkte til Google.",
  },
  {
    question: "Kan jeg justere meldingene?",
    answer:
      "Ja. Du kan sette teksten i anmeldelsesforespørselen, tidspunktet og antallet påminnelser helt etter eget ønske. Vi hjelper med det første oppsettet.",
  },
  {
    question: "Hvor mange anmeldelser kan jeg forvente?",
    answer:
      "I snitt legger 25-35 % av kundene igjen en anmeldelse etter en automatisk forespørsel. Ved 10 prosjekter i måneden betyr det 2-4 nye anmeldelser i måneden.",
  },
  {
    question: "Vises anmeldelsene automatisk på nettsiden min?",
    answer:
      "Ja. Google-anmeldelsene dine synkroniseres automatisk med nettsiden. Nye anmeldelser vises automatisk - uten manuelt arbeid.",
  },
];

const ReviewSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Anmeldelsessystem for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Samle inn Google-anmeldelser automatisk fra fornøyde kunder. Øk omdømmet ditt på nett og vinn flere oppdrag som håndverker."
      />
      <link rel="canonical" href={`${SITE_URL}/tjenester/anmeldelsessystem`} />
      <meta property="og:title" content="Anmeldelsessystem for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Samle inn 5-stjerners anmeldelser automatisk og bygg et sterkt omdømme på nett." />
      <meta property="og:url" content={`${SITE_URL}/tjenester/anmeldelsessystem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Anmeldelsessystem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          La arbeidet ditt tale for seg - med 5-stjerners anmeldelser
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Fornøyde kunder legger sjelden igjen en anmeldelse. Systemet vårt sender automatisk en forespørsel
          etter hvert prosjekt - slik at omdømmet ditt vokser mens du jobber videre.
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
          Kjenner du deg igjen?
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Hvorfor de fleste håndverkere har for få anmeldelser
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
          Hvordan anmeldelsessystemet vårt fungerer
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

    {/* CTA banner */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          {...fadeInUp}
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
              Hvor mange 5-stjerners anmeldelser går du glipp av hver måned?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              La oss regne ut hvor mange anmeldelser du kan samle inn basert på antallet prosjekter du har nå.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 flex-shrink-0"
          >
            <Link to="/demo">
              Bestill demo <ArrowRight className="ml-2 h-4 w-4" />
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
          Tre trinn til flere anmeldelser
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
          Ofte stilte spørsmål
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
          Klar for å styrke omdømmet ditt på nett?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Bestill en gratis demo og oppdag hvordan du automatisk samler inn flere 5-stjerners anmeldelser.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Bestill demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/tjenester">Se alle tjenester</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default ReviewSysteem;
