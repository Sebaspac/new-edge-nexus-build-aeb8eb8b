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
      "AI agency from Munich – brand strategy, digital development and AI implementation for mid-sized companies and corporations across the DACH region.",
    foundingLocation: "Munich, Germany",
    knowsAbout: [
      "Artificial Intelligence",
      "AI Automation",
      "Large Language Models",
      "RAG Systems",
      "Brand Identity",
      "Web Development",
      "Marketing Automation",
      "Process Automation",
      "Custom AI Agents",
      "LLM Deployment",
    ],
    address: {
      addressLocality: "München",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    areaServed: [
      { type: "City", name: "Munich" },
      { type: "State", name: "Bavaria" },
      { type: "Country", name: "Germany" },
    ],
    email: "hello@newedgebrand.com",
    sameAs: ["https://www.linkedin.com/company/newedgebrand"],
    offerCatalogName: "Services",
    /** Verschachtelte OfferCatalogs (Studio / Lab) mit Services. */
    offerCatalogs: [
      {
        name: "Studio – Brand & Digital",
        services: [
          {
            name: "Brand Identity & Brand Development",
            description: "Logo development, visual identity and brand guidelines for strong corporate brands.",
          },
          {
            name: "Web Design & Web Development",
            description: "Responsive websites, landing pages and web applications.",
          },
          {
            name: "Content Strategy & Social Media",
            description: "Editorial planning, storytelling and social media management.",
          },
        ],
      },
      {
        name: "Lab – Website, Automation & Ownership",
        services: [
          {
            name: "AI Automation",
            description: "Process optimization through intelligent AI workflows and automation.",
          },
          {
            name: "LLM Deployment & Custom AI Agents",
            description: "Custom language models and tailored AI agents for companies.",
          },
          {
            name: "RAG Systems & Knowledge Management",
            description: "Retrieval Augmented Generation for company-wide knowledge bases.",
          },
        ],
      },
    ] as OfferCatalogText[],
  },

  /** WebSite (nur Homepage). */
  website: {
    url: "https://newedgebrand.com",
    name: "NEWEDGE Brand – AI Agency Munich",
    description:
      "AI agency in Munich for process automation, marketing automation and intelligent AI solutions for SMEs and corporations.",
    inLanguage: "en-US",
  },

  /** FAQPage (nur Homepage). */
  faq: [
    {
      question: "What is NEWEDGE Brand?",
      answer: "NEWEDGE Brand is an AI agency from Munich that helps companies with brand strategy, digital development and AI implementation. We work at the intersection of brand, digital and AI.",
    },
    {
      question: "How much does a website cost at NEWEDGE Brand?",
      answer: "Website projects start at €2,240. Scope and price are tailored individually to each company's requirements.",
    },
    {
      question: "Is NEWEDGE Brand's AI consulting eligible for funding?",
      answer: "Yes, our AI consulting services are eligible for funding through the BAFA funding program.",
    },
    {
      question: "What is an AI audit?",
      answer: "A free analysis process in which we identify AI potential in your company, evaluate automation opportunities and create a prioritized strategic AI roadmap.",
    },
    {
      question: "Which AI technologies does NEWEDGE Brand use?",
      answer: "We work with Large Language Models (LLMs), RAG systems (Retrieval Augmented Generation), custom AI agents, automation frameworks and modern web technologies such as React and TypeScript.",
    },
  ] as FaqEntry[],

  /**
   * Routen-spezifische Service-Schemas (Textdaten je Pfad).
   * Routen-Keys sind Logik (Auswahl per `currentPath`); Werte sind Inhalt.
   */
  serviceSchemas: {
    "/ki-audit": {
      name: "AI Audit for mid-sized companies",
      description: "Structured AI audit: current-state analysis, potential analysis and strategic roadmap. BAFA-eligible from €448.",
      serviceType: "ProfessionalService",
      category: ["AI Audit", "AI Consulting", "Process Analysis"],
      offer: {
        priceCurrency: "EUR",
        price: "448",
        description: "From €448 with BAFA funding (up to 80% eligible)",
      },
    },
  } as Record<string, ServiceSchemaText>,
} as const;
