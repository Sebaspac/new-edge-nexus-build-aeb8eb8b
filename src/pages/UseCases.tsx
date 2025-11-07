import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, ShoppingCart, Heart, GraduationCap, Zap, Users } from "lucide-react";

const UseCases = () => {
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

  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Automation",
      description: "Optimieren Sie Ihre Geschäftsprozesse mit KI-gestützten Automatisierungslösungen, die Zeit sparen und Fehler reduzieren.",
      metrics: ["65% schnellere Prozesse", "40% Kostenreduktion", "99% Genauigkeit"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Intelligence",
      description: "Steigern Sie Ihren Umsatz mit personalisierten Produktempfehlungen und intelligenten Pricing-Strategien.",
      metrics: ["35% höhere Conversion", "25% größerer Warenkorb", "50% weniger Retouren"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Healthcare Analytics",
      description: "Verbessern Sie die Patientenversorgung durch KI-basierte Diagnoseunterstützung und Behandlungsplanung.",
      metrics: ["30% schnellere Diagnosen", "45% bessere Outcomes", "60% effizientere Workflows"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Education Platform",
      description: "Revolutionieren Sie das Lernen mit adaptiven KI-Tutoren und personalisierten Lernpfaden für jeden Schüler.",
      metrics: ["85% höheres Engagement", "40% bessere Noten", "70% mehr Abschlüsse"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Smart Manufacturing",
      description: "Maximieren Sie Ihre Produktionseffizienz mit vorausschauender Wartung und Echtzeit-Qualitätskontrolle.",
      metrics: ["50% weniger Ausfallzeit", "30% höhere Qualität", "20% Energieeinsparung"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Begeistern Sie Ihre Kunden mit 24/7 KI-Support und hyperpersonalisierten Interaktionen über alle Kanäle.",
      metrics: ["90% Kundenzufriedenheit", "60% schnellere Antworten", "45% mehr Retention"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

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

        {/* Use Cases Grid */}
        <section className="relative w-full pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
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
