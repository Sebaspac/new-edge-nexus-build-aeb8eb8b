import React, { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServiceDeliverable {
  title: string;
  description: string;
}

interface ServiceData {
  number: string;
  title: string;
  problem: string;
  solution: string;
  animation: ReactNode;
  deliverables: ServiceDeliverable[];
}

interface StudioScrollSectionsProps {
  services: ServiceData[];
}

export function StudioScrollSections({ services }: StudioScrollSectionsProps) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active index (0, 1, 2)
  const numSlides = services.length;

  if (isMobile) {
    return <MobileServices services={services} />;
  }

  return (
    <div ref={containerRef} style={{ height: `${numSlides * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {services.map((service, idx) => (
          <SlidePanel
            key={service.number}
            service={service}
            index={idx}
            total={numSlides}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Dot navigation */}
        <DotNav total={numSlides} scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

/* ─── Slide Panel ─── */
function SlidePanel({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: ServiceData;
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  // Each slide occupies 1/total of the scroll range
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;

  // Opacity: fade in at start, full during middle, fade out at end
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - segmentSize * 0.3),
      start,
      end - segmentSize * 0.2,
      Math.min(1, end + segmentSize * 0.1),
    ],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, index === total - 1 ? 1 : 0]
  );

  // Left half: slides from bottom (100%) to center (0%) to top (-100%)
  const leftY = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - segmentSize * 0.3),
      start,
      end - segmentSize * 0.2,
      Math.min(1, end + segmentSize * 0.1),
    ],
    index === 0 ? ["0%", "0%", "0%", "100%"] : ["100%", "0%", "0%", index === total - 1 ? "0%" : "-100%"]
  );

  // Right half: slides from top (-100%) to center (0%) to bottom (100%)
  const rightY = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - segmentSize * 0.3),
      start,
      end - segmentSize * 0.2,
      Math.min(1, end + segmentSize * 0.1),
    ],
    index === 0 ? ["0%", "0%", "0%", "-100%"] : ["-100%", "0%", "0%", index === total - 1 ? "0%" : "100%"]
  );

  // Deliverables opacity (show slightly after slide is active)
  const deliverablesOpacity = useTransform(
    scrollYProgress,
    [start + segmentSize * 0.15, start + segmentSize * 0.35, end - segmentSize * 0.3, end - segmentSize * 0.1],
    [0, 1, 1, 0]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left Half */}
      <motion.div
        style={{ y: leftY, opacity }}
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-auto"
      >
        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20">
          {/* Decorative number */}
          <span
            className="absolute top-8 right-8 text-[180px] lg:text-[240px] font-black leading-none select-none pointer-events-none"
            style={{
              WebkitTextStroke: "1px rgba(99,102,241,0.12)",
              WebkitTextFillColor: "transparent",
            }}
          >
            {service.number}
          </span>

          <div className="relative z-10 max-w-lg">
            <span className="text-xs font-mono tracking-widest text-black/30 uppercase">
              Service {service.number}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-3 leading-[1.05]">
              {service.title}
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-red-500/70 uppercase mb-3">
                  Das Problem
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">{service.problem}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest text-indigo-600/70 uppercase mb-3">
                  Unsere Lösung
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">{service.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        style={{ y: rightY, opacity }}
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-auto"
      >
        <div className="h-full flex items-center justify-center px-8 lg:px-16">
          <div className="w-full max-w-lg">{service.animation}</div>
        </div>
      </motion.div>

      {/* Deliverables overlay at bottom */}
      <motion.div
        style={{ opacity: deliverablesOpacity }}
        className="absolute bottom-0 left-0 right-0 pointer-events-auto"
      >
        <div className="grid grid-cols-4 gap-px bg-black/5">
          {service.deliverables.map((d, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-sm p-5 lg:p-6"
            >
              <span className="text-[10px] font-mono text-black/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-black font-bold mt-1 text-xs lg:text-sm">{d.title}</h4>
              <p className="text-black/40 text-[10px] lg:text-xs mt-1 leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Dot Navigation ─── */
function DotNav({
  total,
  scrollYProgress,
}: {
  total: number;
  scrollYProgress: any;
}) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <DotItem key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function DotItem({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;

  const scale = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    [1, 1.5, 1.5, 1]
  );

  const dotOpacity = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    [0.2, 1, 1, 0.2]
  );

  return (
    <motion.div
      style={{ scale, opacity: dotOpacity }}
      className="w-2 h-2 rounded-full bg-black"
    />
  );
}

/* ─── Mobile Fallback ─── */
function MobileServices({ services }: { services: ServiceData[] }) {
  return (
    <div className="bg-white">
      {services.map((service, idx) => (
        <section key={service.number} className="py-20 px-6 border-b border-black/5 last:border-b-0">
          <span className="text-xs font-mono tracking-widest text-black/30 uppercase">
            Service {service.number}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black mt-3 leading-[1.05]">
            {service.title}
          </h2>

          <div className="mt-8">{service.animation}</div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-red-500/70 uppercase mb-2">Das Problem</h3>
              <p className="text-black/60 text-sm leading-relaxed">{service.problem}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest text-indigo-600/70 uppercase mb-2">Unsere Lösung</h3>
              <p className="text-black/60 text-sm leading-relaxed">{service.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px mt-10 bg-black/5">
            {service.deliverables.map((d, i) => (
              <div key={i} className="bg-white p-4">
                <span className="text-[10px] font-mono text-black/20">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-black font-bold mt-1 text-xs">{d.title}</h4>
                <p className="text-black/40 text-[10px] mt-1 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
