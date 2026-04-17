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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "62%", description: "av håndverkere jobber fortsatt med papirprosesser som koster tid hver dag." },
  { value: "4,5 timer", description: "i uken bruker håndverkere i snitt på administrasjon som kan automatiseres." },
  { value: "3x", description: "raskere jobber bedrifter som har digitalisert prosessene sine." },
];

const features = [
  {
    icon: FileText,
    title: "Digitale tilbud og fakturaer",
    description:
      "Lag og send profesjonelle tilbud og fakturaer fra telefonen. Kunder kan godkjenne direkte på nett, og du holder oversikt over alt.",
  },
  {
    icon: Globe,
    title: "Profesjonell tilstedeværelse på nett",
    description:
      "En moderne nettside som jobber for deg 24/7. Potensielle kunder finner deg på nett, ser arbeidet ditt og kan be om tilbud direkte.",
  },
  {
    icon: Smartphone,
    title: "Alt på telefonen",
    description:
      "Styr bedriften fra byggeplassen. Meldinger, leads, planlegging og kundeopplysninger - alt tilgjengelig på mobilen.",
  },
  {
    icon: Cloud,
    title: "Kundeopplysninger i skyen",
    description:
      "Slutt på løse lapper og Excel-ark. Alle kundeopplysninger, prosjekter og kommunikasjon ligger trygt på ett sentralt sted.",
  },
  {
    icon: TrendingUp,
    title: "Innsikt i bedriftens ytelse",
    description:
      "Se i ett dashboard hvor mange leads som kommer inn, hvor mange tilbud du sender og hva konverteringsraten din er. Data i stedet for magefølelse.",
  },
  {
    icon: Users,
    title: "Bedre kundekommunikasjon",
    description:
      "Automatiske bekreftelser, påminnelser og oppdateringer. Kundene dine vet alltid hvor de står, uten at du bruker tid på det.",
  },
];

const steps = [
  {
    step: "01",
    title: "Analyse av dagens prosesser",
    duration: "30 minutter",
    description:
      "Vi kartlegger hvordan du jobber nå: fra første kundekontakt til fakturering. Hvor taper du tid? Hvor går leads tapt? Dette danner grunnlaget for den digitale strategien din.",
  },
  {
    step: "02",
    title: "Skreddersydd implementering",
    duration: "1–2 uker",
    description:
      "Vi setter opp de digitale systemene dine: nettside, CRM, automatisk oppfølging og kommunikasjonsverktøy. Alt blir tilpasset din type arbeid og arbeidsmåte.",
  },
  {
    step: "03",
    title: "Opplæring og lansering",
    duration: "45 minutter",
    description:
      "Vi går gjennom alle systemene sammen, svarer på spørsmål og sørger for at teamet ditt kan bruke dem. Deretter går du live og merker forskjellen umiddelbart.",
  },
];

const faqs = [
  {
    question: "Må jeg være teknisk kyndig for å bruke dette?",
    answer:
      "Absolutt ikke. Systemene våre er bygget for håndverkere, ikke IT-spesialister. Kan du betjene en smarttelefon, kan du jobbe med dette. I tillegg får du full forklaring og støtte.",
  },
  {
    question: "Hvor lang tid tar det før alt er oppe å gå?",
    answer:
      "De fleste bedrifter er fullt operative innen 1 til 2 uker. Nettsiden og grunnsystemene er ofte på plass innen en uke. Mer komplekse integrasjoner kan ta litt lenger tid.",
  },
  {
    question: "Kan jeg fortsette å bruke de eksisterende verktøyene mine?",
    answer:
      "Ja. Vi bygger ikke et lukket system, men kobler til eksisterende verktøy der det er mulig. Bruker du allerede et regnskapsprogram eller planleggingsprogramvare? Da sørger vi for at dataene flyter.",
  },
  {
    question: "Hva koster digitalisering for bedriften min?",
    answer:
      "Vi jobber med en fast månedspris på 2 990 kr per måned. Alt er inkludert: nettside, automatisering, vedlikehold og support. Ingen overraskelser, ingen skjulte kostnader.",
  },
  {
    question: "Hva hvis jeg allerede har en nettside?",
    answer:
      "Da ser vi sammen på om nettsiden din holder mål eller om den trenger en oppgradering. I mange tilfeller bygger vi en ny nettside som er spesifikt innrettet for lead-generering - men vi tvinger ingenting.",
  },
];

const DigitaliseringAannemers = () => (
  <PageShell>
    <Helmet>
      <title>Digitalisering for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Fra papir til digitalt. Vi hjelper håndverkere med overgangen til digitale prosesser som sparer tid, forhindrer feil og gir flere kunder."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/digitalisering-aannemers`} />
      <meta property="og:title" content="Digitalisering for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Fra papir til digitalt. Vi hjelper håndverkere å digitalisere." />
      <meta property="og:url" content={`${SITE_URL}/diensten/digitalisering-aannemers`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
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
          Fra papir til digitalt - uten krøll
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De fleste håndverkere jobber fortsatt med løse lapper, Excel-ark og WhatsApp-grupper.
          Vi hjelper deg med overgangen til digitale systemer som faktisk fungerer på byggeplassen.
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
          Hva betyr digitalisering for bedriften din?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Ingen komplisert programvare, men praktiske verktøy som passer til hvordan håndverkere jobber.
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
          Hva du får
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Ett system for hele bedriften
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Profesjonell nettside",
            "Tilbudsskjema på nett",
            "Automatisk lead-oppfølging",
            "Tapt anrop → SMS",
            "Samle inn Google-anmeldelser",
            "Kunde-CRM-system",
            "E-post- og SMS-kampanjer",
            "Sentral innboks",
            "Mobilapp",
            "Rapportdashboard",
            "SEO-optimalisering",
            "Hosting og vedlikehold",
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
              Nysgjerrig på hva digitalisering kan bety for bedriften din?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvordan andre håndverkere har transformert bedriften sin.
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
          Fra første samtale til fullstendig digitalt i tre trinn.
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
          Klar for å digitalisere bedriften din?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Bestill en gratis demo og oppdag hvordan digitalisering løfter håndverkerbedriften din til neste nivå.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Bestill demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/diensten">Se alle tjenester</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default DigitaliseringAannemers;
