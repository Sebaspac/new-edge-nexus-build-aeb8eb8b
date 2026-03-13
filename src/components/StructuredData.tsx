import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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
      {
        "@type": "City",
        "name": "München"
      },
      {
        "@type": "State",
        "name": "Bayern"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      }
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
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity & Markenentwicklung",
                "description": "Logoentwicklung, Visual Identity und Brand Guidelines für starke Unternehmensmarken."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Webdesign & Webentwicklung",
                "description": "Responsive Websites, Landing Pages und Web-Applikationen."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content-Strategie & Social Media",
                "description": "Redaktionsplanung, Storytelling und Social Media Management."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Lab – Website, Automation & Ownership",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "KI-Automatisierung",
                "description": "Prozessoptimierung durch intelligente KI-Workflows und Automatisierung."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "LLM-Deployment & Custom AI Agents",
                "description": "Eigene Sprachmodelle und maßgeschneiderte KI-Agenten für Unternehmen."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "RAG-Systeme & Wissensmanagement",
                "description": "Retrieval Augmented Generation für unternehmensweite Wissensdatenbanken."
              }
            }
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
    "publisher": {
      "@id": "https://newedgebrand.com/#organization"
    },
    "inLanguage": "de-DE"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist New Edge Brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New Edge Brand ist eine KI-Agentur aus München, die Unternehmen bei Markenstrategie, Digitalentwicklung und KI-Implementierung unterstützt. Wir arbeiten an der Schnittstelle von Brand, Digital und AI."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet eine Website bei New Edge Brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website-Projekte starten ab €2.240. Umfang und Preis werden individuell auf die Anforderungen des Unternehmens zugeschnitten."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die KI-Beratung von New Edge Brand förderfähig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, unsere KI-Beratungsleistungen sind über das BAFA-Förderprogramm förderfähig."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist ein KI-Audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein kostenloser Analyse-Prozess, bei dem wir KI-Potenziale in Ihrem Unternehmen identifizieren, Automatisierungsmöglichkeiten bewerten und eine priorisierte strategische KI-Roadmap erstellen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche KI-Technologien setzt New Edge Brand ein?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir arbeiten mit Large Language Models (LLMs), RAG-Systemen (Retrieval Augmented Generation), Custom AI Agents, Automatisierungs-Frameworks und modernen Web-Technologien wie React und TypeScript."
        }
      }
    ]
  };

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
    </Helmet>
  );
};

export default StructuredData;
