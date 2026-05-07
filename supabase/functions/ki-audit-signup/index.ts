import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();

    // Honeypot check
    if (body.website) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, phone } = body;
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

    // Validation
    if (!trimmedName || trimmedName.length > 120) {
      return new Response(JSON.stringify({ error: "Ungültiger Name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 200) {
      return new Response(JSON.stringify({ error: "Ungültige E-Mail" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!trimmedPhone || trimmedPhone.length < 5 || trimmedPhone.length > 30) {
      return new Response(JSON.stringify({ error: "Ungültige Telefonnummer" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert lead into database
    const { error: dbError } = await supabase
      .from("ki_audit_leads")
      .insert({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        ip: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || null,
        user_agent: req.headers.get("user-agent") || null,
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Lead konnte nicht gespeichert werden" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Forward to n8n webhook
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
            name: trimmedName,
            email: trimmedEmail,
            phone: trimmedPhone,
            telefon: trimmedPhone,
            ip: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || null,
            user_agent: req.headers.get("user-agent") || null,
            source: "ki-audit-signup",
          }),
        });
        if (!n8nRes.ok) console.error("n8n forward failed:", n8nRes.status, await n8nRes.text());
        else console.log("n8n forward successful");
      } catch (err) {
        console.error("n8n forward error:", err);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Request error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
