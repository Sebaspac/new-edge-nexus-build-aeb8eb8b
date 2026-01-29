import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.newedgebrand.com/#organization",
    "name": "New Edge",
    "alternateName": "New Edge Brand",
    "url": "https://www.newedgebrand.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.newedgebrand.com/favicon.ico",
      "width": 512,
      "height": 512
    },
    "description": "New Edge ist eine KI Agentur in München, spezialisiert auf Prozessautomatisierung, Marketing-Automation und KI-Lösungen für KMU im Mittelstand.",
    "foundingDate": "2024",
    "areaServed": [
      { "@type": "City", "name": "München" },
      { "@type": "State", "name": "Bayern" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/newedgebrand",
      "https://www.instagram.com/newedgebrand"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "email": "hello@newedgebrand.com"
    },
    "knowsAbout": [
      "KI-Agenten",
      "Prozessautomatisierung",
      "KI Agentur München",
      "Marketing Automation",
      "Automatisierung für KMU",
      "Markenentwicklung",
      "Content-Produktion",
      "Brand Strategy",
      "Digital Marketing",
      "Workflow Automatisierung"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.newedgebrand.com/#website",
    "url": "https://www.newedgebrand.com",
    "name": "New Edge - KI Agentur München",
    "description": "KI Agentur in München für Prozessautomatisierung, Marketing-Automation und intelligente KI-Lösungen für KMU",
    "publisher": {
      "@id": "https://www.newedgebrand.com/#organization"
    },
    "inLanguage": "de-DE",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.newedgebrand.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.newedgebrand.com/#localbusiness",
    "name": "New Edge - KI Agentur München",
    "alternateName": "New Edge Brand",
    "image": "https://www.newedgebrand.com/favicon.ico",
    "url": "https://www.newedgebrand.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zehntfeldstraße 125a",
      "addressLocality": "München",
      "postalCode": "81825",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.1351",
      "longitude": "11.5820"
    },
    "areaServed": [
      { "@type": "City", "name": "München" },
      { "@type": "State", "name": "Bayern" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "serviceType": [
      "KI Agentur",
      "Prozessautomatisierung",
      "Marketing Automatisierung",
      "KI-Entwicklung",
      "Workflow Automatisierung",
      "Digitalisierung für KMU"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "parentOrganization": {
      "@id": "https://www.newedgebrand.com/#organization"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
