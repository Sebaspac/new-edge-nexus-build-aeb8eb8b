import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "New Edge Brand",
    "url": "https://newedgebrand.com",
    "logo": "https://newedgebrand.com/logo.png",
    "description": "KI-Agentur München – Brand, Digital & AI aus einer Hand.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "München",
      "addressCountry": "DE"
    },
    "areaServed": "München",
    "email": "hello@newedgebrand.com",
    "sameAs": ["https://www.linkedin.com/company/newedgebrand"]
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
      "name": "New Edge Brand"
    },
    "inLanguage": "de-DE"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {isHomepage && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;
