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

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/verktoy/tapet-kalkulator`;

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });
const numInt = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });
const num2 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 2 });

/* ── Rullformater ── */
interface RolFormaat {
  label: string;
  lengte: number; // m
  breedte: number; // m
}

const ROL_FORMATEN: RolFormaat[] = [
  { label: "Standard (10,05 × 0,53 m)", lengte: 10.05, breedte: 0.53 },
  { label: "Bred (10,05 × 0,70 m)", lengte: 10.05, breedte: 0.70 },
  { label: "Ekstra bred (10,05 × 1,06 m)", lengte: 10.05, breedte: 1.06 },
  { label: "Vlies-tapet (25 × 1,06 m)", lengte: 25, breedte: 1.06 },
];

/* ── FAQ data ── */
const faqs: { q: string; a: string }[] = [
  {
    q: "Hvor mange ruller tapet trenger jeg til et rom?",
    a: "Det avhenger av romomkrets, takhøyde, rullformat og eventuell mønsterrapport. For et gjennomsnittlig soverom (12 m omkrets, 2,60 m høyt) med standardruller trenger du ~6 ruller. Bruk kalkulatoren over for en nøyaktig beregning.",
  },
  {
    q: "Hva er mønsterrapport og hvor mye ekstra tapet koster det?",
    a: "Mønsterrapport er den vertikale avstanden der mønsteret gjentar seg. For hver bane må du sørge for at mønsteret passer, slik at du mister materiale per bane. Ved en rapport på 53 cm og takhøyde på 2,60 m mister du opptil 53 cm per bane - det kan koste 2-3 ekstra ruller. Ved uni (ensfarget) tapet er det ingen rapport og dermed ikke noe svinn.",
  },
  {
    q: "Må jeg trekke fra vinduer og dører?",
    a: "Store åpninger (vinduer, dører, peiser) trekker du fra veggflaten. Små vinduer (< 1 m²) trekkes vanligvis ikke fra - det ekstra tapetet fungerer som reserve. Kalkulatoren lar deg legge inn totalt areal av åpninger.",
  },
  {
    q: "Hvor mye tapetlim trenger jeg?",
    a: "Regn med ~1 pakke tapetlim per 5-6 ruller standardtapet. Ved tungt vlies-tapet eller glassfibertapet er forbruket høyere (~1 pakke per 4 ruller). Sjekk alltid pakningen på limet ditt for nøyaktig forbruk per m².",
  },
  {
    q: "Kan jeg lime tapet over gammelt tapet?",
    a: "Teknisk sett er det mulig ved glatt, godt festet tapet med maks ett eksisterende lag. Men resultatet blir nesten alltid bedre om du fjerner det gamle tapetet: færre ujevnheter, bedre heft og et glattere sluttresultat. Bruk en tapetdamper for rask fjerning.",
  },
  {
    q: "Hvor mange m² er det på en tapetrull?",
    a: "En standardrull (10,05 × 0,53 m) inneholder 5,33 m². En bred rull (10,05 × 1,06 m) inneholder 10,65 m². Merk: på grunn av mønsterrapport og svinn er den brukbare flaten per rull alltid mindre enn det totale arealet.",
  },
];

/* ── Schema ── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Tapet kalkulator - hvor mange ruller tapet | Vekst Systemet",
      url: PAGE_URL,
      description:
        "Beregn hvor mange ruller tapet og lim du trenger. Fyll inn romomkrets, takhøyde og mønsterrapport - direkte resultat.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
          { "@type": "ListItem", position: 3, name: "Byggematerialer", item: `${SITE_URL}/verktoy/byggematerialer-kalkulator` },
          { "@type": "ListItem", position: 4, name: "Tapet kalkulator", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Tapet kalkulator",
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

const BehangBerekenen = () => {
  const [rolIdx, setRolIdx] = useState(0);
  const [omtrek, setOmtrek] = useState(16); // m
  const [hoogte, setHoogte] = useState(2.6); // m
  const [openingen, setOpeningen] = useState(4); // m² vinduer + dører
  const [rapport, setRapport] = useState(0); // cm, 0 = ingen mønster

  const rol = ROL_FORMATEN[rolIdx];

  const result = useMemo(() => {
    // Veggflate
    const wandM2Bruto = omtrek * hoogte;
    const wandM2Netto = Math.max(0, wandM2Bruto - openingen);

    // Beregn baner
    const aantalBanen = Math.ceil(omtrek / rol.breedte);

    // Banelengde: takhøyde + rapportsvinn + 5 cm skjæremargin topp/bunn
    const rapportM = rapport / 100;
    const baanLengteZonderRapport = hoogte + 0.05;
    const baanLengte = rapportM > 0
      ? Math.ceil(baanLengteZonderRapport / rapportM) * rapportM + 0.05
      : baanLengteZonderRapport;

    // Baner per rull
    const banenPerRol = Math.floor(rol.lengte / baanLengte);
    const banenPerRolSafe = Math.max(1, banenPerRol);

    // Ruller nødvendig
    const rollen = Math.ceil(aantalBanen / banenPerRolSafe);

    // Lim: ~1 pakke per 5 ruller standard
    const lijmPakken = Math.ceil(rollen / 5);

    // Brukbart vs totalt
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
        <title>Tapet kalkulator - hvor mange ruller tapet | Vekst Systemet</title>
        <meta
          name="description"
          content="Beregn hvor mange ruller tapet og lim du trenger. Fyll inn romomkrets, takhøyde og mønsterrapport - gratis kalkulator for håndverkere."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Tapet kalkulator | Gratis verktøy | Vekst Systemet" />
        <meta property="og:description" content="Beregn hvor mange ruller tapet og lim du trenger." />
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
              to="/verktoy/byggematerialer-kalkulator"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              ← Byggematerialer
            </Link>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Tapet kalkulator
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Beregn hvor mange ruller tapet du trenger basert på romomkrets,
            takhøyde og mønsterrapport - inkludert lim.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl space-y-10">
          {/* Rullformat-velger */}
          <motion.div {...fadeInUp}>
            <p className="text-sm font-medium text-foreground mb-3">Rullformat</p>
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
                    {num2.format(r.lengte * r.breedte)} m² per rull
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Inputs */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CalcInput
              label="Omkrets rom"
              suffix="m"
              value={omtrek}
              onChange={setOmtrek}
              min={1}
              max={100}
              step={0.5}
              slider
              sliderMin={4}
              sliderMax={40}
              hint="Legg sammen alle vegger"
              icon={<Ruler className="h-4 w-4" />}
            />
            <CalcInput
              label="Takhøyde"
              suffix="m"
              value={hoogte}
              onChange={setHoogte}
              min={1}
              max={5}
              step={0.05}
              slider
              sliderMin={2}
              sliderMax={4}
              hint="Standard boliger: 2,40–2,60 m"
              icon={<Maximize2 className="h-4 w-4" />}
            />
            <CalcInput
              label="Åpninger (vinduer + dører)"
              suffix="m²"
              value={openingen}
              onChange={setOpeningen}
              min={0}
              max={50}
              step={0.5}
              hint="Totalt m² vinduer og dører som skal trekkes fra"
              icon={<Scissors className="h-4 w-4" />}
            />
            <CalcInput
              label="Mønsterrapport"
              suffix="cm"
              value={rapport}
              onChange={setRapport}
              min={0}
              max={100}
              step={1}
              slider
              sliderMin={0}
              sliderMax={64}
              hint="0 = uni/ensfarget tapet (uten mønster)"
              icon={<Calculator className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalcResultCard
              variant="hero"
              label="Tapetruller"
              value={`${result.rollen} ruller`}
              caption={`${numInt.format(result.aantalBanen)} baner × ${num.format(result.baanLengte)} m lange - ${result.banenPerRol} baner per rull`}
              icon={<Package className="h-5 w-5" />}
            />
            <CalcResultCard
              label="Veggflate"
              value={`${num.format(result.wandM2Netto)} m²`}
              caption={`${num.format(result.wandM2Bruto)} m² brutto − ${num.format(openingen)} m² åpninger`}
            />
          </div>

          {/* Extra info cards */}
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tapetlim</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {result.lijmPakken} {result.lijmPakken === 1 ? "pakke" : "pakker"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">~1 pakke per 5 ruller</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Totalt m² tapet</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(result.totaalM2)} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">På {result.rollen} ruller</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skjære-/mønstersvinn</p>
              <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">
                {num.format(Math.max(0, result.verliesM2))} m²
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {rapport > 0 ? "Inkludert mønstersvinn" : "Kun skjæremargin"}
              </p>
            </div>
          </motion.div>

          {/* Explainer */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Hvordan fungerer beregningen?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kalkulatoren beregner først hvor mange <strong>baner</strong> du trenger: romomkretsen
              delt på rullbredden. Hver bane er takhøyden + skjæremargin + eventuell
              mønsterrapport. Antall baner per rull bestemmer hvor mange ruller du trenger.
            </p>
            <div className="bg-muted rounded-xl p-5 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-semibold">Eksempel - soverom 4 × 4 m, 2,60 m høyt, standardrull, rapport 32 cm:</p>
              <p>Omkrets: 4 × 4 = <strong>16 m</strong></p>
              <p>Baner: 16 / 0,53 = 30,2 → <strong>31 baner</strong></p>
              <p>Banelengde: ⌈2,65 / 0,32⌉ × 0,32 + 0,05 = 9 × 0,32 + 0,05 = <strong>2,93 m</strong></p>
              <p>Baner per rull: ⌊10,05 / 2,93⌋ = <strong>3 baner</strong></p>
              <p>Ruller: 31 / 3 = 10,3 → <strong>11 ruller</strong></p>
              <p className="text-muted-foreground">Uten rapport (uni): banelengde 2,65 m → 3 baner/rull → 11 ruller. Her gjør rapporten liten forskjell, men ved høyere tak sparer det raskt 2-3 ruller.</p>
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div {...fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              5 tips for tapetsering
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Kjøp alltid 1 rull ekstra</strong> - ruller fra
                samme batch har nøyaktig samme farge. Etterbestilling kan gi en subtil
                fargeforskjell.
              </li>
              <li>
                <strong className="text-foreground">Sjekk batchnummeret</strong> - alle ruller
                må ha samme batchnummer for å unngå fargeforskjell.
              </li>
              <li>
                <strong className="text-foreground">Start ved siden av vinduet</strong> - jobb bort fra
                lyset. Da synes skjøtene minst i sidelyset.
              </li>
              <li>
                <strong className="text-foreground">Bruk et loddsnor</strong> - trekk en
                vertikal linje på veggen som utgangspunkt. Vegger er sjelden helt rette - uten
                loddsnor blir tapetet skjevt allerede etter noen baner.
              </li>
              <li>
                <strong className="text-foreground">Vekk limet</strong> - ved papirtapet må
                limet trekke inn 5-10 minutter (vekking) før du limer. Ved vlies-tapet påfører du
                limet direkte på veggen og limer tørt.
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
                to="/verktoy/maling-kalkulator"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Maling kalkulator →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hvor mange liter maling og spann trenger du?
                </p>
              </Link>
              <Link
                to="/verktoy/laminat-kalkulator"
                className="group block bg-card rounded-2xl p-5 border border-border hover:border-accent/40 transition-all"
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  Laminat kalkulator →
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hvor mange pakker laminat og underlag trenger du?
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

export default BehangBerekenen;
