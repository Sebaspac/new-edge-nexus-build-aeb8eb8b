import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Cpu, Zap } from 'lucide-react';

type StateType = 'human' | 'machine' | 'fusion';

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
    title: 'HUMAN INTUITION',
    subtitle: 'Strategie & Seele',
    description: 'Markenpositionierung, kreative Konzeption und emotionale Storytelling-Strategien, die menschliche Verbindungen schaffen.',
    tags: ['Strategie', 'Kreativität', 'Empathie'],
    color: '#3b82f6',
    icon: Fingerprint
  },
  machine: {
    title: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Skalierung & Automation',
    description: 'KI-gestützte Content-Generierung, Prozessautomatisierung und datengetriebene Optimierung für maximale Effizienz.',
    tags: ['Automation', 'Skalierung', 'Effizienz'],
    color: '#ec4899',
    icon: Cpu
  },
  fusion: {
    title: 'THE NEW EDGE',
    subtitle: 'Die Fusion',
    description: 'Die perfekte Symbiose aus menschlicher Intuition und künstlicher Intelligenz. Hier entsteht der unfaire Vorteil.',
    tags: ['Innovation', 'Synergie', 'Zukunft'],
    color: '#a855f7',
    icon: Zap
  }
};

export const InteractiveCore = () => {
  const [activeState, setActiveState] = useState<StateType>('human');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeState]);

  const states: Array<{ key: StateType; label: string; number: string }> = [
    { key: 'human', label: 'Intuition', number: '01' },
    { key: 'machine', label: 'Intelligence', number: '02' },
    { key: 'fusion', label: 'Edge', number: '03' }
  ];

  const activeContent = content[activeState];
  const Icon = activeContent.icon;

  return (
    <section className="relative py-32 bg-edge-black overflow-hidden">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-edge-panel border border-white/10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">
              Digitale Methodik
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Der Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Reactor</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Unser Geheimnis: Die perfekte Fusion von menschlicher Kreativität und künstlicher Intelligenz
          </p>
        </motion.div>

        {/* Split Container */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-stretch">
          {/* LEFT COLUMN - Control Panel */}
          <div className="flex flex-col gap-4">
            {states.map((state, index) => {
              const isActive = activeState === state.key;
              
              return (
                <motion.button
                  key={state.key}
                  onClick={() => setActiveState(state.key)}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    relative p-6 text-left rounded-xl transition-all duration-500
                    border overflow-hidden group
                    ${isActive 
                      ? 'bg-edge-panel border-white/20 shadow-lg shadow-purple-500/20' 
                      : 'bg-transparent border-white/10 hover:bg-edge-panel hover:border-white/20'
                    }
                  `}
                >
                  {/* Number Badge */}
                  <div className={`
                    absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center
                    text-xs font-bold transition-all duration-500
                    ${isActive 
                      ? 'bg-white/10 text-white' 
                      : 'bg-white/5 text-white/40'
                    }
                  `}>
                    {state.number}
                  </div>

                  {/* Label */}
                  <div className="pr-12">
                    <span className={`
                      text-lg font-bold tracking-widest uppercase transition-all duration-500
                      ${isActive ? 'text-white' : 'text-white/60'}
                    `}>
                      {state.label}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  )}

                  {/* Arrow Indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Display Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[600px] rounded-[3rem] overflow-hidden"
          >
            {/* Glass Card Base */}
            <div className="absolute inset-0 bg-edge-panel backdrop-blur-3xl border border-white/10" />

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
                  className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
                  style={{ backgroundColor: activeContent.color }}
                />

                {/* Visual Abstract Layer - Right Side */}
                <div className="absolute inset-0 translate-x-1/4">
                  {activeState === 'human' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
                          style={{
                            width: `${150 + i * 80}px`,
                            height: `${150 + i * 80}px`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {activeState === 'machine' && (
                    <div className="absolute inset-0">
                      <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-4 p-12">
                        {[...Array(64)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-pink-500/10 border border-pink-500/20 rounded"
                            animate={{
                              opacity: [0.1, 0.6, 0.1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.05,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeState === 'fusion' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 8 - i * 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <div
                            className="w-32 h-32 rounded-full border-2 border-purple-500/30"
                            style={{
                              transform: `translate(-50%, -50%) translateX(${100 + i * 40}px)`,
                            }}
                          />
                        </motion.div>
                      ))}
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur animate-pulse-slow" />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full p-12 flex flex-col">
              {/* Top Row: Icon & Status */}
              <div className="flex items-start justify-between mb-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`icon-${activeState}`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                    style={{ boxShadow: `0 0 40px ${activeContent.color}40` }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-green-400">
                      System Status: Online
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeState}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-5xl font-black mb-3 text-white tracking-tight">
                        {activeContent.title}
                      </h3>
                      <p className="text-xl text-white/50 font-light">
                        {activeContent.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                      {activeContent.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {activeContent.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 backdrop-blur"
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
