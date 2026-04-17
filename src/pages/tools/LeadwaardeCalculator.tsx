import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Inbox,
  Target,
  Euro,
  TrendingUp,
  Calendar,
  ArrowRight,
  Calculator,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://aannemersysteem.com";
const PAGE_URL = `${SITE_URL}/tools/leadwaarde-calculator`;

// ---------- Formatters ----------

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const euroPrecise = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });

// ---------- Benchmarks content ----------

const benchmarks: { trade: string; range: string; note: string }[] = [
  { trade: "Loodgieters & spoed­werk", range: "30 – 45%", note: "Hoge urgentie, korte beslisroute" },
  { trade: "Dakdekkers", range: "20 – 30%", note: "Offertes vaker vergeleken, langere cyclus" },
  { trade: "Schilders", range: "25 – 35%", note: "Gevoelig voor reviews en snelheid van offerte" },
  { trade: "Aannemers grote verbouwing", range: "10 – 20%", note: "Lange sales cycle, veel concurrentie" },
  { trade: "Installateurs (zonnepanelen, warmtepomp)", range: "15 – 25%", note: "Prijsvergelijking speelt grote rol" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is een lead waard voor een aannemer?",
    a: "De leadwaarde is de gemiddelde omzet die je verdient aan één aanvraag, voordat je die omzet binnenhaalt. De formule is simpel: scorings­percentage × gemiddelde projectwaarde. Als je 25% van je aanvragen wint en een gemiddeld project €8.000 oplevert, is elke aanvraag gemiddeld €2.000 waard - onafhankelijk of je hem wint of verliest. Dat cijfer is het startpunt voor beslissingen over marketing­budget, follow-up­snelheid en kwalificatie.",
  },
  {
    q: "Hoe verhoog ik mijn scorings­percentage?",
    a: "De drie grootste hefbomen voor aannemers zijn: (1) sneller reageren - wie binnen 5 minuten belt scoort ~4x beter dan wie na 24 uur reageert, (2) je review­score verhogen zodat de aanvrager je offerte serieuzer neemt, en (3) betere kwalificatie zodat je geen tijd verspilt aan aanvragen die nooit een project worden. Ons lead follow-up systeem en review funnel zijn specifiek gebouwd voor deze drie hefbomen.",
  },
  {
    q: "Moet ik btw meerekenen in de projectwaarde?",
    a: "Nee - de calculator werkt standaard met bedragen excl. btw, want dat is de omzet die op jouw boeken staat. Als je liever met inclusief btw rekent, zet de toggle boven de calculator om. Belangrijk: gebruik consequent hetzelfde basis­bedrag. Mixen van incl./excl. btw over verschillende berekeningen leidt altijd tot fouten.",
  },
  {
    q: "Wat is een normaal scorings­percentage in de bouw?",
    a: "Het verschilt sterk per type werk. Spoed­werk van loodgieters zit vaak op 30–45% omdat klanten meteen willen beslissen. Grote verbouwingen zitten eerder op 10–20% omdat mensen 3 à 4 offertes vergelijken. Zie de benchmarktabel hieronder. Het eerlijke antwoord: je eigen cijfer kennen is belangrijker dan een gemiddelde - meet een paar maanden en gebruik dat als basis.",
  },
  {
    q: "Waar haal ik mijn eigen cijfers vandaan als ik ze niet bijhoud?",
    a: "Begin simpel: tel een maand lang al je inkomende aanvragen (via telefoon, formulier, WhatsApp, alles) en tel hoeveel daarvan een bevestigde opdracht werden. Voor de projectwaarde: pak je laatste 10 afgeronde projecten en neem het gemiddelde. Binnen vier weken heb je drie realistische getallen om in deze calculator te stoppen. Daarna weet je beter welke marketing­investeringen slim zijn.",
  },
  {
    q: "Wat mag ik dan maximaal uitgeven aan een lead?",
    a: "Een vuistregel: je max kost per lead = leadwaarde × (1 – bruto­marge). Als een lead gemiddeld €2.000 oplevert en je hebt 30% bruto­marge, kun je in theorie €600 per lead uitgeven en net break-even draaien. In de praktijk wil je een comfortabele buffer - veel aannemers houden 40–50% van de leadwaarde aan als absolute max. Binnenkort publiceren we een aparte max-CPC calculator die dit per kanaal doorrekent.",
  },
];

