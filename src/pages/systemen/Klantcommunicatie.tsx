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
  { value: "85%", description: "van klanten waardeert het om een SMS terug te krijgen na een gemist telefoontje." },
  { value: "72%", description: "meer klanten reageren op een SMS dan op een voicemail." },
  { value: "69%", description: "van bedrijven wint meer klanten met automatische gemiste-oproep opvolging." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Star,
    title: "Val op tussen je concurrenten",
    description:
      "Elke aannemer mist weleens een telefoontje, maar weinigen reageren snel. Val op met een instant, persoonlijk SMS-bericht namens jou, waarin je de gemiste oproep erkent en de klant doorverwijst naar je offerte-formulier.",
  },
  {
    icon: PhoneOff,
    title: "Nooit meer leads verliezen",
    description:
      "Wanneer klanten een project willen laten uitvoeren, willen ze direct contact. Als hun oproep onbeantwoord blijft, gaan ze naar de volgende aannemer. Ons systeem start direct een gesprek om dat te voorkomen.",
  },
  {
    icon: Clock,
    title: "24/7 bereikbaar",
    description:
      "Ons systeem draait 24/7, zodat je nooit een kans mist. Zelfs als je buiten kantooruren een oproep mist, reageren wij direct op elke potentiële lead. Zo weet je zeker dat elke aanvraag wordt opgepakt.",
  },
  {
    icon: MessageSquare,
    title: "Persoonlijk SMS-bericht",
    description:
      "Geen generieke berichten. Elk SMS-bericht wordt aangepast aan jouw bedrijfsnaam en tone-of-voice, zodat het voelt alsof jij persoonlijk reageert — ook als je op de werf staat.",
  },
  {
    icon: Zap,
    title: "Binnen 5 seconden verzonden",
    description:
      "Snelheid is alles. Ons systeem verstuurt het SMS-bericht binnen 5 seconden na de gemiste oproep. De klant voelt zich direct gehoord en blijft bij jou in plaats van de concurrent te bellen.",
  },
  {
    icon: Users,
    title: "Automatisch gesprek starten",
    description:
      "Het SMS-bericht is pas het begin. Het systeem start automatisch een conversatie zodat je de lead kunt kwalificeren, een afspraak kunt plannen of direct een offerte kunt aanbieden.",
  },
];

/* ───── How it works ───── */
const steps = [
  {
    step: "01",
    title: "Kennismakingsgesprek",
    duration: "20 minuten",
    description:
      "We bespreken je huidige situatie, beantwoorden al je vragen en laten zien hoe het systeem werkt met resultaten van bestaande klanten.",
  },
  {
    step: "02",
    title: "Wij bouwen je systeem",
    duration: "7–10 dagen",
    description:
      "Je vult een kort onboarding-formulier in met je bedrijfsgegevens. Daarna stellen wij je klantcommunicatie systeem in met gepersonaliseerde SMS-berichten en automatische opvolging.",
  },
  {
    step: "03",
    title: "Livegang & uitleg",
    duration: "25 minuten",
    description:
      "We lopen samen door je nieuwe systeem, beantwoorden je vragen en laten zien hoe alles werkt. Daarna ga je live en wordt elke gemiste oproep automatisch opgevolgd.",
  },
];

const Klantcommunicatie = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Gemiste Oproep → SMS Bericht | Aannemer Systeem</title>
        <meta name="description" content="Mis nooit meer een klant. Automatisch een SMS sturen wanneer je een oproep mist op de werf. Speciaal voor aannemers." />
        <link rel="canonical" href="https://aannemersysteem.com/diensten/klantcommunicatie" />
        <meta property="og:title" content="Gemiste Oproep → SMS Bericht | Aannemer Systeem" />
        <meta property="og:description" content="Automatisch een SMS sturen wanneer je een oproep mist op de werf." />
        <meta property="og:url" content="https://aannemersysteem.com/diensten/klantcommunicatie" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
      </Helmet>
      {/* ═══ Hero ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-3xl mx-auto"
          >
            Gemiste Oproep → SMS Bericht
          </motion.h1>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Stats left */}
            <div className="lg:col-span-2 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: 0.1 + i * 0.08 }}
                  className="border border-primary-foreground/10 rounded-xl p-5"
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
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Bekijk een korte demo</h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-medium">Video binnenkort beschikbaar</p>
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
            Wat is het klantcommunicatie systeem?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Automatische opvolging van gemiste oproepen zodat je nooit meer een potentiële klant verliest.
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
                Wil je zien hoe dit voor jouw bedrijf werkt?
              </h2>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                Plan een kort gesprek en we laten je precies zien hoe het klantcommunicatie systeem
                werkt voor jouw type bouwbedrijf.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Link to="/demo">
                Boek een demo
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
            Hoe werkt het?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center leading-relaxed"
          >
            Van kennismaking tot livegang in drie eenvoudige stappen.
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
            Nooit meer een klant missen?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Boek een gratis demo en ontdek hoe automatische opvolging van gemiste oproepen jouw bedrijf kan laten groeien.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Boek een demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/diensten">Bekijk alle diensten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default Klantcommunicatie;
