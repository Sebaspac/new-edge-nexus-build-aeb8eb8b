import { useState, useEffect, useRef } from 'react';
import { SplineScene } from './ui/splite';

interface LazySplineSceneProps {
  scene: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Lazy-loaded Spline Scene Component
 * Loads the heavy 3D scene only when it enters the viewport
 * Shows a lightweight placeholder until then
 */
export const LazySplineScene = ({
  scene,
  className = '',
  threshold = 0.25,
  rootMargin = '50px'
}: LazySplineSceneProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't load on server-side
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {shouldLoad ? (
        <SplineScene scene={scene} className="w-full h-full" />
      ) : (
        // Lightweight placeholder with gradient
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-sm text-neutral-400">Loading 3D Scene...</p>
          </div>
        </div>
      )}
    </div>
  );
};
