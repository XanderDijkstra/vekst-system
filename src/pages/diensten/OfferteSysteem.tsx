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

const SITE_URL = "https://vekst-systemet.no";

const stats = [
  { value: "45 min", description: "gjennomsnittlig tid håndverkere bruker på å lage ett tilbud manuelt." },
  { value: "38%", description: "av tilbud blir aldri fulgt opp - og dermed tapt." },
  { value: "2,4x", description: "høyere sluttrate med automatisk oppfølging av tilbud." },
];

const problems = [
  {
    title: "Det tar for mye tid å lage tilbud",
    description: "Du sitter og skriver tilbud om kvelden mens du står på byggeplassen om dagen. Hvert tilbud er skreddersøm og det tar fort 30 til 60 minutter per stykk.",
  },
  {
    title: "Oppfølging blir glemt",
    description: "Du sender et tilbud og hører ikke noe mer. Å ringe tilbake glemmer du fordi du har det travelt. Imens velger kunden en konkurrent som fulgte opp.",
  },
  {
    title: "Ingen oversikt over åpne tilbud",
    description: "Tilbud ligger spredt utover e-post, WhatsApp og papirmapper. Du vet ikke nøyaktig hvilke tilbud som er åpne og hvilke du må følge opp.",
  },
  {
    title: "Ingen innsikt i konverteringsraten din",
    description: "Hvor mange av tilbudene dine blir faktisk oppdrag? Uten data kan du ikke forbedre deg, og du vet ikke hvor du lar penger ligge.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Skreddersydde tilbudsmaler",
    description:
      "Lag profesjonelle tilbud på minutter med forhåndsinnstilte maler for din type arbeid. Fyll bare inn de prosjektspesifikke detaljene.",
  },
  {
    icon: Send,
    title: "Send med ett klikk",
    description:
      "Tilbud blir automatisk utstyrt med bedriftens profil og sendt via e-post. Kunden kan godkjenne direkte på nett.",
  },
  {
    icon: Eye,
    title: "Sporing og varsler",
    description:
      "Se når en kunde åpner tilbudet ditt og hvor lenge de leser. Du vet nøyaktig når det er riktig tidspunkt å følge opp.",
  },
  {
    icon: Clock,
    title: "Automatisk oppfølging",
    description:
      "Ingen respons etter 3 dager? Systemet sender automatisk en vennlig påminnelse. Etter 7 dager følger en ny. Ingen tilbud blir glemt lenger.",
  },
  {
    icon: TrendingUp,
    title: "Innsikt i pipelinen din",
    description:
      "Se i ett dashboard hvor mange tilbud som er åpne, hvilke som er akseptert og hva den forventede omsetningen er. Datadrevne beslutninger.",
  },
  {
    icon: CheckCircle2,
    title: "Godkjenning og signatur på nett",
    description:
      "Kundene aksepterer tilbudet ditt med ett klikk og legger igjen en digital signatur. Ingen utskrifter, ingen krøll - start med en gang.",
  },
];

const steps = [
  {
    step: "01",
    title: "Vi lager tilbudsmalene dine",
    duration: "3–5 dager",
    description:
      "Basert på dagens tilbud og arbeidsmåte lager vi profesjonelle maler. Med logoen din, fargene og standardvilkårene.",
  },
  {
    step: "02",
    title: "Sette opp automatiseringer",
    duration: "2–3 dager",
    description:
      "Vi konfigurerer oppfølgingsreglene, varslene og sporingen. Alt blir tilpasset dine preferanser og tempo.",
  },
  {
    step: "03",
    title: "Opplæring og lansering",
    duration: "30 minutter",
    description:
      "Vi går gjennom systemet sammen, øver med et testtilbud og svarer på alle spørsmålene dine. Deretter går du live.",
  },
];

const faqs = [
  {
    question: "Kan jeg bruke min egen tilbudsdesign?",
    answer:
      "Ja. Vi bygger malene basert på din nåværende stil og profil. Tilbudet ditt ser ut som at du har designet det selv - men på en brøkdel av tiden.",
  },
  {
    question: "Hvordan fungerer godkjenning på nett?",
    answer:
      "Kunden mottar en lenke til tilbudet. De kan se på detaljene og godkjenne med ett klikk. Eventuelt kan det bes om en digital signatur.",
  },
  {
    question: "Blir tilbudene mine lagret trygt?",
    answer:
      "Ja. Alle tilbud lagres sikkert i skyen. Du kan alltid finne dem igjen, eksportere eller laste ned som PDF.",
  },
  {
    question: "Kan jeg se om en kunde har åpnet tilbudet mitt?",
    answer:
      "Ja. Du får et varsel når tilbudet åpnes. Du ser også hvor ofte og hvor lenge kunden har sett på tilbudet.",
  },
  {
    question: "Fungerer dette sammen med regnskapsprogrammet mitt?",
    answer:
      "Ja. Aksepterte tilbud kan automatisk konverteres til fakturaer i regnskapsprogrammet. Vi kobler til Tripletex, Fiken og andre populære pakker.",
  },
];

const OfferteSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Tilbudssystem for håndverkere | Vekst Systemet</title>
      <meta
        name="description"
        content="Lag profesjonelle tilbud på minutter, send med ett klikk og følg opp automatisk. Øk sluttraten din som håndverker."
      />
      <link rel="canonical" href={`${SITE_URL}/tjenester/tilbudssystem`} />
      <meta property="og:title" content="Tilbudssystem for håndverkere | Vekst Systemet" />
      <meta property="og:description" content="Lag tilbud på minutter og følg opp automatisk. Flere oppdrag, mindre krøll." />
      <meta property="og:url" content={`${SITE_URL}/tjenester/tilbudssystem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Tilbudssystem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Lag tilbud på minutter, ikke timer
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Å lage tilbud manuelt tar timer, og oppfølging blir ofte glemt.
          Systemet vårt automatiserer hele prosessen - fra forespørsel til godkjenning.
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
          Problemene håndverkere kjenner igjen rundt tilbud
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
          Hvordan tilbudssystemet vårt fungerer
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          Fra forespørsel til signert tilbud - alt i ett system.
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
              Hvor mange tilbud lar du ligge nå?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Book en kort samtale så viser vi deg hvordan du kan konvertere flere tilbud til oppdrag med automatisk oppfølging.
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
          Klar for å konvertere flere tilbud til oppdrag?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Bestill en gratis demo og oppdag hvordan tilbudssystemet vårt øker sluttraten din.
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

export default OfferteSysteem;
