import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';
import { CRITICAL_IMAGES } from '@/utils/performanceOptimizations';

interface FastLoadWrapperProps {
  children: React.ReactNode;
}

export const FastLoadWrapper: React.FC<FastLoadWrapperProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let loadedImages = 0;
    const totalImages = CRITICAL_IMAGES.length;
    const minLoadTime = 800; // Minimum loading time

    if (totalImages === 0) {
      setTimeout(() => setIsLoaded(true), minLoadTime);
      return;
    }

    // Fast image preloading with optimized timeout
    const imagePromises = CRITICAL_IMAGES.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // High priority for first images
        if (index < 2) {
          (img as any).fetchPriority = 'high';
        }

        const handleComplete = () => {
          loadedImages++;
          const currentProgress = Math.min((loadedImages / totalImages) * 95, 95);
          setProgress(currentProgress);
          
          if (loadedImages === totalImages) {
            setProgress(100);
            
            // Ensure minimum loading time for smooth UX
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - elapsedTime);
            
            setTimeout(() => {
              setIsLoaded(true);
            }, remainingTime);
          }
          resolve();
        };

        img.onload = handleComplete;
        img.onerror = handleComplete;
        
        // Timeout for individual images (2 seconds)
        setTimeout(handleComplete, 2000);
        
        img.src = src;
      });
    });

    // Global timeout (4 seconds max)
    const globalTimeout = setTimeout(() => {
      setProgress(100);
      setIsLoaded(true);
    }, 4000);

    return () => {
      clearTimeout(globalTimeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <LoadingScreen progress={progress} />
        )}
      </AnimatePresence>
      
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};