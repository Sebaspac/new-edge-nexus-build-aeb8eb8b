/**
 * Page: Methodik  — Single Type
 * --------------------------------------------------------------
 * Inhalte der Methodik-Seite (`pages/Methodik.tsx`): Hero, Manifest,
 * die sieben Entwicklungsstufen, das Ziel und der CTA-Block.
 * Das animierte „NEWEDGE System" ist eine eigene Section-Komponente.
 * Alle Felder sind serialisierbar (CMS-tauglich): nur Strings/Arrays/
 * Objects — kein JSX, keine Funktionen.
 * Strapi-Mapping: Single Type `methodik`.
 * --------------------------------------------------------------
 */
import type { SEOContent } from "../types";

/** Eine Entwicklungsstufe der KI-Abteilung. */
export interface Stufe {
  index: string;
  title: string;
  frage: string;
  intro: string[];
  listLabel?: string;
  list?: string[];
  outro?: string;
  ergebnis: string[];
}

/** Ein Feld des Kontakt-Formulars (Sheet). */
export interface ContactField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const methodik = {
  seo: {
    title: "Methodik | NEWEDGE — Die KI-Abteilung für den Mittelstand",
    description:
      "Wir bauen die KI-Abteilung für den Mittelstand. In sieben Stufen — von der ersten Analyse bis zum laufenden Betrieb — wird KI bei Ihnen zur dauerhaften Unternehmensfähigkeit.",
    canonical: "/methodik",
  } satisfies SEOContent,

  /** HERO. */
  hero: {
    eyebrow: "NEWEDGE Methodik",
    /** Headline, zweizeilig (Zeilenumbruch via <br/>). */
    headlineLine1: "Wir bauen die KI-Abteilung",
    headlineLine2: "für den Mittelstand.",
    subline:
      "Nicht einzelne KI-Tools. Eine eigene KI-Abteilung — als dauerhafte Fähigkeit in Ihrem Unternehmen. Diese Methodik zeigt den Weg dorthin, Stufe für Stufe.",
    ctaLabel: "Erstgespräch buchen",
    ctaHref: "https://calendly.com/sebastian-p-newedgebrand/30min",
  },

  /** MANIFEST — Warum eine Methodik. */
  manifest: {
    eyebrow: "Warum eine Methodik",
    lead: "Die meisten Unternehmen scheitern nicht an Technologie. Sie scheitern daran, dass KI isoliert eingeführt wird.",
    body: [
      "Tools werden gekauft, einzelne Automatisierungen umgesetzt — doch ohne Verantwortung, Struktur und ein Fundament, auf dem alles zusammenläuft, bleibt der Effekt klein.",
      "Deshalb gehen wir jede KI-Transformation in festen Stufen — damit aus Einzelteilen eine Abteilung wird, die Ihnen gehört.",
    ],
  },

  /** ENTWICKLUNGSSTUFEN — Die Methodik. */
  stufenSection: {
    eyebrow: "Die Methodik",
    headingLine1: "Die Entwicklungsstufen",
    headingLine2: "einer KI-Abteilung.",
    /** Ergebnis-Block-Überschrift je Stufe. */
    ergebnisLabel: "Ergebnis",
  },

