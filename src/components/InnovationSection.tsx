import { motion, useMotionValue, useTransform } from "framer-motion";
import { Lightbulb, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
export const InnovationSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  return <section className="innovation-section relative -mt-32 pt-24 pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated network background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Animated connection lines */}
          <motion.path d="M 100 100 Q 400 200 700 100" stroke="url(#line-gradient)" strokeWidth="2" fill="none" initial={{
          pathLength: 0,
          opacity: 0
        }} whileInView={{
          pathLength: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 2,
          ease: "easeInOut"
        }} />
          <motion.path d="M 700 100 Q 900 300 1200 200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" initial={{
          pathLength: 0,
          opacity: 0
        }} whileInView={{
          pathLength: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeInOut"
        }} />
        </svg>
      </div>

      {/* Floating particles that react to mouse */}
      {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-sm" style={{
      left: `${(i * 7 + 10) % 90}%`,
      top: `${(i * 11 + 15) % 80}%`
    }} animate={{
      y: [0, -30, 0],
      x: [0, Math.sin(i) * 20, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3]
    }} transition={{
      duration: 3 + i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.1
    }} />)}
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Main Interactive Grid */}
        <motion.div className="grid lg:grid-cols-2 gap-4 items-stretch mb-8 relative" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
          }
        }
      }}>
          {/* Animated connecting line between cards */}
          <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1 hidden lg:block" initial={{
          scaleX: 0,
          opacity: 0
        }} whileInView={{
          scaleX: 1,
          opacity: 0.3
        }} viewport={{
          once: true
        }} transition={{
          duration: 1.5,
          delay: 0.5
        }}>
            <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent" />
            {/* Animated pulse along the line */}
            <motion.div className="absolute top-0 left-0 w-8 h-1 bg-white shadow-lg shadow-primary/50" animate={{
            x: ["0%", "300%"]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
          </motion.div>

          {/* Card 1: Innovation */}
          <motion.div variants={{
          hidden: {
            opacity: 0,
            x: -80,
            rotateY: -30,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80
            }
          }
        }} whileHover={{
          scale: 1.03,
          y: -10,
          rotateY: 5,
          transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 200
          }
        }} onHoverStart={() => setHoveredCard(1)} onHoverEnd={() => setHoveredCard(null)} className="perspective-1000 relative">
            {/* Glow effect when hovered */}
            <motion.div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" animate={{
            opacity: hoveredCard === 1 ? 0.8 : 0,
            scale: hoveredCard === 1 ? 1.05 : 1
          }} transition={{
            duration: 0.3
          }} />
            
            <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-purple-50/80 to-purple-50/50 border border-border/50 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-500">
              {/* Animated gradient overlay */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{
              backgroundPosition: hoveredCard === 1 ? ["0% 0%", "100% 100%"] : "0% 0%"
            }} transition={{
              duration: 3,
              repeat: hoveredCard === 1 ? Infinity : 0
            }} />
              
              <CardContent className="relative p-6 h-full flex gap-3">
                <div className="flex-1 flex flex-col">
                  <motion.div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-soft mb-3 relative" whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: {
                    duration: 0.6,
                    type: "spring"
                  }
                }} animate={{
                  boxShadow: hoveredCard === 1 ? "0 20px 40px rgba(147, 51, 234, 0.4)" : "0 10px 20px rgba(147, 51, 234, 0.2)"
                }}>
                    {/* Animated ring around icon */}
                    <motion.div className="absolute inset-0 rounded-3xl border-2 border-primary/50" animate={{
                    scale: hoveredCard === 1 ? [1, 1.3, 1] : 1,
                    opacity: hoveredCard === 1 ? [1, 0, 1] : 0
                  }} transition={{
                    duration: 2,
                    repeat: hoveredCard === 1 ? Infinity : 0
                  }} />
                    <Lightbulb className="w-6 h-6 text-white drop-shadow-lg relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                    Innovation als Prozess
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-base">Statt einmaliger Projekte bauen wir Ihnen einen nachhaltigen Ablauf weniger Aufwand, schnellere Umsetzung, planbare Skalierung</p>
                </div>
                
                
              </CardContent>
              
              {/* Bottom accent line */}
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" animate={{
              scaleX: hoveredCard === 1 ? 1 : 0,
              opacity: hoveredCard === 1 ? 1 : 0
            }} transition={{
              duration: 0.3
            }} />
            </Card>
          </motion.div>

          {/* Card 2: Transformation */}
          <motion.div variants={{
          hidden: {
            opacity: 0,
            x: 80,
            rotateY: 30,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80
            }
          }
        }} whileHover={{
          scale: 1.03,
          y: -10,
          rotateY: -5,
          transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 200
          }
        }} onHoverStart={() => setHoveredCard(2)} onHoverEnd={() => setHoveredCard(null)} className="perspective-1000 relative">
            {/* Glow effect when hovered */}
            <motion.div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" animate={{
            opacity: hoveredCard === 2 ? 0.8 : 0,
            scale: hoveredCard === 2 ? 1.05 : 1
          }} transition={{
            duration: 0.3
          }} />
            
            <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-purple-50/80 to-purple-50/50 border border-border/50 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-500">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{
              backgroundPosition: hoveredCard === 2 ? ["0% 0%", "100% 100%"] : "0% 0%"
            }} transition={{
              duration: 3,
              repeat: hoveredCard === 2 ? Infinity : 0
            }} />
              
              <CardContent className="relative p-6 h-full flex gap-3">
                <div className="flex-1 flex flex-col">
                  <motion.div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-soft mb-3 relative" whileHover={{
                  scale: 1.2,
                  rotate: -360,
                  transition: {
                    duration: 0.6,
                    type: "spring"
                  }
                }} animate={{
                  boxShadow: hoveredCard === 2 ? "0 20px 40px rgba(147, 51, 234, 0.4)" : "0 10px 20px rgba(147, 51, 234, 0.2)"
                }}>
                    <motion.div className="absolute inset-0 rounded-3xl border-2 border-primary/50" animate={{
                    scale: hoveredCard === 2 ? [1, 1.3, 1] : 1,
                    opacity: hoveredCard === 2 ? [1, 0, 1] : 0
                  }} transition={{
                    duration: 2,
                    repeat: hoveredCard === 2 ? Infinity : 0
                  }} />
                    <Zap className="w-6 h-6 text-white drop-shadow-lg relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                    Ganzheitliche Transformation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-base">Keine Insellösungen mehr. Wir verbinden Marke, Content und KI-Automatisierung zu einem durchgängigen System</p>
                </div>
                
                
              </CardContent>
              
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" animate={{
              scaleX: hoveredCard === 2 ? 1 : 0,
              opacity: hoveredCard === 2 ? 1 : 0
            }} transition={{
              duration: 0.3
            }} />
            </Card>
          </motion.div>
        </motion.div>

        {/* Vision Statement - Interactive Center Piece */}
        <motion.div initial={{
        opacity: 0,
        y: 80,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }} className="mb-8 relative z-10">
          <motion.div className="relative" whileHover={{
          scale: 1.02
        }} onHoverStart={() => setHoveredCard(3)} onHoverEnd={() => setHoveredCard(null)}>
            {/* Pulsing glow effect */}
            <motion.div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" animate={{
            opacity: hoveredCard === 3 ? 1 : 0.3,
            scale: hoveredCard === 3 ? [1, 1.1, 1] : 1
          }} transition={{
            opacity: {
              duration: 0.3
            },
            scale: {
              duration: 2,
              repeat: hoveredCard === 3 ? Infinity : 0
            }
          }} />
            
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-blue-50/50 border border-border/50 shadow-soft hover:border-secondary/20 transition-all duration-500">
              {/* Animated gradient mesh background */}
              <motion.div className="absolute inset-0" style={{
              backgroundImage: `
                    radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, hsl(var(--secondary) / 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
                  `
            }} animate={{
              opacity: hoveredCard === 3 ? 1 : 0.5
            }} />
              
              <CardContent className="relative p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent mb-4 shadow-soft mx-auto">
                  <Brain className="w-6 h-6 text-white drop-shadow-xl" />
                </div>
                
                <h3 className="mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight font-semibold sm:text-lg text-xl">
                  Kreatives Headquarter<br />für Innovation
                </h3>
                
                <div className="space-y-3 max-w-2xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed sm:text-base text-base">Nicht als klassische Agentur, sondern als Ort, an dem Ideen, Technologien und Design zu echter Zukunftskraft werden</p>
                </div>
                
                {/* Animated bottom accent */}
                <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" animate={{
                width: hoveredCard === 3 ? "80%" : "40%",
                opacity: hoveredCard === 3 ? 1 : 0.3
              }} transition={{
                duration: 0.5
              }} />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};