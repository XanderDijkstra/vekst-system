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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "73%", description: "av håndverkere bruker 3+ separate verktøy som ikke kommuniserer med hverandre." },
  { value: "6 timer", description: "i uken går tapt til manuell overføring av data mellom systemer." },
  { value: "89%", description: "færre feil når data flyter automatisk mellom verktøy." },
];

const features = [
  {
    icon: Link2,
    title: "Alt koblet sammen",
    description:
      "Nettsiden din, CRM, regnskap og planlegging snakker med hverandre. En ny lead på nettsiden dukker automatisk opp i CRM-systemet og planleggingen din.",
  },
  {
    icon: Database,
    title: "Én sannhetskilde",
    description:
      "Ingen duplikatdata i forskjellige systemer lenger. Kundeopplysninger, prosjekter og kommunikasjon ligger på ett sentralt sted og synkroniseres overalt.",
  },
  {
    icon: Workflow,
    title: "Sømløse arbeidsflyter",
    description:
      "Fra tilbudsforespørsel til faktura - hvert steg utløser automatisk neste handling i riktig system. Ingen manuell overføring.",
  },
  {
    icon: BarChart3,
    title: "Kombinerte rapporter",
    description:
      "Se i ett dashboard data fra alle systemene dine. Hvor mange leads, tilbud, prosjekter og omsetning - uten å slå sammen regneark selv.",
  },
  {
    icon: Shield,
    title: "Pålitelig og sikkert",
    description:
      "Alle koblinger settes opp og overvåkes sikkert. Hvis noe går galt, får du et varsel og vi griper inn.",
  },
  {
    icon: Plug,
    title: "Kobling til eksisterende verktøy",
    description:
      "Du trenger ikke erstatte alt. Vi kobler til det du allerede bruker - fra Tripletex og Fiken til Google Kalender og WhatsApp Business.",
  },
];

const integrations = [
  "Google Min Bedrift",
  "Google Kalender",
  "WhatsApp Business",
  "Tripletex",
  "Fiken",
  "Mailchimp",
  "Facebook og Instagram",
  "Zapier",
  "Google Analytics",
  "Microsoft Outlook",
  "Stripe / Vipps",
  "Egendefinerte API-koblinger",
];

const steps = [
  {
    step: "01",
    title: "Kartlegging av verktøyene dine",
    duration: "30 minutter",
    description:
      "Vi kartlegger hvilke verktøy du bruker og hvordan data beveger seg mellom systemer nå (eller ikke). Hvor er flaskehalsene?",
  },
  {
    step: "02",
    title: "Bygge og teste koblinger",
    duration: "1–2 uker",
    description:
      "Vi bygger integrasjonene, tester hver dataflyt og sørger for at alt fungerer pålitelig sammen. Inkludert feilhåndtering og overvåking.",
  },
  {
    step: "03",
    title: "Lansering og overvåking",
    duration: "løpende",
    description:
      "Etter lansering overvåker vi alle koblingene. Hvis en API endres eller en integrasjon svikter, griper vi umiddelbart inn.",
  },
];

const faqs = [
  {
    question: "Hvilken programvare kan dere koble sammen?",
    answer:
      "Vi kobler til stort sett all moderne programvare som tilbyr et API. Tenk på regnskapsprogramvare (Tripletex, Fiken), planleggingsverktøy, e-postplattformer, sosiale medier og betalingsleverandører. Spør gjerne om dine spesifikke verktøy.",
  },
  {
    question: "Må jeg erstatte dagens programvare?",
    answer:
      "Nei. Idéen er nettopp at de eksisterende verktøyene dine begynner å samarbeide bedre. Kun hvis et verktøy er virkelig utdatert eller ikke tillater koblinger, anbefaler vi et alternativ.",
  },
  {
    question: "Hvor lang tid tar det å koble alt sammen?",
    answer:
      "Standard koblinger (som Google, WhatsApp, regnskapsprogramvare) er ofte ferdige på noen få dager. Mer komplekse eller egendefinerte integrasjoner kan ta 1 til 2 uker.",
  },
  {
    question: "Hva hvis en kobling slutter å fungere?",
    answer:
      "Alle integrasjonene overvåkes. Hvis noe går galt - for eksempel på grunn av en API-oppdatering - får vi automatisk et varsel og løser det. Support er inkludert.",
  },
  {
    question: "Koster dette ekstra utover standardabonnementet?",
    answer:
      "Standardkoblingene er inkludert i abonnementet ditt. For komplekse egendefinerte integrasjoner lager vi et skreddersydd tilbud, slik at du vet nøyaktig hva du kan forvente.",
  },
];

const SoftwareIntegraties = () => (
  <PageShell>
    <Helmet>
      <title>Programvareintegrasjoner for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Koble eksisterende programvareverktøy sammen slik at data flyter automatisk. Ingen dobbeltarbeid, ingen feil, ett sentralt system."
      />
      <link rel="canonical" href={`${SITE_URL}/tjenester/programvareintegrasjoner`} />
      <meta property="og:title" content="Programvareintegrasjoner for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Koble eksisterende verktøy sammen og la dem samarbeide sømløst." />
      <meta property="og:url" content={`${SITE_URL}/tjenester/programvareintegrasjoner`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Integrasjoner
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          La verktøyene dine snakke sammen
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          De fleste håndverkere bruker flere verktøy som ikke kommuniserer med hverandre.
          Vi kobler alt sammen slik at data flyter automatisk og du slipper dobbeltarbeid.
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
          Hvorfor programvareintegrasjoner er avgjørende
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Slutt med manuell kopiering og liming. La systemene gjøre jobben.
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
          Koblinger
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Verktøy vi kobler sammen
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
              Bruker du verktøy som ikke samarbeider?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              La oss se på hvilke koblinger som er mulige og hvor mye tid du kan spare.
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
          Fra kartlegging til sømløst koblede systemer i tre trinn.
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
          Klar for å få verktøyene dine til å samarbeide?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Bestill en gratis demo og oppdag hvilke integrasjoner som gir mest for bedriften din.
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

export default SoftwareIntegraties;
