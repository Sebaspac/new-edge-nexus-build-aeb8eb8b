import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceScrollSectionProps {
  children: React.ReactNode;
  gradient: string;
  imagePosition?: "left" | "right";
  videoSrc?: string;
  icon?: LucideIcon;
}

export const ServiceScrollSection = ({
  children,
  gradient,
  imagePosition = "right",
  videoSrc,
  icon: Icon,
}: ServiceScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations for mobile - Optimized
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  const isEven = imagePosition === "right";

  return (
    <>
      {/* Mobile/Tablet: Stack Layout with Scroll Effect */}
      <div ref={sectionRef} className="lg:hidden space-y-4 pb-6 relative">
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
            className={`w-full h-64 sm:h-80 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
          >
            {videoSrc ? (
              <>
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
              </>
            ) : Icon ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Icon className="w-32 h-32 sm:w-40 sm:h-40 text-white drop-shadow-2xl relative z-10" />
              </>
            ) : null}
          </div>
        </motion.div>

        {/* Text Content Below - appears as image fades */}
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
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
        className="hidden lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start"
      >
        {/* Image Left */}
        {!isEven && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              },
            }}
            className="sticky top-24 order-2 lg:order-1"
          >
            <div
              className={`w-full h-96 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-105`}
            >
              {videoSrc ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </>
              ) : Icon ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Icon className="w-40 h-40 text-white drop-shadow-2xl" />
                </>
              ) : null}
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className={!isEven ? "order-1 lg:order-2" : ""}>
          {children}
        </div>

        {/* Image Right */}
        {isEven && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              },
            }}
            className="sticky top-24"
          >
            <div
              className={`w-full h-96 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-105`}
            >
              {videoSrc ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </>
              ) : Icon ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Icon className="w-40 h-40 text-white drop-shadow-2xl" />
                </>
              ) : null}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
