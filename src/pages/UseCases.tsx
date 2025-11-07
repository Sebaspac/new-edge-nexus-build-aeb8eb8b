import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, ShoppingCart, Heart, Users, Briefcase, Store, Globe, Palette, Film, Lightbulb, Brain, TrendingUp, Zap } from "lucide-react";

const UseCases = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<'studio' | 'media' | 'lab'>('studio');

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

  const services = [
    { id: 'studio' as const, name: 'Studio', color: 'from-purple-500 to-pink-500' },
    { id: 'media' as const, name: 'Media', color: 'from-blue-500 to-cyan-500' },
    { id: 'lab' as const, name: 'Lab', color: 'from-yellow-500 to-orange-500' }
  ];

  const useCasesByService = {
    studio: [
      {
        industry: "Beratung",
        icon: Briefcase,
        title: "Strategische KI-Beratung",
        description: "Entwickeln Sie maßgeschneiderte KI-Strategien für Ihre Unternehmensberatung und optimieren Sie Entscheidungsprozesse.",
        metrics: ["50% schnellere Analysen", "35% bessere Insights", "60% höhere Effizienz"],
        color: "from-purple-600 to-purple-400"
      },
      {
        industry: "Einzelhandel",
        icon: Store,
        title: "Retail Intelligence Platform",
        description: "Optimieren Sie Ihr Geschäft mit KI-gestützter Bestandsverwaltung, Prognosen und personalisierten Kundenempfehlungen.",
        metrics: ["40% weniger Überbestände", "55% bessere Prognosen", "30% höhere Marge"],
        color: "from-pink-600 to-rose-400"
      },
      {
        industry: "Commerce",
        icon: ShoppingCart,
        title: "E-Commerce Personalisierung",
        description: "Steigern Sie Conversions mit KI-basierten Produktempfehlungen und dynamischen Preisstrategien.",
        metrics: ["45% höhere Conversion", "35% größerer Warenkorb", "50% mehr Repeat-Käufer"],
        color: "from-purple-500 to-indigo-400"
      },
      {
        industry: "Healthcare",
        icon: Heart,
        title: "Healthcare Workflow Automation",
        description: "Automatisieren Sie Verwaltungsprozesse und verbessern Sie die Patientenbetreuung mit intelligenten Workflows.",
        metrics: ["60% weniger Verwaltung", "40% mehr Patientenzeit", "80% höhere Zufriedenheit"],
        color: "from-red-500 to-pink-400"
      },
      {
        industry: "Customer Experience",
        icon: Users,
        title: "CX Intelligence Suite",
        description: "Verstehen Sie Ihre Kunden besser durch KI-Analyse von Feedback, Verhalten und Präferenzen.",
        metrics: ["85% Kundenzufriedenheit", "50% weniger Churn", "65% höheres Engagement"],
        color: "from-indigo-600 to-purple-400"
      }
    ],
    media: [
      {
        industry: "Beratung",
        icon: Palette,
        title: "Brand Strategy & Media Planning",
        description: "Entwickeln Sie datengetriebene Medienstrategien und optimieren Sie Ihre Markenkommunikation mit KI-Insights.",
        metrics: ["70% bessere Zielgruppenansprache", "45% höhere Kampagneneffizienz", "60% mehr Reichweite"],
        color: "from-blue-600 to-cyan-400"
      },
      {
        industry: "Einzelhandel",
        icon: Film,
        title: "Visual Merchandising AI",
        description: "Erstellen Sie automatisch ansprechende Produktbilder und Videos für Ihre Marketing-Kampagnen.",
        metrics: ["80% schnellere Content-Produktion", "55% mehr Engagement", "40% höhere Verkäufe"],
        color: "from-cyan-600 to-teal-400"
      },
      {
        industry: "Commerce",
        icon: Globe,
        title: "Multi-Channel Content Automation",
        description: "Generieren und verteilen Sie konsistenten Content über alle digitalen Kanäle automatisch.",
        metrics: ["90% schnellere Veröffentlichung", "65% mehr Content", "50% niedrigere Kosten"],
        color: "from-blue-500 to-indigo-400"
      },
      {
        industry: "Healthcare",
        icon: Heart,
        title: "Patient Education Content",
        description: "Erstellen Sie verständliche, personalisierte Gesundheitsinformationen für Ihre Patienten automatisch.",
        metrics: ["75% besseres Verständnis", "60% höhere Compliance", "85% Patientenzufriedenheit"],
        color: "from-teal-500 to-cyan-400"
      },
      {
        industry: "Customer Experience",
        icon: TrendingUp,
        title: "Social Media Intelligence",
        description: "Analysieren Sie Social Media Trends und erstellen Sie viralen Content mit KI-Unterstützung.",
        metrics: ["200% mehr Engagement", "80% höhere Reichweite", "55% mehr Follower"],
        color: "from-blue-600 to-purple-400"
      }
    ],
    lab: [
      {
        industry: "Beratung",
        icon: Brain,
        title: "Advanced Analytics Lab",
        description: "Experimentieren Sie mit neuesten KI-Modellen für komplexe Geschäftsanalysen und Prognosen.",
        metrics: ["95% Vorhersagegenauigkeit", "70% schnellere Erkenntnisse", "50% bessere Entscheidungen"],
        color: "from-yellow-600 to-orange-400"
      },
      {
        industry: "Einzelhandel",
        icon: Lightbulb,
        title: "Retail Innovation Lab",
        description: "Testen Sie innovative KI-Lösungen für Store-Automatisierung und Customer Journey Optimierung.",
        metrics: ["60% effizientere Stores", "45% bessere Customer Journey", "35% höhere Profitabilität"],
        color: "from-orange-600 to-amber-400"
      },
      {
        industry: "Commerce",
        icon: Zap,
        title: "Commerce Experimentation Platform",
        description: "Prototypen Sie neue KI-Features für Ihr Online-Geschäft in sicherer Testumgebung.",
        metrics: ["80% schnellere Innovation", "90% weniger Risiko", "65% mehr erfolgreiche Features"],
        color: "from-yellow-500 to-orange-400"
      },
      {
        industry: "Healthcare",
        icon: Brain,
        title: "Medical AI Research",
        description: "Erforschen Sie cutting-edge KI-Anwendungen für Diagnose und Behandlungsplanung.",
        metrics: ["92% Diagnose-Genauigkeit", "50% schnellere Forschung", "70% mehr Durchbrüche"],
        color: "from-orange-500 to-red-400"
      },
      {
        industry: "Customer Experience",
        icon: Lightbulb,
        title: "CX Innovation Lab",
        description: "Entwickeln Sie bahnbrechende KI-Lösungen für außergewöhnliche Kundenerlebnisse.",
        metrics: ["95% Innovation Success Rate", "75% schnellere Time-to-Market", "60% höhere Adoption"],
        color: "from-amber-600 to-yellow-400"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Use Cases - NEW EDGE</title>
        <meta name="description" content="Entdecken Sie unsere KI-Lösungen für verschiedene Branchen. Von Enterprise Automation bis Customer Experience." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Use Cases
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Entdecken Sie, wie unsere KI-Lösungen Unternehmen in verschiedenen Branchen 
                transformieren und messbare Ergebnisse liefern.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { value: "500+", label: "Erfolgreiche Projekte" },
                { value: "98%", label: "Kundenzufriedenheit" },
                { value: "45%", label: "Ø Effizienzsteigerung" },
                { value: "24/7", label: "Support & Service" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="relative w-full pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-center gap-4 mb-12">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    activeService === service.id
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid by Service */}
        <section className="relative w-full pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCasesByService[activeService].map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-6 h-6 text-white" />
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
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="font-semibold text-black">{metric}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
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
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Kostenlose Beratung vereinbaren
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
