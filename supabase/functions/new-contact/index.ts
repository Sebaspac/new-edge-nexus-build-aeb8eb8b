import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

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

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rl = checkRateLimit(ip);
    if (!rl.allowed) {
      return new Response(
        JSON.stringify({ error: `Zu viele Anfragen. Bitte warten Sie ${rl.retryAfter} Sekunden.` }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new Response(
        JSON.stringify({ error: "Ungültiger Request-Body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Normalize input — accept both EN and DE field names
    const raw = body as Record<string, unknown>;
    const name = raw.name;
    const email = raw.email;
    const phone = raw.phone ?? raw.telefon ?? null;
    const company = raw.company ?? raw.firma ?? null;
    const position = raw.position ?? null;
    const message = raw.message ?? raw.nachricht ?? null;

    console.log("Normalized input:", JSON.stringify({ name, email, phone, company, position, message }));

    // Validation
    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length < 2) errors.push("Name muss mindestens 2 Zeichen lang sein");
    if (typeof name === "string" && name.length > 120) errors.push("Name darf maximal 120 Zeichen lang sein");
    if (!email || typeof email !== "string" || !validateEmail(email.trim())) errors.push("Bitte geben Sie eine gültige E-Mail-Adresse ein");
    if (typeof email === "string" && email.length > 200) errors.push("E-Mail darf maximal 200 Zeichen lang sein");
    if (phone && typeof phone === "string" && phone.length > 30) errors.push("Telefon darf maximal 30 Zeichen lang sein");
    if (company && typeof company === "string" && company.length > 120) errors.push("Firma darf maximal 120 Zeichen lang sein");
    if (position && typeof position === "string" && position.length > 120) errors.push("Position darf maximal 120 Zeichen lang sein");
    if (!message || typeof message !== "string" || message.trim().length < 10) errors.push("Nachricht muss mindestens 10 Zeichen lang sein");
    if (typeof message === "string" && message.length > 5000) errors.push("Nachricht darf maximal 5000 Zeichen lang sein");

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: errors[0] }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const sanitized = {
      name: (name as string).trim(),
      email: (email as string).trim(),
      phone: phone && typeof phone === "string" ? phone.trim() || null : null,
      company: company && typeof company === "string" ? company.trim() || null : null,
      position: position && typeof position === "string" ? position.trim() || null : null,
      message: (message as string).trim(),
    };

    const n8nPayload = {
      name: sanitized.name,
      email: sanitized.email,
      phone: sanitized.phone,
      company: sanitized.company,
      position: sanitized.position,
      message: sanitized.message,
      ip,
      user_agent: req.headers.get("user-agent") || null,
      source: "new-contact",
    };

    console.log("New contact submission from", ip, ":", sanitized.email);

    // Optional: forward to n8n
    const n8nUrl = Deno.env.get("N8N_WEBHOOK_URL");
    if (n8nUrl) {
      try {
        const n8nUser = Deno.env.get("N8N_BASIC_USER");
        const n8nPass = Deno.env.get("N8N_BASIC_PASS");
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (n8nUser && n8nPass) {
          headers["Authorization"] = "Basic " + btoa(`${n8nUser}:${n8nPass}`);
        }

        const n8nRes = await fetch(n8nUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(n8nPayload),
        });

        if (!n8nRes.ok) {
          const t = await n8nRes.text();
          console.error("n8n forward failed:", n8nRes.status, t);
        } else {
          await n8nRes.text(); // consume body
          console.log("n8n forward successful");
        }
      } catch (err) {
        console.error("n8n forward error:", err);
      }
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Interner Serverfehler" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
