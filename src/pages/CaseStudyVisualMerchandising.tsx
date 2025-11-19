import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Eye,
  Camera,
  Sparkles,
  Palette,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Brain,
  Image as ImageIcon,
  Layout,
  Monitor,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
};

const CaseStudyVisualMerchandising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToContact = () => {
    navigate("/", {
      replace: true,
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const phases = [
    {
      number: "PHASE 1",
      title: "[PLACEHOLDER: Phase 1 Titel]",
      description: "[PLACEHOLDER: Phase 1 Beschreibung - 2-3 Sätze über die erste Phase des Projekts]",
      features: [
        {
          icon: Target,
          title: "[PLACEHOLDER: Feature 1 Titel]",
          description: "[PLACEHOLDER: Feature 1 Beschreibung]",
        },
        {
          icon: BarChart3,
          title: "[PLACEHOLDER: Feature 2 Titel]",
          description: "[PLACEHOLDER: Feature 2 Beschreibung]",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "[PLACEHOLDER: Phase 2 Titel]",
      description: "[PLACEHOLDER: Phase 2 Beschreibung - 2-3 Sätze über die zweite Phase des Projekts]",
      features: [
        {
          icon: Brain,
          title: "[PLACEHOLDER: Feature 1 Titel]",
          description: "[PLACEHOLDER: Feature 1 Beschreibung]",
        },
        {
          icon: Camera,
          title: "[PLACEHOLDER: Feature 2 Titel]",
          description: "[PLACEHOLDER: Feature 2 Beschreibung]",
        },
        {
          icon: Palette,
          title: "[PLACEHOLDER: Feature 3 Titel]",
          description: "[PLACEHOLDER: Feature 3 Beschreibung]",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "[PLACEHOLDER: Phase 3 Titel]",
      description: "[PLACEHOLDER: Phase 3 Beschreibung - 2-3 Sätze über die dritte Phase des Projekts]",
      features: [
        {
          icon: Layout,
          title: "[PLACEHOLDER: Feature 1 Titel]",
          description: "[PLACEHOLDER: Feature 1 Beschreibung]",
        },
        {
          icon: Monitor,
          title: "[PLACEHOLDER: Feature 2 Titel]",
          description: "[PLACEHOLDER: Feature 2 Beschreibung]",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "[PLACEHOLDER: Metrik 1]",
      description: "[PLACEHOLDER: Beschreibung]",
    },
    {
      metric: "[PLACEHOLDER: Metrik 2]",
      description: "[PLACEHOLDER: Beschreibung]",
    },
    {
      metric: "[PLACEHOLDER: Metrik 3]",
      description: "[PLACEHOLDER: Beschreibung]",
    },
    {
      metric: "[PLACEHOLDER: Metrik 4]",
      description: "[PLACEHOLDER: Beschreibung]",
    },
  ];

  const services = [
    "[PLACEHOLDER: Service 1]",
    "[PLACEHOLDER: Service 2]",
    "[PLACEHOLDER: Service 3]",
    "[PLACEHOLDER: Service 4]",
    "[PLACEHOLDER: Service 5]",
    "[PLACEHOLDER: Service 6]",
  ];

  const orbitalTimelineData = [
    {
      id: "milestone-1",
      title: "[PLACEHOLDER: Meilenstein 1]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "planning",
      icon: Target,
      status: "completed",
      energy: 90,
    },
    {
      id: "milestone-2",
      title: "[PLACEHOLDER: Meilenstein 2]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "analysis",
      icon: BarChart3,
      relatedIds: ["milestone-1"],
      status: "completed",
      energy: 85,
    },
    {
      id: "milestone-3",
      title: "[PLACEHOLDER: Meilenstein 3]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "design",
      icon: Camera,
      relatedIds: ["milestone-2"],
      status: "completed",
      energy: 95,
    },
    {
      id: "milestone-4",
      title: "[PLACEHOLDER: Meilenstein 4]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "development",
      icon: ImageIcon,
      relatedIds: ["milestone-3"],
      status: "completed",
      energy: 88,
    },
    {
      id: "milestone-5",
      title: "[PLACEHOLDER: Meilenstein 5]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "testing",
      icon: Eye,
      relatedIds: ["milestone-4"],
      status: "completed",
      energy: 92,
    },
    {
      id: "milestone-6",
      title: "[PLACEHOLDER: Meilenstein 6]",
      date: "[PLACEHOLDER: Datum]",
      content: "[PLACEHOLDER: Beschreibung des Meilensteins]",
      category: "launch",
      icon: Sparkles,
      relatedIds: ["milestone-5"],
      status: "active",
      energy: 100,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Visual Merchandising AI Case Study | New Edge</title>
        <meta
          name="description"
          content="[PLACEHOLDER: Meta-Beschreibung für SEO - max 160 Zeichen]"
        />
      </Helmet>

      <MobileNavigation onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Fashion & Retail</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Visual Merchandising AI
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                [PLACEHOLDER: Untertitel/Tagline - 1-2 Sätze die das Projekt beschreiben]
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Branche</div>
                    <div className="font-semibold">Fashion & Retail</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Services</div>
                    <div className="font-semibold">Lab + Media</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-semibold">[PLACEHOLDER: Timeline]</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Projekt Übersicht
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    [PLACEHOLDER: Projekt-Beschreibung Absatz 1 - Beschreibe das Projekt und den Kunden]
                  </p>
                  <p className="text-lg text-muted-foreground">
                    [PLACEHOLDER: Projekt-Beschreibung Absatz 2 - Erweitere die Projektbeschreibung]
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Eye className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "[PLACEHOLDER: Fact 1 Label]", value: "[PLACEHOLDER: Wert]" },
                  { label: "[PLACEHOLDER: Fact 2 Label]", value: "[PLACEHOLDER: Wert]" },
                  { label: "[PLACEHOLDER: Fact 3 Label]", value: "[PLACEHOLDER: Wert]" },
                  { label: "[PLACEHOLDER: Fact 4 Label]", value: "[PLACEHOLDER: Wert]" },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Die Herausforderung</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  [PLACEHOLDER: Herausforderung Absatz 1 - Beschreibe die Hauptprobleme und Herausforderungen]
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  [PLACEHOLDER: Herausforderung Absatz 2 - Gehe tiefer auf spezifische Probleme ein]
                </p>
                <p className="text-lg text-muted-foreground">
                  [PLACEHOLDER: Herausforderung Absatz 3 - Erkläre die Ziele und gewünschten Ergebnisse]
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">[PLACEHOLDER: Problem 1]</h3>
                  <p className="text-sm text-muted-foreground">[PLACEHOLDER: Beschreibung]</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Camera className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">[PLACEHOLDER: Problem 2]</h3>
                  <p className="text-sm text-muted-foreground">[PLACEHOLDER: Beschreibung]</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Eye className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">[PLACEHOLDER: Problem 3]</h3>
                  <p className="text-sm text-muted-foreground">[PLACEHOLDER: Beschreibung]</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Orbital Timeline */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Projekt Timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                [PLACEHOLDER: Timeline Intro - 1-2 Sätze über den Projektverlauf]
              </p>
            </div>
            <RadialOrbitalTimeline data={orbitalTimelineData} />
          </AnimatedSection>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Projekt Phasen</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                [PLACEHOLDER: Phasen Intro - 1-2 Sätze über den Projektablauf]
              </p>
            </div>

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                      <div className="sticky top-24">
                        <div className="text-sm font-semibold text-primary mb-4">
                          {phase.number}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                          {phase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                      <div className="space-y-6">
                        {phase.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                          >
                            <feature.icon className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ergebnisse & Impact</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  [PLACEHOLDER: Results Intro - 1-2 Sätze über die erreichten Ergebnisse]
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                      {result.metric}
                    </div>
                    <div className="text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Eingesetzte Services</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center"
                  >
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Section (Optional) */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-12 rounded-2xl bg-card border border-border">
                <div className="text-6xl text-primary mb-6">"</div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-8">
                  [PLACEHOLDER: Kundenzitat - Ein aussagekräftiges Zitat über die Zusammenarbeit und Ergebnisse]
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">[PLACEHOLDER: Name]</div>
                    <div className="text-sm text-muted-foreground">
                      [PLACEHOLDER: Position, Firma]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihr eigenes Projekt?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lassen Sie uns gemeinsam Ihre Vision verwirklichen
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
              >
                Jetzt Beratungsgespräch buchen
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyVisualMerchandising;