import { useEffect } from 'react';

// Critical images that need to be preloaded for fast LCP
const CRITICAL_IMAGES = [
  // Hero/Above-the-fold images - only 1-2 most important
  '/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png', // Logo
  '/lovable-uploads/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png', // Main logo
];

// Generate responsive preload links
const createPreloadLink = (src: string, priority: boolean = false) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  
  // Use AVIF as primary format for modern browsers
  const baseUrl = src.replace(/\.[^/.]+$/, '');
  link.href = `${baseUrl}-1280.avif`;
  
  // Add responsive srcset
  const avifSrcSet = [320, 640, 960, 1280, 1920]
    .map(width => `${baseUrl}-${width}.avif ${width}w`)
    .join(', ');
  
  link.setAttribute('imagesrcset', avifSrcSet);
  link.setAttribute('imagesizes', '(max-width: 768px) 100vw, 80vw');
  
  if (priority) {
    link.setAttribute('fetchpriority', 'high');
  }
  
  return link;
};

export const ImagePreloadManager: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadLinks: HTMLLinkElement[] = [];

    // Preload critical images with high priority
    CRITICAL_IMAGES.forEach((src, index) => {
      const link = createPreloadLink(src, index === 0); // Only first image gets high priority
      document.head.appendChild(link);
      preloadLinks.push(link);
    });

    // Resource hints for external domains
    const resourceHints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'dns-prefetch', href: 'https://api.supabase.co' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
      preloadLinks.push(link);
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

// Performance monitoring for Core Web Vitals
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Monitor LCP (Largest Contentful Paint)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (process.env.NODE_ENV === 'development') {
        console.log('LCP:', lastEntry.startTime, 'ms');
        if (lastEntry.startTime > 2500) {
          console.warn('⚠️ LCP > 2.5s - Consider optimizing critical images');
        }
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    // PerformanceObserver not supported
  }

  // Monitor CLS (Cumulative Layout Shift)
  try {
    new PerformanceObserver((entryList) => {
      let cls = 0;
      entryList.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      
      if (process.env.NODE_ENV === 'development' && cls > 0.1) {
        console.warn('⚠️ CLS > 0.1 - Check image dimensions and layout shifts');
      }
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    // PerformanceObserver not supported
  }

  // Monitor FID (First Input Delay) / INP (Interaction to Next Paint)
  try {
    new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry: any) => {
        const tti = entry.startTime;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('TTI:', tti, 'ms');
          if (tti > 3000) {
            console.warn('⚠️ TTI > 3s - Consider code splitting and lazy loading');
          }
        }
      });
    }).observe({ type: 'first-input', buffered: true });
  } catch (error) {
    // PerformanceObserver not supported
  }
};