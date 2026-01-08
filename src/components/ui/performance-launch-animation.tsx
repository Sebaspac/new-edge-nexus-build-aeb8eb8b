import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, Target, Zap, AlertTriangle, Check, BarChart3, MousePointerClick } from "lucide-react";
import { useState, useEffect } from "react";

export const PerformanceLaunchAnimation = () => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, label: "Kampagne", checked: false },
    { id: 2, label: "Creatives", checked: false },
    { id: 3, label: "Testing", checked: false },
    { id: 4, label: "Skalierung", checked: false },
  ]);
  const [activeDeliverables, setActiveDeliverables] = useState<number[]>([]);
  const [launchPhase, setLaunchPhase] = useState(0);

  const deliverables = [
    { icon: Rocket, label: "Launch" },
    { icon: Target, label: "Paid Ads" },
    { icon: MousePointerClick, label: "Conversion" },
    { icon: BarChart3, label: "Analytics" },
  ];

  const problems = [
    { label: "Keine Strategie" },
    { label: "Ads nicht optimiert" },
  ];

  useEffect(() => {
    const checkInterval = setInterval(() => {
      setCurrentCheck((prev) => {
        const next = prev + 1;
        if (next <= checklist.length) {
          setChecklist((list) =>
            list.map((item, idx) =>
              idx < next ? { ...item, checked: true } : item
            )
          );
        }
        return next > checklist.length ? 0 : next;
      });
    }, 2400);

    const deliverableInterval = setInterval(() => {
      setActiveDeliverables((prev) => {
        if (prev.length >= deliverables.length) return [0];
        return [...prev, prev.length];
      });
    }, 1600);

    const launchInterval = setInterval(() => {
      setLaunchPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(checkInterval);
      clearInterval(deliverableInterval);
      clearInterval(launchInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-950/90 via-cyan-900/80 to-blue-900/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-500/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Problems - Left Side */}
      <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 space-y-2 sm:space-y-3 z-10">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.4 + 0.5, duration: 0.8 }}
            className="flex items-center gap-1.5 sm:gap-2 bg-red-500/20 border border-red-500/40 rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2"
          >
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs text-red-300 font-medium whitespace-nowrap">
              {problem.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Central Hub with Rocket */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Rising Particles */}
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 40, opacity: 0, x: (idx - 2.5) * 12 }}
            animate={{
              y: [-20, -60],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.3,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2"
          >
            <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
          </motion.div>
        ))}

        {/* Orbital Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-10 sm:-inset-14 rounded-full border-2 border-dashed border-blue-400/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-7 sm:-inset-10 rounded-full border border-cyan-400/40"
        />

        {/* Graph Lines */}
        <svg className="absolute -inset-10 sm:-inset-12 w-20 h-20 sm:w-24 sm:h-24" style={{ left: '-40px', top: '-40px' }}>
          <motion.path
            d="M 10 65 Q 25 55 40 40 T 70 15"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Core Rocket */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            y: launchPhase === 3 ? -10 : 0,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.4)",
                "0 0 50px rgba(6, 182, 212, 0.7)",
                "0 0 20px rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: launchPhase === 3 ? -45 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Boost Flame */}
          <AnimatePresence>
            {launchPhase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ 
                    height: [8, 16, 8],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  className="w-3 sm:w-4 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-b-full"
                  style={{ height: 12 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* KPI Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -right-12 sm:-right-16 -top-6 sm:-top-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1"
          >
            <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
            <span className="text-[8px] sm:text-[10px] text-green-300 font-bold">+127%</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Solution Checklist - Right Side */}
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 space-y-1.5 sm:space-y-2 z-10">
        {checklist.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.3 + 0.3, duration: 0.6 }}
            className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg transition-all duration-500 ${
              item.checked
                ? "bg-cyan-500/20 border border-cyan-500/40"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <motion.div
              animate={item.checked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ${
                item.checked ? "bg-cyan-500" : "bg-white/20"
              }`}
            >
              {item.checked && <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />}
            </motion.div>
            <span
              className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                item.checked ? "text-white" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Deliverables - Bottom */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4">
        <AnimatePresence>
          {deliverables.map((del, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{
                opacity: activeDeliverables.includes(idx) ? 1 : 0.3,
                y: activeDeliverables.includes(idx) ? 0 : 10,
                scale: activeDeliverables.includes(idx) ? 1 : 0.9,
              }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center gap-0.5 sm:gap-1"
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 ${
                  activeDeliverables.includes(idx)
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                    : "bg-white/10"
                }`}
              >
                <del.icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    activeDeliverables.includes(idx)
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <span
                className={`text-[8px] sm:text-[10px] font-medium ${
                  activeDeliverables.includes(idx)
                    ? "text-cyan-300"
                    : "text-gray-500"
                }`}
              >
                {del.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5"
      >
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400"
        />
        <span className="text-[10px] sm:text-xs text-gray-200 font-medium">
          Launch & Performance
        </span>
      </motion.div>
    </div>
  );
};
