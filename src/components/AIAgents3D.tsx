import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Environment, Float } from '@react-three/drei';
import { motion, useScroll as useFramerScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

// Robot Component for each agent
const Robot = ({ position, color, animation }: { position: [number, number, number], color: string, animation: string }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    let animationId: number;
    
    const animate = () => {
      if (meshRef.current) {
        if (animation === 'rotate') {
          meshRef.current.rotation.y += 0.01;
        } else if (animation === 'bounce') {
          meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.002) * 0.2;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [animation, position]);

  return (
    <group ref={meshRef} position={position}>
      {/* Robot Head */}
      <Box args={[0.8, 0.8, 0.8]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Robot Eyes */}
      <Sphere args={[0.1]} position={[-0.2, 1.6, 0.35]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.1]} position={[0.2, 1.6, 0.35]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Robot Body */}
      <Cylinder args={[0.6, 0.8, 1.5]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Robot Arms */}
      <Cylinder args={[0.15, 0.15, 1]} position={[-1, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 1]} position={[1, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Robot Legs */}
      <Cylinder args={[0.2, 0.2, 1]} position={[-0.3, -0.8, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 1]} position={[0.3, -0.8, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
    </group>
  );
};

// Scene Components for each agent
const RAGAgentScene = ({ active }: { active: boolean }) => (
  <group visible={active}>
    <Robot position={[0, 0, 0]} color="#0066ff" animation="rotate" />
    
    {/* Floating Data Elements */}
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box args={[0.3, 0.3, 0.1]} position={[-2, 1, 0]}>
        <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
      </Box>
    </Float>
    
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere args={[0.2]} position={[2, 0.5, 0]}>
        <meshStandardMaterial color="#ff00ff" transparent opacity={0.6} />
      </Sphere>
    </Float>
    
    {/* Light rays */}
    <pointLight position={[0, 2, 2]} intensity={1} color="#0066ff" />
    <spotLight position={[3, 3, 3]} angle={0.3} penumbra={1} intensity={1} color="#00ffff" />
  </group>
);

const LeadGenAgentScene = ({ active }: { active: boolean }) => (
  <group visible={active}>
    <Robot position={[0, 0, 0]} color="#ff6600" animation="bounce" />
    
    {/* Target Elements */}
    <Float speed={2} rotationIntensity={1} floatIntensity={0.3}>
      <group position={[-2, 1, -1]}>
        <Cylinder args={[0.8, 0.8, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ff6600" transparent opacity={0.3} />
        </Cylinder>
        <Cylinder args={[0.6, 0.6, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.5} />
        </Cylinder>
        <Cylinder args={[0.4, 0.4, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffdd00" transparent opacity={0.7} />
        </Cylinder>
      </group>
    </Float>
    
    {/* Scanning beams */}
    <pointLight position={[0, 2, 1]} intensity={1.5} color="#ff6600" />
    <spotLight position={[-3, 2, 2]} angle={0.5} penumbra={1} intensity={1} color="#ffaa00" />
  </group>
);

const ContentAgentScene = ({ active }: { active: boolean }) => (
  <group visible={active}>
    <Robot position={[0, 0, 0]} color="#00aa44" animation="rotate" />
    
    {/* Floating Text Elements */}
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Box args={[1.5, 0.8, 0.1]} position={[-1.5, 1.5, 0]}>
        <meshStandardMaterial color="#00ff88" transparent opacity={0.4} />
      </Box>
    </Float>
    
    <Float speed={0.8} rotationIntensity={0.6} floatIntensity={0.4}>
      <Box args={[1.2, 0.6, 0.1]} position={[1.8, 0.8, 0]}>
        <meshStandardMaterial color="#44ff44" transparent opacity={0.5} />
      </Box>
    </Float>
    
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <Box args={[0.8, 1, 0.1]} position={[0.5, -0.5, 1]}>
        <meshStandardMaterial color="#88ff00" transparent opacity={0.6} />
      </Box>
    </Float>
    
    {/* Writing light */}
    <pointLight position={[0, 3, 1]} intensity={1.2} color="#00ff44" />
    <spotLight position={[2, 2, 3]} angle={0.4} penumbra={0.8} intensity={1} color="#44ff88" />
  </group>
);

const VoiceAgentScene = ({ active }: { active: boolean }) => (
  <group visible={active}>
    <Robot position={[0, 0, 0]} color="#aa00ff" animation="bounce" />
    
    {/* Sound Waves */}
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.2}>
      <group position={[0, 1.5, 0]}>
        {[1, 1.5, 2, 2.5].map((radius, index) => (
          <Cylinder 
            key={index}
            args={[radius, radius, 0.05]} 
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, index * 0.1]}
          >
            <meshStandardMaterial 
              color="#aa00ff" 
              transparent 
              opacity={0.3 - index * 0.05}
              wireframe
            />
          </Cylinder>
        ))}
      </group>
    </Float>
    
    {/* Communication elements */}
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
      <Sphere args={[0.3]} position={[-2.5, 0.8, 0]}>
        <meshStandardMaterial color="#ff00aa" transparent opacity={0.6} />
      </Sphere>
    </Float>
    
    <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.5}>
      <Sphere args={[0.25]} position={[2.2, 1.2, 0]}>
        <meshStandardMaterial color="#ff66ff" transparent opacity={0.5} />
      </Sphere>
    </Float>
    
    {/* Voice lighting */}
    <pointLight position={[0, 2, 2]} intensity={1.3} color="#aa00ff" />
    <spotLight position={[-2, 3, 2]} angle={0.6} penumbra={1} intensity={0.8} color="#ff66ff" />
  </group>
);

const Scene3D = ({ activeScene }: { activeScene: number }) => {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      
      <RAGAgentScene active={activeScene === 0} />
      <LeadGenAgentScene active={activeScene === 1} />
      <ContentAgentScene active={activeScene === 2} />
      <VoiceAgentScene active={activeScene === 3} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const AIAgents3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const { scrollYProgress } = useFramerScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sceneProgress = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useEffect(() => {
    const unsubscribe = sceneProgress.onChange((latest) => {
      setActiveScene(Math.min(Math.floor(latest), 3));
    });
    return unsubscribe;
  }, [sceneProgress]);

  const agents = [
    {
      title: "RAG Agent",
      subtitle: "Wissen auf Abruf",
      description: "Holt Antworten aus deinen Dokumenten, Datenbanken & dem Web – blitzschnell und 100% kontextbasiert.",
      color: "#0066ff"
    },
    {
      title: "Lead Gen Agent", 
      subtitle: "Automatisch neue Kunden finden",
      description: "Findet qualifizierte Leads aus Web, LinkedIn & Jobplattformen – 24/7 und punktgenau.",
      color: "#ff6600"
    },
    {
      title: "Content Agent",
      subtitle: "Texte, die wirken", 
      description: "Erstellt Texte für Social Media, Website & E-Mail – automatisiert, markentreu & mehrsprachig.",
      color: "#00aa44"
    },
    {
      title: "Voice Agent",
      subtitle: "Immer erreichbar, immer freundlich",
      description: "Nimmt Anrufe entgegen, spricht natürlich & beantwortet Anfragen – sogar nachts.",
      color: "#aa00ff"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
            <Suspense fallback={null}>
              <Scene3D activeScene={activeScene} />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lerne dein digitales
              </span>
              <br />
              <span className="text-white">KI-Team kennen</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Vier intelligente Agenten, die dein Unternehmen revolutionieren
            </p>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {agents.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeScene ? 'bg-white scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Panels */}
      <div className="absolute inset-0 pointer-events-none">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-end pr-8 sm:pr-16 pointer-events-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: activeScene === index ? 1 : 0,
              x: activeScene === index ? 0 : 100
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-md bg-black/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
              <div 
                className="w-4 h-4 rounded-full mb-4"
                style={{ backgroundColor: agent.color }}
              />
              
              <h2 className="text-3xl font-bold text-white mb-2">
                {agent.title}
              </h2>
              
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: agent.color }}
              >
                {agent.subtitle}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {agent.description}
              </p>
              
              <Button 
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold"
                size="lg"
              >
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
        <p className="text-sm mt-2 text-gray-400">Scroll to explore</p>
      </div>
    </div>
  );
};

export default AIAgents3D;