  stufen: [
    {
      index: "01",
      title: "Analyse",
      frage: "Wo lohnt sich KI wirklich?",
      intro: [
        "Sie wissen am Ende genau, wo KI in Ihrem Unternehmen den größten Hebel hat — bevor ein Euro in die Umsetzung fließt.",
        "Dafür schauen wir auf das, was bei Ihnen täglich läuft, und machen Potenziale sichtbar, die oft längst da sind, aber ungenutzt bleiben.",
      ],
      listLabel: "Wir analysieren",
      list: ["Prozesse", "Datenflüsse", "Wissensstrukturen", "Entscheidungswege", "Wiederkehrende Aufgaben"],
      ergebnis: ["ROI-Prognosen", "Potenzialanalyse", "Priorisierte Handlungsfelder", "Erste Transformations-Roadmap"],
    },
    {
      index: "02",
      title: "Cortex",
      frage: "Der sichere Einstiegspunkt für KI",
      intro: [
        "Ab hier nutzen Sie KI kontrolliert, sicher und transparent — statt verstreuter Tools, über die niemand den Überblick hat.",
        "Cortex ist der eine Ort, an dem Mitarbeiter, Daten, Prozesse und Agenten zusammenlaufen. So sehen Sie erstmals, wo KI bei Ihnen wirklich genutzt wird — und schaffen das Fundament für alles, was darauf aufbaut.",
      ],
      listLabel: "Cortex verbindet",
      list: ["Mitarbeiter", "Daten", "Prozesse", "Agenten", "Governance"],
      ergebnis: ["Zentrale Steuerung", "Transparenz über Nutzung", "Kontrollierte Einführung von KI", "Fundament für Automatisierung", "Grundlage für digitale Arbeitskräfte"],
    },
    {
      index: "03",
      title: "Audit",
      frage: "Die Prozesse mit dem größten Einfluss",
      intro: [
        "Sie bekommen eine klare Reihenfolge: Womit zuerst starten, weil es am meisten bringt — und was warten kann.",
        "Denn nicht jede Automatisierung zahlt sich gleich aus. Wir prüfen jeden Hebel und übersetzen ihn in eine priorisierte Roadmap für die nächsten Schritte.",
      ],
      listLabel: "Wir bewerten",
      list: ["Aufwand", "Wirtschaftlichkeit", "Umsetzbarkeit", "Strategische Relevanz"],
      ergebnis: ["Business Cases", "Priorisierte Maßnahmen", "Umsetzungsplan", "Entscheidungsgrundlage"],
    },
    {
      index: "04",
      title: "Digitale Systeme & Plattformen",
      frage: "Die Außenwirkung, die Ihr Unternehmen verdient",
      intro: [
        "Nach außen treten Sie so auf, wie es Ihrem Anspruch entspricht — professionell, eigenständig, skalierbar.",
        "Dafür bauen wir die digitalen Produkte, über die Ihr Unternehmen sichtbar wird: von der Website bis zum eigenen SaaS-Produkt.",
      ],
      listLabel: "Wir bauen",
      list: ["Unternehmenswebsites", "Kundenportale", "SaaS-Produkte", "Self-Service-Plattformen", "Landingpages & Funnels", "Web-Applikationen"],
      outro: "Das ist keine Marketingmaßnahme, sondern Infrastruktur, die Ihnen gehört und mit Ihnen wächst.",
      ergebnis: ["Professionelle Außenwirkung", "Skalierbare digitale Produkte", "Unabhängigkeit von Agenturen", "Volle Datenkontrolle"],
    },
    {
      index: "05",
      title: "Automatisierung",
      frage: "Was Ihr Wachstum bremst, läuft von selbst",
      intro: [
        "Ihr Team gewinnt Zeit zurück und Ihre Abläufe werden schneller, weil wiederkehrende Arbeit nicht mehr von Hand passiert.",
        "Wir automatisieren genau dort, wo es messbaren Mehrwert bringt — auf dem Fundament und den Prioritäten aus den Stufen davor.",
      ],
      listLabel: "Typische Einsatzbereiche",
      list: ["Dokumentenverarbeitung", "Kundenservice", "Angebotsprozesse", "Wissensmanagement", "Reporting", "Backoffice-Prozesse", "Datenaufbereitung"],
      ergebnis: ["Reduzierter manueller Aufwand", "Höhere Geschwindigkeit", "Weniger Fehler", "Mehr operative Kapazität"],
    },
    {
      index: "06",
      title: "Ownership & Infrastruktur",
      frage: "Ihre Daten. Ihre Systeme. Ihre Kontrolle.",
      intro: [
        "Sie bleiben unabhängig: Was wir aufbauen, gehört Ihnen — nachvollziehbar, kontrollierbar und jederzeit erweiterbar.",
        "Wo KI sonst neue Abhängigkeiten schafft, gehen wir den umgekehrten Weg und legen Datenhoheit und Souveränität in Ihre Hand.",
      ],
      listLabel: "Dazu gehören",
      list: ["Datenhoheit", "Governance", "Sicherheitskonzepte", "Integrationen", "Infrastrukturarchitektur"],
      ergebnis: ["Langfristige Unabhängigkeit", "Höhere Sicherheit", "Kontrollierte Skalierung", "Nachhaltige Systemlandschaft"],
    },
    {
      index: "07",
      title: "Embedded AI",
      frage: "Kein Recruiting. Kein Onboarding. Kein Risiko.",
      intro: [
        "Sie bekommen eine voll arbeitsfähige KI-Abteilung — ohne selbst einzustellen, einzuarbeiten oder das Ausfallrisiko einer einzelnen Stelle zu tragen.",
        "Eine Ansprechperson bei Ihnen koordiniert intern. Dahinter steht unser Team mit fünffacher Kapazität: spezialisiert, sofort einsatzbereit, dauerhaft an Ihrer Seite.",
      ],
      listLabel: "Was wir übernehmen",
      list: ["Strategische Priorisierung", "Laufende Systempflege", "Potenzialerkennung & Weiterentwicklung", "Team-Enablement & Schulung", "Governance & Qualitätssicherung", "Infrastruktur-Weiterentwicklung"],
      outro: "Sie erhalten die Schlagkraft eines ganzen Teams zum Preis einer einzigen Stelle — die intern nur einen Bruchteil davon abdecken würde.",
      ergebnis: ["Kein Recruiting-Aufwand", "Keine Einarbeitungszeit", "5× Kapazität zum Preis einer Stelle", "Kontinuierliche Transformation"],
    },
  ] as Stufe[],

