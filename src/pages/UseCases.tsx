import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";

const UseCases = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToContact = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const cases = [
    {
      title: "AlbaNova (Consulting)",
      subtitle: "CASE STUDY",
      headline: "Integration neu gedacht.",
      description: "Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten, um Migration in eine Chance zu verwandeln.",
      link: "/case-study/albanova"
    },
    {
      title: "RAG-Wissensagent (Industry)",
      subtitle: "CASE STUDY",
      headline: "Integration neu gedacht.",
      description: "Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten, um Migration in eine Chance zu verwandeln.",
      link: "/case-study/retail-lab"
    },
    {
      title: "Marketing-Agent (Retail)",
      subtitle: "CASE STUDY",
      headline: "Integration neu gedacht.",
      description: "Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten, um Migration in eine Chance zu verwandeln.",
      link: "/case-study/ecommerce"
    },
    {
      title: "Sales-Agent (B2B)",
      subtitle: "CASE STUDY",
      headline: "Integration neu gedacht.",
      description: "Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten, um Migration in eine Chance zu verwandeln.",
      link: "/case-study/social-media"
    }
  ];

  const activeCase = cases[activeTab];

  return (
    <>
      <Helmet>
        <title>Use Cases - NEW EDGE</title>
        <meta name="description" content="Entdecken Sie unsere Case Studies und erfolgreiche Projekte von NEW EDGE." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Tab Navigation */}
        <section className="relative w-full pt-32 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start border-b border-gray-800 pb-4">
              {cases.map((caseItem, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 relative ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {caseItem.title}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="relative w-full py-20 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-purple-400">
                  {activeCase.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 text-white leading-tight">
                {activeCase.headline}
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                {activeCase.description}
              </p>
              
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 text-lg"
              >
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UseCases;
