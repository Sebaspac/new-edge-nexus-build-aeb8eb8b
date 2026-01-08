import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Target, AlertTriangle, CheckCircle2, Users, Map, Compass, Heart, Route } from "lucide-react";

interface ChecklistItem {
  id: number;
  label: string;
  checked: boolean;
}

export const BrandStrategyAnimation = () => {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: 1, label: "Marktanalyse", checked: false },
    { id: 2, label: "Positionierung definiert", checked: false },
    { id: 3, label: "Brand Core entwickelt", checked: false },
    { id: 4, label: "Roadmap erstellt", checked: false },
  ]);
  const [activeDeliverables, setActiveDeliverables] = useState<number[]>([]);

  const deliverables = [
    { icon: Users, label: "Personas" },
    { icon: Map, label: "Positioning Map" },
    { icon: Compass, label: "Differentiation" },
    { icon: Heart, label: "Brand Core" },
    { icon: Route, label: "Roadmap" },
  ];

  const problems = [
    { label: "Keine Positionierung", delay: 0.2 },
    { label: "Inkonsistente Kommunikation", delay: 0.5 },
  ];

  useEffect(() => {
    // Checklist animation - slower
    const checkInterval = setInterval(() => {
      setCurrentCheck(prev => {
        const next = (prev + 1) % 5;
        if (next > 0 && next <= 4) {
          setChecklist(list => 
            list.map((item, idx) => 
              idx === next - 1 ? { ...item, checked: true } : item
            )
          );
        }
        if (next === 0) {
          setChecklist(list => list.map(item => ({ ...item, checked: false })));
        }
        return next;
      });
    }, 2500);

    // Deliverables animation - slower
    const deliverableInterval = setInterval(() => {
      setActiveDeliverables(prev => {
        if (prev.length >= 5) return [];
        return [...prev, prev.length];
      });
    }, 1800);

    return () => {
      clearInterval(checkInterval);
      clearInterval(deliverableInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[240px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#6366f1]/10 via-[#a855f7]/5 to-white border border-[#6366f1]/30">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Problems Section - Left */}
      <div className="absolute left-2 md:left-8 top-1/4 space-y-1.5 md:space-y-3">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: problem.delay, duration: 0.5 }}
            className="flex items-center gap-1 md:gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-md md:rounded-lg px-1.5 md:px-3 py-1 md:py-2"
          >
            <AlertTriangle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500" />
            <span className="text-[8px] md:text-sm text-red-600 font-medium">{problem.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Rotating Rings - slower */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-16 h-16 md:w-40 md:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6366f1]/30" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-12 h-12 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <div className="absolute inset-0 rounded-full border border-[#a855f7]/40" />
        </motion.div>

        {/* Center Target Icon - slower pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative w-10 h-10 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg shadow-[#6366f1]/30"
        >
          <Target className="w-5 h-5 md:w-10 md:h-10 text-white" />
        </motion.div>

        {/* Orbiting Data Points - slower */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: i * 4 }}
            className="absolute w-16 h-16 md:w-40 md:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{ transformOrigin: "center center" }}
          >
            <motion.div 
              className="absolute w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              style={{ 
                top: 0, 
                left: '50%', 
                transform: 'translateX(-50%)' 
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Solution Checklist - Right */}
      <div className="absolute right-2 md:right-8 top-1/4 space-y-1.5 md:space-y-2">
        <div className="bg-white/80 backdrop-blur-sm border border-[#6366f1]/20 rounded-lg md:rounded-xl p-1.5 md:p-4 shadow-lg">
          <h4 className="text-[7px] md:text-xs font-bold text-[#6366f1] mb-1 md:mb-2 uppercase tracking-wide">Strategie-Prozess</h4>
          <div className="space-y-1 md:space-y-2">
            {checklist.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-1 md:gap-2"
              >
                <motion.div
                  animate={item.checked ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 
                    className={`w-2.5 h-2.5 md:w-4 md:h-4 transition-colors duration-300 ${
                      item.checked ? 'text-green-500' : 'text-gray-300'
                    }`} 
                  />
                </motion.div>
                <span className={`text-[8px] md:text-sm transition-colors duration-300 ${
                  item.checked ? 'text-gray-800 font-medium' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables - Bottom */}
      <div className="absolute bottom-1.5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-0.5 md:gap-3">
        <AnimatePresence>
          {deliverables.map((del, idx) => {
            const Icon = del.icon;
            const isActive = activeDeliverables.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.4, y: 10, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className={`flex flex-col items-center gap-0.5 px-1 md:px-3 py-0.5 md:py-2 rounded-md md:rounded-xl transition-colors duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/40' 
                    : 'bg-gray-100/50 border border-gray-200/50'
                }`}
              >
                <Icon className={`w-2.5 h-2.5 md:w-5 md:h-5 ${isActive ? 'text-[#6366f1]' : 'text-gray-400'}`} />
                <span className={`text-[6px] md:text-xs font-medium ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                  {del.label}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-1.5 md:top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-[#6366f1]/30 rounded-full px-1.5 md:px-4 py-0.5 md:py-2 flex items-center gap-1 md:gap-2 shadow-lg"
      >
        <motion.span 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        />
        <span className="text-[7px] md:text-xs font-medium text-gray-700">Strategische Roadmap wird erstellt</span>
      </motion.div>
    </div>
  );
};
