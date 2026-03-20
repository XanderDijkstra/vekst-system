import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const SITE_URL = "https://aannemersysteem.com";

interface Feature {
  id: string;
  slug: string;
  title: string;
  description: string;
  individual_price: number;
  sort_order: number;
}

interface Settings {
  bundle_price: string;
  bundle_label: string;
}

const ConfiguratorPage = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [settings, setSettings] = useState<Settings>({ bundle_price: "279", bundle_label: "Compleet Pakket" });
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const load = async () => {
      const [{ data: featData }, { data: settData }] = await Promise.all([
        supabase.from("configurator_features").select("*").eq("is_active", true).order("sort_order"),
        supabase.from("configurator_settings").select("*"),
      ]);
      if (featData) {
        setFeatures(featData as Feature[]);
        const initial: Record<string, boolean> = {};
        featData.forEach((f: Feature) => { initial[f.slug] = false; });
        setSelections(initial);
      }
      if (settData) {
        const s: Record<string, string> = {};
        settData.forEach((row: { key: string; value: string }) => { s[row.key] = row.value; });
        setSettings({ bundle_price: s.bundle_price || "279", bundle_label: s.bundle_label || "Compleet Pakket" });
      }
      setLoading(false);
    };
    load();
  }, []);

  const totalSteps = features.length + 1; // features + result
  const isResultStep = currentStep === features.length;
  const currentFeature = features[currentStep];

  const selectedTotal = features
    .filter((f) => selections[f.slug])
    .reduce((sum, f) => sum + f.individual_price, 0);

  const selectedCount = features.filter((f) => selections[f.slug]).length;

  const goNext = () => {
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const goBack = () => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };
  const select = (yes: boolean) => {
    if (currentFeature) {
      setSelections((prev) => ({ ...prev, [currentFeature.slug]: yes }));
    }
    goNext();
  };

  if (loading) {
    return (
      <PageShell>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      </PageShell>
    );
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, filter: "blur(4px)" }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, filter: "blur(4px)" }),
  };

  return (
    <PageShell>
      <Helmet>
        <title>Configurator | Aannemer Systeem</title>
        <meta name="description" content="Stel je ideale digitale systeem samen en ontdek hoeveel je bespaart met het Compleet Pakket van Aannemer Systeem." />
        <link rel="canonical" href={`${SITE_URL}/configurator`} />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Stap {Math.min(currentStep + 1, features.length)} van {features.length}
              </span>
              <span className="text-xs text-muted-foreground">
                {selectedCount} geselecteerd
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="min-h-[380px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              {!isResultStep && currentFeature ? (
                <motion.div
                  key={currentFeature.slug}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="text-center space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-wrap-balance">
                      Wil je een {currentFeature.title.toLowerCase()}?
                    </h1>
                    <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                      {currentFeature.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Normaal: <span className="font-semibold text-foreground">€{currentFeature.individual_price}</span>/maand
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-xl h-14 px-10 text-base font-semibold border-2 active:scale-[0.97] transition-transform"
                        onClick={() => select(false)}
                      >
                        <X className="mr-2 h-4 w-4" />
                        Nee
                      </Button>
                      <Button
                        size="lg"
                        className="rounded-xl h-14 px-10 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform"
                        onClick={() => select(true)}
                      >
                        <Check className="mr-2 h-4 w-4" />
                        Ja
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : isResultStep ? (
                <motion.div
                  key="result"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="text-center space-y-8">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Jouw selectie
                      </h1>
                      <p className="mt-2 text-muted-foreground">
                        {selectedCount === 0
                          ? "Je hebt geen onderdelen geselecteerd."
                          : `Je hebt ${selectedCount} onderdelen geselecteerd.`}
                      </p>
                    </div>

                    {selectedCount > 0 && (
                      <>
                        {/* Feature breakdown */}
                        <div className="rounded-2xl border border-border bg-card p-6 text-left space-y-0">
                          {features.map((f) => (
                            <div
                              key={f.slug}
                              className={`flex items-center justify-between py-3 ${
                                f !== features[0] ? "border-t border-border" : ""
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    selections[f.slug]
                                      ? "bg-accent/15 text-accent"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {selections[f.slug] ? (
                                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                                  ) : (
                                    <X className="h-3 w-3" strokeWidth={2.5} />
                                  )}
                                </div>
                                <span
                                  className={`text-sm font-medium ${
                                    selections[f.slug] ? "text-foreground" : "text-muted-foreground line-through"
                                  }`}
                                >
                                  {f.title}
                                </span>
                              </div>
                              {selections[f.slug] && (
                                <span className="text-sm text-muted-foreground line-through">
                                  €{f.individual_price}/mo
                                </span>
                              )}
                            </div>
                          ))}

                          {/* Totaal */}
                          <div className="border-t-2 border-border pt-4 mt-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-muted-foreground">
                                Losse onderdelen
                              </span>
                              <span className="text-lg font-bold text-muted-foreground line-through">
                                €{selectedTotal}/mo
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bundle price */}
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="rounded-2xl bg-accent text-accent-foreground p-8 shadow-system-card-hover"
                        >
                          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                            {settings.bundle_label}
                          </p>
                          <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            €{settings.bundle_price}
                            <span className="text-lg font-medium opacity-80">/maand</span>
                          </p>
                          <p className="mt-3 text-sm opacity-80">
                            Alles inbegrepen. Geen opstartkosten. Maandelijks opzegbaar.
                          </p>
                          <p className="mt-1 text-sm font-semibold">
                            Je bespaart €{selectedTotal - Number(settings.bundle_price)}/maand
                          </p>
                          <Button
                            asChild
                            size="lg"
                            className="mt-6 w-full rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base h-12 active:scale-[0.97] transition-transform"
                          >
                            <Link to="/demo">
                              Boek een gesprek
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </>
                    )}

                    {selectedCount === 0 && (
                      <div className="rounded-2xl border border-border bg-card p-8 text-center">
                        <p className="text-muted-foreground mb-4">
                          Je hebt nog niets geselecteerd. Ga terug om onderdelen te kiezen.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={currentStep === 0}
              className="text-muted-foreground active:scale-[0.97] transition-transform"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Vorige
            </Button>
            {!isResultStep && (
              <Button
                variant="ghost"
                onClick={goNext}
                className="text-muted-foreground active:scale-[0.97] transition-transform"
              >
                Overslaan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {isResultStep && (
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentStep(0);
                  setDirection(-1);
                }}
                className="text-muted-foreground active:scale-[0.97] transition-transform"
              >
                Opnieuw beginnen
              </Button>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ConfiguratorPage;
