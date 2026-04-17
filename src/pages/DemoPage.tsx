import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const DemoPage = () => {
  useEffect(() => {
    // Load the embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <PageShell>
      <Helmet>
        <title>Bestill demo | Vekst Systemet</title>
        <meta name="description" content="Bestill en gratis demo-samtale og se hvordan Vekst Systemet hjelper bedriften din å vokse med smarte digitale systemer." />
        <link rel="canonical" href="https://vekst-systemet.no/demo" />
        <meta property="og:title" content="Bestill demo | Vekst Systemet" />
        <meta property="og:description" content="Bestill en gratis demo-samtale og se hvordan Vekst Systemet hjelper bedriften din å vokse." />
        <meta property="og:url" content="https://vekst-systemet.no/demo" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
      </Helmet>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-primary">
        <div className="container text-center">
          <motion.p
            {...fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
          >
            Demo
          </motion.p>
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto"
          >
            Bestill en gratis demo-samtale
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto leading-relaxed"
          >
            Velg et tidspunkt som passer deg, så viser vi hvordan systemet vårt fungerer for ditt fagområde og din region.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl bg-card shadow-system-card overflow-hidden"
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/O4iI8b4WqCyve5iJiJPo"
              style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="O4iI8b4WqCyve5iJiJPo_1773679420456"
              title="Bestill en demo-samtale"
            />
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default DemoPage;
