import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  MessageCircle,
  PhoneOff,
  Facebook,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

/* ───── Stats ───── */
const stats = [
  { value: "70%", description: "van mensen reageert binnen 24 uur op SMS follow-ups." },
  { value: "72%", description: "van aannemers verhoogt de omzet met automatische follow-ups." },
  { value: "97%", description: "van mensen leest SMS-berichten binnen 24 uur." },
];

/* ───── Features ───── */
const features = [
  {
    icon: FileText,
    title: "Website Offerte Formulieren",
    description:
      "Wanneer een klant je offerte-formulier invult, sturen wij automatisch een sms om het verzoek te bevestigen en het gesprek te starten. Zo val je op en weet de klant dat zijn aanvraag wordt behandeld.",
  },
  {
    icon: MessageCircle,
    title: "Chat Widget",
    description:
      "Wanneer een klant de chat widget op je website gebruikt, sturen wij automatisch een sms om te bevestigen dat het verzoek is ontvangen. Dit onderscheidt je van de concurrentie en je krijgt direct een melding.",
  },
  {
    icon: PhoneOff,
    title: "Gemiste Oproep SMS",
    description:
      "Wanneer een klant je niet bereikt, sturen wij automatisch een sms om te laten weten dat je hebt geprobeerd te bellen. Dit laat zien dat je klaarstaat om te helpen en je krijgt een melding om snel op te volgen.",
  },
  {
    icon: Facebook,
    title: "Instagram & Facebook Auto Responder",
    description:
      "Wanneer een klant je een bericht stuurt op Facebook of Instagram, reageren wij automatisch om te laten weten dat je zo snel mogelijk terugkomt. Plus, je krijgt direct een melding.",
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
      "Je vult een kort onboarding-formulier in met je bedrijfsgegevens. Daarna stellen wij je automatische lead follow-up in op al je kanalen.",
  },
  {
    step: "03",
    title: "Livegang & uitleg",
    duration: "25 minuten",
    description:
      "We lopen samen door je nieuwe systeem, beantwoorden je vragen en laten zien hoe alles werkt. Daarna ga je live en wordt elke lead automatisch opgevolgd.",
  },
];

const LeadFollowUp = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Lead Follow-Up Systeem | Aannemer Systeem</title>
        <meta name="description" content="Automatische opvolging van nieuwe leads via SMS en e-mail. Verhoog je conversie met snelle, persoonlijke follow-ups." />
        <link rel="canonical" href="https://aannemersysteem.com/diensten/lead-follow-up" />
        <meta property="og:title" content="Lead Follow-Up Systeem | Aannemer Systeem" />
        <meta property="og:description" content="Automatische opvolging van nieuwe leads via SMS en e-mail." />
        <meta property="og:url" content="https://aannemersysteem.com/diensten/lead-follow-up" />
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
            Automatische SMS Lead Follow-Up
          </motion.h1>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
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
            Wat is automatische SMS lead follow-up?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Elke lead wordt automatisch opgevolgd via SMS — of die nu via je website, chat, telefoon of social media binnenkomt.
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
                Plan een kort gesprek en we laten je precies zien hoe automatische lead follow-up
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
            Klaar om elke lead automatisch op te volgen?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Boek een gratis demo en ontdek hoe automatische SMS follow-up jouw conversie kan verhogen.
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

export default LeadFollowUp;