  /** DAS ZIEL. */
  ziel: {
    eyebrow: "Das Ziel",
    headingLine1: "Die KI-Abteilung als",
    headingLine2: "Unternehmensfähigkeit.",
    intro: "Am Ende steht kein einzelnes Tool, sondern eine Organisation, die KI dauerhaft produktiv einsetzt. Ein Unternehmen, das:",
    punkte: [
      "Wissen schneller nutzbar macht",
      "Prozesse kontinuierlich verbessert",
      "Produktivität steigert",
      "Automatisierung systematisch vorantreibt",
      "langfristig digitale Arbeitskräfte integrieren kann",
    ],
    closing: "Aus einzelnen Projekten entsteht dadurch eine dauerhafte Unternehmensfähigkeit. Das ist die KI-Abteilung.",
  },

  /** CTA-Block. */
  cta: {
    eyebrow: "Bereit für Stufe 01?",
    headingLine1: "Sprechen Sie",
    headingLine2: "direkt mit uns.",
    phoneHref: "tel:+4917660431467",
    phoneLabel: "+49 176 60 431 467",
  },

  /** Kontakt-Formular (Sheet). */
  contact: {
    title: "Projekt besprechen",
    description: "Erzählen Sie uns von Ihrem Projekt — wir melden uns zeitnah.",
    fields: [
      { id: "name",     label: "Name *",     type: "text",  placeholder: "Ihr Name",          required: true },
      { id: "email",    label: "E-Mail *",   type: "email", placeholder: "ihre@email.com",    required: true },
      { id: "position", label: "Position *", type: "text",  placeholder: "Ihre Position",     required: true },
      { id: "firma",    label: "Firma *",    type: "text",  placeholder: "Ihr Unternehmen",   required: true },
      { id: "telefon",  label: "Telefon",    type: "tel",   placeholder: "Ihre Telefonnummer", required: false },
    ] as ContactField[],
    message: {
      label: "Nachricht *",
      placeholder: "Erzählen Sie uns von Ihrem Projekt...",
    },
    submit: "Nachricht senden",
  },

  /** Toast-Meldungen des Kontaktformulars. */
  toast: {
    validationTitle: "Validierungsfehler",
    successTitle: "Nachricht gesendet",
    successBody: "Wir melden uns bald.",
    errorTitle: "Fehler",
    errorFallback: "Bitte erneut versuchen.",
  },
} as const;
