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
 * List of critical images that should be preloaded (above the fold)
 */
export const CRITICAL_IMAGES = [
  '/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png', // Mobile nav logo
  '/lovable-uploads/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png', // Sebastian - founder
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
 * Initialize all performance optimizations with ultra-fast approach
 */
export async function initializePerformanceOptimizations(): Promise<void> {
  console.time('⚡ Ultra-fast optimizations');
  
  // Add resource hints immediately
  addResourceHints();
  
  // Only preload the most critical image (mobile logo)
  const criticalImagePromise = preloadImages([CRITICAL_IMAGES[0]]);
  
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
  
  // Ultra-fast timeout - only wait 1 second max for critical images
  await Promise.race([
    criticalImagePromise,
    new Promise(resolve => setTimeout(resolve, 1000))
  ]);
  
  console.timeEnd('⚡ Ultra-fast optimizations');
}