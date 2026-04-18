import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const SITE_URL = "https://vekst-systemet.no";

const features = [
  "Funksjonell nettside (10–20 sider)",
  "Automatisk lead-oppfølging",
  "Tapt anrop → SMS",
  "5-stjerners anmeldelsesfunnel",
  "One-click markedsføringskampanjer",
  "Alt-i-én innboks",
  "On-site SEO",
  "Hosting & vedlikehold inkludert",
];

const PrijzenPage = () => (
  <PageShell>
    <Helmet>
      <title>Priser | Vekst Systemet</title>
      <meta
        name="description"
        content="Én tydelig pris, alt inkludert. Nettside, automatisering og markedsføring for 2 990 kr per måned. Ingen skjulte kostnader."
      />
      <link rel="canonical" href={`${SITE_URL}/priser`} />
      <meta property="og:title" content="Priser | Vekst Systemet" />
      <meta
        property="og:description"
        content="Én tydelig pris, alt inkludert. Nettside, automatisering og markedsføring for 2 990 kr per måned."
      />
      <meta property="og:url" content={`${SITE_URL}/priser`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Vekst Systemet – Komplett pakke",
          description:
            "Nettside, automatisering og markedsføring for håndverkere i ett månedlig abonnement.",
          brand: { "@type": "Brand", name: "Vekst Systemet" },
          offers: {
            "@type": "Offer",
            price: "2990",
            priceCurrency: "NOK",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/priser`,
          },
        })}
      </script>
    </Helmet>

    {/* Hero - title left, pricing card right */}
    <section className="py-16 md:py-24 pb-24 md:pb-32">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Title & copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              Priser
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Én tydelig pris. Alt inkludert.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Ingen skjulte kostnader, ingen løse moduler. Du får hele det
              digitale systemet for håndverkerbedriften din.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl"
            >
              En profesjonell nettside, automatisk lead-oppfølging, tapte anrop
              som fanges opp umiddelbart og en smart anmeldelsesfunnel - alt
              kjører fra dag én. Du fokuserer på arbeidet på byggeplassen, vi
              sørger for at jobbene fortsetter å komme inn.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <Link
                to="/konfigurator"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4 transition-colors"
              >
                Sett sammen din egen pakke med konfiguratoren vår
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Pricing card */}
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
                  Mest valgte
                </span>
                <h2 className="text-2xl font-bold">Komplett pakke</h2>
                <p className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                  2 990 kr
                  <span className="text-lg font-medium opacity-80">/måned</span>
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
                    Bestill en samtale
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
            Sammenligning
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Hvorfor Vekst Systemet?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            En "pen" nettside er ikke nok lenger. Du trenger et digitalt fundament som sparer deg tid og faktisk gir nye jobber.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
          {/* Vanlige nettbyråer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-card border border-border p-8 shadow-system-card h-full"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
              Vanlige nettbyråer
            </h3>
            <div className="space-y-5">
              {[
                "Krever 30 000+ kr på forhånd for en enkel side",
                "Leverer et statisk \"digitalt visittkort\"",
                "Du må selv skrive og sende inn alle tekstene",
                "Gjør ingenting når du står på stillaset og mister et anrop",
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

          {/* Vekst Systemet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-accent text-accent-foreground p-8 shadow-system-card-hover h-full"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Vekst Systemet
            </h3>
            <div className="space-y-5">
              {[
                "Ingen oppstartskostnader, bare en fast lav månedspris",
                "Leverer et komplett system som gjør besøkende til kunder",
                "Vi ordner teknikken og skriver tekstene for deg",
                "Fanger automatisk opp tapte anrop med SMS",
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
          Ofte stilte spørsmål om prisene våre
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              q: "Er det noen oppstartskostnader?",
              a: "Nei. Du betaler bare den månedlige prisen. Vi bygger hele systemet ditt uten oppstartskostnader.",
            },
            {
              q: "Er jeg bundet til en kontrakt?",
              a: "Nei, du er ikke bundet til noe. Du kan si opp månedlig. Vi tror du blir værende fordi det fungerer, ikke fordi du må.",
            },
            {
              q: "Hva om jeg bare trenger ett system?",
              a: "Pakken vår er laget som et komplett system. Delene forsterker hverandre - derfor tilbyr vi alt sammen til én pris.",
            },
            {
              q: "Er nettsiden virkelig inkludert?",
              a: "Ja. En profesjonell, SEO-optimalisert nettside med 10 til 20 sider, fullt skreddersydd for bedriften din. Hosting og vedlikehold er inkludert.",
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
