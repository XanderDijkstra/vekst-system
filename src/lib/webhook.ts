const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/p75iPSdUmY6b9xmIZ2Tm/webhook-trigger/2df79781-e0d6-4703-bb2a-d8e221929640";

export interface FormData {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  message: string;
  source: string;
}

export async function submitToWebhook(data: FormData): Promise<void> {
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
}
