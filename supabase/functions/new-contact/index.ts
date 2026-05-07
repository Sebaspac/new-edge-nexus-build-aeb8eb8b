import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

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

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
    const rl = checkRateLimit(ip);
    if (!rl.allowed) {
      return new Response(JSON.stringify({ error: `Zu viele Anfragen. Bitte warten Sie ${rl.retryAfter} Sekunden.` }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const raw = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!raw) {
      return new Response(JSON.stringify({ error: "Ungültiger Request-Body" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const name = raw.name;
    const email = raw.email;
    const phone = (raw.phone ?? raw.telefon ?? null) as string | null;
    const company = (raw.company ?? raw.firma ?? null) as string | null;
    const position = (raw.position ?? null) as string | null;
    const message = (raw.message ?? raw.nachricht ?? null) as string | null;

    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length < 2) errors.push("Name muss mindestens 2 Zeichen lang sein");
    if (!email || typeof email !== "string" || !validateEmail(email.trim())) errors.push("Bitte geben Sie eine gültige E-Mail-Adresse ein");
    if (!message || typeof message !== "string" || message.trim().length < 10) errors.push("Nachricht muss mindestens 10 Zeichen lang sein");
    if (errors.length) {
      return new Response(JSON.stringify({ error: errors[0] }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sanitized = {
      name: (name as string).trim(),
      email: (email as string).trim(),
      phone: phone && typeof phone === "string" ? phone.trim() || null : null,
      company: company && typeof company === "string" ? company.trim() || null : null,
      position: position && typeof position === "string" ? position.trim() || null : null,
      message: (message as string).trim(),
    };

    const userAgent = req.headers.get("user-agent") || null;

    // Persist to database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("contact_leads").insert({
      ...sanitized,
      ip,
      user_agent: userAgent,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Anfrage konnte nicht gespeichert werden" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Forward to n8n
    const n8nUrl = Deno.env.get("N8N_WEBHOOK_URL");
    if (n8nUrl) {
      try {
        const n8nUser = Deno.env.get("N8N_BASIC_USER");
        const n8nPass = Deno.env.get("N8N_BASIC_PASS");
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (n8nUser && n8nPass) headers["Authorization"] = "Basic " + btoa(`${n8nUser}:${n8nPass}`);

        const n8nRes = await fetch(n8nUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({
            ...sanitized,
            telefon: sanitized.phone,
            firma: sanitized.company,
            nachricht: sanitized.message,
            ip,
            user_agent: userAgent,
            source: "new-contact",
          }),
        });
        if (!n8nRes.ok) console.error("n8n forward failed:", n8nRes.status, await n8nRes.text());
        else console.log("n8n forward successful");
      } catch (err) {
        console.error("n8n forward error:", err);
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: "Interner Serverfehler" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
