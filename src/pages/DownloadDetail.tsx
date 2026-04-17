import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { FileText, Check, Download, ArrowLeft, Loader2 } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaSection from "@/components/home/CtaSection";
import { fadeInUp } from "@/lib/animations";
import { downloads } from "@/data/downloads";
import { kennisbankArticles } from "@/data/kennisbankArticles";

const SITE_URL = "https://aannemersysteem.com";

type FormState = "idle" | "submitting" | "success" | "error";

const DownloadDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = downloads.find((d) => d.slug === slug);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  if (!item) {
    return <Navigate to="/downloads" replace />;
  }

  const relatedArticles = item.relatedArticleSlugs
    ? kennisbankArticles.filter((a) => item.relatedArticleSlugs?.includes(a.slug))
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === "submitting") return;

    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: item.slug,
          email: email.trim(),
          name: name.trim(),
          company: company.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Er ging iets mis. Probeer het opnieuw.");
      }

      setDownloadUrl(data.downloadUrl || null);
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Onbekende fout.");
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    url: `${SITE_URL}/downloads/${item.slug}`,
    author: { "@type": "Organization", name: "Aannemer Systeem" },
    publisher: { "@type": "Organization", name: "Aannemer Systeem" },
  };

  return (
    <PageShell>
      <Helmet>
        <title>{`${item.title} | Gratis download`}</title>
        <meta name="description" content={item.description.slice(0, 155)} />
        <link rel="canonical" href={`${SITE_URL}/downloads/${item.slug}`} />
        <meta property="og:title" content={`${item.title} | Gratis download`} />
        <meta property="og:description" content={item.description.slice(0, 200)} />
        <meta property="og:url" content={`${SITE_URL}/downloads/${item.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <Link
            to="/downloads"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Alle downloads
          </Link>
          <motion.p
            {...fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
          >
            {item.category} &middot; {item.format}
          </motion.p>
          <motion.h1
            {...fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground max-w-3xl"
          >
            {item.title}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed"
          >
            {item.tagline}
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                  Waar gaat dit over?
                </h2>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>

              <motion.div {...fadeInUp} className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                  Wat krijg je?
                </h2>
                <ul className="space-y-3">
                  {item.whatYouGet.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeInUp} className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                  Voor wie?
                </h2>
                <ul className="space-y-3">
                  {item.whoIsItFor.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {relatedArticles.length > 0 && (
                <motion.div {...fadeInUp} className="mt-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                    Gerelateerde artikelen
                  </h2>
                  <ul className="space-y-2">
                    {relatedArticles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          to={`/kennisbank/${article.slug}`}
                          className="text-accent hover:underline"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-2">
              <motion.div
                {...fadeInUp}
                className="bg-card rounded-2xl p-6 shadow-system-card sticky top-24"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Gratis download
                    </p>
                    <p className="text-sm text-foreground">
                      {item.pages} pagina's &middot; {item.format}
                    </p>
                  </div>
                </div>

                {state === "success" ? (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <Check className="h-5 w-5" strokeWidth={2} />
                      <p className="font-semibold">Gelukt!</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {downloadUrl
                        ? "Je download is klaar. Klik hieronder om te openen."
                        : "We hebben je aanvraag ontvangen. Zodra de PDF klaar is krijg je hem in je mailbox."}
                    </p>
                    {downloadUrl && (
                      <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        <Download className="h-4 w-4" strokeWidth={2} />
                        Download PDF
                      </a>
                    )}
                  </div>
                ) : item.status === "soon" ? (
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Deze download is nog in de maak. Laat je e-mailadres achter en je krijgt
                      hem als eerste zodra hij live staat.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        placeholder="jouw@email.nl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <input
                        type="text"
                        placeholder="Naam (optioneel)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <input
                        type="text"
                        placeholder="Bedrijf (optioneel)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <button
                        type="submit"
                        disabled={state === "submitting"}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                      >
                        {state === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                            Bezig...
                          </>
                        ) : (
                          "Zet mij op de lijst"
                        )}
                      </button>
                    </form>
                    {state === "error" && (
                      <p className="mt-3 text-sm text-destructive">{errorMessage}</p>
                    )}
                  </div>
                ) : (
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Vul je e-mailadres in en je krijgt direct de downloadlink. Geen spam, geen
                      nieuwsbrief zonder dat je het wilt.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        placeholder="jouw@email.nl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <input
                        type="text"
                        placeholder="Naam (optioneel)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <input
                        type="text"
                        placeholder="Bedrijf (optioneel)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      <button
                        type="submit"
                        disabled={state === "submitting"}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                      >
                        {state === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                            Bezig...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" strokeWidth={2} />
                            Download gratis
                          </>
                        )}
                      </button>
                    </form>
                    {state === "error" && (
                      <p className="mt-3 text-sm text-destructive">{errorMessage}</p>
                    )}
                  </div>
                )}

                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Door te downloaden ga je akkoord met onze voorwaarden. Je kunt je altijd
                  afmelden.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
};

export default DownloadDetail;
