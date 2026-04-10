import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import {
  Globe, PhoneOff, Star, BarChart3, MessageSquare, UserCheck,
  Settings, Zap, Plug, Bot,
} from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://aannemersysteem.com";

const sections = [
  {
    heading: "Systemen",
    description: "Digitale systemen die 24/7 voor je werken — elk ontworpen om een specifiek probleem op te lossen.",
    items: [
      { icon: Globe, title: "Lead Generatie Website", href: "/diensten/lead-generatie", description: "Een website die nieuwe klanten aantrekt en offerte aanvragen automatisch verzamelt." },
      { icon: PhoneOff, title: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie", description: "Automatisch een bericht sturen wanneer je een oproep mist." },
      { icon: UserCheck, title: "Lead Follow-Up", href: "/diensten/lead-follow-up", description: "Automatische opvolging van nieuwe leads via SMS en e-mail." },
      { icon: Star, title: "Review Systeem", href: "/diensten/review-funnel", description: "Verzamel automatisch Google reviews van tevreden klanten." },
      { icon: BarChart3, title: "Marketing Campagnes", href: "/diensten/marketing-campagnes", description: "Bereik je doelgroep automatisch met de juiste boodschap." },
      { icon: MessageSquare, title: "All-in-One Inbox", href: "/diensten/all-in-one-inbox", description: "Al je berichten op één plek — SMS, e-mail, WhatsApp en meer." },
    ],
  },
  {
    heading: "Services",
    description: "Van strategie tot implementatie — wij maken de digitale infrastructuur die jouw aannemersbedrijf nodig heeft.",
    items: [
      { icon: Settings, title: "Digitalisering Aannemers", href: "/diensten/digitalisering-aannemers", description: "Van papier naar digitaal. Wij helpen je bedrijf moderniseren." },
      { icon: Zap, title: "Automatisering Aannemers", href: "/diensten/automatisering-aannemers", description: "Automatiseer repetitieve taken en bespaar uren per week." },
      { icon: Plug, title: "Software Integraties", href: "/diensten/software-integraties", description: "Koppel je bestaande tools en laat ze naadloos samenwerken." },
      { icon: Bot, title: "AI Oplossingen", href: "/diensten/ai-oplossingen", description: "Gebruik AI om slimmer te werken, niet harder." },
    ],
  },
];

const allDiensten = sections.flatMap((s) => s.items);

const dienstenSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Diensten | Aannemer Systeem",
  url: `${SITE_URL}/diensten`,
  description: "Digitale systemen en services voor aannemers: lead generatie, review funnel, marketing campagnes en automatisering.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE_URL}/diensten` },
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
      <title>Diensten | Aannemer Systeem</title>
      <meta name="description" content="Ontdek onze digitale systemen en services voor aannemers: lead generatie, review funnel, marketing campagnes, automatisering en meer." />
      <link rel="canonical" href={`${SITE_URL}/diensten`} />
      <meta property="og:title" content="Diensten | Aannemer Systeem" />
      <meta property="og:description" content="Ontdek onze digitale systemen en services voor aannemers: lead generatie, review funnel, marketing campagnes, automatisering en meer." />
      <meta property="og:url" content={`${SITE_URL}/diensten`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">{JSON.stringify(dienstenSchema)}</script>
    </Helmet>
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Onze diensten</motion.p>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">Alles wat je nodig hebt om te groeien</motion.h1>
        <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          Van slimme systemen tot volledige implementatie — ontdek hoe wij aannemers helpen digitaliseren en automatiseren.
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
