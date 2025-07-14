import { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, ArrowDown, ChevronDown, Palette, Video, Cpu, Star, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";

// 3D Particle System Component
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8b5cf6" size={0.05} sizeAttenuation={true} depthWrite={false} />
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

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
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
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{
        position: [0, 0, 5],
        fov: 75
      }}>
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        </Canvas>
      </div>

      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
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
          }} className="inline-block text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-text-shimmer">
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
          }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white italic mb-4">
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
          }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light">
              FROM VISION TO REALITY
            </motion.div>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5,
          duration: 0.8
        }} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Wir begleiten Sie auf einer strukturierten Reise von der ersten Idee bis zur finalen Implementierung.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">For strategy. aesthetics. &amp; tech.</span>
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer z-20" onClick={() => {
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
      <section className="services-overview relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div style={{
        y: y2
      }} className="container mx-auto px-6">
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
              Key Activities
            </motion.div>
            <h2 className="text-6xl font-bold text-white mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Studio Card - Apple Style */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} onHoverStart={() => setHoveredCard('studio')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-white/5 transition-all duration-700 rounded-3xl overflow-hidden">
                  <CardContent className="p-10 text-center relative bg-purple-700 px-[10px] py-[20px]">
                    {/* Subtle Gradient Background */}
                    <motion.div animate={hoveredCard === 'studio' ? {
                    opacity: [0.02, 0.05, 0.02]
                  } : {}} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} className="" />
                    
                    {/* Service Tag */}
                    <motion.div whileHover={{
                    scale: 1.02
                  }} className="inline-block bg-white/5 backdrop-blur-sm text-white/80 px-6 py-2 rounded-full text-sm font-medium mb-8 relative z-10 border border-white/10">
                      New Edge Studio
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div variants={iconVariants} whileHover="hover" className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10 border border-white/10">
                      <Palette className="w-8 h-8 text-white/70" />
                    </motion.div>
                    
                    
                    <p className="text-lg mb-6 leading-relaxed relative z-10 font-light text-zinc-50">
                      Ihre Ideen, unsere Strategie
                    </p>
                    <p className="text-sm leading-relaxed mb-10 relative z-10 max-w-sm mx-auto text-gray-300">
                      Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.
                    </p>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                      <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/15 w-full relative z-10 rounded-xl py-3 font-medium transition-all duration-300" asChild>
                        <Link to="/studio">
                          Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Minimalist Arrow */}
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{
                  x: [0, 5, 0],
                  opacity: [0.3, 0.7, 0.3]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <ArrowRight className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Media Card - Apple Style */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} onHoverStart={() => setHoveredCard('media')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-white/5 transition-all duration-700 rounded-3xl overflow-hidden">
                  <CardContent className="p-10 text-center relative bg-blue-800 py-[20px] px-[10px]">
                    <motion.div animate={hoveredCard === 'media' ? {
                    opacity: [0.02, 0.05, 0.02]
                  } : {}} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} className="" />
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} className="inline-block bg-white/5 backdrop-blur-sm text-white/80 px-6 py-2 rounded-full text-sm font-medium mb-8 relative z-10 border border-white/10">
                      New Edge Media
                    </motion.div>
                    
                    <motion.div variants={iconVariants} whileHover="hover" className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10 border border-white/10">
                      <Video className="w-8 h-8 text-white/70" />
                    </motion.div>
                    
                    
                    <p className="text-lg mb-6 leading-relaxed relative z-10 font-light text-gray-50">
                      Die perfekte Bühne für Ihre Marke
                    </p>
                    <p className="text-sm leading-relaxed mb-10 relative z-10 max-w-sm mx-auto text-gray-300">
                      Content-Produktion und Reichweite. Hier wird alles produziert, veröffentlicht und gesteuert.
                    </p>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                      <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/15 w-full relative z-10 rounded-xl py-3 font-medium transition-all duration-300" asChild>
                        <Link to="/media">
                          Content erstellen <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Minimalist Arrow */}
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{
                  x: [0, 5, 0],
                  opacity: [0.3, 0.7, 0.3]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}>
                    <ArrowRight className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Lab Card - Apple Style */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} onHoverStart={() => setHoveredCard('lab')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-white/5 transition-all duration-700 rounded-3xl overflow-hidden">
                  <CardContent className="p-10 text-center relative px-[10px] py-[20px]" style={{backgroundColor: '#FFED00'}}>
                    <motion.div animate={hoveredCard === 'lab' ? {
                    opacity: [0.02, 0.05, 0.02]
                  } : {}} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} className="" />
                    
                     <motion.div whileHover={{
                     scale: 1.02
                   }} className="inline-block backdrop-blur-sm text-black text-sm font-bold mb-8 relative z-10 border border-black/20 py-[8px] px-[24px] bg-white/90 rounded-full shadow-lg" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                       New Edge Lab
                    </motion.div>
                    
                    <motion.div variants={iconVariants} whileHover="hover" className="w-16 h-16 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 relative z-10 border border-black/20 rounded-3xl bg-white/90 shadow-lg">
                      <Cpu className="w-8 h-8 text-amber-600" />
                    </motion.div>
                    
                    
                     <p className="text-lg mb-6 leading-relaxed relative z-10 font-bold text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                       Die perfekte Schnittstelle für Strategie & Technologie
                     </p>
                     <p className="text-sm leading-relaxed mb-10 relative z-10 max-w-sm mx-auto text-white font-semibold" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                       Backend, KI und technische Umsetzung. Hier wird alles intelligent und automatisiert.
                     </p>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                      <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 backdrop-blur-sm text-white border border-yellow-500/30 hover:from-yellow-500 hover:to-amber-600 w-full relative z-10 rounded-xl py-3 font-bold transition-all duration-300 shadow-lg" asChild>
                        <Link to="/lab">
                          Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Process Flow - Vertical Apple Style */}
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="mt-16 sm:mt-20">
              <motion.div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Animated background */}
                <motion.div animate={{
                background: ["radial-gradient(circle at 20% 30%, rgba(139,92,246,0.05) 0%, transparent 50%)", "radial-gradient(circle at 80% 70%, rgba(59,130,246,0.05) 0%, transparent 50%)", "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 50%)", "radial-gradient(circle at 20% 30%, rgba(139,92,246,0.05) 0%, transparent 50%)"]
              }} transition={{
                duration: 8,
                repeat: Infinity
              }} className="absolute inset-0" />
                
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2
              }} className="text-xl sm:text-2xl text-white font-light mb-12 text-center relative z-10 leading-relaxed">
                  All das geschieht hier – im kreativen Headquarter für Reichweite, Wirkung & Wachstum.
                </motion.p>
                
                {/* Vertical Process Flow */}
                <div className="space-y-8 relative z-10">
                  {/* Step 1 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -50
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.4,
                  duration: 0.6
                }} className="flex items-center group">
                    <motion.div whileHover={{
                    scale: 1.1
                  }} animate={{
                    boxShadow: ["0 0 20px rgba(139,92,246,0.2)", "0 0 30px rgba(139,92,246,0.4)", "0 0 20px rgba(139,92,246,0.2)"]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-300 rounded-2xl flex items-center justify-center border border-purple-500/30 mr-6">
                      <span className="text-2xl font-bold">1</span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">Strategie</h4>
                      <p className="text-gray-400 text-sm">Fundament und Planung für Ihren Erfolg</p>
                    </div>
                  </motion.div>
                  
                  {/* Connector */}
                  <motion.div initial={{
                  height: 0
                }} whileInView={{
                  height: "2rem"
                }} transition={{
                  delay: 0.6,
                  duration: 0.4
                }} className="w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50 ml-8" />
                  
                  {/* Step 2 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.8,
                  duration: 0.6
                }} className="flex items-center group">
                    <motion.div whileHover={{
                    scale: 1.1
                  }} animate={{
                    boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 30px rgba(59,130,246,0.4)", "0 0 20px rgba(59,130,246,0.2)"]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1
                  }} className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-300 rounded-2xl flex items-center justify-center border border-blue-500/30 mr-6">
                      <span className="text-2xl font-bold">2</span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">Umsetzung</h4>
                      <p className="text-gray-400 text-sm">Content-Produktion und Reichweite-Aufbau</p>
                    </div>
                  </motion.div>
                  
                  {/* Connector */}
                  <motion.div initial={{
                  height: 0
                }} whileInView={{
                  height: "2rem"
                }} transition={{
                  delay: 1.0,
                  duration: 0.4
                }} className="w-px bg-gradient-to-b from-blue-500/50 to-yellow-500/50 ml-8" />
                  
                  {/* Step 3 */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -50
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 1.2,
                  duration: 0.6
                }} className="flex items-center group">
                    <motion.div whileHover={{
                    scale: 1.1
                  }} animate={{
                    boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 30px rgba(245,158,11,0.4)", "0 0 20px rgba(245,158,11,0.2)"]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2
                  }} className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 text-yellow-300 rounded-2xl flex items-center justify-center border border-yellow-500/30 mr-6">
                      <span className="text-2xl font-bold">3</span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">Innovation</h4>
                      <p className="text-gray-400 text-sm">Technische Implementierung und Automation</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
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
            <h2 className="text-6xl font-bold text-white mb-6">Das Ergebnis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <h3 className="text-2xl font-bold text-white mb-4">Klare Strategie</h3>
              <p className="text-gray-300">Eine durchdachte Roadmap und visuelle Identität als solides Fundament.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Überzeugende Inhalte</h3>
              <p className="text-gray-300">Content, der Ihre Zielgruppe erreicht und nachhaltig begeistert.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Intelligente Umsetzung</h3>
              <p className="text-gray-300">Technische Exzellenz und Automatisierung für nachhaltigen Erfolg.</p>
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