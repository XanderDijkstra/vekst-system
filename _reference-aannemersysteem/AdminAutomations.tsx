import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Loader2,
  Mail,
  Save,
  X,
  Clock,
  Plus,
  ToggleLeft,
  ToggleRight,
  ArrowRight,
  Trash2,
  ArrowUp,
  ArrowDown,
  FileText,
  Search,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

type EmailStep = {
  type: "email";
  subject: string;
  heading: string;
  body: string;
  cta: { text: string; href: string } | null;
};
type WaitStep = { type: "wait"; days: number };
type Step = EmailStep | WaitStep;

interface StageTemplate {
  enabled: boolean;
  steps: Step[];
}
type StageTemplates = Record<string, StageTemplate>;

interface TriggerConfig {
  key: string;
  label: string;
  description: string;
  note?: string;
  color: string;
  iconBg: string;
  icon: typeof Mail;
}

const CRM_TRIGGERS: TriggerConfig[] = [
  {
    key: "contact",
    label: "Contact opgenomen",
    description: "Wanneer je een lead naar 'Contact' verplaatst",
    color: "text-amber-600",
    iconBg: "bg-amber-100",
    icon: Mail,
  },
  {
    key: "demo",
    label: "Demo gepland",
    description: "Wanneer je een lead naar 'Demo' verplaatst",
    color: "text-purple-600",
    iconBg: "bg-purple-100",
    icon: Mail,
  },
  {
    key: "klant",
    label: "Klant geworden",
    description: "Wanneer je een lead naar 'Klant' verplaatst",
    color: "text-emerald-600",
    iconBg: "bg-emerald-100",
    icon: Mail,
  },
];

const FORM_TRIGGERS: TriggerConfig[] = [
  {
    key: "form:seo-quiz",
    label: "SEO Check ingevuld",
    description: "Wanneer iemand de SEO Check invult",
    note: "De score-email wordt altijd automatisch verstuurd. Dit zijn opvolgmails.",
    color: "text-orange-600",
    iconBg: "bg-orange-100",
    icon: Search,
  },
  {
    key: "form:contact",
    label: "Contactformulier",
    description: "Wanneer iemand het contactformulier invult",
    color: "text-sky-600",
    iconBg: "bg-sky-100",
    icon: FileText,
  },
  {
    key: "form:homepage",
    label: "Homepage formulier",
    description: "Wanneer iemand het formulier op de homepage invult",
    color: "text-indigo-600",
    iconBg: "bg-indigo-100",
    icon: Home,
  },
];

const newEmailStep = (): EmailStep => ({
  type: "email",
  subject: "",
  heading: "",
  body: "",
  cta: null,
});
const newWaitStep = (): WaitStep => ({ type: "wait", days: 3 });

