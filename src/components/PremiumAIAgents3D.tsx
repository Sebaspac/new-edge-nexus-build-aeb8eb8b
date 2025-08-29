import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, Box, Torus, Cylinder } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Database, BarChart3, FileText, Headphones } from 'lucide-react';
import * as THREE from 'three';

// Robot component for each agent
const Robot = ({ position, color, icon, isActive, scene }: { 
  position: [number, number, number]; 
  color: string; 
  icon: string;
  isActive: boolean;
  scene: number;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={position}
      scale={isActive ? 1.2 : 0.8}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Robot Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={isActive ? color : '#000000'}
          emissiveIntensity={isActive ? 0.3 : 0}
        />
      </Box>
      
      {/* Robot Head */}
      <Sphere args={[0.6]} position={[0, 1.2, 0]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={isActive ? color : '#000000'}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.1]} position={[-0.2, 1.3, 0.5]}>
        <meshStandardMaterial color="#ffffff" emissive="#00ff00" emissiveIntensity={isActive ? 1 : 0.5} />
      </Sphere>
      <Sphere args={[0.1]} position={[0.2, 1.3, 0.5]}>
        <meshStandardMaterial color="#ffffff" emissive="#00ff00" emissiveIntensity={isActive ? 1 : 0.5} />
      </Sphere>
      
      {/* Arms */}
      <Cylinder args={[0.15, 0.15, 1]} position={[-0.8, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 1]} position={[0.8, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      {/* Legs */}
      <Cylinder args={[0.2, 0.2, 1.2]} position={[-0.3, -1.3, 0]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 1.2]} position={[0.3, -1.3, 0]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      {/* Floating Data Elements for different agents */}
      {scene === 0 && ( // RAG Agent - Data elements
        <>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Box args={[0.3, 0.2, 0.1]} position={[1.5, 1, 1]}>
              <meshStandardMaterial color="#4FC3F7" emissive="#4FC3F7" emissiveIntensity={0.3} />
            </Box>
          </Float>
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <Sphere args={[0.15]} position={[-1.2, 0.8, 1.2]}>
              <meshStandardMaterial color="#81C784" emissive="#81C784" emissiveIntensity={0.3} />
            </Sphere>
          </Float>
        </>
      )}
      
      {scene === 1 && ( // Lead Gen Agent - Target elements
        <>
          <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.6}>
            <Torus args={[0.5, 0.1]} position={[1.8, 0.5, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#FF7043" emissive="#FF7043" emissiveIntensity={0.4} />
            </Torus>
          </Float>
          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
            <Box args={[0.2, 0.2, 0.2]} position={[-1.5, 1.2, 1]}>
              <meshStandardMaterial color="#FFB74D" emissive="#FFB74D" emissiveIntensity={0.3} />
            </Box>
          </Float>
        </>
      )}
      
      {scene === 2 && ( // Content Agent - Text elements
        <>
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.9}>
            <Box args={[0.8, 0.1, 0.5]} position={[1.2, 1.5, 0.8]}>
              <meshStandardMaterial color="#AB47BC" emissive="#AB47BC" emissiveIntensity={0.3} />
            </Box>
          </Float>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <Cylinder args={[0.05, 0.05, 1]} position={[-1.8, 0.3, 1.2]}>
              <meshStandardMaterial color="#7E57C2" emissive="#7E57C2" emissiveIntensity={0.4} />
            </Cylinder>
          </Float>
        </>
      )}
      
      {scene === 3 && ( // Voice Agent - Sound waves
        <>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.4}>
            <Torus args={[0.8, 0.05]} position={[0, 1.8, 1.5]} rotation={[0, Math.PI / 4, 0]}>
              <meshStandardMaterial color="#66BB6A" emissive="#66BB6A" emissiveIntensity={0.5} />
            </Torus>
          </Float>
          <Float speed={2.2} rotationIntensity={0.1} floatIntensity={0.6}>
            <Torus args={[1.2, 0.03]} position={[0, 1.8, 1.5]} rotation={[0, Math.PI / 4, 0]}>
              <meshStandardMaterial color="#4CAF50" emissive="#4CAF50" emissiveIntensity={0.3} />
            </Torus>
          </Float>
        </>
      )}
    </group>
  );
};

// Scene component
const Scene = ({ activeScene }: { activeScene: number }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    // Smooth camera transitions based on active scene
    const targetPosition = new THREE.Vector3();
    switch (activeScene) {
      case 0:
        targetPosition.set(-2, 2, 8);
        break;
      case 1:
        targetPosition.set(2, 1, 7);
        break;
      case 2:
        targetPosition.set(-1, 3, 9);
        break;
      case 3:
        targetPosition.set(1, 2, 6);
        break;
      default:
        targetPosition.set(0, 2, 8);
    }
    
    // Animate camera position
    const startPosition = camera.position.clone();
    const duration = 2000;
    const startTime = Date.now();
    
    const animateCamera = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };
    
    animateCamera();
  }, [activeScene, camera]);

  const agents = [
    { position: [-3, 0, 0] as [number, number, number], color: '#9C27B0', scene: 0 },
    { position: [3, 0, 0] as [number, number, number], color: '#2196F3', scene: 1 },
    { position: [-3, 0, -6] as [number, number, number], color: '#FF9800', scene: 2 },
    { position: [3, 0, -6] as [number, number, number], color: '#4CAF50', scene: 3 }
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        target-position={[0, 0, 0]}
      />
      
      {/* Robots */}
      {agents.map((agent, index) => (
        <Robot 
          key={index}
          position={agent.position}
          color={agent.color}
          icon=""
          isActive={activeScene === index}
          scene={agent.scene}
        />
      ))}
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, -3]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
      
      {/* Background elements */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <Sphere args={[0.5]} position={[8, 5, -10]}>
          <meshStandardMaterial color="#333" wireframe />
        </Sphere>
      </Float>
      <Float speed={0.3} rotationIntensity={0.05} floatIntensity={0.1}>
        <Torus args={[2, 0.1]} position={[-8, 3, -12]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
          <meshStandardMaterial color="#444" wireframe />
        </Torus>
      </Float>
    </>
  );
};

