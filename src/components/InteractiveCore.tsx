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
    title: "HUMAN INTUITION",
    description: "Am Anfang steht nicht der Code, sondern der Charakter. Wir dechiffrieren Ihre Identität, Ihre Werte und Ihre Vision. Strategie ist zutiefst menschlich.",
    tags: ["Brand Identity", "Storytelling", "Creative Direction"],
    color: "59 130 246", // blue-500
    glowColor: "147 197 253", // blue-300
    icon: Fingerprint,
  },
  {
    id: "media",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Wir bauen intelligente Systeme, die Ihre Reichweite potenzieren. Automatisierung, KI-Agenten und datengetriebene Entscheidungen schaffen den Raum für Wachstum.",
    tags: ["Process Automation", "Generative AI", "Data Analytics"],
    color: "236 72 153", // pink-500
    glowColor: "249 168 212", // pink-300
    icon: Cpu,
  },
  {
    id: "lab",
    title: "THE NEW EDGE",
    description: "Hier entsteht der Wettbewerbsvorteil. Wenn menschliche Kreativität auf maschinelle Effizienz trifft, entstehen Marken, die nicht nur gesehen, sondern gefühlt und genutzt werden.",
    tags: ["Market Dominance", "Hyper-Efficiency", "Next-Gen Experience"],
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
          className="mb-16"
        >
          <div className="text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-6">
            The Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Wie wir arbeiten.
          </h2>
        </motion.div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            {states.map((state, index) => {
              const isActive = activeState === state.id;

              return (
                <motion.button
                  key={state.id}
                  onClick={() => setActiveState(state.id)}
                  className={`
                    relative w-full text-left transition-all duration-500 group
                    ${isActive ? "" : ""}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-6">
                    {/* Number + Arrow */}
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-sm font-medium">
                        0{index + 1}.
                      </span>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="text-white"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7-7 7"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-medium tracking-wide transition-all duration-300 ${
                          isActive ? "text-white" : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {state.id === "studio" && "INTUITION"}
                        {state.id === "media" && "INTELLIGENCE"}
                        {state.id === "lab" && "THE EDGE"}
                      </h3>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {isActive && (
                    <motion.div
                      className="mt-4 h-[2px] rounded-full"
                      style={{
                        background: `linear-gradient(90deg, rgb(${state.color}) 0%, transparent 100%)`,
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Column - Display Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="relative h-full min-h-[700px] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-3xl overflow-hidden shadow-2xl">
              {/* System Status Badge */}
              <div className="absolute top-8 right-8 z-20">
                <div className="px-4 py-2 rounded-lg border border-white/10 bg-black/40 backdrop-blur-xl">
                  <span className="text-white/60 text-xs font-mono tracking-wider uppercase">
                    System Status: <span className="text-emerald-400">Online</span>
                  </span>
                </div>
              </div>
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
              <div className="relative z-10 h-full flex flex-col p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeState}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-full"
                  >
                    {/* Icon */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-12 border border-white/10"
                      style={{
                        background: `rgba(${currentState.color}, 0.1)`,
                      }}
                    >
                      <currentState.icon
                        className="w-9 h-9"
                        style={{ color: `rgb(${currentState.color})` }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Category Label */}
                    <div className="mb-6">
                      <span
                        className="text-xs font-medium tracking-[0.2em] uppercase"
                        style={{ color: `rgb(${currentState.color})` }}
                      >
                        {activeState === "studio" && "Die Seele der Marke"}
                        {activeState === "media" && "Die Kraft der Skalierung"}
                        {activeState === "lab" && "Symbiose für Marktführer"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                      {currentState.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-base lg:text-lg mb-auto leading-relaxed max-w-2xl">
                      {currentState.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-12">
                      {currentState.tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: `rgb(${currentState.color})` }}
                          />
                          <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                            {tag}
                          </span>
                        </div>
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
