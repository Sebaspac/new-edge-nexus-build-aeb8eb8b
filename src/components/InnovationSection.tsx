import { motion } from "framer-motion";
import { Lightbulb, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

export const InnovationSection = () => {
  return (
    <ScrollAnimation 
      animation="fadeUp" 
      className="innovation-section relative -mt-32 pt-40 pb-20 bg-gradient-subtle overflow-hidden"
    >
      {/* Simplified background elements for better performance */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-primary/8 rounded-full blur-xl"
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 bg-accent/8 rounded-full blur-xl"
        animate={{ y: [0, 10, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container-xl relative">
        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-stretch mb-24 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* Left: Core Philosophy */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            className="space-y-6"
          >
            <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-background via-surface to-surface-elevated border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <CardContent className="relative p-10 h-full flex">
                <div className="flex-1 flex flex-col">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 shadow-lg shadow-primary/20 mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Lightbulb className="w-8 h-8 text-white drop-shadow-sm" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-primary leading-tight">
                    Innovation als Prozess
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    Für uns ist Innovation kein einzelnes Feature – sie ist ein kontinuierlicher Prozess. 
                    Wir schaffen den Zugang zu echter Innovation für KMU, Selbständige und Marken im Wandel.
                  </p>
                </div>
                
                {/* Team Collaboration Image */}
                <div className="w-32 h-32 ml-8 flex-shrink-0 rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src="/assets/804d1765-b7c9-45f5-93a3-dddb443996f4.png" 
                    alt="Team collaboration - people working together on innovative solutions" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Approach */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            className="space-y-6"
          >
            <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-surface via-surface-elevated to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              
              <CardContent className="relative p-10 h-full flex">
                <div className="flex-1 flex flex-col">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/80 shadow-lg shadow-accent/20 mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="w-8 h-8 text-white drop-shadow-sm" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-accent leading-tight">
                    Ganzheitliche Transformation
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    Unser Fokus liegt nicht nur auf Automatisierung oder Chatbots, sondern auf ganzheitlicher, 
                    kreativer Transformation: Von Markenentwicklung über Medienproduktion bis hin zu Prototypen und KI-gestützten Tools.
                  </p>
                </div>
                
                {/* Business Analytics Image */}
                <div className="w-32 h-32 ml-8 flex-shrink-0 rounded-xl overflow-hidden border border-accent/20">
                  <img 
                    src="/assets/72768da6-5ac5-423e-a9df-579dd83dc1aa.png" 
                    alt="Business analytics and data visualization - comprehensive transformation approach" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Vision Statement */}
        <ScrollAnimation animation="fadeUp" delay={0.3} className="text-center mb-20 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-surface-elevated border-0 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
              
              <CardContent className="relative p-12 text-center">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary mb-10 shadow-lg shadow-primary/15"
                  animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Brain className="w-10 h-10 text-white drop-shadow-sm" />
                </motion.div>
                
                <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  Kreatives Headquarter<br />für Innovation
                </h3>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nicht als klassische Agentur, sondern als Ort, an dem Ideen, Technologien und Design zu echter Zukunftskraft werden.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </CardContent>
            </Card>
          </motion.div>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
};