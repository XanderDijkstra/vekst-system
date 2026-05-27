import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Phone, Mail, Building2, ChevronRight, X, MapPin, Globe, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuizAnswer {
  question: string;
  answer: string;
  points: number;
  max: number;
  category: string;
}

interface CategoryScore {
  score: number;
  max: number;
}

interface QuizLead {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  business_name: string | null;
  message: string | null;
  fields: Record<string, unknown>;
  created_at: string;
}

const STATUSES = ["nieuw", "contact", "demo", "klant"] as const;
type Status = (typeof STATUSES)[number];

const STATUS_META: Record<Status, { label: string; color: string; bg: string }> = {
  nieuw: { label: "Nieuw", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  contact: { label: "Contact opgenomen", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  demo: { label: "Demo gepland", color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
  klant: { label: "Klant", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
};

const CATEGORY_ICONS: Record<string, typeof MapPin> = {
  "Google Bedrijfsprofiel": MapPin,
  "Website & SEO": Globe,
  "Reviews & Reputatie": Star,
  "Leadopvolging & Zichtbaarheid": Zap,
};

function getStatus(lead: QuizLead): Status {
  const s = lead.fields?._status;
  if (typeof s === "string" && STATUSES.includes(s as Status)) return s as Status;
  return "nieuw";
}

function getScore(lead: QuizLead): number | null {
  const ts = lead.fields?._totalScore;
  if (typeof ts === "number") return ts;
  const match = lead.message?.match(/score:\s*(\d+)\/100/i);
  return match ? parseInt(match[1], 10) : null;
}

function getCategoryScores(lead: QuizLead): Record<string, CategoryScore> | null {
  const cs = lead.fields?._categoryScores;
  if (cs && typeof cs === "object") return cs as Record<string, CategoryScore>;
  return null;
}

function getAnswers(lead: QuizLead): Record<string, QuizAnswer> | null {
  const a = lead.fields?._answers;
  if (a && typeof a === "object") return a as Record<string, QuizAnswer>;
  return null;
}

function scoreBadgeColor(score: number) {
  if (score >= 70) return "bg-emerald-100 text-emerald-700";
  if (score >= 40) return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

function scoreBarColor(score: number, max: number) {
  const pct = (score / max) * 100;
  if (pct >= 70) return "bg-emerald-500";
  if (pct >= 40) return "bg-amber-500";
  return "bg-red-500";
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

/* ── Detail panel ─────────────────────────────────────────────────── */

function LeadDetail({ lead, onClose, onMove, updating }: {
  lead: QuizLead;
  onClose: () => void;
  onMove: (lead: QuizLead, status: Status) => void;
  updating: string | null;
}) {
  const score = getScore(lead);
  const catScores = getCategoryScores(lead);
  const answers = getAnswers(lead);
  const status = getStatus(lead);
  const nextStatus = STATUSES[STATUSES.indexOf(status) + 1] as Status | undefined;

  const answersByCategory = useMemo(() => {
    if (!answers) return {};
    const grouped: Record<string, QuizAnswer[]> = {};
    for (const a of Object.values(answers)) {
      (grouped[a.category] ??= []).push(a);
    }
    return grouped;
  }, [answers]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="relative w-full max-w-lg bg-background shadow-xl overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b px-6 py-4 flex items-center justify-between z-10">
          <h2 className="font-semibold text-foreground truncate">{lead.name || "Onbekend"}</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact info */}
          <div className="space-y-2">
            {lead.business_name && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4 flex-shrink-0" /> {lead.business_name}
              </div>
            )}
            {lead.email && (
              <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" /> {lead.email}
              </a>
            )}
            {lead.phone && (
              <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" /> {lead.phone}
              </a>
            )}
            <p className="text-xs text-muted-foreground">{fmtDate(lead.created_at)}</p>
          </div>

          {/* Score overview */}
          {score !== null && (
            <div className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Score</h3>
                <span className={`text-lg font-bold px-3 py-1 rounded-full ${scoreBadgeColor(score)}`}>
                  {score}/100
                </span>
              </div>

              {catScores && (
                <div className="space-y-3">
                  {Object.entries(catScores).map(([name, cs]) => {
                    const Icon = CATEGORY_ICONS[name] || MapPin;
                    const pct = Math.round((cs.score / cs.max) * 100);
                    return (
                      <div key={name}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="flex items-center gap-1.5 font-medium text-foreground">
                            <Icon className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
                            {name}
                          </span>
                          <span className="text-muted-foreground tabular-nums">{cs.score}/{cs.max}</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full rounded-full ${scoreBarColor(cs.score, cs.max)}`} style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Answers per category */}
          {Object.keys(answersByCategory).length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Antwoorden</h3>
              {Object.entries(answersByCategory).map(([category, items]) => {
                const Icon = CATEGORY_ICONS[category] || MapPin;
                return (
                  <div key={category} className="rounded-xl border bg-card overflow-hidden">
                    <div className="px-4 py-2.5 bg-muted/50 flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-foreground">{category}</span>
                    </div>
                    <div className="divide-y">
                      {items.map((a, i) => (
                        <div key={i} className="px-4 py-3">
                          <p className="text-sm text-foreground leading-snug">{a.question}</p>
                          <div className="mt-1.5 flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">{a.answer}</p>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.points === a.max ? "bg-emerald-100 text-emerald-700" : a.points > 0 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                              {a.points}/{a.max}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* No detailed answers (old leads before this update) */}
          {!answers && lead.message && (
            <div className="rounded-xl border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-2">Samenvatting</h3>
              <p className="text-sm text-muted-foreground">{lead.message}</p>
            </div>
          )}

          {/* Status + move button */}
          <div className="rounded-xl border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Status</p>
                <p className={`font-medium ${STATUS_META[status].color}`}>{STATUS_META[status].label}</p>
              </div>
              {nextStatus && (
                <Button
                  size="sm"
                  onClick={() => onMove(lead, nextStatus)}
                  disabled={updating === lead.id}
                  className="gap-1"
                >
                  {updating === lead.id ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <>{STATUS_META[nextStatus].label} <ChevronRight className="h-3.5 w-3.5" /></>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────── */

const AdminSeoQuiz = () => {
  const [leads, setLeads] = useState<QuizLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [selected, setSelected] = useState<QuizLead | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select("id, name, email, phone, business_name, message, fields, created_at")
      .eq("form_key", "seo-quiz")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) {
      toast({ title: "Kon leads niet laden", description: error.message, variant: "destructive" });
    }
    setLeads((data ?? []) as unknown as QuizLead[]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const moveToStatus = async (lead: QuizLead, newStatus: Status) => {
    setUpdating(lead.id);
    const updatedFields = { ...(lead.fields || {}), _status: newStatus };
    const { error } = await supabase
      .from("form_submissions")
      .update({ fields: updatedFields })
      .eq("id", lead.id);
    if (error) {
      toast({ title: "Kon status niet bijwerken", description: error.message, variant: "destructive" });
    } else {
      const updatedLead = { ...lead, fields: updatedFields };
      setLeads((prev) =>
        prev.map((l) => (l.id === lead.id ? updatedLead : l))
      );
      if (selected?.id === lead.id) setSelected(updatedLead);
    }
    setUpdating(null);
  };

  const columns = useMemo(() => {
    const grouped: Record<Status, QuizLead[]> = { nieuw: [], contact: [], demo: [], klant: [] };
    for (const lead of leads) grouped[getStatus(lead)].push(lead);
    return grouped;
  }, [leads]);

  const scores = useMemo(() => {
    const s = leads.map(getScore).filter((v): v is number => v !== null);
    return { count: leads.length, avg: s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0 };
  }, [leads]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">SEO Check Leads</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {scores.count} leads · gem. score {scores.avg}/100
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} /> Vernieuwen
        </Button>
      </div>

      {loading && leads.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg font-medium">Nog geen SEO check leads</p>
          <p className="text-sm mt-1">Leads verschijnen hier zodra iemand de check invult.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {STATUSES.map((status) => {
            const meta = STATUS_META[status];
            const items = columns[status];
            const nextStatus = STATUSES[STATUSES.indexOf(status) + 1] as Status | undefined;

            return (
              <div key={status} className={`rounded-xl border p-4 ${meta.bg} min-h-[300px]`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-sm font-bold uppercase tracking-wide ${meta.color}`}>
                    {meta.label}
                  </h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${meta.color} bg-white/60`}>
                    {items.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {items.map((lead) => {
                    const score = getScore(lead);
                    return (
                      <div
                        key={lead.id}
                        onClick={() => setSelected(lead)}
                        className="bg-white rounded-lg border border-border/50 p-3 shadow-sm cursor-pointer hover:shadow-md hover:border-border transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">
                              {lead.name || "Onbekend"}
                            </p>
                            {lead.business_name && (
                              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                                <Building2 className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{lead.business_name}</span>
                              </p>
                            )}
                          </div>
                          {score !== null && (
                            <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${scoreBadgeColor(score)}`}>
                              {score}
                            </span>
                          )}
                        </div>

                        <div className="mt-2 space-y-0.5">
                          {lead.email && (
                            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Mail className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{lead.email}</span>
                            </p>
                          )}
                          {lead.phone && (
                            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Phone className="h-3 w-3 flex-shrink-0" /> {lead.phone}
                            </p>
                          )}
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-[11px] text-muted-foreground">{fmtDate(lead.created_at)}</span>
                          {nextStatus && (
                            <button
                              onClick={(e) => { e.stopPropagation(); moveToStatus(lead, nextStatus); }}
                              disabled={updating === lead.id}
                              className={`inline-flex items-center gap-0.5 text-[11px] font-medium ${STATUS_META[nextStatus].color} hover:underline disabled:opacity-50`}
                            >
                              {updating === lead.id ? (
                                <Loader2 className="h-3 w-3 animate-spin" />
                              ) : (
                                <>{STATUS_META[nextStatus].label} <ChevronRight className="h-3 w-3" /></>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selected && (
        <LeadDetail
          lead={selected}
          onClose={() => setSelected(null)}
          onMove={moveToStatus}
          updating={updating}
        />
      )}
    </div>
  );
};

export default AdminSeoQuiz;
