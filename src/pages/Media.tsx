import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Video, Users, Rocket, ArrowRight, Palette, BarChart3, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { LazyVideo } from "@/components/LazyVideo";
const Footer = lazy(() => import("@/components/Footer").then(m => ({
  default: m.Footer
})));
const Media = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Media Cases (filtered from all cases)
  const mediaCases = [{
    id: 1,
    client: "RETAIL LAB",
    headline: "Social Media Transformation",
    category: "SOCIAL MEDIA",
    route: "/case-studies/retail-lab",
    image: "/assets/757332b3-93c8-4953-912b-2d0c899ab881.png"
  }];
  return <>
      <Helmet>
        <title>NEW EDGE MEDIA - Content, Social & Performance | Kreative Kampagnen</title>
        <meta name="description" content="NEW EDGE MEDIA vereint Content-Produktion, Social Media Management und Performance Marketing. Wir schaffen Kampagnen, die Marken sichtbar machen und Wachstum messbar steigern." />
        <meta name="keywords" content="Content Marketing, Social Media Management, Performance Marketing, Content Produktion, Launchkampagnen, Creative Assets" />
        <link rel="canonical" href="https://new-edge.de/media" />
        <meta property="og:title" content="NEW EDGE MEDIA - Content, Social & Performance" />
        <meta property="og:description" content="Kreative Kampagnen für messbares Wachstum" />
        <meta property="og:url" content="https://new-edge.de/media" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1))'
          }}>
              <LazyVideo src="/assets/media-hero-video.mp4" autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>MEDIA</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Section */}
        <section className="relative py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="max-w-5xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                „Wir schaffen Content, Communities und Kampagnen, die Marken sichtbar machen – und Wachstum messbar steigern."
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                New Edge Media verbindet kreative Produktion, Social-Media-Expertise und datengetriebenes Performance-Marketing. Gemeinsam mit spezialisierten Partnern entwickeln wir Inhalte, Systeme und Kampagnen, die Reichweite in Ergebnisse verwandeln.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Content-Produktion & Creative Assets */}
        <section className="py-16 sm:py-24" style={{
        background: 'linear-gradient(to bottom right, white, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08))'
      }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] flex items-center justify-center">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">Content-Produktion & Creative Assets</h2>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 p-6 rounded-xl border border-[#3b82f6]/20">
                  <h3 className="text-sm font-bold text-[#3b82f6] uppercase tracking-wide mb-2">Outcome</h3>
                  <p className="text-black font-medium">
                    Hochwertiger, markenkonformer Content, der Aufmerksamkeit erzeugt und auf jede Plattform abgestimmt ist.
                  </p>
                </div>

                {/* Problem */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</h3>
                  <p className="text-gray-700">
                    Viele Unternehmen haben keine internen Kapazitäten für professionelle Content-Produktion. Ergebnis: inkonsistente Qualität, fehlende Markenwirkung und verpasste Chancen.
                  </p>
                </div>

                {/* Lösung */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Lösung</h3>
                  <p className="text-gray-700">
                    Mit spezialisierten Produktionspartnern liefern wir Video, Foto, Motion und Creative Assets – konzipiert, produziert und optimiert für maximale Wirkung.
                  </p>
                </div>

                {/* Deliverables */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {["Video- & Foto-Produktion", "Animationen & Motion Graphics", "Creative Asset Paket (Reels, Ads, Web Assets)", "Content-Strategie & Konzeption"].map((item, idx) => <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
                        <span className="text-gray-700">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </motion.div>

              {/* Right Visual Framework */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <Palette className="w-10 h-10" />
                    <span className="text-sm font-bold uppercase tracking-wide opacity-80">Visual Framework</span>
                  </div>
                  <p className="text-xl font-bold mb-8">
                    „Kreative Assets, die Marken sichtbar und unvergesslich machen."
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wide opacity-80">Top Deliverables</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
                        <span>Kampagnen-Video</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
                        <span>Motion Graphics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</span>
                        <span>Ad-Creative Set</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <span className="text-sm opacity-80">Beispiel-Output:</span>
                    <p className="font-medium">Kampagnen-Video oder Set aus 6 Ad-Creatives</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Social Media */}
        <section className="py-16 sm:py-24" style={{
        background: 'linear-gradient(to bottom right, white, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.08))'
      }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Visual Framework */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="lg:sticky lg:top-24 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <MessageCircle className="w-10 h-10" />
                    <span className="text-sm font-bold uppercase tracking-wide opacity-80">Visual Framework</span>
                  </div>
                  <p className="text-xl font-bold mb-8">
                    „Eine Social-Präsenz, die wächst, bindet und Marken nahbar macht."
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wide opacity-80">Top Deliverables</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
                        <span>Redaktionsplan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
                        <span>Community Betreuung</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</span>
                        <span>Performance Dashboard</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <span className="text-sm opacity-80">Beispiel-Output:</span>
                    <p className="font-medium">30-Tage Postingplan + Community Report</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">Social Media</h2>
                </div>

                <p className="text-lg text-gray-600">
                  Community, Sichtbarkeit & Markenbindung
                </p>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-[#06b6d4]/10 to-[#3b82f6]/10 p-6 rounded-xl border border-[#06b6d4]/20">
                  <h3 className="text-sm font-bold text-[#06b6d4] uppercase tracking-wide mb-2">Outcome</h3>
                  <p className="text-black font-medium">
                    Ein Social-System, das kontinuierlich Reichweite, Vertrauen und Interaktion schafft. Struktur, Planung und konsistente Markenführung — ohne internen Overhead.
                  </p>
                </div>

                {/* Problem */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</h3>
                  <p className="text-gray-700 mb-3">
                    Unternehmen fehlt die Zeit und das Know-how, um Social professionell zu betreuen:
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• keine klare Redaktionslogik</li>
                    <li>• unregelmäßige Posts</li>
                    <li>• keine Analyse</li>
                    <li>• keine Community-Bindung</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium">→ Ergebnis: Stagnation statt Wachstum.</p>
                </div>

                {/* Lösung */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Lösung</h3>
                  <p className="text-gray-700">
                    Gemeinsam mit Social & Influencer Partnern übernehmen wir die komplette Social-Präsenz — von Inhalt bis Community. Planbar, datenbasiert und auf Wachstum ausgelegt.
                  </p>
                </div>

                {/* Deliverables */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {["Community Management", "Content-Planung & Publishing", "KPI-Analyse & monatliches Reporting", "Creator & Influencer Kooperationen"].map((item, idx) => <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]" />
                        <span className="text-gray-700">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Launch & Performance */}
        <section className="py-16 sm:py-24" style={{
        background: 'linear-gradient(to bottom right, white, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08))'
      }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">Launch & Performance</h2>
                </div>

                <p className="text-lg text-gray-600">
                  Wachstum & messbare Ergebnisse
                </p>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 p-6 rounded-xl border border-[#3b82f6]/20">
                  <h3 className="text-sm font-bold text-[#3b82f6] uppercase tracking-wide mb-2">Outcome</h3>
                  <p className="text-black font-medium">
                    Kampagnen, die Reichweite in Leads und Umsatz verwandeln. Datengetriebene Performance für Produkteinführungen, Ads und Funnel-Optimierung.
                  </p>
                </div>

                {/* Problem */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</h3>
                  <p className="text-gray-700 mb-3">
                    Viele Launches scheitern, weil sie:
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• ohne klare Strategie starten</li>
                    <li>• kreative Assets fehlen</li>
                    <li>• Ads nicht optimiert werden</li>
                    <li>• KPIs nicht sauber gemessen werden</li>
                  </ul>
                </div>

                {/* Lösung */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Lösung</h3>
                  <p className="text-gray-700">
                    Performance-Partner + Creative-Power: Wir verbinden starke Werbemittel mit datengetriebener Optimierung und testen systematisch, bis Ergebnisse skalieren.
                  </p>
                </div>

                {/* Deliverables */}
                <div className="bg-white/80 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {["Launch-Strategien", "Paid Advertising (Meta, TikTok, Google)", "Conversion-Optimierung", "A/B-Testing & Analytics"].map((item, idx) => <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
                        <span className="text-gray-700">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </motion.div>

              {/* Right Visual Framework */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <BarChart3 className="w-10 h-10" />
                    <span className="text-sm font-bold uppercase tracking-wide opacity-80">Visual Framework</span>
                  </div>
                  <p className="text-xl font-bold mb-8">
                    „Kampagnen, die skalierbare Ergebnisse liefern und Wachstum freisetzen."
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wide opacity-80">Top Deliverables</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
                        <span>Kampagnenstruktur</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
                        <span>Ad-Creative Paket</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</span>
                        <span>Performance Dashboard</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <span className="text-sm opacity-80">Beispiel-Output:</span>
                    <p className="font-medium">Ads + Launch-Roadmap (6 Wochen)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Presentation Flow Section */}
        

        {/* Media Cases Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex items-center justify-between mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Media Cases</h2>
              <Link to="/case-studies" className="hidden sm:flex items-center gap-2 text-[#3b82f6] hover:text-[#06b6d4] transition-colors font-medium">
                Alle Cases <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaCases.map((caseStudy, idx) => <motion.div key={caseStudy.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}>
                  <Link to={caseStudy.route} className="group block relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={caseStudy.image} alt={caseStudy.client} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold text-[#06b6d4] uppercase tracking-wide">{caseStudy.category}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{caseStudy.client}</h3>
                      <p className="text-white/80 text-sm mt-1">{caseStudy.headline}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-5xl text-white/30 font-bold">+</span>
                    </div>
                  </Link>
                </motion.div>)}
            </div>

            <Link to="/case-studies" className="sm:hidden flex items-center justify-center gap-2 text-[#3b82f6] hover:text-[#06b6d4] transition-colors font-medium mt-8">
              Alle Cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Bereit, Ihre Media-Power zu skalieren?
              </h2>
              <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
                Wir entwickeln Content, Social-Systeme und Kampagnen, die Marken aus dem Mittelstand sichtbar machen und Wachstum messbar steigern.
              </p>
              <Button id="projekt-besprechen-btn" size="lg" className="bg-white hover:bg-gray-50 text-[#3b82f6] text-lg px-10 py-4 hover:scale-[1.02] transition-all duration-200" onClick={() => setIsModalOpen(true)}>
                Projekt starten
              </Button>
            </motion.div>
          </div>
        </section>

        <Suspense fallback={<div className="h-64" />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#3b82f6" gradientFrom="#3b82f6" gradientTo="#06b6d4" theme="media" />
    </>;
};
export default Media;