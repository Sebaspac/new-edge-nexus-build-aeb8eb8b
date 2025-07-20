import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Function to set or update meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, name);
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Function to set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        document.head.appendChild(linkTag);
      }
      
      linkTag.setAttribute('href', href);
    };

    // Set basic meta tags
    if (seoData.description) {
      setMetaTag('description', seoData.description);
    }
    
    if (seoData.keywords) {
      setMetaTag('keywords', seoData.keywords);
    }

    // Set Open Graph tags
    if (seoData.ogTitle) {
      setMetaTag('og:title', seoData.ogTitle, true);
    }
    
    if (seoData.ogDescription) {
      setMetaTag('og:description', seoData.ogDescription, true);
    }
    
    if (seoData.ogImage) {
      setMetaTag('og:image', seoData.ogImage, true);
    }
    
    if (seoData.ogUrl) {
      setMetaTag('og:url', seoData.ogUrl, true);
    }

    // Set Twitter Card tags
    if (seoData.twitterCard) {
      setMetaTag('twitter:card', seoData.twitterCard);
    }

    // Set canonical URL
    if (seoData.canonical) {
      setLinkTag('canonical', seoData.canonical);
    }

    // Set default Open Graph type
    setMetaTag('og:type', 'website', true);

  }, [seoData]);
};

export default useSEO;