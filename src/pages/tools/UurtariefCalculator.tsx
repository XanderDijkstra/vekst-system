import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  Euro,
  Percent,
  Briefcase,
  Target,
  Calendar,
  Calculator,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://aannemersysteem.com";
const PAGE_URL = `${SITE_URL}/tools/uurtarief-calculator-aannemer`;

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const euroHour = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });

const benchmarks: { trade: string; range: string; note: string }[] = [
  { trade: "Schilders", range: "€45 – €60", note: "Seizoensgevoelig, veel prijs­concurrentie" },
  { trade: "Metselaars", range: "€50 – €70", note: "Fysiek werk, hoger tarief voor specialisme" },
  { trade: "Stukadoors", range: "€50 – €70", note: "Sierpleister en Venetiaans aan de top" },
  { trade: "Timmerlieden", range: "€55 – €75", note: "Interieur­timmerwerk rekent hoger dan ruwbouw" },
  { trade: "Loodgieters", range: "€55 – €80", note: "Spoedwerk en avonduren: toeslag van 25–50%" },
  { trade: "Elektriciens", range: "€60 – €85", note: "Installatie­verantwoordelijkheid drukt tarief omhoog" },
  { trade: "Dakdekkers", range: "€60 – €85", note: "Hoogwerker + veiligheid verhoogt overhead" },
  { trade: "Installateurs (zonnepanelen, warmtepomp)", range: "€65 – €90", note: "Certificering en kennis­intensief" },
  { trade: "Aannemers verbouwing", range: "€65 – €95", note: "Projectleiding en meerwerk­beheer extra verdisconteerd" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is een normaal uurtarief voor een aannemer?",
    a: "In Nederland liggen uurtarieven voor aannemers grofweg tussen €50 en €95 per uur, excl. btw. Het hangt sterk af van je specialisme, regio en ervaring. Schilders en stukadoors zitten vaak aan de onderkant; elektriciens, installateurs en verbouwaannemers aan de bovenkant. Zie de benchmarktabel hieronder voor een uitsplitsing per vakgebied.",
  },
  {
    q: "Waarom komen aannemers vaak op een lager tarief uit dan ze nodig hebben?",
    a: "Drie klassieke redenen: (1) ze rekenen met 40 declarabele uren per week, maar in de praktijk halen ze 25–30 echte factureerbare uren nadat je offertes, reistijd, ziekte en garantie meetelt, (2) ze vergeten overhead zoals bus, verzekeringen, pensioen en boekhouder, en (3) ze kijken naar wat de concurrent vraagt in plaats van naar wat ze zelf nodig hebben. Deze calculator draait de redenering om: eerst wat jij nodig hebt, dan pas wat de markt betaalt.",
  },
  {
    q: "Wat bedoelen jullie met 'declarabele uren'?",
    a: "Declarabele uren zijn de uren die je direct aan een klant kunt factureren - tijd op de bouwplaats waar de meter loopt. Niet-declarabel is alles eromheen: offertes maken, reistijd, admin, acquisitie, garantiewerk, opleidingen, reparaties aan eigen gereedschap. Voor een ZZP-aannemer is 65% tot 75% van je werkuren declarabel realistisch. Als je uitkomt op 90% ben je niet eerlijk tegen jezelf.",
  },
  {
    q: "Hoeveel overhead moet ik meetellen?",
    a: "Denk aan: bus (afschrijving + brandstof + verzekering + onderhoud), aansprakelijkheids­verzekering, arbeidsongeschiktheids­verzekering, gereedschap­afschrijving, telefoon, software, boekhouder, bankkosten, opleidingen, en ruimte voor pensioen. Voor een ZZP-aannemer zit dit vaak op €1.200 tot €2.000 per maand. Een aannemer met eigen werkplaats of personeel zit hoger.",
  },
  {
    q: "Moet ik btw meerekenen?",
    a: "Nee. Het uurtarief dat deze calculator uitrekent is excl. btw - dat is het bedrag dat op jouw boeken als omzet binnenkomt. De btw (21% voor de meeste aannemerswerkzaamheden, 9% voor woning­renovaties ouder dan 2 jaar op specifieke onderdelen) reken je er daarna bovenop voor de klant. Die btw gaat door naar de Belastingdienst, niet naar jou.",
  },
  {
    q: "Kan ik mijn tarief gewoon verhogen?",
    a: "In de meeste gevallen ja - aannemers onderschatten hun eigen positie systematisch. Twee praktische stappen: (1) verhoog eerst bij nieuwe klanten en laat bestaande relaties op het oude tarief staan tot het volgende project, (2) communiceer de verhoging niet als 'het is duurder geworden' maar als 'dit is ons standaardtarief voor dit type werk'. Wie gebaseerd op jouw berekende cijfer een faire prijs rekent, verliest zelden klanten - en de klanten die je wél verliest zaten toch op je krappe marge.",
  },
  {
    q: "Wat als ik in loondienst zit en zelfstandig wil worden?",
    a: "Reken je bruto maandsalaris om naar netto jaar en gebruik dat als startpunt bij 'gewenst netto jaarinkomen'. Houd er rekening mee dat je als zelfstandige ook vakantiegeld, 13e maand, pensioen­opbouw en werkgevers­bijdragen kwijt bent - tel die bij elkaar op en voeg ~20% toe bij je inkomensdoel. Pas dan zie je eerlijk wat je uurtarief moet zijn om hetzelfde over te houden.",
  },
];

