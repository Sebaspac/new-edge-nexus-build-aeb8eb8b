import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { LazyVideo } from "@/components/LazyVideo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const UseCases = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    duration: 30
  });

  const caseStudies = [
    {
      id: "albanova",
      tabTitle: "AlbaNova (Consulting)",
      label: "CASE STUDY",
      headline: "Integration neu gedacht.",
      description: "Wie wir für AlbaNova Consulting eine komplette Marken- und Digitalstrategie entwickelten – von der ersten Idee bis zur zweisprachigen Marke.",
      backgroundVideo: "/assets/studio-hero-video.mp4",
      route: "/case-study/albanova"
    },
    {
      id: "rag-wissensagent",
      tabTitle: "RAG-Wissensagent (Industry)",
      label: "CASE STUDY",
      headline: "Industriewissen. Sofort verfügbar.",
      description: "Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der Produktions- und Engineering-Know-how in Echtzeit abrufbar macht.",
      backgroundVideo: "/assets/lab-hero-video.mp4",
      route: "/case-study/retail-lab"
    },
    {
      id: "marketing-agent",
      tabTitle: "Marketing-Agent (Retail)",
      label: "CASE STUDY",
      headline: "Marketing. Automatisiert.",
      description: "KI-gestützte Marketingautomatisierung für den Einzelhandel – von der Content-Erstellung bis zur Performance-Optimierung.",
      backgroundVideo: "/assets/media-hero-video.mp4",
      route: "/case-study/ecommerce"
    },
    {
      id: "sales-agent",
      tabTitle: "Sales-Agent (B2B)",
      label: "CASE STUDY",
      headline: "Vertrieb. Intelligent.",
      description: "Automatisierte Lead-Qualifizierung und Vertriebsunterstützung durch KI – für mehr Effizienz im B2B-Sales-Prozess.",
      backgroundVideo: "/assets/agents-hero-video.mp4",
      route: "/case-study/social-media"
    },
    {
      id: "visual-merchandising",
      tabTitle: "Visual Merchandising AI",
      label: "CASE STUDY",
      headline: "Visuals. Automatisiert.",
      description: "KI-gestützte Produktvisualisierung für Marketing-Kampagnen – schneller Content, höheres Engagement, messbare Ergebnisse.",
      backgroundVideo: "/assets/media-content-video.mp4",
      route: "/case-study/visual-merchandising"
    }
  ];

  const scrollToContact = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <>
      <Helmet>
        <title>Use Cases - NEW EDGE</title>
        <meta name="description" content="Entdecken Sie unsere KI-Lösungen für verschiedene Branchen. Von Enterprise Automation bis Customer Experience." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Horizontal Tab Navigation */}
        <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {caseStudies.map((caseStudy, index) => (
                <button
                  key={caseStudy.id}
                  onClick={() => scrollTo(index)}
                  className={`
                    relative whitespace-nowrap px-4 py-2 text-sm font-bold transition-all duration-300
                    ${activeIndex === index 
                      ? 'text-purple-400' 
                      : 'text-white/60 hover:text-white/80'
                    }
                  `}
                >
                  {caseStudy.tabTitle}
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel */}
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-screen">
                  {/* Background Video */}
                  <div className="absolute inset-0">
                    <LazyVideo
                      src={caseStudy.backgroundVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center px-4 sm:px-8">
                    <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8">
                      {/* Label */}
                      <div className="inline-block">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-purple-400">
                          {caseStudy.label}
                        </span>
                      </div>

                      {/* Headline */}
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white">
                        {caseStudy.headline}
                      </h1>

                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        {caseStudy.description}
                      </p>

                      {/* CTA Button */}
                      <div className="pt-4 sm:pt-6">
                        <Link
                          to={caseStudy.route}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                        >
                          Jetzt mehr erfahren
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-purple-400 transition-colors" />
                  </button>

                  <button
                    onClick={scrollNext}
                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Next case study"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-purple-400 transition-colors" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {caseStudies.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${activeIndex === idx 
                            ? 'w-8 bg-purple-500' 
                            : 'bg-white/30 hover:bg-white/50'
                          }
                        `}
                        aria-label={`Go to case study ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCases;
