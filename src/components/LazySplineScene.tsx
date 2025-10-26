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
 * Includes robot head rotation on scroll
 */
export const LazySplineScene = ({
  scene,
  className = '',
  threshold = 0.25,
  rootMargin = '50px'
}: LazySplineSceneProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [splineApp, setSplineApp] = useState<any>(null);
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

  // Robot head rotation on scroll
  useEffect(() => {
    if (!splineApp) return;
    
    let lastUpdate = 0;
    
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastUpdate < 16) return; // Throttle to 60fps
      lastUpdate = now;
      
      const scrollY = window.scrollY;
      const maxScroll = 500; // Max scroll distance for animation
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Try to find the robot head object (common names in Spline)
      const possibleNames = ['Robot_Head', 'Head', 'Robot', 'RobotHead'];
      
      for (const name of possibleNames) {
        try {
          const robot = splineApp.findObjectByName(name);
          if (robot) {
            // Rotate head down (X-rotation: 0° → -30° = -0.52 radians)
            robot.rotation.x = scrollProgress * -0.52;
            break;
          }
        } catch (e) {
          // Object not found, try next name
          continue;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [splineApp]);

  const handleSplineLoad = (app: any) => {
    setSplineApp(app);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {shouldLoad ? (
        <SplineScene 
          scene={scene} 
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
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
