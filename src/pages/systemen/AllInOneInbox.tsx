import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Inbox,
  Facebook,
  Instagram,
  Mail,
  MessageSquare,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

/* ───── Stats ───── */
const stats = [
  { value: "70%", description: "van aannemers reageert sneller op klanten met één inbox." },
  { value: "61%", description: "van aannemers voelt zich minder overweldigd met slechts één inbox." },
  { value: "83%", description: "van aannemers wordt beter georganiseerd met één centrale inbox." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Inbox,
    title: "4-in-1 unified inbox",
    description:
      "Bundel Facebook-berichten, Instagram DM's, sms'jes en e-mails in één overzichtelijke inbox. Zo mis je nooit een belangrijk bericht en kun je snel reageren op elke aanvraag.",
  },
  {
    icon: MessageSquare,
    title: "Sneller reageren",
    description:
      "Geen tabbladen meer wisselen. Al je berichten op één plek betekent dat je sneller reageert en klanten niet naar de concurrent gaan terwijl jij zoekt waar het bericht stond.",
  },
  {
    icon: Mail,
    title: "Niets meer missen",
    description:
      "Elke aanvraag — of die nu via Facebook, Instagram, SMS of e-mail binnenkomt — wordt automatisch op één plek verzameld. Zo valt er nooit meer iets tussen wal en schip.",
  },
  {
    icon: Facebook,
    title: "Alle kanalen gekoppeld",
    description:
      "Koppel al je communicatiekanalen in enkele minuten. Geen technische kennis nodig — wij zorgen dat alles naadloos samenwerkt zodat jij je kunt focussen op de werf.",
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
      "Je vult een kort onboarding-formulier in met je bedrijfsgegevens. Daarna koppelen wij al je communicatiekanalen aan één centrale inbox.",
  },
  {
    step: "03",
    title: "Livegang & uitleg",
    duration: "25 minuten",
    description:
      "We lopen samen door je nieuwe inbox, beantwoorden je vragen en laten zien hoe alles werkt. Daarna ga je live en beheer je al je berichten vanuit één plek.",
  },
];

const AllInOneInbox = () => {
  return (
    <PageShell>
      <Helmet>
        <title>All-in-One Inbox | Aannemer Systeem</title>
        <meta name="description" content="Al je berichten op één plek — SMS, e-mail, WhatsApp en social media. Reageer sneller en mis nooit een bericht." />
        <link rel="canonical" href="https://aannemersysteem.com/diensten/all-in-one-inbox" />
        <meta property="og:title" content="All-in-One Inbox | Aannemer Systeem" />
        <meta property="og:description" content="Al je berichten op één plek — SMS, e-mail, WhatsApp en social media." />
        <meta property="og:url" content="https://aannemersysteem.com/diensten/all-in-one-inbox" />
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
            Alles-in-Één Inbox
          </motion.h1>

          {/* Mobile video — after title */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.1 }}
            className="mt-8 lg:hidden"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 border border-primary-foreground/10">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/all-in-one-inbox-demo.mp4" type="video/mp4" />
                Je browser ondersteunt geen video.
              </video>
            </div>
          </motion.div>

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

            {/* Video right — desktop only */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
              className="hidden lg:block lg:col-span-3"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Bekijk een korte demo</h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 border border-primary-foreground/10">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/all-in-one-inbox-demo.mp4" type="video/mp4" />
                  Je browser ondersteunt geen video.
                </video>
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
            Wat is de alles-in-één inbox?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Eén plek voor al je berichten — Facebook, Instagram, SMS en e-mail — zodat je nooit meer iets mist.
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
                Plan een kort gesprek en we laten je precies zien hoe de unified inbox
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
            Klaar om al je berichten op één plek te beheren?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Boek een gratis demo en ontdek hoe onze unified inbox jouw communicatie stroomlijnt.
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

export default AllInOneInbox;
