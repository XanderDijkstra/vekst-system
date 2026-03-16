import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Star,
  Smartphone,
  MessageSquare,
  FileText,
  BarChart3,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

/* ───── Stats ───── */
const stats = [
  { value: "75%", description: "van mensen beoordeelt de geloofwaardigheid van een bedrijf op basis van hun website." },
  { value: "78%", description: "van kleine bedrijven zegt dat een website hun groei heeft versneld." },
  { value: "67%", description: "van gebruikers vertrouwt bedrijven met een professionele website meer." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Search,
    title: "Gevonden worden in Google",
    description:
      "Wij zorgen dat je website correct geïndexeerd wordt en voldoet aan alle SEO best practices. De juiste zoekwoorden, meta tags, koppen en snelle laadtijden — alles wordt geoptimaliseerd zodat potentiële klanten jou vinden.",
  },
  {
    icon: Star,
    title: "Toon je beste reviews",
    description:
      "Een sterke online reputatie is onmisbaar. Wij tonen je beste Google reviews op elke pagina van je website zodat bezoekers direct vertrouwen krijgen in je bedrijf.",
  },
  {
    icon: Smartphone,
    title: "Mobiel geoptimaliseerd",
    description:
      "87% van klanten zoekt lokale bedrijven op hun telefoon. Je website laadt snel, ziet er perfect uit op mobiel en heeft duidelijke call-to-actions en klikbare telefoonnummers.",
  },
  {
    icon: MessageSquare,
    title: "Direct contact via SMS of WhatsApp",
    description:
      "Elke website bevat een offerte-formulier en chat-widget die direct een gesprek start. Bezoekers ontvangen meteen een bevestiging en je hebt hun gegevens om op te volgen — ook als ze de website verlaten.",
  },
  {
    icon: FileText,
    title: "Automatische offerte aanvragen",
    description:
      "Offerte-formulieren die automatisch binnenkomen in je systeem. Geen handmatig overtypen, geen gemiste aanvragen. Elke lead wordt direct vastgelegd en opgepakt.",
  },
  {
    icon: BarChart3,
    title: "Inzicht in je resultaten",
    description:
      "Zie precies hoeveel bezoekers je website heeft, waar ze vandaan komen en hoeveel offerte aanvragen binnenkomen. Data-gedreven beslissingen in plaats van onderbuikgevoel.",
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
    title: "Wij bouwen je website",
    duration: "7–10 dagen",
    description:
      "Je vult een kort onboarding-formulier in met je bedrijfsgegevens. Daarna gaan wij aan de slag met het bouwen van je nieuwe website en lead generatie systeem.",
  },
  {
    step: "03",
    title: "Livegang & uitleg",
    duration: "25 minuten",
    description:
      "We lopen samen door je nieuwe website, beantwoorden je vragen en laten zien hoe alles werkt. Daarna ga je live en stromen de eerste leads binnen.",
  },
];

const LeadGeneratie = () => {
  return (
    <PageShell>
      {/* ═══ Hero with Stats + Video ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Dienst
          </motion.p>
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Lead Generatie Website
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Een professionele website die niet alleen mooi is, maar daadwerkelijk nieuwe klanten aantrekt
            en automatisch offerte aanvragen voor je verzamelt.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Stats column */}
            <div className="lg:col-span-2 space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
                  className="border border-primary-foreground/10 rounded-2xl p-6"
                >
                  <span className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</span>
                  <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Video column */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Bekijk een korte demo</h3>
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 border border-primary-foreground/10">
                {/* Replace the src with your actual video URL or YouTube embed */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Lead Generatie Website Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
            Wat maakt onze websites anders?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Geen visitekaartje-website, maar een lead generatie machine die 24/7 voor je werkt.
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
                Plan een kort gesprek en we laten je precies zien hoe een lead generatie website eruitziet
                voor jouw type bouwbedrijf.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 ease-system-ease hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Link to="/contact">
                Plan een gesprek
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
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
          >
            Klaar om meer leads te genereren?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Plan een vrijblijvend kennismakingsgesprek en ontdek wat een professionele website voor jouw bouwbedrijf kan betekenen.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">
                Plan een gesprek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/diensten">Bekijk alle diensten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default LeadGeneratie;
