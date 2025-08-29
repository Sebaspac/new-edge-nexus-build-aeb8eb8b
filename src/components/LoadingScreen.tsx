import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

interface LoadingScreenProps {
  progress: number;
}

export const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <OptimizedImage 
            src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" 
            alt="New Edge Logo" 
            className="h-8 w-8 mr-3" 
            priority 
            sizes="32px" 
          />
          <div className="text-3xl font-bold text-foreground">
            New Edge<span className="text-primary"></span>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="w-64 h-1 bg-surface rounded-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="h-full bg-gradient-primary rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      {/* Progress Text */}
      <motion.p 
        className="text-muted-foreground text-sm mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Lädt Assets... {Math.round(progress)}%
      </motion.p>

      {/* Floating orbs for visual interest */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          rotate: [360, 180, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  );
};