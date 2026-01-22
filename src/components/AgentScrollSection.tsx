import { motion } from "framer-motion";
import { useRef, memo } from "react";
import { LazyVideo } from "@/components/LazyVideo";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

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

      {/* Desktop: True Sticky Video with Scrolling Text */}
      <div 
        ref={sectionRef}
        className="hidden lg:block relative"
      >
        <div className={`flex ${imagePosition === "left" ? "flex-row-reverse" : "flex-row"} gap-12`}>
          {/* Scrolling Text Content */}
          <div className="w-1/2">
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
          </div>

          {/* Sticky Video Container - stays fixed in viewport while text scrolls */}
          <div className="w-1/2">
            <div 
              className="sticky top-28"
              style={{ height: 'calc(100vh - 10rem)' }}
            >
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