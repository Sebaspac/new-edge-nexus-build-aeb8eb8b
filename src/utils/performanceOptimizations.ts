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
  const cores = navigator.hardwareConcurrency || 4;
  if (cores < 4) return baseDuration * 0.5;
  if (cores < 6) return baseDuration * 0.7;
  return baseDuration;
}

/**
 * Create performance observer to monitor performance metrics
 */
export function createPerformanceObserver(): PerformanceObserver | null {
  if (!('PerformanceObserver' in window)) {
    return null;
  }

  // Only log in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime.toFixed(0), 'ms');
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    return observer;
  } catch (error) {
    return null;
  }
}

/**
 * Add critical resource hints (called lazily)
 */
export function addResourceHints(): void {
  // Only add hints that aren't already in the document
  const head = document.head;
  
  const existingPreconnects = new Set(
    Array.from(document.querySelectorAll('link[rel="preconnect"]'))
      .map(link => (link as HTMLLinkElement).href)
  );
  
  const preconnectUrls = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];
  
  preconnectUrls.forEach(url => {
    if (!existingPreconnects.has(url)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      head.appendChild(link);
    }
  });
}

/**
 * Initialize performance optimizations (called during idle time)
 */
export async function initializePerformanceOptimizations(): Promise<void> {
  // Add resource hints
  addResourceHints();
  
  // Setup performance monitoring (dev only)
  createPerformanceObserver();
  
  // Aggressive performance mode for low-end devices
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  const connection = (navigator as any).connection;
  const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
  
  if (isLowEndDevice || isSlowConnection) {
    document.documentElement.style.setProperty('--duration-fast', '0.05s');
    document.documentElement.style.setProperty('--duration-normal', '0.1s');
    document.documentElement.style.setProperty('--duration-slow', '0.15s');
    
    // Disable animations entirely for very slow connections
    if (isSlowConnection) {
      document.documentElement.classList.add('reduce-motion');
    }
  }
}