"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent) => {
    const halfWidth = (event.target as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex flex-wrap gap-px", className)}>
      {items.map((item, idx) => (
        <div
          className="relative group flex-1 min-w-[200px]"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-xl bg-black z-50 shadow-xl px-5 py-3"
              >
                <div className="absolute inset-x-4 z-30 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px" />
                <div className="absolute left-4 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px" />
                <p className="text-white font-bold text-sm">{item.name}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="bg-white p-6 sm:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-300 h-full"
          >
            <span className="text-xs font-mono text-black/20">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h4 className="text-black font-bold mt-2 text-sm">{item.name}</h4>
            <p className="text-black/40 text-xs mt-2 leading-relaxed whitespace-normal">
              {item.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