// ---------- Schema.org ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leadwaarde calculator voor aannemers",
  url: PAGE_URL,
  description:
    "Gratis leadwaarde calculator voor aannemers. Bereken wat een lead jouw bedrijf oplevert: vul aanvragen per maand, scorings­percentage en projectwaarde in.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Leadwaarde calculator",
        item: PAGE_URL,
      },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Leadwaarde calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ---------- Component ----------

const LeadwaardeCalculator = () => {
  const [aanvragen, setAanvragen] = useState(20);
  const [conversie, setConversie] = useState(25);
  const [projectwaarde, setProjectwaarde] = useState(8000);
  const [inclBtw, setInclBtw] = useState(false);

  const { projectsPerMonth, revenuePerMonth, valuePerLead, yearRevenue, maxCpa } = useMemo(() => {
    const projects = (aanvragen * conversie) / 100;
    const revenue = projects * projectwaarde;
    // If the user entered an incl-btw amount, strip the btw (21%) to get the ex-btw number
    // we show in the headline. Keep the hint visible in the label.
    const revEx = inclBtw ? revenue / 1.21 : revenue;
    const valuePer = (conversie / 100) * (inclBtw ? projectwaarde / 1.21 : projectwaarde);
    return {
      projectsPerMonth: projects,
      revenuePerMonth: revEx,
      valuePerLead: valuePer,
      yearRevenue: revEx * 12,
      maxCpa: valuePer * 0.3,
    };
  }, [aanvragen, conversie, projectwaarde, inclBtw]);

  return (
    <PageShell>
      <Helmet>
        <title>Leadwaarde calculator voor aannemers | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis leadwaarde calculator voor aannemers. Vul aanvragen per maand, scorings­percentage en projectwaarde in - zie direct wat een lead jou oplevert."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta
          property="og:title"
          content="Leadwaarde calculator voor aannemers | Aannemer Systeem"
        />
        <meta
          property="og:description"
          content="Bereken in 30 seconden wat een lead jouw aannemersbedrijf oplevert. Gratis, geen registratie."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
            <Link
              to="/tools"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Rekentools
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Leadwaarde
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Wat is een lead jou waard?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Vul je eigen getallen in en zie direct hoeveel omzet jouw leads opleveren - én wat
            je in theorie mag uitgeven om meer van dezelfde leads binnen te halen.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Inputs */}
            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-system-card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  Jouw getallen
                </h2>
                <label className="flex items-center gap-3 text-xs font-medium text-muted-foreground cursor-pointer">
                  <span>Excl. btw</span>
                  <Switch checked={inclBtw} onCheckedChange={setInclBtw} />
                  <span>Incl. btw</span>
                </label>
              </div>

              <div className="space-y-6">
                <CalcInput
                  label="Aanvragen per maand"
                  hint="Alle inkomende offerte-aanvragen: telefoon, formulier, WhatsApp, e-mail - alles bij elkaar."
                  value={aanvragen}
                  onChange={setAanvragen}
                  min={0}
                  max={1000}
                  step={1}
                  slider
                  sliderMax={100}
                  icon={<Inbox className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Scorings­percentage"
                  hint="Van elke 100 aanvragen: hoeveel worden er uiteindelijk een bevestigde opdracht?"
                  value={conversie}
                  onChange={setConversie}
                  min={0}
                  max={100}
                  step={1}
                  suffix="%"
                  slider
                  icon={<Target className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label={`Gemiddelde projectwaarde (${inclBtw ? "incl." : "excl."} btw)`}
                  hint="Pak je laatste 10 projecten en neem het gemiddelde. Liever aan de voorzichtige kant dan te optimistisch."
                  value={projectwaarde}
                  onChange={setProjectwaarde}
                  min={0}
                  max={1000000}
                  step={100}
                  prefix="€"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Omzet per maand (excl. btw)"
                value={euro.format(revenuePerMonth)}
                caption={`${num.format(projectsPerMonth)} projecten per maand uit ${aanvragen} aanvragen`}
                icon={<TrendingUp className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Leadwaarde"
                  value={euroPrecise.format(valuePerLead)}
                  caption="per inkomende aanvraag - win of verlies"
                  icon={<Target className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Jaaromzet uit leads"
                  value={euro.format(yearRevenue)}
                  caption="op basis van 12× dezelfde maand"
                  icon={<Calendar className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Vuistregel marketingbudget
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  Bij een brutomarge van 30% mag één nieuwe lead je ongeveer{" "}
                  <span className="font-bold text-accent tabular-nums">
                    {euroPrecise.format(maxCpa)}
                  </span>{" "}
                  kosten voordat je break-even draait. Veel aannemers houden 40–50% van de
                  leadwaarde aan als plafond.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula explainer */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Hoe bereken je leadwaarde?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            De formule is eenvoudig en werkt in elke aannemersbranche:
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="font-mono text-sm md:text-base text-foreground">
              Leadwaarde = scorings­percentage × gemiddelde projectwaarde
            </p>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> een dakdekker
                wint 25% van zijn aanvragen en doet gemiddeld €6.000 per project.
              </p>
              <p className="text-sm text-muted-foreground">
                Leadwaarde = 25% × €6.000 ={" "}
                <span className="font-bold text-foreground tabular-nums">€1.500 per lead</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Oftewel: elke inkomende aanvraag is vóór­af al €1.500 "waard" - dat bepaalt
                hoeveel hij mag uitgeven aan marketing, follow-up en nieuwe kanalen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Wat is een goede conversie voor aannemers?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Benchmarks verschillen sterk per vakgebied. Gebruik ze als eerste kalibratie - je
            eigen gemeten percentage is altijd belangrijker.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-system-card"
          >
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">
                    Vakgebied
                  </th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">
                    Scorings­percentage
                  </th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground hidden md:table-cell">
                    Toelichting
                  </th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr
                    key={b.trade}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}
                  >
                    <td className="px-4 md:px-6 py-3 text-foreground">{b.trade}</td>
                    <td className="px-4 md:px-6 py-3 text-foreground font-semibold tabular-nums">
                      {b.range}
                    </td>
                    <td className="px-4 md:px-6 py-3 text-muted-foreground hidden md:table-cell">
                      {b.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 3 ways to increase */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            3 manieren om je leadwaarde te verhogen
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Je leadwaarde stijgt als je óf je scorings­percentage óf je project­waarde omhoog
            brengt. Deze drie hefbomen werken voor vrijwel elk aannemersbedrijf.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Sneller reageren",
                text: "Leads die binnen 5 minuten gebeld worden scoren tot 4x beter dan leads die pas na 24 uur opgevolgd worden. Automatische follow-up is de goedkoopste winst.",
                href: "/diensten/lead-follow-up",
                cta: "Lead follow-up systeem",
              },
              {
                title: "Beter kwalificeren",
                text: "Een goede intake­flow filtert budget-shoppers eruit voordat ze je offerte-tijd vreten. Minder offertes maken, hogere hit-rate.",
                href: "/diensten/lead-generatie",
                cta: "Lead generatie systeem",
              },
              {
                title: "Meer reviews verzamelen",
                text: "Bij gelijke offerte kiezen mensen de aannemer met 180 reviews, niet die met 12. Een review funnel brengt je review­score structureel omhoog.",
                href: "/diensten/review-funnel",
                cta: "Review funnel",
              },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-system-card"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
                <Link
                  to={item.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Veelgestelde vragen
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
};

export default LeadwaardeCalculator;
