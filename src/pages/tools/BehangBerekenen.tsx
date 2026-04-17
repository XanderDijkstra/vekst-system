import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Ruler,
  Package,
  Scissors,
  Maximize2,
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
const PAGE_URL = `${SITE_URL}/tools/behang-berekenen`;

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 2 });

/* ── Rolformaten ── */
interface RolFormaat {
  label: string;
  lengte: number; // m
  breedte: number; // m
}

const ROL_FORMATEN: RolFormaat[] = [
  { label: "Standaard (10,05 × 0,53 m)", lengte: 10.05, breedte: 0.53 },
  { label: "Breed (10,05 × 0,70 m)", lengte: 10.05, breedte: 0.70 },
  { label: "Extra breed (10,05 × 1,06 m)", lengte: 10.05, breedte: 1.06 },
  { label: "Vliesbehang (25 × 1,06 m)", lengte: 25, breedte: 1.06 },
];

/* ── FAQ data ── */
const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel rollen behang heb ik nodig voor een kamer?",
    a: "Dat hangt af van de kameromtrek, plafondhoogte, het rolformaat en eventueel patroonrapport. Voor een gemiddelde slaapkamer (12 m omtrek, 2,60 m hoog) met standaardrollen heb je ~6 rollen nodig. Gebruik de calculator hierboven voor een exacte berekening.",
  },
  {
    q: "Wat is patroonrapport en hoeveel extra behang kost dat?",
    a: "Patroonrapport is de verticale afstand waarna het patroon zich herhaalt. Bij elke baan moet je het patroon laten aansluiten, waardoor je per baan materiaal verliest. Bij een rapport van 53 cm en een plafondhoogte van 2,60 m verlies je tot 53 cm per baan - dat kan 2-3 extra rollen kosten. Bij uni (effen) behang is er geen rapport en dus geen verlies.",
  },
  {
    q: "Moet ik ramen en deuren aftrekken?",
    a: "Grote openingen (ramen, deuren, schouwen) trek je af van de wandoppervlakte. Kleine ramen (< 1 m²) worden meestal niet afgetrokken - het extra behang dient als reserve. De calculator laat je het totale oppervlak aan openingen invoeren.",
  },
  {
    q: "Hoeveel behanglijm heb ik nodig?",
    a: "Reken op ~1 pak behanglijm per 5-6 rollen standaardbehang. Bij zwaar vliesbehang of glasvezelbehang is het verbruik hoger (~1 pak per 4 rollen). Check altijd de verpakking van je lijm voor het exacte verbruik per m².",
  },
  {
    q: "Kan ik behang over oud behang plakken?",
    a: "Technisch kan het bij glad, goed hechtend behang met maximaal één bestaande laag. Maar het resultaat is bijna altijd beter als je het oude behang verwijdert: minder bultjes, betere hechting en een gladder eindresultaat. Gebruik een behangafstomer voor snel verwijderen.",
  },
  {
    q: "Hoeveel m² zit er op een rol behang?",
    a: "Een standaardrol (10,05 × 0,53 m) bevat 5,33 m². Een brede rol (10,05 × 1,06 m) bevat 10,65 m². Let op: door patroonrapport en snijverlies is het bruikbare oppervlak per rol altijd minder dan het totale oppervlak.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Behang berekenen - hoeveel rollen behang nodig | Aannemer Systeem",
      url: PAGE_URL,
      description:
        "Bereken hoeveel rollen behang en lijm je nodig hebt. Vul kameromtrek, plafondhoogte en patroonrapport in - direct resultaat.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 3, name: "Bouwmaterialen", item: `${SITE_URL}/tools/bouwmaterialen-berekenen` },
          { "@type": "ListItem", position: 4, name: "Behang berekenen", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Behang berekenen calculator",
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

const BehangBerekenen = () => {
  const [rolIdx, setRolIdx] = useState(0);
  const [omtrek, setOmtrek] = useState(16); // m
  const [hoogte, setHoogte] = useState(2.6); // m
  const [openingen, setOpeningen] = useState(4); // m² ramen + deuren
  const [rapport, setRapport] = useState(0); // cm, 0 = geen patroon

  const rol = ROL_FORMATEN[rolIdx];

  const result = useMemo(() => {
    // Wandoppervlak
    const wandM2Bruto = omtrek * hoogte;
    const wandM2Netto = Math.max(0, wandM2Bruto - openingen);

    // Banen berekenen
    const aantalBanen = Math.ceil(omtrek / rol.breedte);

    // Baanlengte: plafondhoogte + rapport-verlies + 5 cm snijmarge boven/onder
    const rapportM = rapport / 100;
    const baanLengteZonderRapport = hoogte + 0.05;
    const baanLengte = rapportM > 0
      ? Math.ceil(baanLengteZonderRapport / rapportM) * rapportM + 0.05
      : baanLengteZonderRapport;

    // Banen per rol
    const banenPerRol = Math.floor(rol.lengte / baanLengte);
    const banenPerRolSafe = Math.max(1, banenPerRol);

    // Rollen nodig
    const rollen = Math.ceil(aantalBanen / banenPerRolSafe);

    // Lijm: ~1 pak per 5 rollen standaard
    const lijmPakken = Math.ceil(rollen / 5);

    // Bruikbaar vs totaal
    const totaalM2 = rollen * rol.lengte * rol.breedte;
    const verliesM2 = totaalM2 - wandM2Netto;

    return {
      wandM2Bruto,
      wandM2Netto,
      aantalBanen,
      baanLengte,
      banenPerRol: banenPerRolSafe,
      rollen,
      lijmPakken,
      totaalM2,
      verliesM2,
    };
  }, [omtrek, hoogte, openingen, rapport, rol]);

  return (
    <PageShell>
      <Helmet>
        <title>Behang berekenen - hoeveel rollen behang nodig | Aannemer Systeem</title>
        <meta
          name="description"
          content="Bereken hoeveel rollen behang en lijm je nodig hebt. Vul kameromtrek, plafondhoogte en patroonrapport in - gratis calculator voor aannemers."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Behang berekenen | Gratis calculator | Aannemer Systeem" />
        <meta property="og:description" content="Bereken hoeveel rollen behang en lijm je nodig hebt." />
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
            Behang berekenen
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Bereken hoeveel rollen behang je nodig hebt op basis van je kameromtrek,
            plafondhoogte en patroonrapport - inclusief lijm.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Rol formaat selector */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Rolformaat</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROL_FORMATEN.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setRolIdx(i)}
                  className={`text-left rounded-xl border-2 p-4 transition-all ${
                    i === rolIdx
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:border-accent/40"
                  }`}
                >
                  <span className="block font-semibold text-foreground text-sm">{r.label}</span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    {num2.format(r.lengte * r.breedte)} m² per rol
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Inputs */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput
              label="Omtrek kamer"
              suffix="m"
              value={omtrek}
              onChange={setOmtrek}
              min={1}
              max={100}
              step={0.5}
              slider
              sliderMin={4}
              sliderMax={40}
              hint="Tel alle wanden bij elkaar op"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Plafondhoogte"
              suffix="m"
              value={hoogte}
              onChange={setHoogte}
              min={1}
              max={5}
              step={0.05}
              slider
              sliderMin={2}
              sliderMax={4}
              hint="Standaard woningen: 2,40–2,60 m"
              icon={<Maximize2 className="h-4 w-4" />}
            />
            <CalcInput
              label="Openingen (ramen + deuren)"
              suffix="m²"
              value={openingen}
              onChange={setOpeningen}
              min={0}
              max={50}
              step={0.5}
              hint="Totaal m² van ramen en deuren aftrekken"
              icon={<Scissors className="h-4 w-4" />}
            />
            <CalcInput
              label="Patroonrapport"
              suffix="cm"
              value={rapport}
              onChange={setRapport}
              min={0}
              max={100}
              step={1}
              slider
              sliderMin={0}
              sliderMax={64}
              hint="0 = uni/effen behang (geen patroon)"
              icon={<Calculator className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Rollen behang"
              value={`${result.rollen} rollen`}
              caption={`${numInt.format(result.aantalBanen)} banen × ${num.format(result.baanLengte)} m lang - ${result.banenPerRol} banen per rol`}
              icon={<Package className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Wandoppervlak"
              value={`${num.format(result.wandM2Netto)} m²`}
              caption={`${num.format(result.wandM2Bruto)} m² bruto − ${num.format(openingen)} m² openingen`}
            />
          </div>

          {/* Extra info cards */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Behanglijm</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {result.lijmPakken} {result.lijmPakken === 1 ? "pak" : "pakken"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">~1 pak per 5 rollen</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Totaal m² behang</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(result.totaalM2)} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Op {result.rollen} rollen</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Snij-/patroonverlies</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(Math.max(0, result.verliesM2))} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {rapport > 0 ? "Inclusief patroonverlies" : "Alleen snijmarge"}
              </p>
            </div>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hoe werkt de berekening?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De calculator berekent eerst hoeveel <strong>banen</strong> je nodig hebt: de kameromtrek
              gedeeld door de rolbreedte. Elke baan is de plafondhoogte + snijmarge + eventueel
              patroonrapport. Het aantal banen per rol bepaalt hoeveel rollen je nodig hebt.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Voorbeeld - slaapkamer 4 × 4 m, 2,60 m hoog, standaardrol, rapport 32 cm:</p>
              <p>Omtrek: 4 × 4 = <strong>16 m</strong></p>
              <p>Banen: 16 / 0,53 = 30,2 → <strong>31 banen</strong></p>
              <p>Baanlengte: ⌈2,65 / 0,32⌉ × 0,32 + 0,05 = 9 × 0,32 + 0,05 = <strong>2,93 m</strong></p>
              <p>Banen per rol: ⌊10,05 / 2,93⌋ = <strong>3 banen</strong></p>
              <p>Rollen: 31 / 3 = 10,3 → <strong>11 rollen</strong></p>
              <p className="text-muted-foreground">Zonder rapport (uni): baanlengte 2,65 m → 3 banen/rol → 11 rollen. Hier maakt het rapport weinig verschil, maar bij hogere plafonds scheelt het snel 2-3 rollen.</p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips voor behangen
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Koop altijd 1 rol extra</strong> - rollen uit
                dezelfde batch hebben exact dezelfde kleur. Nabijbestellen kan een subtiel
                kleurverschil opleveren.
              </li>
              <li>
                <strong className="text-foreground">Check het batchnummer</strong> - alle rollen
                moeten hetzelfde batchnummer hebben om kleurverschil te voorkomen.
              </li>
              <li>
                <strong className="text-foreground">Begin naast het raam</strong> - werk vanaf het
                licht weg. Zo vallen de naden het minst op in het strijklicht.
              </li>
              <li>
                <strong className="text-foreground">Gebruik een loodlijn</strong> - trek een
                verticale lijn op de muur als startpunt. Muren zijn zelden perfect recht - zonder
                loodlijn loopt je behang al na een paar banen scheef.
              </li>
              <li>
                <strong className="text-foreground">Wek de lijm</strong> - bij papierbehang moet de
                lijm 5-10 minuten intrekken (weken) voordat je plakt. Bij vliesbehang breng je de
                lijm direct op de muur aan en plak je droog.
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
              <Link
                to="/tools/laminaat-berekenen"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Laminaat berekenen →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hoeveel pakken laminaat en ondervloer heb je nodig?
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

export default BehangBerekenen;
