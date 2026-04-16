import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Euro,
  Users,
  Calculator,
  TrendingUp,
  Percent,
  ShieldCheck,
  Gift,
  Briefcase,
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
const PAGE_URL = `${SITE_URL}/tools/personeelskosten-calculator`;

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const pct = (v: number) => `${Math.round(v * 10) / 10}%`;

// 2025 NL employer cost percentages (indicative, simplified)
const WW_AWF = 0.0268; // WW-premie (Awf laag, vast contract)
const UFO = 0.0068; // Ufo-premie
const AOF = 0.0749; // Arbeidsongeschiktheidsfonds (Aof gedifferentieerd klein)
const ZVW_WG = 0.065; // Zvw werkgeversheffing
const VAKANTIEGELD = 0.08; // Wettelijk 8%

const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel kost een werknemer bovenop het bruto salaris?",
    a: "Reken als vuistregel op 30–40% bovenop het bruto salaris. Bij een bruto van €3.200/maand kom je al snel op €4.200–€4.500 aan totale werkgeverskosten. Het exacte percentage hangt af van je sector-CAO, pensioenregeling en verzuimpercentage.",
  },
  {
    q: "Welke premies betaal ik als werkgever?",
    a: "De belangrijkste wettelijke premies zijn: WW-premie (Awf, ~2,7% bij vast contract), Ufo-premie (~0,7%), Aof-premie (arbeidsongeschiktheidsfonds, ~7,5% voor kleine werkgevers), en de Zvw werkgeversheffing (~6,5%). Samen is dat al ~17% over het bruto loon inclusief vakantiegeld. Daarbovenop komen pensioen, verzuim en overige kosten.",
  },
  {
    q: "Is vakantiegeld verplicht?",
    a: "Ja. Elke werkgever in Nederland is wettelijk verplicht minimaal 8% vakantiegeld te betalen over het bruto jaarsalaris. Dit wordt meestal in mei of juni als apart bedrag uitbetaald, maar je reserveert het elke maand. Sommige CAO's kennen een hoger percentage.",
  },
  {
    q: "Wat als ik een ZZP'er inhuur in plaats van iemand in dienst neem?",
    a: "Een ZZP'er is per uur duurder (€50–€90/uur), maar je hebt geen premies, vakantiegeld, verzuim of pensioen. Reken de totale werkgeverskosten per uur uit (totaal per jaar / declarabele uren) en vergelijk dat met het ZZP-tarief. Vaak is een werknemer op jaarbasis goedkoper — maar je bent minder flexibel bij pieken en dalen.",
  },
  {
    q: "Hoe zit het met de bouw-CAO en pensioen (bpfBOUW)?",
    a: "De meeste bouwbedrijven vallen onder het verplichtgesteld pensioenfonds bpfBOUW. De werkgeverspremie ligt rond de 3–6% van het pensioengevend salaris, afhankelijk van de regeling (basis of aanvullend). Check je CAO of neem contact op met bpfBOUW voor je exacte premie.",
  },
  {
    q: "Wat zijn de verzuimkosten in de bouwsector?",
    a: "Het gemiddelde ziekteverzuim in de bouw lag in 2024 rond de 4,5%. Je bent als werkgever verplicht het loon 2 jaar lang door te betalen bij ziekte (70% het eerste jaar, 70% het tweede jaar, veel CAO's vullen aan tot 100% in jaar 1). Tel daar Arbo-dienst en eventuele vervanging bij op. 3–5% van het bruto jaarloon als verzuimreservering is realistisch.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Personeelskosten calculator voor aannemers",
  url: PAGE_URL,
  description:
    "Gratis personeelskosten calculator. Bereken wat een werknemer je écht kost: bruto salaris → totale werkgeverskosten inclusief premies, vakantiegeld, verzuim en werkkleding.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Personeelskosten calculator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Personeelskosten calculator voor aannemers",
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

const PersoneelskostenCalculator = () => {
  const [brutoMaand, setBrutoMaand] = useState(3200);
  const [pensioenPct, setPensioenPct] = useState(4);
  const [verzuimPct, setVerzuimPct] = useState(3);
  const [werkkleding, setWerkkleding] = useState(100);
  const [reiskosten, setReiskosten] = useState(150);
  const [opleiding, setOpleiding] = useState(50);

  const results = useMemo(() => {
    const brutoJaar = brutoMaand * 12;
    const vakantiegeld = brutoJaar * VAKANTIEGELD;
    const brutoInclVak = brutoJaar + vakantiegeld;

    // Wettelijke premies (over bruto incl. vakantiegeld)
    const premieWW = brutoInclVak * WW_AWF;
    const premieUfo = brutoInclVak * UFO;
    const premieAof = brutoInclVak * AOF;
    const premieZvw = brutoInclVak * ZVW_WG;
    const totaalPremies = premieWW + premieUfo + premieAof + premieZvw;

    // Pensioen (werkgeversdeel)
    const pensioen = brutoJaar * (pensioenPct / 100);

    // Verzuimkosten (doorbetaling + Arbo)
    const verzuim = brutoJaar * (verzuimPct / 100);

    // Overige maandelijkse kosten → per jaar
    const overigJaar = (werkkleding + reiskosten + opleiding) * 12;

    const totaalJaar = brutoJaar + vakantiegeld + totaalPremies + pensioen + verzuim + overigJaar;
    const totaalMaand = totaalJaar / 12;
    const toeslag = brutoJaar > 0 ? ((totaalJaar - brutoJaar) / brutoJaar) * 100 : 0;

    return {
      brutoJaar,
      vakantiegeld,
      totaalPremies,
      premieWW,
      premieUfo,
      premieAof,
      premieZvw,
      pensioen,
      verzuim,
      overigJaar,
      totaalJaar,
      totaalMaand,
      toeslag,
    };
  }, [brutoMaand, pensioenPct, verzuimPct, werkkleding, reiskosten, opleiding]);

  return (
    <PageShell>
      <Helmet>
        <title>Personeelskosten calculator voor aannemers | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis personeelskosten calculator. Bereken wat een werknemer je écht kost als aannemer: bruto salaris, premies, vakantiegeld, verzuim, werkkleding en meer."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Personeelskosten calculator voor aannemers | Aannemer Systeem" />
        <meta property="og:description" content="Bereken wat een werknemer écht kost. Gratis, geen registratie." />
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
              Personeelskosten
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Wat kost een werknemer écht?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Een bruto maandsalaris van €3.200 kost je als werkgever geen €3.200. Vul het
            salaris in en zie direct wat je écht kwijt bent — inclusief premies, vakantiegeld,
            verzuim en werkkleding.
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
                Medewerkergegevens
              </h2>

              <div className="space-y-6">
                <CalcInput
                  label="Bruto maandsalaris"
                  hint="Het bruto maandsalaris dat op het contract staat — niet wat de werknemer netto ontvangt."
                  value={brutoMaand}
                  onChange={setBrutoMaand}
                  min={0}
                  max={15000}
                  step={50}
                  prefix="€"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Pensioen werkgeversdeel"
                  hint="Bouw-CAO: gemiddeld 3–6% werkgeversbijdrage. Check je pensioenregeling of CAO."
                  value={pensioenPct}
                  onChange={setPensioenPct}
                  min={0}
                  max={15}
                  step={0.5}
                  suffix="%"
                  slider
                  sliderMax={10}
                  icon={<ShieldCheck className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Verzuimkosten"
                  hint="Gemiddeld verzuim in de bouw is 4–5%. Hierin zit: loondoorbetaling bij ziekte, Arbo-dienst, vervangingskosten."
                  value={verzuimPct}
                  onChange={setVerzuimPct}
                  min={0}
                  max={15}
                  step={0.5}
                  suffix="%"
                  slider
                  sliderMax={10}
                  icon={<Percent className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Werkkleding & PBM per maand"
                  hint="Werkschoenen, veiligheidshelm, handschoenen, werkbroeken, veiligheidsbril. Reken €75–€150/maand gespreid."
                  value={werkkleding}
                  onChange={setWerkkleding}
                  min={0}
                  max={500}
                  step={10}
                  prefix="€"
                  icon={<Users className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Reiskostenvergoeding per maand"
                  hint="Woon-werkverkeer en/of busje. Belastingvrij tot €0,23/km (2025)."
                  value={reiskosten}
                  onChange={setReiskosten}
                  min={0}
                  max={1000}
                  step={10}
                  prefix="€"
                  icon={<Briefcase className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Opleiding & cursussen per maand"
                  hint="VCA, BHV, vakopleidingen, toolbox-meetings. Verplicht in de bouw. Gespreid €30–€100/maand."
                  value={opleiding}
                  onChange={setOpleiding}
                  min={0}
                  max={500}
                  step={10}
                  prefix="€"
                  icon={<Gift className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Totale werkgeverskosten per jaar"
                value={euro.format(results.totaalJaar)}
                caption={`Dat is ${euro.format(results.totaalMaand)} per maand — ${pct(results.toeslag)} bovenop het bruto salaris`}
                icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Bruto jaarsalaris"
                  value={euro.format(results.brutoJaar)}
                  caption="12 × bruto maandsalaris"
                  icon={<Users className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Vakantiegeld (8%)"
                  value={euro.format(results.vakantiegeld)}
                  caption="wettelijk verplicht, uitbetaling mei/juni"
                  icon={<Gift className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              {/* Breakdown */}
              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-border bg-card p-5 shadow-system-card"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Kostenopbouw
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Bruto jaarsalaris", amount: results.brutoJaar },
                    { label: "Vakantiegeld (8%)", amount: results.vakantiegeld },
                    { label: "WW-premie (Awf)", amount: results.premieWW },
                    { label: "Ufo-premie", amount: results.premieUfo },
                    { label: "Aof-premie", amount: results.premieAof },
                    { label: "Zvw werkgeversheffing", amount: results.premieZvw },
                    { label: "Pensioen werkgeversdeel", amount: results.pensioen },
                    { label: "Verzuimkosten", amount: results.verzuim },
                    { label: "Werkkleding, reis, opleiding", amount: results.overigJaar },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground tabular-nums">
                        {euro.format(item.amount)}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="font-semibold text-foreground">Totaal</span>
                    <span className="font-bold text-accent tabular-nums text-base">
                      {euro.format(results.totaalJaar)}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Vuistregel
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  Reken als vuistregel op{" "}
                  <span className="font-bold text-accent">
                    {pct(results.toeslag)}
                  </span>{" "}
                  bovenop het bruto salaris. Bij een bruto van {euro.format(brutoMaand)}/maand
                  is dat {euro.format(results.totaalMaand - brutoMaand)} extra per maand aan
                  verborgen werkgeverskosten.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Waarom kost een werknemer zoveel meer dan zijn salaris?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Het bruto salaris is slechts het startpunt. De overheid verplicht werkgevers om
            premies af te dragen voor werkloosheid, arbeidsongeschiktheid en zorgverzekering.
            Daarbovenop komen verplicht vakantiegeld, pensioen, verzuimkosten en praktische
            kosten die in de bouw hoger liggen dan in andere sectoren.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <div className="space-y-2 text-sm">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> een timmerman
                met €3.200 bruto per maand.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                <li>Bruto per jaar: €38.400</li>
                <li>+ vakantiegeld (8%): €3.072</li>
                <li>+ wettelijke premies (~17%): ~€7.050</li>
                <li>+ pensioen werkgeversdeel (4%): €1.536</li>
                <li>+ verzuimreservering (3%): €1.152</li>
                <li>+ werkkleding, reis, opleiding: €3.600</li>
                <li className="pt-2 border-t border-border">
                  <span className="font-bold text-foreground">
                    Totaal: ~€54.810 per jaar = ~€4.568 per maand
                  </span>
                </li>
                <li className="text-foreground font-medium">
                  Dat is 43% boven het bruto salaris.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            3 dingen die aannemers vergeten bij hun eerste werknemer
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Loondoorbetaling bij ziekte",
                text: "Je betaalt 2 jaar lang het loon door als je werknemer ziek wordt — ook bij langdurige uitval. Veel startende werkgevers verzekeren zich hier niet voor en worden verrast door een rekening van €50.000+. Een verzuimverzekering kost ~2% van de loonsom maar vangt het ergste op.",
              },
              {
                title: "Gereedschap en materieel",
                text: "Je werknemer heeft gereedschap nodig. Basisset (accuboormachine, zaag, meetgereedschap, veiligheidsuitrusting): €2.000–€4.000 startinvestering. Tel daar jaarlijkse vervanging en keuring bij op. Dit staat niet op de loonstrook, maar het is wel een personeelskost.",
              },
              {
                title: "Administratie en begeleiding",
                text: "Loonadministratie, personeelsdossier, functioneringsgesprekken, VCA-registratie, RI&E aanpassen. Je besteedt 2–4 uur per maand aan HR-taken per werknemer. Dat is onzichtbare overhead die je als ZZP'er niet had. Reken het door in je projectmarges.",
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

          {/* Related tools */}
          <motion.div
            {...fadeInUp}
            className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Verwante tools
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <Link
                to="/tools/projectmarge-calculator"
                className="group flex items-center gap-3 text-sm"
              >
                <Euro className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Projectmarge calculator
                  </span>
                  <p className="text-xs text-muted-foreground">Reken personeelskosten door in je offerte</p>
                </div>
              </Link>
              <Link
                to="/tools/uurtarief-calculator-aannemer"
                className="group flex items-center gap-3 text-sm"
              >
                <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Uurtarief calculator
                  </span>
                  <p className="text-xs text-muted-foreground">Vergelijk: ZZP blijven of personeel aannemen?</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
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

export default PersoneelskostenCalculator;
