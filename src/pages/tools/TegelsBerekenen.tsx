import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Grid3X3,
  Ruler,
  Package,
  Droplets,
  Percent,
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
const PAGE_URL = `${SITE_URL}/tools/tegels-berekenen`;

const num = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });

interface TegelFormaat {
  label: string;
  w: number; // cm
  h: number; // cm
  perDoos: number; // tegels per doos (typical)
}

const FORMATEN: TegelFormaat[] = [
  { label: "20 × 20 cm", w: 20, h: 20, perDoos: 25 },
  { label: "30 × 30 cm", w: 30, h: 30, perDoos: 11 },
  { label: "30 × 60 cm", w: 30, h: 60, perDoos: 8 },
  { label: "45 × 45 cm", w: 45, h: 45, perDoos: 6 },
  { label: "60 × 60 cm", w: 60, h: 60, perDoos: 4 },
  { label: "80 × 80 cm", w: 80, h: 80, perDoos: 3 },
  { label: "30 × 90 cm", w: 30, h: 90, perDoos: 5 },
  { label: "60 × 120 cm", w: 60, h: 120, perDoos: 2 },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hoeveel tegels heb ik nodig per m²?",
    a: "Dat hangt af van het tegelformaat en de voegbreedte. Bij 60×60 cm tegels met 3 mm voeg heb je ~2,8 tegels per m². Bij 30×60 cm is dat ~5,5. Gebruik de calculator hierboven: vul je formaat in en het wordt automatisch uitgerekend, inclusief snijverlies.",
  },
  {
    q: "Hoeveel snijverlies moet ik rekenen?",
    a: "Bij recht leggen (halfsteensverband, strokenverband) reken je 10%. Bij diagonaal leggen 15%. Heb je veel hoeken, uitsnijdingen rondom toiletpotten of buizen, of onregelmatige ruimtes? Ga naar 15–20%. Liever iets te veel dan te weinig — retourneren is makkelijker dan bijbestellen uit een andere batch.",
  },
  {
    q: "Hoeveel tegellijm heb ik nodig?",
    a: "Reken op ~5 kg tegellijm per m² bij standaard kamvertanding (10×10 mm). Bij grote formaten (60×60 of groter) gebruik je een grotere kam (12×12 mm) en is het verbruik ~6–7 kg/m². De calculator rekent met 5 kg/m² als basis — pas het handmatig aan als je een grotere kam gebruikt.",
  },
  {
    q: "Hoeveel voegmortel heb ik nodig?",
    a: "Het verbruik hangt af van de voegbreedte, tegeldikte en tegelformaat. Als vuistregel: bij 3 mm voeg en standaard wandtegels zit je op ~1,5 kg/m². Bij 5 mm voeg en dikke vloertegels op ~3 kg/m². De calculator geeft een indicatie — check altijd het verbruik op de verpakking van je specifieke voegmortel.",
  },
  {
    q: "Kan ik tegels uit verschillende dozen mixen?",
    a: "Ja, en dat moet je zelfs doen. Pak tegels afwisselend uit meerdere dozen om kleurverschillen gelijkmatig te verdelen. Dit heet 'mengen' en staat als tip op vrijwel elke doos. Wél belangrijk: alle dozen moeten uit dezelfde batch (chargenummer) komen.",
  },
  {
    q: "Hoeveel kost het om tegels te laten leggen?",
    a: "Reken voor het leggen (excl. materiaal) op €35–€65 per m², afhankelijk van formaat, patroon en de complexiteit van de ruimte. Grote formaten en diagonaal leggen zijn duurder. Wilt u een offerte? Zoek een tegelzetter via onze vakgebiedenpagina.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tegels berekenen — hoeveel tegels heb ik nodig?",
  url: PAGE_URL,
  description:
    "Gratis tegelcalculator. Bereken hoeveel tegels, dozen, tegellijm en voegmortel je nodig hebt voor je vloer of wand. Inclusief snijverlies.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Tegels berekenen", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Tegels berekenen calculator",
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

const TegelsBerekenen = () => {
  const [oppervlakte, setOppervlakte] = useState(12);
  const [formaatIdx, setFormaatIdx] = useState(4); // default 60×60
  const [voegbreedte, setVoegbreedte] = useState(3); // mm
  const [snijverlies, setSnijverlies] = useState(10); // %

  const formaat = FORMATEN[formaatIdx] ?? FORMATEN[4];

  const results = useMemo(() => {
    const tegelM2 =
      ((formaat.w + voegbreedte / 10) / 100) *
      ((formaat.h + voegbreedte / 10) / 100);
    const tegelsExact = tegelM2 > 0 ? oppervlakte / tegelM2 : 0;
    const tegelsMetVerlies = tegelsExact * (1 + snijverlies / 100);
    const aantalTegels = Math.ceil(tegelsMetVerlies);
    const aantalDozen = Math.ceil(aantalTegels / formaat.perDoos);

    // Lijm: ~5 kg/m² (standaard kamvertanding)
    const lijmKg = Math.ceil(oppervlakte * 5 * (1 + snijverlies / 200));
    // Voegmortel: roughly (voegbreedte mm × 6 × oppervlakte) / 1000 in kg
    // Simplified: ~0.5 kg/m² per mm voegbreedte for standard tiles
    const voegKg = Math.ceil(oppervlakte * voegbreedte * 0.5);

    return {
      tegelsExact,
      aantalTegels,
      aantalDozen,
      m2PerDoos: formaat.perDoos * (formaat.w / 100) * (formaat.h / 100),
      lijmKg,
      voegKg,
      lijmZakken: Math.ceil(lijmKg / 25), // 25kg zakken
      voegZakken: Math.ceil(voegKg / 5), // 5kg zakken
    };
  }, [oppervlakte, formaat, voegbreedte, snijverlies]);

  return (
    <PageShell>
      <Helmet>
        <title>Tegels berekenen — hoeveel tegels heb ik nodig? | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis tegelcalculator: bereken hoeveel tegels, dozen, tegellijm en voegmortel je nodig hebt. Kies je formaat, voeg snijverlies toe en bestel precies genoeg."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Tegels berekenen — hoeveel tegels heb ik nodig?" />
        <meta property="og:description" content="Bereken in 10 seconden hoeveel tegels je nodig hebt. Gratis, geen registratie." />
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
              Tegels berekenen
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hoeveel tegels heb ik nodig?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Vul je oppervlakte en tegelformaat in. De calculator rekent het aantal tegels,
            dozen, tegellijm en voegmortel uit — inclusief snijverlies zodat je niet te
            weinig bestelt.
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
                <CalcInput
                  label="Oppervlakte"
                  hint="Totale vloer- of wandoppervlakte in m². Meet lengte × breedte per ruimte."
                  value={oppervlakte}
                  onChange={setOppervlakte}
                  min={0}
                  max={500}
                  step={0.5}
                  suffix="m²"
                  slider
                  sliderMax={80}
                  sliderStep={0.5}
                  icon={<Ruler className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                {/* Formaat selector */}
                <div>
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                    <Grid3X3 className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
                    Tegelformaat
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {FORMATEN.map((f, i) => (
                      <button
                        key={f.label}
                        type="button"
                        onClick={() => setFormaatIdx(i)}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                          i === formaatIdx
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border bg-background text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {formaat.perDoos} tegels per doos · {num.format(formaat.perDoos * (formaat.w / 100) * (formaat.h / 100))} m² per doos
                  </p>
                </div>

                <CalcInput
                  label="Voegbreedte"
                  hint="Standaard 2–3 mm voor wand, 3–5 mm voor vloer. Smalle voeg = meer tegels nodig."
                  value={voegbreedte}
                  onChange={setVoegbreedte}
                  min={0}
                  max={10}
                  step={0.5}
                  suffix="mm"
                  slider
                  sliderMax={8}
                  sliderStep={0.5}
                  icon={<Droplets className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Snijverlies"
                  hint="Reken 10% voor rechte patronen, 15% voor diagonaal of bij veel hoeken en uitsnijdingen."
                  value={snijverlies}
                  onChange={setSnijverlies}
                  min={0}
                  max={30}
                  step={1}
                  suffix="%"
                  slider
                  sliderMax={25}
                  icon={<Percent className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Aantal tegels nodig"
                value={`${numInt.format(results.aantalTegels)} tegels`}
                caption={`${num.format(results.tegelsExact)} exact + ${snijverlies}% snijverlies = ${numInt.format(results.aantalTegels)} stuks`}
                icon={<Grid3X3 className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Dozen bestellen"
                  value={`${results.aantalDozen} dozen`}
                  caption={`${formaat.perDoos} tegels per doos`}
                  icon={<Package className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Oppervlakte besteld"
                  value={`${num.format(results.aantalDozen * results.m2PerDoos)} m²`}
                  caption={`${num.format(results.aantalDozen * results.m2PerDoos - oppervlakte)} m² extra`}
                  icon={<Ruler className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              {/* Materialen */}
              <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-card p-5 shadow-system-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Hulpmaterialen (indicatie)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tegellijm (~5 kg/m²)</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {results.lijmKg} kg · {results.lijmZakken}× zak 25 kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Voegmortel</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {results.voegKg} kg · {results.voegZakken}× zak 5 kg
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="rounded-2xl border border-dashed border-border bg-muted/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tip
                </p>
                <p className="mt-2 text-foreground leading-relaxed text-sm">
                  Bestel altijd minimaal 1 doos extra. Tegels uit een andere batch kunnen
                  subtiel in kleur afwijken — en bij schade over een paar jaar heb je direct
                  een vervangtegel uit dezelfde partij.
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
            Hoe bereken je hoeveel tegels je nodig hebt?
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card">
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li><span className="text-muted-foreground">1.</span> Oppervlakte per tegel = <span className="font-semibold">(breedte + voeg) × (hoogte + voeg)</span></li>
              <li><span className="text-muted-foreground">2.</span> Tegels exact = <span className="font-semibold">totale oppervlakte / oppervlakte per tegel</span></li>
              <li><span className="text-muted-foreground">3.</span> + snijverlies = <span className="font-semibold">tegels exact × (1 + verlies%)</span></li>
              <li><span className="text-muted-foreground">4.</span> Dozen = <span className="font-semibold">⌈tegels / tegels per doos⌉</span> (naar boven afronden)</li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> badkamervloer 3 × 4 = 12 m², tegels 60×60 cm, voeg 3 mm, 10% snijverlies.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Per tegel: 0,603 × 0,603 = 0,3636 m²</li>
                <li>Exact: 12 / 0,3636 = 33,0 tegels</li>
                <li>Met 10% verlies: 33 × 1,10 = 36,3 → <span className="font-bold text-foreground">37 tegels</span></li>
                <li>Dozen (4 per doos): 37 / 4 = 9,25 → <span className="font-bold text-foreground">10 dozen bestellen</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            5 besteltips voor tegels
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Altijd 1 doos extra", text: "Tegels uit een andere batch wijken subtiel af in kleur. Bewaar een doos voor reparaties over een paar jaar." },
              { title: "Check het chargenummer", text: "Alle dozen moeten hetzelfde chargenummer hebben. Vraag bij grotere bestellingen of alles uit één productierun komt." },
              { title: "Meng uit meerdere dozen", text: "Pak tegels afwisselend uit verschillende dozen om minimale kleurverschillen gelijkmatig te verdelen." },
              { title: "Diagonaal = meer verlies", text: "Diagonaal leggen levert ~15% snijverlies op i.p.v. 10%. Houd daar rekening mee bij je bestelling." },
              { title: "Lijm en voeg apart berekenen", text: "Gebruik de indicatie hierboven als startpunt, maar check het verbruik op de verpakking van je specifieke product." },
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

export default TegelsBerekenen;
