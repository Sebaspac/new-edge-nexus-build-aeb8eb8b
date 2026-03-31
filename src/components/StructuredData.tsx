import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const currentPath = location.pathname;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://newedgebrand.com/#organization",
    "name": "New Edge Brand",
    "alternateName": "New Edge",
    "url": "https://newedgebrand.com",
    "logo": "https://newedgebrand.com/logo.png",
    "description": "KI-Agentur aus München – Markenstrategie, Digitalentwicklung und KI-Implementierung für mittelständische Unternehmen und Konzerne im DACH-Raum.",
    "foundingLocation": "München, Deutschland",
    "knowsAbout": [
      "Künstliche Intelligenz",
      "KI-Automatisierung",
      "Large Language Models",
      "RAG-Systeme",
      "Brand Identity",
      "Webentwicklung",
      "Marketing-Automation",
      "Prozessautomatisierung",
      "Custom AI Agents",
      "LLM-Deployment"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "areaServed": [
      { "@type": "City", "name": "München" },
      { "@type": "State", "name": "Bayern" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "email": "hello@newedgebrand.com",
    "sameAs": [
      "https://www.linkedin.com/company/newedgebrand"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leistungen",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Studio – Brand & Digital",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Markenentwicklung", "description": "Logoentwicklung, Visual Identity und Brand Guidelines für starke Unternehmensmarken." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Webdesign & Webentwicklung", "description": "Responsive Websites, Landing Pages und Web-Applikationen." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content-Strategie & Social Media", "description": "Redaktionsplanung, Storytelling und Social Media Management." } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Lab – Website, Automation & Ownership",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KI-Automatisierung", "description": "Prozessoptimierung durch intelligente KI-Workflows und Automatisierung." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLM-Deployment & Custom AI Agents", "description": "Eigene Sprachmodelle und maßgeschneiderte KI-Agenten für Unternehmen." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RAG-Systeme & Wissensmanagement", "description": "Retrieval Augmented Generation für unternehmensweite Wissensdatenbanken." } }
          ]
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://newedgebrand.com/#website",
    "url": "https://newedgebrand.com",
    "name": "New Edge Brand – KI Agentur München",
    "description": "KI-Agentur in München für Prozessautomatisierung, Marketing-Automation und intelligente KI-Lösungen für KMU und Konzerne.",
    "publisher": { "@id": "https://newedgebrand.com/#organization" },
    "inLanguage": "de-DE"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was ist New Edge Brand?", "acceptedAnswer": { "@type": "Answer", "text": "New Edge Brand ist eine KI-Agentur aus München, die Unternehmen bei Markenstrategie, Digitalentwicklung und KI-Implementierung unterstützt. Wir arbeiten an der Schnittstelle von Brand, Digital und AI." } },
      { "@type": "Question", "name": "Was kostet eine Website bei New Edge Brand?", "acceptedAnswer": { "@type": "Answer", "text": "Website-Projekte starten ab €2.240. Umfang und Preis werden individuell auf die Anforderungen des Unternehmens zugeschnitten." } },
      { "@type": "Question", "name": "Ist die KI-Beratung von New Edge Brand förderfähig?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, unsere KI-Beratungsleistungen sind über das BAFA-Förderprogramm förderfähig." } },
      { "@type": "Question", "name": "Was ist ein KI-Audit?", "acceptedAnswer": { "@type": "Answer", "text": "Ein kostenloser Analyse-Prozess, bei dem wir KI-Potenziale in Ihrem Unternehmen identifizieren, Automatisierungsmöglichkeiten bewerten und eine priorisierte strategische KI-Roadmap erstellen." } },
      { "@type": "Question", "name": "Welche KI-Technologien setzt New Edge Brand ein?", "acceptedAnswer": { "@type": "Answer", "text": "Wir arbeiten mit Large Language Models (LLMs), RAG-Systemen (Retrieval Augmented Generation), Custom AI Agents, Automatisierungs-Frameworks und modernen Web-Technologien wie React und TypeScript." } }
    ]
  };

  // Page-specific Service schemas
  const serviceSchemas: Record<string, object> = {
    "/studio": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://newedgebrand.com/studio/#service",
      "name": "Brand Strategie & KI-Audit",
      "description": "Markenstrategie, Brand Identity, KI-Audit und Kommunikationsarchitektur für KMU in München. BAFA-förderfähig bis 80%.",
      "provider": { "@id": "https://newedgebrand.com/#organization" },
      "areaServed": { "@type": "Country", "name": "Deutschland" },
      "serviceType": "ProfessionalService",
      "category": ["Brand Strategie", "KI-Audit", "Kommunikationsarchitektur"],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "description": "BAFA-förderfähig bis 80%"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Studio Leistungen",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Markenstrategie & Positionierung", "description": "Strategische Markenentwicklung und Positionierung im Wettbewerbsumfeld." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design", "description": "Logo, Visual Identity, Brand Guidelines und Corporate Design." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KI-Audit & Enablement", "description": "Strukturierte IST-Analyse, KI-Potenzialanalyse und strategische Roadmap. BAFA-förderfähig." } }
        ]
      }
    },
    "/lab": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://newedgebrand.com/lab/#service",
      "name": "Webentwicklung & KI-Automatisierung",
      "description": "Website-Entwicklung, KI-Prozessautomatisierung und LLM-Deployment für KMU in München. Ab €2.240.",
      "provider": { "@id": "https://newedgebrand.com/#organization" },
      "areaServed": { "@type": "Country", "name": "Deutschland" },
      "serviceType": "ProfessionalService",
      "category": ["Webentwicklung", "KI-Automatisierung", "LLM-Deployment"],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "2240",
        "description": "Website-Projekte ab €2.240, KI-Systeme nach Aufwand"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Lab Leistungen",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website-Entwicklung", "description": "Responsive Webseiten, Landing Pages und Web-Applikationen mit modernen Technologien." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KI-Prozessautomatisierung", "description": "Automatisierung von Geschäftsprozessen mit KI-Workflows, Make.com und Custom Agents." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLM-Deployment & RAG-Systeme", "description": "Deployment eigener Sprachmodelle und Retrieval Augmented Generation für Unternehmenswissen." } }
        ]
      }
    },
    "/services": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://newedgebrand.com/services/#service",
      "name": "KI-Leistungen für Unternehmen",
      "description": "Prozessautomatisierung, Marketing-Automation und KI-Implementierung für KMU in München und deutschlandweit.",
      "provider": { "@id": "https://newedgebrand.com/#organization" },
      "areaServed": { "@type": "Country", "name": "Deutschland" },
      "serviceType": "ProfessionalService",
      "category": ["Prozessautomatisierung", "Marketing-Automation", "KI-Implementierung"]
    },
    "/ki-audit": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://newedgebrand.com/ki-audit/#service",
      "name": "KI-Audit für den Mittelstand",
      "description": "Strukturierter KI-Audit: IST-Analyse, Potenzialanalyse und strategische Roadmap. BAFA-förderfähig ab €448.",
      "provider": { "@id": "https://newedgebrand.com/#organization" },
      "areaServed": { "@type": "Country", "name": "Deutschland" },
      "serviceType": "ProfessionalService",
      "category": ["KI-Audit", "KI-Beratung", "Prozessanalyse"],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "448",
        "description": "Ab €448 mit BAFA-Förderung (bis 80% förderfähig)",
        "eligibleRegion": { "@type": "Country", "name": "Deutschland" }
      }
    }
  };

  const currentServiceSchema = serviceSchemas[currentPath];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {isHomepage && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </>
      )}
      {currentServiceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(currentServiceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;
