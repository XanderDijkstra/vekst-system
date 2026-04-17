import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  Users,
  MapPin,
  Bell,
  LayoutGrid,
  Smartphone,
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
  { value: "34%", description: "av håndverkere sier dårlig planlegging er deres største frustrasjon." },
  { value: "8 timer", description: "i uken bruker håndverkere i snitt på å planlegge og koordinere." },
  { value: "50%", description: "færre no-shows og dobbeltbookinger med et sentralt planleggingssystem." },
];

const problems = [
  {
    title: "Planlegging spredt på flere steder",
    description: "Excel-ark, WhatsApp-grupper, papirkalendre og Google Kalender om hverandre. Ingen vet nøyaktig hva planleggingen er, og endringer blir oversett.",
  },
  {
    title: "Dobbeltbookinger og glemte avtaler",
    description: "Uten et sentralt system skjer det regelmessig at teamet ditt står på feil sted eller at en kunde blir glemt. Det koster tillit og penger.",
  },
  {
    title: "Kundene vet ikke når du kommer",
    description: "Kunder ringer for å spørre når du kommer. Teamet ditt vet det noen ganger heller ikke sikkert selv. Dette fører til frustrasjon på begge sider.",
  },
  {
    title: "Å kommunisere endringer er et kaos",
    description: "Hvis et prosjekt drar ut eller en avtale flyttes, må du informere alle manuelt. Meldinger blir oversett og folk står for lukket dør.",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Sentral planlegging",
    description:
      "Én oversiktlig kalender for hele teamet. Alle ser samme plan - på kontoret, på byggeplassen eller underveis.",
  },
  {
    icon: Users,
    title: "Teamplanlegging og tildeling",
    description:
      "Tildel prosjekter til bestemte teammedlemmer. Se direkte hvem som er tilgjengelig og hvem som jobber hvor.",
  },
  {
    icon: MapPin,
    title: "Ruteoptimalisering",
    description:
      "Planlegg avtaler smart basert på lokasjon. Mindre kjøring, mer produktive timer på byggeplassen.",
  },
  {
    icon: Bell,
    title: "Automatiske påminnelser",
    description:
      "Kundene mottar automatisk en påminnelse dagen før og en time før ankomst. Færre no-shows, mer profesjonalitet.",
  },
  {
    icon: LayoutGrid,
    title: "Dag-, uke- og månedsoversikt",
    description:
      "Se planleggingen slik det passer deg. Zoom inn på en enkelt dag eller se kommende måned i én oversikt.",
  },
  {
    icon: Smartphone,
    title: "Tilgjengelig på mobil",
    description:
      "Teamet ditt ser og administrerer planleggingen fra telefonen. Adresser, kundenotater og veibeskrivelse - alt for hånden.",
  },
];

const included = [
  "Sentral teamkalender",
  "Kundeavtalebekreftelser",
  "Automatiske påminnelser (SMS)",
  "Dag/uke/måned-oversikt",
  "Tildeling til teammedlem",
  "Synkronisering med Google Kalender",
  "Kundenotater per avtale",
  "Mobiltilgang",
];

const steps = [
  {
    step: "01",
    title: "Analysere dagens planlegging",
    duration: "30 minutter",
    description:
      "Vi ser på hvordan du planlegger nå og hvor flaskehalsene ligger. Hvilken informasjon mangler? Hvor går ting galt?",
  },
  {
    step: "02",
    title: "Sette opp systemet",
    duration: "3–5 dager",
    description:
      "Vi setter opp planleggingen din, importerer eksisterende avtaler og konfigurerer automatiske påminnelser og varsler.",
  },
  {
    step: "03",
    title: "Opplæring av team og oppstart",
    duration: "45 minutter",
    description:
      "Vi sørger for at du og teamet ditt kan jobbe med systemet. Deretter går du over og merker forskjellen umiddelbart.",
  },
];

const faqs = [
  {
    question: "Kan flere teammedlemmer redigere planleggingen?",
    answer:
      "Ja. Hvert teammedlem kan se planleggingen og - avhengig av rettighetene du setter - også redigere. Endringene er umiddelbart synlige for alle.",
  },
  {
    question: "Synkroniserer dette med Google Kalender?",
    answer:
      "Ja. Planleggingen synkroniserer med Google Kalender og Outlook. Avtaler vises automatisk i den personlige kalenderen din.",
  },
  {
    question: "Mottar kundene automatisk en melding?",
    answer:
      "Ja. Når en avtale planlegges, mottar kunden automatisk en bekreftelse. Dagen før og en time før ankomst mottar de en påminnelse.",
  },
  {
    question: "Kan jeg se planleggingen på telefonen også?",
    answer:
      "Ja. Planleggingen er fullstendig mobiloptimalisert. Teamet ditt kan se planleggingen, sjekke kundeopplysninger og administrere avtaler på byggeplassen.",
  },
  {
    question: "Hva hvis et prosjekt drar ut?",
    answer:
      "Du flytter enkelt de etterfølgende avtalene i systemet. Berørte kunder blir automatisk informert om endringen.",
  },
];

const PlanningSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Planleggingssystem for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Ett sentralt planleggingssystem for hele teamet ditt. Automatiske påminnelser, teamtildeling og mobiltilgang. Aldri mer dobbeltbookinger."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/planning-systeem`} />
      <meta property="og:title" content="Planleggingssystem for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Sentral planlegging for håndverkere. Automatiske påminnelser og mobiltilgang." />
      <meta property="og:url" content={`${SITE_URL}/diensten/planning-systeem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Planleggingssystem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Én planlegging for hele teamet - alltid oppdatert
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Planlegging spredt på Excel, WhatsApp og papirkalendre skaper kaos.
          Ett sentralt system gir oversikt - for deg, teamet ditt og kundene.
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
          Planleggingsproblemene håndverkere kjenner igjen
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
          Hva er med i planleggingssystemet vårt?
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

    {/* Included */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Inkludert
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Alt du trenger for god planlegging
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {included.map((item, i) => (
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
              Ferdig med planleggingskaos?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvordan et sentralt planleggingssystem sparer deg for timer hver uke.
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
          Klar for oversiktlig planlegging?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Bestill en gratis demo og oppdag hvordan planleggingssystemet vårt gjør teamet ditt mer effektivt.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Bestill demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/diensten">Se alle tjenester</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default PlanningSysteem;
