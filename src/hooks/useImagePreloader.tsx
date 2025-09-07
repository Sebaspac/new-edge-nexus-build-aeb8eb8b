import { useState, useEffect } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  timeout?: number;
  minLoadTime?: number; // Minimum loading time to show loading screen
}

export const useImagePreloader = ({ 
  images, 
  timeout = 6000, 
  minLoadTime = 1000 
}: UseImagePreloaderOptions) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (images.length === 0) {
      // Still respect minimum loading time even with no images
      setTimeout(() => setLoaded(true), minLoadTime);
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;
    let hasTimedOut = false;

    // Create timeout promise
    const timeoutPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        if (!hasTimedOut) {
          console.warn(`Image preloading timeout reached (${timeout}ms)`);
          hasTimedOut = true;
          resolve();
        }
      }, timeout);
    });

    // Create image loading promises
    const imagePromises = images.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // Set loading priority for critical images
        if (index < 3) {
          (img as any).fetchPriority = 'high';
        }
        
        const handleLoad = () => {
          if (!hasTimedOut) {
            loadedCount++;
            setProgress(Math.min((loadedCount / totalImages) * 100, 99));
          }
          resolve();
        };

        const handleError = () => {
          console.warn(`Failed to load image: ${src}`);
          if (!hasTimedOut) {
            loadedCount++;
            setProgress(Math.min((loadedCount / totalImages) * 100, 99));
          }
          resolve();
        };

        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleError, { once: true });
        
        // Start loading immediately
        img.src = src;
      });
    });

    // Wait for all images or timeout, but respect minimum loading time
    Promise.race([
      Promise.all(imagePromises),
      timeoutPromise
    ]).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setProgress(100);
      
      setTimeout(() => {
        setLoaded(true);
      }, remainingTime);
    });

  }, [images, timeout, minLoadTime, startTime]);

  return { loaded, progress };
};