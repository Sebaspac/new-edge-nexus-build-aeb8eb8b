import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ALLOWED_ORIGINS = [
  "https://new-edge-nexus-build.lovable.app",
  "https://id-preview--21126c20-386b-45dc-b588-f6dd1e28040b.lovable.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }
  record.count++;
  return { allowed: true };
}

/** Read body robustly: JSON, FormData, or text fallback */
async function readBody(req: Request): Promise<Record<string, unknown>> {
  const ct = (req.headers.get("content-type") ?? "").toLowerCase();

  if (ct.includes("application/json")) {
    return (await req.json()) as Record<string, unknown>;
  }

  if (ct.includes("multipart/form-data") || ct.includes("x-www-form-urlencoded")) {
    const fd = await req.formData();
    const obj: Record<string, unknown> = {};
    fd.forEach((v, k) => { obj[k] = v; });
    return obj;
  }

  // Fallback: try parsing text as JSON
  const text = await req.text();
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    throw new Error("Unable to parse request body");
  }
}

/** Replace undefined values with null so JSON.stringify keeps every key */
function sanitize(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    out[k] = v === undefined ? null : v;
  }
  return out;
}

serve(async (req) => {
  const cors = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ ok: false, error: "Method not allowed" }),
      { status: 405, headers: { ...cors, "Content-Type": "application/json" } },
    );
  }

  try {
    // Rate limit
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rl = checkRateLimit(ip);
    if (!rl.allowed) {
      return new Response(
        JSON.stringify({ ok: false, error: "Too many requests", retryAfter: rl.retryAfter }),
        { status: 429, headers: { ...cors, "Content-Type": "application/json", "Retry-After": String(rl.retryAfter) } },
      );
    }

    // Read payload (supports JSON, FormData, text)
    const payload = await readBody(req);

    // Forward 1:1 — no manual field mapping
    const forwardBody = sanitize(payload);

    // Debug logs
    console.log("FORWARD KEYS", Object.keys(forwardBody));
    console.log("FORWARD BODY", JSON.stringify(forwardBody));

    // n8n credentials from env
    const n8nUrl = Deno.env.get("N8N_WEBHOOK_URL")!;
    const user = Deno.env.get("N8N_BASIC_USER")!;
    const pass = Deno.env.get("N8N_BASIC_PASS")!;
    const auth = "Basic " + btoa(`${user}:${pass}`);

    const n8nRes = await fetch(n8nUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth,
      },
      body: JSON.stringify(forwardBody),
    });

    if (!n8nRes.ok) {
      const t = await n8nRes.text();
      console.error("n8n forward failed:", n8nRes.status, t);
      return new Response(
        JSON.stringify({ ok: false, error: "Failed to forward submission" }),
        { status: 502, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    console.log("Contact form forwarded successfully from", ip);

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Internal server error" }),
      { status: 500, headers: { ...cors, "Content-Type": "application/json" } },
    );
  }
});
