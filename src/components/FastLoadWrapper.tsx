import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardPreloadScreen } from './HardPreloadScreen';
import { initializeHardPreload, type PreloadProgress, type PreloadResult } from '@/utils/hardPreloader';

interface FastLoadWrapperProps {
  children: React.ReactNode;
}

export const FastLoadWrapper: React.FC<FastLoadWrapperProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState<PreloadProgress>({
    loaded: 0,
    total: 0,
    percentage: 0,
    failed: 0,
    skipped: 0,
    phase: 'initializing'
  });
  const [result, setResult] = useState<PreloadResult>();

  useEffect(() => {
    const startHardPreload = async () => {
      console.time('🚀 Hard Preload Wrapper');
      
      try {
        // Initialize hard preload with progress callback
        const preloadResult = await initializeHardPreload((currentProgress) => {
          setProgress(currentProgress);
        });

        setResult(preloadResult);
        
        // Brief pause to show completion state
        if (preloadResult.success) {
          await new Promise(resolve => setTimeout(resolve, 800));
        } else {
          // Even if preload failed, show the site after a brief delay
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        console.timeEnd('🚀 Hard Preload Wrapper');
        
        // Unlock the website
        setIsLoaded(true);
        
      } catch (error) {
        console.error('❌ Hard preload wrapper failed:', error);
        
        // Fallback: show site after a timeout even if preloading fails
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000);
      }
    };

    startHardPreload();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <HardPreloadScreen progress={progress} result={result} />
        )}
      </AnimatePresence>
      
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.25, 0, 1] 
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};