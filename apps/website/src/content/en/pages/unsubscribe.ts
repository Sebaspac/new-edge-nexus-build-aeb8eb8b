/**
 * Page: Unsubscribe (E-Mail-Abmeldung)  — Single Type
 * --------------------------------------------------------------
 * Sichtbare Texte der Abmelde-Seite (`pages/Unsubscribe.tsx`): Titel,
 * Zustands-abhängige Statusmeldungen und der Bestätigen-Button. Die
 * funktionale Logik (Supabase-Token-Prüfung, Abmeldung) bleibt
 * unverändert in der Komponente — hier liegen ausschließlich Strings.
 * Die `messages`-Keys entsprechen den `PageState`-Zuständen.
 * Strapi-Mapping: Single Type `unsubscribe`.
 * --------------------------------------------------------------
 */

export const unsubscribe = {
  title: "Email unsubscribe",
  confirmButton: "Confirm unsubscribe",
  /** Statusmeldung je `PageState`-Zustand. */
  messages: {
    loading: "Checking…",
    valid: "Would you like to unsubscribe from future emails?",
    confirming: "Processing…",
    success:
      "You have been unsubscribed successfully. You will no longer receive any emails.",
    already: "You are already unsubscribed.",
    invalid: "Invalid or expired link.",
    error:
      "Something went wrong. Please try again later.",
  },
} as const;
