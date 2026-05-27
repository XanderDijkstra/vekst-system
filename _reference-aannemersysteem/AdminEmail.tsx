import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mail, Send, Inbox, ArrowLeft, Reply, Circle, Trash2, Loader2, RefreshCw, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Email {
  id: string;
  direction: "inbound" | "outbound";
  from_email: string;
  from_name: string | null;
  to_email: string;
  to_name: string | null;
  subject: string;
  body_html: string | null;
  body_text: string | null;
  read: boolean;
  lead_id: string | null;
  resend_id: string | null;
  created_at: string;
}

interface Thread {
  key: string;
  subject: string;
  contact: string;
  contactName: string | null;
  emails: Email[];
  lastDate: string;
  hasUnread: boolean;
  unreadCount: number;
}

interface Lead {
  id: string;
  name: string;
  email: string;
}

const fmtRelative = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffDays === 0) return d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  if (diffDays === 1) return "gisteren";
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });
};

const fmtFull = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
};

const displayFrom = (email: Email) => email.from_name || email.from_email || "Onbekend";
const displayTo = (email: Email) => email.to_name || email.to_email || "Onbekend";

const OUR_ADDRESS = "info@aannemersysteem.com";

function normalizeSubject(s: string): string {
  return s.replace(/^(Re|Fwd|FW|Fw|RE|re|fwd):\s*/gi, "").trim().toLowerCase();
}

function getContactEmail(email: Email): string {
  if (email.direction === "inbound") return (email.from_email || "").toLowerCase();
  return (email.to_email || "").toLowerCase();
}

function getContactName(email: Email): string | null {
  if (email.direction === "inbound") return email.from_name;
  return email.to_name;
}

function buildThreads(emails: Email[]): Thread[] {
  const map = new Map<string, Email[]>();
  for (const e of emails) {
    const ns = normalizeSubject(e.subject);
    const contact = getContactEmail(e);
    const key = `${contact}|||${ns}`;
    const list = map.get(key) || [];
    list.push(e);
    map.set(key, list);
  }

  const threads: Thread[] = [];
  for (const [key, msgs] of map) {
    msgs.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    const latest = msgs[msgs.length - 1];
    const firstInbound = msgs.find((m) => m.direction === "inbound");
    const firstOutbound = msgs.find((m) => m.direction === "outbound");
    const contact = getContactEmail(latest);
    const contactName = (firstInbound ? getContactName(firstInbound) : null) || (firstOutbound ? getContactName(firstOutbound) : null);

    threads.push({
      key,
      subject: msgs[0].subject.replace(/^(Re|Fwd|FW|Fw|RE|re|fwd):\s*/gi, "").trim() || "(geen onderwerp)",
      contact,
      contactName,
      emails: msgs,
      lastDate: latest.created_at,
      hasUnread: msgs.some((m) => !m.read && m.direction === "inbound"),
      unreadCount: msgs.filter((m) => !m.read && m.direction === "inbound").length,
    });
  }

  threads.sort((a, b) => new Date(b.lastDate).getTime() - new Date(a.lastDate).getTime());
  return threads;
}

