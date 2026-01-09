import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import albanovaImage from "@/assets/albanova-website.png";
import kiInfrastructureImage from "@/assets/ki-infrastructure.png";
import kiMediaImage from "@/assets/ki-media.png";
import kiWorkflowImage from "@/assets/ki-workflow.png";

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

  const caseStudies = [
    {
      id: "albanova",
      client: "ALBANOVA",
      headline: "Marke & Digitalstrategie von Null aufgebaut",
      category: "BRANDING",
      route: "/case-study/albanova",
      image: albanovaImage
    },
    {
      id: "retail-lab",
      client: "INDUSTRY KMU",
      headline: "RAG-Wissensagent für Maschinenbau",
      category: "AI AUTOMATION",
      route: "/case-study/retail-lab",
      image: kiInfrastructureImage
    },
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

  return (
    <>
      <Helmet>
        <title>Case Studies - NEW EDGE</title>
        <meta name="description" content="Erfolgsgeschichten und Case Studies von NEW EDGE. Erfahren Sie, wie wir unseren Kunden helfen." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Header Section */}
        <section className="relative w-full pt-24 lg:pt-32 pb-8 md:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 text-black"
            >
              Schluss mit Blahblah.
              <br />
              <span className="text-[#7C3AED]">Her mit den Cases.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-gray-700 max-w-3xl"
            >
              Entdecken Sie unsere Erfolgsgeschichten und erfahren Sie, wie wir Unternehmen bei ihrer digitalen Transformation unterstützen.
            </motion.p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={caseStudy.route} className="block group">
                    <div className="relative overflow-hidden aspect-square bg-gray-900">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.headline}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-black/30" />
                      
                      {/* Normal State: + Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                      </div>
                      
                      {/* Hover State: Purple Overlay */}
                      <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                        <div className="w-8 md:w-16 h-0.5 md:h-1 bg-white" />
                        
                        <div className="space-y-1 md:space-y-3">
                          <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
                            {caseStudy.client}
                          </span>
                          <h3 className="text-sm md:text-2xl font-bold text-white leading-tight line-clamp-3">
                            {caseStudy.headline}
                          </h3>
                          <div className="hidden md:flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                            <span className="underline">Case ansehen</span>
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        
                        <div>
                          <span className="inline-block border border-white/80 px-2 md:px-4 py-1 md:py-1.5 text-[8px] md:text-xs font-bold text-white uppercase tracking-wider">
                            {caseStudy.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
