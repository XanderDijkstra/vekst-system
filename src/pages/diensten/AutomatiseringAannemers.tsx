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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "15+ timer", description: "i måneden sparer håndverkere i snitt med automatisering av repetitive oppgaver." },
  { value: "94%", description: "færre tapte leads gjennom automatisk oppfølging innen 5 minutter." },
  { value: "2,8x", description: "høyere konvertering når leads blir fulgt opp automatisk og raskt." },
];

const features = [
  {
    icon: Mail,
    title: "Automatisk lead-oppfølging",
    description:
      "Hver nye lead mottar automatisk en personlig melding via SMS eller e-post. Ingen manuelt arbeid, ingen forsinkelse - også når du står på stillaset.",
  },
  {
    icon: Bell,
    title: "Smarte påminnelser og varsler",
    description:
      "Aldri glem en oppfølging igjen. Systemet minner deg på åpne tilbud, planlagte tilbakeringinger og kunder som venter på svar.",
  },
  {
    icon: CalendarCheck,
    title: "Automatiserte avtaler",
    description:
      "Kundene avtaler selv et møte i kalenderen din. Bekreftelser og påminnelser går automatisk - slutt på WhatsApp-frem-og-tilbake.",
  },
  {
    icon: RefreshCw,
    title: "Gjentakende oppgaver på autopilot",
    description:
      "Forespørsel om anmeldelser etter levering, sesongkampanjer til eksisterende kunder, bursdagsmeldinger - alt kjører automatisk i bakgrunnen.",
  },
  {
    icon: Clock,
    title: "Tidsbesparende arbeidsflyter",
    description:
      "Definer én gang hvordan du jobber, og systemet følger prosessen på samme måte hver gang. Fra første kontakt til faktura.",
  },
  {
    icon: Zap,
    title: "Umiddelbar handling ved triggere",
    description:
      "Ny tilbudsforespørsel? Automatisk bekreftelse. Tapt anrop? Umiddelbar SMS. Fått en anmeldelse? Automatisk takk. Systemet reagerer raskere enn du klarer.",
  },
];

const automations = [
  "Ny lead → automatisk velkomst-SMS",
  "Tapt anrop → umiddelbar SMS om tilbakeringing",
  "Tilbud sendt → oppfølging etter 3 dager",
  "Prosjekt fullført → forespørsel om anmeldelse",
  "Anmeldelse mottatt → automatisk takkemelding",
  "Ingen respons på tilbud → påminnelse etter 7 dager",
  "Ny kunde → velkomst-e-post med bedriftsinfo",
  "Sesongstart → kampanje til eksisterende kunder",
];

const steps = [
  {
    step: "01",
    title: "Vi kartlegger prosessene dine",
    duration: "30 minutter",
    description:
      "Sammen ser vi på hvilke oppgaver du gjentar daglig og hvor mest tid går tapt. Dette danner grunnlaget for automatiseringsstrategien din.",
  },
  {
    step: "02",
    title: "Vi bygger arbeidsflytene dine",
    duration: "1–2 uker",
    description:
      "Basert på dine prosesser bygger vi automatiseringene. Hver arbeidsflyt blir testet og tilpasset din arbeidsmåte.",
  },
  {
    step: "03",
    title: "Lansering og optimalisering",
    duration: "løpende",
    description:
      "Etter lansering overvåker vi resultatene og optimaliserer der det trengs. Automatiseringene dine blir stadig smartere etter hvert som det kommer inn mer data.",
  },
];

const faqs = [
  {
    question: "Mister jeg den personlige kontakten med kundene mine?",
    answer:
      "Tvert imot. Automatisering tar over de repetitive oppgavene slik at du får mer tid til personlig kontakt der det betyr noe. Meldingene sendes i ditt navn og din stil.",
  },
  {
    question: "Kan jeg selv gjøre endringer i automatiseringene?",
    answer:
      "Ja, du kan justere meldinger, endre timing og slå arbeidsflyter av eller på. Vi hjelper deg med det første oppsettet, og du kan justere selv etterpå.",
  },
  {
    question: "Fungerer dette også for en liten håndverkerbedrift?",
    answer:
      "Absolutt. Det er nettopp mindre bedrifter som har mest nytte av automatisering. Du trenger ikke bemanning til administrasjon - systemet gjør det for deg.",
  },
  {
    question: "Hvor mye tid sparer jeg realistisk sett?",
    answer:
      "De fleste håndverkere sparer 10 til 20 timer i måneden på administrative oppgaver. Tenk på lead-oppfølging, anmeldelsesforespørsler, avtalebekreftelser og kampanjer.",
  },
  {
    question: "Hva skjer hvis en automatisering ikke fungerer som den skal?",
    answer:
      "Vi overvåker alle automatiseringer og griper inn når det trengs. Du kan alltid kontakte oss for justeringer eller spørsmål. Support er inkludert i abonnementet.",
  },
];

const AutomatiseringAannemers = () => (
  <PageShell>
    <Helmet>
      <title>Automatisering for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Automatiser repetitive oppgaver som lead-oppfølging, forespørsler om anmeldelser og kundekommunikasjon. Spar 15+ timer i måneden som håndverker."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/automatisering-aannemers`} />
      <meta property="og:title" content="Automatisering for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Automatiser repetitive oppgaver og spar timer hver uke som håndverker." />
      <meta property="og:url" content={`${SITE_URL}/diensten/automatisering-aannemers`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
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
          La systemet jobbe mens du står på byggeplassen
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Lead-oppfølging, forespørsler om anmeldelser, avtalebekreftelser - alt du gjør manuelt hver dag,
          kan automatiseres. Slik at du kan fokusere på arbeidet som betyr noe.
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
          Hva automatiserer vi for håndverkere?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Smarte automatiseringer som kjører i bakgrunnen og sparer deg for timer hver uke.
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
          Eksempler
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Automatiseringer som gir umiddelbare resultater
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
              Vil du se hvilke automatiseringer som gir mest?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvilke arbeidsflyter som sparer mest tid for din type bedrift.
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
          Fra analyse til fullautomatisert i tre trinn.
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
          Klar for å spare timer hver uke?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          Bestill en gratis demo og oppdag hvilke automatiseringer som gir mest for bedriften din.
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

export default AutomatiseringAannemers;
