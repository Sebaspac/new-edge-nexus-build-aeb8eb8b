import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Palette, PenTool, Droplets, Type, Layout, BookOpen, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

export const BrandIdentityAnimation = () => {
  const [activeElements, setActiveElements] = useState<number[]>([]);
  const [colorRotation, setColorRotation] = useState(0);
  const [activeDeliverables, setActiveDeliverables] = useState<number[]>([]);

  const designElements = [
    { icon: PenTool, label: "Logo-System", status: "Erstellt" },
    { icon: Droplets, label: "Farb-System", status: "Definiert" },
    { icon: Type, label: "Typografie", status: "Ausgewählt" },
  ];

  const deliverables = [
    { icon: PenTool, label: "Logo" },
    { icon: Droplets, label: "Farben" },
    { icon: Type, label: "Typo" },
    { icon: Layout, label: "UX/UI" },
    { icon: Sparkles, label: "Visuals" },
    { icon: BookOpen, label: "Brand Book" },
    { icon: MessageSquare, label: "Voice & Tone" },
  ];

  useEffect(() => {
    // Design elements animation - slower
    const elementsInterval = setInterval(() => {
      setActiveElements(prev => {
        if (prev.length >= 3) return [];
        return [...prev, prev.length];
      });
    }, 2200);

    // Color rotation - slower
    const colorInterval = setInterval(() => {
      setColorRotation(prev => (prev + 15) % 360);
    }, 150);

    // Deliverables animation - slower
    const deliverableInterval = setInterval(() => {
      setActiveDeliverables(prev => {
        if (prev.length >= 7) return [];
        return [...prev, prev.length];
      });
    }, 1400);

    return () => {
      clearInterval(elementsInterval);
      clearInterval(colorInterval);
      clearInterval(deliverableInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#a855f7]/10 via-[#6366f1]/5 to-white border border-[#a855f7]/30">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Design Elements - Left */}
      <div className="absolute left-4 md:left-8 top-1/4 space-y-3">
        <AnimatePresence>
          {designElements.map((element, idx) => {
            const Icon = element.icon;
            const isActive = activeElements.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0.3, x: -10, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/90 backdrop-blur-sm border border-[#a855f7]/30 shadow-lg' 
                    : 'bg-white/40 border border-gray-200/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#a855f7] to-[#6366f1]' 
                    : 'bg-gray-200'
                }`}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div>
                  <p className={`text-xs font-semibold ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                    {element.label}
                  </p>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-green-600 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {element.status}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Rotating Color Ring */}
        <motion.div
          animate={{ rotate: colorRotation }}
          className="absolute w-36 h-36 md:w-44 md:h-44 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full"
          style={{
            background: `conic-gradient(from ${colorRotation}deg, #6366f1, #a855f7, #ec4899, #f97316, #eab308, #22c55e, #06b6d4, #6366f1)`,
            opacity: 0.3,
          }}
        />
        
        {/* Inner Rings - slower */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-28 h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#a855f7]/30" />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-20 h-20 md:w-28 md:h-28 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <div className="absolute inset-0 rounded-full border border-[#6366f1]/40" />
        </motion.div>

        {/* Center Palette Icon - slower pulse */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#a855f7]/30"
        >
          <Palette className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </motion.div>
      </div>

      {/* Status Indicators - Right */}
      <div className="absolute right-4 md:right-8 top-1/4 space-y-3">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-sm border border-[#a855f7]/20 rounded-xl p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <motion.span 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-amber-500"
            />
            <span className="text-xs font-medium text-gray-700">Brand Book</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">In Erstellung...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/90 backdrop-blur-sm border border-green-500/20 rounded-xl p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            <span className="text-xs font-medium text-gray-700">Voice & Tone</span>
          </div>
          <p className="text-[10px] text-green-600 mt-1">Definiert ✓</p>
        </motion.div>
      </div>

      {/* Deliverables - Bottom */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 flex-wrap justify-center max-w-[90%]">
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
                className={`flex flex-col items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-xl transition-colors duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/20 border border-[#a855f7]/40' 
                    : 'bg-gray-100/50 border border-gray-200/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? 'text-[#a855f7]' : 'text-gray-400'}`} />
                <span className={`text-[9px] md:text-[10px] font-medium ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
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
        className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-[#a855f7]/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
      >
        <motion.span 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]"
        />
        <span className="text-xs font-medium text-gray-700">Designsystem wird aufgebaut</span>
      </motion.div>

      {/* Connecting Lines to Center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {activeDeliverables.slice(0, 3).map((_, idx) => (
          <motion.line
            key={idx}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            x1="50%"
            y1="50%"
            x2={`${15 + idx * 5}%`}
            y2="75%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>
    </div>
  );
};
