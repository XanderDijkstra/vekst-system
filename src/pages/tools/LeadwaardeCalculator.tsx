import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Inbox,
  Target,
  Euro,
  TrendingUp,
  Calendar,
  ArrowRight,
  Calculator,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcInput from "@/components/tools/CalcInput";
import CalcResultCard from "@/components/tools/CalcResultCard";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/verktoy/leadverdi-kalkulator`;

// ---------- Formatters ----------

const kr = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const krPrecise = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const num = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 });

// ---------- Benchmarks content ----------

const benchmarks: { trade: string; range: string; note: string }[] = [
  { trade: "Rørleggere & akuttjobber", range: "30 – 45 %", note: "Høy hast, kort beslutningsløp" },
  { trade: "Takleggere", range: "20 – 30 %", note: "Tilbud sammenlignes oftere, lengre syklus" },
  { trade: "Malere", range: "25 – 35 %", note: "Sensitivt for anmeldelser og svartid på tilbud" },
  { trade: "Entreprenører (store oppussinger)", range: "10 – 20 %", note: "Lang salgssyklus, mye konkurranse" },
  { trade: "Installatører (solceller, varmepumpe)", range: "15 – 25 %", note: "Prissammenligning spiller stor rolle" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hva er en lead verdt for en håndverker?",
    a: "Leadverdien er gjennomsnittlig omsetning du tjener per forespørsel, før du faktisk har vunnet jobben. Formelen er enkel: konverteringsrate × gjennomsnittlig prosjektverdi. Hvis du vinner 25 % av forespørslene dine og et gjennomsnittlig prosjekt gir 90 000 kr, er hver forespørsel i snitt verdt 22 500 kr - uavhengig av om du vinner eller taper akkurat den. Det tallet er utgangspunktet for beslutninger om markedsføringsbudsjett, oppfølgingsfart og kvalifisering.",
  },
  {
    q: "Hvordan øker jeg konverteringsraten?",
    a: "De tre største driverne for håndverkere er: (1) raskere respons - den som ringer innen 5 minutter vinner ~4x oftere enn den som svarer etter 24 timer, (2) høyere anmeldelses-score slik at den som spør om tilbud tar deg mer seriøst, og (3) bedre kvalifisering slik at du ikke kaster bort tid på forespørsler som aldri blir prosjekter. Vårt lead-oppfølgingssystem og anmeldelsesfunnel er bygget nettopp for disse tre driverne.",
  },
  {
    q: "Skal jeg regne med MVA i prosjektverdien?",
    a: "Nei - kalkulatoren jobber som standard med beløp eks. MVA, for det er omsetningen som havner i regnskapet ditt. Vil du heller regne ink. MVA, slå på bryteren over kalkulatoren. Viktig: bruk samme grunnlag konsekvent. Å blande ink./eks. MVA på tvers av beregninger fører alltid til feil.",
  },
  {
    q: "Hva er en normal konverteringsrate i byggebransjen?",
    a: "Det varierer mye etter type arbeid. Akuttjobber for rørleggere ligger ofte på 30–45 % fordi kundene må bestemme seg raskt. Store oppussinger ligger heller på 10–20 % fordi folk sammenligner 3-4 tilbud. Se benchmark-tabellen under. Det ærlige svaret: å kjenne dine egne tall er viktigere enn et gjennomsnitt - mål et par måneder og bruk det som utgangspunkt.",
  },
  {
    q: "Hvor henter jeg egne tall fra hvis jeg ikke fører dem?",
    a: "Start enkelt: tell alle innkommende forespørsler (via telefon, skjema, WhatsApp, alt) i én måned og tell hvor mange som ble en bekreftet jobb. For prosjektverdien: ta de siste 10 ferdigstilte prosjektene dine og regn gjennomsnittet. Innen fire uker har du tre realistiske tall å putte inn i kalkulatoren. Etterpå vet du bedre hvilke markedsføringsinvesteringer som er smarte.",
  },
  {
    q: "Hvor mye kan jeg maks bruke per lead?",
    a: "En tommelfingerregel: maks kost per lead = leadverdi × (1 – bruttomargin). Hvis en lead gir 25 000 kr i snitt og du har 30 % bruttomargin, kan du i teorien bruke 7 500 kr per lead og gå break-even. I praksis vil du ha en komfortabel buffer - mange håndverkere setter 40–50 % av leadverdien som absolutt tak. Vi publiserer snart en egen max-CPC-kalkulator som regner dette ut per kanal.",
  },
];

// ---------- Schema.org ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leadverdi-kalkulator for håndverkere",
  url: PAGE_URL,
  description:
    "Gratis leadverdi-kalkulator for håndverkere. Beregn hva en lead gir bedriften din: fyll inn forespørsler per måned, konverteringsrate og prosjektverdi.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Leadverdi-kalkulator",
        item: PAGE_URL,
      },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Leadverdi-kalkulator",
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

const LeadwaardeCalculator = () => {
  const [aanvragen, setAanvragen] = useState(20);
  const [conversie, setConversie] = useState(25);
  const [projectwaarde, setProjectwaarde] = useState(90000);
  const [inclBtw, setInclBtw] = useState(false);

  const { projectsPerMonth, revenuePerMonth, valuePerLead, yearRevenue, maxCpa } = useMemo(() => {
    const projects = (aanvragen * conversie) / 100;
    const revenue = projects * projectwaarde;
    // If the user entered an incl-MVA amount, strip MVA (25%) to get the ex-MVA number
    // we show in the headline. Keep the hint visible in the label.
    const revEx = inclBtw ? revenue / 1.25 : revenue;
    const valuePer = (conversie / 100) * (inclBtw ? projectwaarde / 1.25 : projectwaarde);
    return {
      projectsPerMonth: projects,
      revenuePerMonth: revEx,
      valuePerLead: valuePer,
      yearRevenue: revEx * 12,
      maxCpa: valuePer * 0.3,
    };
  }, [aanvragen, conversie, projectwaarde, inclBtw]);

  return (
    <PageShell>
      <Helmet>
        <title>Leadverdi-kalkulator for håndverkere | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis leadverdi-kalkulator for håndverkere. Fyll inn forespørsler per måned, konverteringsrate og prosjektverdi - se hva en lead er verdt med en gang."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta
          property="og:title"
          content="Leadverdi-kalkulator for håndverkere | Vekst Systemet"
        />
        <meta
          property="og:description"
          content="Beregn på 30 sekunder hva en lead er verdt for håndverkerbedriften din. Gratis, ingen registrering."
        />
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
            <Link
              to="/verktoy"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Kalkulatorer
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Leadverdi
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Hva er en lead verdt for deg?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Fyll inn dine egne tall og se hvor mye omsetning leadsene dine gir - og hvor mye
            du i teorien kan bruke for å hente flere av samme type lead.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Inputs */}
            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-system-card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  Dine tall
                </h2>
                <label className="flex items-center gap-3 text-xs font-medium text-muted-foreground cursor-pointer">
                  <span>Eks. MVA</span>
                  <Switch checked={inclBtw} onCheckedChange={setInclBtw} />
                  <span>Ink. MVA</span>
                </label>
              </div>

              <div className="space-y-6">
                <CalcInput
                  label="Forespørsler per måned"
                  hint="Alle innkommende tilbudsforespørsler: telefon, skjema, WhatsApp, e-post - alt sammenlagt."
                  value={aanvragen}
                  onChange={setAanvragen}
                  min={0}
                  max={1000}
                  step={1}
                  slider
                  sliderMax={100}
                  icon={<Inbox className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label="Konverteringsrate"
                  hint="Av hver 100 forespørsler: hvor mange ender som en bekreftet jobb?"
                  value={conversie}
                  onChange={setConversie}
                  min={0}
                  max={100}
                  step={1}
                  suffix="%"
                  slider
                  icon={<Target className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />

                <CalcInput
                  label={`Gjennomsnittlig prosjektverdi (${inclBtw ? "ink." : "eks."} MVA)`}
                  hint="Ta de siste 10 prosjektene og regn gjennomsnittet. Heller litt forsiktig enn for optimistisk."
                  value={projectwaarde}
                  onChange={setProjectwaarde}
                  min={0}
                  max={10000000}
                  step={1000}
                  suffix="kr"
                  icon={<Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />}
                />
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Omsetning per måned (eks. MVA)"
                value={kr.format(revenuePerMonth)}
                caption={`${num.format(projectsPerMonth)} prosjekter per måned fra ${aanvragen} forespørsler`}
                icon={<TrendingUp className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Leadverdi"
                  value={krPrecise.format(valuePerLead)}
                  caption="per innkommende forespørsel - uansett om du vinner"
                  icon={<Target className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Årsomsetning fra leads"
                  value={kr.format(yearRevenue)}
                  caption="basert på 12× samme måned"
                  icon={<Calendar className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tommelfingerregel markedsføringsbudsjett
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  Med en bruttomargin på 30 % kan en ny lead koste deg omtrent{" "}
                  <span className="font-bold text-accent tabular-nums">
                    {krPrecise.format(maxCpa)}
                  </span>{" "}
                  før du går break-even. Mange håndverkere bruker 40–50 % av
                  leadverdien som tak.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula explainer */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Hvordan beregner du leadverdi?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Formelen er enkel og fungerer for enhver håndverkerbransje:
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="font-mono text-sm md:text-base text-foreground">
              Leadverdi = konverteringsrate × gjennomsnittlig prosjektverdi
            </p>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eksempel:</span> en taklegger
                vinner 25 % av forespørslene sine og tar i snitt 70 000 kr per prosjekt.
              </p>
              <p className="text-sm text-muted-foreground">
                Leadverdi = 25 % × 70 000 kr ={" "}
                <span className="font-bold text-foreground tabular-nums">17 500 kr per lead</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Med andre ord: hver innkommende forespørsel er allerede "verdt" 17 500 kr på
                forhånd - det avgjør hvor mye du kan bruke på markedsføring, oppfølging og
                nye kanaler.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            Hva er en god konverteringsrate for håndverkere?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Benchmarks varierer mye mellom fagområder. Bruk dem som første kalibrering - din
            egen målte rate er alltid viktigere.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-system-card"
          >
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">
                    Fagområde
                  </th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">
                    Konverteringsrate
                  </th>
                  <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground hidden md:table-cell">
                    Forklaring
                  </th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr
                    key={b.trade}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}
                  >
                    <td className="px-4 md:px-6 py-3 text-foreground">{b.trade}</td>
                    <td className="px-4 md:px-6 py-3 text-foreground font-semibold tabular-nums">
                      {b.range}
                    </td>
                    <td className="px-4 md:px-6 py-3 text-muted-foreground hidden md:table-cell">
                      {b.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 3 ways to increase */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            3 måter å øke leadverdien på
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Leadverdien øker hvis du enten løfter konverteringsraten eller prosjektverdien.
            Disse tre driverne fungerer for nesten enhver håndverkerbedrift.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Raskere respons",
                text: "Leads som ringes innen 5 minutter konverterer opptil 4x bedre enn leads som først følges opp etter 24 timer. Automatisk oppfølging er den billigste gevinsten.",
                href: "/tjenester/lead-oppfolging",
                cta: "Lead-oppfølgingssystem",
              },
              {
                title: "Bedre kvalifisering",
                text: "En god inntaksflyt filtrerer bort pris-shoppere før de spiser opp tilbudstiden din. Færre tilbud, høyere hit-rate.",
                href: "/tjenester/leadgenerering",
                cta: "Leadgenerering-system",
              },
              {
                title: "Flere anmeldelser",
                text: "Ved like tilbud velger folk håndverkeren med 180 anmeldelser, ikke han med 12. En anmeldelsesfunnel løfter anmeldelses-scoren din jevnt.",
                href: "/tjenester/anmeldelsesfunnel",
                cta: "Anmeldelsesfunnel",
              },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-system-card"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
                <Link
                  to={item.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
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

export default LeadwaardeCalculator;
