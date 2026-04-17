import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  HardHat,
  Ruler,
  Package,
  Droplets,
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
const PAGE_URL = `${SITE_URL}/tools/beton-berekenen`;

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 2 });

/* ── Beton mengsel types ── */
interface BetonType {
  label: string;
  desc: string;
  cementKg: number;  // kg cement per m³
  zandKg: number;    // kg zand per m³
  grindKg: number;   // kg grind per m³
  waterL: number;    // liter water per m³
}

const BETON_TYPES: BetonType[] = [
  {
    label: "C20/25 - standaard",
    desc: "Funderingen, vloeren, opritten",
    cementKg: 300,
    zandKg: 700,
    grindKg: 1100,
    waterL: 150,
  },
  {
    label: "C12/15 - mager beton",
    desc: "Onderlagen, vullingen, niet-dragend",
    cementKg: 200,
    zandKg: 800,
    grindKg: 1150,
    waterL: 160,
  },
  {
    label: "C30/37 - constructief",
    desc: "Dragende muren, kolommen, balkons",
    cementKg: 350,
    zandKg: 650,
    grindKg: 1100,
    waterL: 155,
  },
  {
    label: "C35/45 - zwaar belast",
    desc: "Kelders, waterdicht, industrievloeren",
    cementKg: 400,
    zandKg: 600,
    grindKg: 1050,
    waterL: 160,
  },
];

const CEMENT_ZAK_KG = 25;
const ZAND_ZAK_KG = 25; // bigbags also common, but 25kg bags for small jobs
const GRIND_ZAK_KG = 25;

