import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/contexts/LanguageContext";
import { InlineLogoSVG } from "@/components/InlineLogoSVG";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Code, Palette, Globe, Briefcase, ArrowRight, Play, Apple, Star, ChevronDown } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";

const Team = () => {
  const { t } = useLanguage();
  const [contactClick, setContactClick] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
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
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Team data
  const founders = [
    { name: "Sebastian Pachón", role: "Founder & Creative-Tech Partner", image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png", expertise: ["Strategie", "Technologie"] },
    { name: "Wenjamin Zabezhanskiy", role: "Operations & Innovation Partner", image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png", expertise: ["Kreation", "Support"] }
  ];

  const networkStats = [
    { icon: Users, label: "Coaches", value: "10+", color: "text-blue-600" },
    { icon: Code, label: "Entwickler", value: "2", color: "text-purple-600" },
    { icon: Palette, label: "Creative Agencies", value: "3", color: "text-pink-600" },
    { icon: Globe, label: "Länder", value: "4", color: "text-green-600" },
    { icon: Briefcase, label: "Freelancer", value: "15+", color: "text-orange-600" }
  ];

  const clients = [
    { name: "BMW", logo: "/placeholder.svg" },
    { name: "MINI", logo: "/placeholder.svg" },
    { name: "Pressonit", logo: "/placeholder.svg" },
    { name: "Infosys Consulting", logo: "/placeholder.svg" },
    { name: "Serviceplan Group", logo: "/placeholder.svg" }
  ];

  return (
    <>
      <Helmet>
        <title>Unser Team - New Edge Brand</title>
        <meta name="description" content="Lernen Sie das Team von New Edge Brand kennen - Experten für Strategie, Content & Technologie." />
      </Helmet>

      {/* Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      <div className="min-h-screen bg-background overflow-x-hidden" ref={containerRef}>
        {/* Hero Section with Video Background */}
        <section className="relative w-full">
          <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
            {/* 16:9 Aspect Ratio Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              {/* Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Text Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
                <motion.div 
                  className="max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
                    <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>UNSER</span>
                    <span className="block text-primary italic font-black animate-fade-in" style={{ animationDelay: '0.4s' }}>TEAM</span>
                  </h1>
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Wir sind ein dynamisches Netzwerk aus Experten in Strategie, Content & Technologie
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Button 
                      onClick={handleContactClick} 
                      size="lg" 
                      className="group relative overflow-hidden text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
                    >
                      <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="section-padding bg-surface">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-slate-50">Die Gründer</span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <motion.div 
                  key={founder.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern h-full">
                    <div className="p-6 sm:p-8 flex flex-col h-full">
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-border/20 shadow-lg group-hover:border-primary/30 transition-colors duration-300">
                          <img 
                            src={founder.image} 
                            alt={`${founder.name} - ${founder.role}`} 
                            className="w-full h-full object-cover" 
                            width={128}
                            height={128}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-h3 font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {founder.name}
                          </h3>
                          <p className="text-primary font-medium mb-6">{founder.role}</p>
                        </div>
                        
                        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                          {founder.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm text-foreground rounded-xl text-sm font-medium border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-200 hover:shadow-xl">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Stats */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6 bg-gradient-accent bg-clip-text text-slate-50">
                Unser Netzwerk
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {networkStats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: index * 0.05 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern text-center h-full">
                    <div className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-h2 font-semibold text-foreground mb-1">{stat.value}</div>
                      <div className="text-body-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding bg-background">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            >
              <img 
                src="/assets/db231edd-d76b-46cd-ad70-02ac9544d6ff.png" 
                alt="Wenjamin Zabezhanskiy - Wir öffnen Innovationsräume, übersetzen Spitzentechnologie und machen Zukunft so für jedes Team nutzbar" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Process Connection */}
        <section className="section-padding bg-surface-elevated">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6 text-foreground">
                Know-how trifft Prozess
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { phase: "Studio", title: "Strategie & Beratung", description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.", team: "Strategy Leads, Brand Coaches" },
                { phase: "Media", title: "Content & Kreation", description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.", team: "Creative Directors, Content Specialists" },
                { phase: "Lab", title: "Technologie & Innovation", description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.", team: "Lead Developers, Tech Innovators" }
              ].map((item, index) => (
                <motion.div 
                  key={item.phase} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern h-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
                    <div className="p-8 text-center">
                      <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-surface via-background to-surface">
          <div className="container-narrow">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
              <h2 className="text-display font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-slate-50">
                  Bereit für Ihr Projekt?
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                Lernen Sie uns persönlich kennen und erfahren Sie, 
                wie unser Team Ihre Marke zum Erfolg führt.
              </p>
              
              <motion.div 
                animate={contactClick ? { scale: 0.98 } : { scale: 1 }} 
                transition={{ duration: 0.1 }}
              >
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
                  <img 
                    src="/assets/90e4fdca-8c29-48f7-9568-686b611a62f4.png"
                    alt="New Edge Logo" 
                    className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" 
                    width={32}
                    height={32}
                  />
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
                  <li>
                    <a href="mailto:info@newedgebrand.com" className="hover:text-primary transition-colors">
                      info@newedgebrand.com
                    </a>
                  </li>
                  <li>+49 15750998236</li>
                  <li>Deutschland</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-xs sm:text-sm">©2025 New Edge. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
                <Link to="/impressum" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">Impressum & Datenschutz</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Team;
