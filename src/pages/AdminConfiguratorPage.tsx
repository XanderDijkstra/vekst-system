import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Plus, Trash2, GripVertical } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Feature {
  id: string;
  slug: string;
  title: string;
  description: string;
  individual_price: number;
  sort_order: number;
  is_active: boolean;
}

interface SettingsMap {
  bundle_price: string;
  bundle_label: string;
}

const AdminConfiguratorPage = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [settings, setSettings] = useState<SettingsMap>({ bundle_price: "279", bundle_label: "Compleet Pakket" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const [{ data: featData }, { data: settData }] = await Promise.all([
      supabase.from("configurator_features").select("*").order("sort_order"),
      supabase.from("configurator_settings").select("*"),
    ]);
    if (featData) setFeatures(featData as Feature[]);
    if (settData) {
      const s: Record<string, string> = {};
      settData.forEach((r: { key: string; value: string }) => { s[r.key] = r.value; });
      setSettings({ bundle_price: s.bundle_price || "279", bundle_label: s.bundle_label || "Compleet Pakket" });
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const updateFeature = (id: string, field: keyof Feature, value: string | number | boolean) => {
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      // Update features
      for (const f of features) {
        await supabase
          .from("configurator_features")
          .update({
            title: f.title,
            description: f.description,
            individual_price: f.individual_price,
            sort_order: f.sort_order,
            is_active: f.is_active,
            slug: f.slug,
          })
          .eq("id", f.id);
      }
      // Update settings
      await supabase.from("configurator_settings").update({ value: settings.bundle_price }).eq("key", "bundle_price");
      await supabase.from("configurator_settings").update({ value: settings.bundle_label }).eq("key", "bundle_label");

      toast({ title: "Opgeslagen", description: "Alle wijzigingen zijn opgeslagen." });
    } catch {
      toast({ title: "Fout", description: "Er ging iets mis bij het opslaan.", variant: "destructive" });
    }
    setSaving(false);
  };

  const addFeature = async () => {
    const maxOrder = features.reduce((max, f) => Math.max(max, f.sort_order), 0);
    const slug = `nieuw-${Date.now()}`;
    const { data } = await supabase
      .from("configurator_features")
      .insert({ slug, title: "Nieuw onderdeel", description: "Beschrijving", individual_price: 0, sort_order: maxOrder + 1 })
      .select()
      .single();
    if (data) setFeatures((prev) => [...prev, data as Feature]);
  };

  const deleteFeature = async (id: string) => {
    await supabase.from("configurator_features").delete().eq("id", id);
    setFeatures((prev) => prev.filter((f) => f.id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Configurator Admin</h1>
            <p className="text-sm text-muted-foreground mt-1">Beheer onderdelen en prijzen</p>
          </div>
          <Button onClick={saveAll} disabled={saving} className="rounded-xl active:scale-[0.97] transition-transform">
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Opslaan..." : "Alles opslaan"}
          </Button>
        </div>

        {/* Bundle settings */}
        <div className="rounded-2xl border border-border bg-card p-6 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Bundel Instellingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Bundel Naam</label>
              <Input
                value={settings.bundle_label}
                onChange={(e) => setSettings((s) => ({ ...s, bundle_label: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Bundel Prijs (€/maand)</label>
              <Input
                type="number"
                value={settings.bundle_price}
                onChange={(e) => setSettings((s) => ({ ...s, bundle_price: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`rounded-2xl border bg-card p-6 ${!f.is_active ? "opacity-50" : ""} ${
                f.is_active ? "border-border" : "border-dashed border-muted-foreground/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-2 text-muted-foreground">
                  <GripVertical className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Titel</label>
                      <Input
                        value={f.title}
                        onChange={(e) => updateFeature(f.id, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Slug</label>
                      <Input
                        value={f.slug}
                        onChange={(e) => updateFeature(f.id, "slug", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Beschrijving</label>
                    <textarea
                      value={f.description}
                      onChange={(e) => updateFeature(f.id, "description", e.target.value)}
                      rows={2}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Prijs (€/mo)</label>
                      <Input
                        type="number"
                        value={f.individual_price}
                        onChange={(e) => updateFeature(f.id, "individual_price", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Volgorde</label>
                      <Input
                        type="number"
                        value={f.sort_order}
                        onChange={(e) => updateFeature(f.id, "sort_order", Number(e.target.value))}
                      />
                    </div>
                    <div className="flex items-end gap-3">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={f.is_active}
                          onChange={(e) => updateFeature(f.id, "is_active", e.target.checked)}
                          className="h-4 w-4 rounded"
                        />
                        Actief
                      </label>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteFeature(f.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" onClick={addFeature} className="mt-6 rounded-xl w-full active:scale-[0.97] transition-transform">
          <Plus className="mr-2 h-4 w-4" />
          Onderdeel toevoegen
        </Button>
      </div>
    </div>
  );
};

export default AdminConfiguratorPage;
