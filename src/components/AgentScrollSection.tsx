import { motion } from "framer-motion";
import { memo } from "react";
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

      {/* Desktop: Sticky Video with Scrolling Text - Using min-height to ensure scroll distance */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12" style={{ minHeight: '120vh' }}>
        {/* Text Content - scrolls normally */}
        <div className={`${imagePosition === "left" ? "order-2" : "order-1"}`}>
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

        {/* Sticky Video Container - stays fixed while text scrolls past */}
        <div className={`${imagePosition === "left" ? "order-1" : "order-2"} relative`}>
          <div 
            className="sticky top-24"
            style={{ height: 'calc(100vh - 8rem)' }}
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
    </>
  );
};

export const AgentScrollSection = memo(AgentScrollSectionComponent);