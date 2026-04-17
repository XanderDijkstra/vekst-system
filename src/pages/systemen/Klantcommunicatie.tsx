import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  PhoneOff,
  Clock,
  MessageSquare,
  Zap,
  Users,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

/* ───── Stats ───── */
const stats = [
  { value: "85%", description: "av kundene setter pris på å få en SMS tilbake etter et tapt anrop." },
  { value: "72%", description: "flere kunder svarer på en SMS enn på en talemelding." },
  { value: "69%", description: "av bedriftene vinner flere kunder med automatisk oppfølging av tapte anrop." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Star,
    title: "Skill deg ut fra konkurrentene",
    description:
      "Hver håndverker mister et anrop en gang i blant, men få reagerer raskt. Skill deg ut med en umiddelbar, personlig SMS på dine vegne, som bekrefter det tapte anropet og henviser kunden til tilbudsskjemaet ditt.",
  },
  {
    icon: PhoneOff,
    title: "Mist aldri flere leads",
    description:
      "Når kunder vil få utført et prosjekt, vil de ha direkte kontakt. Hvis anropet deres går ubesvart, går de videre til neste håndverker. Systemet vårt starter umiddelbart en samtale for å forhindre det.",
  },
  {
    icon: Clock,
    title: "Tilgjengelig 24/7",
    description:
      "Systemet vårt kjører 24/7, slik at du aldri går glipp av en mulighet. Selv om du mister et anrop utenfor kontortiden, reagerer vi umiddelbart på hver potensielle lead. Slik er du sikker på at hver forespørsel blir fulgt opp.",
  },
  {
    icon: MessageSquare,
    title: "Personlig SMS-melding",
    description:
      "Ingen generiske meldinger. Hver SMS blir tilpasset bedriftsnavnet og tonen din, slik at det føles som at du selv svarer personlig - også når du står på byggeplassen.",
  },
  {
    icon: Zap,
    title: "Sendt innen 5 sekunder",
    description:
      "Hastighet er alt. Systemet vårt sender SMS-en innen 5 sekunder etter det tapte anropet. Kunden føler seg umiddelbart hørt og blir hos deg i stedet for å ringe konkurrenten.",
  },
  {
    icon: Users,
    title: "Start automatisk en samtale",
    description:
      "SMS-en er bare begynnelsen. Systemet starter automatisk en samtale slik at du kan kvalifisere leaden, avtale et møte eller sende et tilbud direkte.",
  },
];

/* ───── How it works ───── */
const steps = [
  {
    step: "01",
    title: "Bli-kjent-samtale",
    duration: "20 minutter",
    description:
      "Vi diskuterer situasjonen din, svarer på alle spørsmålene dine og viser hvordan systemet fungerer med resultater fra eksisterende kunder.",
  },
  {
    step: "02",
    title: "Vi bygger systemet ditt",
    duration: "7–10 dager",
    description:
      "Du fyller ut et kort onboarding-skjema med bedriftsopplysningene dine. Deretter setter vi opp kundekommunikasjonssystemet ditt med personlige SMS-meldinger og automatisk oppfølging.",
  },
  {
    step: "03",
    title: "Lansering og gjennomgang",
    duration: "25 minutter",
    description:
      "Vi går gjennom det nye systemet sammen, svarer på spørsmål og viser hvordan alt fungerer. Deretter går du live og hvert tapt anrop blir automatisk fulgt opp.",
  },
];

const Klantcommunicatie = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Automatisk SMS ved tapt anrop | Vekst Systemet</title>
        <meta name="description" content="Send automatisk en SMS ved et tapt anrop på byggeplassen. Mist aldri en kunde igjen - 85 % svarer raskere på SMS enn på talemelding." />
        <link rel="canonical" href="https://vekst-systemet.no/diensten/klantcommunicatie" />
        <meta property="og:title" content="Tapt anrop → SMS-melding | Vekst Systemet" />
        <meta property="og:description" content="Send automatisk en SMS når du mister et anrop på byggeplassen." />
        <meta property="og:url" content="https://vekst-systemet.no/diensten/klantcommunicatie" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
      </Helmet>
      {/* ═══ Hero ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-3xl mx-auto"
          >
            Tapt anrop → SMS-melding
          </motion.h1>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Stats left */}
            <div className="lg:col-span-2 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: 0.1 + i * 0.08 }}
                  className="border border-primary-foreground/15 bg-primary-foreground/[0.06] shadow-lg shadow-black/10 rounded-xl p-5"
                >
                  <span className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</span>
                  <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Video right */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Se en kort demo</h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-medium">Video kommer snart</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center max-w-2xl mx-auto"
          >
            Hva er kundekommunikasjonssystemet?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Automatisk oppfølging av tapte anrop slik at du aldri mister en potensiell kunde igjen.
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

      {/* ═══ CTA banner ═══ */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
                Vil du se hvordan dette fungerer for din bedrift?
              </h2>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                Book en kort samtale så viser vi deg nøyaktig hvordan kundekommunikasjonssystemet
                fungerer for din type håndverkerbedrift.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Link to="/demo">
                Bestill demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ How it works ═══ */}
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
            Fra bli-kjent-samtale til lansering i tre enkle trinn.
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

      {/* ═══ Final CTA ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Aldri miste en kunde igjen?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Bestill en gratis demo og oppdag hvordan automatisk oppfølging av tapte anrop kan få bedriften din til å vokse.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill demo
                <ArrowRight className="ml-2 h-4 w-4" />
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
};

export default Klantcommunicatie;
