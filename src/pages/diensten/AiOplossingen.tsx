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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "40%", description: "raskere responstid på kundemeldinger takket være AI-drevne svar." },
  { value: "5x", description: "flere leads kvalifisert uten ekstra bemanning gjennom AI-klassifisering." },
  { value: "24/7", description: "tilgjengelighet for kunder via smarte chatbots og automatiske svar." },
];

const features = [
  {
    icon: MessageCircle,
    title: "AI-chatbot for nettsiden din",
    description:
      "En smart chatbot som svarer på spørsmål fra besøkende, tar imot tilbudsforespørsler og avtaler møter - også utenfor kontortiden. Trent på dine tjenester og ditt arbeidsområde.",
  },
  {
    icon: Brain,
    title: "Smart lead-kvalifisering",
    description:
      "AI analyserer innkommende leads og vurderer automatisk sannsynligheten for en oppdrag. Slik vet du hvilke leads du bør følge opp først.",
  },
  {
    icon: FileSearch,
    title: "Automatiske tilbudsforslag",
    description:
      "Basert på tidligere prosjekter og kundedata genererer AI et tilbudsutkast du bare trenger å kontrollere og sende.",
  },
  {
    icon: Sparkles,
    title: "AI-generert innhold",
    description:
      "Fra innlegg på sosiale medier til prosjektbeskrivelser - AI skriver innhold som passer til bedriften og målgruppen din. Du trenger bare å se over det.",
  },
  {
    icon: Target,
    title: "Prediktiv markedsføring",
    description:
      "AI analyserer hvilke kunder som mest sannsynlig kommer tilbake og når. Automatiske sesongkampanjer på akkurat riktig tidspunkt.",
  },
  {
    icon: Bot,
    title: "Smarte svarforslag",
    description:
      "For hver innkommende melding får du AI-forslag til et passende svar. Ett klikk og meldingen er sendt - profesjonelt og personlig.",
  },
];

const useCases = [
  "Chatbot svarer på ofte stilte spørsmål",
  "AI klassifiserer leads etter hastegrad og verdi",
  "Generere automatiske tilbudsutkast",
  "Skrive innhold til sosiale medier",
  "Foreslå e-postsvar",
  "Skrive svar på anmeldelser",
  "Prosjektbeskrivelser til nettsiden din",
  "Sesongbasert kampanjetiming",
  "Kundesentiment-analyse på anmeldelser",
  "Markedsanalyse og konkurrentinnsikt",
];

const steps = [
  {
    step: "01",
    title: "AI-skanning av bedriften din",
    duration: "30 minutter",
    description:
      "Vi analyserer dagens arbeidsprosesser og identifiserer hvor AI kan gi størst effekt. Ikke alt må være AI - vi fokuserer på der det virkelig hjelper.",
  },
  {
    step: "02",
    title: "Implementering og trening",
    duration: "1–2 uker",
    description:
      "Vi setter opp AI-verktøyene og trener dem med bedriftsinformasjonen din, tjenestene og ofte stilte spørsmål. Slik gir AI-en relevante og nøyaktige svar.",
  },
  {
    step: "03",
    title: "Optimalisering og utvidelse",
    duration: "løpende",
    description:
      "AI blir smartere etter hvert som den får mer data. Vi overvåker ytelsen og utvider bruksområdene basert på resultatene.",
  },
];

const faqs = [
  {
    question: "Er ikke AI for komplisert for en håndverkerbedrift?",
    answer:
      "Absolutt ikke. Vi sørger for at AI-en fungerer i bakgrunnen. Du merker det bare gjennom bedre svar, raskere oppfølging og mindre manuelt arbeid. Du trenger ikke gjøre noe teknisk selv.",
  },
  {
    question: "Merker kundene at de snakker med en AI?",
    answer:
      "Chatboten er transparent - kundene vet at det er en assistent. Men svarene er så gode at de fleste kundene ikke har noe problem med interaksjonen. Ved komplekse spørsmål blir de alltid satt videre.",
  },
  {
    question: "Hvordan vet AI-en hva bedriften min gjør?",
    answer:
      "Vi trener AI-en med bedriftsinformasjonen din: tjenester, arbeidsområde, prisindikasjoner og ofte stilte spørsmål. AI-en lærer kontinuerlig basert på nye interaksjoner.",
  },
  {
    question: "Kan AI virkelig skrive tilbud?",
    answer:
      "AI lager et tilbudsutkast basert på tidligere prosjekter og kundens spesifikke forespørsel. Du kontrollerer, justerer der det trengs, og sender. Det sparer deg for de første 80 % av jobben.",
  },
  {
    question: "Hva koster det å legge til AI?",
    answer:
      "De grunnleggende AI-funksjonene (chatbot, svarforslag) er inkludert i abonnementet ditt. Avanserte AI-bruksområder som tilbudsgenerering er tilgjengelige som utvidelser.",
  },
];

const AiOplossingen = () => (
  <PageShell>
    <Helmet>
      <title>AI-løsninger for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Bruk kunstig intelligens til å jobbe smartere som håndverker. Fra AI-chatbots til automatiske tilbud - oppdag hva AI kan gjøre for bedriften din."
      />
      <link rel="canonical" href={`${SITE_URL}/tjenester/ai-losninger`} />
      <meta property="og:title" content="AI-løsninger for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Bruk AI til å jobbe smartere, ikke hardere. Oppdag våre AI-løsninger." />
      <meta property="og:url" content={`${SITE_URL}/tjenester/ai-losninger`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          AI-løsninger
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Jobb smartere med AI - ikke hardere
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Kunstig intelligens er ikke lenger framtidsmusikk. Vi bruker AI praktisk
          i håndverkerbedriften din - fra chatbots og lead-kvalifisering til automatiske tilbud.
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
          Hvordan bruker håndverkere AI?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Praktiske AI-bruksområder som gir umiddelbare resultater - ingen buzzwords, bare verktøy som fungerer.
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
          Bruksområder
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Alt AI kan gjøre for bedriften din
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
              Nysgjerrig på hva AI kan bety for bedriften din?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvilke AI-bruksområder som gir umiddelbare resultater.
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
          Hvordan fungerer det?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center leading-relaxed"
        >
          Fra AI-skanning til fungerende løsninger i tre trinn.
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
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Klar for å bruke AI i bedriften din?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Bestill en gratis demo og oppdag hvordan AI gjør håndverkerbedriften din smartere og mer effektiv.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Bestill demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/tjenester">Se alle tjenester</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default AiOplossingen;
