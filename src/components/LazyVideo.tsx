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
}

export const LazyVideo = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'none'
}: LazyVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { 
        // Adaptive loading based on device
        rootMargin: isMobile ? '150px' : isTablet ? '250px' : '400px',
        threshold: isMobile ? 0.1 : 0.05
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      preload={preload}
    >
      {isLoaded && <source src={src} type="video/mp4" />}
    </video>
  );
};
