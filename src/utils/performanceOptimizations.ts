// Performance optimization utilities for New Edge Brand

// Throttle function for scroll events
export const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  
  return function (this: any, ...args: any[]) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Debounce function for user input
export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Preload critical images
export const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device capabilities
export const getOptimizedAnimationDuration = (baseDuration: number = 0.3) => {
  // Reduce animation duration on lower-end devices
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const memoryGBEstimate = (navigator as any).deviceMemory || 4;
  
  if (prefersReducedMotion()) return 0.01;
  if (hardwareConcurrency < 4 || memoryGBEstimate < 4) return baseDuration * 0.5;
  
  return baseDuration;
};

// Critical images to preload
export const CRITICAL_IMAGES = [
  '/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png', // Logo
  '/lovable-uploads/8b2fd89c-8469-4c89-bbba-463d2c352273.png', // Hero AI image
];

// Intersection Observer for performance tracking
export const createPerformanceObserver = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Log performance issues in development
        if (process.env.NODE_ENV === 'development') {
          if (entry.entryType === 'largest-contentful-paint' && entry.startTime > 2500) {
            console.warn('LCP is slower than 2.5s:', entry.startTime);
          }
          if (entry.entryType === 'layout-shift' && (entry as any).value > 0.1) {
            console.warn('Layout shift detected:', entry);
          }
        }
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
    return observer;
  }
  return null;
};