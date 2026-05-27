import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Briefcase, Globe, Mail, Phone, Building2, Search, ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const fmtMoney = (val: unknown): string => {
  const n = typeof val === "number" ? val : typeof val === "string" ? parseFloat(val) : NaN;
  if (isNaN(n)) return "—";
  return `€${n.toLocaleString("nl-NL", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const AdminProjects = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select("id, name, email, phone, business_name, fields, created_at")
      .or("fields->>_status.like.project:%,fields->>_status.like.onboard:%")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Kon klanten niet laden", variant: "destructive" });
    }
    setClients((data ?? []) as unknown as Client[]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = useMemo(() => {
    if (!search.trim()) return clients;
    const q = search.toLowerCase();
    return clients.filter((c) =>
      (c.name || "").toLowerCase().includes(q) ||
      (c.business_name || "").toLowerCase().includes(q) ||
      (c.email || "").toLowerCase().includes(q) ||
      ((c.fields?.contact_person as string) || "").toLowerCase().includes(q)
    );
  }, [clients, search]);

  const totals = useMemo(() => {
    const total = clients.length;
    const mrr = clients.reduce((sum, c) => {
      const v = c.fields?.monthly_subscription;
      const n = typeof v === "number" ? v : typeof v === "string" ? parseFloat(v) : 0;
      return sum + (isNaN(n) ? 0 : n);
    }, 0);
    return { total, mrr };
  }, [clients]);

  if (loading && clients.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Klanten</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {totals.total} {totals.total === 1 ? "klant" : "klanten"} · MRR {fmtMoney(totals.mrr)}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Zoek..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 w-48 text-sm"
            />
          </div>
          <Button variant="outline" size="sm" onClick={load} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} /> Vernieuwen
          </Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Briefcase className="h-12 w-12 mb-3 opacity-30" />
          <p className="text-sm">Nog geen klanten</p>
          <p className="text-xs mt-1">Verplaats leads naar klanten vanuit CRM</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((c) => {
            const contactPerson = (c.fields?.contact_person as string) || c.name || "—";
            const monthly = c.fields?.monthly_subscription;
            const startedAt = (c.fields?.subscription_started_at as string) || c.created_at;
            const website = c.fields?.website_url as string | undefined;
            const workspace = c.fields?.workspace_url as string | undefined;

            return (
              <Link
                key={c.id}
                to={`/admin/projects/${c.id}`}
                className="group rounded-xl border bg-card p-5 hover:shadow-md hover:border-foreground/20 transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {c.business_name || contactPerson}
                    </h3>
                    {c.business_name && contactPerson !== c.business_name && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {contactPerson}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {website && (
                      <a
                        href={website.startsWith("http") ? website : `https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Website openen"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                    {workspace && (
                      <a
                        href={workspace}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Google Workspace openen"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {c.email && (
                    <div className="flex items-center gap-1.5 truncate">
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{c.email}</span>
                    </div>
                  )}
                  {c.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="h-3 w-3 flex-shrink-0" />
                      <span>{c.phone}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t flex items-center justify-between text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground">Abonnement</div>
                    <div className="font-semibold text-foreground">
                      {fmtMoney(monthly)}<span className="text-xs text-muted-foreground font-normal">/mnd</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                      <Calendar className="h-3 w-3" /> Klant sinds
                    </div>
                    <div className="font-medium text-foreground">{fmtMonths(startedAt)}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