// ---------- Schema.org ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Uurtarief calculator voor aannemers",
  url: PAGE_URL,
  description:
    "Gratis uurtarief calculator voor aannemers. Bereken wat je minimaal per uur moet rekenen op basis van je gewenste inkomen, werkbare uren, overhead en belasting.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Uurtarief calculator aannemer",
        item: PAGE_URL,
      },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Uurtarief calculator voor aannemers",
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

const UurtariefCalculator = () => {
  const [nettoJaar, setNettoJaar] = useState(50000);
  const [urenPerWeek, setUrenPerWeek] = useState(45);
  const [vakantieWeken, setVakantieWeken] = useState(5);
  const [declarablePct, setDeclarablePct] = useState(70);
  const [overheadMaand, setOverheadMaand] = useState(1500);
  const [belastingPct, setBelastingPct] = useState(35);

  const {
    minUurtarief,
    omzetNodig,
    omzetPerMaand,
    declarableHoursPerYear,
    extraPer50Cents,
  } = useMemo(() => {
    const werkWeken = Math.max(0, 52 - vakantieWeken);
    const totaleUrenPerJaar = urenPerWeek * werkWeken;
    const declarableHours = totaleUrenPerJaar * (declarablePct / 100);
    const overheadJaar = overheadMaand * 12;
    const brutoVoorBelasting = nettoJaar / Math.max(0.01, 1 - belastingPct / 100);
    const totaleOmzet = brutoVoorBelasting + overheadJaar;
    const tarief = declarableHours > 0 ? totaleOmzet / declarableHours : 0;
    return {
      minUurtarief: tarief,
      omzetNodig: totaleOmzet,
      omzetPerMaand: totaleOmzet / 12,
      declarableHoursPerYear: declarableHours,
      extraPer50Cents: 0.5 * declarableHours,
    };
  }, [nettoJaar, urenPerWeek, vakantieWeken, declarablePct, overheadMaand, belastingPct]);

  return (
    <PageShell>
      <Helmet>
        <title>Uurtarief calculator voor aannemers | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis uurtarief calculator voor aannemers. Bereken wat je minimaal per uur moet rekenen op basis van je inkomensdoel, werkbare uren, overhead en belasting."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Uurtarief calculator voor aannemers | Aannemer Systeem" />
        <meta
          property="og:description"
          content="Bereken in 30 seconden wat je minimaal per uur moet rekenen als aannemer. Gratis, geen registratie."
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
              Uurtarief aannemer
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Wat moet je als aannemer per uur rekenen?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Vul je inkomensdoel, werkbare uren, overhead en belasting in. De calculator rekent
            terug wat je <strong>minimaal per declarabel uur</strong> moet factureren om rond
            te komen - zonder jezelf onderbetaald te werken.
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
              <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                Jouw getallen
              </h2>

              <div className="space-y-6">
                <CalcInput
                  label="Gewenst netto jaarinkomen"
                  hint="Wat wil je na belasting overhouden voor jezelf? Wees eerlijk - niet wat je nu verdient, maar wat je nodig hebt."
                  value={nettoJaar}
                  onChange={setNettoJaar}
                  min={0}
                  max={500000}
                  step={1000}
                  prefix="€"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Werkbare uren per week"
                  hint="Totaal aantal uren dat je kunt werken. Inclusief offertes maken, reistijd en admin - niet alleen uren op de bouwplaats."
                  value={urenPerWeek}
                  onChange={setUrenPerWeek}
                  min={0}
                  max={80}
                  step={1}
                  slider
                  sliderMax={70}
                  icon={<Clock className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Vakantieweken per jaar"
                  hint="Vakantie + ziekte + feestdagen. De meeste ZZP-aannemers onderschatten dit - 5 à 6 weken is realistisch."
                  value={vakantieWeken}
                  onChange={setVakantieWeken}
                  min={0}
                  max={20}
                  step={1}
                  slider
                  sliderMax={12}
                  icon={<Calendar className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Declarabele uren"
                  hint="Van al je werkuren: welk percentage kun je direct aan een klant factureren? De rest gaat op aan offertes, admin, garantie, reistijd, acquisitie."
                  value={declarablePct}
                  onChange={setDeclarablePct}
                  min={0}
                  max={100}
                  step={1}
                  suffix="%"
                  slider
                  icon={<Target className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Overhead per maand"
                  hint="Vaste zakelijke kosten: bus, verzekeringen, telefoon, software, boekhouder, gereedschap-afschrijving, pensioenpotje, opleidingen."
                  value={overheadMaand}
                  onChange={setOverheadMaand}
                  min={0}
                  max={50000}
                  step={50}
                  prefix="€"
                  icon={<Briefcase className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Belasting + premies"
                  hint="Voor ZZP'ers ergens tussen 30% en 40% (IB + Zvw + buffer voor AOW). 35% is een redelijke grove aanname."
                  value={belastingPct}
                  onChange={setBelastingPct}
                  min={0}
                  max={60}
                  step={1}
                  suffix="%"
                  slider
                  sliderMax={50}
                  icon={<Percent className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Minimum uurtarief (excl. btw)"
                value={euroHour.format(minUurtarief)}
                caption={`Onder dit tarief werk je voor minder dan je inkomensdoel van ${euro.format(nettoJaar)} netto per jaar.`}
                icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Benodigde jaaromzet"
                  value={euro.format(omzetNodig)}
                  caption="netto-doel + overhead + belasting"
                  icon={<Briefcase className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Per maand"
                  value={euro.format(omzetPerMaand)}
                  caption="gemiddelde omzet die je maandelijks nodig hebt"
                  icon={<Calendar className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <CalcResultCard
                label="Declarabele uren per jaar"
                value={`${num.format(declarableHoursPerYear)} uur`}
                caption={`Dat is ${num.format(declarableHoursPerYear / 12)} uur per maand waarmee je bovenstaande omzet moet draaien.`}
                icon={<Clock className="h-4 w-4" strokeWidth={1.75} />}
              />

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Vuistregel
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  50 cent extra per uur factureren levert bij jouw volume{" "}
                  <span className="font-bold text-accent tabular-nums">
                    {euro.format(extraPer50Cents)}
                  </span>{" "}
                  extra per jaar op - puur door je prijs iets naar boven bij te stellen.
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
            Hoe bereken je je uurtarief als aannemer?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            De formule werkt achterstevoren: je begint bij wat je netto wilt overhouden en
            rekent terug naar het minimum dat je per declarabel uur moet factureren.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li>
                <span className="text-muted-foreground">1.</span> Brutoloon voor belasting ={" "}
                <span className="font-semibold">netto / (1 − belasting%)</span>
              </li>
              <li>
                <span className="text-muted-foreground">2.</span> Benodigde omzet ={" "}
                <span className="font-semibold">brutoloon + (overhead × 12)</span>
              </li>
              <li>
                <span className="text-muted-foreground">3.</span> Declarabele uren ={" "}
                <span className="font-semibold">
                  (52 − vakantie) × uren/week × declarabel%
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">4.</span> Uurtarief ={" "}
                <span className="font-semibold">omzet / declarabele uren</span>
              </li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> een timmerman
                wil €50.000 netto, werkt 45 uur per week, 5 weken vakantie, 70% declarabel,
                €1.500 overhead per maand, 35% belasting.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Bruto voor belasting: €50.000 / 0,65 ≈ €76.923</li>
                <li>Omzet nodig: €76.923 + €18.000 = €94.923</li>
                <li>Declarabele uren: (52 − 5) × 45 × 0,70 ≈ 1.481 uur</li>
                <li>
                  Uurtarief:{" "}
                  <span className="font-bold text-foreground">€94.923 / 1.481 ≈ €64</span>
                </li>
              </ul>
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
            Uurtarief benchmarks per vakgebied
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Gemiddelde marktarieven in Nederland, excl. btw. Gebruik ze als ijkpunt - jouw
            eigen berekende minimum is belangrijker dan het gemiddelde in je vakgebied.
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
                    Uurtarief (excl. btw)
                  </th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground hidden md:table-cell">
                    Toelichting
                  </th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr key={b.trade} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
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

      {/* 3 reasons */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            3 redenen waarom aannemers te weinig rekenen
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Als je op een lager tarief uitkomt dan de benchmarks hierboven, ligt het zelden
            aan de markt. Meestal zit het in één van deze drie denkfouten.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Te hoge billability aanname",
                text: "Veel aannemers rekenen met 40 factureerbare uren per week. In werkelijkheid gaan offertes, reistijd, admin en acquisitie eraf - en hou je 25–30 declarabele uren over. Reken met 65–75% en je cijfer wordt direct eerlijker.",
              },
              {
                title: "Overhead vergeten",
                text: "Bus, verzekeringen, pensioen, software, boekhouder, opleidingen - samen al snel €1.500 tot €2.000 per maand. Wie dat niet in zijn tarief verwerkt, subsidieert stiekem zijn eigen klanten.",
              },
              {
                title: "Vergelijken met de concurrent",
                text: "Als iedereen in je regio te weinig rekent, wordt dat 'het normale tarief'. Maar de concurrent is niet jouw benchmark - jouw vaste lasten en inkomensdoel zijn dat. Bereken eerst wat jij nodig hebt, onderhandel dan pas met de markt.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-system-card"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Related tool */}
          <motion.div
            {...fadeInUp}
            className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Verwante tool
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Leadwaarde calculator
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Nu je je uurtarief kent, is de volgende vraag: hoeveel ben je bereid uit te
              geven om een nieuwe klant binnen te halen? Onze leadwaarde calculator rekent
              uit wat één inkomende aanvraag je oplevert.
            </p>
            <Link
              to="/tools/leadwaarde-calculator"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Naar de leadwaarde calculator →
            </Link>
          </motion.div>
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

export default UurtariefCalculator;
