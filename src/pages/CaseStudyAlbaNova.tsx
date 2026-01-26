import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, TrendingUp, Filter, Heart, ArrowRight, CheckCircle, Target, BarChart3, Palette, BookOpen, PenTool, Monitor, Languages, Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import albanovaWebsite from "@/assets/albanova-website.png";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}
const AnimatedSection = ({
  children,
  className = ""
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <div ref={sectionRef} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>;
};
const CaseStudyAlbaNova = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  const scrollToContact = () => {
    navigate("/", {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const phases = [{
    number: "PHASE 1",
    title: "Strategie & Konzeption",
    description: "Den Grundstein für den Erfolg legen. In dieser initialen Phase definieren wir die strategische Ausrichtung und schaffen eine klare Vision für die Marke.",
    image: "/assets/albanova-phase1-image.png",
    features: [{
      icon: Target,
      title: "Markenstrategie & Vision",
      description: "In Workshops schufen wir eine klare Markenidentität, Mission und Vision als Fundament."
    }, {
      icon: BarChart3,
      title: "Marketing & Social Media",
      description: "Entwicklung einer kanalübergreifenden Strategie, um Zielgruppen gezielt anzusprechen."
    }]
  }, {
    number: "PHASE 2",
    title: "Kreation & Content",
    description: "Die Marke zum Leben erwecken. Wir gestalten ein einzigartiges visuelles Erscheinungsbild und erstellen Inhalte, die emotional ansprechen und überzeugen.",
    video: "/assets/albanova-phase2-video.mp4",
    features: [{
      icon: Palette,
      title: "Branding & Webdesign",
      description: "Gestaltung eines modernen, seriösen und einladenden Designs."
    }, {
      icon: BookOpen,
      title: "Storytelling & Texte",
      description: "Empathische und vertrauensbildende Texte, die Expertise vermitteln."
    }, {
      icon: PenTool,
      title: "Content-Planung",
      description: "Ein detaillierter Redaktionsplan für Blogs, Social Media und Newsletter."
    }]
  }, {
    number: "PHASE 3",
    title: "Technische Umsetzung & Launch",
    description: "Die Vision wird Realität. Wir entwickeln eine performante, nutzerfreundliche Website und sorgen für eine reibungslose internationale Präsenz.",
    features: [{
      icon: Monitor,
      title: "Webentwicklung & Funnel",
      description: "Responsive Umsetzung mit klarer Funnel-Logik zur Lead-Generierung."
    }, {
      icon: Languages,
      title: "Mehrsprachigkeit",
      description: "Native Übersetzung und Lokalisierung ins Deutsche und Spanische."
    }]
  }];
  const results = [{
    metric: "+250%",
    label: "Mehr Website-Traffic",
    icon: TrendingUp
  }, {
    metric: "+180%",
    label: "Höhere Conversion Rate",
    icon: Filter
  }, {
    metric: "+320%",
    label: "Mehr qualifizierte Leads",
    icon: Globe
  }, {
    metric: "95%",
    label: "Kundenzufriedenheit",
    icon: Heart
  }];
  const services = ["Brand Strategy & Positioning", "Corporate Identity Design", "Website Konzeption & Development", "Content Strategy & Creation", "SEO & Performance Optimization", "Analytics & Tracking Setup"];
  const orbitalTimelineData = [{
    id: 1,
    title: "Kick-off",
    date: "Week 1",
    content: "Stakeholder-Interviews und Definition der Projektziele. Festlegung der strategischen Ausrichtung.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100
  }, {
    id: 2,
    title: "Research",
    date: "Week 2",
    content: "Marktanalyse, Wettbewerbsanalyse und Zielgruppenforschung für die neue Brand Identity.",
    category: "Research",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95
  }, {
    id: 3,
    title: "Strategie",
    date: "Week 3",
    content: "Brand Positioning Workshop und Entwicklung des Messaging Frameworks.",
    category: "Strategy",
    icon: Target,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90
  }, {
    id: 4,
    title: "Design",
    date: "Week 4-6",
    content: "UI/UX Design, Corporate Identity und Gestaltung des Design Systems.",
    category: "Design",
    icon: Palette,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85
  }, {
    id: 5,
    title: "Development",
    date: "Week 7-9",
    content: "Frontend & Backend Development mit React, Performance-Optimierung und SEO-Integration.",
    category: "Development",
    icon: Code,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80
  }, {
    id: 6,
    title: "Content",
    date: "Week 8-9",
    content: "Content Creation, Copywriting und Übersetzung in Deutsche und Spanische Sprache.",
    category: "Content",
    icon: BookOpen,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 75
  }, {
    id: 7,
    title: "Testing",
    date: "Week 10",
    content: "QA Testing, User Testing und Bug Fixes vor dem Launch.",
    category: "Testing",
    icon: User,
    relatedIds: [6, 8],
    status: "completed" as const,
    energy: 70
  }, {
    id: 8,
    title: "Launch",
    date: "Week 11",
    content: "Finale Deployment, Go-Live und Monitoring der Performance.",
    category: "Launch",
    icon: Clock,
    relatedIds: [7],
    status: "completed" as const,
    energy: 100
  }];
  return <>
      <Helmet>
        <title>AlbaNova Case Study - NEW EDGE</title>
        <meta name="description" content="Wie wir AlbaNova Consulting mit einer neuen digitalen Brand Identity zum Erfolg verholfen haben." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 lg:pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <span className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  AlbaNova Consulting X New edge
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">
                Integration neu
                <br />
                gedacht.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten, um Migration
                in eine Chance zu verwandeln.
              </p>
              <div className="flex justify-center">
              <button onClick={scrollToContact} className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-none text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 active:scale-95">
                  Jetzt Kontakt aufnehmen
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Overview & Challenge Section */}
        <section className="py-12 md:py-20 lg:py-32 relative bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              {/* Project Overview */}
              <div className="text-center mb-12 md:mb-16">
                <div className="mb-4 md:mb-6">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                    Projektüberblick
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
                  Über AlbaNova Consulting
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
                  AlbaNova Consulting ist ein spezialisiertes Beratungsunternehmen, das Migrantinnen und Migranten sowie
                  ihre Familien beim Ankommen in Deutschland begleitet. Gleichzeitig unterstützen sie Organisationen bei
                  Relocation- und Integrationsprozessen. Das Ziel: die Herausforderungen der Migration in Chancen für
                  persönliches und berufliches Wachstum verwandeln.
                </p>
              </div>

              {/* Challenge Section - Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-20">
                {/* Left: Image/Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-none overflow-hidden border border-purple-500/20">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/assets/albanova-challenges-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Right: Challenge Text */}
                <div>
                  <div className="mb-3 md:mb-4">
                    <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                      Ausgangssituation
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                    Die Herausforderungen
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Beim Projektstart existierten weder eine konsistente Markenidentität noch eine digitale Präsenz. Die
                    hochspezialisierte Dienstleistung musste sowohl Unternehmen als auch Expatriate- und multikulturelle
                    Familien in zwei Sprachen ansprechen. Ein klarer Marketingplan zur verständlichen und empathischen
                    Kommunikation der komplexen Leistungen fehlte.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solution Section */}

        {/* Orbital Timeline Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-3 md:mb-4">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-wider uppercase">
                    ​UNSERE LEISTUNGEN
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                  Von der Vision zur Realität
                </h2>
                <p className="text-base md:text-xl text-gray-300 px-4 hidden md:block">
                  Interaktive Timeline: Klicken Sie auf die Knoten, um Details zu sehen
                </p>
                <p className="text-base text-gray-300 px-4 md:hidden">
                  Wischen Sie, um die Projektphasen zu erkunden
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Desktop: Radial Timeline */}
          <div className="hidden md:block">
            <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
          </div>
          
          {/* Mobile: Horizontal Snap-Scroll Timeline */}
          <div className="md:hidden relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 pt-2 scrollbar-hide" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {orbitalTimelineData.map((item, index) => {
              const Icon = item.icon;
              return <div key={item.id} className="flex-shrink-0 w-[80vw] snap-center">
                    {/* Node Dot */}
                    <div className="flex justify-center mb-4">
                      <div className="w-4 h-4 rounded-none bg-purple-500 border-2 border-purple-300 shadow-lg shadow-purple-500/50" />
                    </div>
                    
                    {/* Card */}
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-none p-5 h-full">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-none bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{item.title}</h3>
                          <span className="text-purple-400 text-xs font-medium">{item.date}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.content}
                      </p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-none">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-700 rounded-none overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-none" style={{
                          width: `${item.energy}%`
                        }} />
                          </div>
                          <span className="text-gray-400 text-xs">{item.energy}%</span>
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-1">
                        {orbitalTimelineData.map((_, i) => <div key={i} className={`w-1.5 h-1.5 rounded-none transition-colors ${i === index ? 'bg-purple-500' : 'bg-gray-600'}`} />)}
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Phases Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-20">
                <div className="mb-4 md:mb-6">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                    Unser Prozess
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
                  Die drei Phasen
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Von der Strategie über die Kreation bis zur technischen Umsetzung – ein strukturierter Prozess für
                  maximalen Erfolg.
                </p>
              </div>
            </AnimatedSection>

            {/* Desktop: Vertical Layout, Mobile: Horizontal Scroll */}
            <div className="hidden md:block space-y-32">
              {phases.map((phase, phaseIndex) => <AnimatedSection key={phaseIndex}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${phaseIndex % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-3 md:mb-4">
                        <span className="text-purple-400 font-bold text-xs md:text-sm tracking-wider">
                          {phase.number}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                        {phase.title}
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-4 md:space-y-6">
                        {phase.features.map((feature, featureIndex) => {
                      const Icon = feature.icon;
                      return <div key={featureIndex} className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-4 md:p-6 hover:bg-white/10 transition-all duration-300 active:scale-95">
                              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-none flex items-center justify-center">
                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                                  {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
                              </div>
                            </div>;
                    })}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-1" : ""}>
                      {phaseIndex === 2 ? <a href="https://albanovaconsulting.com" target="_blank" rel="noopener noreferrer" className="block group">
                          {/* Laptop Mockup */}
                          <div className="relative perspective-1000">
                            {/* Laptop Screen */}
                            <div className="relative bg-gray-800 rounded-none border-4 border-gray-700 shadow-2xl transition-transform group-hover:scale-[1.02]">
                              {/* Screen Bezel */}
                              <div className="bg-black p-3 rounded-none">
                                {/* Website Screenshot */}
                                <div className="relative aspect-[16/10] rounded-none overflow-hidden shadow-inner">
                                  <img src={albanovaWebsite} alt="AlbaNova Consulting Website" className="w-full h-full object-cover object-top" />
                                  {/* Screen Glare Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                                </div>
                              </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="relative h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-none shadow-lg">
                              {/* Notch */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-gray-600 rounded-none" />
                            </div>

                            {/* Shadow */}
                            <div className="absolute -bottom-2 left-0 right-0 h-8 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl" />
                          </div>

                          <p className="text-center text-sm text-purple-400 mt-6 group-hover:text-purple-300 transition-colors">
                            Klicke aufs Bild →
                          </p>
                        </a> : 'video' in phase && phase.video ? <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-white/10">
                          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={phase.video} type="video/mp4" />
                          </video>
                        </div> : 'image' in phase && phase.image ? <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-white/10">
                          <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
                        </div> : <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                          {/* Placeholder for image - using gradient background */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white/30 text-6xl font-black">{phase.number}</div>
                          </div>
                        </div>}
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {phases.map((phase, phaseIndex) => <div key={phaseIndex} className="min-w-[85vw] snap-center">
                    <AnimatedSection>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-6">
                        <div className="mb-3">
                          <span className="text-purple-400 font-bold text-xs tracking-wider">{phase.number}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{phase.title}</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">{phase.description}</p>

                        <div className="space-y-4">
                          {phase.features.map((feature, featureIndex) => {
                        const Icon = feature.icon;
                        return <div key={featureIndex} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-none p-4">
                                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-none flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                  <p className="text-xs text-gray-400">{feature.description}</p>
                                </div>
                              </div>;
                      })}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>)}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {phases.map((_, index) => <div key={index} className="w-2 h-2 rounded-full bg-white/20" />)}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-purple-500 mx-auto mb-6 md:mb-8" />
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-6 md:mb-8">
                  "Klare Markenstrategie, professionelle Website und durchgängige Begleitung New Edge hat unsere Außenkommunikation auf ein neues Niveau gehoben.
                </blockquote>
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  
                  <div className="text-left">
                    <div className="font-bold text-white text-base md:text-lg">Rocío Morales</div>
                    <div className="text-sm md:text-base text-gray-400">Founder, AlbaNova Consulting</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Results Section */}

        {/* Related Case Studies */}
        <RelatedCaseStudies currentCaseId="albanova" />

        {/* CTA Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                Bereit für Ihre digitale Transformation?
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed px-4">
                Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihre Vision Realität werden lässt.
              </p>
              <button onClick={scrollToContact} className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-full text-base md:text-lg hover:scale-105 active:scale-95 transition-transform duration-300 inline-flex items-center gap-3">
                Projekt starten
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default CaseStudyAlbaNova;