import { useState, useEffect } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  timeout?: number;
}

export const useImagePreloader = ({ images, timeout = 10000 }: UseImagePreloaderOptions) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;
    const imagePromises: Promise<void>[] = [];

    // Create timeout promise
    const timeoutPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        console.warn('Image preloading timeout reached');
        resolve();
      }, timeout);
    });

    images.forEach((src) => {
      const imagePromise = new Promise<void>((resolve) => {
        const img = new Image();
        
        const handleLoad = () => {
          loadedCount++;
          setProgress((loadedCount / totalImages) * 100);
          resolve();
        };

        const handleError = () => {
          console.warn(`Failed to load image: ${src}`);
          loadedCount++;
          setProgress((loadedCount / totalImages) * 100);
          resolve();
        };

        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
        
        // Start loading
        img.src = src;
      });

      imagePromises.push(imagePromise);
    });

    // Wait for all images or timeout
    Promise.race([
      Promise.all(imagePromises),
      timeoutPromise
    ]).then(() => {
      setLoaded(true);
    });

  }, [images, timeout]);

  return { loaded, progress };
};