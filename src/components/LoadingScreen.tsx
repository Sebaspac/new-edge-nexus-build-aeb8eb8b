import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

interface LoadingScreenProps {
  progress: number;
}

export const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
      exit={{ 
        opacity: 0, 
        scale: 0.95,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {/* Logo */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <div 
            className="h-8 w-8 mr-3 bg-gradient-primary rounded-md flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, hsl(270, 91%, 65%), hsl(210, 100%, 60%))',
            }}
          >
            <div className="text-white font-bold text-sm">NE</div>
          </div>
          <div className="text-3xl font-bold text-foreground">
            New Edge<span className="text-primary">.</span>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="w-80 h-2 bg-surface rounded-full overflow-hidden border border-border/50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="h-full bg-gradient-primary rounded-full origin-left"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut",
            delay: progress === 100 ? 0.5 : 0 // Small delay when complete
          }}
        />
      </motion.div>

      {/* Progress Text */}
      <motion.p 
        className="text-muted-foreground text-sm mt-4 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {progress < 100 ? `Lädt Assets... ${Math.round(progress)}%` : 'Fertig!'}
      </motion.p>

      {/* Minimal floating elements for performance */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-accent/5 rounded-full blur-xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </motion.div>
  );
};