// Main component
const PremiumAIAgents3D = () => {
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const agents = [
    {
      title: "RAG Agent",
      subtitle: "Wissen auf Abruf",
      description: "Holt Antworten aus deinen Dokumenten, Datenbanken & dem Web – blitzschnell und 100% kontextbasiert.",
      icon: Database,
      color: "hsl(var(--primary))",
      features: [
        "Sofort Zugriff auf aktualisiertes Expertenwissen ohne manuellen Aufwand",
        "Spart Ihrem Team wertvolle Stunden bei der Informationssuche", 
        "Erstellt auf Knopfdruck Marktanalysen oder Trendüberblicke"
      ]
    },
    {
      title: "Lead Gen Agent",
      subtitle: "Automatisch neue Kunden finden",
      description: "Findet qualifizierte Leads aus Web, LinkedIn & Jobplattformen – 24/7 und punktgenau.",
      icon: BarChart3,
      color: "hsl(var(--secondary))",
      features: [
        "Ein stetiger Strom neuer, qualifizierter Leads ohne Mehraufwand im Vertrieb",
        "Höhere Abschlussraten durch personalisierte Ansprachen",
        "Scannt das Internet nach Branchen-News und generiert warme Leads"
      ]
    },
    {
      title: "Content Agent", 
      subtitle: "Texte, die wirken",
      description: "Erstellt Texte für Social Media, Website & E-Mail – automatisiert, markentreu & mehrsprachig.",
      icon: FileText,
      color: "hsl(var(--accent))",
      features: [
        "Regelmäßig frische Inhalte, ohne dass Sie einen Texter beauftragen müssen",
        "Steigert Ihre Online-Sichtbarkeit und stärkt die Markenbindung",
        "Schreibt redaktionelle Artikel oder Social-Posts für sofortige Veröffentlichung"
      ]
    },
    {
      title: "Voice Agent",
      subtitle: "Immer erreichbar, immer freundlich", 
      description: "Nimmt Anrufe entgegen, spricht natürlich & beantwortet Anfragen – sogar nachts.",
      icon: Headphones,
      color: "#4CAF50",
      features: [
        "Rund-um-die-Uhr-Erreichbarkeit ohne zusätzlichen Personalaufwand",
        "Freundliche, effiziente Kundenkommunikation – sogar außerhalb der Geschäftszeiten",
        "Bucht selbstständig Termine oder beantwortet häufige Kundenfragen per Telefon"
      ]
    }
  ];

  // Scroll-based scene switching
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      const scrollTop = Math.max(0, -rect.top);
      const scrollBottom = Math.max(0, scrollTop - windowHeight);
      const progress = Math.min(scrollTop / (elementHeight - windowHeight), 1);
      
      setScrollProgress(progress);
      
      // Switch scenes based on scroll progress
      const sceneIndex = Math.floor(progress * 4);
      setActiveScene(Math.min(sceneIndex, 3));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentAgent = agents[activeScene];
  const IconComponent = currentAgent.icon;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[400vh] bg-gradient-to-br from-background via-surface to-background overflow-hidden"
    >
      {/* Hero Introduction */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 2, 8], fov: 75 }}
            shadows
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <Scene activeScene={activeScene} />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                enableRotate={true}
                autoRotate={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 6}
              />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          {scrollProgress < 0.1 ? (
            // Initial hero text
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary tracking-wider uppercase">UNSER DIGITALES TEAM</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Lernen Sie unser{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  KI-Team
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground">
                  kennen
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Unsere intelligenten Assistenten arbeiten rund um die Uhr für Sie. 
                Jeder Agent hat seine Spezialität und unterstützt Sie in verschiedenen Bereichen Ihres Unternehmens.
              </p>
              
              <div className="text-sm text-muted-foreground animate-bounce">
                ↓ Scrollen Sie für eine interaktive Tour
              </div>
            </div>
          ) : (
            // Agent-specific content
            <div className="animate-slide-up max-w-4xl mx-auto">
              <div className="glass p-8 sm:p-12 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: currentAgent.color }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {currentAgent.title}
                </h3>
                <p className="text-lg text-primary mb-6 font-medium">
                  {currentAgent.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentAgent.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {currentAgent.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 animate-pulse" />
                      <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {agents.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeScene ? 'bg-primary w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="absolute bottom-0 w-full py-16 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Welcher Agent passt zu Ihnen?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie unsere KI-Agenten Ihr Unternehmen voranbringen können.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-12 py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Kostenlose Beratung vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumAIAgents3D;