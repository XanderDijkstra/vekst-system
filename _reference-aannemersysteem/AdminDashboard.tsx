import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users, TrendingUp, Mail, BookOpen, Calendar,
  ArrowRight, Clock, Loader2, ExternalLink, Zap,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { kennisbankArticles } from "@/data/kennisbankArticles";

interface LeadRow {
  id: string;
  form_key: string;
  name: string | null;
  email: string | null;
  business_name: string | null;
  fields: Record<string, unknown>;
  created_at: string;
}

interface NewsletterPreview {
  article: { title: string; category: string; slug: string };
  subject: string;
  sentCount: number;
  remainingCount: number;
}

const FORM_LABELS: Record<string, string> = {
  "seo-quiz": "SEO Check",
  contact: "Contact",
  offerte: "Offerte",
  demo: "Demo",
  newsletter: "Nieuwsbrief",
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const AdminDashboard = () => {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [preview, setPreview] = useState<NewsletterPreview | null>(null);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);

    const [leadsRes, previewRes, audienceRes] = await Promise.allSettled([
      supabase
        .from("form_submissions")
        .select("id, form_key, name, email, business_name, fields, created_at")
        .order("created_at", { ascending: false })
        .limit(500),
      fetch("/api/cron/weekly-newsletter?preview=true").then((r) => r.ok ? r.json() : null),
      fetch("/api/admin/audiences").then((r) => r.ok ? r.json() : null),
    ]);

    if (leadsRes.status === "fulfilled" && leadsRes.value.data) {
      setLeads(leadsRes.value.data as unknown as LeadRow[]);
    }
    if (previewRes.status === "fulfilled" && previewRes.value) {
      setPreview(previewRes.value);
    }
    if (audienceRes.status === "fulfilled" && audienceRes.value?.audiences) {
      const total = audienceRes.value.audiences.reduce(
        (sum: number, a: { contacts: { unsubscribed: boolean }[] }) =>
          sum + a.contacts.filter((c: { unsubscribed: boolean }) => !c.unsubscribed).length,
        0
      );
      setSubscriberCount(total);
    }

    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const now = new Date();
  const dayAgo = new Date(now.getTime() - 86400000);
  const weekAgo = new Date(now.getTime() - 7 * 86400000);
  const monthAgo = new Date(now.getTime() - 30 * 86400000);

  const leadsToday = leads.filter((l) => new Date(l.created_at) >= dayAgo).length;
  const leadsWeek = leads.filter((l) => new Date(l.created_at) >= weekAgo).length;
  const leadsMonth = leads.filter((l) => new Date(l.created_at) >= monthAgo).length;
  const newLeads = leads.filter((l) => !l.fields?._status || l.fields._status === "nieuw").length;

  const recentLeads = leads.slice(0, 8);

  const kpis = [
    { label: "Leads vandaag", value: leadsToday, icon: Zap, color: "text-blue-600 bg-blue-50" },
    { label: "Leads deze week", value: leadsWeek, icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
    { label: "Leads deze maand", value: leadsMonth, icon: Users, color: "text-purple-600 bg-purple-50" },
    { label: "Onbehandeld", value: newLeads, icon: Clock, color: newLeads > 0 ? "text-amber-600 bg-amber-50" : "text-emerald-600 bg-emerald-50" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Overzicht van Aannemer Systeem</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{kpi.label}</span>
              <div className={`p-2 rounded-lg ${kpi.color}`}>
                <kpi.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground tabular-nums">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent leads */}
        <div className="lg:col-span-2 rounded-xl border bg-card overflow-hidden">
          <div className="px-5 py-4 flex items-center justify-between border-b">
            <h2 className="font-semibold text-foreground">Recente leads</h2>
            <Link to="/admin/crm" className="text-xs text-accent hover:underline flex items-center gap-1">
              Alle leads <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="divide-y">
            {recentLeads.map((lead) => {
              const score = typeof lead.fields?._totalScore === "number" ? lead.fields._totalScore as number : null;
              return (
                <Link
                  key={lead.id}
                  to="/admin/crm"
                  className="flex items-center gap-4 px-5 py-3 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground truncate">{lead.name || "Onbekend"}</p>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground flex-shrink-0">
                        {FORM_LABELS[lead.form_key] || lead.form_key}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {lead.email || lead.business_name || "–"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {score !== null && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${score >= 70 ? "bg-emerald-100 text-emerald-700" : score >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                        {score}
                      </span>
                    )}
                    <span className="text-[11px] text-muted-foreground">{fmtDate(lead.created_at)}</span>
                  </div>
                </Link>
              );
            })}
            {recentLeads.length === 0 && (
              <p className="px-5 py-8 text-center text-sm text-muted-foreground">Nog geen leads</p>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Newsletter preview */}
          {preview && (
            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="px-5 py-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <h2 className="font-semibold text-foreground text-sm">Volgende nieuwsbrief</h2>
                </div>
                <Link to="/admin/email" className="text-xs text-accent hover:underline">
                  Beheer
                </Link>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-wide">{preview.article.category}</p>
                  <p className="text-sm font-medium text-foreground mt-1 leading-snug">{preview.article.title}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{preview.sentCount} verstuurd</span>
                  <span>{preview.remainingCount} resterend</span>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Elke dinsdag om 08:00
                </p>
              </div>
            </div>
          )}

          {/* Quick stats */}
          <div className="rounded-xl border bg-card p-5 space-y-4">
            <h2 className="font-semibold text-foreground text-sm">Statistieken</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" /> Nieuwsbrief abonnees
                </div>
                <span className="text-sm font-bold text-foreground">{subscriberCount ?? "–"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" /> Kennisbank artikelen
                </div>
                <span className="text-sm font-bold text-foreground">{kennisbankArticles.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" /> Totale leads
                </div>
                <span className="text-sm font-bold text-foreground">{leads.length}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b">
              <h2 className="font-semibold text-foreground text-sm">Snelle acties</h2>
            </div>
            <div className="divide-y">
              {[
                { label: "CRM openen", href: "/admin/crm", icon: Users },
                { label: "Nieuwsbrief beheren", href: "/admin/email", icon: Mail },
                { label: "Kennisbank bewerken", href: "/admin/kennisbank", icon: BookOpen },
                { label: "Website bekijken", href: "/", icon: ExternalLink, external: true },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  <ArrowRight className="h-3 w-3 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
