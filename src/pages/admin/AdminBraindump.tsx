import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Plus, Trash2, Clock, Tag, Lightbulb, RefreshCw, CheckCircle2, Archive } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Status = "new" | "processed" | "archived";

interface BraindumpEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  status: Status;
  created_at: string;
  updated_at: string;
}

const STATUS_LABELS: Record<Status, string> = {
  new: "Nieuw",
  processed: "Verwerkt",
  archived: "Gearchiveerd",
};

const AdminBraindump = () => {
  const [entries, setEntries] = useState<BraindumpEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<Status | "all">("new");
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const active = entries.find((e) => e.id === activeId) ?? null;

  const loadEntries = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("braindumps")
      .select("*")
      .order("updated_at", { ascending: false });
    if (error) {
      toast({
        title: "Fout bij laden",
        description: error.message,
        variant: "destructive",
      });
    } else if (data) {
      setEntries(data as BraindumpEntry[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadEntries();
  }, [loadEntries]);

  const addEntry = async () => {
    const { data, error } = await supabase
      .from("braindumps")
      .insert({ title: "Nieuw idee", content: "", tags: [], status: "new" })
      .select()
      .single();
    if (error) {
      toast({ title: "Fout", description: error.message, variant: "destructive" });
      return;
    }
    if (data) {
      setEntries((prev) => [data as BraindumpEntry, ...prev]);
      setActiveId(data.id);
    }
  };

  const persistEntry = async (id: string, patch: Partial<BraindumpEntry>) => {
    setSaving(true);
    const { error } = await supabase.from("braindumps").update(patch).eq("id", id);
    setSaving(false);
    if (error) {
      toast({ title: "Fout bij opslaan", description: error.message, variant: "destructive" });
    }
  };

  const updateEntry = (id: string, patch: Partial<BraindumpEntry>) => {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, ...patch, updated_at: new Date().toISOString() } : e
      )
    );
    // Debounced save
    if (saveTimers.current[id]) clearTimeout(saveTimers.current[id]);
    saveTimers.current[id] = setTimeout(() => {
      persistEntry(id, patch);
    }, 600);
  };

  const deleteEntry = async (id: string) => {
    const { error } = await supabase.from("braindumps").delete().eq("id", id);
    if (error) {
      toast({ title: "Fout", description: error.message, variant: "destructive" });
      return;
    }
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (activeId === id) setActiveId(null);
    toast({ title: "Verwijderd", description: "Braindump verwijderd." });
  };

  const setStatus = async (id: string, status: Status) => {
    updateEntry(id, { status });
    // Force-flush the save immediately
    if (saveTimers.current[id]) clearTimeout(saveTimers.current[id]);
    await persistEntry(id, { status });
    toast({ title: "Status bijgewerkt", description: STATUS_LABELS[status] });
  };

  const addTag = (id: string) => {
    const tag = tagInput.trim().toLowerCase();
    if (!tag) return;
    const entry = entries.find((e) => e.id === id);
    if (entry && !entry.tags.includes(tag)) {
      updateEntry(id, { tags: [...entry.tags, tag] });
    }
    setTagInput("");
  };

  const removeTag = (id: string, tag: string) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      updateEntry(id, { tags: entry.tags.filter((t) => t !== tag) });
    }
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const filteredEntries =
    filter === "all" ? entries : entries.filter((e) => e.status === filter);

  const statusCounts = {
    new: entries.filter((e) => e.status === "new").length,
    processed: entries.filter((e) => e.status === "processed").length,
    archived: entries.filter((e) => e.status === "archived").length,
  };

  return (
    <div className="flex h-[calc(100svh-3.5rem)]">
      {/* Sidebar list */}
      <div className="w-72 border-r border-border flex flex-col bg-card/50">
        <div className="p-3 border-b border-border space-y-2">
          <div className="flex gap-2">
            <Button onClick={addEntry} className="flex-1 rounded-xl" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Nieuw idee
            </Button>
            <Button
              onClick={loadEntries}
              variant="outline"
              size="sm"
              className="rounded-xl"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
          {/* Filter tabs */}
          <div className="flex gap-1 text-xs">
            {(["new", "processed", "archived", "all"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 px-2 py-1 rounded-md transition-colors ${
                  filter === f
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {f === "all" ? "Alles" : STATUS_LABELS[f]}
                {f !== "all" && (
                  <span className="ml-1 opacity-70">({statusCounts[f]})</span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          {loading && (
            <p className="p-4 text-sm text-muted-foreground text-center">Laden...</p>
          )}
          {!loading && filteredEntries.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground text-center">
              {filter === "new"
                ? 'Geen nieuwe braindumps. Klik op "Nieuw idee" om te beginnen.'
                : `Geen ${STATUS_LABELS[filter as Status]?.toLowerCase() ?? ""} braindumps.`}
            </p>
          )}
          {filteredEntries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => setActiveId(entry.id)}
              className={`w-full text-left px-4 py-3 border-b border-border/50 hover:bg-accent/10 transition-colors ${
                activeId === entry.id ? "bg-accent/10 border-l-2 border-l-accent" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-foreground truncate">
                  {entry.title || "Zonder titel"}
                </p>
                {entry.status !== "new" && (
                  <span className="text-[9px] uppercase tracking-wide text-muted-foreground shrink-0">
                    {STATUS_LABELS[entry.status]}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {entry.content
                  ? entry.content.substring(0, 60) + (entry.content.length > 60 ? "..." : "")
                  : "Leeg"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">
                  {formatDate(entry.updated_at)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col">
        {active ? (
          <>
            <div className="p-4 border-b border-border flex items-center justify-between gap-3">
              <Input
                value={active.title}
                onChange={(e) => updateEntry(active.id, { title: e.target.value })}
                className="text-lg font-semibold border-none shadow-none px-0 focus-visible:ring-0 max-w-lg"
                placeholder="Titel..."
              />
              <div className="flex items-center gap-1">
                {saving && (
                  <span className="text-xs text-muted-foreground mr-2">Opslaan...</span>
                )}
                {active.status !== "processed" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStatus(active.id, "processed")}
                    className="text-xs"
                    title="Markeer als verwerkt"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Verwerkt
                  </Button>
                )}
                {active.status !== "archived" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStatus(active.id, "archived")}
                    className="text-xs"
                    title="Archiveren"
                  >
                    <Archive className="h-4 w-4" />
                  </Button>
                )}
                {active.status !== "new" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStatus(active.id, "new")}
                    className="text-xs"
                    title="Terugzetten naar nieuw"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteEntry(active.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-auto">
              <textarea
                value={active.content}
                onChange={(e) => updateEntry(active.id, { content: e.target.value })}
                placeholder="Dump je ideeën hier... Schrijf alles op wat in je opkomt. Structuur komt later."
                className="w-full h-full min-h-[300px] resize-none bg-transparent text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            {/* Tags */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(active.id, tag)}
                      className="hover:text-destructive"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addTag(active.id);
                  }}
                  className="flex items-center"
                >
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Tag toevoegen..."
                    className="h-7 text-xs w-32 border-dashed"
                  />
                </form>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">
                Status: <span className="font-medium">{STATUS_LABELS[active.status]}</span> | Aangemaakt:{" "}
                {formatDate(active.created_at)} | Bijgewerkt: {formatDate(active.updated_at)}
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-3 text-accent/30" />
              <p className="text-sm">Selecteer een braindump of maak een nieuwe aan.</p>
              <p className="text-xs mt-2 max-w-sm mx-auto text-muted-foreground/70">
                Nieuwe braindumps worden automatisch opgepakt door de dagelijkse artikel-generator
                als onderwerpen opraken.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBraindump;
