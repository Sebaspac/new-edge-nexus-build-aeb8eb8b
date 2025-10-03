import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AgentScrollSectionProps {
  children: React.ReactNode;
  videoSrc: string;
  gradient: string;
  imagePosition?: "left" | "right";
}

export const AgentScrollSection = ({
  children,
  videoSrc,
  gradient,
  imagePosition = "right",
}: AgentScrollSectionProps) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // On mobile: Image fades out and text fades in as you scroll
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.9]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  if (!isMobile) {
    // Desktop: Normal grid layout
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
        className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16"
      >
        {imagePosition === "left" && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              },
            }}
            className="sticky top-24 order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-full h-96 ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
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
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              },
            }}
            className="sticky top-24"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-full h-96 ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Mobile: Scroll-based animation
  return (
    <div ref={containerRef} className="relative min-h-[150vh] pb-12">
      {/* Image - Fixed, fades out on scroll */}
      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        className="sticky top-20 mb-8 z-10"
      >
        <div
          className={`w-full h-72 ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden mx-auto`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>

      {/* Text Content - Fades in on scroll */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
        }}
        className="relative z-20 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
      >
        {children}
      </motion.div>
    </div>
  );
};