/* ── FAQ data ── */
const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel zakken cement heb ik nodig per m³ beton?",
    a: "Bij standaard C20/25 beton heb je ~300 kg cement per m³ nodig, dat zijn 12 zakken van 25 kg. Bij mager beton (C12/15) is dat ~200 kg (8 zakken), bij constructief beton (C30/37) ~350 kg (14 zakken).",
  },
  {
    q: "Wat is het verschil tussen mager en constructief beton?",
    a: "Mager beton (C12/15) heeft minder cement en is geschikt voor niet-dragende toepassingen zoals onderlagen en opvullingen. Constructief beton (C30/37 en hoger) bevat meer cement, is sterker en wordt gebruikt voor dragende constructies. De calculator past de verhoudingen automatisch aan.",
  },
  {
    q: "Hoeveel speling moet ik rekenen bij beton?",
    a: "Reken altijd 10% extra volume voor morsverlies, ongelijke ondergrond en bekisting die iets uitzet. Bij onregelmatige vormen of slecht voorbereide ondergrond kun je beter 15% aanhouden. De calculator rekent standaard met 10%.",
  },
  {
    q: "Kan ik beton zelf mengen of moet ik het bestellen?",
    a: "Tot ~1 m³ kun je prima zelf mengen met een betonmolen. Boven 1 m³ wordt het al snel efficiënter om stortklaar beton te bestellen bij een betoncentrale. Boven 3 m³ is bestellen bijna altijd voordeliger. De calculator helpt je inschatten hoeveel materiaal je nodig hebt voor zelf mengen.",
  },
  {
    q: "Hoeveel weegt 1 m³ beton?",
    a: "Gewapend beton weegt ~2.400 kg/m³, ongewapend beton ~2.300 kg/m³. De grondstoffen (cement + zand + grind + water) samen wegen iets meer dan het eindproduct, omdat er wat verdichting optreedt bij het mengen.",
  },
  {
    q: "Welke verhouding cement-zand-grind moet ik gebruiken?",
    a: "De klassieke verhouding voor standaardbeton is 1:2:3 (cement:zand:grind op gewicht). In de praktijk varieert dit per sterkteklasse. De calculator gebruikt de juiste verhoudingen per betontype - je hoeft zelf niet te rekenen.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Beton berekenen - hoeveel cement, zand en grind per m³ | Aannemer Systeem",
      url: PAGE_URL,
      description:
        "Bereken hoeveel m³ beton je nodig hebt en hoeveel zakken cement, zand en grind je moet bestellen. Gratis calculator voor aannemers.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 3, name: "Bouwmaterialen", item: `${SITE_URL}/tools/bouwmaterialen-berekenen` },
          { "@type": "ListItem", position: 4, name: "Beton berekenen", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Beton berekenen calculator",
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

const BetonBerekenen = () => {
  const [typeIdx, setTypeIdx] = useState(0);
  const [lengte, setLengte] = useState(5);
  const [breedte, setBreedte] = useState(3);
  const [dikte, setDikte] = useState(15); // cm
  const [speling, setSpeling] = useState(10); // %

  const bt = BETON_TYPES[typeIdx];

  const result = useMemo(() => {
    const volumeNetto = lengte * breedte * (dikte / 100); // m³
    const volumeBruto = volumeNetto * (1 + speling / 100);

    const cementKg = volumeBruto * bt.cementKg;
    const zandKg = volumeBruto * bt.zandKg;
    const grindKg = volumeBruto * bt.grindKg;
    const waterL = volumeBruto * bt.waterL;

    const cementZakken = Math.ceil(cementKg / CEMENT_ZAK_KG);
    const zandZakken = Math.ceil(zandKg / ZAND_ZAK_KG);
    const grindZakken = Math.ceil(grindKg / GRIND_ZAK_KG);

    return {
      volumeNetto,
      volumeBruto,
      cementKg,
      zandKg,
      grindKg,
      waterL,
      cementZakken,
      zandZakken,
      grindZakken,
      totaalGewicht: cementKg + zandKg + grindKg + waterL,
    };
  }, [lengte, breedte, dikte, speling, bt]);

  return (
    <PageShell>
      <Helmet>
        <title>Beton berekenen - hoeveel cement, zand en grind | Aannemer Systeem</title>
        <meta
          name="description"
          content="Bereken hoeveel m³ beton je nodig hebt en hoeveel zakken cement, zand en grind je moet bestellen. Kies betontype, vul afmetingen in - direct resultaat."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Beton berekenen | Gratis calculator | Aannemer Systeem" />
        <meta property="og:description" content="Bereken hoeveel cement, zand en grind je nodig hebt per m³ beton." />
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
            Beton berekenen
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Bereken hoeveel m³ beton je nodig hebt en hoeveel zakken cement, zand
            en grind je moet bestellen - inclusief speling voor morsverlies.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Beton type selector */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Betontype</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BETON_TYPES.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTypeIdx(i)}
                  className={`text-left rounded-xl border-2 p-4 transition-all ${
                    i === typeIdx
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:border-accent/40"
                  }`}
                >
                  <span className="block font-semibold text-foreground text-sm">{t.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{t.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Inputs */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput
              label="Lengte"
              suffix="m"
              value={lengte}
              onChange={setLengte}
              min={0.1}
              max={100}
              step={0.1}
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Breedte"
              suffix="m"
              value={breedte}
              onChange={setBreedte}
              min={0.1}
              max={100}
              step={0.1}
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Dikte / hoogte"
              suffix="cm"
              value={dikte}
              onChange={setDikte}
              min={1}
              max={200}
              step={1}
              slider
              sliderMin={5}
              sliderMax={100}
              hint="Gangbare diktes: vloer 10-15 cm, fundering 20-30 cm, oprit 12-15 cm"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Speling / morsverlies"
              suffix="%"
              value={speling}
              onChange={setSpeling}
              min={0}
              max={30}
              step={1}
              slider
              sliderMin={0}
              sliderMax={30}
              hint="Standaard 10%. Bij onregelmatige ondergrond 15%."
              icon={<Calculator className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Totaal volume"
              value={`${num2.format(result.volumeBruto)} m³`}
              caption={`Netto ${num2.format(result.volumeNetto)} m³ + ${speling}% speling`}
              icon={<HardHat className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Totaal gewicht"
              value={`${numInt.format(result.totaalGewicht)} kg`}
              caption={`≈ ${num.format(result.totaalGewicht / 1000)} ton`}
            />
          </div>

          {/* Materialen breakdown */}
          <motion.div {...fadeInUp} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              Materialen bestellen
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 font-medium text-muted-foreground">Materiaal</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Gewicht</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Zakken (25 kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 font-medium text-foreground">Cement</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.cementKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.cementZakken} zakken</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Zand</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.zandKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.zandZakken} zakken</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Grind</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.grindKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.grindZakken} zakken</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Water</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.waterL)} liter</td>
                    <td className="py-3 text-right text-muted-foreground">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              💡 Meer dan 1 m³ nodig? Overweeg stortklaar beton van een betoncentrale - vaak voordeliger en sneller.
            </p>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hoe werkt de berekening?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De calculator berekent eerst het <strong>netto volume</strong>: lengte × breedte × dikte.
              Daar komt je gekozen <strong>speling</strong> bovenop (standaard 10%) voor morsverlies en
              ongelijke ondergrond. Op basis van het betontype worden de juiste verhoudingen cement, zand
              en grind berekend.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Voorbeeld - oprit 5 × 3 m, 15 cm dik (C20/25):</p>
              <p>Netto volume: 5 × 3 × 0,15 = <strong>2,25 m³</strong></p>
              <p>Met 10% speling: 2,25 × 1,10 = <strong>2,48 m³</strong></p>
              <p>Cement: 2,48 × 300 = <strong>743 kg → 30 zakken</strong></p>
              <p>Zand: 2,48 × 700 = <strong>1.733 kg → 70 zakken</strong></p>
              <p>Grind: 2,48 × 1.100 = <strong>2.723 kg → 109 zakken</strong></p>
              <p>Water: 2,48 × 150 = <strong>372 liter</strong></p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips voor beton storten
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Bereid de ondergrond goed voor</strong> - verdicht
                de grond en leg eventueel een laag mager beton als ondervloer. Slechte ondergrond
                leidt tot scheuren.
              </li>
              <li>
                <strong className="text-foreground">Gebruik de juiste water-cementfactor</strong> - te
                veel water maakt het beton zwakker. Houd de mix klam maar niet nat.
              </li>
              <li>
                <strong className="text-foreground">Stort in één keer</strong> - werknaden zijn
                zwakke plekken. Plan zo dat je de hele plaat in één sessie kunt storten.
              </li>
              <li>
                <strong className="text-foreground">Trillen of stampen</strong> - verwijder
                luchtbellen door het verse beton te trillen met een betontrilnaald of af te stampen.
              </li>
              <li>
                <strong className="text-foreground">Nabehandelen</strong> - houd het beton de eerste
                dagen vochtig (afdekken met folie of nat houden). Te snel drogen veroorzaakt
                krimpscheuren.
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

export default BetonBerekenen;
