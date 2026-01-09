import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Cpu, Zap } from "lucide-react";

type StateType = "human" | "machine" | "fusion";

interface ContentState {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  icon: typeof Fingerprint;
}

const content: Record<StateType, ContentState> = {
  human: {
    title: "STUDIO",
    subtitle: "Branding, das skaliert – modular, maßgeschneidert, schnell",
    description: "Markenpositionierung, kreative Konzeption und emotionale Storytelling-Strategien, die menschliche Verbindungen schaffen.",
    tags: ["Strategie", "Kreativität", "Brand Identity"],
    color: "#a855f7",
    icon: Fingerprint
  },
  machine: {
    title: "MEDIA",
    subtitle: "Kreativ gedacht, performance-gemessen",
    description: "Wir machen kein 'nice to have'-Storytelling. Wir machen Content, der auf Conversion zielt. Mit KI, KPIs und einer klaren Message - für jeden Funnel-Step.",
    tags: ["Creative Assets", "S.M Management", "Performance-Marketing"],
    color: "#3b82f6",
    icon: Cpu
  },
  fusion: {
    title: "LAB",
    subtitle: "Innovation, die wirkt – mit KI-Speed",
    description: "Im Lab setzen wir KI und Softwareentwicklung so um, dass daraus echte, funktionierende Produkte entstehen – keine Konzeptfolien, keine Buzzwords.",
    tags: ["Prozessautomatisierung", "Websysteme", "Prototypen"],
    color: "#fbbf24",
    icon: Zap
  }
};

export const InteractiveCore = () => {
  const [activeState, setActiveState] = useState<StateType>("human");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [activeState]);

  const states: Array<{
    key: StateType;
    label: string;
    number: string;
  }> = [{
    key: "human",
    label: "STUDIO",
    number: "01"
  }, {
    key: "machine",
    label: "MEDIA",
    number: "02"
  }, {
    key: "fusion",
    label: "LAB",
    number: "03"
  }];

  const activeContent = content[activeState];
  const Icon = activeContent.icon;

  return (
    <section className="relative py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8 md:mb-12 lg:mb-20"
        >
          <div className="mb-3 sm:mb-4 md:mb-6">
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#7C3AED]">
              Digitale Methodik
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-black">
            Der Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">
              Reactor
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl">
            Wir verbinden Markenführung, Medienproduktion und Automatisierung zu messbaren Ergebnissen - umgesetzt im Headquarter-Modell mit kuratiertem Partnernetzwerk und Echtzeit-Dashboards.
          </p>
        </motion.div>

        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] gap-4 md:gap-6 lg:gap-8 items-stretch">
          {/* Control Panel - Horizontal scroll on mobile */}
          <div className="flex lg:flex-col gap-2 sm:gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
            {states.map((state, index) => {
              const isActive = activeState === state.key;
              const stateColor = content[state.key].color;
              const hoverClasses = state.key === 'human' 
                ? 'hover:bg-purple-50 hover:border-purple-300' 
                : state.key === 'machine' 
                  ? 'hover:bg-blue-50 hover:border-blue-300' 
                  : 'hover:bg-yellow-50 hover:border-yellow-300';
              const activeClasses = state.key === 'human' 
                ? 'bg-purple-50 border-purple-500 shadow-lg shadow-purple-500/10' 
                : state.key === 'machine' 
                  ? 'bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'bg-yellow-50 border-yellow-500 shadow-lg shadow-yellow-500/10';
              const badgeActiveClasses = state.key === 'human' 
                ? 'bg-purple-500 text-white' 
                : state.key === 'machine' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-yellow-500 text-black';

              return (
                <motion.button
                  key={state.key}
                  onClick={() => setActiveState(state.key)}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    relative p-3 sm:p-4 lg:p-6 text-left transition-all duration-500
                    border overflow-hidden group flex-shrink-0 min-w-[120px] sm:min-w-[140px] lg:min-w-0
                    ${isActive ? activeClasses : `bg-transparent border-gray-200 ${hoverClasses}`}
                  `}
                >
                  {/* Number Badge */}
                  <div className={`
                    absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center
                    text-[10px] sm:text-xs font-bold transition-all duration-500
                    ${isActive ? badgeActiveClasses : "bg-gray-100 text-gray-400"}
                  `}>
                    {state.number}
                  </div>

                  {/* Label */}
                  <div className="pr-8 sm:pr-10 lg:pr-12">
                    <span className={`
                      text-sm sm:text-base lg:text-lg font-bold tracking-widest uppercase transition-all duration-500
                      ${isActive ? "text-black" : "text-gray-500"}
                    `}>
                      {state.label}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px]"
                      style={{ backgroundColor: stateColor }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  )}

                  {/* Arrow Indicator - Hidden on mobile */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3"
                    >
                      <div className="w-2 h-2" style={{ backgroundColor: stateColor }} />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Display Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden shadow-2xl"
          >
            {/* Glass Card Base */}
            <div className="absolute inset-0 bg-[#0a0a0f] border border-white/20" />

            {/* Animated Background Ambience */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeState}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Large Colored Blur Circle */}
                <div
                  className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] blur-[80px] sm:blur-[100px] lg:blur-[120px] opacity-40"
                  style={{ backgroundColor: activeContent.color }}
                />

                {/* Visual Abstract Layer - Right Side */}
                <div className="absolute inset-0 translate-x-1/4 hidden sm:block">
                  {activeState === "human" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-400/30"
                          style={{
                            width: `${100 + i * 60}px`,
                            height: `${100 + i * 60}px`
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {activeState === "machine" && (
                    <div className="absolute inset-0">
                      <div className="grid grid-cols-6 md:grid-cols-8 grid-rows-6 md:grid-rows-8 w-full h-full gap-2 md:gap-4 p-8 md:p-12">
                        {[...Array(48)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-blue-500/15 border border-blue-400/25"
                            animate={{ opacity: [0.1, 0.6, 0.1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.05
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeState === "fusion" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8 - i * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <div
                            className="w-20 h-20 md:w-32 md:h-32 border-2 border-yellow-400/40"
                            style={{ transform: `translate(-50%, -50%) translateX(${60 + i * 30}px)` }}
                          />
                        </motion.div>
                      ))}
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-500/30 backdrop-blur animate-pulse-slow" />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col">
              {/* Top Row: Icon & Status */}
              <div className="flex items-start justify-between mb-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`icon-${activeState}`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-xl border border-white/20"
                    style={{ boxShadow: `0 0 40px ${activeContent.color}50` }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-green-500/15 border border-green-400/40"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider text-green-300">
                      Status: loading
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeState}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Title & Subtitle */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1.5 sm:mb-2 md:mb-3 text-white tracking-tight drop-shadow-lg">
                        {activeContent.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light">
                        {activeContent.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-xl">
                      {activeContent.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {activeContent.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/10 border border-white/20 text-[10px] sm:text-xs md:text-sm font-semibold text-white backdrop-blur"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
