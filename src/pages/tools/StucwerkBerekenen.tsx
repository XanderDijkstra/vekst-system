import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, Ruler, Package, Droplets } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeInUp } from "@/lib/animations";

const SITE = "https://vekst-systemet.no";
const PAGE = `${SITE}/tools/stucwerk-berekenen`;
const n1 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const nI = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });

interface StucType {
  label: string;
  desc: string;
  kgPerM2: number; // per mm tykkelse
  aanbevolenMm: number;
  zakKg: number;
}

const STUC_TYPES: StucType[] = [
  { label: "Gipspuss", desc: "Innvendige vegger, glatt puss", kgPerM2: 1.0, aanbevolenMm: 5, zakKg: 25 },
  { label: "Kalkcement", desc: "Grov puss, yttervegger, kjellere", kgPerM2: 1.8, aanbevolenMm: 10, zakKg: 25 },
  { label: "Dekorpuss", desc: "Dekorativ, sparkelpuss, struktur", kgPerM2: 1.5, aanbevolenMm: 2, zakKg: 25 },
  { label: "Sementavretting", desc: "Gulv, tykke lag", kgPerM2: 2.0, aanbevolenMm: 50, zakKg: 25 },
];

const PRIMER_M2_PER_LITER = 8;
const PRIMER_EMMER_L = 10;

