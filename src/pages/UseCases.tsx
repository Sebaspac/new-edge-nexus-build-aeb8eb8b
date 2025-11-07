import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, ShoppingCart, Heart, Users, Briefcase, Store, Globe, Palette, Film, Lightbulb, Brain, TrendingUp, Zap } from "lucide-react";
const UseCases = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const scrollToContact = () => {
    navigate('/', {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };
  const showAllServices = () => {
    setSelectedServices([]);
  };
  const services = [{
    id: 'studio',
    name: 'Studio',
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'media',
    name: 'Media',
    color: 'from-blue-500 to-cyan-500'
  }, {
    id: 'lab',
    name: 'Lab',
    color: 'from-yellow-500 to-orange-500'
  }];
  const allUseCases = [
  // Studio Cases (2)
  {
    industry: "Beratung",
    icon: Briefcase,
    title: "Strategische KI-Beratung",
    description: "Entwickeln Sie maßgeschneiderte KI-Strategien für Ihre Unternehmensberatung und optimieren Sie Entscheidungsprozesse.",
    metrics: ["50% schnellere Analysen", "35% bessere Insights", "60% höhere Effizienz"],
    color: "from-purple-600 to-purple-400",
    services: ['studio']
  }, {
    industry: "Commerce",
    icon: ShoppingCart,
    title: "E-Commerce Personalisierung",
    description: "Steigern Sie Conversions mit KI-basierten Produktempfehlungen und dynamischen Preisstrategien.",
    metrics: ["45% höhere Conversion", "35% größerer Warenkorb", "50% mehr Repeat-Käufer"],
    color: "from-purple-500 to-indigo-400",
    services: ['studio']
  },
  // Media Cases (2)
  {
    industry: "Einzelhandel",
    icon: Film,
    title: "Visual Merchandising AI",
    description: "Erstellen Sie automatisch ansprechende Produktbilder und Videos für Ihre Marketing-Kampagnen.",
    metrics: ["80% schnellere Content-Produktion", "55% mehr Engagement", "40% höhere Verkäufe"],
    color: "from-cyan-600 to-teal-400",
    services: ['media']
  }, {
    industry: "Customer Experience",
    icon: TrendingUp,
    title: "Social Media Intelligence",
    description: "Analysieren Sie Social Media Trends und erstellen Sie viralen Content mit KI-Unterstützung.",
    metrics: ["200% mehr Engagement", "80% höhere Reichweite", "55% mehr Follower"],
    color: "from-blue-600 to-purple-400",
    services: ['media']
  },
  // Lab Case (1)
  {
    industry: "Einzelhandel",
    icon: Lightbulb,
    title: "Retail Innovation Lab",
    description: "Testen Sie innovative KI-Lösungen für Store-Automatisierung und Customer Journey Optimierung.",
    metrics: ["60% effizientere Stores", "45% bessere Customer Journey", "35% höhere Profitabilität"],
    color: "from-orange-600 to-amber-400",
    services: ['lab']
  }];
  const filteredUseCases = selectedServices.length === 0 ? allUseCases : allUseCases.filter(useCase => selectedServices.every(service => useCase.services.includes(service)));
  return <>
      <Helmet>
        <title>Use Cases - NEW EDGE</title>
        <meta name="description" content="Entdecken Sie unsere KI-Lösungen für verschiedene Branchen. Von Enterprise Automation bis Customer Experience." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
              background: 'linear-gradient(to bottom right, rgba(107, 114, 128, 0.3), rgba(75, 85, 99, 0.2), rgba(55, 65, 81, 0.1))'
            }}>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.2), transparent)'
              }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <div className="inline-block mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-white/80">Unsere Lösungen</span>
                </div>
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                    background: 'linear-gradient(to right, #6b7280, #9ca3af)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>USE CASES</span><br />
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xl text-gray-600 leading-relaxed">
                Entdecken Sie, wie Strategie, Content &amp; Automatisierung in einem System vereint werden – mit klaren KPIs &amp; Dashboard-Transparenz.
              </p>
            </div>
          </div>
        </section>

        {/* Service Filter */}
        <section className="relative w-full pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {/* Alle Button */}
              <button onClick={showAllServices} className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${selectedServices.length === 0 ? 'bg-gradient-to-r from-gray-700 to-gray-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'}`}>
                Alle
              </button>

              {/* Service Filter Buttons */}
              {services.map(service => <button key={service.id} onClick={() => toggleService(service.id)} className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${selectedServices.includes(service.id) ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105` : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'}`}>
                  {service.name}
                </button>)}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="relative w-full pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {filteredUseCases.length === 0 ? <div className="text-center py-20">
                <p className="text-2xl font-bold text-gray-400 mb-4">
                  Keine Use Cases gefunden
                </p>
                <p className="text-gray-500 mb-8">
                  Probieren Sie eine andere Filterkombination
                </p>
                <button onClick={showAllServices} className="px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
                  Alle anzeigen
                </button>
              </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUseCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Service Tags */}
                      <div className="flex gap-2 mb-4">
                        {useCase.services.map(service => <span key={service} className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700 uppercase">
                            {service}
                          </span>)}
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {useCase.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {useCase.metrics.map((metric, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            <span className="font-semibold text-black">{metric}</span>
                          </div>)}
                      </div>
                    
                    <Link to="/case-study/albanova" className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all duration-300">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    </div>;
            })}
              </div>}
          </div>
        </section>

        {/* Stats */}
        <section className="relative w-full py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{
              value: "500+",
              label: "Erfolgreiche Projekte"
            }, {
              value: "98%",
              label: "Kundenzufriedenheit"
            }, {
              value: "45%",
              label: "Ø Effizienzsteigerung"
            }, {
              value: "24/7",
              label: "Support & Service"
            }].map((stat, index) => <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                Bereit für Ihre digitale Transformation?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam herausfinden, welche KI-Lösung am besten zu Ihren 
                individuellen Anforderungen passt.
              </p>
              <button onClick={scrollToContact} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                Kostenlose Beratung vereinbaren
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default UseCases;