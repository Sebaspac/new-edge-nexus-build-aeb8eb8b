import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
}

const SEO = ({
  title = "Full Service Agentur für KI-Marketing | New Edge GmbH",
  description = "Full Service Agentur für KI-Marketing ✅ Beratung ✅ Konzeption ✅ Umsetzung. Individuelle Strategien für mehr Leads, Umsatz und Markenaufbau.",
  canonical = "https://www.newedgebrand.com/",
  robots = "index,follow"
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Canonical Link Tag
    const link = document.querySelector("link[rel='canonical']") || document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonical);
    document.head.appendChild(link);

    // Standard Meta Tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        meta.content = content;
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
    };

    // Meta tags
    updateMetaTag("description", description);
    updateMetaTag("robots", robots);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:image", "https://newedgebrand.com/assets/og-image.jpg", true); // ← optional: eigenes Bild anpassen
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", "Full Service Agentur für KI-Marketing mit datengetriebener Kreativität und KI-Power für deinen Marketing-Erfolg.");
    updateMetaTag("twitter:image", "https://newedgebrand.com/assets/twitter-card.jpg"); // ← optional: eigenes Bild anpassen

  }, [title, description, canonical, robots]);

  return null;
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
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', 'https://www.newedgebrand.com/lovable-uploads/198e2b1f-64ac-4570-82fe-278fb98b54ef.png', true);
    updateMetaTag('og:url', canonical, true);
    
    // Update canonical link
    updateLinkTag('canonical', canonical);
    
  }, [title, description, canonical, robots]);

  return null;
};

export default SEO;