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
    "description": "New Edge ist eine KI-gestützte Kreativagentur, die Markenentwicklung, Content-Produktion und intelligente Automatisierung für zukunftsorientierte Unternehmen bietet.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Place",
      "name": "Deutschland"
    },
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
      "Markenentwicklung",
      "Content-Produktion",
      "Marketing Automation",
      "Brand Strategy",
      "Digital Marketing"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.newedgebrand.com/#website",
    "url": "https://www.newedgebrand.com",
    "name": "New Edge",
    "description": "KI-gestützte Kreativagentur für Markenentwicklung, Content-Produktion und intelligente Automatisierung",
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
    "name": "New Edge",
    "image": "https://www.newedgebrand.com/favicon.ico",
    "url": "https://www.newedgebrand.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1657",
      "longitude": "10.4515"
    },
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
