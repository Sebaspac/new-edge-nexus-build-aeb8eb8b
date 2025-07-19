import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const NetworkVisualization = () => {
  const networkNodes = [
    { id: 1, label: "Coaches", value: "10", angle: -90, radius: 35, color: "214 70% 55%" },
    { id: 2, label: "Creative Agencys", value: "3", angle: -30, radius: 38, color: "255 45% 55%" },
    { id: 3, label: "Freelancer", value: ">15", angle: 30, radius: 42, color: "60 80% 50%" },
    { id: 4, label: "Länder", value: "4", angle: 90, radius: 35, color: "255 70% 65%" },
    { id: 5, label: "Entwickler", value: "2", angle: 150, radius: 40, color: "214 70% 65%" }
  ];

  // Calculate positions based on angle and radius
  const getPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(radian),
      y: 50 + radius * Math.sin(radian)
    };
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500">
      <CardContent className="p-8 relative overflow-hidden h-[350px]">
        {/* Title */}
        <motion.div 
          className="absolute top-6 left-6 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
            Unser Netzwerk
          </div>
        </motion.div>

        {/* Main SVG */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <svg className="w-full h-full max-w-md max-h-80" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(255 45% 55%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(214 70% 55%)" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Connection Lines */}
            {networkNodes.map((node, index) => {
              const pos = getPosition(node.angle, node.radius);
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1,
                    delay: index * 0.15 + 0.3,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {/* Central Hub */}
            <motion.circle
              cx="50"
              cy="50"
              r="4"
              fill="hsl(var(--background))"
              stroke="hsl(255 45% 55%)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Pulsing center */}
            <motion.circle
              cx="50"
              cy="50"
              r="1.5"
              fill="hsl(255 45% 55%)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Outer Nodes */}
            {networkNodes.map((node, index) => {
              const pos = getPosition(node.angle, node.radius);
              return (
                <motion.g key={`node-${node.id}`}>
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="2.5"
                    fill="hsl(var(--background))"
                    stroke={`hsl(${node.color})`}
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1 + 0.5
                    }}
                  />
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="1"
                    fill={`hsl(${node.color})`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1 + 0.7
                    }}
                  />
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* Node Labels */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-md h-80">
            {networkNodes.map((node, index) => {
              const pos = getPosition(node.angle, node.radius);
              const labelOffset = getPosition(node.angle, node.radius + 12);
              
              return (
                <motion.div
                  key={`label-${node.id}`}
                  className="absolute"
                  style={{
                    left: `${labelOffset.x}%`,
                    top: `${labelOffset.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 + 0.8
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="text-lg font-bold mb-0.5"
                      style={{ color: `hsl(${node.color})` }}
                    >
                      {node.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {node.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default NetworkVisualization;