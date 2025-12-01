import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Cpu, Zap } from "lucide-react";

type StateType = "studio" | "media" | "lab";

interface State {
  id: StateType;
  title: string;
  description: string;
  tags: string[];
  color: string;
  glowColor: string;
  icon: typeof Fingerprint;
}

const states: State[] = [
  {
    id: "studio",
    title: "STUDIO — Strategie & Seele",
    description: "Wir erschaffen Markenwelten, die berühren. Durch menschenzentriertes Design und strategische Tiefe entwickeln wir digitale Erlebnisse mit Purpose und Persönlichkeit.",
    tags: ["Brand Strategy", "UX Design", "Creative Direction"],
    color: "59 130 246", // blue-500
    glowColor: "147 197 253", // blue-300
    icon: Fingerprint,
  },
  {
    id: "media",
    title: "MEDIA — Skalierung & Automatisierung",
    description: "Performance meets Präzision. Mit KI-gestützten Kampagnen und datengetriebenen Insights schaffen wir messbare Ergebnisse und maximale Reichweite.",
    tags: ["AI Marketing", "Automation", "Performance Analytics"],
    color: "236 72 153", // pink-500
    glowColor: "249 168 212", // pink-300
    icon: Cpu,
  },
  {
    id: "lab",
    title: "LAB — Die Fusion",
    description: "Hier verschmelzen Mensch und Maschine. Unser Innovation Lab verbindet kreative Exzellenz mit technologischer Power zu disruptiven Lösungen der Zukunft.",
    tags: ["Innovation", "AI Integration", "Future Tech"],
    color: "168 85 247", // purple-500
    glowColor: "216 180 254", // purple-300
    icon: Zap,
  },
];

export const InteractiveCore = () => {
  const [activeState, setActiveState] = useState<StateType>("studio");
  const currentState = states.find((s) => s.id === activeState) || states[0];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
              Digital Methodology Reactor
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Human + AI = <span style={{ color: `rgb(${currentState.color})` }}>Edge</span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Unser Framework verbindet kreative Intelligenz mit technologischer Präzision
          </p>
        </motion.div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-4">
              {states.map((state, index) => {
                const Icon = state.icon;
                const isActive = activeState === state.id;

                return (
                  <motion.button
                    key={state.id}
                    onClick={() => setActiveState(state.id)}
                    className={`
                      relative w-full p-8 rounded-2xl text-left transition-all duration-500
                      border backdrop-blur-xl
                      ${
                        isActive
                          ? "border-white/20 bg-white/5"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]"
                      }
                    `}
                    whileHover={{ scale: isActive ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Glow effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          boxShadow: `0 0 40px rgba(${state.glowColor}, 0.3), inset 0 0 40px rgba(${state.glowColor}, 0.1)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `rgba(${state.color}, ${isActive ? 0.2 : 0.1})`,
                          }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: `rgb(${state.color})` }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {state.id.toUpperCase()}
                        </h3>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ background: `rgb(${state.color})` }}
                          initial={{ width: "0%" }}
                          animate={{ width: isActive ? "100%" : "0%" }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Display Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="relative h-full min-h-[600px] rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  {activeState === "studio" && (
                    <motion.div
                      key="studio-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      {/* Breathing circular pulses */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            top: `${30 + i * 15}%`,
                            left: `${20 + i * 20}%`,
                            width: `${200 + i * 100}px`,
                            height: `${200 + i * 100}px`,
                            background: `radial-gradient(circle, rgba(${currentState.color}, ${0.1 - i * 0.02}) 0%, transparent 70%)`,
                            filter: "blur(40px)",
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {activeState === "media" && (
                    <motion.div
                      key="media-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      {/* Technical grid */}
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(${currentState.color}, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(${currentState.color}, 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: "50px 50px",
                          }}
                        />
                      </div>
                      {/* Glitchy blocks */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            top: `${i * 20}%`,
                            left: `${i * 15}%`,
                            width: `${80 + i * 20}px`,
                            height: `${80 + i * 20}px`,
                            background: `rgba(${currentState.color}, 0.15)`,
                            filter: "blur(20px)",
                          }}
                          animate={{
                            x: [0, 20, -10, 0],
                            y: [0, -20, 10, 0],
                            opacity: [0.2, 0.4, 0.3, 0.2],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {activeState === "lab" && (
                    <motion.div
                      key="lab-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Orbital reactor core */}
                      <motion.div
                        className="relative w-64 h-64"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full border-2 opacity-30"
                            style={{
                              borderColor: `rgb(${currentState.color})`,
                              transform: `scale(${1 + i * 0.4})`,
                            }}
                            animate={{
                              rotate: i % 2 === 0 ? -360 : 360,
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              rotate: {
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                              },
                              opacity: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                          />
                        ))}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `radial-gradient(circle, rgba(${currentState.color}, 0.3) 0%, transparent 70%)`,
                            filter: "blur(60px)",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeState}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                      style={{
                        background: `rgba(${currentState.color}, 0.15)`,
                        boxShadow: `0 0 40px rgba(${currentState.glowColor}, 0.3)`,
                      }}
                    >
                      <currentState.icon
                        className="w-10 h-10"
                        style={{ color: `rgb(${currentState.color})` }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                      {currentState.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl">
                      {currentState.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {currentState.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                          style={{
                            background: `rgba(${currentState.color}, 0.15)`,
                            color: `rgb(${currentState.glowColor})`,
                            border: `1px solid rgba(${currentState.color}, 0.3)`,
                          }}
                        >
                          {tag}
                        </span>
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
