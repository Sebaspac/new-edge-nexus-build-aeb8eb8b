import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageCircle, Heart, Share2, AlertTriangle, Check, Calendar, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export const SocialMediaAnimation = () => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, label: "Planung", checked: false },
    { id: 2, label: "Publishing", checked: false },
    { id: 3, label: "Community", checked: false },
    { id: 4, label: "Analyse", checked: false },
  ]);
  const [activeDeliverables, setActiveDeliverables] = useState<number[]>([]);
  const [pulseNodes, setPulseNodes] = useState<number[]>([]);

  const deliverables = [
    { icon: Users, label: "Community" },
    { icon: Calendar, label: "Content-Plan" },
    { icon: BarChart3, label: "Reporting" },
    { icon: Share2, label: "Creator" },
  ];

  const problems = [
    { label: "Keine Redaktionslogik" },
    { label: "Unregelm. Posts" },
  ];

  // Network nodes positions
  const nodes = [
    { x: -50, y: -40 },
    { x: 50, y: -35 },
    { x: -45, y: 40 },
    { x: 55, y: 45 },
    { x: 0, y: -55 },
    { x: 0, y: 55 },
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

    const pulseInterval = setInterval(() => {
      setPulseNodes((prev) => {
        const next = (prev[0] ?? -1) + 1;
        return [next % nodes.length];
      });
    }, 1200);

    return () => {
      clearInterval(checkInterval);
      clearInterval(deliverableInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-950/90 via-cyan-900/80 to-blue-900/90 rounded-3xl overflow-hidden border border-blue-500/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Problems - Left Side */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-3 z-10">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.4 + 0.5, duration: 0.8 }}
            className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-lg px-3 py-2"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-xs text-red-300 font-medium whitespace-nowrap">
              {problem.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Central Hub with Network */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Connection Lines */}
        <svg className="absolute -inset-16 w-32 h-32" style={{ left: '-64px', top: '-64px' }}>
          {nodes.map((node, idx) => (
            <motion.line
              key={idx}
              x1="64"
              y1="64"
              x2={64 + node.x}
              y2={64 + node.y}
              stroke={pulseNodes.includes(idx) ? "#06b6d4" : "#3b82f6"}
              strokeWidth={pulseNodes.includes(idx) ? 2 : 1}
              strokeOpacity={pulseNodes.includes(idx) ? 0.8 : 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
            />
          ))}
        </svg>

        {/* Network Nodes */}
        {nodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: pulseNodes.includes(idx) ? 1.3 : 1,
            }}
            transition={{ delay: idx * 0.2 + 0.5, duration: 0.5 }}
            className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${
              pulseNodes.includes(idx) 
                ? "bg-cyan-400 shadow-lg shadow-cyan-400/50" 
                : "bg-blue-500/60"
            }`}
            style={{
              left: `calc(50% + ${node.x}px - 8px)`,
              top: `calc(50% + ${node.y}px - 8px)`,
            }}
          >
            {pulseNodes.includes(idx) && (
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-cyan-400"
              />
            )}
          </motion.div>
        ))}

        {/* Core */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.4)",
                "0 0 40px rgba(6, 182, 212, 0.6)",
                "0 0 20px rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Floating Engagement Icons */}
        <motion.div
          animate={{ y: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-8 -right-8"
        >
          <Heart className="w-5 h-5 text-pink-400" />
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -bottom-8 -left-8"
        >
          <MessageCircle className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </div>

      {/* Solution Checklist - Right Side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2 z-10">
        {checklist.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.3 + 0.3, duration: 0.6 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-500 ${
              item.checked
                ? "bg-cyan-500/20 border border-cyan-500/40"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <motion.div
              animate={item.checked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
              className={`w-4 h-4 rounded-full flex items-center justify-center ${
                item.checked ? "bg-cyan-500" : "bg-white/20"
              }`}
            >
              {item.checked && <Check className="w-3 h-3 text-white" />}
            </motion.div>
            <span
              className={`text-xs font-medium whitespace-nowrap ${
                item.checked ? "text-white" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Deliverables - Bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
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
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  activeDeliverables.includes(idx)
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                    : "bg-white/10"
                }`}
              >
                <del.icon
                  className={`w-5 h-5 ${
                    activeDeliverables.includes(idx)
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium ${
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
        className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5"
      >
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-cyan-400"
        />
        <span className="text-xs text-gray-200 font-medium">
          Social Media System
        </span>
      </motion.div>
    </div>
  );
};
