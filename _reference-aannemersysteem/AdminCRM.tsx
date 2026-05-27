import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Loader2, RefreshCw, Phone, Mail, Building2, X, MapPin, Globe, Star, Zap, GripVertical, Search, ArrowRight, Briefcase, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuizAnswer {
  question: string;
  answer: string;
  points: number;
  max: number;
  category: string;
}

interface CategoryScore { score: number; max: number }

interface Lead {
  id: string;
  form_key: string;
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

const STATUS_META: Record<Status, { label: string; color: string; bg: string; dragBg: string }> = {
  nieuw: { label: "Nieuw", color: "text-blue-600", bg: "bg-blue-50/80 border-blue-200", dragBg: "bg-blue-100/60" },
  contact: { label: "Contact", color: "text-amber-600", bg: "bg-amber-50/80 border-amber-200", dragBg: "bg-amber-100/60" },
  demo: { label: "Demo", color: "text-purple-600", bg: "bg-purple-50/80 border-purple-200", dragBg: "bg-purple-100/60" },
  klant: { label: "Klant", color: "text-emerald-600", bg: "bg-emerald-50/80 border-emerald-200", dragBg: "bg-emerald-100/60" },
};

const FORM_LABELS: Record<string, string> = {
  "seo-quiz": "SEO Check",
  "contact": "Contact",
  "offerte": "Offerte",
  "demo": "Demo",
  "newsletter": "Nieuwsbrief",
};

const CATEGORY_ICONS: Record<string, typeof MapPin> = {
  "Google Bedrijfsprofiel": MapPin,
  "Website & SEO": Globe,
  "Reviews & Reputatie": Star,
  "Leadopvolging & Zichtbaarheid": Zap,
};

function getStatus(lead: Lead): Status {
  const s = lead.fields?._status;
  if (typeof s === "string" && STATUSES.includes(s as Status)) return s as Status;
  return "nieuw";
}

function getScore(lead: Lead): number | null {
  const ts = lead.fields?._totalScore;
  if (typeof ts === "number") return ts;
  const match = lead.message?.match(/score:\s*(\d+)\/100/i);
  return match ? parseInt(match[1], 10) : null;
}

function getCategoryScores(lead: Lead): Record<string, CategoryScore> | null {
  const cs = lead.fields?._categoryScores;
  if (cs && typeof cs === "object") return cs as Record<string, CategoryScore>;
  return null;
}

function getAnswers(lead: Lead): Record<string, QuizAnswer> | null {
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

const fmtShortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short" });

/* ── Swipeable card wrapper ─────────────────────────────────────── */

const SWIPE_THRESHOLD = 80;

function SwipeableCard({
  children,
  onDelete,
  onDragStart,
  onDragEnd,
  isDragging,
  onClick,
}: {
  children: React.ReactNode;
  onDelete: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
  isDragging: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const startX = useRef<number | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const pastThreshold = offsetY >= SWIPE_THRESHOLD;

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null || startX.current === null) return;
    const dy = e.touches[0].clientY - startY.current;
    const dx = Math.abs(e.touches[0].clientX - startX.current);
    if (!swiping && dy > 10 && dy > dx) {
      setSwiping(true);
    }
    if (swiping && dy > 0) {
      setOffsetY(dy);
    }
  };

  const onTouchEnd = () => {
    if (pastThreshold) {
      onDelete();
    }
    startY.current = null;
    startX.current = null;
    setOffsetY(0);
    setSwiping(false);
  };

  const progress = Math.min(offsetY / SWIPE_THRESHOLD, 1);

  return (
    <div className="relative overflow-hidden rounded-lg">
      {swiping && (
        <div
          className={`absolute inset-x-0 top-0 flex items-center justify-center transition-colors ${
            pastThreshold ? "bg-red-500" : "bg-red-100"
          }`}
          style={{ height: offsetY }}
        >
          <Trash2
            className={`h-5 w-5 transition-all ${
              pastThreshold ? "text-white scale-110" : "text-red-400"
            }`}
            style={{ opacity: progress }}
          />
        </div>
      )}
      <div
        ref={cardRef}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={swiping ? undefined : onClick}
        className={`bg-white rounded-lg border border-border/50 p-3 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md hover:border-border transition-all select-none ${isDragging ? "opacity-40" : ""}`}
        style={swiping ? { transform: `translateY(${offsetY}px)`, transition: "none" } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Lead Detail panel ──────────────────────────────────────────── */

function LeadDetail({ lead, onClose, onMove, onPromote, onDelete, updating }: {
  lead: Lead;
  onClose: () => void;
  onMove: (lead: Lead, status: Status) => void;
  onPromote: (lead: Lead) => void;
  onDelete: (lead: Lead) => void;
  updating: string | null;
}) {
  const score = getScore(lead);
  const catScores = getCategoryScores(lead);
  const answers = getAnswers(lead);
  const status = getStatus(lead);

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
          <div className="min-w-0">
            <h2 className="font-semibold text-foreground truncate">{lead.name || "Onbekend"}</h2>
            <span className="text-xs text-muted-foreground">{FORM_LABELS[lead.form_key] || lead.form_key}</span>
          </div>
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

          {/* Message */}
          {lead.message && !answers && (
            <div className="rounded-xl border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-2 text-sm">Bericht</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{lead.message}</p>
            </div>
          )}

          {/* Score overview (quiz leads) */}
          {score !== null && (
            <div className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">SEO Score</h3>
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

          {/* Quiz answers */}
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

          {/* Status management */}
          <div className="rounded-xl border bg-card p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Status</p>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => { if (s !== status) onMove(lead, s); }}
                  disabled={updating === lead.id || s === status}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    s === status
                      ? `${STATUS_META[s].bg} ${STATUS_META[s].color} border`
                      : "bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent"
                  } ${updating === lead.id ? "opacity-50" : ""}`}
                >
                  {STATUS_META[s].label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => onPromote(lead)}
            disabled={updating === lead.id}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-teal-300 bg-teal-50/50 text-teal-700 text-sm font-medium hover:bg-teal-50 hover:border-teal-400 transition-colors disabled:opacity-50"
          >
            <Briefcase className="h-4 w-4" />
            Verplaats naar Klanten
            <ArrowRight className="h-4 w-4 ml-auto" />
          </button>

          <button
            onClick={() => { if (confirm(`"${lead.name || "Deze lead"}" verwijderen?`)) onDelete(lead); }}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl border border-red-200 bg-red-50/50 text-red-600 text-sm font-medium hover:bg-red-100 hover:border-red-300 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Lead verwijderen
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main CRM component ─────────────────────────────────────────── */

const AdminCRM = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [search, setSearch] = useState("");
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<Status | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select("id, form_key, name, email, phone, business_name, message, fields, created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) {
      toast({ title: "Kon leads niet laden", description: error.message, variant: "destructive" });
    }
    setLeads((data ?? []) as unknown as Lead[]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (id: string, status: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/crm/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      return res.ok;
    } catch {
      return false;
    }
  };

  const moveToStatus = async (lead: Lead, newStatus: Status) => {
    setUpdating(lead.id);
    const ok = await updateStatus(lead.id, newStatus);
    if (!ok) {
      toast({ title: "Kon status niet bijwerken", variant: "destructive" });
    } else {
      const updatedLead = { ...lead, fields: { ...(lead.fields || {}), _status: newStatus } };
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? updatedLead : l)));
      if (selected?.id === lead.id) setSelected(updatedLead);

      if (lead.email && newStatus !== "nieuw") {
        try {
          await fetch("/api/crm/stage-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ stage: newStatus, lead: { email: lead.email, name: lead.name } }),
          });
        } catch { /* non-blocking */ }
      }
    }
    setUpdating(null);
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return leads;
    const q = search.toLowerCase();
    return leads.filter((l) =>
      (l.name || "").toLowerCase().includes(q) ||
      (l.email || "").toLowerCase().includes(q) ||
      (l.business_name || "").toLowerCase().includes(q) ||
      (l.phone || "").includes(q)
    );
  }, [leads, search]);

  const columns = useMemo(() => {
    const grouped: Record<Status, Lead[]> = { nieuw: [], contact: [], demo: [], klant: [] };
    for (const lead of filtered) {
      const s = String(lead.fields?._status || "");
      if (s.startsWith("onboard:") || s.startsWith("project:")) continue;
      grouped[getStatus(lead)].push(lead);
    }
    return grouped;
  }, [filtered]);

  const stats = useMemo(() => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 86400000);
    const thisWeek = leads.filter((l) => new Date(l.created_at) >= weekAgo).length;
    return { total: leads.length, thisWeek };
  }, [leads]);

  const moveToProject = async (lead: Lead) => {
    setUpdating(lead.id);
    const ok = await updateStatus(lead.id, "project:active");
    if (!ok) {
      toast({ title: "Kon niet verplaatsen", variant: "destructive" });
    } else {
      setLeads((prev) => prev.filter((l) => l.id !== lead.id));
      if (selected?.id === lead.id) setSelected(null);
      toast({ title: "Verplaatst naar klanten" });
    }
    setUpdating(null);
  };

  const deleteLead = async (lead: Lead) => {
    const { error } = await supabase
      .from("form_submissions")
      .delete()
      .eq("id", lead.id);
    if (error) {
      toast({ title: "Kon lead niet verwijderen", description: error.message, variant: "destructive" });
    } else {
      setLeads((prev) => prev.filter((l) => l.id !== lead.id));
      if (selected?.id === lead.id) setSelected(null);
      toast({ title: `${lead.name || "Lead"} verwijderd` });
    }
  };

  const [dragOverOnboard, setDragOverOnboard] = useState(false);

  /* ── Drag handlers ──────────────────────────────────────────────── */

  const onDragStart = (e: React.DragEvent, leadId: string) => {
    setDragId(leadId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", leadId);
  };

  const onDragOver = (e: React.DragEvent, status: Status) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverCol !== status) setDragOverCol(status);
  };

  const onDragLeave = (e: React.DragEvent, status: Status) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
      if (dragOverCol === status) setDragOverCol(null);
    }
  };

  const onDrop = (e: React.DragEvent, targetStatus: Status) => {
    e.preventDefault();
    setDragOverCol(null);
    const leadId = e.dataTransfer.getData("text/plain");
    const lead = leads.find((l) => l.id === leadId);
    if (lead && getStatus(lead) !== targetStatus) {
      moveToStatus(lead, targetStatus);
    }
    setDragId(null);
  };

  const onDragEnd = () => {
    setDragId(null);
    setDragOverCol(null);
  };

  return (
    <div className="p-6 h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">CRM</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {stats.total} leads · {stats.thisWeek} deze week
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

      {loading && leads.length === 0 ? (
        <div className="flex items-center justify-center flex-1">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="flex gap-4 flex-1 min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 flex-1 min-w-0">
          {STATUSES.map((status) => {
            const meta = STATUS_META[status];
            const items = columns[status];
            const isDragOver = dragOverCol === status;

            return (
              <div
                key={status}
                className={`rounded-xl border p-3 flex flex-col min-h-[200px] transition-colors ${meta.bg} ${isDragOver ? meta.dragBg + " ring-2 ring-offset-1 ring-current " + meta.color : ""}`}
                onDragOver={(e) => onDragOver(e, status)}
                onDragLeave={(e) => onDragLeave(e, status)}
                onDrop={(e) => onDrop(e, status)}
              >
                <div className="flex items-center justify-between mb-3 flex-shrink-0">
                  <h2 className={`text-xs font-bold uppercase tracking-wide ${meta.color}`}>
                    {meta.label}
                  </h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${meta.color} bg-white/60`}>
                    {items.length}
                  </span>
                </div>

                <div className="space-y-2 overflow-y-auto flex-1 min-h-0">
                  {items.map((lead) => {
                    const score = getScore(lead);
                    const isDragging = dragId === lead.id;
                    return (
                      <SwipeableCard
                        key={lead.id}
                        onDelete={() => deleteLead(lead)}
                        onDragStart={(e) => onDragStart(e, lead.id)}
                        onDragEnd={onDragEnd}
                        isDragging={isDragging}
                        onClick={() => setSelected(lead)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <GripVertical className="h-3.5 w-3.5 text-muted-foreground/40 flex-shrink-0" />
                              <p className="font-medium text-sm text-foreground truncate">
                                {lead.name || "Onbekend"}
                              </p>
                            </div>
                            {lead.business_name && (
                              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5 ml-5">
                                <Building2 className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{lead.business_name}</span>
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            {score !== null && (
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${scoreBadgeColor(score)}`}>
                                {score}
                              </span>
                            )}
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                              {FORM_LABELS[lead.form_key] || lead.form_key}
                            </span>
                          </div>
                        </div>

                        <div className="mt-2 space-y-0.5 ml-5">
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

                        <div className="mt-2 ml-5">
                          <span className="text-[11px] text-muted-foreground">{fmtShortDate(lead.created_at)}</span>
                        </div>
                      </SwipeableCard>
                    );
                  })}
                  {items.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-xs text-muted-foreground">
                      Sleep leads hierheen
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Onboard drop zone */}
        <div
          className={`flex flex-col items-center justify-center w-20 rounded-xl border-2 border-dashed transition-all flex-shrink-0 ${
            dragOverOnboard
              ? "border-teal-400 bg-teal-100 scale-105"
              : "border-teal-300/60 bg-teal-50/50 hover:border-teal-400 hover:bg-teal-50"
          }`}
          onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; setDragOverOnboard(true); }}
          onDragLeave={() => setDragOverOnboard(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOverOnboard(false);
            const leadId = e.dataTransfer.getData("text/plain");
            const lead = leads.find((l) => l.id === leadId);
            if (lead) moveToProject(lead);
            setDragId(null);
          }}
        >
          <Briefcase className={`h-5 w-5 mb-2 ${dragOverOnboard ? "text-teal-700" : "text-teal-500/70"}`} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${dragOverOnboard ? "text-teal-700" : "text-teal-500/70"}`}
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            Klant
          </span>
          <ArrowRight className={`h-4 w-4 mt-2 rotate-90 ${dragOverOnboard ? "text-teal-700" : "text-teal-400/60"}`} />
        </div>
        </div>
      )}

      {selected && (
        <LeadDetail
          lead={selected}
          onClose={() => setSelected(null)}
          onMove={moveToStatus}
          onPromote={moveToProject}
          onDelete={deleteLead}
          updating={updating}
        />
      )}
    </div>
  );
};

export default AdminCRM;