const AdminEmail = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [filter, setFilter] = useState<"all" | "inbound" | "outbound">("all");
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [composeLeadId, setComposeLeadId] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [mobileDetail, setMobileDetail] = useState(false);
  const refreshRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const detailEndRef = useRef<HTMLDivElement>(null);

  const fetchEmails = useCallback(async () => {
    try {
      const res = await fetch(`/api/email?action=inbox&direction=all&limit=200`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEmails((data.emails || []) as Email[]);
    } catch {
      if (!emails.length) toast({ title: "Kon e-mails niet laden", variant: "destructive" });
    }
    setLoading(false);
  }, []);

  const fetchLeads = useCallback(async () => {
    const { data } = await supabase
      .from("form_submissions")
      .select("id, name, email")
      .order("created_at", { ascending: false })
      .limit(50);
    if (data) {
      setLeads(
        (data as { id: string; name: string | null; email: string | null }[])
          .filter((l) => l.email)
          .map((l) => ({ id: l.id, name: l.name || l.email!, email: l.email! }))
      );
    }
  }, []);

  useEffect(() => {
    fetchEmails();
    fetchLeads();
    refreshRef.current = setInterval(fetchEmails, 30000);
    return () => { if (refreshRef.current) clearInterval(refreshRef.current); };
  }, [fetchEmails, fetchLeads]);

  const threads = useMemo(() => buildThreads(emails), [emails]);

  const filteredThreads = useMemo(() => {
    if (filter === "all") return threads;
    return threads.filter((t) => t.emails.some((e) => e.direction === filter));
  }, [threads, filter]);

  // Keep selectedThread in sync with emails state
  useEffect(() => {
    if (!selectedThread) return;
    const updated = threads.find((t) => t.key === selectedThread.key);
    if (updated) setSelectedThread(updated);
  }, [threads]);

  useEffect(() => {
    if (selectedThread && detailEndRef.current) {
      detailEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedThread?.key]);

  const markThreadRead = async (thread: Thread) => {
    const unreadIds = thread.emails.filter((e) => !e.read && e.direction === "inbound").map((e) => e.id);
    if (unreadIds.length === 0) return;
    try {
      await fetch("/api/email?action=mark-read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailIds: unreadIds }),
      });
      setEmails((prev) => prev.map((e) => unreadIds.includes(e.id) ? { ...e, read: true } : e));
    } catch { /* silent */ }
  };

  const handleSelectThread = (thread: Thread) => {
    setSelectedThread(thread);
    setMobileDetail(true);
    markThreadRead(thread);
  };

  const handleDeleteThread = async (thread: Thread) => {
    const ids = thread.emails.map((e) => e.id);
    try {
      const res = await fetch("/api/email?action=delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailIds: ids }),
      });
      if (!res.ok) throw new Error();
      setEmails((prev) => prev.filter((e) => !ids.includes(e.id)));
      if (selectedThread?.key === thread.key) { setSelectedThread(null); setMobileDetail(false); }
      toast({ title: "Gesprek verwijderd" });
    } catch {
      toast({ title: "Verwijderen mislukt", variant: "destructive" });
    }
  };

  const handleBackfill = async () => {
    try {
      toast({ title: "Body's ophalen uit Resend..." });
      const res = await fetch("/api/email?action=backfill", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Mislukt");
      toast({ title: `Klaar — ${data.updated} bijgewerkt, ${data.failed} mislukt` });
      fetchEmails();
    } catch (err) {
      toast({ title: (err as Error).message, variant: "destructive" });
    }
  };

  const handleReply = () => {
    if (!selectedThread) return;
    setComposeTo(selectedThread.contact);
    const subj = selectedThread.subject;
    setComposeSubject(subj.startsWith("Re: ") ? subj : `Re: ${subj}`);
    setComposeBody("");
    const leadId = selectedThread.emails.find((e) => e.lead_id)?.lead_id || null;
    setComposeLeadId(leadId);
    setComposeOpen(true);
  };

  const handleSend = async () => {
    if (!composeTo.trim() || !composeSubject.trim()) {
      toast({ title: "Vul ontvanger en onderwerp in", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/email?action=send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: composeTo.trim(),
          subject: composeSubject.trim(),
          bodyHtml: `<p>${composeBody.split("\n").join("</p><p>")}</p>`,
          bodyText: composeBody,
          leadId: composeLeadId,
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Versturen mislukt");
      }
      toast({ title: "E-mail verstuurd" });
      setComposeOpen(false);
      setComposeTo("");
      setComposeSubject("");
      setComposeBody("");
      setComposeLeadId(null);
      fetchEmails();
    } catch (err) {
      toast({ title: (err as Error).message, variant: "destructive" });
    }
    setSending(false);
  };

  const unreadCount = emails.filter((e) => !e.read && e.direction === "inbound").length;

  const composeDialog = (
    <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Nieuwe e-mail</DialogTitle>
          <DialogDescription>Stuur een e-mail vanuit info@aannemersysteem.com</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 pt-2">
          <Input placeholder="Aan (e-mailadres)" value={composeTo} onChange={(e) => setComposeTo(e.target.value)} />
          <Input placeholder="Onderwerp" value={composeSubject} onChange={(e) => setComposeSubject(e.target.value)} />
          <textarea
            placeholder="Bericht..."
            value={composeBody}
            onChange={(e) => setComposeBody(e.target.value)}
            rows={8}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
          <div className="flex items-center gap-3">
            <select
              value={composeLeadId || ""}
              onChange={(e) => setComposeLeadId(e.target.value || null)}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground"
            >
              <option value="">Koppel aan lead (optioneel)</option>
              {leads.map((l) => (
                <option key={l.id} value={l.id}>{l.name} — {l.email}</option>
              ))}
            </select>
            <Button onClick={handleSend} disabled={sending} className="gap-1.5">
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Verstuur
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderThreadItem = (thread: Thread) => {
    const isSelected = selectedThread?.key === thread.key;
    const latest = thread.emails[thread.emails.length - 1];
    const snippet = (latest.body_text || "").slice(0, 80);
    const contactDisplay = thread.contactName || thread.contact;
    const count = thread.emails.length;

    return (
      <button
        key={thread.key}
        onClick={() => handleSelectThread(thread)}
        className={`w-full text-left px-4 py-3 border-b transition-colors hover:bg-muted/50 ${isSelected ? "bg-muted" : ""}`}
      >
        <div className="flex items-start gap-2">
          {thread.hasUnread && <Circle className="h-2.5 w-2.5 fill-blue-500 text-blue-500 mt-1.5 flex-shrink-0" />}
          {!thread.hasUnread && <div className="w-2.5 flex-shrink-0" />}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className={`text-sm truncate ${thread.hasUnread ? "font-semibold text-foreground" : "text-foreground"}`}>
                {contactDisplay}
              </span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {count > 1 && (
                  <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">{count}</span>
                )}
                <span className="text-xs text-muted-foreground">{fmtRelative(thread.lastDate)}</span>
              </div>
            </div>
            <p className={`text-sm truncate ${thread.hasUnread ? "font-medium text-foreground" : "text-muted-foreground"}`}>
              {thread.subject}
            </p>
            {snippet && <p className="text-xs text-muted-foreground truncate">{snippet}</p>}
          </div>
        </div>
      </button>
    );
  };

  const renderMessage = (email: Email) => {
    const isOutbound = email.direction === "outbound";

    return (
      <div key={email.id} className={`flex ${isOutbound ? "justify-end" : "justify-start"}`}>
        <div className={`max-w-[85%] rounded-lg px-4 py-3 ${isOutbound ? "bg-primary/10 border border-primary/20" : "bg-muted"}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-foreground">
              {isOutbound ? "Jij" : displayFrom(email)}
            </span>
            <span className="text-xs text-muted-foreground">{fmtRelative(email.created_at)}</span>
          </div>
          {email.body_html ? (
            <div
              className="prose prose-sm max-w-none text-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: email.body_html }}
            />
          ) : email.body_text ? (
            <p className="text-sm text-foreground whitespace-pre-wrap">{email.body_text}</p>
          ) : (
            <p className="text-sm text-muted-foreground italic">Geen inhoud — open de e-mail in je Gmail.</p>
          )}
        </div>
      </div>
    );
  };

  const renderDetail = () => {
    if (!selectedThread) {
      return (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <Mail className="h-10 w-10 mx-auto mb-3 opacity-40" />
            <p>Selecteer een gesprek</p>
          </div>
        </div>
      );
    }
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b flex-shrink-0">
          <Button variant="ghost" size="sm" onClick={() => setMobileDetail(false)} className="md:hidden mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> Terug
          </Button>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">{selectedThread.subject}</h2>
            <Badge variant="outline" className="text-xs">
              <MessageSquare className="h-3 w-3 mr-1" />
              {selectedThread.emails.length} {selectedThread.emails.length === 1 ? "bericht" : "berichten"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Gesprek met <strong className="text-foreground">{selectedThread.contactName || selectedThread.contact}</strong>
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {selectedThread.emails.map(renderMessage)}
          <div ref={detailEndRef} />
        </div>
        <div className="px-5 py-3 border-t flex-shrink-0 flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleReply} className="gap-1.5">
            <Reply className="h-4 w-4" /> Beantwoorden
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleDeleteThread(selectedThread)} className="gap-1.5 text-destructive hover:text-destructive">
            <Trash2 className="h-4 w-4" /> Verwijderen
          </Button>
        </div>
      </div>
    );
  };

  if (loading && !emails.length) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {composeDialog}

      <div className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0">
        <div className="flex items-center gap-2">
          <Inbox className="h-5 w-5 text-foreground" />
          <h1 className="text-lg font-semibold text-foreground">Inbox</h1>
          {unreadCount > 0 && (
            <Badge className="bg-blue-500 text-white text-xs">{unreadCount}</Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleBackfill} className="gap-1.5" title="Body's ophalen uit Resend voor bestaande e-mails">
            <Download className="h-4 w-4" /> Backfill
          </Button>
          <Button variant="outline" size="sm" onClick={() => { setLoading(true); fetchEmails(); }} className="gap-1.5">
            <RefreshCw className="h-4 w-4" /> Vernieuwen
          </Button>
          <Button size="sm" onClick={() => { setComposeTo(""); setComposeSubject(""); setComposeBody(""); setComposeLeadId(null); setComposeOpen(true); }} className="gap-1.5">
            <Mail className="h-4 w-4" /> Nieuwe e-mail
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className={`w-full md:w-96 md:border-r flex flex-col overflow-hidden flex-shrink-0 ${mobileDetail ? "hidden md:flex" : "flex"}`}>
          <div className="px-3 py-2 border-b">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">Alles</TabsTrigger>
                <TabsTrigger value="inbound" className="flex-1">Ontvangen</TabsTrigger>
                <TabsTrigger value="outbound" className="flex-1">Verzonden</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredThreads.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <Mail className="h-8 w-8 mb-2 opacity-40" />
                <p className="text-sm">Geen gesprekken</p>
              </div>
            ) : (
              filteredThreads.map(renderThreadItem)
            )}
          </div>
        </div>

        <div className={`flex-1 flex flex-col overflow-hidden bg-background ${mobileDetail ? "flex" : "hidden md:flex"}`}>
          {renderDetail()}
        </div>
      </div>
    </div>
  );
};

export default AdminEmail;
