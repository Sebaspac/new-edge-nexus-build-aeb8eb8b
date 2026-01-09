import { useState, useEffect, useRef, lazy, Suspense } from 'react';

// Dynamically import the heavy SplineScene component
const SplineScene = lazy(() => import('./ui/splite').then(mod => ({ default: mod.SplineScene })));

interface LazySplineSceneProps {
  scene: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
};

// Check if device is low-end or has slow connection
const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  const cores = navigator.hardwareConcurrency || 4;
  const connection = (navigator as any).connection;
  const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g' || connection?.effectiveType === '3g';
  const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  return cores <= 2 || isSlowConnection || isLowMemory;
};

/**
 * Lazy-loaded Spline Scene Component
 * - Loads heavy 3D scene only after user interaction or idle
 * - Shows gradient fallback for reduced motion / low-end devices
 * - Delays loading to prioritize above-the-fold content
 */
export const LazySplineScene = ({
  scene,
  className = '',
  threshold = 0.1,
  rootMargin = '100px'
}: LazySplineSceneProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Skip 3D on reduced motion or low-end devices
  const shouldSkip3D = prefersReducedMotion() || isLowEndDevice();

  useEffect(() => {
    // Skip loading for accessibility or performance
    if (shouldSkip3D) return;
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Delay loading to prioritize other content (LCP optimization)
          const loadAfterIdle = () => {
            setShouldLoad(true);
          };
          
          // Use requestIdleCallback or setTimeout fallback
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(loadAfterIdle, { timeout: 2000 });
          } else {
            setTimeout(loadAfterIdle, 1500);
          }
          
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, shouldSkip3D]);

  // Gradient fallback - same visual style, zero performance cost
  const GradientFallback = () => (
    <div 
      className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-purple-900/15"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(124, 58, 237, 0.12) 0%, transparent 60%)',
      }}
    />
  );

  // Show fallback for reduced motion, low-end devices, or errors
  if (shouldSkip3D || hasError) {
    return (
      <div 
        ref={containerRef}
        className={`relative ${className}`}
        style={{ 
          minHeight: '400px', 
          aspectRatio: '1/1',
          contain: 'layout style paint',
        }}
      >
        <GradientFallback />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ 
        minHeight: '400px', 
        aspectRatio: '1/1',
        contain: 'layout style paint',
      }}
    >
      {shouldLoad ? (
        <Suspense fallback={<GradientFallback />}>
          <SplineScene 
            scene={scene} 
            className="w-full h-full" 
          />
        </Suspense>
      ) : (
        <GradientFallback />
      )}
    </div>
  );
};