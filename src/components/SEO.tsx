import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
}

const SEO = ({ 
  title = "Full Service Agentur für AI-Solutions X New Edge",
  description = "New Edge - where brand meets intelligence. Full Service Agentur mit datengetriebener Kreativität für AI-Driven Solutions ✅ Beratung ✅ Konzeption ✅ Umsetzung. Individuelle Strategien für mehr Leads, Umsatz und Markenaufbau.",
  canonical = "https://www.newedgebrand.com/",
  robots = "index,follow"
}: SEOProps) => {
  // Use the passed props directly for Open Graph instead of dynamic logic
  const ogTitle = title;
  const ogDescription = description;
  const ogImage = 'https://www.newedgebrand.com/lovable-uploads/198e2b1f-64ac-4570-82fe-278fb98b54ef.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="New Edge" />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
    </Helmet>
  );
};

export default SEO;