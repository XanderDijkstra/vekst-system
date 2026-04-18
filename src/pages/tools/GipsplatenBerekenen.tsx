import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, Ruler, Package, Wrench } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeInUp } from "@/lib/animations";

const SITE = "https://vekst-systemet.no";
const PAGE = `${SITE}/verktoy/gipsplate-kalkulator`;
const n1 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const nI = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });

interface PlaatType { label: string; w: number; h: number; m2: number; }
const PLATEN: PlaatType[] = [
  { label: "60 × 260 cm", w: 0.6, h: 2.6, m2: 1.56 },
  { label: "120 × 260 cm", w: 1.2, h: 2.6, m2: 3.12 },
  { label: "90 × 260 cm", w: 0.9, h: 2.6, m2: 2.34 },
  { label: "120 × 300 cm", w: 1.2, h: 3.0, m2: 3.6 },
];

const SCHROEVEN_PER_M2 = 25;
const SCHROEVEN_PER_DOOS = 200;
const PROFIEL_PER_M2_WAND = 2.5; // løpemeter per m²
const VOEGBAND_PER_PLAAT = 2.6; // m fugebånd per plate (roughly)
const SNIJVERLIES = 0.10;

const faqs = [
  { q: "Hvor mange gipsplater trenger jeg per m²?", a: "Det avhenger av plateformatet. Ved standard 120×260 cm plater (3,12 m² per plate) trenger du ~0,32 plater per m². Med 10 % svinn blir det ~0,35 plater per m². Kalkulatoren regner dette ut automatisk." },
  { q: "Hvor mange skruer per gipsplate?", a: "Regn med ~25 skruer per m² gipsplate. Ved en plate på 120×260 cm (3,12 m²) blir det ~78 skruer per plate. Skruer med 15-20 cm mellomrom langs hvert stålprofil." },
  { q: "Hvilken gipsplate til badet?", a: "Bruk grønne (impregnerte) gipsplater i fuktige rom. Disse er behandlet med vannavvisende middel. For dusjvegger er sementbasert plate (som Aquapanel) bedre egnet." },
  { q: "Hvor mange stålstendere trenger jeg?", a: "Regn med ~2,5 løpemeter profil per m² vegg. Det inkluderer stendere (med 60 cm mellomrom) pluss topp- og bunnskinne. Kalkulatoren beregner dette automatisk." },
  { q: "Skal jeg montere gipsplater enkelt eller dobbelt?", a: "Enkelt kledning er standard for skillevegger. Dobbel kledning gir ekstra lydisolasjon og brannmotstand. Ved dobbel kledning dobler du antall plater og skruer." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", name: "Gipsplate kalkulator | Vekst Systemet", url: PAGE,
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Byggematerialer", item: `${SITE}/verktoy/byggematerialer-kalkulator` },
      { "@type": "ListItem", position: 4, name: "Gipsplate kalkulator", item: PAGE },
    ]}},
  { "@type": "SoftwareApplication", name: "Gipsplate kalkulator", url: PAGE, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" }},
  { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }}))},
]};

