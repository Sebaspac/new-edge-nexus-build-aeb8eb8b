import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';
import { ALL_WEBSITE_IMAGES, CRITICAL_IMAGES, preloadImages } from '@/utils/performanceOptimizations';

interface FastLoadWrapperProps {
  children: React.ReactNode;
}

export const FastLoadWrapper: React.FC<FastLoadWrapperProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const preloadAllImagesAggressively = async () => {
      console.time('FastLoad: All website images');
      
      try {
        // Start with progress animation
        setProgress(20);
        
        // Preload critical images first (fast)
        const criticalPromise = preloadImages(CRITICAL_IMAGES);
        await Promise.race([
          criticalPromise,
          new Promise(resolve => setTimeout(resolve, 400))
        ]);
        
        setProgress(60);
        
        // Continue with remaining images
        const remainingImages = ALL_WEBSITE_IMAGES.filter(img => !CRITICAL_IMAGES.includes(img));
        const allImagesPromise = preloadImages(remainingImages);
        
        await Promise.race([
          allImagesPromise,
          new Promise(resolve => setTimeout(resolve, 800))
        ]);
        
        setProgress(90);
        
        // Minimum load time for smooth UX (200ms)
        await new Promise(resolve => setTimeout(resolve, 200));
        
        console.timeEnd('FastLoad: All website images');
        setProgress(100);
        
        // Quick transition to content
        setTimeout(() => {
          setIsLoaded(true);
        }, 150);
        
      } catch (error) {
        console.warn('FastLoad: Image preloading failed, continuing anyway', error);
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      }
    };

    preloadAllImagesAggressively();
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