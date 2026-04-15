import { corsHeaders } from "@supabase/supabase-js/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const EMAIL_RECIPIENT = "Santiago.p@newedgebrand.com";

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

    // Send notification email via transactional email function
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const timestamp = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

    // Try sending via transactional email
    try {
      const { error: emailError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          to: EMAIL_RECIPIENT,
          subject: `Neuer KI-Audit Lead: ${name.trim()}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 12px;">Neuer KI-Audit Lead</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px 0;">${name.trim()}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td style="padding: 8px 0;"><a href="tel:${phone.trim()}">${phone.trim()}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Zeitpunkt:</td><td style="padding: 8px 0;">${timestamp}</td></tr>
              </table>
              <p style="margin-top: 24px; color: #666; font-size: 12px;">Automatisch gesendet von der KI-Audit Landing Page</p>
            </div>
          `,
        },
      });

      if (emailError) {
        console.error("Email send error:", emailError);
      }
    } catch (emailErr) {
      console.error("Failed to send email (transactional email may not be configured yet):", emailErr);
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
