import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Bell,
  MousePointerClick,
  Syringe,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

/* ───── Stats ───── */
const stats = [
  { value: "97%", description: "van mensen leest reviews voordat ze een bedrijf kiezen." },
  { value: "72%", description: "van mensen gebruikt Google Reviews om een bedrijf te vinden." },
  { value: "2.7x", description: "meer mensen kiezen een bedrijf met veel positieve reviews." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Star,
    title: "Alleen 5-sterren reviews",
    description:
      "We maken een aangepaste review-link voor je klanten. Geeft iemand minder dan 4 sterren? Dan wordt hij doorgestuurd naar een privé-feedbackformulier en krijg jij een melding om het probleem direct op te lossen.",
  },
  {
    icon: Bell,
    title: "Automatische follow-up herinneringen",
    description:
      "Je klanten zijn druk en vergeten vaak een review achter te laten, zelfs als ze tevreden zijn. Wij sturen 4-5 herinneringen over vier weken, met gepersonaliseerde berichten en voldoende tussentijd.",
  },
  {
    icon: MousePointerClick,
    title: "Reviews vragen in één klik",
    description:
      "Simpel: vul de naam en het telefoonnummer van je klant in, klik op verzenden en ons systeem doet de rest. Geen gedoe, geen technische kennis nodig.",
  },
  {
    icon: Syringe,
    title: "Review Injector voor aannemers",
    description:
      "Heb je een lijst met eerdere klanten? Wij draaien onze 'Review Injector' campagne om geleidelijk reviews op te halen bij je volledige klantenbestand.",
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
    title: "Wij maken je systeem",
    duration: "7–10 dagen",
    description:
      "Je vult een kort onboarding-formulier in met je bedrijfsgegevens. Daarna stellen wij je review funnel in met gepersonaliseerde berichten en automatische opvolging.",
  },
  {
    step: "03",
    title: "Livegang & uitleg",
    duration: "25 minuten",
    description:
      "We lopen samen door je nieuwe systeem, beantwoorden je vragen en laten zien hoe alles werkt. Daarna ga je live en worden reviews automatisch verzameld.",
  },
];

const ReviewFunnel = () => {
  return (
    <PageShell>
      <Helmet>
        <title>5-Sterren Review Funnel | Aannemer Systeem</title>
        <meta name="description" content="Verzamel automatisch Google reviews van tevreden klanten. Bescherm je reputatie met ons slimme review systeem." />
        <link rel="canonical" href="https://aannemersysteem.com/diensten/review-funnel" />
        <meta property="og:title" content="5-Sterren Review Funnel | Aannemer Systeem" />
        <meta property="og:description" content="Verzamel automatisch Google reviews van tevreden klanten." />
        <meta property="og:url" content="https://aannemersysteem.com/diensten/review-funnel" />
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
            5-Sterren Review Funnel
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
            Wat is de 5-sterren review funnel?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Automatisch 5-sterren reviews verzamelen zodat jouw bedrijf bovenaan Google verschijnt.
          </motion.p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Plan een kort gesprek en we laten je precies zien hoe de review funnel
                werkt voor jouw type aannemersbedrijf.
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
            Klaar om meer 5-sterren reviews te verzamelen?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Boek een gratis demo en ontdek hoe onze review funnel jouw bedrijf laat groeien op Google.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Boek een demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/diensten">Bekijk alle diensten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default ReviewFunnel;
