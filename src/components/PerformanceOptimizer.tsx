import { useEffect } from 'react';
import { prefersReducedMotion } from '@/utils/performanceOptimizations';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Set CSS custom properties based on user preferences and device capabilities
    const root = document.documentElement;
    
    // Optimize animations based on user preferences
    if (prefersReducedMotion()) {
      root.style.setProperty('--duration-fast', '0.01s');
      root.style.setProperty('--duration-normal', '0.01s');
      root.style.setProperty('--duration-slow', '0.01s');
    }
    
    // Optimize based on device capabilities
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;
    root.style.setProperty('--performance-mode', isLowEndDevice ? 'low' : 'high');
    
    // Add will-change for better performance
    const addWillChange = () => {
      const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
      animatedElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.willChange = 'transform, opacity';
        }
      });
    };
    
    // Remove will-change after animations complete
    const removeWillChange = () => {
      const animatedElements = document.querySelectorAll('[style*="will-change"]');
      animatedElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.willChange = 'auto';
        }
      });
    };
    
    // Optimize scroll performance
    const optimizeScroll = () => {
      const scrollElements = document.querySelectorAll('[class*="overflow-"], [class*="scroll-"]');
      scrollElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.scrollBehavior = 'smooth';
          (el.style as any).webkitOverflowScrolling = 'touch';
        }
      });
    };
    
    // Run optimizations
    addWillChange();
    optimizeScroll();
    
    // Cleanup function
    return () => {
      removeWillChange();
    };
  }, []);
  
  useEffect(() => {
    // Performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
          if (entry.entryType === 'first-input') {
            console.log(`FID: ${(entry as any).processingStart - entry.startTime}ms`);
          }
          if (entry.entryType === 'layout-shift' && (entry as any).value > 0.1) {
            console.warn(`CLS: ${(entry as any).value}`, entry);
          }
        }
      });
      
      try {
        observer.observe({ 
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
        });
        
        return () => observer.disconnect();
      } catch (error) {
        console.warn('Performance observer not supported:', error);
      }
    }
  }, []);
  
  return <>{children}</>;
};