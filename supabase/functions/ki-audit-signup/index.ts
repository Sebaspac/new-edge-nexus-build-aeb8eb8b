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

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 120) {
      return new Response(JSON.stringify({ error: "Ungültiger Name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 200) {
      return new Response(JSON.stringify({ error: "Ungültige E-Mail" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 5 || phone.length > 30) {
      return new Response(JSON.stringify({ error: "Ungültige Telefonnummer" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const timestamp = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    const idempotencyKey = `ki-audit-${email.trim().toLowerCase()}-${Date.now()}`;

    // Send notification via transactional email system
    const { error: invokeError } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "ki-audit-notification",
        recipientEmail: "Santiago.p@newedgebrand.com",
        idempotencyKey,
        templateData: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          timestamp,
        },
      },
    });

    if (invokeError) {
      console.error("Transactional email invoke error:", invokeError);
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
