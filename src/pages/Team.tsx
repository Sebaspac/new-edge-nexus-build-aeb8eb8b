import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
    scrollToContact();
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
    role: "Geschäftsführer",
    image: "/lovable-uploads/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png",
    expertise: ["Brand Developement", "Digital Transformation"]
  }, {
    name: "Sebastian Pachón",
    role: "Geschäftsführer",
    image: "/lovable-uploads/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png",
    expertise: ["Strategy", "Operations", "Team Leadership"]
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
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      <div className="min-h-screen bg-background overflow-x-hidden" ref={containerRef}>
        {/* Hero Section */}
        <section className="hero-section relative">
          {/* 🌌 Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated">
            {/* ✨ Floating Orbs */}
            <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            <motion.div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            rotate: [360, 180, 0]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }} />
            <motion.div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl" animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 0.8, 1]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

            {/* 🌊 Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            
            {/* ⚡ Animated Grid */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="animate-parallax">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Team Background Image with Overlay */}
            <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('/lovable-uploads/2d88dc02-55ec-4dd1-ae07-1ac7b7ced67b.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-surface/60 to-surface-elevated/80"></div>
            </div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="relative z-10 container-xl hero-section flex flex-col items-center justify-center text-center pt-16">
            <h1 className="text-display-xl font-black mb-6">
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                UNSER
              </span>
              <span className="block text-foreground">
                TEAM
              </span>
            </h1>
            <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experten für Strategie, Content & Technologie
            </p>
          </motion.div>
        </section>

        {/* Founders Section */}
        <section className="section-padding bg-surface">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-slate-50">
                  Die Gründer
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {founders.map((founder, index) => <motion.div key={founder.name} initial={{
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
            }} className="group hover-lift">
                  <Card className="card-modern h-full text-center">
                    <div className="p-8">
                      <div className="relative mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-border/20 shadow-lg group-hover:border-primary/30 transition-colors duration-300">
                          <img src={founder.image} alt={`${founder.name} - ${founder.role}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                      
                      <h3 className="text-h3 font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-medium mb-6">{founder.role}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.expertise.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-surface-elevated/50 text-muted-foreground rounded-full text-sm font-medium border border-border/30">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Network Stats */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display font-bold mb-6 bg-gradient-accent bg-clip-text text-slate-50">
                Unser Netzwerk
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
            }} className="group hover-lift">
                  <Card className="card-modern text-center h-full">
                    <div className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-h2 font-semibold text-foreground mb-1">{stat.value}</div>
                      <div className="text-body-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding bg-background">
          <div className="container-xl">
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
          }} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <img src="/lovable-uploads/db231edd-d76b-46cd-ad70-02ac9544d6ff.png" alt="Wenjamin Zabezhanskiy - Wir öffnen Innovationsräume, übersetzen Spitzentechnologie und machen Zukunft so für jedes Team nutzbar" className="w-full h-auto object-cover" loading="lazy" />
            </motion.div>
          </div>
        </section>

        {/* Process Connection */}
        <section className="section-padding bg-surface-elevated">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display font-bold mb-6 text-foreground">
                Know-how trifft Prozess
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
            }} className="group hover-lift">
                  <Card className="card-modern h-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
                    <div className="p-8 text-center">
                      <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-body-sm text-primary font-medium">{item.team}</p>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-surface via-background to-surface">
          <div className="container-narrow">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center">
              <h2 className="text-display font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-slate-50">
                  Bereit für Ihr Projekt?
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
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
                <Button size="lg" onClick={handleContactClick} className="btn-primary hover-magnetic group">
                  Lernen Sie uns kennen
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-elevated/80 border-t border-border py-12 sm:py-16">
          <div className="container-xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="sm:col-span-2">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    New Edge<span className="text-primary"></span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                  New Edge ist eine Creative-Tech Agentur für innovationsgetriebene Markenkommunikation.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-surface rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs sm:text-sm text-foreground hover:text-white">in</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Services</h4>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li><Link to="/studio" className="hover:text-primary transition-colors">STUDIO</Link></li>
                  <li><Link to="/media" className="hover:text-primary transition-colors">MEDIA</Link></li>
                  <li><Link to="/lab" className="hover:text-primary transition-colors">LAB</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Kontakt</h4>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>info@newedgebrand.com</li>
                  <li>+49 15750998236</li>
                  <li>Deutschland</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-xs sm:text-sm">©2024 New Edge. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
                <Link to="/impressum" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">Impressum</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>;
};
export default Team;