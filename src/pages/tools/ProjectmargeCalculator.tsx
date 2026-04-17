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
  Percent,
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

const SITE_URL = "https://aannemersysteem.com";
const PAGE_URL = `${SITE_URL}/tools/projectmarge-calculator`;

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const pct = (v: number) => `${Math.round(v * 10) / 10}%`;

// ---------- Types ----------

interface CostRow {
  id: number;
  label: string;
  amount: number;
}

let nextId = 100;

const defaultRows: CostRow[] = [
  { id: 1, label: "Materialen", amount: 4500 },
  { id: 2, label: "Arbeid (eigen uren)", amount: 3200 },
  { id: 3, label: "Onderaannemers", amount: 1800 },
  { id: 4, label: "Huur materieel / gereedschap", amount: 400 },
  { id: 5, label: "Transport / brandstof", amount: 250 },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is een gezonde brutomarge voor een aannemer?",
    a: "De meeste aannemers mikken op 25–40% brutomarge op materiaal + arbeid. Bij kleine klussen (badkamer, dakkapel) zit je eerder richting 35–45%, bij grote verbouwingen of nieuwbouw dichter bij 20–30%. Onder de 20% heb je nauwelijks buffer voor tegenvallers - en die komen er bij bouwprojecten altijd.",
  },
  {
    q: "Wat is het verschil tussen brutomarge en nettomarge?",
    a: "Brutomarge is offertebedrag minus directe projectkosten (materiaal, arbeid, onderaannemers). Nettomarge is wat je overhoudt ná ook belasting, kantoorkosten, verzekeringen en andere indirecte kosten. Deze calculator schat netto op ~65% van bruto - een grove maar bruikbare benadering voor ZZP'ers in de bouwsector.",
  },
  {
    q: "Hoe voorkom ik dat mijn marge verdampt door meerwerk?",
    a: "Drie dingen: (1) raam elke post 10–15% hoger dan je optimistische schatting, (2) spreek vooraf schriftelijk af dat meerwerk apart geoffreerd wordt, en (3) houd per project een simpele kosten-tracker bij zodat je halverwege kunt bijsturen in plaats van achteraf te schrikken.",
  },
  {
    q: "Moet ik eigen arbeidsuren als kostenpost meerekenen?",
    a: "Ja - anders overschat je je marge. Reken je eigen uren tegen het uurtarief uit onze uurtarief calculator. Als je 40 uur aan een project werkt en je minimum uurtarief is €65, dan is dat €2.600 aan arbeidskosten - of je het nu als 'salaris' opneemt of niet.",
  },
  {
    q: "Hoe bereken ik meerwerk achteraf?",
    a: "Tel de werkelijke kosten van het meerwerk bij elkaar (materiaal + uren + evt. huur materieel) en sla daar dezelfde marge-opslag op als in je originele offerte. Had je 35% marge op de hoofdopdracht, reken dan ook 35% over het meerwerk. Dat voorkomt dat meerwerk je totaalproject-marge naar beneden trekt.",
  },
  {
    q: "Is btw meegenomen in deze berekening?",
    a: "Nee. Alle bedragen zijn excl. btw. De btw die je factureert aan de klant draag je af aan de Belastingdienst en is geen omzet. Vul dus je offertebedrag en kosten excl. btw in voor een correct beeld van je werkelijke marge.",
  },
];

// ---------- Schema ----------

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Projectmarge calculator voor aannemers",
  url: PAGE_URL,
  description:
    "Gratis projectmarge calculator voor aannemers. Vul je offertebedrag en kosten in - zie direct je bruto- en nettomarge per project.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: "Projectmarge calculator", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Projectmarge calculator voor aannemers",
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

