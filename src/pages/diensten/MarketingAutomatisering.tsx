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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "72%", description: "av håndverkere driver ikke aktiv markedsføring - og mister dermed kunder." },
  { value: "3,6x", description: "flere gjenkjøp gjennom automatiserte kundekampanjer." },
  { value: "0 kr", description: "ekstra tidsinvestering per kampanje etter det første oppsettet." },
];

const problems = [
  {
    title: "Ingen tid til markedsføring",
    description: "Du står på byggeplassen hele dagen og har ikke energi om kvelden til å tenke på markedsføring. Innlegg på sosiale medier, e-poster og kampanjer blir liggende.",
  },
  {
    title: "Eksisterende kunder blir glemt",
    description: "Du har en liste med fornøyde kunder, men gjør ingenting med den. Sesongarbeid, vedlikehold og gjenkjøp - det blir liggende fordi ingen tar kontakt med dem.",
  },
  {
    title: "Markedsføring føles som å kaste penger ut av vinduet",
    description: "Du har kanskje prøvd noe en gang - en Facebook-annonse eller en flyer - men uten et system vet du ikke hva som fungerer og hva som ikke gjør det.",
  },
  {
    title: "Du vet ikke hva du skal kommunisere",
    description: "Hva sender du til kundene? Hvor ofte? Via hvilken kanal? Uten en strategi føles hvert forsøk ubehagelig og lite effektivt.",
  },
];

const features = [
  {
    icon: Mail,
    title: "E-post- og SMS-kampanjer",
    description:
      "Send målrettede kampanjer til kundelisten din. Sesongtilbud, vedlikeholdstips eller nye tjenester - alt automatisk og på riktig tidspunkt.",
  },
  {
    icon: Target,
    title: "Skreddersydd segmentering",
    description:
      "Ikke send samme budskap til alle. Segmenter etter kundetype, lokasjon, tidligere arbeid eller interesser. Relevante meldinger konverterer bedre.",
  },
  {
    icon: Repeat,
    title: "Gjentakende kampanjer",
    description:
      "Sett opp én gang, kjører hver sesong. Takrennerens om høsten, utvendig maling om våren - automatiske kampanjer på perfekt tidspunkt.",
  },
  {
    icon: Megaphone,
    title: "Integrasjon med sosiale medier",
    description:
      "Planlegg innlegg på sosiale medier på forhånd og publiser automatisk. Vis frem arbeidet ditt på Facebook og Instagram uten å måtte drive med det daglig.",
  },
  {
    icon: Users,
    title: "Reaktivering av gamle kunder",
    description:
      "Kunder du ikke har snakket med på over 6 måneder får automatisk en melding. 'Hvordan går det med malingen?' gir overraskende ofte en ny oppdrag.",
  },
  {
    icon: BarChart3,
    title: "Målbare resultater",
    description:
      "Se nøyaktig hvor mange som åpner kampanjen din, klikker og tar kontakt. Ingen magefølelse, men harde tall på hva som fungerer.",
  },
];

const campaignExamples = [
  "Sesongtilbud (vår/høst)",
  "Vedlikeholdspåminnelser til eksisterende kunder",
  "Nyttårskampanje med rabatt ved tidlig bestilling",
  "Reaktiveringskampanje for inaktive kunder",
  "Nyhetsbrev med prosjektoppdateringer og tips",
  "Referanse-kampanje: kunde verver kunde",
  "Anmeldelsesforespørsel-kampanje etter levering",
  "Velkomstsekvens for nye leads",
];

const steps = [
  {
    step: "01",
    title: "Bestemme markedsstrategi",
    duration: "30 minutter",
    description:
      "Vi bestemmer hvilke kampanjer som gir mest for din type arbeid. Sesongbasert? Reaktivering? Referanser? Vi velger den best tilpassede tilnærmingen.",
  },
  {
    step: "02",
    title: "Bygge og planlegge kampanjer",
    duration: "1 uke",
    description:
      "Vi skriver meldingene, designer e-postene og setter opp alt. Triggere, timing og segmentering - alt konfigureres.",
  },
  {
    step: "03",
    title: "Automatisk kjøring og optimalisering",
    duration: "løpende",
    description:
      "Kampanjene kjører i bakgrunnen. Vi overvåker resultatene og optimaliserer basert på åpningsrater, klikk og konverteringer.",
  },
];

const faqs = [
  {
    question: "Hvor mye tid koster markedsføringsautomatisering meg?",
    answer:
      "Etter det første oppsettet tar det knapt tid. Kampanjene kjører automatisk. Du trenger bare av og til å se på resultatene og eventuelt godkjenne innhold.",
  },
  {
    question: "Trenger jeg en stor kundeliste?",
    answer:
      "Nei. Selv med en liste på 50 kontakter kan du kjøre effektive kampanjer. Listen vokser automatisk etter hvert som du samler flere leads og kunder via nettsiden.",
  },
  {
    question: "Skriver dere kampanjetekstene?",
    answer:
      "Ja. Vi skriver alle e-poster, SMS-meldinger og innlegg på sosiale medier. I din tone og stil. Du godkjenner alt før det går live.",
  },
  {
    question: "Kan kunder melde seg av?",
    answer:
      "Ja, selvfølgelig. Hver e-post inneholder en avmeldingslenke i henhold til GDPR. Avmeldinger behandles automatisk slik at du alltid er compliant.",
  },
  {
    question: "Hva gir markedsføringsautomatisering konkret?",
    answer:
      "Kundene våre ser i snitt 20-30 % flere gjenkjøp og 15 % flere referanser. De nøyaktige resultatene avhenger av typen arbeid, sesong og kundebase.",
  },
];

const MarketingAutomatisering = () => (
  <PageShell>
    <Helmet>
      <title>Markedsføringsautomatisering for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Automatiske markedsføringskampanjer som kjører mens du står på byggeplassen. E-post, SMS og sosiale medier - uten tidsinvestering."
      />
      <link rel="canonical" href={`${SITE_URL}/tjenester/markedsforingsautomatisering`} />
      <meta property="og:title" content="Markedsføringsautomatisering for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Automatiske kampanjer som gir kunder mens du står på byggeplassen." />
      <meta property="og:url" content={`${SITE_URL}/tjenester/markedsforingsautomatisering`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Markedsføringsautomatisering
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Markedsføring som kjører mens du står på byggeplassen
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De fleste håndverkere vet at markedsføring er viktig, men har ikke tid til det.
          Våre automatiske kampanjer kjører i bakgrunnen og gir kunder - uten at du trenger å gjøre noe.
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
          Hvorfor de fleste håndverkere ikke driver markedsføring
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
          Hva vi automatiserer
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Kampanjer som automatisk sender riktig budskap på riktig tidspunkt.
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
          Eksempler
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Kampanjer vi setter opp for deg
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
              Hvor mange gjenkjøp lar du ligge?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvilke kampanjer som gir mest for bedriften din.
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
          Klar for å sette markedsføringen på autopilot?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Bestill en gratis demo og oppdag hvordan automatiske kampanjer gir deg flere kunder.
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

export default MarketingAutomatisering;
