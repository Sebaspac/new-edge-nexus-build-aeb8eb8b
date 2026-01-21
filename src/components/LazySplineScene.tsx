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
 * - Delays loading by 1.5s or until first scroll/touch for better FCP
 * - On mobile (<768px), shows a static gradient instead of heavy 3D scene
 * - Shows a lightweight placeholder during loading
 */
export const LazySplineScene = ({
  scene,
  className = '',
  threshold = 0.25,
  rootMargin = '50px'
}: LazySplineSceneProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if mobile - don't load heavy 3D on mobile devices
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // Don't load 3D scene on mobile for performance
    if (checkMobile()) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let hasTriggered = false;

    const triggerLoad = () => {
      if (hasTriggered) return;
      hasTriggered = true;
      setShouldLoad(true);
      cleanup();
    };

    // Delay load by 1.5s to prioritize critical content
    timeoutId = setTimeout(triggerLoad, 1500);

    // Or load immediately on first user interaction
    const handleInteraction = () => triggerLoad();
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });

    const cleanup = () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    return cleanup;
  }, []);

  // Static gradient placeholder for mobile - much lighter than 3D
  const GradientPlaceholder = () => (
    <div 
      className="w-full h-full bg-gradient-to-br from-slate-900 via-violet-950/30 to-slate-900"
      style={{ minHeight: '400px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
    </div>
  );

  // Silent gradient placeholder during loading - no spinner or text
  const LoadingPlaceholder = () => (
    <div 
      className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ minHeight: '400px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent" />
    </div>
  );

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ minHeight: '400px', aspectRatio: '1/1' }}
    >
      {isMobile ? (
        <GradientPlaceholder />
      ) : shouldLoad ? (
        <SplineScene scene={scene} className="w-full h-full" />
      ) : (
        <LoadingPlaceholder />
      )}
    </div>
  );
};
