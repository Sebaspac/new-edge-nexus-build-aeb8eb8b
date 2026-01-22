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
      <div className="md:hidden space-y-6 pb-8 relative">
        {/* Video Container - 9:16 centered */}
        <div className="w-full flex justify-center">
          <div 
            className={`w-40 sm:w-48 ${gradient} rounded-none shadow-2xl relative overflow-hidden`}
            style={{ aspectRatio: '9/16' }}
          >
            <LazyVideo
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              aspectRatio="9/16"
              width={540}
              height={960}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
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

      {/* Desktop: Asymmetric Grid with Sticky Video */}
      <div 
        className={`hidden md:grid gap-8 lg:gap-16 ${
          imagePosition === "left" 
            ? "md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]" 
            : "md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]"
        }`}
      >
        {/* Text Content - scrolls normally with bottom padding for runway */}
        <div className={`${imagePosition === "left" ? "order-2" : "order-1"} pb-[40vh]`}>
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

        {/* Sticky Video Container - 9:16 format, stays fixed while text scrolls */}
        <div className={`${imagePosition === "left" ? "order-1" : "order-2"} relative`}>
          <div className="sticky top-28">
            <div className="flex items-start justify-center">
              <div 
                className={`w-full max-w-[280px] lg:max-w-[320px] ${gradient} rounded-none shadow-2xl relative overflow-hidden`}
                style={{ aspectRatio: '9/16' }}
              >
                <LazyVideo
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  aspectRatio="9/16"
                  width={540}
                  height={960}
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
