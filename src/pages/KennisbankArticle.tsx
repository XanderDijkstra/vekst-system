import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";

const KennisbankArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = (slug || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <PageShell>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Kennisbank</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Dit artikel wordt binnenkort gepubliceerd. Neem contact op als je vragen hebt over dit onderwerp.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default KennisbankArticle;
