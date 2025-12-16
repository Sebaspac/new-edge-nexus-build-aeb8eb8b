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
    // Lila/Purple
    icon: Fingerprint
  },
  machine: {
    title: "MEDIA",
    subtitle: "Kreativ gedacht, performance-gemessen",
    description: "Wir machen kein „nice to have“-Storytelling. Wir machen Content, der auf Conversion zielt. Mit KI, KPIs und einer klaren Message – für jeden Funnel-Step.",
    tags: ["Creative Assets", "S.M Management", "Performance-Marketing"],
    color: "#3b82f6",
    // Blau/Blue
    icon: Cpu
  },
  fusion: {
    title: "LAB",
    subtitle: "Innovation, die wirkt – mit KI-Speed",
    description: "Im Lab setzen wir KI und Softwareentwicklung so um, dass daraus echte, funktionierende Produkte entstehen – keine Konzeptfolien, keine Buzzwords.",
    tags: ["Prozessautomatisierung", "Websysteme", "Prototypen"],
    color: "#fbbf24",
    // Gelb/Yellow
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
  return <section className="relative py-32 bg-white overflow-hidden">
      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <div className="inline-block px-6 py-2 mb-6 bg-gray-100 border border-gray-200">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">Digitale Methodik</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Der Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">
              Reactor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir verbinden Markenführung, Medienproduktion und Automatisierung zu messbaren Ergebnissen - umgesetzt im Headquarter-Modell mit kuratiertem Partnernetzwerk und Echtzeit-Dashboards.
          </p>
        </motion.div>

        {/* Split Container */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-stretch">
          {/* LEFT COLUMN - Control Panel */}
          <div className="flex flex-col gap-4">
            {states.map((state, index) => {
            const isActive = activeState === state.key;
            const stateColor = content[state.key].color;
            const hoverClasses = state.key === 'human' ? 'hover:bg-purple-50 hover:border-purple-300' : state.key === 'machine' ? 'hover:bg-blue-50 hover:border-blue-300' : 'hover:bg-yellow-50 hover:border-yellow-300';
            const activeClasses = state.key === 'human' ? 'bg-purple-50 border-purple-500 shadow-lg shadow-purple-500/10' : state.key === 'machine' ? 'bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/10' : 'bg-yellow-50 border-yellow-500 shadow-lg shadow-yellow-500/10';
            const badgeActiveClasses = state.key === 'human' ? 'bg-purple-500 text-white' : state.key === 'machine' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black';
            return <motion.button key={state.key} onClick={() => setActiveState(state.key)} initial={{
              opacity: 0,
              x: -40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`
                    relative p-6 text-left transition-all duration-500
                    border overflow-hidden group
                    ${isActive ? activeClasses : `bg-transparent border-gray-200 ${hoverClasses}`}
                  `}>
                  {/* Number Badge */}
                  <div className={`
                    absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                    text-xs font-bold transition-all duration-500
                    ${isActive ? badgeActiveClasses : "bg-gray-100 text-gray-400"}
                  `}>
                    {state.number}
                  </div>

                  {/* Label */}
                  <div className="pr-12">
                    <span className={`
                      text-lg font-bold tracking-widest uppercase transition-all duration-500
                      ${isActive ? "text-black" : "text-gray-500"}
                    `}>
                      {state.label}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {isActive && <motion.div className="absolute bottom-0 left-0 h-[2px]" style={{
                backgroundColor: stateColor
              }} initial={{
                width: "0%"
              }} animate={{
                width: `${progress}%`
              }} transition={{
                duration: 0.1
              }} />}

                  {/* Arrow Indicator */}
                  {isActive && <motion.div initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3">
                      <div className="w-2 h-2" style={{
                  backgroundColor: stateColor
                }} />
                    </motion.div>}
                </motion.button>;
          })}
          </div>

          {/* RIGHT COLUMN - Display Card */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative min-h-[600px] overflow-hidden shadow-2xl">
            {/* Glass Card Base - darker for better contrast */}
            <div className="absolute inset-0 bg-[#0a0a0f] border border-white/20" />

            {/* Animated Background Ambience */}
            <AnimatePresence mode="wait">
              <motion.div key={`bg-${activeState}`} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.8
            }} className="absolute inset-0">
                {/* Large Colored Blur Circle - more vibrant */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] blur-[120px] opacity-40" style={{
                backgroundColor: activeContent.color
              }} />

                {/* Visual Abstract Layer - Right Side */}
                <div className="absolute inset-0 translate-x-1/4">
                  {activeState === "human" && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(4)].map((_, i) => <motion.div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-400/30" style={{
                    width: `${150 + i * 80}px`,
                    height: `${150 + i * 80}px`
                  }} animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }} transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />)}
                    </div>}

                  {activeState === "machine" && <div className="absolute inset-0">
                      <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-4 p-12">
                        {[...Array(64)].map((_, i) => <motion.div key={i} className="bg-blue-500/15 border border-blue-400/25" animate={{
                      opacity: [0.1, 0.6, 0.1]
                    }} transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05
                    }} />)}
                      </div>
                    </div>}

                  {activeState === "fusion" && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(3)].map((_, i) => <motion.div key={i} className="absolute top-1/2 left-1/2" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 8 - i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}>
                          <div className="w-32 h-32 border-2 border-yellow-400/40" style={{
                      transform: `translate(-50%, -50%) translateX(${100 + i * 40}px)`
                    }} />
                        </motion.div>)}
                      <div className="w-16 h-16 bg-yellow-500/30 backdrop-blur animate-pulse-slow" />
                    </div>}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full p-12 flex flex-col">
              {/* Top Row: Icon & Status */}
              <div className="flex items-start justify-between mb-auto">
                <AnimatePresence mode="wait">
                  <motion.div key={`icon-${activeState}`} initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: -20
                }} animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0
                }} exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 20
                }} transition={{
                  duration: 0.5
                }} className="p-6 bg-white/10 backdrop-blur-xl border border-white/20" style={{
                  boxShadow: `0 0 40px ${activeContent.color}50`
                }}>
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>
                </AnimatePresence>

                <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="px-4 py-2 bg-green-500/15 border border-green-400/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-green-300">
                      System Status: loading
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div key={`content-${activeState}`} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -20
                }} transition={{
                  duration: 0.5
                }}>
                    {/* Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-5xl font-black mb-3 text-white tracking-tight drop-shadow-lg">
                        {activeContent.title}
                      </h3>
                      <p className="text-xl text-white/70 font-light">{activeContent.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">{activeContent.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {activeContent.tags.map((tag, i) => <motion.span key={tag} initial={{
                      opacity: 0,
                      scale: 0.8
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      delay: 0.3 + i * 0.1
                    }} className="px-4 py-2 bg-white/10 border border-white/20 text-sm font-semibold text-white backdrop-blur">
                          {tag}
                        </motion.span>)}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};