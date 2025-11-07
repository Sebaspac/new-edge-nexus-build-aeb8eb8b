import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
const Careers = () => {
  const navigate = useNavigate();
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
  return <>
      <Helmet>
        <title>Karriere - NEW EDGE</title>
        <meta name="description" content="Karrieremöglichkeiten bei NEW EDGE. Werden Sie Teil unseres innovativen Teams." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.6), rgba(80, 80, 80, 0.4))'
          }}>
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #ffffff, #d1d5db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>KARRIERE</span><br />
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
                Werden Sie Teil unseres innovativen Teams und gestalten Sie die Zukunft der 
                KI-gestützten digitalen Transformation. Bei uns arbeiten Sie an spannenden 
                Projekten mit modernsten Technologien.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative w-full py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-black">
              Warum NEW EDGE?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "Innovation First",
              description: "Arbeiten Sie mit cutting-edge KI-Technologien und gestalten Sie die Zukunft aktiv mit."
            }, {
              title: "Work-Life Balance",
              description: "Flexible Arbeitszeiten, Remote-Möglichkeiten und 30 Tage Urlaub für Ihre Erholung."
            }, {
              title: "Weiterentwicklung",
              description: "Kontinuierliche Weiterbildung, Konferenz-Besuche und persönliches Entwicklungsbudget."
            }].map((value, index) => <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="relative w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center text-black">
              Offene Positionen
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">Bei Interesse sende uns eine E-Mail mit deiner aussagekräftigen Bewerbung (Lebenslauf + kurzes Anschreiben) an info@newedgebrand.com</p>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[{
              title: "Senior AI Engineer",
              location: "Berlin / Remote",
              type: "Vollzeit",
              description: "Entwickeln Sie innovative KI-Lösungen und bringen Sie Machine Learning in die Produktion."
            }, {
              title: "Full-Stack Developer",
              location: "München / Hybrid",
              type: "Vollzeit",
              description: "Bauen Sie moderne Web-Anwendungen mit React, Node.js und Cloud-Technologien."
            }, {
              title: "UX/UI Designer",
              location: "Remote",
              type: "Vollzeit / Teilzeit",
              description: "Gestalten Sie intuitive Benutzeroberflächen für komplexe KI-Systeme."
            }, {
              title: "Product Manager",
              location: "Berlin",
              type: "Vollzeit",
              description: "Leiten Sie die Entwicklung unserer KI-Produkte von der Konzeption bis zum Launch."
            }, {
              title: "DevOps Engineer",
              location: "Remote",
              type: "Vollzeit",
              description: "Bauen Sie skalierbare Cloud-Infrastruktur und automatisieren Sie Deployment-Prozesse."
            }].map((job, index) => <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          📍 {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          💼 {job.type}
                        </span>
                      </div>
                    </div>
                    <button onClick={scrollToContact} className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                      Jetzt bewerben
                    </button>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Benefits */}
        

        {/* CTA */}
        <section className="relative w-full py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Finden Sie Ihre Traumposition nicht?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Senden Sie uns Ihre Initiativbewerbung! Wir sind immer auf der Suche nach 
              talentierten Menschen, die unser Team bereichern möchten.
            </p>
            <button onClick={scrollToContact} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
              Initiativbewerbung senden
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default Careers;