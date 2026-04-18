import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Euro,
  Percent,
  Briefcase,
  Calendar,
  Calculator,
  AlertTriangle,
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
const PAGE_URL = `${SITE_URL}/verktoy/personalkostnad-kalkulator`;

const kr = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const pct = (v: number) => `${Math.round(v * 10) / 10} %`;

const faqs: { q: string; a: string }[] = [
  {
    q: "Hva koster en ansatt i Norge utover bruttolønn?",
    a: "En tommelfingerregel er at en ansatt koster ca. 1,3x bruttolønnen når arbeidsgiveravgift, feriepenger, OTP, yrkesskadeforsikring og sykefravær er regnet inn. For en ansatt med 450 000 kr i bruttolønn per år betyr det ca. 585 000 kr i total arbeidsgiverkostnad. Kalkulatoren under gir det eksakte tallet basert på dine satser.",
  },
  {
    q: "Hva er arbeidsgiveravgift, og hvor mye er den?",
    a: "Arbeidsgiveravgift er en avgift arbeidsgiver betaler til staten for hver ansatt. Satsen avhenger av hvor bedriften er registrert (sone I-V). For de fleste områder i Norge, spesielt sentralt på Østlandet og i byene, er satsen 14,1 %. I distriktene og Nord-Troms/Finnmark kan satsen være lavere eller 0 %. Sjekk Skatteetatens soneinndeling for din kommune.",
  },
  {
    q: "Hvor mye feriepenger må jeg sette av?",
    a: "Minimumskravet i ferieloven er 10,2 % av bruttolønnen (svarer til 4 uker + 1 dag ferie). De fleste arbeidsgivere tilbyr 12 % som tilsvarer 5 uker ferie. Mange tariffavtaler krever 12 %. Ansatte over 60 år har rett til 2,3 % ekstra feriepenger. Feriepengene utbetales året etter opptjeningen, som regel i juni.",
  },
  {
    q: "Hva er OTP og hvor mye må jeg betale?",
    a: "OTP står for obligatorisk tjenestepensjon. Alle arbeidsgivere som har minst én ansatt i full stilling, eller flere deltidsansatte som til sammen utgjør 75 % av full stilling, må ha OTP-ordning. Minimumskravet er 2 % av lønn mellom 1 G og 12 G (omtrent 124 000 til 1,5 mill). Mange bedrifter gir 4-7 % som konkurranseevne.",
  },
  {
    q: "Hvordan håndteres sykefravær i Norge?",
    a: "Arbeidsgiverperioden er de første 16 kalenderdagene - da betaler arbeidsgiver full lønn. Deretter overtar NAV med sykepenger, forutsatt at den ansatte har opptjent rett til det. For budsjettering bruker vi ofte 5 % sykefravær som snittanslag (bransjen varierer 3-8 %). Kostnaden ligger altså i arbeidsgiverperioden og noe indirekte i produksjonstap.",
  },
  {
    q: "Hva er yrkesskadeforsikring?",
    a: "Yrkesskadeforsikring er lovpålagt for alle arbeidsgivere. Den dekker skader og yrkessykdommer ansatte pådrar seg i arbeidet. Premien varierer etter bransje - for håndverksfag med høy risiko ligger den ofte rundt 0,5-1,5 % av bruttolønn. Be tilbydere om konkret pris basert på antall ansatte og fagområde.",
  },
  {
    q: "Hva med arbeidstøy, verneutstyr og kurs?",
    a: "Disse er ikke inkludert i kalkulatoren men bør regnes inn. Typiske tall: arbeidstøy og verneutstyr 3 000-8 000 kr per ansatt per år, kurs og sertifiseringer 5 000-15 000 kr per år. Legg det til resultatet om du vil ha totalbildet. For elektrikere og takleggere ligger kostnadene i øvre sjikt på grunn av FG-godkjenning og høyderstigingskurs.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Personalkostnad-kalkulator for håndverkerbedrifter",
  url: PAGE_URL,
  description:
    "Gratis personalkostnad-kalkulator for norske arbeidsgivere. Se totale arbeidsgiverkostnader inkludert feriepenger, arbeidsgiveravgift, OTP og yrkesskadeforsikring.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Personalkostnad-kalkulator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Personalkostnad-kalkulator",
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

const PersonalkostnadCalculator = () => {
  const [maanedslonn, setMaanedslonn] = useState(38000);
  const [feriepengerPct, setFeriepengerPct] = useState(12);
  const [aga, setAga] = useState(14.1);
  const [otpPct, setOtpPct] = useState(2);
  const [yrkesskadePct, setYrkesskadePct] = useState(0.5);
  const [sykefravaerPct, setSykefravaerPct] = useState(5);
  const [arbeidstoy, setArbeidstoy] = useState(6000);

  const {
    brutolonnAar,
    feriepenger,
    agaKr,
    otpKr,
    yrkesskadeKr,
    sykefravaerKr,
    totalAarKost,
    totalMndKost,
    paaslagPct,
  } = useMemo(() => {
    const brutoAar = maanedslonn * 12;
    // Feriepenger: arbeidsgiveren reserverer dette på lønna (opptjenes året før, utbetales året etter)
    const ferie = brutoAar * (feriepengerPct / 100);
    // Arbeidsgiveravgift gjelder bruttolønn + feriepenger
    const grunnlagAGA = brutoAar + ferie;
    const aga_kr = grunnlagAGA * (aga / 100);
    // OTP på lønn mellom 1 G og 12 G, minstesats 2%. Her forenkler vi til prosent av brutto
    const otp = brutoAar * (otpPct / 100);
    const yrkesskade = brutoAar * (yrkesskadePct / 100);
    // Sykefravær: kostnad på arbeidsgiverperioden (grovt estimat)
    const sykefravaer = brutoAar * (sykefravaerPct / 100);
    const total = brutoAar + ferie + aga_kr + otp + yrkesskade + sykefravaer + arbeidstoy;
    const paslag = brutoAar > 0 ? ((total - brutoAar) / brutoAar) * 100 : 0;
    return {
      brutolonnAar: brutoAar,
      feriepenger: ferie,
      agaKr: aga_kr,
      otpKr: otp,
      yrkesskadeKr: yrkesskade,
      sykefravaerKr: sykefravaer,
      totalAarKost: total,
      totalMndKost: total / 12,
      paaslagPct: paslag,
    };
  }, [maanedslonn, feriepengerPct, aga, otpPct, yrkesskadePct, sykefravaerPct, arbeidstoy]);

  return (
    <PageShell>
      <Helmet>
        <title>Personalkostnad-kalkulator | Hva koster en ansatt? | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis personalkostnad-kalkulator for norske arbeidsgivere. Se totale arbeidsgiverkostnader med feriepenger, arbeidsgiveravgift, OTP og sykefravær."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Personalkostnad-kalkulator | Hva koster en ansatt? | Vekst Systemet" />
        <meta property="og:description" content="Se totale arbeidsgiverkostnader for en ansatt: bruttolønn, feriepenger, arbeidsgiveravgift, OTP, yrkesskadeforsikring og sykefravær." />
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
              Personalkostnad
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Hva koster egentlig en ansatt?
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Bruttolønnen er bare toppen av isfjellet. Se den reelle
            arbeidsgiverkostnaden med feriepenger, arbeidsgiveravgift, OTP,
            yrkesskadeforsikring og sykefravær - regnet for norske forhold.
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
                  label="Bruttolønn per måned"
                  hint="Typisk håndverker-lønn i 2026: 32 000-50 000 kr/mnd. Fagbrev og erfaring gir høyere."
                  value={maanedslonn}
                  onChange={setMaanedslonn}
                  min={0}
                  max={200000}
                  step={500}
                  suffix="kr"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Feriepenger"
                  hint="Lovens minstekrav er 10,2 %. Tariff og vanlig praksis er 12 % (5 uker ferie)."
                  value={feriepengerPct}
                  onChange={setFeriepengerPct}
                  min={0}
                  max={20}
                  step={0.1}
                  suffix="%"
                  slider
                  sliderMax={15}
                  icon={<Calendar className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Arbeidsgiveravgift"
                  hint="14,1 % er standardsats i sone I (storbyer og sentrale strøk). Distriktene har lavere - sjekk Skatteetatens soneinndeling."
                  value={aga}
                  onChange={setAga}
                  min={0}
                  max={14.1}
                  step={0.1}
                  suffix="%"
                  slider
                  icon={<Percent className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="OTP (tjenestepensjon)"
                  hint="Lovens minstekrav er 2 %. Mange bedrifter gir 4-7 % som konkurranseevne."
                  value={otpPct}
                  onChange={setOtpPct}
                  min={0}
                  max={15}
                  step={0.5}
                  suffix="%"
                  slider
                  sliderMax={10}
                  icon={<Briefcase className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Yrkesskadeforsikring"
                  hint="Varierer etter bransje. Håndverksfag ligger gjerne på 0,5-1,5 %."
                  value={yrkesskadePct}
                  onChange={setYrkesskadePct}
                  min={0}
                  max={5}
                  step={0.1}
                  suffix="%"
                  slider
                  sliderMax={3}
                  icon={<AlertTriangle className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Sykefravær (arbeidsgiverperiode)"
                  hint="Norsk bransjesnitt 3-8 %. Arbeidsgiver dekker de første 16 dagene med full lønn, deretter overtar NAV."
                  value={sykefravaerPct}
                  onChange={setSykefravaerPct}
                  min={0}
                  max={15}
                  step={0.5}
                  suffix="%"
                  slider
                  sliderMax={10}
                  icon={<Users className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Arbeidstøy + utstyr per år"
                  hint="Arbeidstøy, verneutstyr, verktøyandeler, kurs og diverse. Typisk 3 000-15 000 kr avhengig av fag."
                  value={arbeidstoy}
                  onChange={setArbeidstoy}
                  min={0}
                  max={50000}
                  step={500}
                  suffix="kr"
                  icon={<Briefcase className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Total arbeidsgiverkostnad per år"
                value={kr.format(totalAarKost)}
                caption={`Det er ${kr.format(totalMndKost)} per måned - et påslag på ${pct(paaslagPct)} over bruttolønn.`}
                icon={<Users className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Bruttolønn per år"
                  value={kr.format(brutolonnAar)}
                  caption={`${kr.format(maanedslonn)}/mnd × 12`}
                  icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Feriepenger"
                  value={kr.format(feriepenger)}
                  caption={`${pct(feriepengerPct)} av bruttolønn`}
                  icon={<Calendar className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-system-card"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Detaljert fordeling
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Bruttolønn", value: brutolonnAar },
                    { label: `Feriepenger (${pct(feriepengerPct)})`, value: feriepenger },
                    { label: `Arbeidsgiveravgift (${pct(aga)})`, value: agaKr },
                    { label: `OTP (${pct(otpPct)})`, value: otpKr },
                    { label: `Yrkesskadeforsikring (${pct(yrkesskadePct)})`, value: yrkesskadeKr },
                    { label: `Sykefravær (${pct(sykefravaerPct)})`, value: sykefravaerKr },
                    { label: "Arbeidstøy + utstyr", value: arbeidstoy },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm border-b border-border/40 pb-2 last:border-none last:pb-0">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-semibold text-foreground tabular-nums">{kr.format(row.value)}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-3 border-t-2 border-border text-base">
                    <span className="font-semibold text-foreground">Totalt</span>
                    <span className="font-bold text-accent tabular-nums">{kr.format(totalAarKost)}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tommelfingerregel
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  Den ansatte koster deg{" "}
                  <span className="font-bold text-accent tabular-nums">
                    {((totalAarKost / brutolonnAar) || 0).toFixed(2)}x
                  </span>{" "}
                  bruttolønn. For å dekke kostnaden må den ansatte fakturere
                  vesentlig mer enn det - med 60-70 % fakturerbare timer og sunn
                  margin, typisk 2-2,5x bruttolønnen.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Norsk arbeidsgiverkostnad - komponentene
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Norge har relativt høye, men forutsigbare arbeidsgiverkostnader. Her er
            hva du lovlig og typisk må regne med utover den avtalte bruttolønnen.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card space-y-6"
          >
            <div>
              <h3 className="font-semibold text-foreground">Feriepenger (10,2 – 12 %)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Lovens minstekrav er 10,2 %. Med 5 ukers ferie (de fleste tariffer)
                er satsen 12 %. Den ansatte tjener inn feriepengene året før, og de
                utbetales som regel i juni året etter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Arbeidsgiveravgift (0 – 14,1 %)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Avgift til staten per ansatt. Satsen avhenger av soneinndeling:
                Sone I (storbyer og sentralt Østland) 14,1 %, Sone II 10,6 %, Sone
                III 6,4 %, Sone IV 5,1 %, Sone V 0 %. Sjekk Skatteetatens register
                for din kommune.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">OTP - obligatorisk tjenestepensjon (≥ 2 %)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Lovpålagt for alle bedrifter med minst én heltidsansatt. Minstekrav
                er 2 % av lønn mellom 1 G og 12 G. Mange bedrifter gir 4-7 % som
                konkurranseevne og for å bygge lojalitet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Yrkesskadeforsikring (0,5 – 1,5 %)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Lovpålagt. Dekker skader og yrkessykdommer i arbeidet. Premien
                varierer mye etter bransje - håndverksfag med høyere risiko (tak,
                bygg, murer) ligger i øvre sjikt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Sykepenger (3 – 8 %)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Arbeidsgiverperioden er 16 kalenderdager med full lønn. Deretter
                overtar NAV. Bransjesnittet for håndverkersbedrifter ligger rundt
                5 %. Ikke regn for lavt - regelmessig sykefravær spiser raskt opp
                marginen på den ene ansatte.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Hva ansettelse egentlig betyr
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Før du ansetter din første eller tiende medarbeider: sjekk om
            tallene faktisk går opp. Med en fakturerbarhetsgrad på 65-75 % og
            sunne marginer, må én ansatt fakturere 2-2,5x bruttolønnen sin for å
            dekke alle kostnadene og gi deg noe overskudd.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Regn med realistisk fakturerbarhet",
                text: "Ansatte i håndverkersbedrifter er fakturerbare 65-75 % av tiden. Resten går til reisetid, tilbud, rydding, internmøter og diverse. Regner du med 90 % fakturerbart, bommer du alltid.",
              },
              {
                title: "Legg inn buffer for tap og tid før break-even",
                text: "Det tar ofte 3-6 måneder før en ny ansatt er fullt produktiv. Planlegg for underdekning i de første månedene, og at første året kan bli break-even eller svakt i pluss.",
              },
              {
                title: "Vurder underentreprenør vs ansettelse",
                text: "Underentreprenør koster mer per time men bærer egen risiko (ferie, sykefravær, OTP). Ansettelse gir stabil kapasitet men krever jevn sysselsetting. Regn begge scenarioer før du velger.",
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
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Relaterte verktøy</p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <Link to="/verktoy/timepris-kalkulator" className="group flex items-center gap-3 text-sm">
                <Percent className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">Timepris-kalkulator</span>
                  <p className="text-xs text-muted-foreground">Regn ut hva du minst må ta per time</p>
                </div>
              </Link>
              <Link to="/verktoy/prosjektmargin-kalkulator" className="group flex items-center gap-3 text-sm">
                <Euro className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">Prosjektmargin-kalkulator</span>
                  <p className="text-xs text-muted-foreground">Se om et prosjekt går i pluss</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
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

export default PersonalkostnadCalculator;
