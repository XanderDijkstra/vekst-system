import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Download, RefreshCw, AlertTriangle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FORMS } from "@/lib/forms";

interface SubmissionRow {
  id: string;
  form_key: string;
  email: string | null;
  name: string | null;
  business_name: string | null;
  phone: string | null;
  message: string | null;
  fields: Record<string, unknown>;
  forwarded: boolean;
  forward_error: string | null;
  created_at: string;
}

const PAGE_SIZE = 100;

const formLabel = (key: string) =>
  FORMS.find((f) => f.key === key)?.label ?? key;

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const AdminLeads = () => {
  const [rows, setRows] = useState<SubmissionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterFormKey, setFilterFormKey] = useState<string>("");
  const [search, setSearch] = useState("");
  const [activeRow, setActiveRow] = useState<SubmissionRow | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select(
        "id, form_key, email, name, business_name, phone, message, fields, forwarded, forward_error, created_at"
      )
      .order("created_at", { ascending: false })
      .limit(PAGE_SIZE);
    if (error) {
      toast({
        title: "Kon leads niet laden",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    setRows((data ?? []) as unknown as SubmissionRow[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (filterFormKey && r.form_key !== filterFormKey) return false;
      if (!q) return true;
      return [r.email, r.name, r.business_name, r.phone, r.message]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q));
    });
  }, [rows, filterFormKey, search]);

  const stats = useMemo(() => {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    const today = rows.filter((r) => now - new Date(r.created_at).getTime() < day).length;
    const week = rows.filter((r) => now - new Date(r.created_at).getTime() < 7 * day).length;
    const month = rows.filter((r) => now - new Date(r.created_at).getTime() < 30 * day).length;
    const failed = rows.filter((r) => !r.forwarded).length;
    return { today, week, month, failed };
  }, [rows]);

  const exportCsv = () => {
    if (filtered.length === 0) return;
    const headers = [
      "datum",
      "formulier",
      "naam",
      "email",
      "bedrijf",
      "telefoon",
      "bericht",
      "ghl_doorgestuurd",
      "ghl_fout",
    ];
    const escape = (v: unknown) => {
      const s = v == null ? "" : String(v);
      return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [
      headers.join(","),
      ...filtered.map((r) =>
        [
          r.created_at,
          formLabel(r.form_key),
          r.name,
          r.email,
          r.business_name,
          r.phone,
          r.message,
          r.forwarded ? "ja" : "nee",
          r.forward_error,
        ]
          .map(escape)
          .join(",")
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl">
      <div className="mb-8 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Leads
          </h1>
          <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
            Iedere formulier-inzending op de site, geregistreerd voordat hij naar GHL
            wordt doorgestuurd. Laatste {PAGE_SIZE} inzendingen zichtbaar.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} />
          Vernieuwen
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Vandaag" value={stats.today} />
        <StatCard label="Deze week" value={stats.week} />
        <StatCard label="30 dagen" value={stats.month} />
        <StatCard
          label="Niet doorgestuurd"
          value={stats.failed}
          tone={stats.failed > 0 ? "warning" : "neutral"}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Input
          placeholder="Zoek naam, email, bedrijf..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <select
          value={filterFormKey}
          onChange={(e) => setFilterFormKey(e.target.value)}
          className="h-9 px-3 rounded-md border border-input bg-background text-sm"
        >
          <option value="">Alle formulieren</option>
          {FORMS.map((f) => (
            <option key={f.key} value={f.key}>
              {f.label}
            </option>
          ))}
        </select>
        <div className="ml-auto text-xs text-muted-foreground">
          {filtered.length} van {rows.length}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={exportCsv}
          disabled={filtered.length === 0}
        >
          <Download className="h-4 w-4 mr-1.5" />
          CSV
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Laden...
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Datum</th>
                  <th className="text-left px-4 py-3 font-semibold">Formulier</th>
                  <th className="text-left px-4 py-3 font-semibold">Naam</th>
                  <th className="text-left px-4 py-3 font-semibold">Email</th>
                  <th className="text-left px-4 py-3 font-semibold">Bedrijf</th>
                  <th className="text-center px-4 py-3 font-semibold">GHL</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-12 text-muted-foreground"
                    >
                      Geen leads gevonden.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      onClick={() => setActiveRow(row)}
                      className="border-t border-border hover:bg-muted/40 cursor-pointer"
                    >
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {fmtDate(row.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-medium text-foreground">
                          {formLabel(row.form_key)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        {row.name ?? <span className="text-muted-foreground">-</span>}
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        {row.email ?? <span className="text-muted-foreground">-</span>}
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        {row.business_name ?? (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.forwarded ? (
                          <Check
                            className="h-4 w-4 text-emerald-600 inline"
                            aria-label="Doorgestuurd naar GHL"
                          />
                        ) : (
                          <AlertTriangle
                            className="h-4 w-4 text-amber-600 inline"
                            aria-label="Niet doorgestuurd"
                          />
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeRow && (
        <LeadDrawer row={activeRow} onClose={() => setActiveRow(null)} />
      )}
    </div>
  );
};

interface LeadDrawerProps {
  row: SubmissionRow;
  onClose: () => void;
}

const LeadDrawer = ({ row, onClose }: LeadDrawerProps) => (
  <div
    className="fixed inset-0 z-50 bg-black/40 flex justify-end"
    onClick={onClose}
  >
    <div
      className="w-full max-w-md bg-background h-full overflow-auto p-6 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            {formLabel(row.form_key)}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">
            {row.name || row.email || "Onbekende lead"}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {fmtDate(row.created_at)}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Sluiten
        </Button>
      </div>

      <div className="space-y-4">
        <Field label="Email" value={row.email} />
        <Field label="Naam" value={row.name} />
        <Field label="Bedrijf" value={row.business_name} />
        <Field label="Telefoon" value={row.phone} />
        <Field label="Bericht" value={row.message} multiline />

        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
            GHL doorsturen
          </p>
          {row.forwarded ? (
            <p className="text-sm text-emerald-600">Gelukt</p>
          ) : (
            <div>
              <p className="text-sm text-amber-600">Mislukt</p>
              {row.forward_error && (
                <p className="text-xs text-muted-foreground mt-1 font-mono break-all">
                  {row.forward_error}
                </p>
              )}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
            Volledige payload
          </p>
          <pre className="text-xs bg-muted rounded p-3 overflow-auto max-h-64 font-mono">
            {JSON.stringify(row.fields, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  </div>
);

const Field = ({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string | null;
  multiline?: boolean;
}) => (
  <div>
    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
      {label}
    </p>
    {value ? (
      <p
        className={`text-sm text-foreground ${multiline ? "whitespace-pre-wrap" : ""}`}
      >
        {value}
      </p>
    ) : (
      <p className="text-sm text-muted-foreground italic">-</p>
    )}
  </div>
);

interface StatCardProps {
  label: string;
  value: number;
  tone?: "neutral" | "warning";
}

const StatCard = ({ label, value, tone = "neutral" }: StatCardProps) => (
  <div className="bg-card rounded-lg border border-border p-4">
    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
      {label}
    </p>
    <p
      className={`mt-1 text-2xl font-bold ${
        tone === "warning" && value > 0 ? "text-amber-600" : "text-foreground"
      }`}
    >
      {value}
    </p>
  </div>
);

export default AdminLeads;
