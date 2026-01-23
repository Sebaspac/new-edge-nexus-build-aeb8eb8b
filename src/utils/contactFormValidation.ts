import { z } from 'zod';

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 1;

// Store for rate limiting (in-memory, per session)
let lastSubmissionTime = 0;
let submissionCount = 0;

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name muss mindestens 2 Zeichen lang sein" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),
  email: z.string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" })
    .max(200, { message: "E-Mail darf maximal 200 Zeichen lang sein" }),
  phone: z.string()
    .trim()
    .max(30, { message: "Telefonnummer darf maximal 30 Zeichen lang sein" })
    .optional()
    .or(z.literal('')),
  company: z.string()
    .trim()
    .max(200, { message: "Firmenname darf maximal 200 Zeichen lang sein" })
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(2000, { message: "Nachricht darf maximal 2000 Zeichen lang sein" }),
  website_url: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Check rate limit
export function checkRateLimit(): { allowed: boolean; error?: string } {
  const now = Date.now();
  
  // Reset counter if window has passed
  if (now - lastSubmissionTime > RATE_LIMIT_WINDOW_MS) {
    submissionCount = 0;
  }
  
  if (submissionCount >= MAX_SUBMISSIONS_PER_WINDOW) {
    const remainingSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - lastSubmissionTime)) / 1000);
    return { 
      allowed: false, 
      error: `Bitte warten Sie ${remainingSeconds} Sekunden, bevor Sie erneut senden.` 
    };
  }
  
  return { allowed: true };
}

// Record a submission for rate limiting
export function recordSubmission(): void {
  lastSubmissionTime = Date.now();
  submissionCount++;
}

// Honeypot validation - returns true if bot detected
export function isHoneypotTriggered(honeypotValue: string | undefined): boolean {
  // If the hidden honeypot field has any value, it's likely a bot
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

// Validate form data and return result
export function validateContactForm(data: Record<string, unknown>): { 
  success: boolean; 
  data?: ContactFormData; 
  error?: string 
} {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return { 
        success: false, 
        error: firstError?.message || "Validierungsfehler bei den Formulardaten" 
      };
    }
    return { success: false, error: "Ein unerwarteter Fehler ist aufgetreten" };
  }
}

// Extract form data from FormData object
export function extractFormData(formData: FormData): Record<string, unknown> {
  return {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    company: formData.get('company')?.toString() || '',
    message: formData.get('message')?.toString() || '',
    website_url: formData.get('website_url')?.toString() || '',
  };
}

// Extract honeypot field from FormData
export function extractHoneypotField(formData: FormData): string | undefined {
  return formData.get('website_url')?.toString();
}

// Get Turnstile token from form
export function getTurnstileToken(): string | null {
  const tokenInput = document.querySelector<HTMLInputElement>('[name="cf-turnstile-response"]');
  return tokenInput?.value || null;
}

// Reset Turnstile widget
export function resetTurnstile(): void {
  if (typeof window !== 'undefined' && (window as any).turnstile) {
    (window as any).turnstile.reset();
  }
}

// Submit validated contact form data via Supabase Edge Function
export async function submitContactForm(
  data: ContactFormData, 
  turnstileToken: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Use external Supabase Edge Function
    const edgeFunctionUrl = 'https://uafyaqlbrxviyrrbrmjm.supabase.co/functions/v1/contact-form';
    
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      message: data.message,
      website_url: data.website_url || '',
      turnstileToken,
    };

    const response = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      if (result.ok === true || result.success === true) {
        return { success: true };
      }
      return { success: true };
    } else if (response.status === 429) {
      const result = await response.json();
      return { 
        success: false, 
        error: `Zu viele Anfragen. Bitte warten Sie ${result.retryAfter || 60} Sekunden.` 
      };
    } else if (response.status === 403) {
      return { 
        success: false, 
        error: "Sicherheitsüberprüfung fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut." 
      };
    } else if (response.status === 400) {
      const result = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: result.error || "Ungültige Formulardaten. Bitte überprüfen Sie Ihre Eingaben." 
      };
    } else if (response.status === 502) {
      return { 
        success: false, 
        error: "Der Server ist vorübergehend nicht erreichbar. Bitte versuchen Sie es später erneut." 
      };
    } else {
      const result = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: result.error || `Server antwortete mit Status ${response.status}` 
      };
    }
  } catch (error) {
    return { 
      success: false, 
      error: "Netzwerkfehler beim Senden der Nachricht" 
    };
  }
}
