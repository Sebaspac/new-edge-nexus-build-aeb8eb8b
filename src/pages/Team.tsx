import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/contexts/LanguageContext";
import { LazyImage } from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Code, Palette, Globe, Briefcase, ArrowRight, Play, Apple, Star } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
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
  const handleContactClick = () => {
    setContactClick(true);
    setTimeout(() => setContactClick(false), 200);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
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
    value: "10+",
    color: "text-blue-600"
  }, {
    icon: Code,
    label: "Entwickler",
    value: "2",
    color: "text-purple-600"
  }, {
    icon: Palette,
    label: "Creative Agencies",
    value: "3",
    color: "text-pink-600"
  }, {
    icon: Globe,
    label: "Länder",
    value: "4",
    color: "text-green-600"
  }, {
    icon: Briefcase,
    label: "Freelancer",
    value: "15+",
    color: "text-orange-600"
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

      {/* Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="light" />

      <div className="min-h-screen bg-white" ref={containerRef}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-tight">
              Unser Team
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Experten für Strategie, Content & Technologie
            </p>
          </motion.div>
        </section>

        {/* Founders Section - Apple Card Style */}
        

        {/* Network Stats - Apple Minimalist Style */}
        <section className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 md:text-6xl">
                Unser Netzwerk
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {networkStats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Client Experience */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">
                Unsere Erfahrung
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-6 text-3xl">
                Wir sind neu als Marke – aber nicht neu im Geschäft.
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-6">
                Unser Team bringt mehr als 4 Jahre kombinierte Inhouse- und Projekterfahrung mit - aus Agenturen, Konzernen und Tech-Startups.
              </p>
              {/* Quote Module */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="relative rounded-3xl overflow-hidden min-h-[400px] max-w-4xl mx-auto" style={{
              backgroundImage: "url('/placeholder.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex items-end justify-end p-12">
                  <div className="text-right max-w-2xl mb-8">
                    <blockquote className="text-2xl md:text-3xl font-medium text-purple-300 leading-relaxed mb-4 italic">
                      "Wir kennen kreative Prozesse, interne Entscheidungswege und strategische Herausforderungen aus erster Hand."
                    </blockquote>
                    <cite className="text-purple-200 text-lg font-light not-italic">
                      — Wenjamin Zabhezhanskiy
                    </cite>
                  </div>
                </div>
              </motion.div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-8 mb-4 font-bold text-5xl">
                Hintergrund unserer Teammitglieder:
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto font-light mb-8 text-sm">BMW • MINI • Infosys Consulting • Serviceplan Group • Pressonit • Campbell & Hörmann</p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">Aktuell entstehen erste Projekte - gemeinsam mit Innovationspartnern aus der DACH-Region.</p>
            </motion.div>
          </div>
        </section>

        {/* Process Connection - Apple Dark Theme */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Know-how trifft Prozess
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[{
              phase: "Studio",
              title: "Strategie & Beratung",
              description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.",
              team: "Strategy Leads, Brand Coaches"
            }, {
              phase: "Media",
              title: "Content & Kreation",
              description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.",
              team: "Creative Directors, Content Specialists"
            }, {
              phase: "Lab",
              title: "Technologie & Innovation",
              description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.",
              team: "Lead Developers, Tech Innovators"
            }].map((item, index) => <motion.div key={item.phase} initial={{
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
            }} className="text-center">
                  <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
                    <Badge className="mb-6 bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                      {item.phase}
                    </Badge>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-6 font-light leading-relaxed">{item.description}</p>
                    <p className="text-sm text-blue-400 font-medium">{item.team}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section - Apple Style */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">
                Bereit für Ihr Projekt?
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Lernen Sie uns persönlich kennen und erfahren Sie, 
                wie unser Team Ihre Marke zum Erfolg führt.
              </p>
              
              <motion.div animate={contactClick ? {
              scale: 0.98
            } : {
              scale: 1
            }} transition={{
              duration: 0.1
            }}>
                <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full border-0 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Lernen Sie uns kennen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Team;