import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Euro,
  TrendingUp,
  Minus,
  Plus,
  Trash2,
  Calculator,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import CalcResultCard from "@/components/tools/CalcResultCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, systemEase } from "@/lib/animations";

const SITE_URL = "https://www.vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/verktoy/prosjektmargin-kalkulator`;

const kr = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

const pct = (v: number) => `${Math.round(v * 10) / 10} %`;

// ---------- Types ----------

interface CostRow {
  id: number;
  label: string;
  amount: number;
}

let nextId = 100;

const defaultRows: CostRow[] = [
  { id: 1, label: "Materialer", amount: 55000 },
  { id: 2, label: "Arbeid (egne timer)", amount: 38000 },
  { id: 3, label: "Underentreprenører", amount: 22000 },
  { id: 4, label: "Leie av utstyr / verktøy", amount: 5000 },
  { id: 5, label: "Transport / drivstoff", amount: 3000 },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Hva er en sunn bruttomargin for en håndverker?",
    a: "De fleste håndverkere sikter på 25–40 % bruttomargin på materiell + arbeid. På mindre jobber (bad, takark) ligger du gjerne på 35–45 %, på større oppussinger eller nybygg nærmere 20–30 %. Under 20 % har du nesten ingen buffer mot det uforutsette - og det dukker alltid opp noe på byggeprosjekter.",
  },
  {
    q: "Hva er forskjellen på bruttomargin og nettomargin?",
    a: "Bruttomargin er tilbudsbeløpet minus direkte prosjektkostnader (materiell, arbeid, underentreprenører). Nettomargin er det du sitter igjen med etter skatt, kontorkostnader, forsikringer og andre indirekte kostnader. Denne kalkulatoren estimerer netto til ~65 % av brutto - en grov men brukbar tilnærming for selvstendig næringsdrivende i byggebransjen.",
  },
  {
    q: "Hvordan unngår jeg at marginen fordamper på grunn av tilleggsarbeid?",
    a: "Tre ting: (1) legg 10–15 % på hver post over det optimistiske anslaget, (2) avtal skriftlig på forhånd at tilleggsarbeid tilbys separat, og (3) før en enkel kostnadslogg per prosjekt så du kan styre underveis i stedet for å få sjokk i etterkant.",
  },
  {
    q: "Skal jeg regne egne arbeidstimer som kostnad?",
    a: "Ja - ellers overvurderer du marginen. Regn egne timer mot timeprisen fra timepris-kalkulatoren vår. Jobber du 40 timer på et prosjekt og minsteprisen din er 750 kr, er det 30 000 kr i arbeidskostnader - uansett om du tar det ut som \"lønn\" eller ikke.",
  },
  {
    q: "Hvordan beregner jeg tilleggsarbeid i etterkant?",
    a: "Legg sammen de faktiske kostnadene for tilleggsarbeidet (materiell + timer + eventuelt utstyrsleie) og legg samme margin-påslag på som i det opprinnelige tilbudet. Hadde du 35 % margin på hovedjobben, bruk 35 % også på tilleggsarbeidet. Det hindrer at tillegget trekker totalmarginen ned.",
  },
  {
    q: "Er MVA med i beregningen?",
    a: "Nei. Alle beløp er eks. MVA. MVA-en du fakturerer kunden er ikke omsetning - du innberetter den til Skatteetaten. Legg derfor inn tilbudsbeløp og kostnader eks. MVA for et riktig bilde av den reelle marginen.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prosjektmargin-kalkulator for håndverkere",
  url: PAGE_URL,
  description:
    "Gratis prosjektmargin-kalkulator for håndverkere. Fyll inn tilbudsbeløp og kostnader - se bruttomarginen og nettomarginen per prosjekt direkte.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Verktøy", item: `${SITE_URL}/verktoy` },
      { "@type": "ListItem", position: 3, name: "Prosjektmargin-kalkulator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Prosjektmargin-kalkulator for håndverkere",
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

const ProjectmargeCalculator = () => {
  const [offerteBedrag, setOfferteBedrag] = useState(175000);
  const [rows, setRows] = useState<CostRow[]>(defaultRows);

  const addRow = () => {
    setRows((prev) => [...prev, { id: nextId++, label: "", amount: 0 }]);
  };

  const removeRow = (id: number) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRow = (id: number, field: "label" | "amount", value: string) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        if (field === "label") return { ...r, label: value };
        const num = Number(value.replace(",", "."));
        return { ...r, amount: Number.isNaN(num) ? 0 : Math.max(0, num) };
      }),
    );
  };

  const { totalKosten, brutoWinst, brutoMargePct, nettoWinst, nettoMargePct, overschrijdingBreakEven } =
    useMemo(() => {
      const total = rows.reduce((sum, r) => sum + r.amount, 0);
      const bruto = offerteBedrag - total;
      const brutoPct = offerteBedrag > 0 ? (bruto / offerteBedrag) * 100 : 0;
      // Rough net: assume 35% tax on profit
      const netto = bruto * 0.65;
      const nettoPct = offerteBedrag > 0 ? (netto / offerteBedrag) * 100 : 0;
      // How much can costs overrun before bruto = 0?
      const overschrijding = total > 0 && bruto > 0 ? (bruto / total) * 100 : 0;
      return {
        totalKosten: total,
        brutoWinst: bruto,
        brutoMargePct: brutoPct,
        nettoWinst: netto,
        nettoMargePct: nettoPct,
        overschrijdingBreakEven: overschrijding,
      };
    }, [offerteBedrag, rows]);

  return (
    <PageShell>
      <Helmet>
        <title>Prosjektmargin-kalkulator for håndverkere | Vekst Systemet</title>
        <meta
          name="description"
          content="Gratis prosjektmargin-kalkulator for håndverkere. Fyll inn tilbudsbeløp og kostnadsposter - se bruttomargin og nettomargin per prosjekt direkte."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Prosjektmargin-kalkulator for håndverkere | Vekst Systemet" />
        <meta property="og:description" content="Beregn på 30 sekunder marginen din per prosjekt. Gratis, ingen registrering." />
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
              Prosjektmargin
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Tjener du nok på dette prosjektet?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Fyll inn tilbudsbeløpet, lista kostnadspostene, og se direkte om marginen er sunn
            - inkludert hvor mye kostnadene kan overskride før du går i null.
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
              <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-accent" strokeWidth={1.5} />
                Prosjektinformasjon
              </h2>

              {/* Offertebedrag */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                  <Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
                  Tilbudsbeløp (eks. MVA)
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    inputMode="decimal"
                    value={offerteBedrag}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setOfferteBedrag(Number.isNaN(v) ? 0 : Math.max(0, v));
                    }}
                    className="h-12 text-lg font-semibold pr-10"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">
                    kr
                  </span>
                </div>
              </div>

              {/* Kostenposten */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Kostnadsposter
                </label>
                <div className="space-y-2">
                  {rows.map((row) => (
                    <div key={row.id} className="flex items-center gap-2">
                      <Input
                        placeholder="Beskrivelse"
                        value={row.label}
                        onChange={(e) => updateRow(row.id, "label", e.target.value)}
                        className="flex-1 h-10 text-sm"
                      />
                      <div className="relative w-32 flex-shrink-0">
                        <Input
                          type="number"
                          inputMode="decimal"
                          value={row.amount || ""}
                          onChange={(e) => updateRow(row.id, "amount", e.target.value)}
                          className="h-10 text-sm font-semibold pr-8 tabular-nums"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs pointer-events-none">
                          kr
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-muted-foreground hover:text-destructive flex-shrink-0"
                        onClick={() => removeRow(row.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 text-xs"
                  onClick={addRow}
                >
                  <Plus className="h-3.5 w-3.5 mr-1" />
                  Legg til kostnadspost
                </Button>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Totale kostnader</span>
                  <span className="text-lg font-bold text-foreground tabular-nums">
                    {kr.format(totalKosten)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Bruttooverskudd"
                value={kr.format(brutoWinst)}
                caption={`Bruttomargin: ${pct(brutoMargePct)} av tilbudsbeløpet`}
                icon={<TrendingUp className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Nettomargin (etter ~35 % skatt)"
                  value={kr.format(nettoWinst)}
                  caption={`${pct(nettoMargePct)} av tilbudsbeløpet`}
                  icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Tilbudsbeløp"
                  value={kr.format(offerteBedrag)}
                  caption={`Kostnader: ${kr.format(totalKosten)}`}
                  icon={<Minus className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>

              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Stresstest
                </p>
                <p className="mt-2 text-foreground leading-relaxed">
                  {overschrijdingBreakEven > 0 ? (
                    <>
                      Kostnadene dine kan stige med{" "}
                      <span className="font-bold text-accent tabular-nums">
                        {pct(overschrijdingBreakEven)}
                      </span>{" "}
                      før du går i null. Ved en overskridelse på mer enn{" "}
                      <span className="font-semibold tabular-nums">
                        {kr.format(brutoWinst)}
                      </span>{" "}
                      går du med tap på dette prosjektet.
                    </>
                  ) : (
                    <>
                      Dette prosjektet går allerede i tap med dagens kostnadsestimat. Øk
                      tilbudsbeløpet eller reduser kostnadene.
                    </>
                  )}
                </p>
              </motion.div>

              {/* Visual bar */}
              <motion.div
                {...fadeInUp}
                className="rounded-2xl border border-border bg-card p-5 shadow-system-card"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Fordeling av tilbudsbeløp
                </p>
                <div className="flex h-6 rounded-full overflow-hidden bg-muted">
                  {offerteBedrag > 0 && (
                    <>
                      <div
                        className="bg-destructive/70 transition-all duration-300"
                        style={{
                          width: `${Math.min(100, Math.max(0, (totalKosten / offerteBedrag) * 100))}%`,
                        }}
                      />
                      <div
                        className="bg-accent transition-all duration-300"
                        style={{
                          width: `${Math.min(100, Math.max(0, brutoMargePct))}%`,
                        }}
                      />
                    </>
                  )}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm bg-destructive/70" />
                    Kostnader ({pct(offerteBedrag > 0 ? (totalKosten / offerteBedrag) * 100 : 0)})
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" />
                    Margin ({pct(brutoMargePct)})
                  </span>
                </div>
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
            Hvordan beregner du prosjektmarginen?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            Regnestykket er rett fram. Det vanskelige er ikke formelen, men å estimere
            kostnadene ærlig.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li>
                <span className="text-muted-foreground">1.</span> Bruttooverskudd ={" "}
                <span className="font-semibold">tilbudsbeløp − totale kostnader</span>
              </li>
              <li>
                <span className="text-muted-foreground">2.</span> Bruttomargin % ={" "}
                <span className="font-semibold">(bruttooverskudd / tilbudsbeløp) × 100</span>
              </li>
              <li>
                <span className="text-muted-foreground">3.</span> Nettomargin ≈{" "}
                <span className="font-semibold">bruttooverskudd × (1 − skatt%)</span>
              </li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eksempel:</span> en håndverker
                gir tilbud på en baderomsrenovering på 175 000 kr eks. MVA. Kostnader:
                55 000 kr materiell, 38 000 kr egen arbeid, 22 000 kr rørlegger, 8 000 kr annet.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Totale kostnader: 123 000 kr</li>
                <li>Bruttooverskudd: 175 000 kr − 123 000 kr = <span className="font-bold text-foreground">52 000 kr</span></li>
                <li>Bruttomargin: 30 % - sunt for en baderomsrenovering</li>
                <li>Break-even-overskridelse: kostnadene kan stige med ~42 %</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            3 tips for å beskytte marginen
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Legg 10–15 % på anslaget",
                text: "Alle håndverkere vet det, men få gjør det konsekvent. Legg 10–15 % på hver kostnadspost over det optimistiske anslaget. Den bufferen er ikke gevinst - den er sikkerhetsnettet ditt mot materialprisøkninger, ekstra reisetid og uforutsett arbeid bak veggen.",
              },
              {
                title: "Avtal tilleggsarbeid på forhånd",
                text: "Legg skriftlig fast at arbeid utenfor tilbudet tilbys separat, inkludert margin. Kunder aksepterer dette lettere før oppstart enn midt i prosjektet. En tydelig tilleggsklausul er ikke mistillit - det er profesjonalitet.",
              },
              {
                title: "Følg kostnader per prosjekt",
                text: "Et enkelt regneark eller en regnskapsapp som kobler kostnader til prosjekter lar deg styre underveis. Mange håndverkere oppdager først ved sluttoppgjøret at marginen er borte. Den som sjekker ukentlig, kan gripe inn i tide.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-system-card"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Related tools */}
          <motion.div
            {...fadeInUp}
            className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Relaterte verktøy
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <Link
                to="/verktoy/leadverdi-kalkulator"
                className="group flex items-center gap-3 text-sm"
              >
                <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Leadverdi-kalkulator
                  </span>
                  <p className="text-xs text-muted-foreground">Beregn hva en forespørsel er verdt</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
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

export default ProjectmargeCalculator;
