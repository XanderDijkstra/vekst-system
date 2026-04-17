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

const SITE = "https://aannemersysteem.com";
const PAGE = `${SITE}/tools/gipsplaten-berekenen`;
const n1 = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const nI = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });

interface PlaatType { label: string; w: number; h: number; m2: number; }
const PLATEN: PlaatType[] = [
  { label: "60 × 260 cm", w: 0.6, h: 2.6, m2: 1.56 },
  { label: "120 × 260 cm", w: 1.2, h: 2.6, m2: 3.12 },
  { label: "90 × 260 cm", w: 0.9, h: 2.6, m2: 2.34 },
  { label: "120 × 300 cm", w: 1.2, h: 3.0, m2: 3.6 },
];

const SCHROEVEN_PER_M2 = 25;
const SCHROEVEN_PER_DOOS = 200;
const PROFIEL_PER_M2_WAND = 2.5; // strekkende meter per m²
const VOEGBAND_PER_PLAAT = 2.6; // m voegband per plaat (roughly)
const SNIJVERLIES = 0.10;

const faqs = [
  { q: "Hoeveel gipsplaten heb ik nodig per m²?", a: "Dat hangt af van het plaatformaat. Bij standaard 120×260 cm platen (3,12 m² per plaat) heb je ~0,32 platen per m². Met 10% snijverlies wordt dat ~0,35 platen per m². De calculator rekent dit automatisch uit." },
  { q: "Hoeveel schroeven per gipsplaat?", a: "Reken op ~25 schroeven per m² gipsplaat. Bij een plaat van 120×260 cm (3,12 m²) zijn dat ~78 schroeven per plaat. Schroeven om de 15-20 cm langs elk profiel." },
  { q: "Welke gipsplaat voor de badkamer?", a: "Gebruik groene (geïmpregneerde) gipsplaten voor vochtige ruimtes. Deze zijn waterafstotend behandeld. Voor douchemuren is cementgebonden plaat (zoals Aquapanel) beter geschikt." },
  { q: "Hoeveel metal stud profielen heb ik nodig?", a: "Reken op ~2,5 strekkende meter profiel per m² wand. Dat omvat staanders (om de 60 cm) plus boven- en onderrails. De calculator berekent dit automatisch." },
  { q: "Moet ik gipsplaten enkel of dubbel plaatsen?", a: "Enkele beplating is standaard voor scheidingswanden. Dubbele beplating geeft extra geluidisolatie en brandwerendheid. Bij dubbele beplating verdubbel je het aantal platen en schroeven." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", name: "Gipsplaten berekenen | Aannemer Systeem", url: PAGE,
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
      { "@type": "ListItem", position: 3, name: "Bouwmaterialen", item: `${SITE}/tools/bouwmaterialen-berekenen` },
      { "@type": "ListItem", position: 4, name: "Gipsplaten berekenen", item: PAGE },
    ]}},
  { "@type": "SoftwareApplication", name: "Gipsplaten berekenen", url: PAGE, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }},
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
        <title>Gipsplaten berekenen - platen, profielen en schroeven | Aannemer Systeem</title>
        <meta name="description" content="Bereken hoeveel gipsplaten, metal stud profielen en schroeven je nodig hebt. Kies je plaatformaat, vul de m² in - direct resultaat." />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Gipsplaten berekenen | Aannemer Systeem" />
        <meta property="og:description" content="Bereken hoeveel gipsplaten, profielen en schroeven je nodig hebt." />
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
          <motion.h1 {...fadeInUp} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Gipsplaten berekenen</motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Bereken hoeveel gipsplaten, metal stud profielen, schroeven en voegband je nodig hebt - inclusief 10% snijverlies.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Plaatformaat</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PLATEN.map((p, i) => (
                <button key={p.label} onClick={() => setPlaatIdx(i)} className={`text-left rounded-xl border-2 p-4 transition-all ${i === plaatIdx ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/40"}`}>
                  <span className="block font-semibold text-foreground text-sm">{p.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{n1.format(p.m2)} m²/plaat</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput label="Wandoppervlakte" suffix="m²" value={oppervlakte} onChange={setOppervlakte} min={1} max={500} step={0.5} slider sliderMin={5} sliderMax={100} icon={<Ruler className="h-4 w-4" />} />
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Beplating</p>
              <div className="flex gap-3">
                {[false, true].map(d => (
                  <button key={String(d)} onClick={() => setDubbel(d)} className={`flex-1 rounded-xl border-2 p-4 transition-all text-center ${dubbel === d ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/40"}`}>
                    <span className="block font-semibold text-foreground text-sm">{d ? "Dubbel" : "Enkel"}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{d ? "Extra isolatie" : "Standaard"}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard variant="hero" label="Gipsplaten" value={`${r.platen} platen`} caption={`${n1.format(r.m2Bruto)} m² incl. 10% snijverlies${dubbel ? " × 2 lagen" : ""}`} icon={<Package className="h-5 w-5" />} />
            <CalcResultCard label="Metal stud profiel" value={`${nI.format(r.profielM)} m`} caption="Staanders + rails (2,5 m/m²)" />
          </div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Schroeven</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{nI.format(r.schroeven)}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.dozen} {r.dozen === 1 ? "doos" : "dozen"} van 200 stuks</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Voegband</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{nI.format(r.voegbandM)} m</p>
              <p className="mt-1 text-sm text-muted-foreground">Papier- of gaasband</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Voegvuller</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{Math.ceil(r.voegbandM * 0.3)} kg</p>
              <p className="mt-1 text-sm text-muted-foreground">~0,3 kg per m voeg</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Hoe werkt de berekening?</h2>
            <p className="text-muted-foreground leading-relaxed">
              De calculator neemt je wandoppervlakte, telt <strong>10% snijverlies</strong> op en deelt door het m² per plaat. Profielen worden berekend op basis van staanders om de 60 cm + boven-/onderrails. Schroeven: 25 per m² gipsplaat, om de 15-20 cm langs elk profiel.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Voorbeeld - scheidingswand 25 m², enkel, 120×260 platen:</p>
              <p>Met snijverlies: 25 × 1,10 = <strong>27,5 m²</strong></p>
              <p>Platen: 27,5 / 3,12 = 8,8 → <strong>9 platen</strong></p>
              <p>Profielen: 25 × 2,5 = <strong>63 m</strong></p>
              <p>Schroeven: 27,5 × 25 = <strong>688 → 4 dozen</strong></p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Verwante tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/tools/stucwerk-berekenen" className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all">
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Stucwerk berekenen →</p>
                <p className="text-sm text-muted-foreground mt-1">Hoeveel kg stuc en primer heb je nodig?</p>
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

export default GipsplatenBerekenen;
