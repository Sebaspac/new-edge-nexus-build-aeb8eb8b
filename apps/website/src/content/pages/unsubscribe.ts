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
  title: "E-Mail-Abmeldung",
  confirmButton: "Abmelden bestätigen",
  /** Statusmeldung je `PageState`-Zustand. */
  messages: {
    loading: "Wird geprüft…",
    valid: "Möchten Sie sich von zukünftigen E-Mails abmelden?",
    confirming: "Wird verarbeitet…",
    success:
      "Sie wurden erfolgreich abgemeldet. Sie erhalten keine weiteren E-Mails mehr.",
    already: "Sie sind bereits abgemeldet.",
    invalid: "Ungültiger oder abgelaufener Link.",
    error:
      "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
  },
} as const;
