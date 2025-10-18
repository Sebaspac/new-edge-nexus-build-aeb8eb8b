import { motion, useScroll, useTransform } from "framer-motion";
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
  const { shouldAnimate, whileHover } = useOptimizedAnimation();
  
  // Scroll-based animations for mobile
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <>
      {/* Mobile/Tablet: Stack Layout with Scroll Effect */}
      <div ref={sectionRef} className="lg:hidden space-y-6 pb-12 relative">
        {/* Image with Scroll Effect */}
        <motion.div
          style={{
            opacity: imageOpacity,
            scale: imageScale,
            y: imageY,
          }}
          className="sticky top-20 z-10"
        >
          <div
            className={`w-full h-64 sm:h-80 ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
          >
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
        </motion.div>

        {/* Text Content Below - appears as image fades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 min-h-screen"
        >
          {children}
        </motion.div>
      </div>

      {/* Desktop: Grid Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: shouldAnimate ? 0.08 : 0,
                delayChildren: shouldAnimate ? 0.05 : 0,
              },
            },
          }}
        className="hidden lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16"
      >
        {imagePosition === "left" && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: shouldAnimate ? 0.6 : 0 },
              },
            }}
            className="sticky top-24 order-2 lg:order-1"
          >
            <motion.div
              {...(shouldAnimate && whileHover)}
              className={`w-full h-96 ${gradient} rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden transition-transform duration-200`}
            >
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
            </motion.div>
          </motion.div>
        )}

        <div className={imagePosition === "left" ? "order-1 lg:order-2" : ""}>
          {children}
        </div>

        {imagePosition === "right" && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: shouldAnimate ? 0.6 : 0 },
              },
            }}
            className="sticky top-24"
          >
            <motion.div
              {...(shouldAnimate && whileHover)}
              className={`w-full h-96 ${gradient} rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden transition-transform duration-200`}
            >
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
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export const AgentScrollSection = memo(AgentScrollSectionComponent);
