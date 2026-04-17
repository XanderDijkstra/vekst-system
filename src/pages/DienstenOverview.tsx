import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import {
  Globe, PhoneOff, Star, BarChart3, MessageSquare, UserCheck,
  Settings, Zap, Plug, Bot,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://vekst-systemet.no";

const sections = [
  {
    heading: "Systemer",
    description: "Digitale systemer som jobber for deg 24/7 - hvert laget for å løse ett konkret problem.",
    items: [
      { icon: Globe, title: "Leadgenerering-nettside", href: "/diensten/lead-generatie", description: "En nettside som tiltrekker nye kunder og samler tilbudsforespørsler automatisk." },
      { icon: PhoneOff, title: "Tapt anrop → SMS", href: "/diensten/klantcommunicatie", description: "Send automatisk en melding når du mister et anrop." },
      { icon: UserCheck, title: "Lead-oppfølging", href: "/diensten/lead-follow-up", description: "Automatisk oppfølging av nye leads via SMS og e-post." },
      { icon: Star, title: "Anmeldelsessystem", href: "/diensten/review-funnel", description: "Samle Google-anmeldelser fra fornøyde kunder automatisk." },
      { icon: BarChart3, title: "Markedsføringskampanjer", href: "/diensten/marketing-campagnes", description: "Nå målgruppen din automatisk med riktig budskap." },
      { icon: MessageSquare, title: "Alt-i-én innboks", href: "/diensten/all-in-one-inbox", description: "Alle meldinger på ett sted - SMS, e-post, WhatsApp og mer." },
    ],
  },
  {
    heading: "Tjenester",
    description: "Fra strategi til implementering - vi bygger den digitale infrastrukturen håndverkerbedriften din trenger.",
    items: [
      { icon: Settings, title: "Digitalisering for håndverkere", href: "/diensten/digitalisering-aannemers", description: "Fra papir til digitalt. Vi hjelper bedriften din å modernisere seg." },
      { icon: Zap, title: "Automatisering for håndverkere", href: "/diensten/automatisering-aannemers", description: "Automatiser repetitive oppgaver og spar timer hver uke." },
      { icon: Plug, title: "Programvareintegrasjoner", href: "/diensten/software-integraties", description: "Koble sammen verktøyene du bruker, så de jobber sømløst." },
      { icon: Bot, title: "AI-løsninger", href: "/diensten/ai-oplossingen", description: "Bruk AI til å jobbe smartere, ikke hardere." },
    ],
  },
];

const allDiensten = sections.flatMap((s) => s.items);

const dienstenSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tjenester | Vekst Systemet",
  url: `${SITE_URL}/diensten`,
  description: "Digitale systemer og tjenester for håndverkere: leadgenerering, anmeldelsesfunnel, markedsføringskampanjer og automatisering.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tjenester", item: `${SITE_URL}/diensten` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: allDiensten.length,
    itemListElement: allDiensten.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.title,
      url: `${SITE_URL}${d.href}`,
    })),
  },
};

const DienstenOverview = () => (
  <PageShell>
    <Helmet>
      <title>Tjenester | Vekst Systemet</title>
      <meta name="description" content="Se våre digitale systemer og tjenester for håndverkere: leadgenerering, anmeldelsesfunnel, markedsføringskampanjer, automatisering og mer." />
      <link rel="canonical" href={`${SITE_URL}/diensten`} />
      <meta property="og:title" content="Tjenester | Vekst Systemet" />
      <meta property="og:description" content="Se våre digitale systemer og tjenester for håndverkere: leadgenerering, anmeldelsesfunnel, markedsføringskampanjer, automatisering og mer." />
      <meta property="og:url" content={`${SITE_URL}/diensten`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(dienstenSchema)}</script>
    </Helmet>
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Våre tjenester</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Alt du trenger for å vokse</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Fra smarte systemer til full implementering - se hvordan vi hjelper håndverkere å digitalisere og automatisere.
        </motion.p>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {sections.map((section, sIdx) => (
          <div key={section.heading} className={sIdx === 0 ? "mt-16" : "mt-20"}>
            <motion.h2 {...fadeInUp} className="text-2xl font-semibold tracking-tight text-foreground mb-2">
              {section.heading}
            </motion.h2>
            <motion.p {...fadeInUp} className="text-muted-foreground mb-8 max-w-xl">
              {section.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.href}
                  {...fadeInUp}
                  transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
                >
                  <Link
                    to={item.href}
                    className="group block bg-card rounded-2xl p-6 shadow-system-card hover:shadow-system-card-hover hover:-translate-y-1 transition-all duration-250 ease-system-ease h-full"
                  >
                    <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                    <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default DienstenOverview;
