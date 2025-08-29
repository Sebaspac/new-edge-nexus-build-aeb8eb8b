import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useScroll as useFramerScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import ErrorBoundary from './ErrorBoundary';

// Robot Component for each agent
const Robot = ({ position = [0, 0, 0], color = "#ffffff", animation = "none" }: { 
  position?: [number, number, number], 
  color?: string, 
  animation?: string 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!meshRef.current || !Array.isArray(position) || position.length !== 3) return;
    
    let animationId: number;
    
    const animate = () => {
      try {
        if (meshRef.current && animation) {
          if (animation === 'rotate') {
            meshRef.current.rotation.y += 0.01;
          } else if (animation === 'bounce') {
            const baseY = typeof position[1] === 'number' ? position[1] : 0;
            meshRef.current.position.y = baseY + Math.sin(Date.now() * 0.002) * 0.2;
          }
        }
        animationId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
      }
    };
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [animation, position]);

  const safePosition = Array.isArray(position) && position.length === 3 ? position : [0, 0, 0];
  const safeColor = typeof color === 'string' ? color : "#ffffff";

  return (
    <group ref={meshRef} position={safePosition as [number, number, number]}>
      {/* Robot Head */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Robot Eyes */}
      <mesh position={[-0.2, 1.6, 0.35]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.6, 0.35]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Robot Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 1.5, 8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Robot Arms */}
      <mesh position={[-1, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Robot Legs */}
      <mesh position={[-0.3, -0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, -0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
        <meshStandardMaterial color={safeColor} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Scene Components for each agent - Simplified and Safe
const RAGAgentScene = ({ active }: { active: boolean }) => {
  if (!active) return null;
  
  return (
    <group>
      <Robot position={[0, 0, 0]} color="#0066ff" animation="rotate" />
      
      {/* Simplified floating elements without Float component */}
      <mesh position={[-2, 1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.1]} />
        <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
      </mesh>
      
      <mesh position={[2, 0.5, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" transparent opacity={0.6} />
      </mesh>
      
      {/* Basic lighting */}
      <pointLight position={[0, 2, 2]} intensity={1} color="#0066ff" />
    </group>
  );
};

const LeadGenAgentScene = ({ active }: { active: boolean }) => {
  if (!active) return null;
  
  return (
    <group>
      <Robot position={[0, 0, 0]} color="#ff6600" animation="bounce" />
      
      {/* Simplified target elements */}
      <group position={[-2, 1, -1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 16]} />
          <meshStandardMaterial color="#ff6600" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.12, 16]} />
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.5} />
        </mesh>
      </group>
      
      {/* Basic lighting */}
      <pointLight position={[0, 2, 1]} intensity={1.5} color="#ff6600" />
    </group>
  );
};

const ContentAgentScene = ({ active }: { active: boolean }) => {
  if (!active) return null;
  
  return (
    <group>
      <Robot position={[0, 0, 0]} color="#00aa44" animation="rotate" />
      
      {/* Simplified floating text elements */}
      <mesh position={[-1.5, 1.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial color="#00ff88" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[1.8, 0.8, 0]}>
        <boxGeometry args={[1.2, 0.6, 0.1]} />
        <meshStandardMaterial color="#44ff44" transparent opacity={0.5} />
      </mesh>
      
      {/* Basic lighting */}
      <pointLight position={[0, 3, 1]} intensity={1.2} color="#00ff44" />
    </group>
  );
};

const VoiceAgentScene = ({ active }: { active: boolean }) => {
  if (!active) return null;
  
  return (
    <group>
      <Robot position={[0, 0, 0]} color="#aa00ff" animation="bounce" />
      
      {/* Simplified sound waves */}
      <group position={[0, 1.5, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.05, 16]} />
          <meshStandardMaterial 
            color="#aa00ff" 
            transparent 
            opacity={0.3}
            wireframe
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]}>
          <cylinderGeometry args={[1.5, 1.5, 0.05, 16]} />
          <meshStandardMaterial 
            color="#aa00ff" 
            transparent 
            opacity={0.25}
            wireframe
          />
        </mesh>
      </group>
      
      {/* Communication elements */}
      <mesh position={[-2.5, 0.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff00aa" transparent opacity={0.6} />
      </mesh>
      
      {/* Basic lighting */}
      <pointLight position={[0, 2, 2]} intensity={1.3} color="#aa00ff" />
    </group>
  );
};

const Scene3D = ({ activeScene = 0 }: { activeScene?: number }) => {
  const safeActiveScene = typeof activeScene === 'number' && !isNaN(activeScene) ? activeScene : 0;
  
  try {
    return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <RAGAgentScene active={safeActiveScene === 0} />
        <LeadGenAgentScene active={safeActiveScene === 1} />
        <ContentAgentScene active={safeActiveScene === 2} />
        <VoiceAgentScene active={safeActiveScene === 3} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </>
    );
  } catch (error) {
    console.error('Scene3D render error:', error);
    return null;
  }
};

const AIAgents3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  
  let scrollYProgress, sceneProgress;
  
  try {
    const scrollData = useFramerScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });
    scrollYProgress = scrollData.scrollYProgress;
    sceneProgress = useTransform(scrollYProgress, [0, 1], [0, 3]);
  } catch (error) {
    console.error('Scroll setup error:', error);
  }

  useEffect(() => {
    if (!sceneProgress) return;
    
    const unsubscribe = sceneProgress.onChange((latest) => {
      const safeLatest = typeof latest === 'number' && !isNaN(latest) ? latest : 0;
      setActiveScene(Math.min(Math.max(Math.floor(safeLatest), 0), 3));
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
          <ErrorBoundary>
            <Canvas 
              camera={{ position: [0, 2, 8], fov: 50 }}
              onCreated={({ gl }) => {
                gl.setClearColor('#000000');
              }}
            >
              <Suspense fallback={null}>
                <Scene3D activeScene={activeScene} />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
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