import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, LineChart, PieChart, Bell, AlertTriangle, Check, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export const TrackingAnalyticsAnimation = () => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, label: "Data-Audit", checked: false },
    { id: 2, label: "Dashboard", checked: false },
    { id: 3, label: "Reporting", checked: false },
    { id: 4, label: "KI-Analyse", checked: false },
  ]);
  const [activeDeliverables, setActiveDeliverables] = useState<number[]>([]);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  const deliverables = [
    { icon: PieChart, label: "Dashboard" },
    { icon: LineChart, label: "Reports" },
    { icon: Bell, label: "Alerts" },
    { icon: TrendingUp, label: "Forecasting" },
  ];

  const problems = [
    { label: "Isolierte Dashboards" },
    { label: "Keine Insights" },
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

    const dataInterval = setInterval(() => {
      setDataPoints((prev) => {
        if (prev.length >= 6) return [0];
        return [...prev, prev.length];
      });
    }, 600);

    return () => {
      clearInterval(checkInterval);
      clearInterval(deliverableInterval);
      clearInterval(dataInterval);
    };
  }, []);

  // Generate chart bar heights
  const barHeights = [65, 45, 80, 55, 70, 40];

  return (
    <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-orange-950/90 via-yellow-900/80 to-amber-900/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-orange-500/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
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

      {/* Central Hub with Animated Chart */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 sm:-inset-12 rounded-full border-2 border-dashed border-orange-400/40"
          />

          {/* Inner Ring with animated bars */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 sm:-inset-8 rounded-full border border-amber-400/50"
          />

          {/* Animated Data Bars around core */}
          <div className="absolute -inset-10 sm:-inset-14 flex items-end justify-center gap-1">
            {barHeights.map((height, idx) => (
              <motion.div
                key={idx}
                className="w-1.5 sm:w-2 rounded-t-sm"
                style={{
                  background: `linear-gradient(to top, #fb923c, #fbbf24)`,
                }}
                initial={{ height: 0 }}
                animate={{
                  height: dataPoints.includes(idx) ? `${height * 0.4}px` : 0,
                  opacity: dataPoints.includes(idx) ? 1 : 0.3,
                }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              />
            ))}
          </div>

          {/* Core */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 146, 60, 0.4)",
                "0 0 40px rgba(251, 191, 36, 0.6)",
                "0 0 20px rgba(251, 146, 60, 0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center"
          >
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                ? "bg-orange-500/20 border border-orange-500/40"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <motion.div
              animate={item.checked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ${
                item.checked ? "bg-orange-500" : "bg-white/20"
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
                    ? "bg-gradient-to-br from-orange-500 to-amber-500"
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
                    ? "text-orange-300"
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
        className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5"
      >
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400"
        />
        <span className="text-[10px] sm:text-xs text-gray-200 font-medium">
          Daten werden analysiert
        </span>
      </motion.div>
    </div>
  );
};
