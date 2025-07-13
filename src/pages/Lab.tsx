import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Cpu, Eye, Cog, BarChart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Lab = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center hover:scale-105 transition-transform duration-300 mb-2">
                <img 
                  alt="New Edge Logo" 
                  className="h-8 w-8 mr-3" 
                  src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" 
                />
                <div className="text-2xl font-bold text-black">
                  New Edge
                </div>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center text-gray-500 hover:text-black transition-all duration-300 hover:scale-110 text-sm"
              >
                <ArrowLeft className="mr-2 h-3 w-3" />
                Zurück zu Services
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-all duration-300">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-black transition-all duration-300">Services</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Brain className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-black mb-2">New Edge Lab</h1>
              <p className="text-2xl text-green-600 font-medium">KI & Innovation</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            In unserem Innovation Lab entwickeln wir die Marketing-Tools von morgen. 
            KI-getriebene Lösungen, die Ihre Prozesse automatisieren und optimieren.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Unsere Technologien</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Intelligente Algorithmen zur Mustererkennung und Vorhersage
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Natural Language Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Verstehen und Generieren menschlicher Sprache für bessere Kommunikation
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Bildanalyse und -verarbeitung für visuelle KI-Anwendungen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Automation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Workflow-Automatisierung für effizientere Geschäftsprozesse
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tiefgreifende Datenanalyse für datengetriebene Entscheidungen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Maßgeschneiderte Schnittstellen für nahtlose Integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Aktuelle Projekte</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">KI-Content Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatisierte Content-Erstellung basierend auf Brand Guidelines
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Smart Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Predictive Analytics für Marketing-Performance
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Brand Voice AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  KI-System zur Konsistenz der Markenkommunikation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Innovation als Philosophie</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Wir glauben, dass KI nicht nur ein Tool ist, sondern ein kreativer Partner. 
              In unserem Lab experimentieren wir mit den neuesten Technologien und entwickeln 
              maßgeschneiderte Lösungen für Ihre spezifischen Herausforderungen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
                Experimentell
              </Badge>
              <p className="text-gray-600">Ständiges Testen neuer Technologien</p>
            </div>
            
            <div className="text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
                Datengetrieben
              </Badge>
              <p className="text-gray-600">Entscheidungen basieren auf Fakten</p>
            </div>
            
            <div className="text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
                Zukunftsorientiert
              </Badge>
              <p className="text-gray-600">Blick für kommende Trends und Möglichkeiten</p>
            </div>
            
            <div className="text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
                Ethisch verantwortlich
              </Badge>
              <p className="text-gray-600">KI im Dienst der Menschen</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-black mb-6">Von der Idee zur Lösung</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jedes Projekt beginnt mit einer Vision. Unser interdisziplinäres Team aus Entwicklern, 
              Data Scientists und Kreativen verwandelt komplexe Anforderungen in elegante, 
              benutzerfreundliche Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Bereit für die Zukunft?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam innovative KI-Lösungen für Ihr Unternehmen entwickeln.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
            asChild
          >
            <Link to="/#contact-section">
              Innovation starten
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Lab;