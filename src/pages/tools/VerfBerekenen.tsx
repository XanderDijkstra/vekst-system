import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Paintbrush,
  Ruler,
  Layers,
  Package,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import ContractorToolsCrossLink from "@/components/tools/ContractorToolsCrossLink";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://www.vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/verktoy/maling-kalkulator`;

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });

interface VerfType {
  label: string;
  dekkingM2PerLiter: number; // m² per liter
  aanbevolenLagen: number;
}

const VERFTYPEN: VerfType[] = [
  { label: "Veggmaling (latex)", dekkingM2PerLiter: 10, aanbevolenLagen: 2 },
  { label: "Veggmaling (akrylat)", dekkingM2PerLiter: 9, aanbevolenLagen: 2 },
  { label: "Lakkmaling (alkyd)", dekkingM2PerLiter: 12, aanbevolenLagen: 2 },
  { label: "Lakkmaling (vannbasert)", dekkingM2PerLiter: 11, aanbevolenLagen: 2 },
  { label: "Grunning (primer)", dekkingM2PerLiter: 10, aanbevolenLagen: 1 },
  { label: "Trebeis (dekkende)", dekkingM2PerLiter: 10, aanbevolenLagen: 2 },
  { label: "Trebeis (transparent)", dekkingM2PerLiter: 8, aanbevolenLagen: 2 },
  { label: "Utendørs veggmaling", dekkingM2PerLiter: 7, aanbevolenLagen: 2 },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hvor mye maling trenger jeg per m²?",
    a: "Det avhenger av malingtypen. Veggmaling (latex) dekker i gjennomsnitt 10 m² per liter. Utendørs veggmaling dekker mindre: ~7 m² per liter på grunn av det ruere underlaget. Lakkmaling ligger rundt 11–12 m² per liter. Gang med antall strøk (standard 2) for å beregne totalforbruket.",
  },
  {
    q: "Hvor mange strøk maling må jeg legge på?",
    a: "Standard 2 dekkende strøk. Skal du fra mørk til lys farge? Da av og til 3 strøk. Bruker du grunning på et nytt underlag? Tell det som et ekstra strøk. Ved transparent beis er 2 strøk også normen, men dekningen per strøk er lavere enn ved dekkende maling.",
  },
  {
    q: "Må jeg trekke fra vinduer og dører fra flaten?",
    a: "Ja. En standard innerdør er ~1,6 m², et vindu varierer, men i snitt 1–2 m². Trekk total vindus- og dørflate fra veggflaten din. Gjør du ikke det, bestiller du ~10–15 % for mye - ikke dramatisk, men unødvendig.",
  },
  {
    q: "Hva er forskjellen mellom latex og akrylat?",
    a: "Begge er vannbaserte veggmalinger. Akrylat er litt mer slitesterk og fuktbestandig - egnet for kjøkken, bad og travle ganger. Latex er billigere og fint for soverom og stuer. Når det gjelder dekning er det liten forskjell: 9–10 m² per liter.",
  },
  {
    q: "Hvor mye koster det å få et rom malt?",
    a: "Regn for innvendig maling på 100-170 kr per m² (arbeid + material). En stue på 35 m² veggflate koster da ~3 400-5 900 kr. Utvendig maling er dyrere: 180-360 kr per m² på grunn av stillas, forberedelse og væravhengighet.",
  },
  {
    q: "Hvilket spann skal jeg kjøpe: 2,5L, 5L eller 10L?",
    a: "Større spann er billigere per liter. Tommelfingerregel: trenger du mer enn 4 liter, ta et 5L-spann. Mer enn 8 liter? Ta 10L. Husk at åpnet maling har begrenset holdbarhet (1–2 år ved god oppbevaring). Kjøp derfor ikke 10L hvis du bare trenger 6 liter.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Maling kalkulator - hvor mye maling trenger jeg?",
  url: PAGE_URL,
  description:
    "Gratis maling kalkulator. Beregn hvor mange liter maling og spann du trenger. Velg malingtype, fyll inn m² - ferdig.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Maling kalkulator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Maling kalkulator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
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

const VerfBerekenen = () => {
  const [oppervlakte, setOppervlakte] = useState(35);
  const [verfIdx, setVerfIdx] = useState(0); // default veggmaling latex
  const [lagen, setLagen] = useState(2);
  const [blikGrootte, setBlikGrootte] = useState(5); // liter

  const verfType = VERFTYPEN[verfIdx] ?? VERFTYPEN[0];

  const results = useMemo(() => {
    const liter1Laag = verfType.dekkingM2PerLiter > 0
      ? oppervlakte / verfType.dekkingM2PerLiter
      : 0;
    const totaalLiter = liter1Laag * lagen;
    // Add 5% extra for waste/rollers
    const literMetBuffer = totaalLiter * 1.05;
    const aantalBlikken = blikGrootte > 0 ? Math.ceil(literMetBuffer / blikGrootte) : 0;
    const literBesteld = aantalBlikken * blikGrootte;

    return {
      liter1Laag,
      totaalLiter,
      literMetBuffer,
      aantalBlikken,
      literBesteld,
      literOver: literBesteld - literMetBuffer,
    };
  }, [oppervlakte, verfType, lagen, blikGrootte]);

  return (
    <PageShell>
      <Helmet>
        <title>Maling kalkulator - hvor mye maling trenger jeg? | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis maling kalkulator: beregn hvor mange liter maling og spann du trenger. Velg malingtype, fyll inn flaten din og bestill akkurat nok."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Maling kalkulator - hvor mye maling trenger jeg?" />
        <meta property="og:description" content="Beregn på 10 sekunder hvor mye maling du trenger. Gratis, ingen registrering." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
            <Link to="/verktoy" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">
              Kalkulatorer
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Maling kalkulator
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hvor mye maling trenger jeg?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Velg malingtype, fyll inn flaten og antall strøk. Kalkulatoren gir
            deg eksakt antall liter og spann - ingen gjetting, ingen mangel underveis.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Inputs */}
            <motion.div {...fadeInUp} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-system-card">
              <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                Dine data
              </h2>
              <div className="space-y-6">
                {/* Verftype selector */}
                <div>
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                    <Paintbrush className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
                    Malingtype
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {VERFTYPEN.map((v, i) => (
                      <button
                        key={v.label}
                        type="button"
                        onClick={() => {
                          setVerfIdx(i);
                          setLagen(v.aanbevolenLagen);
                        }}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all text-left ${
                          i === verfIdx
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border bg-background text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Dekning: ~{verfType.dekkingM2PerLiter} m² per liter · anbefalt {verfType.aanbevolenLagen} strøk
                  </p>
                </div>

                <CalcInput
                  label="Flate"
                  hint="Total flate som skal males. Trekk fra vinduer og dører. Tips: en standard innerdør er ~1,6 m²."
                  value={oppervlakte}
                  onChange={setOppervlakte}
                  min={0}
                  max={500}
                  step={0.5}
                  suffix="m²"
                  slider
                  sliderMax={120}
                  sliderStep={0.5}
                  icon={<Ruler className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Antall strøk"
                  hint="2 strøk er standard. Ved mørk til lys farge av og til 3. Grunning teller som 1 ekstra strøk."
                  value={lagen}
                  onChange={setLagen}
                  min={1}
                  max={5}
                  step={1}
                  slider
                  sliderMax={4}
                  icon={<Layers className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Spannstørrelse"
                  hint="Vanlige størrelser: 1L, 2,5L, 5L og 10L. Større spann er billigere per liter."
                  value={blikGrootte}
                  onChange={setBlikGrootte}
                  min={0.5}
                  max={20}
                  step={0.5}
                  suffix="liter"
                  icon={<Package className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Totalt maling nødvendig"
                value={`${num.format(results.literMetBuffer)} liter`}
                caption={`${num.format(results.totaalLiter)} liter for ${lagen} strøk + 5 % buffer for ruller og søl`}
                icon={<Paintbrush className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Spann å bestille"
                  value={`${results.aantalBlikken}× ${blikGrootte}L`}
                  caption={`${num.format(results.literBesteld)} liter totalt`}
                  icon={<Package className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Per strøk"
                  value={`${num.format(results.liter1Laag)} liter`}
                  caption={`ved ${verfType.dekkingM2PerLiter} m²/liter dekning`}
                  icon={<Layers className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              {/* Dekking tabell */}
              <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-card p-5 shadow-system-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Dekning per malingtype
                </p>
                <div className="space-y-1.5 text-sm">
                  {VERFTYPEN.map((v) => (
                    <div key={v.label} className={`flex items-center justify-between py-1 ${v.label === verfType.label ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                      <span>{v.label}</span>
                      <span className="tabular-nums">{v.dekkingM2PerLiter} m²/liter</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="rounded-2xl border border-dashed border-border bg-muted/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tips</p>
                <p className="mt-2 text-foreground leading-relaxed text-sm">
                  Dekningen på etiketten gjelder for et glatt, grunnet underlag. På
                  grove eller sugende flater (ny puss, ubehandlet tre) kan
                  forbruket ligge 20–30 % høyere. Regn i så fall med et ekstra strøk.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Hvordan beregner du hvor mye maling du trenger?
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card">
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li><span className="text-muted-foreground">1.</span> Maling per strøk = <span className="font-semibold">flate / dekning per liter</span></li>
              <li><span className="text-muted-foreground">2.</span> Totalt = <span className="font-semibold">maling per strøk × antall strøk</span></li>
              <li><span className="text-muted-foreground">3.</span> + 5 % buffer = <span className="font-semibold">totalt × 1,05</span></li>
              <li><span className="text-muted-foreground">4.</span> Spann = <span className="font-semibold">⌈liter / spannstørrelse⌉</span></li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eksempel:</span> stue 35 m², veggmaling latex (10 m²/liter), 2 strøk, spann à 5L.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Per strøk: 35 / 10 = 3,5 liter</li>
                <li>2 strøk: 3,5 × 2 = 7,0 liter</li>
                <li>Med 5 % buffer: 7,0 × 1,05 = 7,35 liter</li>
                <li>Spann: 7,35 / 5 = 1,47 → <span className="font-bold text-foreground">2 spann à 5L å bestille</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            5 malingstips fra malere
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Alltid grunning på ny puss", text: "Ny puss suger opp maling som en svamp. Uten grunning trenger du 3–4 strøk i stedet for 2. Grunning er billigere - og sparer til syvende og sist maling." },
              { title: "Rør før bruk, ikke rist", text: "Risting skaper luftbobler som tørker som små kratere. Rør sakte med en malingspinne eller en mikser på lav hastighet." },
              { title: "Skjær til med pensel, rull flaten", text: "Bruk pensel til kanter, hjørner og karmer (tilskjæring). Gjør deretter den store flaten med en rull. Jobb vått-i-vått: skjær til en vegg og rull rett etterpå, slik at det ikke oppstår en tørkekant." },
              { title: "Kjøp alt fra samme batch", text: "Akkurat som med fliser: fargeforskjeller mellom batcher er subtile, men synlige i sidelys. Kjøp alle spann samtidig og sjekk batchnummeret." },
              { title: "Ta vare på en halvliter til utbedring", text: "Oppbevar restmaling i et godt lukket spann, kjølig og frostfritt. Nyttig for skader eller malingsjobber om noen måneder." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeInUp} transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }} className="bg-card border border-border rounded-2xl p-6 shadow-system-card">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Ofte stilte spørsmål
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <ContractorToolsCrossLink />
      <CtaSection />
    </PageShell>
  );
};

export default VerfBerekenen;
