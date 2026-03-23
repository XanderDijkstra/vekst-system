import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const SITE_URL = "https://aannemersysteem.com";

const features = [
  "Functionele website (10–20 pagina's)",
  "Automatische lead follow-up",
  "Gemiste oproep → SMS",
  "5-sterren review funnel",
  "One-click marketing campagnes",
  "All-in-one inbox",
  "On-site SEO",
  "Hosting & onderhoud inbegrepen",
];

const PrijzenPage = () => (
  <PageShell>
    <Helmet>
      <title>Prijzen | Aannemer Systeem</title>
      <meta
        name="description"
        content="Eén helder tarief, alles inbegrepen. Website, automatisering en marketing voor €279 per maand. Geen verborgen kosten."
      />
      <link rel="canonical" href={`${SITE_URL}/prijzen`} />
      <meta property="og:title" content="Prijzen | Aannemer Systeem" />
      <meta
        property="og:description"
        content="Eén helder tarief, alles inbegrepen. Website, automatisering en marketing voor €279 per maand."
      />
      <meta property="og:url" content={`${SITE_URL}/prijzen`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Aannemer Systeem – Compleet Pakket",
          description:
            "Website, automatisering en marketing voor aannemers in één maandelijks abonnement.",
          brand: { "@type": "Brand", name: "Aannemer Systeem" },
          offers: {
            "@type": "Offer",
            price: "279",
            priceCurrency: "EUR",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/prijzen`,
          },
        })}
      </script>
    </Helmet>

    {/* Hero — title left, pricing card right */}
    <section className="py-16 md:py-24 pb-24 md:pb-32">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Title & copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              Prijzen
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Eén helder tarief. Alles inbegrepen.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Geen verborgen kosten, geen losse modules. Je krijgt het complete
              digitale systeem voor jouw aannemersbedrijf.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <Link
                to="/configurator"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4 transition-colors"
              >
                Stel je eigen pakket samen met onze configurator
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-md md:ml-auto"
          >
            <div className="rounded-2xl bg-accent text-accent-foreground shadow-system-card-hover overflow-hidden">
              {/* Header */}
              <div className="px-8 pt-10 pb-8 text-center">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary-foreground/90 rounded-full px-4 py-1.5 mb-5">
                  Meest gekozen
                </span>
                <h2 className="text-2xl font-bold">Compleet Pakket</h2>
                <p className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                  €279
                  <span className="text-lg font-medium opacity-80">/maand</span>
                </p>
              </div>

              {/* Features */}
              <div className="px-8 pb-10 space-y-0">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 py-3.5 border-t border-accent-foreground/20"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 opacity-90" strokeWidth={2.5} />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-8 pb-10">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base h-12"
                >
                  <Link to="/demo">
                    Boek een gesprek
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Vergelijking */}
    <section className="pb-24 md:pb-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 rounded-full px-4 py-1.5 mb-5">
            Vergelijking
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Waarom Aannemer Systeem?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Een 'mooie' website is tegenwoordig niet meer genoeg. Je hebt een digitaal fundament nodig dat je tijd bespaart en daadwerkelijk nieuwe klussen oplevert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
          {/* Gewone webbouwers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-card border border-border p-8 shadow-system-card h-full"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
              Gewone webbouwers
            </h3>
            <div className="space-y-5">
              {[
                "Vraagt direct €3.000+ vooraf voor een simpele site",
                "Levert een statisch 'online visitekaartje' af",
                "Jij moet zelf alle teksten bedenken en aanleveren",
                "Doet helemaal niets als jij op de steiger een telefoontje mist",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-7 w-7 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-3.5 w-3.5 text-destructive" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VS badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted rounded-lg px-3 py-2">
              VS
            </span>
          </motion.div>

          {/* Aannemer Systeem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-accent text-accent-foreground p-8 shadow-system-card-hover h-full"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Aannemer Systeem
            </h3>
            <div className="space-y-5">
              {[
                "Geen opstartkosten, gewoon een vast laag maandbedrag",
                "Levert een compleet systeem dat bezoekers omzet in klanten",
                "Wij regelen de techniek én schrijven de teksten voor je",
                "Vangt gemiste oproepen direct automatisch op via SMS",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-7 w-7 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="pb-24 md:pb-32">
      <div className="container max-w-2xl space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center"
        >
          Veelgestelde vragen over onze prijzen
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              q: "Zijn er opstartkosten?",
              a: "Nee. Je betaalt alleen het maandelijkse tarief. We bouwen je volledige systeem zonder opstartkosten.",
            },
            {
              q: "Zit er een contract aan vast?",
              a: "Nee, je zit nergens aan vast. Je kunt maandelijks opzeggen. We geloven dat je blijft omdat het werkt, niet omdat het moet.",
            },
            {
              q: "Wat als ik maar één systeem nodig heb?",
              a: "Ons pakket is ontworpen als compleet systeem. De onderdelen versterken elkaar — daarom bieden we alles samen aan voor één prijs.",
            },
            {
              q: "Is de website echt inbegrepen?",
              a: "Ja. Een professionele, SEO-geoptimaliseerde website met 10 tot 20 pagina's, volledig op maat voor jouw bedrijf. Hosting en onderhoud zitten erbij.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default PrijzenPage;
