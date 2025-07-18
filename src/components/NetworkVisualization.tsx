import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const NetworkVisualization = () => {
  return (
    <Card className="bg-transparent border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
      <CardContent className="p-12 text-center relative overflow-hidden">
        {/* Network Animation Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {/* Animated connection lines */}
            <motion.path
              d="M50,50 Q150,100 250,50 T450,100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,150 Q200,200 300,150 T500,200"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M150,80 Q250,130 350,80 T550,130"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Network nodes */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 border-2 border-blue-400 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">10</div>
              </div>
              <div className="text-gray-300 text-sm font-medium">Coaches</div>
            </motion.div>

            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 border-2 border-purple-400 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">3</div>
              </div>
              <div className="text-gray-300 text-sm font-medium">Creative Agencys</div>
            </motion.div>

            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-cyan-500/20 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">3</div>
              </div>
              <div className="text-gray-300 text-sm font-medium">Entwickler</div>
            </motion.div>

            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-yellow-500/20 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">4</div>
              </div>
              <div className="text-gray-300 text-sm font-medium">Länder</div>
            </motion.div>

            <motion.div 
              className="text-center relative col-span-2 md:col-span-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">5</div>
              </div>
              <div className="text-gray-300 text-sm font-medium">Sprachen</div>
            </motion.div>
          </div>

          {/* Central network hub */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 border border-white/40 rounded-full backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"></div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkVisualization;