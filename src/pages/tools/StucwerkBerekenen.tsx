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

const SITE = "https://aannemersysteem.com";
const PAGE = `${SITE}/tools/stucwerk-berekenen`;
const n1 = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const nI = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });

interface StucType {
  label: string;
  desc: string;
  kgPerM2: number; // per mm dikte
  aanbevolenMm: number;
  zakKg: number;
}

const STUC_TYPES: StucType[] = [
  { label: "Gipspleister", desc: "Wanden binnenshuis, glad stucwerk", kgPerM2: 1.0, aanbevolenMm: 5, zakKg: 25 },
  { label: "Kalkcement", desc: "Ruw stucwerk, buitenmuren, kelders", kgPerM2: 1.8, aanbevolenMm: 10, zakKg: 25 },
  { label: "Sierpleister", desc: "Decoratief, spachtelputz, korrel", kgPerM2: 1.5, aanbevolenMm: 2, zakKg: 25 },
  { label: "Cementdekvloer", desc: "Vloeren, dikke lagen", kgPerM2: 2.0, aanbevolenMm: 50, zakKg: 25 },
];

const PRIMER_M2_PER_LITER = 8;
const PRIMER_EMMER_L = 10;

const faqs = [
  { q: "Hoeveel kg stuc heb ik nodig per m²?", a: "Dat hangt af van het type en de laagdikte. Gipspleister: ~5 kg/m² bij 5 mm dikte. Kalkcement: ~18 kg/m² bij 10 mm. Sierpleister: ~3 kg/m² bij 2 mm. De calculator berekent het automatisch op basis van je gekozen type en dikte." },
  { q: "Hoeveel lagen stuc moet ik aanbrengen?", a: "Gipspleister: meestal 1 laag (5-8 mm). Kalkcement: 2-3 lagen (spuitlaag + ruw + glad). Sierpleister: 1 laag over een gladde ondergrond. Bij grote oneffenheden eerst een egalisatielaag aanbrengen." },
  { q: "Moet ik een primer gebruiken voor het stucen?", a: "Ja, altijd. Primer verbetert de hechting en reguleert het zuiggedrag van de ondergrond. Sterk zuigende materialen (gasbeton, gipsblokken) hebben soms twee lagen primer nodig. Reken op ~0,125 liter per m²." },
  { q: "Kan ik over bestaand stucwerk heen stucen?", a: "Ja, mits het bestaande stuc stevig vastzit, niet poedert en geen holle plekken heeft. Klop de muur af met je knokkels — een holle klank betekent loslating. Verwijder loslatend stuc en grond de muur voor je begint." },
  { q: "Hoe lang moet stucwerk drogen?", a: "Gipspleister: 1-2 dagen droogtijd per mm dikte. Kalkcement: 1 dag per mm. Een laag van 10 mm kalkcement heeft dus ~10 dagen nodig voor volledige droging. Versneld drogen (verwarming) veroorzaakt scheuren." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", name: "Stucwerk berekenen | Aannemer Systeem", url: PAGE,
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
      { "@type": "ListItem", position: 3, name: "Bouwmaterialen", item: `${SITE}/tools/bouwmaterialen-berekenen` },
      { "@type": "ListItem", position: 4, name: "Stucwerk berekenen", item: PAGE },
    ]}},
  { "@type": "SoftwareApplication", name: "Stucwerk berekenen", url: PAGE, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }},
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
        <title>Stucwerk berekenen — hoeveel kg stuc en primer | Aannemer Systeem</title>
        <meta name="description" content="Bereken hoeveel kg stuc, zakken pleister en primer je nodig hebt. Kies stuctype, vul de m² en laagdikte in — direct resultaat." />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Stucwerk berekenen | Aannemer Systeem" />
        <meta property="og:description" content="Bereken hoeveel kg stuc en primer je nodig hebt." />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <Link to="/tools/bouwmaterialen-berekenen" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">← Bouwmaterialen</Link>
          </motion.div>
          <motion.h1 {...fadeInUp} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Stucwerk berekenen</motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Bereken hoeveel kg stuc, zakken pleister en primer je nodig hebt — kies stuctype, vul je m² en laagdikte in.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Stuctype</p>
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
            <CalcInput label="Oppervlakte" suffix="m²" value={oppervlakte} onChange={setOppervlakte} min={1} max={500} step={0.5} slider sliderMin={5} sliderMax={100} icon={<Ruler className="h-4 w-4" />} />
            <CalcInput label="Laagdikte" suffix="mm" value={dikte} onChange={setDikte} min={1} max={100} step={1} slider sliderMin={1} sliderMax={st.label === "Cementdekvloer" ? 80 : 20} hint={`Aanbevolen: ${st.aanbevolenMm} mm voor ${st.label.toLowerCase()}`} icon={<Ruler className="h-4 w-4" />} />
            <CalcInput label="Speling / verlies" suffix="%" value={speling} onChange={setSpeling} min={0} max={25} step={1} slider sliderMin={0} sliderMax={25} hint="10% standaard voor morsverlies" icon={<Calculator className="h-4 w-4" />} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard variant="hero" label="Totaal stuc" value={`${nI.format(r.totaalKg)} kg`} caption={`${r.zakken} zakken van ${st.zakKg} kg — ${n1.format(r.kgPerM2)} kg/m² bij ${dikte} mm`} icon={<Package className="h-5 w-5" />} />
            <CalcResultCard label="Primer" value={`${n1.format(r.primerL)} liter`} caption={`${r.primerEmmers} ${r.primerEmmers === 1 ? "emmer" : "emmers"} van ${PRIMER_EMMER_L} liter`} icon={<Droplets className="h-5 w-5" />} />
          </div>

          <motion.div {...fadeInUp} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Verbruik per stuctype</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 font-medium text-muted-foreground">Type</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">kg/m²/mm</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Standaard dikte</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">kg/m² totaal</th>
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
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Hoe werkt de berekening?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Het verbruik hangt af van het <strong>stuctype</strong> en de <strong>laagdikte</strong>. Elke stucsoort heeft een eigen dichtheid (kg per m² per mm). De calculator vermenigvuldigt dit met je oppervlakte en telt speling op voor morsverlies.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Voorbeeld — woonkamer 30 m², gipspleister 5 mm:</p>
              <p>Verbruik: 1,0 kg/m²/mm × 5 mm = <strong>5,0 kg/m²</strong></p>
              <p>Met 10% speling: 30 × 1,10 = <strong>33 m²</strong></p>
              <p>Totaal: 33 × 5,0 = <strong>165 kg → 7 zakken</strong></p>
              <p>Primer: 33 / 8 = <strong>4,1 liter → 1 emmer</strong></p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Verwante tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/tools/gipsplaten-berekenen" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Gipsplaten berekenen →</p>
                <p className="text-sm text-muted-foreground mt-1">Hoeveel platen, profielen en schroeven heb je nodig?</p>
              </Link>
              <Link to="/tools/verf-berekenen" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Verf berekenen →</p>
                <p className="text-sm text-muted-foreground mt-1">Hoeveel liter verf en blikken heb je nodig?</p>
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Veelgestelde vragen</h2>
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
