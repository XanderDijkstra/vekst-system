import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Layers,
  Ruler,
  Package,
  Scissors,
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
const PAGE_URL = `${SITE_URL}/verktoy/laminat-kalkulator`;

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 2 });

/* ── Leggemønstre ── */
interface Legpatroon {
  label: string;
  desc: string;
  snijverlies: number; // default %
}

const LEGPATRONEN: Legpatroon[] = [
  { label: "Rett / halvforband", desc: "Standard, minst svinn", snijverlies: 5 },
  { label: "1/3-forband", desc: "Forskyvning 1/3 planke per rad", snijverlies: 7 },
  { label: "Diagonal", desc: "45° vinkel, mer kapping", snijverlies: 15 },
  { label: "Sildebein", desc: "Klassisk mønster, mye saging", snijverlies: 15 },
];

/* ── Pakningsstørrelser ── */
const PAKKET_M2_OPTIES = [1.5, 2.0, 2.5, 3.0, 3.5];
const ONDERVLOER_ROL_M2 = 15; // m² per rull trinnlydsmatte

/* ── FAQ data ── */
const faqs: { q: string; a: string }[] = [
  {
    q: "Hvor mange pakker laminat trenger jeg?",
    a: "Del totalflaten din (inkludert svinn) på antall m² per pakke. Ved et rom på 20 m² med 5 % svinn og pakker på 2,5 m² trenger du 21 m² / 2,5 = 9 pakker. Kalkulatoren gjør dette automatisk - rund alltid opp.",
  },
  {
    q: "Hvor mye svinn bør jeg regne med for laminat?",
    a: "Ved rett legging (halvforband) regner du 5 %. Ved diagonal eller sildebein er det 15 %. Uregelmessige rom med mange hjørner, utskjæringer eller nisjer? Legg til 2-3 %. Kalkulatoren justerer svinnet automatisk basert på leggemønsteret.",
  },
  {
    q: "Trenger jeg alltid trinnlydsmatte under laminat?",
    a: "Ja, underlag er essensielt: det demper gangstøy, jevner ut små ujevnheter (opptil ~2 mm) og beskytter mot fukt nedenfra. Unntak: noen laminatgulv har underlaget integrert - sjekk spesifikasjonene på gulvet ditt.",
  },
  {
    q: "Hvor mange lister trenger jeg?",
    a: "Mål romomkretsen og trekk fra døråpningene. Fotlister selges standard i lengder på 2,4 m. Regn 5-10 % ekstra for kappesvinn og hjørnestykker. Kalkulatoren beregner dette automatisk når du legger inn omkretsen.",
  },
  {
    q: "Kan jeg legge laminat på gulvvarme?",
    a: "Ja, forutsatt at laminatet er godkjent for gulvvarme (se etter symbolet på pakken). Bruk et tynt underlag (2-3 mm) med lav varmemotstand. Gulvtemperaturen skal maks være 27 °C. La laminatet akklimatisere seg 48 timer i rommet før legging.",
  },
  {
    q: "Hvor mange m² laminat kan jeg legge per dag?",
    a: "En erfaren håndverker legger 20-30 m² per dag. En hobbyist med noe erfaring klarer 10-15 m². Ved sildebein eller diagonal mønster går det 30-40 % langsommere på grunn av ekstra saging.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Laminat kalkulator - hvor mange pakker og underlag | Vekst Systemet",
      url: PAGE_URL,
      description:
        "Beregn hvor mange pakker laminat, trinnlydsmatte og lister du trenger. Velg leggemønster, fyll inn m² - direkte resultat.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
          { "@type": "ListItem", position: 3, name: "Byggematerialer", item: `${SITE_URL}/verktoy/byggematerialer-kalkulator` },
          { "@type": "ListItem", position: 4, name: "Laminat kalkulator", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Laminat kalkulator",
      url: PAGE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const LaminaatBerekenen = () => {
  const [patroonIdx, setPatroonIdx] = useState(0);
  const [oppervlakte, setOppervlakte] = useState(20);
  const [pakketM2, setPakketM2] = useState(2.5);
  const [snijverlies, setSnijverlies] = useState(LEGPATRONEN[0].snijverlies);
  const [omtrek, setOmtrek] = useState(18); // meter for lister
  const [deuropeningen, setDeuropeningen] = useState(2); // meter trekkes fra

  const patroon = LEGPATRONEN[patroonIdx];

  const result = useMemo(() => {
    const m2Bruto = oppervlakte * (1 + snijverlies / 100);
    const pakken = Math.ceil(m2Bruto / pakketM2);
    const m2Besteld = pakken * pakketM2;
    const ondervloerRollen = Math.ceil(oppervlakte / ONDERVLOER_ROL_M2); // no waste needed, just cover area
    const plintM = Math.max(0, omtrek - deuropeningen);
    const plintLengtes = Math.ceil((plintM * 1.05) / 2.4); // 5% extra, 2.4m lengths

    return {
      m2Bruto,
      pakken,
      m2Besteld,
      overschot: m2Besteld - oppervlakte,
      ondervloerRollen,
      plintM,
      plintLengtes,
    };
  }, [oppervlakte, snijverlies, pakketM2, omtrek, deuropeningen]);

  const handlePatroonChange = (idx: number) => {
    setPatroonIdx(idx);
    setSnijverlies(LEGPATRONEN[idx].snijverlies);
  };

  return (
    <PageShell>
      <Helmet>
        <title>Laminat kalkulator - hvor mange pakker og underlag | Vekst Systemet</title>
        <meta
          name="description"
          content="Beregn hvor mange pakker laminat, trinnlydsmatte og lister du trenger. Velg leggemønster, fyll inn m² - gratis kalkulator for håndverkere."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Laminat kalkulator | Gratis verktøy | Vekst Systemet" />
        <meta property="og:description" content="Beregn hvor mange pakker laminat, trinnlydsmatte og lister du trenger." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <Link
              to="/verktoy/byggematerialer-kalkulator"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              ← Byggematerialer
            </Link>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Laminat kalkulator
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Beregn hvor mange pakker laminat, ruller trinnlydsmatte og lister du
            trenger - inkludert svinn per leggemønster.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Leggemønster-velger */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Leggemønster</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {LEGPATRONEN.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => handlePatroonChange(i)}
                  className={`text-left rounded-xl border-2 p-4 transition-all ${
                    i === patroonIdx
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:border-accent/40"
                  }`}
                >
                  <span className="block font-semibold text-foreground text-sm">{p.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{p.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Inputs */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput
              label="Flate"
              suffix="m²"
              value={oppervlakte}
              onChange={setOppervlakte}
              min={1}
              max={500}
              step={0.5}
              slider
              sliderMin={5}
              sliderMax={100}
              icon={<Ruler className="h-4 w-4" />}
            />
            <div>
              <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Pakningsstørrelse
              </p>
              <div className="flex flex-wrap gap-2">
                {PAKKET_M2_OPTIES.map((m) => (
                  <button
                    key={m}
                    onClick={() => setPakketM2(m)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-semibold border-2 transition-all ${
                      m === pakketM2
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-card hover:border-accent/40 text-muted-foreground"
                    }`}
                  >
                    {num.format(m)} m²
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">m² per pakke - sjekk pakningen</p>
            </div>
            <CalcInput
              label="Svinn"
              suffix="%"
              value={snijverlies}
              onChange={setSnijverlies}
              min={0}
              max={25}
              step={1}
              slider
              sliderMin={0}
              sliderMax={25}
              hint={`Standard ${patroon.snijverlies} % for ${patroon.label.toLowerCase()}`}
              icon={<Scissors className="h-4 w-4" />}
            />
            <CalcInput
              label="Omkrets rom (for lister)"
              suffix="m"
              value={omtrek}
              onChange={setOmtrek}
              min={0}
              max={200}
              step={0.5}
              hint="Legg sammen alle vegger"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Trekk fra døråpninger"
              suffix="m"
              value={deuropeningen}
              onChange={setDeuropeningen}
              min={0}
              max={20}
              step={0.1}
              hint="Standard ~0,8 m per dør"
              icon={<Ruler className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Pakker laminat"
              value={`${result.pakken} pakker`}
              caption={`${num.format(result.m2Besteld)} m² bestilt (${num.format(result.m2Bruto)} m² nødvendig inkl. svinn)`}
              icon={<Layers className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Trinnlydsmatte"
              value={`${result.ondervloerRollen} ${result.ondervloerRollen === 1 ? "rull" : "ruller"}`}
              caption={`Ruller à ${ONDERVLOER_ROL_M2} m² - dekker ${result.ondervloerRollen * ONDERVLOER_ROL_M2} m²`}
            />
          </div>

          {/* Lister + overskudd */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Lister</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {result.plintLengtes} stk
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Lengder à 2,4 m - dekker {num.format(result.plintM)} m vegglengde
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Overskudd</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(result.overschot)} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ekstra m² pga. oppavrunding av pakker - nyttig som reserve
              </p>
            </div>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hvordan fungerer beregningen?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kalkulatoren tar romflaten din og legger til <strong>svinnet</strong>
              (avhengig av leggemønster). Totalen deles på m² per pakke - rundet opp.
              Trinnlydsmatte og lister beregnes separat.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Eksempel - stue 20 m², halvforband, pakker à 2,5 m²:</p>
              <p>Svinn 5 %: 20 × 1,05 = <strong>21,0 m²</strong></p>
              <p>Pakker: 21,0 / 2,5 = 8,4 → <strong>9 pakker</strong> (22,5 m² bestilt)</p>
              <p>Overskudd: 22,5 − 20 = <strong>2,5 m²</strong> reserve</p>
              <p>Trinnlydsmatte: 20 / 15 = 1,3 → <strong>2 ruller</strong></p>
              <p>Lister: (18 − 2) × 1,05 / 2,4 = 7,0 → <strong>7 lengder</strong></p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips for legging av laminat
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">La det akklimatisere</strong> - legg laminatet
                minst 48 timer (uåpnet) i rommet der det skal legges. Slik tilpasser det seg
                temperatur og luftfuktighet.
              </li>
              <li>
                <strong className="text-foreground">Hold en dilatasjonsfuge</strong> - la
                8-10 mm åpning rundt til veggen. Laminat utvider seg og krymper; uten fuge vil
                gulvet bølge seg.
              </li>
              <li>
                <strong className="text-foreground">Start ved vinduet</strong> - legg plankene
                parallelt med lysinnfallet. Da synes skjøtene mindre.
              </li>
              <li>
                <strong className="text-foreground">Bruk avstandskiler</strong> - kiler mot
                veggen sørger for en jevn dilatasjonsfuge. Fjern dem først når hele gulvet er
                ferdig.
              </li>
              <li>
                <strong className="text-foreground">Utnytt rest-planken</strong> - restlengden
                på enden av en rad bruker du som startplanke i neste rad (så lenge &gt; 30 cm).
                Det sparer materiale og gir mønsteret et mer naturlig preg.
              </li>
            </ol>
          </motion.div>

          {/* Related tools */}
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
              Relaterte verktøy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/verktoy/fliser-kalkulator"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Fliskalkulator →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hvor mange fliser, flislim og fugemasse trenger du?
                </p>
              </Link>
              <Link
                to="/verktoy/maling-kalkulator"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Maling kalkulator →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hvor mange liter maling og spann trenger du?
                </p>
              </Link>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
              Ofte stilte spørsmål
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
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

export default LaminaatBerekenen;
