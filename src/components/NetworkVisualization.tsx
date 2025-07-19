import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const NetworkVisualization = () => {
  const networkNodes = [
    { id: 1, label: "Coaches", value: "10", position: { x: 20, y: 20 }, color: "hsl(var(--secondary))" },
    { id: 2, label: "Creative Agencys", value: "3", position: { x: 80, y: 15 }, color: "hsl(var(--primary))" },
    { id: 3, label: "Freelancer", value: ">15", position: { x: 85, y: 65 }, color: "hsl(var(--accent))" },
    { id: 4, label: "Entwickler", value: "2", position: { x: 15, y: 75 }, color: "hsl(214 70% 65%)" },
    { id: 5, label: "Länder", value: "4", position: { x: 75, y: 85 }, color: "hsl(255 70% 65%)" }
  ];

  return (
    <Card className="bg-transparent border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
      <CardContent className="p-8 md:p-12 relative overflow-hidden min-h-[400px]">
        {/* Title */}
        <div className="absolute top-4 left-6 z-20">
          <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Unser Netzwerk
          </div>
        </div>

        {/* SVG Network Visualization */}
        <div className="absolute inset-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Central Hub */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="hsl(var(--background))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Inner pulse circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="4"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Connection Lines */}
            {networkNodes.map((node, index) => (
              <motion.line
                key={`line-${node.id}`}
                x1="50"
                y1="50"
                x2={node.position.x}
                y2={node.position.y}
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5,
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Outer Nodes */}
            {networkNodes.map((node, index) => (
              <motion.g key={node.id}>
                {/* Node Circle */}
                <motion.circle
                  cx={node.position.x}
                  cy={node.position.y}
                  r="3.5"
                  fill="hsl(var(--background))"
                  stroke={node.color}
                  strokeWidth="2"
                  filter="url(#glow)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.15 + 0.8
                  }}
                />
                
                {/* Inner dot */}
                <motion.circle
                  cx={node.position.x}
                  cy={node.position.y}
                  r="1.5"
                  fill={node.color}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.15 + 1
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Node Labels */}
        <div className="relative z-10 w-full h-full">
          {networkNodes.map((node, index) => (
            <motion.div
              key={`label-${node.id}`}
              className="absolute text-center"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 + 1.2
              }}
            >
              <div className="relative">
                {/* Value */}
                <div 
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: node.color }}
                >
                  {node.value}
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {node.label}
                </div>
                
                {/* Underline */}
                <motion.div
                  className="h-0.5 bg-current opacity-60 mt-1"
                  style={{ backgroundColor: node.color }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 + 1.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default NetworkVisualization;