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
const PAGE_URL = `${SITE_URL}/tools/verf-berekenen`;

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });

interface VerfType {
  label: string;
  dekkingM2PerLiter: number; // m² per liter
  aanbevolenLagen: number;
}

const VERFTYPEN: VerfType[] = [
  { label: "Muurverf (latex)", dekkingM2PerLiter: 10, aanbevolenLagen: 2 },
  { label: "Muurverf (acrylaat)", dekkingM2PerLiter: 9, aanbevolenLagen: 2 },
  { label: "Lakverf (alkyd)", dekkingM2PerLiter: 12, aanbevolenLagen: 2 },
  { label: "Lakverf (waterbasis)", dekkingM2PerLiter: 11, aanbevolenLagen: 2 },
  { label: "Grondverf (primer)", dekkingM2PerLiter: 10, aanbevolenLagen: 1 },
  { label: "Beits (dekkend)", dekkingM2PerLiter: 10, aanbevolenLagen: 2 },
  { label: "Beits (transparant)", dekkingM2PerLiter: 8, aanbevolenLagen: 2 },
  { label: "Buitenlatex (gevelverf)", dekkingM2PerLiter: 7, aanbevolenLagen: 2 },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel verf heb ik nodig per m²?",
    a: "Dat hangt af van het verftype. Muurverf (latex) dekt gemiddeld 10 m² per liter. Buitenlatex/gevelverf dekt minder: ~7 m² per liter door de ruwere ondergrond. Lakverf zit rond de 11–12 m² per liter. Vermenigvuldig met het aantal lagen (standaard 2) om je totale verbruik te berekenen.",
  },
  {
    q: "Hoeveel lagen verf moet ik aanbrengen?",
    a: "Standaard 2 dekkende lagen. Ga je van donker naar licht? Dan soms 3 lagen. Gebruik je grondverf op een nieuwe ondergrond? Tel dat als een extra laag. Bij transparante beits is 2 lagen ook de norm, maar de dekking per laag is lager dan bij dekkende verf.",
  },
  {
    q: "Moet ik ramen en deuren van de oppervlakte aftrekken?",
    a: "Ja. Een standaard binnendeur is ~1,6 m², een raam verschilt maar meet gemiddeld 1–2 m². Trek de totale raam- en deuroppervlakte af van je wandoppervlakte. Doe je dit niet, dan bestel je ~10–15% te veel — niet dramatisch, maar onnodig.",
  },
  {
    q: "Wat is het verschil tussen latex en acrylaat?",
    a: "Beide zijn watergedragen muurverven. Acrylaat is iets slijtvaster en vochbestendiger — geschikt voor keukens, badkamers en drukke gangen. Latex is goedkoper en prima voor slaapkamers en woonkamers. Qua dekking zit er weinig verschil: 9–10 m² per liter.",
  },
  {
    q: "Hoeveel kost het om een kamer te laten schilderen?",
    a: "Reken voor binnenschilderwerk op €8–€14 per m² (arbeid + materiaal). Een woonkamer van 35 m² wandoppervlak kost dan ~€280–€490. Buitenschilderwerk is duurder: €15–€30 per m² door steigers, voorbereiding en weerafhankelijkheid.",
  },
  {
    q: "Welk blik moet ik kopen: 2.5L, 5L of 10L?",
    a: "Grotere blikken zijn per liter goedkoper. Vuistregel: als je meer dan 4 liter nodig hebt, pak een 5L blik. Meer dan 8 liter? Pak 10L. Houd er rekening mee dat geopende verf beperkt houdbaar is (1–2 jaar bij goede opslag). Koop dus geen 10L als je maar 6 liter nodig hebt.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Verf berekenen — hoeveel verf heb ik nodig?",
  url: PAGE_URL,
  description:
    "Gratis verfcalculator. Bereken hoeveel liter verf en hoeveel blikken je nodig hebt. Kies verftype, vul m² in — klaar.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Verf berekenen", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Verf berekenen calculator",
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

const VerfBerekenen = () => {
  const [oppervlakte, setOppervlakte] = useState(35);
  const [verfIdx, setVerfIdx] = useState(0); // default muurverf latex
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
        <title>Verf berekenen — hoeveel verf heb ik nodig? | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis verfcalculator: bereken hoeveel liter verf en blikken je nodig hebt. Kies verftype, vul je oppervlakte in en bestel precies genoeg."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Verf berekenen — hoeveel verf heb ik nodig?" />
        <meta property="og:description" content="Bereken in 10 seconden hoeveel verf je nodig hebt. Gratis, geen registratie." />
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
            <Link to="/tools" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">
              Rekentools
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Verf berekenen
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hoeveel verf heb ik nodig?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Kies je verftype, vul de oppervlakte en het aantal lagen in. De calculator geeft
            je het exacte aantal liters en blikken — geen giswerk, geen tekort halverwege.
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
                Jouw gegevens
              </h2>
              <div className="space-y-6">
                {/* Verftype selector */}
                <div>
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                    <Paintbrush className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
                    Verftype
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
                    Dekking: ~{verfType.dekkingM2PerLiter} m² per liter · aanbevolen {verfType.aanbevolenLagen} lagen
                  </p>
                </div>

                <CalcInput
                  label="Oppervlakte"
                  hint="Totale te schilderen oppervlakte. Trek ramen en deuren af. Tip: een standaard binnendeur is ~1,6 m²."
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
                  label="Aantal lagen"
                  hint="2 lagen is standaard. Bij een donkere naar lichte kleur soms 3. Grondverf telt als 1 extra laag."
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
                  label="Blikgrootte"
                  hint="Gangbare maten: 1L, 2.5L, 5L en 10L. Grotere blikken zijn per liter goedkoper."
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
                label="Totaal verf nodig"
                value={`${num.format(results.literMetBuffer)} liter`}
                caption={`${num.format(results.totaalLiter)} liter voor ${lagen} lagen + 5% buffer voor verfrollen en morsen`}
                icon={<Paintbrush className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Blikken bestellen"
                  value={`${results.aantalBlikken}× ${blikGrootte}L`}
                  caption={`${num.format(results.literBesteld)} liter totaal`}
                  icon={<Package className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Per laag"
                  value={`${num.format(results.liter1Laag)} liter`}
                  caption={`bij ${verfType.dekkingM2PerLiter} m²/liter dekking`}
                  icon={<Layers className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              {/* Dekking tabel */}
              <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-card p-5 shadow-system-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Dekking per verftype
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
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tip</p>
                <p className="mt-2 text-foreground leading-relaxed text-sm">
                  De dekking op het etiket geldt voor een gladde, grondverfde ondergrond. Op
                  ruwe of zuigende oppervlakten (nieuw stucwerk, onbehandeld hout) kan het
                  verbruik 20–30% hoger liggen. Reken in dat geval met een laag extra.
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
            Hoe bereken je hoeveel verf je nodig hebt?
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card">
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li><span className="text-muted-foreground">1.</span> Verf per laag = <span className="font-semibold">oppervlakte / dekking per liter</span></li>
              <li><span className="text-muted-foreground">2.</span> Totaal = <span className="font-semibold">verf per laag × aantal lagen</span></li>
              <li><span className="text-muted-foreground">3.</span> + 5% buffer = <span className="font-semibold">totaal × 1,05</span></li>
              <li><span className="text-muted-foreground">4.</span> Blikken = <span className="font-semibold">⌈liters / blikgrootte⌉</span></li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> woonkamer 35 m², muurverf latex (10 m²/liter), 2 lagen, blikken van 5L.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Per laag: 35 / 10 = 3,5 liter</li>
                <li>2 lagen: 3,5 × 2 = 7,0 liter</li>
                <li>Met 5% buffer: 7,0 × 1,05 = 7,35 liter</li>
                <li>Blikken: 7,35 / 5 = 1,47 → <span className="font-bold text-foreground">2 blikken van 5L bestellen</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            5 verftips van schilders
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Altijd grondverf op nieuw stucwerk", text: "Nieuw stucwerk zuigt verf op als een spons. Zonder grondverf heb je 3–4 lagen nodig in plaats van 2. Grondverf is goedkoper — en bespaart uiteindelijk verf." },
              { title: "Roer voor gebruik, niet schudden", text: "Schudden creëert luchtbellen die als kratertjes drogen. Roer langzaam met een verfstok of een mixer op lage snelheid." },
              { title: "Snijd bij met een kwast, rol het vlak", text: "Gebruik een kwast voor randen, hoeken en kozijnen (bijsnijden). Doe daarna het grote vlak met een roller. Werk nat-in-nat: snijd een wand bij en rol direct daarna, zodat er geen droogrand ontstaat." },
              { title: "Koop alles uit één batch", text: "Net als bij tegels: kleurverschillen tussen batches zijn subtiel maar zichtbaar bij groot licht. Koop al je blikken tegelijk en check het batchnummer." },
              { title: "Bewaar een halve liter voor touch-ups", text: "Bewaar restverf in een goed afgesloten blik, koeel en vorstvrij. Handig voor beschadigingen of verfwerk in een paar maanden." },
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
            Veelgestelde vragen
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

      <CtaSection />
    </PageShell>
  );
};

export default VerfBerekenen;
