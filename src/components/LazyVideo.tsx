import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  /** Aspect ratio for CLS prevention (e.g., "16/9", "4/3") */
  aspectRatio?: string;
  /** Width for intrinsic sizing */
  width?: number;
  /** Height for intrinsic sizing */
  height?: number;
  /** Priority loading - skip lazy load */
  priority?: boolean;
}

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
};

export const LazyVideo = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'none', // Changed default to 'none' for better performance
  aspectRatio = '16/9',
  width = 1920,
  height = 1080,
  priority = false,
}: LazyVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(priority); // Load immediately if priority
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Don't autoplay if user prefers reduced motion
  const shouldAutoPlay = autoPlay && !prefersReducedMotion();

  useEffect(() => {
    // Skip intersection observer for priority videos
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '400px', // Reduced from 600px
        threshold: 0.01 // Lower threshold for earlier trigger
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle play state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded || !shouldAutoPlay) return;

    const handleCanPlay = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [isLoaded, shouldAutoPlay]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        aspectRatio,
        width: '100%',
        contain: 'layout style paint',
      }}
    >
      {/* Poster/placeholder background for instant visual */}
      {poster && !isPlaying && (
        <img 
          src={poster} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
      
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={shouldAutoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        preload={isLoaded ? 'metadata' : 'none'}
        width={width}
        height={height}
      >
        {isLoaded && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
};