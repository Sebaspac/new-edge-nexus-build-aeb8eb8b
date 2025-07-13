import { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, ArrowDown, ChevronDown, Palette, Video, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
      <FloatingBox position={[4, 1, -5]} color="#ec4899" />
    </>;
}
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

      {/* Navigation */}
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{
            scale: 1.1
          }} className="flex items-center">
              <img alt="New Edge Logo" className="h-8 w-8 mr-3" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
              <div className="text-2xl font-bold text-white">
                New Edge<span className="text-purple-400"></span>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300">Home</Link>
              
              <div className="relative flex items-center">
                <Link to="/services" className="text-white font-medium">
                  Services
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-300 hover:text-white transition-all duration-300 ml-1">
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 border border-purple-500/30 shadow-lg backdrop-blur-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/studio" className="w-full text-gray-300 hover:text-white hover:bg-purple-500/20">
                        New Edge Studio
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/media" className="w-full text-gray-300 hover:text-white hover:bg-blue-500/20">
                        New Edge Media
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lab" className="w-full text-gray-300 hover:text-white hover:bg-green-500/20">
                        New Edge Lab
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={scrollToContact} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  Kontakt
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

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
          }} className="inline-block text-transparent bg-clip-text text-8xl md:text-9xl font-black tracking-tight">
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
          }} className="text-8xl md:text-9xl font-black text-white italic mb-4">
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
          }} className="text-4xl md:text-6xl text-gray-400 font-light">
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
        }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Wir begleiten Sie auf einer strukturierten Reise von der ersten Idee bis zur finalen Implementierung.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">Ein nahtloser Prozess. Drei spezialisierte Teams. Ein Ziel.</span>
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{
              y: [0, 10, 0]
            }} 
            transition={{
              duration: 2,
              repeat: Infinity
            }} 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const nextSection = document.querySelector('.key-activities-section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
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

      {/* Key Activities Section */}
      <section className="key-activities-section relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
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
          }} className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-600 text-white px-12 py-6 rounded-full text-2xl font-bold mb-12">
              Key Activities
            </motion.div>
            <h2 className="text-6xl font-bold text-white mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Studio Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} onHoverStart={() => setHoveredCard('studio')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div animate={hoveredCard === 'studio' ? {
                    background: ["radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)"]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="absolute inset-0" />
                    
                    <motion.div animate={hoveredCard === 'studio' ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10">
                      New Edge Studio
                    </motion.div>
                    
                    <motion.div variants={iconVariants} whileHover="hover" className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-lg border border-purple-500/30 relative z-10">
                      <Palette className="w-10 h-10 text-purple-400" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">STUDIO</h3>
                    <p className="text-lg text-purple-200 mb-6 leading-relaxed relative z-10">
                      Ihre Ideen, unsere Strategie
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                      Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.
                    </p>
                    
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 w-full relative z-10" asChild>
                        <Link to="/studio">
                          Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Animated Arrow */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{
                  x: [0, 10, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Media Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} onHoverStart={() => setHoveredCard('media')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <motion.div animate={hoveredCard === 'media' ? {
                    background: ["radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="absolute inset-0" />
                    
                    <motion.div animate={hoveredCard === 'media' ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10">
                      New Edge Media
                    </motion.div>
                    
                    <motion.div variants={iconVariants} whileHover="hover" className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-lg border border-blue-500/30 relative z-10">
                      <Video className="w-10 h-10 text-blue-400" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">MEDIA</h3>
                    <p className="text-lg text-blue-200 mb-6 leading-relaxed relative z-10">
                      Für ein klares & einzigartiges Bild nach Außen
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                      Content, der bewegt. Hier entstehen alle visuellen und medialen Inhalte für Ihre Marke.
                    </p>
                    
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 w-full relative z-10" asChild>
                        <Link to="/media">
                          Content produzieren <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{
                  x: [0, 10, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}>
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Lab Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} onHoverStart={() => setHoveredCard('lab')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <motion.div animate={hoveredCard === 'lab' ? {
                    background: ["radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(5,150,105,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)"]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="absolute inset-0" />
                    
                    <motion.div animate={hoveredCard === 'lab' ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10">
                      New Edge Lab
                    </motion.div>
                    
                    <motion.div variants={iconVariants} whileHover="hover" className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-lg border border-green-500/30 relative z-10">
                      <Cpu className="w-10 h-10 text-green-400" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">LAB</h3>
                    <p className="text-lg text-green-200 mb-6 leading-relaxed relative z-10">
                      Die perfekte Schnittstelle für Strategie & Technologie
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                      Backend, KI und technische Umsetzung. Hier wird alles intelligent und automatisiert.
                    </p>
                    
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 w-full relative z-10" asChild>
                        <Link to="/lab">
                          Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Process Flow */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="mt-20 text-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 backdrop-blur-lg relative overflow-hidden"
              >
                {/* Animated background */}
                <motion.div 
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg text-white font-medium mb-6 relative z-10"
                >
                  All das geschieht hier - im kreativen Headquarter für Reichweite, Wirkung & Wachstum.
                </motion.p>
                
                <div className="flex items-center justify-center space-x-4 text-sm relative z-10">
                  <motion.span 
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(139,92,246,0.3)",
                        "0 0 20px rgba(139,92,246,0.5)",
                        "0 0 10px rgba(139,92,246,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 cursor-pointer"
                  >
                    Strategie
                  </motion.span>
                  
                  <motion.div animate={{
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                  
                  <motion.span 
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(59,130,246,0.3)",
                        "0 0 20px rgba(59,130,246,0.5)", 
                        "0 0 10px rgba(59,130,246,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 cursor-pointer"
                  >
                    Umsetzung
                  </motion.span>
                  
                  <motion.div animate={{
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.7
                  }}>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                  
                  <motion.span 
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(245,158,11,0.3)",
                        "0 0 20px rgba(245,158,11,0.5)",
                        "0 0 10px rgba(245,158,11,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30 cursor-pointer"
                  >
                    Technologie
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-900 relative overflow-hidden">
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
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 text-xl px-16 py-6 rounded-full shadow-2xl" asChild>
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
    </div>;
};
export default Services;