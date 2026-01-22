import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { LazyVideo } from "@/components/LazyVideo";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { useIsMobile } from "@/hooks/use-mobile";

interface AgentScrollSectionProps {
  children: React.ReactNode;
  videoSrc: string;
  gradient: string;
  imagePosition?: "left" | "right";
}

const AgentScrollSectionComponent = ({
  children,
  videoSrc,
  gradient,
  imagePosition = "right",
}: AgentScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = useOptimizedAnimation();
  const isMobile = useIsMobile();
  
  // Scroll-based animations for text fade-in
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Text content fades in as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <>
      {/* Mobile/Tablet: Simple Stack Layout */}
      <div className="lg:hidden space-y-6 pb-12 relative">
        {/* Video Container */}
        <div className={`w-full h-64 sm:h-80 ${gradient} rounded-none flex items-center justify-center shadow-2xl relative overflow-hidden`}>
          <LazyVideo
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Text Content Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20"
        >
          {children}
        </motion.div>
      </div>

      {/* Desktop: Sticky Video with Scrolling Text */}
      <div 
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ minHeight: '150vh' }}
      >
        <div className={`flex ${imagePosition === "left" ? "flex-row-reverse" : "flex-row"} gap-16`}>
          {/* Scrolling Text Content */}
          <motion.div 
            style={{ opacity: isMobile ? 1 : textOpacity }}
            className="w-1/2 pt-24 pb-48"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldAnimate ? 0.05 : 0,
                    delayChildren: shouldAnimate ? 0.03 : 0,
                  },
                },
              }}
            >
              {children}
            </motion.div>
          </motion.div>

          {/* Sticky Video - stays fixed while text scrolls */}
          <div className="w-1/2 relative">
            <div className="sticky top-24 h-[calc(100vh-8rem)]">
              <div className={`w-full h-full ${gradient} rounded-none flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                <LazyVideo
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AgentScrollSection = memo(AgentScrollSectionComponent);
