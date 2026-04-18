import { Helmet } from "react-helmet-async";
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
  { value: "75%", description: "av folk vurderer troverdigheten til et selskap basert på nettsiden deres." },
  { value: "78%", description: "av små bedrifter sier at en nettside har satt fart på veksten deres." },
  { value: "67%", description: "av brukerne stoler mer på bedrifter med en profesjonell nettside." },
];

/* ───── Features ───── */
const features = [
  {
    icon: Search,
    title: "Bli funnet i Google",
    description:
      "Vi sørger for at nettsiden din blir riktig indeksert og oppfyller alle SEO-praksisene. Riktige søkeord, metatagger, overskrifter og raske lastetider - alt optimaliseres slik at potensielle kunder finner deg.",
  },
  {
    icon: Star,
    title: "Vis frem dine beste anmeldelser",
    description:
      "Et sterkt omdømme på nett er uunnværlig. Vi viser dine beste Google-anmeldelser på hver side av nettsiden slik at besøkende umiddelbart får tillit til bedriften din.",
  },
  {
    icon: Smartphone,
    title: "Mobiloptimalisert",
    description:
      "87 % av kundene søker etter lokale bedrifter på mobilen. Nettsiden din laster raskt, ser perfekt ut på mobil og har tydelige call-to-actions og klikkbare telefonnumre.",
  },
  {
    icon: MessageSquare,
    title: "Direkte kontakt via SMS eller WhatsApp",
    description:
      "Hver nettside har et tilbudsskjema og chat-widget som starter en samtale med en gang. Besøkende får umiddelbart en bekreftelse og du har opplysningene deres til oppfølging - også hvis de forlater nettsiden.",
  },
  {
    icon: FileText,
    title: "Automatiske tilbudsforespørsler",
    description:
      "Tilbudsskjemaer som automatisk kommer inn i systemet ditt. Ingen manuell overføring, ingen tapte forespørsler. Hver lead blir umiddelbart registrert og fulgt opp.",
  },
  {
    icon: BarChart3,
    title: "Innsikt i resultatene dine",
    description:
      "Se nøyaktig hvor mange besøkende nettsiden din har, hvor de kommer fra og hvor mange tilbudsforespørsler som kommer inn. Datadrevne beslutninger i stedet for magefølelse.",
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
    title: "Vi bygger nettsiden din",
    duration: "7–10 dager",
    description:
      "Du fyller ut et kort onboarding-skjema med bedriftsopplysningene dine. Deretter setter vi i gang med å lage den nye nettsiden og lead-genereringssystemet ditt.",
  },
  {
    step: "03",
    title: "Lansering og gjennomgang",
    duration: "25 minutter",
    description:
      "Vi går gjennom den nye nettsiden sammen, svarer på spørsmål og viser hvordan alt fungerer. Deretter går du live og de første leadsene strømmer inn.",
  },
];

const LeadGeneratie = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Lead-genererende nettside | Vekst Systemet</title>
        <meta name="description" content="En profesjonell nettside som tiltrekker nye kunder og samler inn tilbudsforespørsler automatisk. Bygget for håndverkere." />
        <link rel="canonical" href="https://vekst-systemet.no/diensten/lead-generatie" />
        <meta property="og:title" content="Lead-genererende nettside | Vekst Systemet" />
        <meta property="og:description" content="En profesjonell nettside som tiltrekker nye kunder og samler inn tilbudsforespørsler automatisk." />
        <meta property="og:url" content="https://vekst-systemet.no/diensten/lead-generatie" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
      </Helmet>
      {/* ═══ Hero with Stats + Video ═══ */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Tjeneste
          </motion.p>
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Lead-genererende nettside
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            En profesjonell nettside som ikke bare er pen, men som faktisk tiltrekker nye kunder
            og samler inn tilbudsforespørsler automatisk for deg.
          </motion.p>

          {/* Video - shown here on mobile, hidden on lg */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.15 }}
            className="mt-8 lg:hidden"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 border border-primary-foreground/10">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/lead-generatie-demo.mp4" type="video/mp4" />
                Nettleseren din støtter ikke video.
              </video>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Stats column */}
            <div className="lg:col-span-2 space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
                  className="border border-primary-foreground/15 bg-primary-foreground/[0.06] shadow-lg shadow-black/10 rounded-2xl p-6"
                >
                  <span className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</span>
                  <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Video column - hidden on mobile, shown on lg */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.2 }}
              className="hidden lg:block lg:col-span-3"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Se en kort demo</h3>
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 border border-primary-foreground/10">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lead-generatie-demo.mp4" type="video/mp4" />
                  Nettleseren din støtter ikke video.
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
            Hva gjør nettsidene våre annerledes?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Ikke en visittkort-nettside, men en lead-genereringsmaskin som jobber for deg 24/7.
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
                Book en kort samtale så viser vi deg nøyaktig hvordan en lead-genererende nettside ser ut
                for din type håndverkerbedrift.
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
            Klar for å generere flere leads?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Bestill en gratis demo og oppdag hva en profesjonell nettside kan bety for din håndverkerbedrift.
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill demo
                <ArrowRight className="ml-2 h-4 w-4" />
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
};

export default LeadGeneratie;
