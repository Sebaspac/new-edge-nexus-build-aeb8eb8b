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
              
              <CardContent className="p-8 relative z-10">
                <Lightbulb className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Innovation vorantreiben
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir kombinieren kreative Strategien mit modernster KI-Technologie, 
                  um Ihr Unternehmen zukunftssicher zu machen.
                </p>
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
            
            
            <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-purple-50/80 to-purple-50/50 border border-border/50 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-500">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{
              backgroundPosition: hoveredCard === 2 ? ["0% 0%", "100% 100%"] : "0% 0%"
            }} transition={{
              duration: 3,
              repeat: hoveredCard === 2 ? Infinity : 0
            }} />
              
              <CardContent className="p-8 relative z-10">
                <Zap className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Prozesse automatisieren
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Durch intelligente Automatisierung schaffen wir mehr Zeit für 
                  das Wesentliche – Ihr Kerngeschäft.
                </p>
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
          <Card className="bg-gradient-to-br from-white to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500">
            <CardContent className="p-10 text-center">
              <Brain className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Ihre Vision. Unsere Mission.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                New Edge verbindet kreative Exzellenz mit technischer Innovation, 
                um Unternehmen zu transformieren und nachhaltig erfolgreich zu machen.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>;
};