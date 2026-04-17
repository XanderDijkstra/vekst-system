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

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/tools/beton-berekenen`;

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 2 });

/* ── Betongblandingstyper ── */
interface BetonType {
  label: string;
  desc: string;
  cementKg: number;  // kg sement per m³
  zandKg: number;    // kg sand per m³
  grindKg: number;   // kg grus per m³
  waterL: number;    // liter vann per m³
}

const BETON_TYPES: BetonType[] = [
  {
    label: "C20/25 - standard",
    desc: "Fundamenter, gulv, oppkjørsler",
    cementKg: 300,
    zandKg: 700,
    grindKg: 1100,
    waterL: 150,
  },
  {
    label: "C12/15 - mager betong",
    desc: "Underlag, fyllmasse, ikke-bærende",
    cementKg: 200,
    zandKg: 800,
    grindKg: 1150,
    waterL: 160,
  },
  {
    label: "C30/37 - konstruksjonsbetong",
    desc: "Bærende vegger, søyler, balkonger",
    cementKg: 350,
    zandKg: 650,
    grindKg: 1100,
    waterL: 155,
  },
  {
    label: "C35/45 - tungt belastet",
    desc: "Kjellere, vanntett, industrigulv",
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
    q: "Hvor mange sekker sement trenger jeg per m³ betong?",
    a: "Ved standard C20/25 betong trenger du ~300 kg sement per m³, det er 12 sekker à 25 kg. Ved mager betong (C12/15) er det ~200 kg (8 sekker), ved konstruksjonsbetong (C30/37) ~350 kg (14 sekker).",
  },
  {
    q: "Hva er forskjellen mellom mager og konstruksjonsbetong?",
    a: "Mager betong (C12/15) har mindre sement og egner seg for ikke-bærende bruk som underlag og oppfylling. Konstruksjonsbetong (C30/37 og høyere) inneholder mer sement, er sterkere og brukes til bærende konstruksjoner. Kalkulatoren justerer forholdene automatisk.",
  },
  {
    q: "Hvor mye svinn bør jeg regne med for betong?",
    a: "Regn alltid 10 % ekstra volum for søl, ujevn grunn og forskaling som gir seg litt. Ved uregelmessige former eller dårlig forberedt grunn kan du heller bruke 15 %. Kalkulatoren regner med 10 % som standard.",
  },
  {
    q: "Kan jeg blande betong selv eller bør jeg bestille?",
    a: "Opptil ~1 m³ kan du fint blande selv med en betongblander. Over 1 m³ blir det raskt mer effektivt å bestille ferdigbetong fra en betongstasjon. Over 3 m³ er bestilling nesten alltid mest lønnsomt. Kalkulatoren hjelper deg å anslå hvor mye material du trenger for egen blanding.",
  },
  {
    q: "Hvor mye veier 1 m³ betong?",
    a: "Armert betong veier ~2 400 kg/m³, uarmert betong ~2 300 kg/m³. Råvarene (sement + sand + grus + vann) veier til sammen litt mer enn sluttproduktet, fordi det skjer en viss fortetting ved blanding.",
  },
  {
    q: "Hvilket forhold sement-sand-grus bør jeg bruke?",
    a: "Det klassiske forholdet for standardbetong er 1:2:3 (sement:sand:grus på vekt). I praksis varierer dette etter styrkeklasse. Kalkulatoren bruker riktig forhold per betongtype - du trenger ikke regne selv.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Betong kalkulator - hvor mye sement, sand og grus per m³ | Vekst Systemet",
      url: PAGE_URL,
      description:
        "Beregn hvor mange m³ betong du trenger og hvor mange sekker sement, sand og grus du må bestille. Gratis kalkulator for håndverkere.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 3, name: "Byggematerialer", item: `${SITE_URL}/tools/bouwmaterialen-berekenen` },
          { "@type": "ListItem", position: 4, name: "Betong kalkulator", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Betong kalkulator",
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
        <title>Betong kalkulator - hvor mye sement, sand og grus | Vekst Systemet</title>
        <meta
          name="description"
          content="Beregn hvor mange m³ betong du trenger og hvor mange sekker sement, sand og grus du må bestille. Velg betongtype, fyll inn mål - direkte resultat."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Betong kalkulator | Gratis verktøy | Vekst Systemet" />
        <meta property="og:description" content="Beregn hvor mye sement, sand og grus du trenger per m³ betong." />
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
              to="/tools/bouwmaterialen-berekenen"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              ← Byggematerialer
            </Link>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Betong kalkulator
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Beregn hvor mange m³ betong du trenger og hvor mange sekker sement, sand
            og grus du må bestille - inkludert svinn for søl.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Betongtype-velger */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Betongtype</p>
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
              label="Lengde"
              suffix="m"
              value={lengte}
              onChange={setLengte}
              min={0.1}
              max={100}
              step={0.1}
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Bredde"
              suffix="m"
              value={breedte}
              onChange={setBreedte}
              min={0.1}
              max={100}
              step={0.1}
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Tykkelse / høyde"
              suffix="cm"
              value={dikte}
              onChange={setDikte}
              min={1}
              max={200}
              step={1}
              slider
              sliderMin={5}
              sliderMax={100}
              hint="Vanlige tykkelser: gulv 10-15 cm, fundament 20-30 cm, oppkjørsel 12-15 cm"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Svinn / søl"
              suffix="%"
              value={speling}
              onChange={setSpeling}
              min={0}
              max={30}
              step={1}
              slider
              sliderMin={0}
              sliderMax={30}
              hint="Standard 10 %. Ved ujevn grunn 15 %."
              icon={<Calculator className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Totalt volum"
              value={`${num2.format(result.volumeBruto)} m³`}
              caption={`Netto ${num2.format(result.volumeNetto)} m³ + ${speling} % svinn`}
              icon={<HardHat className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Totalvekt"
              value={`${numInt.format(result.totaalGewicht)} kg`}
              caption={`≈ ${num.format(result.totaalGewicht / 1000)} tonn`}
            />
          </div>

          {/* Materialoversikt */}
          <motion.div {...fadeInUp} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              Materialer å bestille
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 font-medium text-muted-foreground">Material</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Vekt</th>
                    <th className="pb-2 font-medium text-muted-foreground text-right">Sekker (25 kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 font-medium text-foreground">Sement</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.cementKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.cementZakken} sekker</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Sand</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.zandKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.zandZakken} sekker</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Grus</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.grindKg)} kg</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{result.grindZakken} sekker</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-foreground">Vann</td>
                    <td className="py-3 text-right tabular-nums">{numInt.format(result.waterL)} liter</td>
                    <td className="py-3 text-right text-muted-foreground">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              💡 Trenger mer enn 1 m³? Vurder ferdigbetong fra en betongstasjon - ofte billigere og raskere.
            </p>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hvordan fungerer beregningen?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kalkulatoren beregner først <strong>nettovolumet</strong>: lengde × bredde × tykkelse.
              Deretter legges det valgte <strong>svinnet</strong> til (standard 10 %) for søl og
              ujevn grunn. Basert på betongtypen beregnes riktig forhold mellom sement, sand
              og grus.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Eksempel - oppkjørsel 5 × 3 m, 15 cm tykk (C20/25):</p>
              <p>Nettovolum: 5 × 3 × 0,15 = <strong>2,25 m³</strong></p>
              <p>Med 10 % svinn: 2,25 × 1,10 = <strong>2,48 m³</strong></p>
              <p>Sement: 2,48 × 300 = <strong>743 kg → 30 sekker</strong></p>
              <p>Sand: 2,48 × 700 = <strong>1 733 kg → 70 sekker</strong></p>
              <p>Grus: 2,48 × 1 100 = <strong>2 723 kg → 109 sekker</strong></p>
              <p>Vann: 2,48 × 150 = <strong>372 liter</strong></p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips for betongstøp
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Forbered grunnen godt</strong> - komprimer
                grunnen og legg eventuelt et lag mager betong som underlag. Dårlig grunn
                fører til sprekker.
              </li>
              <li>
                <strong className="text-foreground">Bruk riktig vann-sement-forhold</strong> - for
                mye vann gjør betongen svakere. Hold blandingen fuktig, men ikke våt.
              </li>
              <li>
                <strong className="text-foreground">Støp i ett strekk</strong> - arbeidsfuger er
                svake punkter. Planlegg slik at hele platen kan støpes i én økt.
              </li>
              <li>
                <strong className="text-foreground">Vibrer eller stamp</strong> - fjern
                luftbobler ved å vibrere den ferske betongen med en vibrostav eller stampe den.
              </li>
              <li>
                <strong className="text-foreground">Etterbehandling</strong> - hold betongen fuktig
                de første dagene (dekk med plast eller hold våt). For rask tørking gir
                krympesprekker.
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
                to="/tools/tegels-berekenen"
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
                to="/tools/verf-berekenen"
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

      <CtaSection />
    </PageShell>
  );
};

export default BetonBerekenen;
