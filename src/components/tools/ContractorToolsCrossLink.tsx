import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Clock, Users, TrendingUp } from "lucide-react";

/**
 * Cross-link block shown on DIY material calculators (betong, maling,
 * fliser, gipsplate, laminat, tapet, puss, behang). Most visitors are
 * homeowners doing weekend projects — this block surfaces the
 * contractor-targeted calculators (timepris, personalkostnad,
 * prosjektmargin, leadverdi) for the small percentage who are actually
 * håndverkere quoting a job.
 */
const TOOLS = [
  {
    href: "/verktoy/timepris-kalkulator",
    title: "Timepris-kalkulator",
    description: "Finn riktig timesats basert på kostnader og ønsket resultat.",
    icon: Clock,
  },
  {
    href: "/verktoy/personalkostnad-kalkulator",
    title: "Personalkostnad-kalkulator",
    description: "Hva en ansatt egentlig koster, inkludert sosiale utgifter.",
    icon: Users,
  },
  {
    href: "/verktoy/prosjektmargin-kalkulator",
    title: "Prosjektmargin-kalkulator",
    description: "Regn ut marginen på et prosjekt før du gir tilbud.",
    icon: TrendingUp,
  },
  {
    href: "/verktoy/leadverdi-kalkulator",
    title: "Leadverdi-kalkulator",
    description: "Hva er én lead faktisk verdt for din håndverkerbedrift?",
    icon: Calculator,
  },
];

const ContractorToolsCrossLink = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container max-w-5xl">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wide mb-4">
          For håndverkere
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Er du håndverker som regner ut tilbud?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Disse kalkulatorene er bygget for fagfolk — beregn timepris, lønnskost,
          prosjektmargin og leadverdi for håndverkerbedriften din.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            to={t.href}
            className="group rounded-2xl bg-card border border-border p-5 hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <t.icon className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
              {t.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {t.description}
            </p>
            <div className="mt-3 inline-flex items-center text-xs font-semibold text-accent">
              Åpne <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ContractorToolsCrossLink;