const faqs = [
  { q: "Hvor mye kg puss trenger jeg per m²?", a: "Det avhenger av type og lagtykkelse. Gipspuss: ~5 kg/m² ved 5 mm tykkelse. Kalkcement: ~18 kg/m² ved 10 mm. Dekorpuss: ~3 kg/m² ved 2 mm. Kalkulatoren regner det ut automatisk basert på valgt type og tykkelse." },
  { q: "Hvor mange lag puss skal jeg legge på?", a: "Gipspuss: vanligvis 1 lag (5-8 mm). Kalkcement: 2-3 lag (sprøytelag + grov + glatt). Dekorpuss: 1 lag over et glatt underlag. Ved store ujevnheter bør du først legge på et avrettingslag." },
  { q: "Må jeg bruke primer før pussing?", a: "Ja, alltid. Primer forbedrer heften og regulerer sugeevnen til underlaget. Sterkt sugende materialer (lettbetong, gipsblokker) trenger av og til to lag primer. Regn med ~0,125 liter per m²." },
  { q: "Kan jeg pusse over eksisterende puss?", a: "Ja, forutsatt at den eksisterende pussen sitter godt, ikke smuldrer og ikke har hule partier. Bank på veggen med knokene - en hul lyd betyr at pussen slipper. Fjern løs puss og grunne veggen før du starter." },
  { q: "Hvor lenge må puss tørke?", a: "Gipspuss: 1-2 dager tørketid per mm tykkelse. Kalkcement: 1 dag per mm. Et lag på 10 mm kalkcement trenger altså ~10 dager for full tørking. Rask tørking (oppvarming) gir sprekker." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", name: "Puss kalkulator | Vekst Systemet", url: PAGE,
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE}/tools` },
      { "@type": "ListItem", position: 3, name: "Byggematerialer", item: `${SITE}/tools/bouwmaterialen-berekenen` },
      { "@type": "ListItem", position: 4, name: "Puss kalkulator", item: PAGE },
    ]}},
  { "@type": "SoftwareApplication", name: "Puss kalkulator", url: PAGE, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" }},
  { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }}))},
]};

const StucwerkBerekenen = () => {
  const [typeIdx, setTypeIdx] = useState(0);
  const [oppervlakte, setOppervlakte] = useState(30);
  const [dikte, setDikte] = useState(STUC_TYPES[0].aanbevolenMm);
  const [speling, setSpeling] = useState(10);

  const st = STUC_TYPES[typeIdx];

  const r = useMemo(() => {
    const m2Bruto = oppervlakte * (1 + speling / 100);
    const kgPerM2 = st.kgPerM2 * dikte;
    const totaalKg = m2Bruto * kgPerM2;
    const zakken = Math.ceil(totaalKg / st.zakKg);
    const primerL = m2Bruto / PRIMER_M2_PER_LITER;
    const primerEmmers = Math.ceil(primerL / PRIMER_EMMER_L);
    return { m2Bruto, kgPerM2, totaalKg, zakken, primerL, primerEmmers };
  }, [oppervlakte, dikte, speling, st]);

  const handleTypeChange = (idx: number) => {
    setTypeIdx(idx);
    setDikte(STUC_TYPES[idx].aanbevolenMm);
  };

  return (
    <PageShell>
      <Helmet>
        <title>Puss kalkulator - hvor mye kg puss og primer | Vekst Systemet</title>
        <meta name="description" content="Beregn hvor mye kg puss, sekker puss og primer du trenger. Velg pusstype, fyll inn m² og lagtykkelse - direkte resultat." />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Puss kalkulator | Vekst Systemet" />
        <meta property="og:description" content="Beregn hvor mye kg puss og primer du trenger." />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <Link to="/tools/bouwmaterialen-berekenen" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">← Byggematerialer</Link>
          </motion.div>
          <motion.h1 {...fadeInUp} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Puss kalkulator</motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Beregn hvor mye kg puss, sekker puss og primer du trenger - velg pusstype, fyll inn m² og lagtykkelse.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Pusstype</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STUC_TYPES.map((t, i) => (
                <button key={t.label} onClick={() => handleTypeChange(i)} className={`text-left rounded-xl border-2 p-4 transition-all ${i === typeIdx ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/40"}`}>
                  <span className="block font-semibold text-foreground text-sm">{t.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{t.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput label="Flate" suffix="m²" value={oppervlakte} onChange={setOppervlakte} min={1} max={500} step={0.5} slider sliderMin={5} sliderMax={100} icon={<Ruler className="h-4 w-4" />} />
            <CalcInput label="Lagtykkelse" suffix="mm" value={dikte} onChange={setDikte} min={1} max={100} step={1} slider sliderMin={1} sliderMax={st.label === "Sementavretting" ? 80 : 20} hint={`Anbefalt: ${st.aanbevolenMm} mm for ${st.label.toLowerCase()}`} icon={<Ruler className="h-4 w-4" />} />
            <CalcInput label="Svinn / søl" suffix="%" value={speling} onChange={setSpeling} min={0} max={25} step={1} slider sliderMin={0} sliderMax={25} hint="10 % standard for søl" icon={<Calculator className="h-4 w-4" />} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard variant="hero" label="Totalt puss" value={`${nI.format(r.totaalKg)} kg`} caption={`${r.zakken} sekker à ${st.zakKg} kg - ${n1.format(r.kgPerM2)} kg/m² ved ${dikte} mm`} icon={<Package className="h-5 w-5" />} />
            <CalcResultCard label="Primer" value={`${n1.format(r.primerL)} liter`} caption={`${r.primerEmmers} ${r.primerEmmers === 1 ? "spann" : "spann"} à ${PRIMER_EMMER_L} liter`} icon={<Droplets className="h-5 w-5" />} />
          </div>

          <motion.div {...fadeInUp} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Forbruk per pusstype</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 font-medium text-muted-foreground">Type</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">kg/m²/mm</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Standard tykkelse</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">kg/m² totalt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {STUC_TYPES.map(t => (
                    <tr key={t.label} className={t.label === st.label ? "bg-accent/5" : ""}>
                      <td className="py-3 font-medium text-foreground">{t.label}</td>
                      <td className="py-3 text-right tabular-nums">{n1.format(t.kgPerM2)}</td>
                      <td className="py-3 text-right tabular-nums">{t.aanbevolenMm} mm</td>
                      <td className="py-3 text-right tabular-nums font-semibold">{n1.format(t.kgPerM2 * t.aanbevolenMm)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Hvordan fungerer beregningen?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Forbruket avhenger av <strong>pusstype</strong> og <strong>lagtykkelse</strong>. Hver pusstype har sin egen densitet (kg per m² per mm). Kalkulatoren ganger dette med flaten og legger til svinn for søl.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Eksempel - stue 30 m², gipspuss 5 mm:</p>
              <p>Forbruk: 1,0 kg/m²/mm × 5 mm = <strong>5,0 kg/m²</strong></p>
              <p>Med 10 % svinn: 30 × 1,10 = <strong>33 m²</strong></p>
              <p>Totalt: 33 × 5,0 = <strong>165 kg → 7 sekker</strong></p>
              <p>Primer: 33 / 8 = <strong>4,1 liter → 1 spann</strong></p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Relaterte verktøy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/tools/gipsplaten-berekenen" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Gipsplate kalkulator →</p>
                <p className="text-sm text-muted-foreground mt-1">Hvor mange plater, profiler og skruer trenger du?</p>
              </Link>
              <Link to="/tools/verf-berekenen" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
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

export default StucwerkBerekenen;