const ProjectmargeCalculator = () => {
  const [offerteBedrag, setOfferteBedrag] = useState(15000);
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
        <title>Projectmarge calculator voor aannemers | Aannemer Systeem</title>
        <meta
          name="description"
          content="Gratis projectmarge calculator voor aannemers. Vul offertebedrag en kostenposten in - zie direct je bruto- en nettomarge per project."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Projectmarge calculator voor aannemers | Aannemer Systeem" />
        <meta property="og:description" content="Bereken in 30 seconden je marge per project. Gratis, geen registratie." />
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
            <Link
              to="/tools"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Rekentools
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              Projectmarge
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Verdien je genoeg aan dit project?
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            Vul je offertebedrag in, lijst je kostenposten op, en zie direct of de marge
            gezond is - inclusief hoeveel de kosten mogen overschrijden voordat je break-even
            draait.
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
                Projectgegevens
              </h2>

              {/* Offertebedrag */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                  <Euro className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
                  Offertebedrag (excl. btw)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">
                    €
                  </span>
                  <Input
                    type="number"
                    inputMode="decimal"
                    value={offerteBedrag}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setOfferteBedrag(Number.isNaN(v) ? 0 : Math.max(0, v));
                    }}
                    className="h-12 text-lg font-semibold pl-8"
                  />
                </div>
              </div>

              {/* Kostenposten */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Kostenposten
                </label>
                <div className="space-y-2">
                  {rows.map((row) => (
                    <div key={row.id} className="flex items-center gap-2">
                      <Input
                        placeholder="Omschrijving"
                        value={row.label}
                        onChange={(e) => updateRow(row.id, "label", e.target.value)}
                        className="flex-1 h-10 text-sm"
                      />
                      <div className="relative w-28 flex-shrink-0">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs pointer-events-none">
                          €
                        </span>
                        <Input
                          type="number"
                          inputMode="decimal"
                          value={row.amount || ""}
                          onChange={(e) => updateRow(row.id, "amount", e.target.value)}
                          className="h-10 text-sm font-semibold pl-7 tabular-nums"
                        />
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
                  Kostenpost toevoegen
                </Button>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Totale kosten</span>
                  <span className="text-lg font-bold text-foreground tabular-nums">
                    {euro.format(totalKosten)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
              <CalcResultCard
                variant="hero"
                label="Brutowinst"
                value={euro.format(brutoWinst)}
                caption={`Brutomarge: ${pct(brutoMargePct)} van het offertebedrag`}
                icon={<TrendingUp className="h-4 w-4" strokeWidth={1.75} />}
              />

              <div className="grid grid-cols-2 gap-4">
                <CalcResultCard
                  label="Nettomarge (na ~35% belasting)"
                  value={euro.format(nettoWinst)}
                  caption={`${pct(nettoMargePct)} van het offertebedrag`}
                  icon={<Euro className="h-4 w-4" strokeWidth={1.75} />}
                />
                <CalcResultCard
                  label="Offertebedrag"
                  value={euro.format(offerteBedrag)}
                  caption={`Kosten: ${euro.format(totalKosten)}`}
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
                      Je kosten mogen nog{" "}
                      <span className="font-bold text-accent tabular-nums">
                        {pct(overschrijdingBreakEven)}
                      </span>{" "}
                      stijgen voordat je op break-even zit. Bij een overschrijding van meer dan{" "}
                      <span className="font-semibold tabular-nums">
                        {euro.format(brutoWinst)}
                      </span>{" "}
                      draai je verlies op dit project.
                    </>
                  ) : (
                    <>
                      Dit project draait al verlies bij de huidige kostenraming. Verhoog het
                      offertebedrag of verlaag de kosten.
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
                  Verdeling offertebedrag
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
                    Kosten ({pct(offerteBedrag > 0 ? (totalKosten / offerteBedrag) * 100 : 0)})
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" />
                    Marge ({pct(brutoMargePct)})
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
            Hoe bereken je je projectmarge?
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-muted-foreground leading-relaxed">
            De berekening is rechttoe rechtaan. Het lastige zit hem niet in de formule, maar
            in het eerlijk inschatten van je kosten.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-system-card"
          >
            <ol className="space-y-3 font-mono text-sm md:text-base text-foreground">
              <li>
                <span className="text-muted-foreground">1.</span> Brutowinst ={" "}
                <span className="font-semibold">offertebedrag − totale kosten</span>
              </li>
              <li>
                <span className="text-muted-foreground">2.</span> Brutomarge % ={" "}
                <span className="font-semibold">(brutowinst / offertebedrag) × 100</span>
              </li>
              <li>
                <span className="text-muted-foreground">3.</span> Nettomarge ≈{" "}
                <span className="font-semibold">brutowinst × (1 − belasting%)</span>
              </li>
            </ol>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Voorbeeld:</span> een aannemer
                offert een badkamerrenovatie voor €15.000 excl. btw. Kosten: €4.500 materiaal,
                €3.200 eigen arbeid, €1.800 loodgieter, €650 overig.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Totale kosten: €10.150</li>
                <li>Brutowinst: €15.000 − €10.150 = <span className="font-bold text-foreground">€4.850</span></li>
                <li>Brutomarge: 32% - gezond voor een badkamerrenovatie</li>
                <li>Break-even overschrijding: kosten mogen nog ~48% stijgen</li>
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
            3 tips om je marge te beschermen
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Raam 10–15% boven je schatting",
                text: "Elke aannemer weet het, maar weinigen doen het consequent. Raam elke kostenpost 10–15% boven je optimistische schatting. Die buffer is geen winst - het is je vangnet voor tegenvallende materiaal­prijzen, extra reistijd en onvoorzien werk achter de muur.",
              },
              {
                title: "Spreek meerwerk vooraf af",
                text: "Leg schriftelijk vast dat werk buiten de offerte apart geoffreerd wordt, inclusief marge. Klanten accepteren dit makkelijker vóór de start dan halverwege het project. Een duidelijke meerwerkclausule is geen wantrouwen - het is professionaliteit.",
              },
              {
                title: "Houd kosten per project bij",
                text: "Een simpele spreadsheet of boekhoud­app die kosten aan projecten koppelt laat je halverwege bijsturen. Veel aannemers ontdekken pas bij de eindafrekening dat de marge is verdampt. Wie wekelijks checkt, kan tijdig ingrijpen.",
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
              Verwante tools
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <Link
                to="/tools/uurtarief-calculator-aannemer"
                className="group flex items-center gap-3 text-sm"
              >
                <Percent className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Uurtarief calculator
                  </span>
                  <p className="text-xs text-muted-foreground">Reken je eigen uren correct door</p>
                </div>
              </Link>
              <Link
                to="/tools/leadwaarde-calculator"
                className="group flex items-center gap-3 text-sm"
              >
                <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.75} />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Leadwaarde calculator
                  </span>
                  <p className="text-xs text-muted-foreground">Bereken wat een aanvraag je oplevert</p>
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
            Veelgestelde vragen
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
