import { useEffect, useState, RefObject } from 'react';
import { getLazyLoadDistance } from '@/utils/adaptiveLoading';

export interface UseIntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number | number[];
  priority?: 'high' | 'medium' | 'low';
  triggerOnce?: boolean;
}

/**
 * Custom hook for Intersection Observer with adaptive loading
 */
export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  const {
    priority = 'medium',
    triggerOnce = true,
    threshold = 0.1,
    rootMargin
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Calculate optimal rootMargin based on priority and connection
    const optimalRootMargin = rootMargin || (() => {
      const baseDistance = getLazyLoadDistance();
      const baseValue = parseInt(baseDistance);
      
      switch (priority) {
        case 'high':
          return `${baseValue * 2}px`; // Load much earlier
        case 'medium':
          return baseDistance;
        case 'low':
          return `${Math.floor(baseValue * 0.5)}px`; // Load just before visible
        default:
          return baseDistance;
      }
    })();

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        rootMargin: optimalRootMargin,
        threshold
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin, threshold, priority, triggerOnce]);

  return isIntersecting;
};
