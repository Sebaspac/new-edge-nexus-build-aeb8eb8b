import React from 'react';
import { motion } from 'framer-motion';
import type { PreloadProgress, PreloadResult } from '@/utils/hardPreloader';

interface HardPreloadScreenProps {
  progress: PreloadProgress;
  result?: PreloadResult;
}

export const HardPreloadScreen: React.FC<HardPreloadScreenProps> = ({ 
  progress, 
  result 
}) => {
  const { loaded, total, percentage, failed, skipped, currentImage, phase } = progress;

  const getPhaseText = () => {
    switch (phase) {
      case 'initializing':
        return 'Initialisiere Bildlader...';
      case 'loading':
        return `Lade Bilder... (${loaded}/${total})`;
      case 'completed':
        return 'Ladevorgang abgeschlossen!';
      case 'failed':
        return 'Ladevorgang fehlgeschlagen';
      default:
        return 'Bereite Website vor...';
    }
  };

  const getProgressColor = () => {
    if (phase === 'failed') return 'bg-destructive';
    if (phase === 'completed') return 'bg-success';
    if (percentage > 80) return 'bg-primary';
    if (percentage > 50) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-md mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/assets/7081eb62-a5ae-4260-97c8-e5b31dc0040e.png"
            alt="New Edge Logo"
            className="w-16 h-16 mx-auto object-contain"
          />
        </motion.div>

        {/* Phase Text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold mb-2 text-foreground"
        >
          {getPhaseText()}
        </motion.h2>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mb-4"
        >
          <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
            {/* Progress Bar Fill */}
            <motion.div
              className={`h-full rounded-full ${getProgressColor()} relative overflow-hidden`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>
          
          {/* Percentage Text */}
          <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
            <span>{percentage}%</span>
            <span>{loaded} / {total}</span>
          </div>
        </motion.div>

        {/* Current Image Being Loaded */}
        {currentImage && phase === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mb-2 truncate max-w-full"
          >
            {currentImage.split('/').pop()}
          </motion.div>
        )}

        {/* Statistics */}
        {(failed > 0 || skipped > 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground space-y-1"
          >
            {failed > 0 && (
              <div className="text-destructive">
                ⚠️ {failed} Bilder fehlgeschlagen
              </div>
            )}
            {skipped > 0 && (
              <div className="text-warning">
                ⏭️ {skipped} Bilder übersprungen
              </div>
            )}
          </motion.div>
        )}

        {/* Completion Message */}
        {phase === 'completed' && result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-muted-foreground space-y-2"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-success">✅</span>
              <span>Alle Bilder erfolgreich geladen</span>
            </div>
            
            <div className="text-xs space-y-1">
              <div>Ladezeit: {(result.loadTimeMs / 1000).toFixed(1)}s</div>
              {result.cacheHitRate > 0 && (
                <div>Cache-Trefferquote: {(result.cacheHitRate * 100).toFixed(1)}%</div>
              )}
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {phase === 'failed' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-destructive text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span>❌</span>
              <span>Ladevorgang fehlgeschlagen</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Die Website wird trotzdem angezeigt
            </div>
          </motion.div>
        )}

        {/* Loading Animation Dots */}
        {phase === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex space-x-1 mt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Custom CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(300%) skewX(-12deg); }
        }
      `}</style>
    </motion.div>
  );
};