const AdminAutomations = () => {
  const [templates, setTemplates] = useState<StageTemplates>({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/crm/stage-email");
      if (res.ok) {
        const data = await res.json();
        setTemplates(data.templates || {});
      }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const updateStage = (stage: string, patch: Partial<StageTemplate>) => {
    setTemplates((prev) => ({ ...prev, [stage]: { ...prev[stage], ...patch } }));
  };

  const updateStep = (stage: string, idx: number, patch: Partial<Step>) => {
    setTemplates((prev) => {
      const t = prev[stage];
      if (!t) return prev;
      const steps = t.steps.map((s, i) => (i === idx ? ({ ...s, ...patch } as Step) : s));
      return { ...prev, [stage]: { ...t, steps } };
    });
  };

  const addStep = (stage: string, type: "email" | "wait") => {
    setTemplates((prev) => {
      const t = prev[stage];
      if (!t) return prev;
      return { ...prev, [stage]: { ...t, steps: [...t.steps, type === "email" ? newEmailStep() : newWaitStep()] } };
    });
  };

  const removeStep = (stage: string, idx: number) => {
    setTemplates((prev) => {
      const t = prev[stage];
      if (!t) return prev;
      return { ...prev, [stage]: { ...t, steps: t.steps.filter((_, i) => i !== idx) } };
    });
  };

  const moveStep = (stage: string, idx: number, dir: -1 | 1) => {
    setTemplates((prev) => {
      const t = prev[stage];
      if (!t) return prev;
      const target = idx + dir;
      if (target < 0 || target >= t.steps.length) return prev;
      const steps = [...t.steps];
      [steps[idx], steps[target]] = [steps[target], steps[idx]];
      return { ...prev, [stage]: { ...t, steps } };
    });
  };

  const persist = async (stage: string, override?: Partial<StageTemplate>) => {
    const t = { ...templates[stage], ...override };
    if (!t) return false;
    const res = await fetch("/api/crm/stage-email-config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage, enabled: t.enabled, steps: t.steps }),
    });
    return res.ok;
  };

  const toggleEnabled = async (stage: string) => {
    const t = templates[stage];
    if (!t) return;
    const newEnabled = !t.enabled;
    updateStage(stage, { enabled: newEnabled });
    try {
      const ok = await persist(stage, { enabled: newEnabled });
      if (!ok) throw new Error();
      toast({ title: newEnabled ? "Automation ingeschakeld" : "Automation uitgeschakeld" });
    } catch {
      updateStage(stage, { enabled: !newEnabled });
      toast({ title: "Opslaan mislukt", variant: "destructive" });
    }
  };

  const save = async (stage: string) => {
    setSaving(true);
    try {
      const ok = await persist(stage);
      if (!ok) throw new Error();
      toast({ title: "Automation opgeslagen" });
      setEditing(null);
    } catch {
      toast({ title: "Opslaan mislukt", variant: "destructive" });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const renderCards = (triggers: TriggerConfig[]) =>
    triggers.map((trigger) => (
      <AutomationCard
        key={trigger.key}
        trigger={trigger}
        template={templates[trigger.key]}
        editing={editing === trigger.key}
        saving={saving}
        onToggle={() => toggleEnabled(trigger.key)}
        onEdit={() => setEditing(trigger.key)}
        onClose={() => setEditing(null)}
        onSave={() => save(trigger.key)}
        onUpdateStep={(idx, patch) => updateStep(trigger.key, idx, patch)}
        onAddStep={(type) => addStep(trigger.key, type)}
        onRemoveStep={(idx) => removeStep(trigger.key, idx)}
        onMoveStep={(idx, dir) => moveStep(trigger.key, idx, dir)}
      />
    ));

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Automations</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Alle e-mailsequenties op één plek — formulieren en CRM-acties
        </p>
      </div>

      {/* Formulier automations */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Formulier automations</h2>
        <div className="space-y-4">{renderCards(FORM_TRIGGERS)}</div>
      </div>

      {/* CRM stage automations */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">CRM Stage automations</h2>
        <div className="flex items-center gap-2 mb-4 px-2 overflow-x-auto">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wide flex-shrink-0">
            Nieuw
          </div>
          {CRM_TRIGGERS.map((trigger) => {
            const t = templates[trigger.key];
            const emailCount = t?.steps?.filter((s) => s.type === "email").length || 0;
            return (
              <div key={trigger.key} className="flex items-center gap-2 flex-shrink-0">
                <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wide ${trigger.iconBg} ${trigger.color}`}>
                  {trigger.label.split(" ")[0]}
                  {t?.enabled && emailCount > 0 && (
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {emailCount > 1 && <span>{emailCount}</span>}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-4">{renderCards(CRM_TRIGGERS)}</div>
      </div>
    </div>
  );
};

type AutomationCardProps = {
  trigger: TriggerConfig;
  template: StageTemplate | undefined;
  editing: boolean;
  saving: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onClose: () => void;
  onSave: () => void;
  onUpdateStep: (idx: number, patch: Partial<Step>) => void;
  onAddStep: (type: "email" | "wait") => void;
  onRemoveStep: (idx: number) => void;
  onMoveStep: (idx: number, dir: -1 | 1) => void;
};

const AutomationCard = ({
  trigger, template, editing, saving,
  onToggle, onEdit, onClose, onSave,
  onUpdateStep, onAddStep, onRemoveStep, onMoveStep,
}: AutomationCardProps) => {
  const summary = useMemo(() => {
    if (!template) return { emails: 0, days: 0 };
    let emails = 0; let days = 0;
    for (const s of template.steps) {
      if (s.type === "email") emails++;
      if (s.type === "wait") days += s.days;
    }
    return { emails, days };
  }, [template]);

  if (!template) return null;
  const Icon = trigger.icon;

  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-lg ${trigger.iconBg} flex items-center justify-center`}>
            <Icon className={`h-5 w-5 ${trigger.color}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">{trigger.label}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${template.enabled ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`}>
                {template.enabled ? "Actief" : "Uit"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{trigger.description}</p>
            {trigger.note && <p className="text-xs text-amber-600 mt-1">{trigger.note}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onToggle} className="p-1" type="button">
            {template.enabled ? (
              <ToggleRight className="h-7 w-7 text-emerald-500" />
            ) : (
              <ToggleLeft className="h-7 w-7 text-muted-foreground" />
            )}
          </button>
          {!editing ? (
            <Button variant="outline" size="sm" onClick={onEdit}>Bewerken</Button>
          ) : (
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="h-3.5 w-3.5 mr-1" /> Sluiten
            </Button>
          )}
        </div>
      </div>

      {!editing && (
        <div className="px-6 pb-4 border-t pt-4 bg-muted/20">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <span className="font-medium text-foreground">{summary.emails}</span>
            <span>{summary.emails === 1 ? "e-mail" : "e-mails"}</span>
            {summary.days > 0 && (
              <>
                <span>·</span>
                <span>over <span className="font-medium text-foreground">{summary.days}</span> {summary.days === 1 ? "dag" : "dagen"}</span>
              </>
            )}
            {template.steps.length === 0 && <span>Geen stappen ingesteld</span>}
          </div>
          {template.steps.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {template.steps.map((s, i) => (
                <StepChip key={i} step={s} />
              ))}
            </div>
          )}
        </div>
      )}

      {editing && (
        <div className="px-6 pb-6 border-t pt-5 space-y-3">
          {template.steps.map((step, idx) => (
            <StepEditor
              key={idx}
              step={step}
              idx={idx}
              total={template.steps.length}
              onUpdate={(patch) => onUpdateStep(idx, patch)}
              onRemove={() => onRemoveStep(idx)}
              onMove={(dir) => onMoveStep(idx, dir)}
            />
          ))}

          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => onAddStep("email")} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" /> <Mail className="h-3.5 w-3.5" /> E-mail
            </Button>
            <Button variant="outline" size="sm" onClick={() => onAddStep("wait")} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" /> <Clock className="h-3.5 w-3.5" /> Wachten
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t">
            <Button onClick={onSave} disabled={saving} className="gap-1.5">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Opslaan
            </Button>
            <Button variant="ghost" onClick={onClose}>Annuleren</Button>
          </div>
        </div>
      )}
    </div>
  );
};

const StepChip = ({ step }: { step: Step }) => {
  if (step.type === "wait") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        {step.days}d wachten
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-700 max-w-[280px]">
      <Mail className="h-3 w-3 flex-shrink-0" />
      <span className="truncate">{step.subject || "(geen onderwerp)"}</span>
    </div>
  );
};

type StepEditorProps = {
  step: Step;
  idx: number;
  total: number;
  onUpdate: (patch: Partial<Step>) => void;
  onRemove: () => void;
  onMove: (dir: -1 | 1) => void;
};

const StepEditor = ({ step, idx, total, onUpdate, onRemove, onMove }: StepEditorProps) => {
  const isEmail = step.type === "email";
  return (
    <div className={`rounded-lg border ${isEmail ? "bg-amber-50/30 border-amber-200" : "bg-muted/40"} p-4`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${isEmail ? "bg-amber-100 text-amber-700" : "bg-background text-muted-foreground border"}`}>
            {isEmail ? <Mail className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
          </div>
          <span className="text-sm font-medium text-foreground">
            Stap {idx + 1}: {isEmail ? "E-mail" : "Wachten"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={idx === 0}
            className="p-1 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Omhoog"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={idx === total - 1}
            className="p-1 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Omlaag"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="p-1 rounded hover:bg-destructive/10 text-destructive"
            aria-label="Verwijderen"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {step.type === "wait" ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min={0}
            value={step.days}
            onChange={(e) => onUpdate({ days: Math.max(0, Number(e.target.value) || 0) } as Partial<WaitStep>)}
            className="w-24"
          />
          <span className="text-sm text-muted-foreground">dag(en) wachten voor de volgende stap</span>
        </div>
      ) : (
        <EmailStepFields step={step} onUpdate={onUpdate} />
      )}
    </div>
  );
};

const EmailStepFields = ({ step, onUpdate }: { step: EmailStep; onUpdate: (patch: Partial<Step>) => void }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="text-xs font-medium text-muted-foreground block mb-1.5">Onderwerp</label>
        <Input value={step.subject} onChange={(e) => onUpdate({ subject: e.target.value } as Partial<EmailStep>)} />
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground block mb-1.5">Titel in e-mail</label>
        <Input value={step.heading} onChange={(e) => onUpdate({ heading: e.target.value } as Partial<EmailStep>)} />
      </div>
    </div>
    <div>
      <label className="text-xs font-medium text-muted-foreground block mb-1.5">
        Bericht <span className="text-muted-foreground/60">(dubbele enter = nieuwe alinea)</span>
      </label>
      <textarea
        value={step.body}
        onChange={(e) => onUpdate({ body: e.target.value } as Partial<EmailStep>)}
        rows={5}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-y"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="text-xs font-medium text-muted-foreground block mb-1.5">CTA knop tekst <span className="text-muted-foreground/60">(leeg = geen knop)</span></label>
        <Input
          value={step.cta?.text || ""}
          onChange={(e) => onUpdate({ cta: e.target.value ? { text: e.target.value, href: step.cta?.href || "" } : null } as Partial<EmailStep>)}
          placeholder="bijv. Bekijk onze aanpak"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground block mb-1.5">CTA link</label>
        <Input
          value={step.cta?.href || ""}
          onChange={(e) => onUpdate({ cta: step.cta ? { ...step.cta, href: e.target.value } : { text: "", href: e.target.value } } as Partial<EmailStep>)}
          placeholder="https://aannemersysteem.com/..."
        />
      </div>
    </div>
  </div>
);

export default AdminAutomations;
