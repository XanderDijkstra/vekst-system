import { useCallback, useEffect, useState } from "react";
import { Link as LinkIcon, Loader2, Save, Send, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FORMS, type FormDefinition } from "@/lib/forms";

interface WebhookRow {
  form_key: string;
  label: string;
  webhook_url: string | null;
  enabled: boolean;
  updated_at: string;
}

interface DraftState {
  webhook_url: string;
  enabled: boolean;
  dirty: boolean;
  saving: boolean;
  testing: boolean;
}

const emptyDraft = (): DraftState => ({
  webhook_url: "",
  enabled: true,
  dirty: false,
  saving: false,
  testing: false,
});

const AdminWebhooks = () => {
  const [loading, setLoading] = useState(true);
  const [rowsByKey, setRowsByKey] = useState<Record<string, WebhookRow>>({});
  const [drafts, setDrafts] = useState<Record<string, DraftState>>({});

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("form_webhooks")
      .select("form_key, label, webhook_url, enabled, updated_at");
    if (error) {
      toast({
        title: "Kon webhooks niet laden",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    const next: Record<string, WebhookRow> = {};
    const draftNext: Record<string, DraftState> = {};
    (data ?? []).forEach((row) => {
      next[row.form_key] = row as WebhookRow;
    });
    FORMS.forEach((f) => {
      const row = next[f.key];
      draftNext[f.key] = {
        webhook_url: row?.webhook_url ?? "",
        enabled: row?.enabled ?? true,
        dirty: false,
        saving: false,
        testing: false,
      };
    });
    setRowsByKey(next);
    setDrafts(draftNext);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const updateDraft = (key: string, patch: Partial<DraftState>) => {
    setDrafts((prev) => ({
      ...prev,
      [key]: { ...(prev[key] ?? emptyDraft()), ...patch, dirty: true },
    }));
  };

  const save = async (form: FormDefinition) => {
    const draft = drafts[form.key];
    if (!draft) return;
    setDrafts((prev) => ({
      ...prev,
      [form.key]: { ...draft, saving: true },
    }));

    const payload = {
      form_key: form.key,
      label: form.label,
      webhook_url: draft.webhook_url.trim() || null,
      enabled: draft.enabled,
    };

    const { error } = await supabase
      .from("form_webhooks")
      .upsert(payload, { onConflict: "form_key" });

    if (error) {
      toast({
        title: "Opslaan mislukt",
        description: error.message,
        variant: "destructive",
      });
      setDrafts((prev) => ({
        ...prev,
        [form.key]: { ...draft, saving: false },
      }));
      return;
    }

    toast({
      title: "Opgeslagen",
      description: form.label,
    });
    await load();
  };

  const testSend = async (form: FormDefinition) => {
    const draft = drafts[form.key];
    if (!draft?.webhook_url.trim()) {
      toast({
        title: "Geen webhook URL",
        description: "Vul eerst een webhook URL in en sla op.",
        variant: "destructive",
      });
      return;
    }
    if (draft.dirty) {
      toast({
        title: "Sla eerst op",
        description: "Er staan niet-opgeslagen wijzigingen. Klik eerst 'Opslaan'.",
        variant: "destructive",
      });
      return;
    }

    setDrafts((prev) => ({
      ...prev,
      [form.key]: { ...draft, testing: true },
    }));

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_key: form.key,
          fields: {
            name: "Testbericht - Admin Panel",
            email: "test@aannemersysteem.com",
            phone: "0612345678",
            businessName: "Test Bedrijf BV",
            message: `Dit is een testverzending voor "${form.label}". Als je dit leest in GHL werkt de webhook correct.`,
            test: true,
          },
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }
      toast({
        title: "Test verzonden",
        description: "Check GHL om het testbericht te zien.",
      });
    } catch (err) {
      toast({
        title: "Test mislukt",
        description: err instanceof Error ? err.message : "Onbekende fout",
        variant: "destructive",
      });
    } finally {
      setDrafts((prev) => {
        const current = prev[form.key];
        return current
          ? { ...prev, [form.key]: { ...current, testing: false } }
          : prev;
      });
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Webhooks
        </h1>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Koppel elke formulier aan een GHL webhook URL. Wijzigingen werken direct,
          geen redeploy nodig. Nieuwe formulieren (zoals nieuwe downloads) verschijnen
          hier automatisch.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Laden...
        </div>
      ) : (
        <div className="space-y-4">
          {FORMS.map((form) => {
            const draft = drafts[form.key] ?? emptyDraft();
            const saved = rowsByKey[form.key];
            const hasUrl = Boolean(draft.webhook_url.trim());

            return (
              <div
                key={form.key}
                className="bg-card rounded-xl p-5 shadow-sm border border-border"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{form.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      <span className="font-mono">{form.key}</span> &middot;{" "}
                      {form.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    {hasUrl && saved?.enabled ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                        <Check className="h-3.5 w-3.5" />
                        Actief
                      </span>
                    ) : hasUrl ? (
                      <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                        Uitgeschakeld
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <X className="h-3.5 w-3.5" />
                        Niet geconfigureerd
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Input
                    placeholder="https://services.leadconnectorhq.com/hooks/..."
                    value={draft.webhook_url}
                    onChange={(e) =>
                      updateDraft(form.key, { webhook_url: e.target.value })
                    }
                    className="font-mono text-xs"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={draft.enabled}
                      onCheckedChange={(v) => updateDraft(form.key, { enabled: v })}
                    />
                    <span className="text-sm text-muted-foreground">
                      {draft.enabled ? "Ingeschakeld" : "Uitgeschakeld"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={draft.testing || !hasUrl || draft.dirty}
                      onClick={() => testSend(form)}
                    >
                      {draft.testing ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5" />
                      ) : (
                        <Send className="h-3.5 w-3.5 mr-1.5" />
                      )}
                      Test verzenden
                    </Button>
                    <Button
                      size="sm"
                      disabled={!draft.dirty || draft.saving}
                      onClick={() => save(form)}
                    >
                      {draft.saving ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5" />
                      ) : (
                        <Save className="h-3.5 w-3.5 mr-1.5" />
                      )}
                      Opslaan
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminWebhooks;
