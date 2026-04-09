import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { wikiTerms } from "@/data/wikiTerms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Plus, Trash2, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const OVERLAY_KEY = "aannemersysteem_wiki_edits";

const loadOverlay = (): Record<string, Record<string, unknown>> => {
  try {
    const raw = localStorage.getItem(OVERLAY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const AdminWikiEdit = () => {
  const { slug } = useParams<{ slug: string }>();
  const original = wikiTerms.find((t) => t.slug === slug);

  const overlays = loadOverlay();
  const overlay = slug ? overlays[slug] : undefined;
  const merged = original ? { ...original, ...(overlay as Record<string, unknown>) } : null;

  const [term, setTerm] = useState(merged?.term ?? "");
  const [shortDescription, setShortDescription] = useState(
    (merged?.shortDescription as string) ?? ""
  );
  const [category, setCategory] = useState(merged?.category ?? "");
  const [sections, setSections] = useState<{ heading: string; body: string }[]>(
    (merged?.sections as { heading: string; body: string }[]) ?? []
  );
  const [relatedTerms, setRelatedTerms] = useState<string[]>(
    (merged?.relatedTerms as string[]) ?? []
  );
  const [relatedInput, setRelatedInput] = useState("");

  if (!original) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Term niet gevonden.</p>
        <Link to="/admin/wiki" className="text-accent text-sm mt-2 inline-block">
          Terug naar overzicht
        </Link>
      </div>
    );
  }

  const updateSection = (index: number, field: "heading" | "body", value: string) => {
    setSections((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  };

  const addSection = () => {
    setSections((prev) => [...prev, { heading: "", body: "" }]);
  };

  const removeSection = (index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  };

  const addRelatedTerm = () => {
    const slug = relatedInput.trim().toLowerCase().replace(/\s+/g, "-");
    if (slug && !relatedTerms.includes(slug)) {
      setRelatedTerms((prev) => [...prev, slug]);
    }
    setRelatedInput("");
  };

  const removeRelatedTerm = (termSlug: string) => {
    setRelatedTerms((prev) => prev.filter((t) => t !== termSlug));
  };

  const save = () => {
    const all = loadOverlay();
    all[original.slug] = { term, shortDescription, category, sections, relatedTerms };
    localStorage.setItem(OVERLAY_KEY, JSON.stringify(all));
    toast({ title: "Opgeslagen", description: "Wijzigingen zijn lokaal opgeslagen." });
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          to="/admin/wiki"
          className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent/10 text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">{term}</h1>
          <p className="text-xs text-muted-foreground">/{original.slug}</p>
        </div>
        <a
          href={`/wiki/${original.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
        <Button onClick={save} size="sm" className="rounded-xl">
          <Save className="mr-2 h-4 w-4" />
          Opslaan
        </Button>
      </div>

      {/* Meta */}
      <div className="rounded-2xl border border-border bg-card p-6 mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Term</label>
            <Input value={term} onChange={(e) => setTerm(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Categorie</label>
            <Input value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            Korte beschrijving
          </label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            rows={2}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4 mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent">
          Secties ({sections.length})
        </h2>
        {sections.map((section, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground">Sectie {i + 1}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSection(i)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Kop</label>
                <Input
                  value={section.heading}
                  onChange={(e) => updateSection(i, "heading", e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Inhoud</label>
                <textarea
                  value={section.body}
                  onChange={(e) => updateSection(i, "body", e.target.value)}
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={addSection} className="w-full rounded-xl" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Sectie toevoegen
        </Button>
      </div>

      {/* Related terms */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
          Gerelateerde termen
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {relatedTerms.map((rt) => (
            <span
              key={rt}
              className="inline-flex items-center gap-1 rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium"
            >
              {rt}
              <button
                onClick={() => removeRelatedTerm(rt)}
                className="hover:text-destructive"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addRelatedTerm();
          }}
          className="flex gap-2"
        >
          <Input
            value={relatedInput}
            onChange={(e) => setRelatedInput(e.target.value)}
            placeholder="Slug van gerelateerde term..."
            className="max-w-xs"
          />
          <Button type="submit" variant="outline" size="sm">
            Toevoegen
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminWikiEdit;
