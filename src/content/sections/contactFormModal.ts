/**
 * Section-Text: Kontakt-Formular-Modal (ContactFormModal)
 * --------------------------------------------------------------
 * Wiederverwendbares Kontakt-Dialog-Modal (Pain-Point-/Lösungsseiten).
 * Enthält Titel, Beschreibung, Feld-Labels/Placeholder, Honeypot-Text,
 * Button-Beschriftungen sowie alle Inline-/Toast-Statusmeldungen.
 *
 * Hinweis: Die Felder sind als typisiertes Array modelliert; Render-Logik,
 * Validierung, Submit-Handler und `name`-Attribute bleiben in der Komponente.
 *
 * ACHTUNG (Überschneidung): `pages/home.ts` besitzt einen eigenen
 * `contact`-Block für das Kontakt-Sheet der Index-Seite. Das ist eine
 * SEPARATE Sache mit eigenem Wortlaut — bewusst NICHT wiederverwendet.
 *
 * Strapi-Mapping: Single Type `contact-form-modal` (bzw. Teil von „globals").
 * --------------------------------------------------------------
 */

/** Einzelnes Formularfeld (Input/Textarea). `name` = Datenschlüssel (Logik). */
export interface ContactModalField {
  name: string;
  label: string;
  placeholder: string;
}

export const contactFormModal = {
  header: {
    title: "Get in touch!",
    description: "Erzählen Sie uns von Ihrem Projekt – wir melden uns zeitnah bei Ihnen",
  },

  /** Versteckter Honeypot (Spam-Schutz, optisch ausgeblendet). */
  honeypot: {
    label: "Website URL (leave empty)",
  },

  fields: {
    name: { name: "name", label: "Name *", placeholder: "Ihr Name" },
    email: { name: "email", label: "E-Mail *", placeholder: "ihre@email.com" },
    phone: { name: "phone", label: "Telefon", placeholder: "+49 123 456789" },
    company: { name: "company", label: "Firma", placeholder: "Ihre Firma" },
    position: { name: "position", label: "Position", placeholder: "Ihre Position" },
    message: {
      name: "message",
      label: "Nachricht *",
      placeholder: "Erzählen Sie uns von Ihrem Projekt...",
    },
  } satisfies Record<string, ContactModalField>,

  submit: {
    idle: "Nachricht senden",
    submitting: "Wird gesendet...",
  },

  /** Inline-/Toast-Statusmeldungen nach Submit. */
  messages: {
    honeypotSuccess: "Nachricht gesendet! Wir melden uns bald.",
    slaSuccess: "Audit angenommen. Die 24-Stunden-Uhr läuft — Status siehst du auf dieser Seite.",
    success: "Nachricht gesendet! Wir melden uns bald.",
    errorFallback: "Ein Fehler ist aufgetreten.",
  },
} as const;
