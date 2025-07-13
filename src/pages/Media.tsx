import { Link } from "react-router-dom";
import { ArrowLeft, Megaphone, Target, BarChart, Users, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Media = () => {
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Megaphone className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-black mb-2">New Edge Media</h1>
              <p className="text-2xl text-blue-600 font-medium">Content & Strategie</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Wir entwickeln datengetriebene Content-Strategien, die Ihre Zielgruppe erreichen und engagieren. 
            Unsere KI-gestützten Ansätze optimieren kontinuierlich Performance und ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Content-Strategien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Maßgeschneiderte Content-Pläne, die Ihre Markenbotschaft effektiv vermitteln
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Social Media Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Professionelle Betreuung Ihrer Social Media Kanäle mit authentischem Engagement
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">SEO & Performance Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Suchmaschinenoptimierung und datengetriebenes Marketing für maximale Reichweite
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Brand Storytelling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Emotionale Geschichten, die Ihre Marke unvergesslich machen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Aufbau und Pflege loyaler Communities rund um Ihre Marke
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Detaillierte Auswertungen und Insights für kontinuierliche Optimierung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Content-Strategie revolutionieren.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Projekt starten
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Media;