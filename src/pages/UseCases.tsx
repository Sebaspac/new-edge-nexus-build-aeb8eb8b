import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { LazyVideo } from "@/components/LazyVideo";
import { ArrowRight, Briefcase, Brain, TrendingUp, Zap } from "lucide-react";

const UseCases = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const showAllServices = () => {
    setSelectedServices([]);
  };

  const services = [
    {
      id: "studio",
      name: "Studio",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "media",
      name: "Media",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "lab",
      name: "Lab",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const allUseCases = [
    {
      industry: "Beratung",
      icon: Briefcase,
      title: "Vom Konzept zur zweisprachigen Marke",
      description:
        "Als Lead-Agentur begleiteten wir AlbaNova von der ersten Idee bis zur zweisprachigen Marke – inklusive Konzept, Strategie, Social‑Plan, Branding, Storytelling, Webentwicklung und Funnel.",
      metrics: ["7 integrierte Leistungen", "2 Sprachen (DE/ES)", "360° Rundum‑Service"],
      color: "from-purple-600 to-purple-400",
      services: ["studio", "media", "lab"],
      link: "/case-study/albanova",
    },
    {
      industry: "Maschinenbau",
      icon: Brain,
      title: "RAG-Wissensagent",
      description:
        "Industriewissen. Sofort verfügbar. Unternehmensweiter Wissensagent für 18.000+ Dokumente – Supportzeiten halbiert.",
      metrics: ["18.000+ Dokumente", "4-6h täglich gespart", "< 1 Min Suchzeit"],
      color: "from-orange-600 to-amber-400",
      services: ["lab", "studio"],
      link: "/case-study/retail-lab",
    },
    {
      industry: "Handel & E-Commerce",
      icon: Zap,
      title: "Marketing-Agent",
      description:
        "Marketing, das 24/7 arbeitet. Vollautomatisierte Content-Produktion und Kampagnensteuerung – 70% schnellere Time-to-Market.",
      metrics: ["70% schnellere TTM", "24/7 Automation", "8 Standorte"],
      color: "from-blue-600 to-cyan-400",
      services: ["lab", "media"],
      link: "/case-study/ecommerce",
    },
    {
      industry: "B2B-Dienstleistung",
      icon: TrendingUp,
      title: "Sales-Agent",
      description:
        "Vertrieb neu gedacht. KI-Agent qualifiziert Leads automatisch und fokussiert den Vertrieb auf echte Chancen.",
      metrics: ["Auto Lead-Scoring", "Personalisierte Ansprache", "Transformierte Pipeline"],
      color: "from-purple-600 to-pink-400",
      services: ["lab", "studio"],
      link: "/case-study/social-media",
    },
  ];

  const filteredUseCases =
    selectedServices.length === 0
      ? allUseCases
      : allUseCases.filter((useCase) =>
          selectedServices.every((service) => useCase.services.includes(service))
        );

  return (
    <>
      <Helmet>
        <title>Use Cases - NEW EDGE</title>
        <meta
          name="description"
          content="Entdecken Sie unsere KI-Lösungen für verschiedene Branchen. Von Enterprise Automation bis Customer Experience."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[60vh] sm:h-[75vh] lg:h-auto lg:aspect-video">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(107, 114, 128, 0.3), rgba(75, 85, 99, 0.2), rgba(55, 65, 81, 0.1))",
              }}
            >
              <LazyVideo
                src="/assets/use-cases-hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover scale-110"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.2), transparent)",
                }}
              />

              <div className="absolute bottom-0 left-0 p-4 pb-6 sm:p-12 sm:pb-12 lg:p-16 max-w-full sm:max-w-4xl">
                <div className="inline-block mb-2 sm:mb-4">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">
                    Unsere Lösungen
                  </span>
                </div>
                <h1 className="text-3xl sm:text-h1 lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 lg:mb-6 leading-tight text-white">
                  NEW EDGE
                  <br />
                  <span
                    className="italic font-black"
                    style={{
                      background: "linear-gradient(to right, #6b7280, #9ca3af)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    USE CASES
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                New Edge ist eine Creative-Tech-Agentur an der Schnittstelle von Kreativ-Studio und
                Technologie-Unternehmen. In drei Units – Studio (Branding & Design), Media
                (KI-gestützte Content- & Medienproduktion) und Lab (Automation, Prototyping, eigene
                Tools) – liefern wir End-to-End-Lösungen für Marken im DACH-Mittelstand.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mt-4">
                Entdecken Sie, wie Strategie, Content & Automatisierung in einem System vereint
                werden – mit klaren KPIs & Dashboard-Transparenz.
              </p>
            </div>
          </div>
        </section>

        {/* Service Filter */}
        <section className="relative w-full pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
              {/* Alle Button */}
              <button
                onClick={showAllServices}
                className={`px-4 sm:px-8 py-2 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 ${
                  selectedServices.length === 0
                    ? "bg-gradient-to-r from-gray-700 to-gray-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                Alle
              </button>

              {/* Service Filter Buttons */}
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`px-4 sm:px-8 py-2 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Use Cases Grid */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {filteredUseCases.map((useCase, index) => (
                <Link
                  key={index}
                  to={useCase.link || "#"}
                  className="group block bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {useCase.services.map((service) => {
                      const serviceData = services.find((s) => s.id === service);
                      return (
                        <span
                          key={service}
                          className={`px-3 py-1 text-xs sm:text-sm rounded-full text-white font-semibold bg-gradient-to-r ${
                            serviceData?.color || "from-gray-500 to-gray-400"
                          }`}
                        >
                          {serviceData?.name || service}
                        </span>
                      );
                    })}
                  </div>

                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${useCase.color} text-white`}
                    >
                      <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {useCase.industry}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {useCase.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-gray-900 group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black mb-2">4+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Erfolgreiche Projekte
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black mb-2">3</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Integrierte Services
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black mb-2">100%</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Kundenzufriedenheit
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                  KI-Automatisierung
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Buchen Sie ein
              kostenloses Beratungsgespräch.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UseCases;
