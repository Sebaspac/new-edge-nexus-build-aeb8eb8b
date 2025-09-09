// Performance optimization utilities for improved site performance

/**
 * Throttle function calls to improve performance during high-frequency events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

/**
 * Debounce function calls to prevent excessive executions
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Preload critical images with priority and resource hints
 */
export function preloadImages(imageUrls: string[]): Promise<void> {
  // Add resource hints to document head
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload images with timeout and priority handling
  const imagePromises = imageUrls.map((url, index) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      
      // Set higher priority for first few images
      if (index < 3) {
        (img as any).fetchPriority = 'high';
      }
      
      const cleanup = () => {
        img.onload = null;
        img.onerror = null;
      };
      
      img.onload = () => {
        cleanup();
        resolve();
      };
      
      img.onerror = () => {
        console.warn(`Failed to preload image: ${url}`);
        cleanup();
        resolve();
      };
      
      // Timeout after 3 seconds per image
      setTimeout(() => {
        cleanup();
        resolve();
      }, 3000);
      
      img.src = url;
    });
  });
  
  return Promise.allSettled(imagePromises).then(() => {});
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * Get optimized animation duration based on user preferences
 */
export function getOptimizedAnimationDuration(baseDuration: number = 0.3): number {
  if (prefersReducedMotion()) {
    return 0.01; // Nearly instant for accessibility
  }
  
  // Adjust based on device performance
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  return isLowEndDevice ? baseDuration * 0.7 : baseDuration;
}

/**
 * Only above-the-fold images that are immediately visible
 */
export const ABOVE_THE_FOLD_IMAGES = [
  '/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png', // Mobile nav logo (always visible)
  '/lovable-uploads/804d1765-b7c9-45f5-93a3-dddb443996f4.png', // Team collaboration (innovation section)
  '/lovable-uploads/72768da6-5ac5-423e-a9df-579dd83dc1aa.png', // Business analytics (innovation section)
];

/**
 * Images for lazy loading on other pages
 */
export const LAZY_LOAD_IMAGES = [
  '/lovable-uploads/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png', // Main logo (for other pages)
  '/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png', // Footer logo
  '/lovable-uploads/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png', // Wenjamin - founder
  '/lovable-uploads/072b3572-872a-4a44-b919-80bad436c002.png', // Team background
  '/lovable-uploads/db231edd-d76b-46cd-ad70-02ac9544d6ff.png', // Wenjamin portrait
];

/**
 * Create performance observer to monitor performance metrics
 */
export function createPerformanceObserver(): PerformanceObserver | null {
  if (!('PerformanceObserver' in window)) {
    return null;
  }

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
      if (entry.entryType === 'layout-shift') {
        console.log('CLS:', entry);
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
    return observer;
  } catch (error) {
    console.warn('Performance observer not supported:', error);
    return null;
  }
}

/**
 * Add critical resource hints to improve loading performance
 */
export function addResourceHints(): void {
  const head = document.head;
  
  // Preconnect to external domains
  const preconnectUrls = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];
  
  preconnectUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
  });

  // DNS prefetch for potential resources
  const dnsPrefetchUrls = [
    '//cdn.jsdelivr.net',
  ];
  
  dnsPrefetchUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = url;
    head.appendChild(link);
  });
}

/**
 * Preload only above-the-fold images to prevent console warnings
 */
export async function preloadCriticalImages(): Promise<void> {
  console.time('🖼️ Preloading critical images');
  
  try {
    await Promise.race([
      preloadImages(ABOVE_THE_FOLD_IMAGES), 
      new Promise(resolve => setTimeout(resolve, 800)) // Timeout for slow connections
    ]);
    
    console.timeEnd('🖼️ Preloading critical images');
  } catch (error) {
    console.warn('Critical image preloading failed:', error);
  }
}

/**
 * Initialize all performance optimizations with comprehensive image preloading
 */
export async function initializePerformanceOptimizations(): Promise<void> {
  console.time('⚡ Performance optimizations');
  
  // Add resource hints immediately
  addResourceHints();
  
  // Setup performance monitoring
  if (typeof window !== 'undefined') {
    createPerformanceObserver();
  }
  
  // Aggressive performance mode for low-end devices
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  const isSlowConnection = (navigator as any).connection?.effectiveType === 'slow-2g' || (navigator as any).connection?.effectiveType === '2g';
  
  if (isLowEndDevice || isSlowConnection) {
    document.documentElement.style.setProperty('--duration-fast', '0.05s');
    document.documentElement.style.setProperty('--duration-normal', '0.1s');
    document.documentElement.style.setProperty('--duration-slow', '0.15s');
  }
  
  // Preload only critical above-the-fold images
  await preloadCriticalImages();
  
  console.timeEnd('⚡ Performance optimizations');
}