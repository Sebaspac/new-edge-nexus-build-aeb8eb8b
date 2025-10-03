import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";

const Resources = () => {
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

  return (
    <>
      <Helmet>
        <title>Ressourcen - NEW EDGE</title>
        <meta name="description" content="Nützliche Ressourcen, Guides und Materialien von NEW EDGE." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        <section className="relative w-full pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-black">
              Ressourcen
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Entdecken Sie unsere Ressourcen, Guides und hilfreiche Materialien.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
