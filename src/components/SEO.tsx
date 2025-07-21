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
  // Dynamic Open Graph data based on page
  const ogTitle = canonical.includes('/studio') 
    ? 'KI Agentur für Markenstrategie & Automatisierung | New Edge Studio'
    : canonical.includes('/services')
    ? 'Top Marketing Agentur in München für KI & digitale Strategien | New Edge'
    : 'New Edge X Driving Innovation';
  
  const ogDescription = canonical.includes('/studio')
    ? 'Markenentwicklung mit KI – New Edge Studio bietet Workshops, Strategien & smarte Automatisierung für Unternehmen, die modern denken und handeln.'
    : canonical.includes('/services')
    ? 'Maßgeschneiderte Marketing Services für Unternehmen: KI-Strategie, Content Creation, Webentwicklung & Automatisierung – alles aus einer Hand.'
    : 'Full Service Agentur für KI-Marketing ✅ Beratung ✅ Konzeption ✅ Umsetzung. Individuelle Strategien für mehr Leads, Umsatz und Markenaufbau.';
  
  const ogImage = canonical.includes('/studio')
    ? 'https://www.newedgebrand.com/assets/studio-og.jpg'
    : canonical.includes('/services')
    ? 'https://www.newedgebrand.com/assets/services-og.jpg'
    : 'https://www.newedgebrand.com/lovable-uploads/198e2b1f-64ac-4570-82fe-278fb98b54ef.png';

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
      <meta name="twitter:title" content="New Edge X Driving Innovation" />
      <meta name="twitter:description" content="New Edge - where brand meets intelligence. Full Service Agentur für KI-Marketing mit datengetriebener Kreativität und KI-Power für deinen Marketing-Erfolg." />
    </Helmet>
  );
};

export default SEO;