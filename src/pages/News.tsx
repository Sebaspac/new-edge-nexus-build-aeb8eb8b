import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';

const News = () => {
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
        <title>News & Press - NEW EDGE</title>
        <meta name="description" content="Aktuelle News und Pressemitteilungen von NEW EDGE." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        <section className="relative w-full pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-black">
              News & Press
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Aktuelle Nachrichten, Pressemitteilungen und Updates von NEW EDGE.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
