import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Plus, Trash2, Clock, Tag, Lightbulb } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BraindumpEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "aannemersysteem_braindumps";

const loadEntries = (): BraindumpEntry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveEntries = (entries: BraindumpEntry[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

const AdminBraindump = () => {
  const [entries, setEntries] = useState<BraindumpEntry[]>(loadEntries);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");

  const active = entries.find((e) => e.id === activeId) ?? null;

  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  const addEntry = () => {
    const entry: BraindumpEntry = {
      id: crypto.randomUUID(),
      title: "Nieuw idee",
      content: "",
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setEntries((prev) => [entry, ...prev]);
    setActiveId(entry.id);
  };

  const updateEntry = (id: string, field: keyof BraindumpEntry, value: string | string[]) => {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, [field]: value, updatedAt: new Date().toISOString() } : e
      )
    );
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (activeId === id) setActiveId(null);
    toast({ title: "Verwijderd", description: "Braindump verwijderd." });
  };

  const addTag = (id: string) => {
    const tag = tagInput.trim().toLowerCase();
    if (!tag) return;
    const entry = entries.find((e) => e.id === id);
    if (entry && !entry.tags.includes(tag)) {
      updateEntry(id, "tags", [...entry.tags, tag]);
    }
    setTagInput("");
  };

  const removeTag = (id: string, tag: string) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      updateEntry(id, "tags", entry.tags.filter((t) => t !== tag));
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

  return (
    <div className="flex h-[calc(100svh-3.5rem)]">
      {/* Sidebar list */}
      <div className="w-72 border-r border-border flex flex-col bg-card/50">
        <div className="p-3 border-b border-border">
          <Button onClick={addEntry} className="w-full rounded-xl" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Nieuw idee
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          {entries.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground text-center">
              Nog geen braindumps. Klik op "Nieuw idee" om te beginnen.
            </p>
          )}
          {entries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => setActiveId(entry.id)}
              className={`w-full text-left px-4 py-3 border-b border-border/50 hover:bg-accent/10 transition-colors ${
                activeId === entry.id ? "bg-accent/10 border-l-2 border-l-accent" : ""
              }`}
            >
              <p className="text-sm font-medium text-foreground truncate">
                {entry.title || "Zonder titel"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {entry.content
                  ? entry.content.substring(0, 60) + (entry.content.length > 60 ? "..." : "")
                  : "Leeg"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">
                  {formatDate(entry.updatedAt)}
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
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Input
                value={active.title}
                onChange={(e) => updateEntry(active.id, "title", e.target.value)}
                className="text-lg font-semibold border-none shadow-none px-0 focus-visible:ring-0 max-w-lg"
                placeholder="Titel..."
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteEntry(active.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-auto">
              <textarea
                value={active.content}
                onChange={(e) => updateEntry(active.id, "content", e.target.value)}
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
                Aangemaakt: {formatDate(active.createdAt)} | Bijgewerkt: {formatDate(active.updatedAt)}
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-3 text-accent/30" />
              <p className="text-sm">Selecteer een braindump of maak een nieuwe aan.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBraindump;
