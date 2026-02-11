import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import albanovaImage from "@/assets/albanova-building.webp";
import ragDatacenterImage from "@/assets/rag-datacenter.webp";
import marketingAutomationImage from "@/assets/marketing-automation.webp";
import leadGenerationImage from "@/assets/lead-generation.webp";
interface CaseStudy {
  id: string;
  client: string;
  headline: string;
  category: string;
  route: string;
  image: string;
}

// STUDIO Cases - AlbaNova
const studioCases: CaseStudy[] = [
  {
    id: "albanova",
    client: "ALBANOVA",
    headline: "Marke & Digitalstrategie von Null aufgebaut",
    category: "BRANDING",
    route: "/case-study/albanova",
    image: albanovaImage,
  },
];

// LAB Cases - Alle anderen 3 Cases
const labCases: CaseStudy[] = [
  {
    id: "retail-lab",
    client: "TRY KMU",
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
interface CaseCardProps {
  caseStudy: CaseStudy;
  accentColor: string;
  index: number;
}
const CaseCard = ({ caseStudy, accentColor, index }: CaseCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="flex-shrink-0"
    >
      <Link to={caseStudy.route} className="block group">
        <div className="relative overflow-hidden w-[100px] sm:w-[130px] md:w-[200px] lg:w-[260px] xl:w-[300px] aspect-[4/3]">
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
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-5">
            <span className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs uppercase tracking-wider text-gray-300 mb-0.5 sm:mb-1 block font-medium">
              {caseStudy.client}
            </span>
            <h3 className="text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold text-white mb-0.5 sm:mb-1 md:mb-2 leading-tight line-clamp-2">
              {caseStudy.headline}
            </h3>
            <span className="inline-block text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] uppercase tracking-wider px-1 sm:px-1.5 md:px-2 py-0.5 bg-white/10 text-white/80 font-medium">
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
  direction: "left" | "right";
  index: number;
}
const CategoryRow = ({ title, subtitle, cases, accentColor, slashColor, direction, index }: CategoryRowProps) => {
  const isLeft = direction === "left";
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className={`flex flex-row ${!isLeft ? "flex-row-reverse" : ""} min-h-[140px] sm:min-h-[170px] md:min-h-[220px] lg:min-h-[280px] border-b border-black/10`}
    >
      {/* Cases Container */}
      <div className="w-[65%] sm:w-[68%] md:w-[70%] lg:w-[72%] xl:w-[75%] overflow-x-auto scrollbar-hide flex items-center">
        <div className="flex gap-0 h-full items-center">
          {cases.map((caseStudy, caseIndex) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} accentColor={accentColor} index={caseIndex} />
          ))}
        </div>
      </div>

      {/* Label Container mit Slash */}
      <div
        className={`w-[35%] sm:w-[32%] md:w-[30%] lg:w-[28%] xl:w-[25%] flex items-center ${isLeft ? "justify-start pl-2 sm:pl-4 md:pl-6 lg:pl-10" : "justify-end pr-2 sm:pr-4 md:pr-6 lg:pr-10"}`}
      >
        <div className={`flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-5 ${isLeft ? "" : "flex-row-reverse"}`}>
          {/* Großer Slash */}
          <motion.span
            initial={{
              opacity: 0,
              rotate: -15,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={`text-[28px] sm:text-[40px] md:text-[56px] lg:text-[80px] xl:text-[120px] font-thin leading-none ${slashColor} select-none`}
          >
            /
          </motion.span>

          {/* Text */}
          <div className={`${isLeft ? "text-left" : "text-right"}`}>
            <motion.h2
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              className="text-[10px] sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold text-black tracking-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.4,
              }}
              className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-gray-500 mt-0.5 sm:mt-1"
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollToContact = () => {
    navigate("/", {
      replace: true,
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <>
      <Helmet>
        <title>Case Studies - NEW EDGE</title>
        <meta
          name="description"
          content="Erfolgsgeschichten und Case Studies von NEW EDGE. Erfahren Sie, wie wir unseren Kunden helfen."
        />
      </Helmet>

      <div
        className="min-h-screen bg-white"
      >
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Compact Header */}

        {/* Category Rows - Alle auf einen Blick */}
        <div className="flex flex-col pt-20 sm:pt-24 md:pt-28">
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

          {/* LAB - Cases links, Label rechts */}
          <CategoryRow
            title="LAB"
            subtitle="AI Automation & Innovation"
            cases={labCases}
            accentColor="bg-amber-500"
            slashColor="text-amber-500/40"
            direction="right"
            index={1}
          />
        </div>

        {/* Bottom CTA */}
        <section className="py-8 md:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-black mb-5">Bereit für Ihr nächstes Projekt?</h2>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 md:px-7 md:py-3 font-semibold hover:bg-gray-800 transition-colors duration-300"
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
