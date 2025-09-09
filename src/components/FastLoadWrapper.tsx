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
    const minLoadTime = 100; // Ultra-fast minimum loading time
    
    if (totalImages === 0) {
      setTimeout(() => setIsLoaded(true), minLoadTime);
      return;
    }

    // Aggressive image loading with very short timeouts
    const imagePromises = CRITICAL_IMAGES.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // High priority only for first image
        if (index === 0) {
          (img as any).fetchPriority = 'high';
        }

        const handleComplete = () => {
          loadedImages++;
          const currentProgress = Math.min((loadedImages / totalImages) * 100, 100);
          setProgress(currentProgress);
          
          if (loadedImages === totalImages) {
            setProgress(100);
            
            // Ultra-short minimum loading time
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
        
        // Very short timeout for individual images (250ms)
        setTimeout(handleComplete, 250);
        
        img.src = src;
      });
    });

    // Ultra-short global timeout (800ms max)
    const globalTimeout = setTimeout(() => {
      setProgress(100);
      setIsLoaded(true);
    }, 800);

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