// Lead submissions are routed through the FX Media leads aggregator
// (XanderDijkstra/leads). The aggregator stores every lead centrally in
// Supabase, forwards it to our GoHighLevel webhook (configured per-client on
// the aggregator side, so GHL keeps receiving leads exactly as before), sends
// the lead a confirmation email via Resend, and surfaces KPIs on the private
// dashboard. Client slug for this site: "vekst-systemet".
//
// To change where GHL/email deliveries go, edit the client row in the
// aggregator (dashboard → client settings) — not here.
const LEAD_HOOK_URL =
  "https://leads-chi-fawn.vercel.app/api/hook/vekst-systemet";

// The aggregator rejects a submission (HTTP 400, lead dropped) unless name,
// email AND message are all non-empty. Our forms make the message optional to
// keep conversion high, so fall back to a placeholder when it's blank — that
// way no lead is ever lost just because the visitor left the message empty.
const EMPTY_MESSAGE_FALLBACK = "(Ingen melding oppgitt)";

export interface FormData {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  message: string;
  source: string;
}

export async function submitToWebhook(data: FormData): Promise<void> {
  const res = await fetch(LEAD_HOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      message: data.message.trim() || EMPTY_MESSAGE_FALLBACK,
      // Honeypot: real visitors leave this empty; bots that fill it are
      // silently accepted-and-dropped by the aggregator.
      _gotcha: "",
    }),
  });
  if (!res.ok) throw new Error(`Lead hook responded with ${res.status}`);
}
