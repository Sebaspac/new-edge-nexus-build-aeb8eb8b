import { useEffect } from 'react';

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
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (link) {
        link.href = href;
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('robots', robots);
    
    // Open Graph tags
    updateMetaTag('og:title', 'New Edge X Driving Innovation', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', 'https://newedgebrand.com/', true);
    updateMetaTag('og:description', 'Full Service Agentur für KI-Marketing ✅ Beratung ✅ Konzeption ✅ Umsetzung. Individuelle Strategien für mehr Leads, Umsatz und Markenaufbau.', true);
    updateMetaTag('og:site_name', 'New Edge', true);
    updateMetaTag('og:image', 'https://www.newedgebrand.com/lovable-uploads/198e2b1f-64ac-4570-82fe-278fb98b54ef.png', true);
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'New Edge X Driving Innovation');
    updateMetaTag('twitter:description', 'New Edge - where brand meets intelligence. Full Service Agentur für KI-Marketing mit datengetriebener Kreativität und KI-Power für deinen Marketing-Erfolg.');
    
    // Update canonical link
    updateLinkTag('canonical', canonical);
    
  }, [title, description, canonical, robots]);

  return null;
};

export default SEO;