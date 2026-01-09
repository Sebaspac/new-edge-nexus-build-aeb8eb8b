import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
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

// STUDIO Cases
const studioCases: CaseStudy[] = [{
  id: "albanova",
  client: "ALBANOVA",
  headline: "Marke & Digitalstrategie von Null aufgebaut",
  category: "BRANDING",
  route: "/case-study/albanova",
  image: albanovaImage
}];

// MEDIA Cases
const mediaCases: CaseStudy[] = [{
  id: "ecommerce",
  client: "RETAIL CLIENT",
  headline: "Marketing-Automatisierung mit KI",
  category: "GROWTH",
  route: "/case-study/ecommerce",
  image: kiMediaImage
}, {
  id: "social-media",
  client: "B2B SALES",
  headline: "Intelligente Lead-Qualifizierung",
  category: "SALES",
  route: "/case-study/social-media",
  image: kiWorkflowImage
}];

// LAB Cases
const labCases: CaseStudy[] = [{
  id: "retail-lab",
  client: "INDUSTRY KMU",
  headline: "RAG-Wissensagent für Maschinenbau",
  category: "AI AUTOMATION",
  route: "/case-study/retail-lab",
  image: kiInfrastructureImage
}];

interface CaseCardProps {
  caseStudy: CaseStudy;
  accentColor: string;
  index: number;
}

const CaseCard = ({ caseStudy, accentColor, index }: CaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0"
    >
      <Link to={caseStudy.route} className="block group">
        <div className="relative overflow-hidden w-[260px] md:w-[300px] lg:w-[360px] aspect-[4/3]">
          {/* Bild - eckig ohne Rundungen */}
          <img
            src={caseStudy.image}
            alt={caseStudy.headline}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Default Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Hover Color Overlay */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${accentColor}`}
          />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-300 mb-1 block font-medium">
              {caseStudy.client}
            </span>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-2 leading-tight">
              {caseStudy.headline}
            </h3>
            <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/80 font-medium">
              {caseStudy.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

interface CategoryRowProps {
  title: string;
  subtitle: string;
  cases: CaseStudy[];
  accentColor: string;
  slashColor: string;
  direction: 'left' | 'right';
  index: number;
}

const CategoryRow = ({ title, subtitle, cases, accentColor, slashColor, direction, index }: CategoryRowProps) => {
  const isLeft = direction === 'left';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col lg:flex-row ${!isLeft ? 'lg:flex-row-reverse' : ''} min-h-[260px] md:min-h-[300px] lg:min-h-[340px] border-b border-white/10`}
    >
      {/* Cases Container */}
      <div className="w-full lg:w-[72%] xl:w-[75%] overflow-x-auto scrollbar-hide py-4 lg:py-0">
        <div className="flex gap-0 h-full items-center">
          {cases.map((caseStudy, caseIndex) => (
            <CaseCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              accentColor={accentColor}
              index={caseIndex}
            />
          ))}
        </div>
      </div>
      
      {/* Label Container mit Slash */}
      <div className={`w-full lg:w-[28%] xl:w-[25%] flex items-center ${isLeft ? 'lg:justify-start lg:pl-6 xl:pl-10' : 'lg:justify-end lg:pr-6 xl:pr-10'} py-4 lg:py-0 px-4 lg:px-0`}>
        <div className={`flex items-center gap-3 md:gap-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
          {/* Großer Slash */}
          <motion.span
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-[70px] md:text-[90px] lg:text-[120px] xl:text-[150px] font-thin leading-none ${slashColor} select-none`}
          >
            /
          </motion.span>
          
          {/* Text */}
          <div className={`${isLeft ? 'text-left' : 'text-right'}`}>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-xs md:text-sm lg:text-base text-gray-400 mt-1"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
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

  return (
    <>
      <Helmet>
        <title>Case Studies - NEW EDGE</title>
        <meta name="description" content="Erfolgsgeschichten und Case Studies von NEW EDGE. Erfahren Sie, wie wir unseren Kunden helfen." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24 md:pt-28 px-4 md:px-8 lg:px-12 pb-6 md:pb-10 border-b border-white/10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Case Studies
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base max-w-xl">
            Strategische Lösungen für Marken, die wachsen wollen.
          </p>
        </motion.div>

        {/* Category Rows - Alle auf einen Blick */}
        <div className="flex flex-col">
          {/* STUDIO - Cases links, Label rechts */}
          <CategoryRow
            title="STUDIO"
            subtitle="Brand Strategy & Identity"
            cases={studioCases}
            accentColor="bg-violet-500"
            slashColor="text-violet-500/40"
            direction="left"
            index={0}
          />
          
          {/* MEDIA - Label links, Cases rechts */}
          <CategoryRow
            title="MEDIA"
            subtitle="Content & Performance"
            cases={mediaCases}
            accentColor="bg-cyan-500"
            slashColor="text-cyan-500/40"
            direction="right"
            index={1}
          />
          
          {/* LAB - Cases links, Label rechts */}
          <CategoryRow
            title="LAB"
            subtitle="AI Automation & Innovation"
            cases={labCases}
            accentColor="bg-amber-500"
            slashColor="text-amber-500/40"
            direction="left"
            index={2}
          />
        </div>

        {/* Bottom CTA */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-white mb-5">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 md:px-7 md:py-3 font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4" />
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
