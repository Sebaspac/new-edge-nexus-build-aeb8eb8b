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
 * Preload critical images for better performance
 */
export function preloadImages(imageUrls: string[]): void {
  const imagePromises = imageUrls.map((url) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  });
  
  Promise.allSettled(imagePromises);
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
 * List of critical images that should be preloaded
 */
export const CRITICAL_IMAGES = [
  '/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png', // Logo
  '/lovable-uploads/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png', // Sebastian
  '/lovable-uploads/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png', // Wenjamin
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
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations(): void {
  console.log('🚀 Initializing performance optimizations...');
  
  // Preload critical images
  preloadImages(CRITICAL_IMAGES);
  
  // Setup performance monitoring in development
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    createPerformanceObserver();
  }
  
  console.log('✅ Performance optimizations initialized');
}