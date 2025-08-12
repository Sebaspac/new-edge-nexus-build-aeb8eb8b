import { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, ArrowDown, ChevronDown, Sparkles, Brain, Zap, Star, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { LazyImage } from "@/components/LazyImage";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

// Optimized 3D Particle System Component (reduced particle count)
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(800 * 3); // Reduced from 2000 to 800
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // Reduced spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  });
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15; // Slower rotation
      ref.current.rotation.y -= delta / 20;
    }
  });
  return <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
      <PointMaterial transparent color="#8b5cf6" size={0.04} sizeAttenuation={true} depthWrite={false} />
    </Points>;
}

// 3D Floating Box Component
function FloatingBox({
  position,
  color
}: {
  position: [number, number, number];
  color: string;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });
  return <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>;
}

// 3D Background Scene
function Background3D() {
  return <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleField />
      <FloatingBox position={[-5, 2, -3]} color="#8b5cf6" />
      <FloatingBox position={[5, -2, -2]} color="#3b82f6" />
      <FloatingBox position={[0, 3, -4]} color="#10b981" />
      <FloatingBox position={[-3, -3, -1]} color="#f59e0b" />
      <FloatingBox position={[4, 1, -5]} color="#9333ea" />
    </>;
}
const Services = () => {
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const {
    scrollY
  } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized Parallax effects with reduced calculations
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToContact = () => {
    window.location.href = '/#contact-section';
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    hover: {
      scale: 1.05,
      y: -10
    }
  };
  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2
    }
  };
  return <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Simplified gradient background for better performance */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>

      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-0">
        <motion.div style={{
        y: y1,
        opacity
      }} className="text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }} className="mb-12">
            <motion.div animate={{
            background: ["linear-gradient(45deg, #8b5cf6, #3b82f6, #f59e0b)", "linear-gradient(45deg, #3b82f6, #f59e0b, #8b5cf6)", "linear-gradient(45deg, #f59e0b, #8b5cf6, #3b82f6)"]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }} className="inline-block text-transparent bg-clip-text text-hero sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-text-shimmer">
              THE
            </motion.div>
            <br />
            <motion.div initial={{
            rotateX: -90
          }} animate={{
            rotateX: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-hero sm:text-6xl md:text-7xl lg:text-8xl font-black text-white italic mb-4">
              JOURNEY
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1,
            duration: 0.8
          }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
              FROM VISION TO REALITY
            </motion.div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5,
          duration: 0.8
        }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-4xl mx-auto font-light leading-relaxed">
            <div>Umfassende digitale Lösungen, die Strategie, Design und Technologie nahtlos verbinden.</div>
            <div>Wir entwickeln maßgeschneiderte Ansätze für Ihre einzigartigen Herausforderungen.</div>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.9,
          duration: 0.8
        }} className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium text-3xl">{t('services.hero.subtitle')}</span>
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer z-20" onClick={() => {
          const nextSection = document.querySelector('.services-overview');
          nextSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            <motion.div whileHover={{
            scale: 1.2
          }} whileTap={{
            scale: 0.9
          }}>
              <ArrowDown className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Floating Elements */}
        <motion.div style={{
        x: mousePosition.x * 100,
        y: mousePosition.y * 100
      }} className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
        <motion.div style={{
        x: -mousePosition.x * 150,
        y: -mousePosition.y * 150
      }} className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl" />
      </section>

      {/* Services Overview Section */}
      <section className="services-overview relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div style={{
        y: y2
      }} className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-20">
            <motion.div animate={{
            boxShadow: ["0 0 20px #8b5cf6", "0 0 40px #3b82f6", "0 0 20px #f59e0b", "0 0 40px #8b5cf6"]
          }} transition={{
            duration: 4,
            repeat: Infinity
          }} className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-full text-2xl font-bold mb-12 animate-glow-pulse">
              {t('services.keyActivities')}
            </motion.div>
            <h2 className="text-section-title sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid-modern">
              
              {/* Media Card */}
              <motion.div initial={{
              opacity: 0,
              y: 60
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0 * 0.2,
              duration: 0.6
            }} className="group">
                <Card className="card-modern h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground">
                      NEW EDGE MEDIA
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Die perfekte Bühne für Ihre Marke
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Content-Produktion und Reichweite. Hier wird alles produziert, veröffentlicht und gesteuert.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/media">
                        Content erstellen <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Studio Card */}
              <motion.div initial={{
              opacity: 0,
              y: 60
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 1 * 0.2,
              duration: 0.6
            }} className="group">
                <Card className="card-modern h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground">
                      NEW EDGE STUDIO
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Ihre Ideen, unsere Strategie
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/studio">
                        Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Lab Card */}
              <motion.div initial={{
              opacity: 0,
              y: 60
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 2 * 0.2,
              duration: 0.6
            }} className="group">
                <Card className="card-modern h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground">
                      NEW EDGE LAB
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Die perfekte Schnittstelle für Strategie & Technologie
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Backend, KI und technische Umsetzung. Hier wird alles intelligent und automatisiert.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/lab">
                        Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Enhanced Journey Visualization */}
            <ScrollAnimation animation="scaleIn" delay={0.3} className="mt-16 sm:mt-20">
              <div className="max-w-4xl mx-auto">
                {/* Journey Header */}
                <ScrollAnimation animation="fadeUp" delay={0.1}>
                  <div className="text-center mb-16">
                    <motion.h3 className="text-4xl sm:text-5xl font-bold text-white mb-6" initial={{
                    opacity: 0,
                    scale: 0.8
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}> Unsere Journey</motion.h3>
                    <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto" initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.2,
                    duration: 0.6
                  }}>
                      Von der Vision zur Realität - erleben Sie jeden Schritt unserer digitalen Transformation
                    </motion.p>
                  </div>
                </ScrollAnimation>

                {/* Animated Journey Path */}
                <div className="relative">
                  {/* Main Journey Line */}
                  <motion.div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-yellow-500 transform -translate-x-1/2" initial={{
                  scaleY: 0,
                  opacity: 0
                }} whileInView={{
                  scaleY: 1,
                  opacity: 1
                }} viewport={{
                  once: true,
                  margin: "-100px"
                }} transition={{
                  duration: 2,
                  ease: "easeInOut"
                }} style={{
                  originY: 0
                }} />

                  {/* Journey Steps */}
                  <div className="space-y-24 relative z-10">
                    
                    {/* Step 1: Strategy */}
                    <ScrollAnimation animation="fadeLeft" delay={0.5}>
                      <motion.div className="flex items-center" whileInView={{
                      x: [100, 0],
                      opacity: [0, 1]
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}>
                        <div className="flex-1 max-w-md mr-8">
                          <motion.div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 shadow-2xl" whileHover={{
                          scale: 1.05,
                          y: -10,
                          boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
                        }} transition={{
                          duration: 0.3
                        }}>
                            <motion.div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                            rotate: 360,
                            scale: 1.1
                          }} transition={{
                            duration: 0.6
                          }}>
                              <Target className="w-8 h-8 text-white" />
                            </motion.div>
                            <h4 className="text-2xl font-bold text-purple-300 mb-4 text-center">STRATEGIE</h4>
                            <p className="text-gray-300 text-center leading-relaxed">
                              Das Fundament für Ihren Erfolg. Wir entwickeln eine klare Roadmap und visuelle Identität.
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Central Journey Node */}
                        <motion.div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative z-20" initial={{
                        scale: 0,
                        rotate: -180
                      }} whileInView={{
                        scale: 1,
                        rotate: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: 0.7,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }} whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                      }}>
                          <span className="text-white font-bold text-2xl">1</span>
                          
                          {/* Pulsing Ring */}
                          <motion.div className="absolute inset-0 rounded-full border-2 border-purple-400" animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }} transition={{
                          duration: 2,
                          repeat: Infinity
                        }} />
                        </motion.div>
                        
                        <div className="flex-1 max-w-md ml-8 opacity-30">
                          <div className="h-32"></div>
                        </div>
                      </motion.div>
                    </ScrollAnimation>

                    {/* Step 2: Implementation */}
                    <ScrollAnimation animation="fadeRight" delay={0.7}>
                      <motion.div className="flex items-center" whileInView={{
                      x: [-100, 0],
                      opacity: [0, 1]
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}>
                        <div className="flex-1 max-w-md mr-8 opacity-30">
                          <div className="h-32"></div>
                        </div>
                        
                        {/* Central Journey Node */}
                        <motion.div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative z-20" initial={{
                        scale: 0,
                        rotate: 180
                      }} whileInView={{
                        scale: 1,
                        rotate: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: 0.9,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }} whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                      }}>
                          <span className="text-white font-bold text-2xl">2</span>
                          
                          {/* Pulsing Ring */}
                          <motion.div className="absolute inset-0 rounded-full border-2 border-blue-400" animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }} transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }} />
                        </motion.div>
                        
                        <div className="flex-1 max-w-md ml-8">
                          <motion.div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 shadow-2xl" whileHover={{
                          scale: 1.05,
                          y: -10,
                          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                        }} transition={{
                          duration: 0.3
                        }}>
                            <motion.div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                            rotate: 360,
                            scale: 1.1
                          }} transition={{
                            duration: 0.6
                          }}>
                              <Brain className="w-8 h-8 text-white" />
                            </motion.div>
                            <h4 className="text-2xl font-bold text-blue-300 mb-4 text-center">UMSETZUNG</h4>
                            <p className="text-gray-300 text-center leading-relaxed">
                              Content-Produktion und Reichweite-Aufbau. Ihre Botschaft erreicht die richtige Zielgruppe.
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </ScrollAnimation>

                    {/* Step 3: Innovation */}
                    <ScrollAnimation animation="fadeLeft" delay={0.9}>
                      <motion.div className="flex items-center" whileInView={{
                      x: [100, 0],
                      opacity: [0, 1]
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}>
                        <div className="flex-1 max-w-md mr-8">
                          <motion.div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 backdrop-blur-xl p-8 rounded-3xl border border-yellow-500/30 shadow-2xl" whileHover={{
                          scale: 1.05,
                          y: -10,
                          boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3)"
                        }} transition={{
                          duration: 0.3
                        }}>
                            <motion.div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                            rotate: 360,
                            scale: 1.1
                          }} transition={{
                            duration: 0.6
                          }}>
                              <Zap className="w-8 h-8 text-white" />
                            </motion.div>
                            <h4 className="text-2xl font-bold text-yellow-300 mb-4 text-center">INNOVATION</h4>
                            <p className="text-gray-300 text-center leading-relaxed">
                              Technische Implementierung und Automation für nachhaltigen, messbaren Erfolg.
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Central Journey Node */}
                        <motion.div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative z-20" initial={{
                        scale: 0,
                        rotate: -180
                      }} whileInView={{
                        scale: 1,
                        rotate: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: 1.1,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }} whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)"
                      }}>
                          <span className="text-white font-bold text-2xl">3</span>
                          
                          {/* Pulsing Ring */}
                          <motion.div className="absolute inset-0 rounded-full border-2 border-yellow-400" animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }} transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1
                        }} />
                        </motion.div>
                        
                        <div className="flex-1 max-w-md ml-8 opacity-30">
                          <div className="h-32"></div>
                        </div>
                      </motion.div>
                    </ScrollAnimation>

                    {/* Journey Success - Final Destination */}
                    <ScrollAnimation animation="scaleIn" delay={1.1}>
                      <motion.div className="text-center pt-16" initial={{
                      opacity: 0,
                      scale: 0.5
                    }} whileInView={{
                      opacity: 1,
                      scale: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 1.3,
                      duration: 0.8,
                      type: "spring"
                    }}>
                        <motion.div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-8 border-white shadow-2xl flex items-center justify-center mx-auto mb-8 relative" animate={{
                        boxShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.6)", "0 0 20px rgba(16, 185, 129, 0.3)"]
                      }} transition={{
                        boxShadow: {
                          duration: 3,
                          repeat: Infinity
                        }
                      }} whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 50px rgba(16, 185, 129, 0.8)",
                        transition: {
                          duration: 0.3
                        }
                      }}>
                           <Sparkles className="w-16 h-16 text-white" />
                          
                          {/* Success Particles */}
                          {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-yellow-400 rounded-full" style={{
                          top: "50%",
                          left: "50%",
                          originX: 0.5,
                          originY: 0.5
                        }} animate={{
                          x: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                          y: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                          opacity: [1, 0],
                          scale: [0, 1, 0]
                        }} transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut"
                        }} />)}
                        </motion.div>
                        
                        <motion.h4 className="text-3xl font-bold text-green-400 mb-4" initial={{
                        opacity: 0,
                        y: 20
                      }} whileInView={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 1.5,
                        duration: 0.6
                      }}>
                          🎯 ERFOLG ERREICHT
                        </motion.h4>
                        <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto" initial={{
                        opacity: 0,
                        y: 20
                      }} whileInView={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 1.7,
                        duration: 0.6
                      }}>
                          Ihre digitale Transformation ist komplett. Messbare Ergebnisse, nachhaltige Prozesse und dauerhafter Wettbewerbsvorteil.
                        </motion.p>
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6 text-center">Das Ergebnis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-left">
              Eine nahtlose Reise von der ersten Idee bis zur finalen Umsetzung - strukturiert, effizient und erfolgreich.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -10
          }} className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20 text-center backdrop-blur-lg hover-lift">
              <div className="text-5xl font-bold text-purple-400 mb-4">01</div>
              <h3 className="text-white mb-4 text-2xl font-medium text-center">Klare Strategie</h3>
              <p className="text-gray-300 text-left">Eine durchdachte Roadmap und visuelle Identität als solides Fundament.</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} whileHover={{
            scale: 1.05,
            y: -10
          }} className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-8 rounded-2xl border border-blue-500/20 text-center backdrop-blur-lg hover-lift">
              <div className="text-5xl font-bold text-blue-400 mb-4">02</div>
              <h3 className="text-white mb-4 text-2xl font-medium text-center">Überzeugende Inhalte</h3>
              <p className="text-gray-300 text-left">Content, der Ihre Zielgruppe erreicht und nachhaltig begeistert.</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} whileHover={{
            scale: 1.05,
            y: -10
          }} className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 p-8 rounded-2xl border border-yellow-500/20 text-center backdrop-blur-lg hover-lift">
              <div className="text-5xl font-bold text-yellow-400 mb-4">03</div>
              <h3 className="text-2xl text-white mb-4 font-medium text-center">Intelligente Umsetzung</h3>
              <p className="text-gray-300 text-left">Technische Exzellenz und Automatisierung für nachhaltigen Erfolg.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="font-bold text-white mb-6 text-3xl">Warum New Edge?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Drei spezialisierte Labels, ein nahtloser Prozess, maximaler Erfolg für Ihr Projekt.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05
          }} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expertise</h3>
              <p className="text-gray-300 text-sm">Spezialisierte Teams für jeden Bereich</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} whileHover={{
            scale: 1.05
          }} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Effizienz</h3>
              <p className="text-gray-300 text-sm">Optimierte Prozesse und kurze Wege</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} whileHover={{
            scale: 1.05
          }} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zielgerichtet</h3>
              <p className="text-gray-300 text-sm">Fokus auf messbare Ergebnisse</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} whileHover={{
            scale: 1.05
          }} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <ArrowRight className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kontinuität</h3>
              <p className="text-gray-300 text-sm">Nahtlose Übergänge zwischen den Phasen</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-900 relative overflow-hidden">
        <motion.div className="container mx-auto px-6 text-center relative z-10" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }}>
          <motion.h2 initial={{
          scale: 0.5
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} className="text-6xl font-bold mb-6 text-white">
            Bereit für Ihre Reise?
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Lassen Sie uns gemeinsam Ihre Vision Schritt für Schritt zur Realität werden.
          </motion.p>
          <motion.div whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6
        }}>
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 text-xl px-16 py-6 rounded-full shadow-2xl hover-lift animate-glow-pulse" asChild>
              <Link to="/#contact-section">
                Projekt starten
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div animate={{
        rotate: 360,
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <motion.div animate={{
        rotate: -360,
        scale: [1.2, 1, 1.2]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl" />
      </section>

      {/* Unternehmensvorteile Section */}
      

      {/* Footer */}
      <footer className="bg-gray-900/80 text-white py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <LazyImage alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" sizes="(max-width: 640px) 24px, 32px" />
                <div className="text-2xl sm:text-3xl font-bold">
                  New Edge<span className="text-purple-400"></span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">New Edge ist eine Creative-Tech Agentur für innovationsgetriebene Markenkommunikation.</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-xs sm:text-sm">in</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/studio" className="hover:text-white transition-colors">STUDIO</Link></li>
                <li><Link to="/media" className="hover:text-white transition-colors">MEDIA</Link></li>
                <li><Link to="/lab" className="hover:text-white transition-colors">LAB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Kontakt</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>info@newedgebrand.com</li>
                <li>+49 15750998236</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">©2024 New Edge. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
              <Link to="/impressum" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />


      {/* Scroll to Top Button */}
      {showScrollTop && <motion.button initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0
    }} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse hover-lift" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowRight className="w-6 h-6 transform -rotate-90" />
        </motion.button>}
    </div>;
};
export default Services;