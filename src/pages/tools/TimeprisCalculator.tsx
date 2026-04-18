import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  Euro,
  Percent,
  Briefcase,
  Target,
  Calendar,
  Calculator,
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
const PAGE_URL = `${SITE_URL}/verktoy/timepris-kalkulator`;

const kr = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const krHour = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });

const benchmarks: { trade: string; range: string; note: string }[] = [
  { trade: "Malere", range: "600 – 800 kr", note: "Sesongsensitiv, mye priskonkurranse" },
  { trade: "Murere", range: "650 – 900 kr", note: "Fysisk arbeid, spesialistpris høyere" },
  { trade: "Pussere", range: "650 – 900 kr", note: "Dekorpuss og betongfinish i toppen" },
  { trade: "Tømrere", range: "700 – 950 kr", note: "Interiørsnekker tjener mer enn råbygg" },
  { trade: "Rørleggere", range: "750 – 1 050 kr", note: "Akuttjobber og kveldstillegg: 25-50 %" },
  { trade: "Elektrikere", range: "800 – 1 100 kr", note: "FG-godkjenning og ansvar presser pris opp" },
  { trade: "Takleggere", range: "800 – 1 100 kr", note: "Høydeutstyr og sikring øker overhead" },
  { trade: "Installatører (solcelle, varmepumpe)", range: "850 – 1 200 kr", note: "Sertifisering og kunnskapskrevende" },
  { trade: "Entreprenører oppussing", range: "850 – 1 250 kr", note: "Prosjektledelse og tilleggsarbeid priset inn" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hva er en normal timepris for en håndverker i Norge?",
    a: "Timepriser for norske håndverkere ligger grovt mellom 600 og 1 200 kr per time, eks. MVA. Det varierer mye etter fag, region og erfaring. Malere og pussere ligger gjerne i underkanten, mens elektrikere, rørleggere og installatører med sertifisering legger seg høyere. Se benchmark-tabellen under for en fag-for-fag oversikt.",
  },
  {
    q: "Hvorfor lander håndverkere ofte på en lavere timepris enn de trenger?",
    a: "Tre klassiske grunner: (1) de regner med 40 fakturerbare timer i uken, mens de i praksis får 25-30 reelle fakturerbare timer etter at tilbud, reisetid, sykefravær og reklamasjoner er trukket fra, (2) de glemmer overhead som bil, forsikringer, OTP og regnskapsfører, og (3) de ser på hva konkurrenten tar i stedet for hva de selv trenger. Denne kalkulatoren snur tenkningen: først hva du trenger, deretter hva markedet betaler.",
  },
  {
    q: "Hva mener dere med 'fakturerbare timer'?",
    a: "Fakturerbare timer er de timene du kan sende faktura på - tid på byggeplassen der måleren går. Ikke-fakturerbart er alt rundt: å lage tilbud, reisetid, administrasjon, salg, reklamasjonsarbeid, kurs, reparasjon av eget utstyr. For en ENK-håndverker er 65-75 % av arbeidstimene fakturerbare et realistisk utgangspunkt. Kommer du til 90 % er du ikke ærlig med deg selv.",
  },
  {
    q: "Hvor mye overhead skal jeg regne inn?",
    a: "Tenk på: bil (avskrivning + drivstoff + forsikring + service), ansvarsforsikring, yrkesskadeforsikring, OTP (obligatorisk tjenestepensjon, minst 2 %), verktøyavskrivning, telefon, programvare, regnskapsfører, bankkostnader, kurs og buffer for sykepenger. For en ENK-håndverker ligger dette typisk på 15 000-25 000 kr per måned. Har du verksted eller ansatte, ligger du høyere.",
  },
  {
    q: "Skal jeg regne med MVA?",
    a: "Nei. Timeprisen kalkulatoren gir er eks. MVA - det er beløpet som kommer inn som omsetning i regnskapet ditt. MVA (25 % på de fleste håndverkertjenester) legger du på etterpå for kunden. MVA-en går videre til Skatteetaten, ikke til deg.",
  },
  {
    q: "Kan jeg bare heve timeprisen min?",
    a: "I de fleste tilfeller, ja - håndverkere undervurderer systematisk sin egen posisjon. To praktiske steg: (1) hev først for nye kunder og la eksisterende relasjoner ligge på gammel pris til neste prosjekt, (2) kommuniser økningen ikke som \"det har blitt dyrere\" men som \"dette er vår standardpris for denne typen arbeid\". Den som setter en ærlig pris basert på egne tall, mister sjelden kunder - og de man mister lå uansett på en trang margin.",
  },
  {
    q: "Hva hvis jeg er ansatt og vil bli selvstendig?",
    a: "Regn bruttolønnen din om til netto årsinntekt og bruk det som utgangspunkt for \"ønsket netto årsinntekt\". Men husk: som selvstendig mister du feriepenger, sykepenger de første 16 dagene, OTP fra arbeidsgiver og trygghet. Legg til 15-25 % på inntektsmålet for å kompensere. Først da ser du ærlig hva timeprisen må være for å ende opp likt.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Timepris-kalkulator for håndverkere",
  url: PAGE_URL,
  description:
    "Gratis timepris-kalkulator for håndverkere. Beregn hva du minst må ta per time basert på inntektsmål, fakturerbare timer, overhead og skatt.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Timepris-kalkulator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Timepris-kalkulator for håndverkere",
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

const TimeprisCalculator = () => {
  const [nettoJaar, setNettoJaar] = useState(700000);
  const [urenPerWeek, setUrenPerWeek] = useState(45);
  const [vakantieWeken, setVakantieWeken] = useState(5);
  const [declarablePct, setDeclarablePct] = useState(70);
  const [overheadMaand, setOverheadMaand] = useState(18000);
  const [belastingPct, setBelastingPct] = useState(35);

  const {
    minUurtarief,
    omzetNodig,
    omzetPerMaand,
    declarableHoursPerYear,
    extraPer10kr,
  } = useMemo(() => {
    const werkWeken = Math.max(0, 52 - vakantieWeken);
    const totaleUrenPerJaar = urenPerWeek * werkWeken;
    const declarableHours = totaleUrenPerJaar * (declarablePct / 100);
    const overheadJaar = overheadMaand * 12;
    const brutoVoorBelasting = nettoJaar / Math.max(0.01, 1 - belastingPct / 100);
    const totaleOmzet = brutoVoorBelasting + overheadJaar;
    const tarief = declarableHours > 0 ? totaleOmzet / declarableHours : 0;
    return {
      minUurtarief: tarief,
      omzetNodig: totaleOmzet,
      omzetPerMaand: totaleOmzet / 12,
      declarableHoursPerYear: declarableHours,
      extraPer10kr: 10 * declarableHours,
    };
  }, [nettoJaar, urenPerWeek, vakantieWeken, declarablePct, overheadMaand, belastingPct]);

  return (
    <PageShell>
      <Helmet>
        <title>Timepris-kalkulator for håndverkere | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis timepris-kalkulator for håndverkere. Beregn hva du minst må ta per time basert på inntektsmål, fakturerbare timer, overhead og skatt."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Timepris-kalkulator for håndverkere | Vekst Systemet" />
        <meta property="og:description" content="Beregn på 30 sekunder hva du minst må ta per time som håndverker. Gratis, ingen registrering." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-4">
            <Link
              to="/verktoy"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Kalkulatorer
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Timepris
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hva må du ta per time som håndverker?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Fyll inn inntektsmål, fakturerbare timer, overhead og skatt. Kalkulatoren
            regner tilbake hva du <strong>minst må fakturere per time</strong> for å
            gå rundt - uten å underbetale deg selv.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-system-card"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                Dine tall
              </h2>

              <div className="space-y-6">
                <CalcInput
                  label="Ønsket netto årsinntekt"
                  hint="Hva vil du sitte igjen med etter skatt? Vær ærlig - ikke det du tjener nå, men det du trenger."
                  value={nettoJaar}
                  onChange={setNettoJaar}
                  min={0}
                  max={5000000}
                  step={10000}
                  suffix="kr"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Arbeidstimer per uke"
                  hint="Totalt antall timer du jobber. Inkluderer tilbud, reisetid og administrasjon - ikke bare timer på byggeplassen."
                  value={urenPerWeek}
                  onChange={setUrenPerWeek}
                  min={0}
                  max={80}
                  step={1}
                  slider
                  sliderMax={70}
                  icon={<Clock className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Ferieuker per år"
                  hint="Ferie + sykedager + helligdager. Norge har 5 uker ferie + ca. 2 uker helligdager - 6-7 uker totalt er realistisk."
                  value={vakantieWeken}
                  onChange={setVakantieWeken}
                  min={0}
                  max={20}
                  step={1}
                  slider
                  sliderMax={12}
                  icon={<Calendar className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Fakturerbare timer"
                  hint="Av alle arbeidstimene dine: hvor mange prosent kan du fakturere direkte? Resten går til tilbud, administrasjon, reklamasjoner og reisetid."
                  value={declarablePct}
                  onChange={setDeclarablePct}
                  min={0}
                  max={100}
                  step={1}
                  suffix="%"
                  slider
                  icon={<Target className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Overhead per måned"
                  hint="Faste bedriftskostnader: bil, forsikringer, telefon, programvare, regnskapsfører, verktøyavskrivning, OTP, kurs."
                  value={overheadMaand}
                  onChange={setOverheadMaand}
                  min={0}
                  max={200000}
                  step={500}
                  suffix="kr"
                  icon={<Briefcase className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Skatt + avgifter"
                  hint="For ENK typisk 30-40 % (trinnskatt + trygdeavgift + buffer). 35 % er et rimelig grovt utgangspunkt."
                  value={belastingPct}
                  onChange={setBelastingPct}
                  min={0}
                  max={60}
                  step={1}
                  suffix="%"
                  slider
                  sliderMax={50}
                  icon={<Percent className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Minimumtimepris (eks. MVA)"
                value={krHour.format(minUurtarief)}
                caption={`Under denne prisen jobber du for mindre enn inntektsmålet på ${kr.format(nettoJaar)} netto per år.`}
                icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Årsomsetning som trengs"
                  value={kr.format(omzetNodig)}
                  caption="netto-mål + overhead + skatt"
                  icon={<Briefcase className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Per måned"
                  value={kr.format(omzetPerMaand)}
                  caption="gjennomsnittlig omsetning du må fakturere"
                  icon={<Calendar className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <CalcResultCard
                label="Fakturerbare timer per år"
                value={`${num.format(declarableHoursPerYear)} timer`}
                caption={`Det er ${num.format(declarableHoursPerYear / 12)} timer per måned du må hente omsetningen gjennom.`}
                icon={<Clock className="h-4 w-4" strokeWidth={1.75} />}
              />

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tommelfingerregel
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  10 kr ekstra per time gir deg ved ditt volum{" "}
                  <span className="font-bold text-accent tabular-nums">
                    {kr.format(extraPer10kr)}
                  </span>{" "}
                  ekstra per år - bare ved å justere prisen litt opp.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Hvordan beregner du timeprisen din?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Formelen jobber baklengs: du starter med hva du vil sitte igjen med
            netto, og regner tilbake til minimumsprisen per fakturerbar time.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li>
                <span className="text-muted-foreground">1.</span> Bruttolønn før skatt ={" "}
                <span className="font-semibold">netto / (1 − skatt %)</span>
              </li>
              <li>
                <span className="text-muted-foreground">2.</span> Omsetning som trengs ={" "}
                <span className="font-semibold">bruttolønn + (overhead × 12)</span>
              </li>
              <li>
                <span className="text-muted-foreground">3.</span> Fakturerbare timer ={" "}
                <span className="font-semibold">(52 − ferie) × timer/uke × fakturerbar %</span>
              </li>
              <li>
                <span className="text-muted-foreground">4.</span> Timepris ={" "}
                <span className="font-semibold">omsetning / fakturerbare timer</span>
              </li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eksempel:</span> en tømrer
                vil ha 700 000 kr netto, jobber 45 timer i uken, 5 ferieuker, 70 %
                fakturerbart, 18 000 kr overhead per måned, 35 % skatt.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Brutto før skatt: 700 000 / 0,65 ≈ 1 076 923 kr</li>
                <li>Omsetning som trengs: 1 076 923 + 216 000 = 1 292 923 kr</li>
                <li>Fakturerbare timer: (52 − 5) × 45 × 0,70 ≈ 1 481 timer</li>
                <li>
                  Timepris:{" "}
                  <span className="font-bold text-foreground">1 292 923 / 1 481 ≈ 873 kr</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Timepris-benchmarks per fagområde
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Gjennomsnittlige markedspriser i Norge, eks. MVA. Bruk dem som pejling -
            ditt eget beregnede minimum er viktigere enn snittet i bransjen.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-system-card"
          >
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">Fagområde</th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">Timepris (eks. MVA)</th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground hidden md:table-cell">Forklaring</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr key={b.trade} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 md:px-6 py-3 text-foreground">{b.trade}</td>
                    <td className="px-4 md:px-6 py-3 text-foreground font-semibold tabular-nums">{b.range}</td>
                    <td className="px-4 md:px-6 py-3 text-muted-foreground hidden md:table-cell">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            3 grunner til at håndverkere undervurderer timeprisen
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Ender du lavere enn benchmarks ovenfor, er det sjelden markedet som er
            problemet. Det pleier å være én av disse tre tankefeilene.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "For høy fakturerbarhetsantagelse",
                text: "Mange håndverkere regner med 40 fakturerbare timer i uken. I praksis går tilbud, reisetid, administrasjon og salg av det - du sitter igjen med 25-30 fakturerbare timer. Regn med 65-75 % fakturerbar, og tallene blir umiddelbart ærligere.",
              },
              {
                title: "Glemmer overhead",
                text: "Bil, forsikringer, OTP, programvare, regnskapsfører, kurs - fort 15 000 til 25 000 kr per måned samlet. Hvis du ikke bygger dette inn i timeprisen din, subsidierer du uten å ville det kundene dine.",
              },
              {
                title: "Sammenligner med konkurrenten",
                text: "Hvis alle i regionen tar for lite, blir det \"normalprisen\". Men konkurrenten er ikke benchmarken din - dine egne faste utgifter og inntektsmål er det. Regn først hva du trenger, forhandle så med markedet.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-system-card"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Relatert verktøy</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Leadverdi-kalkulator</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Nå som du vet timeprisen din, er neste spørsmål: hvor mye er du
              villig til å bruke for å skaffe en ny kunde? Leadverdi-kalkulatoren
              regner hva én innkommende forespørsel er verdt.
            </p>
            <Link
              to="/verktoy/leadverdi-kalkulator"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Til leadverdi-kalkulatoren →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Ofte stilte spørsmål
          </motion.h2>
          <motion.div {...fadeInUp} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
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

export default TimeprisCalculator;
