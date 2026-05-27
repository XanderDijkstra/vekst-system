import { useCallback, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Loader2, ArrowLeft, Globe, Mail, Phone, Building2, Calendar, Save, ExternalLink, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Client {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  business_name: string | null;
  fields: Record<string, unknown>;
  created_at: string;
}

const fmtMonths = (iso: string | undefined): string => {
  if (!iso) return "—";
  const start = new Date(iso);
  if (isNaN(start.getTime())) return "—";
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (months < 1) {
    const days = Math.floor((now.getTime() - start.getTime()) / 86400000);
    return `${days} ${days === 1 ? "dag" : "dagen"}`;
  }
  if (months < 12) return `${months} ${months === 1 ? "maand" : "maanden"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem ? `${years}j ${rem}m` : `${years} ${years === 1 ? "jaar" : "jaar"}`;
};

const toDateInput = (iso: string | undefined): string => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
};

const AdminProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [contactPerson, setContactPerson] = useState("");
  const [monthly, setMonthly] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [website, setWebsite] = useState("");
  const [workspace, setWorkspace] = useState("");
  const [notes, setNotes] = useState("");

  const load = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select("id, name, email, phone, business_name, fields, created_at")
      .eq("id", id)
      .single();
    if (error || !data) {
      toast({ title: "Klant niet gevonden", variant: "destructive" });
      navigate("/admin/projects");
      return;
    }
    const c = data as unknown as Client;
    setClient(c);
    setContactPerson((c.fields?.contact_person as string) || c.name || "");
    setMonthly(String(c.fields?.monthly_subscription ?? ""));
    setStartedAt(toDateInput((c.fields?.subscription_started_at as string) || c.created_at));
    setWebsite((c.fields?.website_url as string) || "");
    setWorkspace((c.fields?.workspace_url as string) || "");
    setNotes((c.fields?.client_notes as string) || "");
    setLoading(false);
  }, [id, navigate]);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    if (!client) return;
    setSaving(true);
    const monthlyNum = monthly.trim() ? parseFloat(monthly) : null;
    const startedIso = startedAt ? new Date(startedAt).toISOString() : null;

    const fieldsPatch = {
      contact_person: contactPerson.trim() || null,
      monthly_subscription: monthlyNum,
      subscription_started_at: startedIso,
      website_url: website.trim() || null,
      workspace_url: workspace.trim() || null,
      client_notes: notes.trim() || null,
    };

    try {
      const res = await fetch("/api/crm/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: client.id, fields: fieldsPatch }),
      });
      if (!res.ok) throw new Error();
      toast({ title: "Opgeslagen" });
      load();
    } catch {
      toast({ title: "Opslaan mislukt", variant: "destructive" });
    }
    setSaving(false);
  };

  const removeClient = async () => {
    if (!client) return;
    if (!confirm(`Klant "${client.business_name || client.name}" verwijderen? Dit kan niet ongedaan worden.`)) return;
    const { error } = await supabase.from("form_submissions").delete().eq("id", client.id);
    if (error) {
      toast({ title: "Verwijderen mislukt", variant: "destructive" });
    } else {
      toast({ title: "Klant verwijderd" });
      navigate("/admin/projects");
    }
  };

  const backToCrm = async () => {
    if (!client) return;
    try {
      const res = await fetch("/api/crm/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: client.id, status: "klant" }),
      });
      if (!res.ok) throw new Error();
      toast({ title: "Teruggezet naar CRM" });
      navigate("/admin/projects");
    } catch {
      toast({ title: "Mislukt", variant: "destructive" });
    }
  };

  if (loading || !client) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const monthsAsClient = fmtMonths(startedAt || client.created_at);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/admin/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="h-4 w-4" /> Terug naar klanten
        </Link>

        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-foreground truncate">
              {client.business_name || contactPerson || "Onbekend"}
            </h1>
            <div className="flex items-center gap-3 mt-1.5 text-sm text-muted-foreground flex-wrap">
              {client.email && (
                <a href={`mailto:${client.email}`} className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <Mail className="h-3.5 w-3.5" /> {client.email}
                </a>
              )}
              {client.phone && (
                <a href={`tel:${client.phone}`} className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <Phone className="h-3.5 w-3.5" /> {client.phone}
                </a>
              )}
              {website && (
                <a href={website.startsWith("http") ? website : `https://${website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <Globe className="h-3.5 w-3.5" /> Website
                </a>
              )}
              {workspace && (
                <a href={workspace} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" /> Workspace
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl border bg-card p-4">
          <div className="text-xs text-muted-foreground flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Klant sinds</div>
          <div className="text-2xl font-bold text-foreground mt-1">{monthsAsClient}</div>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="text-xs text-muted-foreground">Abonnement</div>
          <div className="text-2xl font-bold text-foreground mt-1">
            {monthly ? `€${parseFloat(monthly).toLocaleString("nl-NL")}` : "—"}
            <span className="text-sm text-muted-foreground font-normal">/mnd</span>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="text-xs text-muted-foreground flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Contactpersoon</div>
          <div className="text-lg font-semibold text-foreground mt-1 truncate">{contactPerson || "—"}</div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6 space-y-4">
        <h2 className="font-semibold text-foreground">Gegevens bewerken</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contact">Naam contactpersoon</Label>
            <Input id="contact" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} placeholder="Bijv. Jan de Vries" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="monthly">Maandelijks abonnement (€)</Label>
            <Input id="monthly" type="number" step="0.01" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="297" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="started">Startdatum abonnement</Label>
            <Input id="started" type="date" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://klantsite.nl" className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="workspace">Google Workspace URL</Label>
            <Input id="workspace" value={workspace} onChange={(e) => setWorkspace(e.target.value)} placeholder="https://admin.google.com/ac/customer/..." className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="notes">Notities</Label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Interne notities over deze klant..."
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={backToCrm} className="text-muted-foreground">
              Terug naar CRM
            </Button>
            <Button variant="ghost" size="sm" onClick={removeClient} className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4 mr-1.5" /> Verwijderen
            </Button>
          </div>
          <Button onClick={save} disabled={saving} className="gap-1.5">
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Opslaan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectDetail;
