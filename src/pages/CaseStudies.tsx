import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import albanovaImage from "@/assets/albanova-website.png";
import kiInfrastructureImage from "@/assets/ki-infrastructure.png";
import kiMediaImage from "@/assets/ki-media.png";
import kiWorkflowImage from "@/assets/ki-workflow.png";

interface CaseStudy {
  id: string;
  client: string;
  headline: string;
  category: string;
  route: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  subtitle: string;
  cases: CaseStudy[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  index: number;
}

const CategorySection = ({ 
  title, 
  subtitle, 
  cases, 
  accentColor, 
  gradientFrom, 
  gradientTo,
  index 
}: CategorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="py-12 md:py-20"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-8 md:mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          className="flex items-center gap-4 mb-3"
        >
          <div 
            className="w-12 h-1 rounded-full"
            style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
          />
          <span 
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {title}
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="text-2xl md:text-4xl font-bold text-white"
        >
          {subtitle}
        </motion.h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div 
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory 
                     scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Left spacer for centering on large screens */}
          <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />
          
          {cases.map((caseStudy, caseIndex) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 + caseIndex * 0.15 }}
              className="flex-shrink-0 snap-start"
            >
              <Link to={caseStudy.route} className="block group">
                <div 
                  className="relative overflow-hidden rounded-2xl w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[550px]"
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* Background Image */}
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.headline}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Default Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Hover Color Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${gradientFrom}dd, ${gradientTo}dd)` 
                    }}
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category Tag */}
                    <motion.span 
                      className="inline-block self-start border border-white/40 px-3 py-1 text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider mb-3 md:mb-4 backdrop-blur-sm"
                    >
                      {caseStudy.category}
                    </motion.span>
                    
                    {/* Client */}
                    <span className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-wider mb-1 md:mb-2">
                      {caseStudy.client}
                    </span>
                    
                    {/* Headline */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-300">
                      {caseStudy.headline}
                    </h3>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm md:text-base">Case ansehen</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Decorative Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
          
          {/* Right spacer */}
          <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]" />
        </div>
      </div>
    </motion.section>
  );
};

const CaseStudies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // STUDIO Cases
  const studioCases: CaseStudy[] = [
    {
      id: "albanova",
      client: "ALBANOVA",
      headline: "Marke & Digitalstrategie von Null aufgebaut",
      category: "BRANDING",
      route: "/case-study/albanova",
      image: albanovaImage
    }
  ];

  // MEDIA Cases
  const mediaCases: CaseStudy[] = [
    {
      id: "ecommerce",
      client: "RETAIL CLIENT",
      headline: "Marketing-Automatisierung mit KI",
      category: "GROWTH",
      route: "/case-study/ecommerce",
      image: kiMediaImage
    },
    {
      id: "social-media",
      client: "B2B SALES",
      headline: "Intelligente Lead-Qualifizierung",
      category: "SALES",
      route: "/case-study/social-media",
      image: kiWorkflowImage
    }
  ];

  // LAB Cases
  const labCases: CaseStudy[] = [
    {
      id: "retail-lab",
      client: "INDUSTRY KMU",
      headline: "RAG-Wissensagent für Maschinenbau",
      category: "AI AUTOMATION",
      route: "/case-study/retail-lab",
      image: kiInfrastructureImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - NEW EDGE</title>
        <meta name="description" content="Erfolgsgeschichten und Case Studies von NEW EDGE. Erfahren Sie, wie wir unseren Kunden helfen." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Header */}
        <section className="relative w-full pt-28 lg:pt-36 pb-8 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block text-xs md:text-sm font-bold text-[#7C3AED] uppercase tracking-widest mb-4">
                Case Studies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-white leading-[1.1]">
                Schluss mit Blahblah.
                <br />
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B] bg-clip-text text-transparent">
                  Her mit den Cases.
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl">
                Entdecken Sie unsere Erfolgsgeschichten – sortiert nach Studio, Media und Lab.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-[#7C3AED]/30 via-transparent to-transparent" />
          </div>
        </section>

        {/* STUDIO Section */}
        <CategorySection
          title="STUDIO"
          subtitle="Brand Strategy & Identity"
          cases={studioCases}
          accentColor="#7C3AED"
          gradientFrom="#7C3AED"
          gradientTo="#A855F7"
          index={0}
        />

        {/* MEDIA Section */}
        <CategorySection
          title="MEDIA"
          subtitle="Content & Performance"
          cases={mediaCases}
          accentColor="#06B6D4"
          gradientFrom="#06B6D4"
          gradientTo="#0EA5E9"
          index={1}
        />

        {/* LAB Section */}
        <CategorySection
          title="LAB"
          subtitle="AI Automation & Innovation"
          cases={labCases}
          accentColor="#F59E0B"
          gradientFrom="#F59E0B"
          gradientTo="#EF4444"
          index={2}
        />

        {/* Bottom CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
