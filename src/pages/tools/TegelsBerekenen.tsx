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

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/verktoy/fliser-kalkulator`;

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });

interface TegelFormaat {
  label: string;
  w: number; // cm
  h: number; // cm
  perDoos: number; // fliser per eske (typical)
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
    q: "Hvor mange fliser trenger jeg per m²?",
    a: "Det avhenger av fliseformatet og fugebredden. Ved 60×60 cm fliser med 3 mm fuge trenger du ~2,8 fliser per m². Ved 30×60 cm blir det ~5,5. Bruk kalkulatoren over: fyll inn formatet og det regnes ut automatisk, inkludert svinn.",
  },
  {
    q: "Hvor mye svinn bør jeg regne med?",
    a: "Ved rett legging (halvforband, stripeforband) regner du 10 %. Ved diagonal legging 15 %. Har du mange hjørner, utskjæringer rundt toalettsokler eller rør, eller uregelmessige rom? Gå til 15–20 %. Heller litt for mye enn for lite - å returnere er enklere enn å etterbestille fra en annen batch.",
  },
  {
    q: "Hvor mye flislim trenger jeg?",
    a: "Regn med ~5 kg flislim per m² ved standard tannsparkling (10×10 mm). Ved store formater (60×60 eller større) bruker du en større tann (12×12 mm) og forbruket blir ~6–7 kg/m². Kalkulatoren regner med 5 kg/m² som basis - juster manuelt hvis du bruker en større tann.",
  },
  {
    q: "Hvor mye fugemasse trenger jeg?",
    a: "Forbruket avhenger av fugebredden, flisetykkelsen og fliseformatet. Som tommelfingerregel: ved 3 mm fuge og standard veggfliser er du på ~1,5 kg/m². Ved 5 mm fuge og tykke gulvfliser på ~3 kg/m². Kalkulatoren gir en indikasjon - sjekk alltid forbruket på pakningen til din spesifikke fugemasse.",
  },
  {
    q: "Kan jeg blande fliser fra forskjellige esker?",
    a: "Ja, og det bør du faktisk gjøre. Ta fliser vekselvis fra flere esker for å fordele fargeforskjeller jevnt. Dette kalles 'å blande' og står som tips på nesten hver eske. Det er viktig at alle eskene er fra samme batch (sjargenummer).",
  },
  {
    q: "Hvor mye koster det å få lagt fliser?",
    a: "Regn for legging (eksl. material) på 420-780 kr per m², avhengig av format, mønster og kompleksiteten i rommet. Store formater og diagonal legging er dyrere. Vil du ha et tilbud? Finn en flislegger via vår fagområdeside.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fliskalkulator - hvor mange fliser trenger jeg?",
  url: PAGE_URL,
  description:
    "Gratis fliskalkulator. Beregn hvor mange fliser, esker, flislim og fugemasse du trenger til gulv eller vegg. Inkludert svinn.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Fliskalkulator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Fliskalkulator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
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
      lijmZakken: Math.ceil(lijmKg / 25), // 25kg sekker
      voegZakken: Math.ceil(voegKg / 5), // 5kg sekker
    };
  }, [oppervlakte, formaat, voegbreedte, snijverlies]);

  return (
    <PageShell>
      <Helmet>
        <title>Fliskalkulator - hvor mange fliser trenger jeg? | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis fliskalkulator: beregn hvor mange fliser, esker, flislim og fugemasse du trenger. Velg format, legg til svinn og bestill akkurat nok."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Fliskalkulator - hvor mange fliser trenger jeg?" />
        <meta property="og:description" content="Beregn på 10 sekunder hvor mange fliser du trenger. Gratis, ingen registrering." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
            <Link to="/verktoy" className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">
              Kalkulatorer
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Fliskalkulator
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hvor mange fliser trenger jeg?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Fyll inn flaten og fliseformatet ditt. Kalkulatoren regner ut antall fliser,
            esker, flislim og fugemasse - inkludert svinn slik at du ikke bestiller
            for lite.
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
                Dine data
              </h2>
              <div className="space-y-6">
                <CalcInput
                  label="Flate"
                  hint="Total gulv- eller veggflate i m². Mål lengde × bredde per rom."
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
                    Fliseformat
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
                    {formaat.perDoos} fliser per eske · {num.format(formaat.perDoos * (formaat.w / 100) * (formaat.h / 100))} m² per eske
                  </p>
                </div>

                <CalcInput
                  label="Fugebredde"
                  hint="Standard 2–3 mm for vegg, 3–5 mm for gulv. Smal fuge = flere fliser."
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
                  label="Svinn"
                  hint="Regn 10 % for rette mønstre, 15 % for diagonal eller ved mange hjørner og utskjæringer."
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
                label="Antall fliser nødvendig"
                value={`${numInt.format(results.aantalTegels)} fliser`}
                caption={`${num.format(results.tegelsExact)} eksakt + ${snijverlies} % svinn = ${numInt.format(results.aantalTegels)} stk`}
                icon={<Grid3X3 className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Esker å bestille"
                  value={`${results.aantalDozen} esker`}
                  caption={`${formaat.perDoos} fliser per eske`}
                  icon={<Package className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Flate bestilt"
                  value={`${num.format(results.aantalDozen * results.m2PerDoos)} m²`}
                  caption={`${num.format(results.aantalDozen * results.m2PerDoos - oppervlakte)} m² ekstra`}
                  icon={<Ruler className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              {/* Materialer */}
              <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-card p-5 shadow-system-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Hjelpematerialer (indikasjon)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Flislim (~5 kg/m²)</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {results.lijmKg} kg · {results.lijmZakken}× sekk 25 kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Fugemasse</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {results.voegKg} kg · {results.voegZakken}× sekk 5 kg
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="rounded-2xl border border-dashed border-border bg-muted/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tips
                </p>
                <p className="mt-2 text-foreground leading-relaxed text-sm">
                  Bestill alltid minst 1 eske ekstra. Fliser fra en annen batch kan avvike
                  subtilt i farge - og ved skade om noen år har du en reservefliss fra
                  samme parti.
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
            Hvordan beregner du hvor mange fliser du trenger?
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card">
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li><span className="text-muted-foreground">1.</span> Flate per flis = <span className="font-semibold">(bredde + fuge) × (høyde + fuge)</span></li>
              <li><span className="text-muted-foreground">2.</span> Fliser eksakt = <span className="font-semibold">total flate / flate per flis</span></li>
              <li><span className="text-muted-foreground">3.</span> + svinn = <span className="font-semibold">fliser eksakt × (1 + svinn %)</span></li>
              <li><span className="text-muted-foreground">4.</span> Esker = <span className="font-semibold">⌈fliser / fliser per eske⌉</span> (rund opp)</li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eksempel:</span> badegulv 3 × 4 = 12 m², fliser 60×60 cm, fuge 3 mm, 10 % svinn.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Per flis: 0,603 × 0,603 = 0,3636 m²</li>
                <li>Eksakt: 12 / 0,3636 = 33,0 fliser</li>
                <li>Med 10 % svinn: 33 × 1,10 = 36,3 → <span className="font-bold text-foreground">37 fliser</span></li>
                <li>Esker (4 per eske): 37 / 4 = 9,25 → <span className="font-bold text-foreground">10 esker å bestille</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            5 bestillingstips for fliser
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Alltid 1 eske ekstra", text: "Fliser fra en annen batch avviker subtilt i farge. Oppbevar en eske til reparasjoner om noen år." },
              { title: "Sjekk sjargenummeret", text: "Alle esker må ha samme sjargenummer. Spør ved større bestillinger om alt kommer fra én produksjonsomgang." },
              { title: "Bland fra flere esker", text: "Ta fliser vekselvis fra forskjellige esker for å fordele minimale fargeforskjeller jevnt." },
              { title: "Diagonal = mer svinn", text: "Diagonal legging gir ~15 % svinn i stedet for 10 %. Ta hensyn til det i bestillingen." },
              { title: "Beregn lim og fuge separat", text: "Bruk indikasjonen ovenfor som utgangspunkt, men sjekk forbruket på pakningen til ditt spesifikke produkt." },
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
            Ofte stilte spørsmål
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
