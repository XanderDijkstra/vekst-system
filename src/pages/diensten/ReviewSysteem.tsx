import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  MessageSquare,
  TrendingUp,
  Shield,
  ThumbsUp,
  Send,
  AlertTriangle,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://aannemersysteem.com";

const stats = [
  { value: "92%", description: "van consumenten leest online reviews voordat ze een aannemer kiezen." },
  { value: "4,7★", description: "gemiddelde score van onze klanten na implementatie van het review systeem." },
  { value: "8x", description: "meer reviews per maand door automatische verzoeken na oplevering." },
];

const problems = [
  {
    title: "Tevreden klanten laten geen review achter",
    description: "Je levert uitstekend werk af, maar klanten vergeten een review te plaatsen. Ondertussen hebben je concurrenten tientallen 5-sterren reviews die nieuwe klanten overtuigen.",
  },
  {
    title: "Negatieve reviews hebben te veel impact",
    description: "Eén ontevreden klant kan je reputatie schaden als je geen positieve reviews hebt om het te compenseren. Zonder actief reviewbeleid ben je kwetsbaar.",
  },
  {
    title: "Je durft niet om reviews te vragen",
    description: "Het voelt ongemakkelijk om klanten te vragen een review te plaatsen. Je wilt niet opdringerig overkomen, maar zonder reviews mis je een krachtig marketinginstrument.",
  },
  {
    title: "Reviews staan niet op de juiste plekken",
    description: "Misschien heb je wat reviews, maar ze staan verspreid of op platforms die niemand bekijkt. Google en je website zijn de plekken die ertoe doen.",
  },
];

const features = [
  {
    icon: Send,
    title: "Automatische review verzoeken",
    description:
      "Na elk afgerond project stuurt het systeem automatisch een review verzoek via SMS of e-mail. De klant hoeft alleen maar te klikken en een score te geven.",
  },
  {
    icon: Star,
    title: "Slim review-filter",
    description:
      "Tevreden klanten (4-5 sterren) worden direct naar Google doorgestuurd. Bij een lagere score krijg jij eerst een melding zodat je het kunt oplossen voordat het online staat.",
  },
  {
    icon: MessageSquare,
    title: "Automatische review responses",
    description:
      "Elke review krijgt automatisch een persoonlijk en professioneel antwoord. Dit laat zien dat je betrokken bent en verhoogt je zichtbaarheid in Google.",
  },
  {
    icon: ThumbsUp,
    title: "Reviews op je website",
    description:
      "Je beste reviews worden automatisch op je website getoond. Bezoekers zien direct sociale bewijskracht - zonder dat jij iets hoeft te doen.",
  },
  {
    icon: Shield,
    title: "Reputatie monitoring",
    description:
      "Krijg direct een melding bij nieuwe reviews. Zie in één dashboard je gemiddelde score, aantal reviews en trends over tijd.",
  },
  {
    icon: TrendingUp,
    title: "Meer reviews = meer klanten",
    description:
      "Bedrijven met meer en betere reviews staan hoger in Google en worden vaker gekozen. Elke review is een investering in je toekomstige groei.",
  },
];

const steps = [
  {
    step: "01",
    title: "Review systeem opzetten",
    duration: "2–3 dagen",
    description:
      "We configureren het review systeem met jouw bedrijfsgegevens, branding en voorkeuren. SMS en e-mail templates worden op maat gemaakt.",
  },
  {
    step: "02",
    title: "Eerste reviews verzamelen",
    duration: "1–2 weken",
    description:
      "We sturen de eerste review verzoeken naar je recente klanten. De meeste aannemers hebben binnen twee weken al 5-10 nieuwe Google reviews.",
  },
  {
    step: "03",
    title: "Automatisch draaien",
    duration: "doorlopend",
    description:
      "Vanaf nu stuurt het systeem automatisch review verzoeken na elk project. Je hoeft er niet meer aan te denken - de reviews stromen vanzelf binnen.",
  },
];

const faqs = [
  {
    question: "Hoe weten klanten dat ze een review moeten plaatsen?",
    answer:
      "Na oplevering ontvangen ze automatisch een SMS of e-mail met een directe link naar je Google-bedrijfsprofiel. Het kost ze letterlijk 30 seconden.",
  },
  {
    question: "Wat als een klant een slechte review wil plaatsen?",
    answer:
      "Het systeem filtert op tevredenheid. Bij een score lager dan 4 sterren krijg jij eerst een melding zodat je contact kunt opnemen. De klant wordt niet direct naar Google gestuurd.",
  },
  {
    question: "Kan ik de berichten aanpassen?",
    answer:
      "Ja. Je kunt de tekst van het review verzoek, de timing en het aantal herinneringen helemaal naar wens instellen. Wij helpen met de initiële opzet.",
  },
  {
    question: "Hoeveel reviews kan ik verwachten?",
    answer:
      "Gemiddeld plaatst 25-35% van de klanten een review na een automatisch verzoek. Bij 10 projecten per maand betekent dat 2-4 nieuwe reviews per maand.",
  },
  {
    question: "Worden reviews automatisch op mijn website getoond?",
    answer:
      "Ja. Je Google reviews worden automatisch gesynchroniseerd met je website. Nieuwe reviews verschijnen automatisch - zonder handmatig werk.",
  },
];

const ReviewSysteem = () => (
  <PageShell>
    <Helmet>
      <title>Review Systeem voor Aannemers | Aannemer Systeem</title>
      <meta
        name="description"
        content="Verzamel automatisch Google reviews van tevreden klanten. Verhoog je online reputatie en win meer opdrachten als aannemer."
      />
      <link rel="canonical" href={`${SITE_URL}/diensten/review-systeem`} />
      <meta property="og:title" content="Review Systeem voor Aannemers | Aannemer Systeem" />
      <meta property="og:description" content="Verzamel automatisch 5-sterren reviews en bouw een sterke online reputatie." />
      <meta property="og:url" content={`${SITE_URL}/diensten/review-systeem`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Review Systeem
        </motion.p>
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
        >
          Laat je werk voor zich spreken - met 5-sterren reviews
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Tevreden klanten laten zelden een review achter. Ons systeem stuurt automatisch een verzoek
          na elk project - zodat je reputatie groeit terwijl jij doorwerkt.
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
          Herkenbaar?
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
          Waarom de meeste aannemers te weinig reviews hebben
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
          Hoe ons review systeem werkt
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

    {/* CTA banner */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          {...fadeInUp}
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
              Hoeveel 5-sterren reviews mis je nu per maand?
            </h2>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Laat ons berekenen hoeveel reviews je kunt verzamelen op basis van je huidige aantal projecten.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-lg text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 flex-shrink-0"
          >
            <Link to="/demo">
              Boek een demo <ArrowRight className="ml-2 h-4 w-4" />
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
          In drie stappen naar meer reviews
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
          Veelgestelde vragen
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
          Klaar om je online reputatie te versterken?
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          Boek een gratis demo en ontdek hoe je automatisch meer 5-sterren reviews verzamelt.
        </motion.p>
        <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Boek een demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/diensten">Bekijk alle diensten</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default ReviewSysteem;
