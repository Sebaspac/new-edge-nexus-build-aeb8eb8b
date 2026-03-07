import { z } from 'zod';

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_SUBMISSIONS_PER_WINDOW = 1;
let lastSubmissionTime = 0;
let submissionCount = 0;

// Contact form validation schema — 3 fields only
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name muss mindestens 2 Zeichen lang sein" })
    .max(120, { message: "Name darf maximal 120 Zeichen lang sein" }),
  email: z.string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" })
    .max(200, { message: "E-Mail darf maximal 200 Zeichen lang sein" }),
  message: z.string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(5000, { message: "Nachricht darf maximal 5000 Zeichen lang sein" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function checkRateLimit(): { allowed: boolean; error?: string } {
  const now = Date.now();
  if (now - lastSubmissionTime > RATE_LIMIT_WINDOW_MS) {
    submissionCount = 0;
  }
  if (submissionCount >= MAX_SUBMISSIONS_PER_WINDOW) {
    const remainingSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - lastSubmissionTime)) / 1000);
    return { allowed: false, error: `Bitte warten Sie ${remainingSeconds} Sekunden, bevor Sie erneut senden.` };
  }
  return { allowed: true };
}

export function recordSubmission(): void {
  lastSubmissionTime = Date.now();
  submissionCount++;
}

export function isHoneypotTriggered(honeypotValue: string | undefined): boolean {
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

// Validate and return per-field errors
export function validateContactForm(data: Record<string, unknown>): {
  success: boolean;
  data?: ContactFormData;
  fieldErrors?: Record<string, string>;
} {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of error.errors) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      return { success: false, fieldErrors };
    }
    return { success: false, fieldErrors: { _form: "Ein unerwarteter Fehler ist aufgetreten" } };
  }
}

// Submit via plain fetch to new-contact edge function — no auth header
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(
      'https://yzmtgxfehvzgobxjivjl.supabase.co/functions/v1/new-contact',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json().catch(() => ({}));

    if (response.ok && result.ok) {
      return { success: true };
    }

    return {
      success: false,
      error: result.error || `Server antwortete mit Status ${response.status}`,
    };
  } catch {
    return { success: false, error: "Verbindungsfehler. Bitte erneut versuchen." };
  }
}
