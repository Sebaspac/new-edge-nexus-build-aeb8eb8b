import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting (per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  record.count++;
  return { allowed: true };
}

// Input validation
function validateContactData(data: unknown): { valid: boolean; error?: string; data?: Record<string, string> } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }
  
  const body = data as Record<string, unknown>;
  
  // Required fields
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const nachricht = String(body.nachricht || '').trim();
  
  // Optional fields
  const position = String(body.position || '').trim();
  const firma = String(body.firma || '').trim();
  const telefon = String(body.telefon || '').trim();
  const source = String(body.source || '').trim();
  
  // Validate required fields
  if (name.length < 2 || name.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' };
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 200) {
    return { valid: false, error: 'Invalid email address' };
  }
  
  if (nachricht.length < 10 || nachricht.length > 2000) {
    return { valid: false, error: 'Message must be between 10 and 2000 characters' };
  }
  
  // Optional field length validation
  if (position.length > 100) {
    return { valid: false, error: 'Position must be less than 100 characters' };
  }
  if (firma.length > 200) {
    return { valid: false, error: 'Company name must be less than 200 characters' };
  }
  if (telefon.length > 30) {
    return { valid: false, error: 'Phone number must be less than 30 characters' };
  }
  
  return {
    valid: true,
    data: { name, email, nachricht, position, firma, telefon, source }
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests', 
          retryAfter: rateLimit.retryAfter 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimit.retryAfter)
          } 
        }
      );
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const validation = validateContactData(body);
    if (!validation.valid) {
      console.log(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Processing contact form submission from ${clientIP}`);
    console.log(`Payload being sent to webhook: ${JSON.stringify(validation.data)}`);

    // Forward to n8n webhook with Basic Auth from secrets
    const n8nUrl = Deno.env.get('N8N_WEBHOOK_URL')!;
    const user = Deno.env.get('N8N_BASIC_USER')!;
    const pass = Deno.env.get('N8N_BASIC_PASS')!;
    const auth = 'Basic ' + btoa(`${user}:${pass}`);

    const forwardBody = {
      ...validation.data,
      _meta: {
        ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
        user_agent: req.headers.get('user-agent') ?? null,
        source: 'supabase-edge',
      },
    };

    const webhookResponse = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth,
      },
      body: JSON.stringify(forwardBody),
    });

    if (!webhookResponse.ok) {
      const t = await webhookResponse.text();
      console.error('n8n forward failed:', webhookResponse.status, t);
      return new Response(
        JSON.stringify({ error: 'Failed to process submission' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Contact form submitted successfully from ${clientIP}`);
    
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
