export const config = { maxDuration: 30 };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { url } = req.body || {};
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const targetUrl = url.startsWith("http") ? url : `https://${url}`;
    const html = await fetchHtml(targetUrl);
    const signals = parseSignals(html, targetUrl);
    const analysis = await analyzeWithClaude(signals);
    return res.status(200).json({ success: true, ...analysis, signals });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Skanning mislyktes", success: false });
  }
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const resp = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; VekstSystemetBot/1.0; +https://vekst-systemet.no)",
        Accept: "text/html",
      },
      redirect: "follow",
    });
    if (!resp.ok) throw new Error(`Nettsiden returnerte status ${resp.status}`);
    return await resp.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseSignals(html, url) {
  const get = (regex) => {
    const m = html.match(regex);
    return m ? m[1].trim() : null;
  };

  const title =
    get(/<title[^>]*>([\s\S]*?)<\/title>/i) || null;
  const metaDesc =
    get(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) ||
    get(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i) ||
    null;
  const ogTitle =
    get(/<meta[^>]*property=["']og:title["'][^>]*content=["']([\s\S]*?)["']/i) || null;
  const ogDesc =
    get(/<meta[^>]*property=["']og:description["'][^>]*content=["']([\s\S]*?)["']/i) || null;
  const ogImage = !!html.match(
    /<meta[^>]*property=["']og:image["'][^>]*content=["'][^"']+["']/i
  );
  const canonical =
    get(/<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["']/i) || null;

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]*>/g, "").trim() : null;
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;

  const hasSchemaOrg = /<script[^>]*type=["']application\/ld\+json["']/i.test(html);
  const hasForm = /<form[\s>]/i.test(html);
  const hasHttps = url.startsWith("https");
  const hasMobileViewport =
    /<meta[^>]*name=["']viewport["'][^>]*content=["'][^"]*width\s*=\s*device-width/i.test(html);

  const textOnly = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ");

  const phoneRegex = /(?:\+47|0047)?\s*(?:[\d][\s.\-]*){8}/g;
  const phones = [
    ...new Set(
      (textOnly.match(phoneRegex) || []).map((p) => p.replace(/[\s.\-]/g, ""))
    ),
  ];

  const emailRegex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
  const emails = [
    ...new Set(
      (textOnly.match(emailRegex) || []).filter(
        (e) => !e.includes("example.") && !e.includes("sentry") && !e.includes("webpack")
      )
    ),
  ];

  const hasTelLink = /href=["']tel:/i.test(html);
  const hasWhatsApp = /whatsapp|wa\.me/i.test(html);
  const hasKvk = /org(?:anisasjons)?[.\s]*nr|brønnøysundregistrene|foretaksregister/i.test(textOnly);

  const images = html.match(/<img[^>]*>/gi) || [];
  const imgTotal = images.length;
  const imgWithoutAlt = images.filter(
    (img) => !img.match(/alt=["'][^"']+["']/i)
  ).length;

  const wordCount = textOnly.replace(/\s+/g, " ").trim().split(/\s+/).length;

  return {
    url,
    title,
    titleLength: title ? title.length : 0,
    metaDescription: metaDesc,
    metaDescLength: metaDesc ? metaDesc.length : 0,
    ogTitle,
    ogDescription: ogDesc,
    ogImage,
    canonical,
    h1,
    h2Count,
    hasSchemaOrg,
    hasForm,
    hasHttps,
    hasMobileViewport,
    phones,
    emails,
    hasTelLink,
    hasWhatsApp,
    hasKvk,
    imgTotal,
    imgWithoutAlt,
    wordCount,
  };
}

async function analyzeWithClaude(signals) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY er ikke konfigurert");

  const prompt = `Du er en norsk nettmarkedsføringsekspert som analyserer nettsider til håndverkere, byggefirmaer og fagfolk. Analyser følgende nettside-signaler og lever en ærlig, konkret rapport.

NETTSIDE-SIGNALER:
${JSON.stringify(signals, null, 2)}

Svar kun med ren JSON (ingen markdown, ingen kodeblokk, ingen forklaringer utenfor JSON). Bruk nøyaktig denne strukturen:
{
  "score": <tall 0-100>,
  "summary": "<1 kort setning som treffer kjernen>",
  "categories": [
    {
      "name": "Synlighet",
      "score": <0-100>,
      "findings": [
        { "status": "good" | "warning" | "error", "label": "<kort label>", "detail": "<konkret forklaring, maks 2 setninger>" }
      ]
    },
    {
      "name": "Teknisk",
      "score": <0-100>,
      "findings": [...]
    },
    {
      "name": "Tillit",
      "score": <0-100>,
      "findings": [...]
    },
    {
      "name": "Konvertering",
      "score": <0-100>,
      "findings": [...]
    }
  ],
  "topActions": ["<tiltak 1>", "<tiltak 2>", "<tiltak 3>"]
}

Regler:
- Gi 2-5 funn per kategori.
- Bruk faktiske data fra signalene (title-tekst, h1-tekst, antall bilder uten alt, osv.).
- topActions må kunne gjennomføres direkte av en håndverker eller webdesigneren deres.
- Skårene skal være ærlige: de fleste håndverker-nettsider skårer 25-55. 80+ er unntakstilfeller.
- Skriv på norsk bokmål, kort og direkte, ingen svulstig språk.`;

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!resp.ok) {
    const body = await resp.text().catch(() => "");
    let apiMsg = "";
    try {
      const parsed = JSON.parse(body);
      apiMsg = parsed?.error?.message || parsed?.message || "";
    } catch {
      apiMsg = body.slice(0, 200);
    }
    if (resp.status === 400 && /credit balance/i.test(apiMsg)) {
      throw new Error("Skanneverktøyet er midlertidig utilgjengelig. Prøv igjen senere.");
    }
    if (resp.status === 401) {
      throw new Error("Skanneverktøyet er ikke riktig konfigurert.");
    }
    if (resp.status === 429) {
      throw new Error("For mange skanninger samtidig. Prøv igjen om ett minutt.");
    }
    throw new Error("Analysen mislyktes. Prøv igjen senere.");
  }

  const data = await resp.json();
  const text = data.content[0].text;

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Klarte ikke å behandle rapporten");

  return JSON.parse(jsonMatch[0]);
}
