import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "newedgebrand",
    "url": "https://newedgebrand.com",
    "description": "KI-Agentur München für KMU – Brand System, Web und KI-Automatisierung aus einer Hand.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "München",
      "addressCountry": "DE"
    },
    "areaServed": "München und Bayern",
    "email": "hello@newedgebrand.com"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://newedgebrand.com/#website",
    "url": "https://newedgebrand.com",
    "name": "newedgebrand – KI Agentur München",
    "description": "KI-Agentur in München für Prozessautomatisierung, Marketing-Automation und intelligente KI-Lösungen für KMU",
    "publisher": {
      "@type": "Organization",
      "name": "newedgebrand"
    },
    "inLanguage": "de-DE"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
