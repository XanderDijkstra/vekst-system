export const config = { maxDuration: 10 };

const VALID_SLUGS = new Set([
  "google-review-scripts-aannemer",
  "offerte-template-aannemer",
  "website-audit-checklist-aannemer",
  "lead-opvolging-playbook-aannemer",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { slug, email, name, company } = req.body || {};

  if (!slug || !VALID_SLUGS.has(slug)) {
    return res.status(400).json({ error: "Ongeldige download." });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Vul een geldig e-mailadres in." });
  }

  try {
    await logToSupabase({ slug, email, name, company });
  } catch (err) {
    console.error("Download log failed:", err.message);
  }

  const downloadUrl = resolveDownloadUrl(slug);

  return res.status(200).json({
    success: true,
    downloadUrl,
    message: downloadUrl
      ? "Je download is klaar."
      : "We hebben je aanvraag ontvangen. Je krijgt de PDF per e-mail zodra hij klaar is.",
  });
}

function resolveDownloadUrl(slug) {
  const key = slug.toUpperCase().replace(/-/g, "_");
  const envKey = `DOWNLOAD_URL_${key}`;
  return process.env[envKey] || null;
}

async function logToSupabase({ slug, email, name, company }) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const response = await fetch(`${url}/rest/v1/download_leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      slug,
      email,
      name: name || null,
      company: company || null,
      created_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase insert failed ${response.status}: ${text}`);
  }
}
