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
const PAGE_URL = `${SITE_URL}/tools/laminaat-berekenen`;

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 2 });

/* ── Legpatronen ── */
interface Legpatroon {
  label: string;
  desc: string;
  snijverlies: number; // default %
}

const LEGPATRONEN: Legpatroon[] = [
  { label: "Recht / halfsteens", desc: "Standaard, minste snijverlies", snijverlies: 5 },
  { label: "1/3-verband", desc: "Verspringt elke rij 1/3 plank", snijverlies: 7 },
  { label: "Diagonaal", desc: "45° hoek, meer snijwerk", snijverlies: 15 },
  { label: "Visgraat", desc: "Klassiek patroon, veel zaagwerk", snijverlies: 15 },
];

/* ── Pakketgroottes ── */
const PAKKET_M2_OPTIES = [1.5, 2.0, 2.5, 3.0, 3.5];
const ONDERVLOER_ROL_M2 = 15; // m² per rol ondervloer

/* ── FAQ data ── */
const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel pakken laminaat heb ik nodig?",
    a: "Deel je totale oppervlakte (inclusief snijverlies) door het aantal m² per pak. Bij een kamer van 20 m² met 5% snijverlies en pakken van 2,5 m² heb je 21 m² / 2,5 = 9 pakken nodig. De calculator doet dit automatisch — rond altijd naar boven af.",
  },
  {
    q: "Hoeveel snijverlies moet ik rekenen bij laminaat?",
    a: "Bij recht leggen (halfsteensverband) reken je 5%. Bij diagonaal of visgraat leggen is dat 15%. Onregelmatige kamers met veel hoeken, uitsnijdingen of nissen? Reken 2-3% extra. De calculator past het snijverlies automatisch aan op basis van je legpatroon.",
  },
  {
    q: "Heb ik altijd ondervloer nodig onder laminaat?",
    a: "Ja, ondervloer is essentieel: het dempt loopgeluid, egalisert kleine oneffenheden (tot ~2 mm) en beschermt tegen vocht van onderen. Uitzondering: sommige laminaatvloeren hebben ondervloer al geïntegreerd — check de specificaties van je vloer.",
  },
  {
    q: "Hoeveel plinten heb ik nodig?",
    a: "Meet de omtrek van de kamer en trek de deuropeningen af. Plinten worden standaard in lengtes van 2,4 m verkocht. Reken 5-10% extra voor zaagverlies en hoekstukjes. De calculator berekent dit automatisch als je de omtrek invoert.",
  },
  {
    q: "Kan ik laminaat leggen op vloerverwarming?",
    a: "Ja, mits het laminaat geschikt is voor vloerverwarming (check het symbool op de verpakking). Gebruik een dunne ondervloer (2-3 mm) met lage warmteweerstand. De vloertemperatuur mag maximaal 27°C zijn. Laat het laminaat 48 uur acclimatiseren in de ruimte voor het leggen.",
  },
  {
    q: "Hoeveel m² laminaat kan ik per dag leggen?",
    a: "Een ervaren vakman legt 20-30 m² per dag. Een klusser met enige ervaring haalt 10-15 m². Bij visgraat of diagonaal patroon gaat het 30-40% langzamer door het extra zaagwerk.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Laminaat berekenen — hoeveel pakken en ondervloer | Aannemer Systeem",
      url: PAGE_URL,
      description:
        "Bereken hoeveel pakken laminaat, ondervloer en plinten je nodig hebt. Kies je legpatroon, vul de m² in — direct resultaat.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 3, name: "Bouwmaterialen", item: `${SITE_URL}/tools/bouwmaterialen-berekenen` },
          { "@type": "ListItem", position: 4, name: "Laminaat berekenen", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Laminaat berekenen calculator",
      url: PAGE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
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
  const [omtrek, setOmtrek] = useState(18); // meters voor plinten
  const [deuropeningen, setDeuropeningen] = useState(2); // meters aftrekken

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
        <title>Laminaat berekenen — hoeveel pakken en ondervloer | Aannemer Systeem</title>
        <meta
          name="description"
          content="Bereken hoeveel pakken laminaat, ondervloer en plinten je nodig hebt. Kies je legpatroon, vul de m² in — gratis calculator voor aannemers."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Laminaat berekenen | Gratis calculator | Aannemer Systeem" />
        <meta property="og:description" content="Bereken hoeveel pakken laminaat, ondervloer en plinten je nodig hebt." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <Link
              to="/tools/bouwmaterialen-berekenen"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              ← Bouwmaterialen
            </Link>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Laminaat berekenen
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Bereken hoeveel pakken laminaat, rollen ondervloer en plinten je nodig
            hebt — inclusief snijverlies per legpatroon.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Legpatroon selector */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Legpatroon</p>
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
              label="Oppervlakte"
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
                Pakketgrootte
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
              <p className="mt-2 text-xs text-muted-foreground">m² per pak — check je verpakking</p>
            </div>
            <CalcInput
              label="Snijverlies"
              suffix="%"
              value={snijverlies}
              onChange={setSnijverlies}
              min={0}
              max={25}
              step={1}
              slider
              sliderMin={0}
              sliderMax={25}
              hint={`Standaard ${patroon.snijverlies}% voor ${patroon.label.toLowerCase()}`}
              icon={<Scissors className="h-4 w-4" />}
            />
            <CalcInput
              label="Omtrek kamer (voor plinten)"
              suffix="m"
              value={omtrek}
              onChange={setOmtrek}
              min={0}
              max={200}
              step={0.5}
              hint="Tel alle wanden bij elkaar op"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Deuropeningen aftrekken"
              suffix="m"
              value={deuropeningen}
              onChange={setDeuropeningen}
              min={0}
              max={20}
              step={0.1}
              hint="Standaard ~0,8 m per deur"
              icon={<Ruler className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Pakken laminaat"
              value={`${result.pakken} pakken`}
              caption={`${num.format(result.m2Besteld)} m² besteld (${num.format(result.m2Bruto)} m² nodig incl. snijverlies)`}
              icon={<Layers className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Ondervloer"
              value={`${result.ondervloerRollen} ${result.ondervloerRollen === 1 ? "rol" : "rollen"}`}
              caption={`Rollen van ${ONDERVLOER_ROL_M2} m² — dekt ${result.ondervloerRollen * ONDERVLOER_ROL_M2} m²`}
            />
          </div>

          {/* Plinten + overschot */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Plinten</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {result.plintLengtes} stuks
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Lengtes van 2,4 m — dekt {num.format(result.plintM)} m wandlengte
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Overschot</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(result.overschot)} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Extra m² door afronding pakken — handig als reserve
              </p>
            </div>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hoe werkt de berekening?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De calculator neemt je kameroppervlakte en telt het <strong>snijverlies</strong> erbij op
              (afhankelijk van het legpatroon). Het totaal wordt gedeeld door de m² per pak — naar boven
              afgerond. Ondervloer en plinten worden apart berekend.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Voorbeeld — woonkamer 20 m², halfsteens, pakken van 2,5 m²:</p>
              <p>Snijverlies 5%: 20 × 1,05 = <strong>21,0 m²</strong></p>
              <p>Pakken: 21,0 / 2,5 = 8,4 → <strong>9 pakken</strong> (22,5 m² besteld)</p>
              <p>Overschot: 22,5 − 20 = <strong>2,5 m²</strong> reserve</p>
              <p>Ondervloer: 20 / 15 = 1,3 → <strong>2 rollen</strong></p>
              <p>Plinten: (18 − 2) × 1,05 / 2,4 = 7,0 → <strong>7 lengtes</strong></p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips voor laminaat leggen
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Laat acclimatiseren</strong> — leg het laminaat
                minstens 48 uur (ongeopend) in de ruimte waar het gelegd wordt. Zo past het zich aan
                aan temperatuur en luchtvochtigheid.
              </li>
              <li>
                <strong className="text-foreground">Houd een dilatatievoeg aan</strong> — laat
                rondom 8-10 mm ruimte tot de muur. Laminaat zet uit en krimpt; zonder voeg gaat het
                opbollen.
              </li>
              <li>
                <strong className="text-foreground">Begin bij het raam</strong> — leg de planken
                evenwijdig aan de lichtinval. Dan vallen de naden minder op.
              </li>
              <li>
                <strong className="text-foreground">Gebruik afstandhouders</strong> — wiggen tegen de
                muur zorgen voor een gelijkmatige dilatatievoeg. Verwijder ze pas als de hele vloer
                klaar is.
              </li>
              <li>
                <strong className="text-foreground">Verdeel de rest-plank</strong> — de restlengte
                aan het einde van een rij gebruik je als startplank van de volgende rij (mits &gt; 30 cm).
                Dat bespaart materiaal en maakt het patroon natuurlijker.
              </li>
            </ol>
          </motion.div>

          {/* Related tools */}
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
              Verwante tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/tools/tegels-berekenen"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Tegels berekenen →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hoeveel tegels, lijm en voegmortel heb je nodig?
                </p>
              </Link>
              <Link
                to="/tools/verf-berekenen"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Verf berekenen →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hoeveel liter verf en blikken heb je nodig?
                </p>
              </Link>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
              Veelgestelde vragen
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

      <CtaSection />
    </PageShell>
  );
};

export default LaminaatBerekenen;
