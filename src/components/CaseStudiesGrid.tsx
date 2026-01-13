import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import albanovaImage from "@/assets/albanova-building.png";
import ragDatacenterImage from "@/assets/rag-datacenter.jpg";
import marketingAutomationImage from "@/assets/marketing-automation.jpg";
import leadGenerationImage from "@/assets/lead-generation.jpg";

export const CaseStudiesGrid = () => {
  const caseStudies = [
    {
      id: "albanova",
      client: "ALBANOVA",
      headline: "Marke & Digitalstrategie von Null aufgebaut",
      category: "BRANDING",
      route: "/case-study/albanova",
      image: albanovaImage,
    },
    {
      id: "retail-lab",
      client: "INDUSTRY KMU",
      headline: "RAG-Wissensagent für Maschinenbau",
      category: "AI AUTOMATION",
      route: "/case-study/retail-lab",
      image: ragDatacenterImage,
    },
    {
      id: "ecommerce",
      client: "RETAIL CLIENT",
      headline: "Marketing-Automatisierung mit KI",
      category: "WACHSTUM",
      route: "/case-study/ecommerce",
      image: marketingAutomationImage,
    },
    {
      id: "social-media",
      client: "B2B SALES",
      headline: "Intelligente Lead-Qualifizierung",
      category: "SALES",
      route: "/case-study/social-media",
      image: leadGenerationImage,
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black">
              Schluss mit Blahblah.
              <br />
              <span className="text-[#7C3AED]">Her mit den Cases.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block flex-shrink-0"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-[#7C3AED] transition-colors duration-300"
            >
              ALLE CASES
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Case Studies Grid - Unified layout for all screen sizes */}
        <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex-shrink-0 w-[65%] snap-start md:w-auto"
            >
              <Link to={caseStudy.route} className="block group">
                <div className="relative overflow-hidden aspect-square bg-gray-900">
                  {/* Image - absolute positioned to fill the square */}
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.headline}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark overlay on image */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Normal State: + Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                  </div>

                  {/* Hover State: Purple Overlay */}
                  <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                    {/* Top: White Line */}
                    <div className="w-8 md:w-16 h-0.5 md:h-1 bg-white" />

                    {/* Content */}
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

                    {/* Bottom: Category Tag */}
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

        {/* Mobile/Tablet: Show ALLE CASES button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden mt-6 text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#7C3AED] transition-colors duration-300"
          >
            ALLE CASES
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
