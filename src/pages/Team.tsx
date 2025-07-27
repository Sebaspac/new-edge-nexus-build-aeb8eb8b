import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/contexts/LanguageContext";
import { LazyImage } from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Palette, Globe, Briefcase, ArrowRight, Star, TrendingUp, Zap } from "lucide-react";
const Team = () => {
  const {
    t
  } = useLanguage();
  const [contactClick, setContactClick] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const handleContactClick = () => {
    setContactClick(true);
    setTimeout(() => setContactClick(false), 200);
  };

  // Team data
  const founders = [{
    name: "Wenjamin Zabezhanskiy",
    role: "Geschäftsführer & Strategy Lead",
    image: "/lovable-uploads/8aa5239b-f420-4047-a353-3b2eb4c3d9ee.png",
    bio: "Strategischer Visionär mit 10+ Jahren Erfahrung in Brand Intelligence und digitaler Transformation.",
    expertise: ["Brand Strategy", "Digital Transformation", "Business Development"]
  }, {
    name: "Sebastian Pachon",
    role: "Geschäftsführer & Tech Lead",
    image: "/placeholder.svg",
    bio: "Technologie-Experte mit Fokus auf innovative Lösungen und Creative Technology.",
    expertise: ["Creative Technology", "Digital Innovation", "Team Leadership"]
  }];
  const networkStats = [{
    icon: Users,
    label: "Coaches",
    value: "10",
    color: "text-purple-500"
  }, {
    icon: Code,
    label: "Entwickler",
    value: "2",
    color: "text-blue-500"
  }, {
    icon: Palette,
    label: "Creative Agencies",
    value: "3",
    color: "text-pink-500"
  }, {
    icon: Globe,
    label: "Länder",
    value: "4",
    color: "text-green-500"
  }, {
    icon: Briefcase,
    label: "Freelancer",
    value: "15",
    color: "text-orange-500"
  }];
  const clients = [{
    name: "BMW",
    logo: "/placeholder.svg"
  }, {
    name: "MINI",
    logo: "/placeholder.svg"
  }, {
    name: "Pressonit",
    logo: "/placeholder.svg"
  }, {
    name: "Infosys Consulting",
    logo: "/placeholder.svg"
  }, {
    name: "Serviceplan Group",
    logo: "/placeholder.svg"
  }];
  return <>
      <Helmet>
        <title>Unser Team - New Edge Brand</title>
        <meta name="description" content="Lernen Sie das Team von New Edge Brand kennen - Experten für Strategie, Content & Technologie." />
      </Helmet>

      <div className="min-h-screen bg-white" ref={containerRef}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div style={{
            y,
            opacity
          }} className="text-center max-w-4xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Profis für Strategie, Content & Tech
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    UNSER TEAM
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Wir bringen Wissen und Erfahrung mit – 
                  <br className="hidden md:block" />
                  <span className="font-semibold text-purple-600">
                    für Ihren digitalen Erfolg
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-40 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <motion.div animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" />
        </section>

        {/* Founders Section */}
        

        {/* Network Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container mx-auto px-6">
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
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Unser <span className="text-purple-600">Netzwerk</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-16">
              {networkStats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.05
            }} className="text-center">
                  <Card className="p-6 border-none shadow-lg bg-white">
                    <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-black mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>)}
            </div>

            {/* Network Visualization */}
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1
          }} className="relative max-w-3xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Globales Expertennetzwerk</h3>
                  <p className="text-purple-100 mb-6">
                    Strategisch verteilte Teams in 4 Ländern, die nahtlos zusammenarbeiten
                  </p>
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="w-6 h-6" />
                    <span>100% Remote-Ready</span>
                    <Zap className="w-6 h-6 ml-4" />
                    <span>Agile Workflows</span>
                  </div>
                </div>
                
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full" animate={{
                  x: [0, 100, 200, 300],
                  y: [0, -50, 50, 0],
                  opacity: [0, 1, 1, 0]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }} style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`
                }} />)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client References */}
        <section className="py-20">
          <div className="container mx-auto px-6">
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
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Unsere <span className="text-purple-600">Erfahrung</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Wir bringen über 7 Jahre Inhouse- und Projekterfahrung aus unterschiedlichsten Unternehmen und Branchen mit – von Startups bis Konzernen.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {clients.map((client, index) => <motion.div key={client.name} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.05
            }} className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                    <p className="text-sm font-semibold text-gray-700">{client.name}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Process Connection */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-6">
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
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Know-how trifft <span className="text-yellow-400">Prozess</span>
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[{
              phase: "Studio",
              title: "Strategie & Beratung",
              description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien",
              team: "Strategy Leads, Brand Coaches"
            }, {
              phase: "Media",
              title: "Content & Kreation",
              description: "Creative Agencies und Freelancer setzen Ihre Inhalte professionell um",
              team: "Creative Directors, Content Specialists"
            }, {
              phase: "Lab",
              title: "Technologie & Innovation",
              description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben",
              team: "Lead Developers, Tech Innovators"
            }].map((item, index) => <motion.div key={item.phase} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: index * 0.2
            }} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <Badge className="mb-4 bg-yellow-400 text-purple-900 px-4 py-2">
                      {item.phase}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-purple-100 mb-6">{item.description}</p>
                    <p className="text-sm text-yellow-400 font-semibold">{item.team}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
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
          }} className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Bereit für Ihr <span className="text-purple-600">Projekt?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Lernen Sie uns persönlich kennen und erfahren Sie, 
                wie unser Team Ihre Marke zum Erfolg führt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div animate={contactClick ? {
                scale: 0.95
              } : {
                scale: 1
              }} transition={{
                duration: 0.1
              }}>
                  <Button size="lg" onClick={handleContactClick} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                    Lernen Sie uns kennen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                
                
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Team;