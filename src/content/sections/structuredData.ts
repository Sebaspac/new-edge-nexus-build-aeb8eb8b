/**
 * Section-Daten: Structured Data / SEO JSON-LD (Singleton, global)
 * --------------------------------------------------------------
 * Reine Daten-Literale für die schema.org-JSON-LD-Schemas, die die
 * Komponente `StructuredData` in `<script type="application/ld+json">`
 * einbettet (Organization, WebSite, FAQPage + Service-Schemas je Route).
 *
 * Hier liegt NUR der Inhalt (Name, Beschreibung, Adresse, Kontakt,
 * Service-Texte, FAQ-Q&As, Preise …). Die Schema-Assembly samt
 * struktureller schema.org-Schlüssel (`@context`, `@type`, `@id`),
 * Geo-Koordinaten und die Routen-Auswahllogik bleiben in der Komponente.
 *
 * Routen-Keys (z. B. "/ki-audit") sind Logik (Auswahl per `currentPath`)
 * und bleiben erhalten; ihre Textwerte (name/description) sind Inhalt.
 *
 * Alle Werte sind serialisierbar (CMS-tauglich): nur Strings/Numbers/
 * Arrays/Objects — kein JSX, keine Funktionen. Strapi-Mapping:
 * Single Type `structured-data`.
 * --------------------------------------------------------------
 */

/** Ein Service-Eintrag im OfferCatalog (Name + Beschreibung). */
export interface OfferServiceText {
  name: string;
  description: string;
}

/** Ein OfferCatalog-Block mit Titel und enthaltenen Services. */
export interface OfferCatalogText {
  name: string;
  services: OfferServiceText[];
}

/** Eine FAQ-Frage samt Antwort (FAQPage). */
export interface FaqEntry {
  question: string;
  answer: string;
}

/** Textdaten eines routen-spezifischen Service-Schemas. */
export interface ServiceSchemaText {
  name: string;
  description: string;
  serviceType: string;
  category: string[];
  offer: {
    priceCurrency: string;
    price: string;
    description: string;
  };
}

export const structuredData = {
  /** Organization / LocalBusiness / ProfessionalService. */
  organization: {
    name: "NEWEDGE Brand",
    alternateName: "NEWEDGE",
    url: "https://newedgebrand.com",
    logo: "https://newedgebrand.com/logo.png",
    description:
      "KI-Agentur aus München – Markenstrategie, Digitalentwicklung und KI-Implementierung für mittelständische Unternehmen und Konzerne im DACH-Raum.",
    foundingLocation: "München, Deutschland",
    knowsAbout: [
      "Künstliche Intelligenz",
      "KI-Automatisierung",
      "Large Language Models",
      "RAG-Systeme",
      "Brand Identity",
      "Webentwicklung",
      "Marketing-Automation",
      "Prozessautomatisierung",
      "Custom AI Agents",
      "LLM-Deployment",
    ],
    address: {
      addressLocality: "München",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    areaServed: [
      { type: "City", name: "München" },
      { type: "State", name: "Bayern" },
      { type: "Country", name: "Deutschland" },
    ],
    email: "hello@newedgebrand.com",
    sameAs: ["https://www.linkedin.com/company/newedgebrand"],
    offerCatalogName: "Leistungen",
    /** Verschachtelte OfferCatalogs (Studio / Lab) mit Services. */
    offerCatalogs: [
      {
        name: "Studio – Brand & Digital",
        services: [
          {
            name: "Brand Identity & Markenentwicklung",
            description: "Logoentwicklung, Visual Identity und Brand Guidelines für starke Unternehmensmarken.",
          },
          {
            name: "Webdesign & Webentwicklung",
            description: "Responsive Websites, Landing Pages und Web-Applikationen.",
          },
          {
            name: "Content-Strategie & Social Media",
            description: "Redaktionsplanung, Storytelling und Social Media Management.",
          },
        ],
      },
      {
        name: "Lab – Website, Automation & Ownership",
        services: [
          {
            name: "KI-Automatisierung",
            description: "Prozessoptimierung durch intelligente KI-Workflows und Automatisierung.",
          },
          {
            name: "LLM-Deployment & Custom AI Agents",
            description: "Eigene Sprachmodelle und maßgeschneiderte KI-Agenten für Unternehmen.",
          },
          {
            name: "RAG-Systeme & Wissensmanagement",
            description: "Retrieval Augmented Generation für unternehmensweite Wissensdatenbanken.",
          },
        ],
      },
    ] as OfferCatalogText[],
  },

  /** WebSite (nur Homepage). */
  website: {
    url: "https://newedgebrand.com",
    name: "NEWEDGE Brand – KI Agentur München",
    description:
      "KI-Agentur in München für Prozessautomatisierung, Marketing-Automation und intelligente KI-Lösungen für KMU und Konzerne.",
    inLanguage: "de-DE",
  },

  /** FAQPage (nur Homepage). */
  faq: [
    {
      question: "Was ist NEWEDGE Brand?",
      answer: "NEWEDGE Brand ist eine KI-Agentur aus München, die Unternehmen bei Markenstrategie, Digitalentwicklung und KI-Implementierung unterstützt. Wir arbeiten an der Schnittstelle von Brand, Digital und AI.",
    },
    {
      question: "Was kostet eine Website bei NEWEDGE Brand?",
      answer: "Website-Projekte starten ab €2.240. Umfang und Preis werden individuell auf die Anforderungen des Unternehmens zugeschnitten.",
    },
    {
      question: "Ist die KI-Beratung von NEWEDGE Brand förderfähig?",
      answer: "Ja, unsere KI-Beratungsleistungen sind über das BAFA-Förderprogramm förderfähig.",
    },
    {
      question: "Was ist ein KI-Audit?",
      answer: "Ein kostenloser Analyse-Prozess, bei dem wir KI-Potenziale in Ihrem Unternehmen identifizieren, Automatisierungsmöglichkeiten bewerten und eine priorisierte strategische KI-Roadmap erstellen.",
    },
    {
      question: "Welche KI-Technologien setzt NEWEDGE Brand ein?",
      answer: "Wir arbeiten mit Large Language Models (LLMs), RAG-Systemen (Retrieval Augmented Generation), Custom AI Agents, Automatisierungs-Frameworks und modernen Web-Technologien wie React und TypeScript.",
    },
  ] as FaqEntry[],

  /**
   * Routen-spezifische Service-Schemas (Textdaten je Pfad).
   * Routen-Keys sind Logik (Auswahl per `currentPath`); Werte sind Inhalt.
   */
  serviceSchemas: {
    "/ki-audit": {
      name: "KI-Audit für den Mittelstand",
      description: "Strukturierter KI-Audit: IST-Analyse, Potenzialanalyse und strategische Roadmap. BAFA-förderfähig ab €448.",
      serviceType: "ProfessionalService",
      category: ["KI-Audit", "KI-Beratung", "Prozessanalyse"],
      offer: {
        priceCurrency: "EUR",
        price: "448",
        description: "Ab €448 mit BAFA-Förderung (bis 80% förderfähig)",
      },
    },
  } as Record<string, ServiceSchemaText>,
} as const;
