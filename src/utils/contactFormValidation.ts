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
  position: z.string()
    .trim()
    .max(100, { message: "Position darf maximal 100 Zeichen lang sein" })
    .optional()
    .or(z.literal('')),
  firma: z.string()
    .trim()
    .max(200, { message: "Firmenname darf maximal 200 Zeichen lang sein" })
    .optional()
    .or(z.literal('')),
  telefon: z.string()
    .trim()
    .max(30, { message: "Telefonnummer darf maximal 30 Zeichen lang sein" })
    .optional()
    .or(z.literal('')),
  nachricht: z.string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(2000, { message: "Nachricht darf maximal 2000 Zeichen lang sein" }),
  source: z.string().optional(),
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
export function extractFormData(formData: FormData, source?: string): Record<string, unknown> {
  return {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    position: formData.get('position')?.toString() || '',
    firma: formData.get('firma')?.toString() || '',
    telefon: formData.get('telefon')?.toString() || '',
    nachricht: formData.get('nachricht')?.toString() || '',
    source: source || '',
  };
}

// Extract honeypot field from FormData
export function extractHoneypotField(formData: FormData): string | undefined {
  return formData.get('website_url')?.toString();
}

// Submit validated contact form data to webhook
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://n8n-pro-oh9w.onrender.com/webhook/kontakt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { 
        success: false, 
        error: `Server antwortete mit Status ${response.status}` 
      };
    }
  } catch (error) {
    return { 
      success: false, 
      error: "Netzwerkfehler beim Senden der Nachricht" 
    };
  }
}