const GipsplatenBerekenen = () => {
  const [plaatIdx, setPlaatIdx] = useState(1);
  const [oppervlakte, setOppervlakte] = useState(25);
  const [dubbel, setDubbel] = useState(false);

  const plaat = PLATEN[plaatIdx];
  const mult = dubbel ? 2 : 1;

  const r = useMemo(() => {
    const m2Bruto = oppervlakte * (1 + SNIJVERLIES);
    const platen = Math.ceil((m2Bruto / plaat.m2) * mult);
    const schroeven = Math.ceil(m2Bruto * SCHROEVEN_PER_M2 * mult);
    const dozen = Math.ceil(schroeven / SCHROEVEN_PER_DOOS);
    const profielM = Math.ceil(oppervlakte * PROFIEL_PER_M2_WAND);
    const voegbandM = Math.ceil(platen * VOEGBAND_PER_PLAAT / mult);
    return { m2Bruto, platen, schroeven, dozen, profielM, voegbandM };
  }, [oppervlakte, plaat, mult]);

  return (
    <PageShell>
      <Helmet>
        <title>Gipsplate kalkulator - plater, profiler og skruer | Vekst Systemet</title>
        <meta name="description" content="Beregn hvor mange gipsplater, stålstendere og skruer du trenger. Velg plateformat, fyll inn m² - direkte resultat." />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Gipsplate kalkulator | Vekst Systemet" />
        <meta property="og:description" content="Beregn hvor mange gipsplater, profiler og skruer du trenger." />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <Link to="/verktoy/byggematerialer-kalkulator" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">← Byggematerialer</Link>
          </motion.div>
          <motion.h1 {...fadeInUp} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Gipsplate kalkulator</motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Beregn hvor mange gipsplater, stålstendere, skruer og fugebånd du trenger - inkludert 10 % svinn.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Plateformat</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PLATEN.map((p, i) => (
                <button key={p.label} onClick={() => setPlaatIdx(i)} className={`text-left rounded-xl border-2 p-4 transition-all ${i === plaatIdx ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/40"}`}>
                  <span className="block font-semibold text-foreground text-sm">{p.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{n1.format(p.m2)} m²/plate</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput label="Veggflate" suffix="m²" value={oppervlakte} onChange={setOppervlakte} min={1} max={500} step={0.5} slider sliderMin={5} sliderMax={100} icon={<Ruler className="h-4 w-4" />} />
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Kledning</p>
              <div className="flex gap-3">
                {[false, true].map(d => (
                  <button key={String(d)} onClick={() => setDubbel(d)} className={`flex-1 rounded-xl border-2 p-4 transition-all text-center ${dubbel === d ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/40"}`}>
                    <span className="block font-semibold text-foreground text-sm">{d ? "Dobbel" : "Enkel"}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{d ? "Ekstra isolasjon" : "Standard"}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard variant="hero" label="Gipsplater" value={`${r.platen} plater`} caption={`${n1.format(r.m2Bruto)} m² inkl. 10 % svinn${dubbel ? " × 2 lag" : ""}`} icon={<Package className="h-5 w-5" />} />
            <CalcResultCard label="Stålstender" value={`${nI.format(r.profielM)} m`} caption="Stendere + skinner (2,5 m/m²)" />
          </div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skruer</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{nI.format(r.schroeven)}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.dozen} {r.dozen === 1 ? "eske" : "esker"} à 200 stk</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Fugebånd</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{nI.format(r.voegbandM)} m</p>
              <p className="mt-1 text-sm text-muted-foreground">Papir- eller nettbånd</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Sparkel</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{Math.ceil(r.voegbandM * 0.3)} kg</p>
              <p className="mt-1 text-sm text-muted-foreground">~0,3 kg per m fuge</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Hvordan fungerer beregningen?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kalkulatoren tar veggflaten din, legger til <strong>10 % svinn</strong> og deler på m² per plate. Profiler beregnes basert på stendere med 60 cm mellomrom + topp-/bunnskinner. Skruer: 25 per m² gipsplate, med 15-20 cm mellomrom langs hvert profil.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Eksempel - skillevegg 25 m², enkel, 120×260 plater:</p>
              <p>Med svinn: 25 × 1,10 = <strong>27,5 m²</strong></p>
              <p>Plater: 27,5 / 3,12 = 8,8 → <strong>9 plater</strong></p>
              <p>Profiler: 25 × 2,5 = <strong>63 m</strong></p>
              <p>Skruer: 27,5 × 25 = <strong>688 → 4 esker</strong></p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Relaterte verktøy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/verktoy/puss-kalkulator" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Puss kalkulator →</p>
                <p className="text-sm text-muted-foreground mt-1">Hvor mye kg puss og primer trenger du?</p>
              </Link>
              <Link to="/verktoy/maling-kalkulator" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Maling kalkulator →</p>
                <p className="text-sm text-muted-foreground mt-1">Hvor mange liter maling og spann trenger du?</p>
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Ofte stilte spørsmål</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
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

export default GipsplatenBerekenen;
