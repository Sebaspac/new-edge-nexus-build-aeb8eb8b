import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Palette, Monitor, Package, FileImage, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Studio = () => {
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-black mb-2">New Edge Studio</h1>
              <p className="text-2xl text-purple-600 font-medium">Design & Kreation</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Unser kreatives Studio verbindet ästhetische Exzellenz mit strategischem Denken. 
            Wir schaffen visuelle Identitäten, die nicht nur schön aussehen, sondern auch funktionieren.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Brand Identity Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Entwicklung einzigartiger Markenidentitäten mit Logo, Farbpalette und Typografie
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Benutzerfreundliche Interfaces, die sowohl funktional als auch ästhetisch überzeugen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Motion Graphics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Animierte Grafiken und Videos, die Ihre Botschaft lebendig vermitteln
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Packaging Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Verpackungsdesign, das im Regal heraussticht und Ihre Marke stärkt
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileImage className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Print & Digital Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Konsistente Gestaltung für alle Medien - von Broschüren bis zu Web-Bannern
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Grid3x3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Design Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Strukturierte Design-Frameworks für konsistente Markenerlebnisse
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Unser kreativer Prozess</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse</h3>
              <p className="text-gray-600">Verstehen Ihrer Marke und Zielgruppe</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Konzeption</h3>
              <p className="text-gray-600">Entwicklung strategischer Design-Ansätze</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Kreative Umsetzung der Konzepte</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Iteration</h3>
              <p className="text-gray-600">Verfeinerung basierend auf Feedback</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementierung</h3>
              <p className="text-gray-600">Rollout und Anwendung des Designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-2">
              Design mit System
            </Badge>
            <h2 className="text-4xl font-bold text-black mb-6">Design mit System</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Jedes Design folgt einem durchdachten System. Wir entwickeln nicht nur einzelne Assets, 
              sondern ganzheitliche Design-Sprachen, die Ihre Marke konsistent und wiedererkennbar machen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Lassen Sie Ihre Marke strahlen</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gemeinsam entwickeln wir ein Design, das Ihre Vision zum Leben erweckt.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Design-Projekt starten
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Studio;