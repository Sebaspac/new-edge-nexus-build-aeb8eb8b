import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Phone, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
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
        <title>NEW EDGE Produkte - KI-Agenten für Ihr Business</title>
        <meta name="description" content="Entdecken Sie unsere KI-Agenten: Riley (Wissensagent), Liam (Lead-Gen), Vera (Voice-Agent), Cora (Content-Agent) und Agent Hub mit 8+ spezialisierten KI-Agenten." />
        <meta name="keywords" content="KI Agenten, Riley, Liam, Vera, Cora, Agent Hub, RAG, Lead Generation, Voice AI, Content AI" />
        <link rel="canonical" href="https://new-edge.de/products" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full" style={{ marginTop: '80px' }}>
          <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
            {/* 16:9 Aspect Ratio Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              {/* Optional: Add background image here */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Text Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  UNSERE<br />
                  KI-AGENTEN<br />
                  <span className="italic font-black">Für Ihr Business</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                  Von Wissensmanagement über Lead-Generierung bis hin zu Voice-AI und Content-Erstellung – 
                  unsere spezialisierten KI-Agenten automatisieren Ihre Prozesse und steigern Ihre Effizienz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Riley - Wissensagent */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9F91F8, #4F97F0)' }}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Riley – Ihr Wissensagent</h2>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black mt-8">Was macht Riley?</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Riley nutzt Retrieval‑Augmented Generation (RAG), um präzise, kontextbezogene Antworten aus Ihrer firmeneigenen Wissensbasis zu liefern. Er durchsucht Dokumente, Handbücher und FAQs, extrahiert relevante Informationen und formuliert daraus verständliche Antworten. Der Einsatz von RAG verringert Halluzinationen und schafft mehr Vertrauen in die Ergebnisse.
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">So funktioniert Riley</h3>
                <ol className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-decimal list-inside">
                  <li><strong>Daten sammeln & organisieren:</strong> Alle wichtigen Dokumente, FAQs und Anleitungen werden in einer zentralen Wissensbasis gespeichert.</li>
                  <li><strong>Recherche & Analyse:</strong> Riley identifiziert die relevanten Abschnitte und bringt sie in den richtigen Kontext.</li>
                  <li><strong>Generieren & Antworten:</strong> Das Sprachmodell erstellt daraus eine verständliche, hochwertige Antwort.</li>
                  <li><strong>Lernen & verbessern:</strong> Nutzerfeedback fließt in die Optimierung ein; so werden Antworten stetig präziser.</li>
                </ol>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Ihre Vorteile mit Riley</h3>
                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Verlässliche und aktuelle Informationen anstelle von Halluzinationen</li>
                  <li>Schneller Zugriff auf verborgenes Wissen und weniger Suchaufwand</li>
                  <li>Maßgeschneiderte Antworten für Ihr Team und Ihre Kunden</li>
                  <li>Integration in bestehende Systeme wie Chat- oder CRM‑Tools</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Riley in der Praxis</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Ein neuer Mitarbeiter stellt im internen Chat Fragen zum Onboarding. Riley greift auf Handbücher und FAQs zu, liefert sofort die korrekte Antwort und verkürzt so die Einarbeitungszeit.
                </p>

                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Jetzt mit Riley starten
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-32 h-32 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liam - Lead-Gen-Agent */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4F97F0, #9F91F8)' }}>
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Liam – Ihr Lead‑Gen‑Agent</h2>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black mt-8">Was macht Liam?</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Liam automatisiert Ihre Lead‑Generierung. Er kombiniert Chatbots, Segmentierung, Predictive Lead Scoring und automatisierte E‑Mail‑Kampagnen. Dadurch identifiziert und pflegt er wertvolle Kontakte, während Ihr Vertrieb sich auf Abschlüsse konzentriert. KI‑gestützte Lead‑Generierung steigert Effizienz, verbessert die Lead‑Qualität und ermöglicht hyperpersonalisierte Ansprache.
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">So funktioniert Liam</h3>
                <ol className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-decimal list-inside">
                  <li><strong>Erkennen & Segmentieren:</strong> Liam analysiert Website‑Besucher und teilt sie in Zielgruppen ein.</li>
                  <li><strong>Interagieren & Qualifizieren:</strong> Ein Chatbot begrüßt Interessenten, beantwortet Fragen und erfasst Kontaktdaten samt Lead‑Score.</li>
                  <li><strong>Nurturing & Personalisierung:</strong> Automatisierte E‑Mails und Nachrichten liefern passende Inhalte und pflegen den Kontakt.</li>
                  <li><strong>Übergabe an den Vertrieb:</strong> Heiß qualifizierte Leads werden mit Scoring und Empfehlungen an Ihr Team übergeben.</li>
                </ol>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Ihre Vorteile mit Liam</h3>
                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Effizienz und Skalierbarkeit – Liam arbeitet 24/7 und verpasst keinen Besucher</li>
                  <li>Präzises Lead‑Scoring und gezielte Segmentierung für höhere Abschlussraten</li>
                  <li>Hyperpersonalisierte Ansprache und bessere Kundenbeziehungen</li>
                  <li>Automatische Lead‑Pflege reduziert Ihren manuellen Aufwand</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Liam in der Praxis</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Ein E‑Commerce‑Shop integriert Liam in sein Kontaktformular. Der Chatbot beantwortet Produktfragen, erfasst Kontaktdaten und bewertet die Kaufbereitschaft. Täglich erhält das Vertriebsteam eine Liste neuer, qualifizierter Leads inklusive Kaufwahrscheinlichkeit.
                </p>

                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Mehr qualifizierte Leads – Liam jetzt testen
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-32 h-32 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vera - Voice-Agent */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Vera – Ihr Voice‑Agent</h2>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black mt-8">Was macht Vera?</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Vera ist Ihre smarte Telefon‑Assistentin. Sie nimmt Anrufe rund um die Uhr entgegen, automatisiert Routinegespräche, beantwortet Fragen und leitet komplexe Anliegen an Ihr Team weiter. Voice‑AI‑Lösungen können hohe Anrufvolumina bewältigen, Wartezeiten verkürzen und 24/7‑Service ermöglichen.
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">So funktioniert Vera</h3>
                <ol className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-decimal list-inside">
                  <li><strong>Anruf entgegennehmen:</strong> Vera nimmt jeden Anruf automatisch an und begrüßt den Kunden.</li>
                  <li><strong>Anliegen verstehen:</strong> Dank natürlicher Spracherkennung erfasst sie Absicht und Kontext des Gesprächs.</li>
                  <li><strong>Automatisierte Antworten & Aktionen:</strong> Sie beantwortet Fragen, führt Bestellungen aus und erfasst Feedback.</li>
                  <li><strong>Weiterleiten & Protokollieren:</strong> Komplexere Fälle übergibt sie samt Gesprächsnotizen an Ihre Mitarbeitenden – jederzeit.</li>
                </ol>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Ihre Vorteile mit Vera</h3>
                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Rund‑um‑die‑Uhr‑Erreichbarkeit, ohne zusätzliches Personal</li>
                  <li>Kürzere Wartezeiten und mehr Kundenzufriedenheit</li>
                  <li>Entlastung Ihres Service‑Teams durch automatische Abwicklung von Routineanfragen</li>
                  <li>Natürliche, personalisierte Gespräche für ein positives Kundenerlebnis</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Vera in der Praxis</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Ein Service‑Center setzt Vera ein, damit Kunden jederzeit Bestellungen aufgeben oder Termine verschieben können. Standardfragen beantwortet die KI sofort, während Mitarbeitende sich auf individuelle Beratung konzentrieren.
                </p>

                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Vera live erleben – jetzt Termin buchen
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-32 h-32 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cora - Content-Agent */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Cora – Ihr Content‑Agent</h2>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black mt-8">Was macht Cora?</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Cora erstellt und optimiert Inhalte für Blogs, Social Media und E‑Mail‑Newsletter. AI‑Content‑Agenten sparen Zeit, verbessern die Qualität und sorgen für konsistente Texte. Cora analysiert Keyword‑Trends, generiert SEO‑optimierte Texte und passt Inhalte an Ihre Zielgruppen an.
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">So funktioniert Cora</h3>
                <ol className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-decimal list-inside">
                  <li><strong>Themen & Keywords recherchieren:</strong> Cora analysiert Branchentrends und Keywords für Ihre Zielgruppe.</li>
                  <li><strong>Inhalte generieren:</strong> Die KI erstellt Blogposts, Social‑Media‑Beiträge und Newsletter‑Entwürfe.</li>
                  <li><strong>Optimieren & Personalisieren:</strong> Grammatik und Stil werden verbessert; Texte werden für verschiedene Zielgruppen angepasst.</li>
                  <li><strong>Veröffentlichen & Lernen:</strong> Veröffentlichungen werden geplant; Engagement‑Daten fließen zurück in die Optimierung.</li>
                </ol>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Ihre Vorteile mit Cora</h3>
                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Zeitersparnis durch automatisierte Content‑Erstellung</li>
                  <li>Konsistente Qualität und Tonalität in allen Kanälen</li>
                  <li>Bessere SEO‑Performance und höhere Sichtbarkeit</li>
                  <li>Personalisierte Inhalte für unterschiedliche Zielgruppen</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Cora in der Praxis</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Eine Marketing‑Abteilung nutzt Cora, um wöchentlich Blogartikel und Social‑Media‑Posts zu erstellen. Die KI passt jeden Beitrag an die jeweilige Plattform an, verbessert die Sichtbarkeit und steigert das Engagement – was wiederum zu mehr Leads führt.
                </p>

                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Entdecken Sie, wie Cora Ihr Content‑Marketing transformiert
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-32 h-32 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Hub */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9F91F8, #4F97F0)' }}>
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Agent Hub – Ihre Komplettlösung</h2>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black mt-8">Was ist der Agent Hub?</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Der Agent Hub ist Ihre zentrale Plattform mit 8+ spezialisierten KI-Agenten für Copywriting, HR, Marketing, Strategie und mehr. Mit einem einmaligen Zugang erhalten Sie lebenslangen Zugriff auf alle Agenten – ohne monatliche Abonnementkosten.
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">So funktioniert der Agent Hub</h3>
                <ol className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-decimal list-inside">
                  <li><strong>Einmalige Registrierung:</strong> Erstellen Sie Ihren Account und erhalten Sie sofortigen Zugang zu allen verfügbaren Agenten.</li>
                  <li><strong>Agent auswählen:</strong> Wählen Sie aus über 8 spezialisierten Agenten den passenden für Ihre aktuelle Aufgabe.</li>
                  <li><strong>Aufgabe definieren:</strong> Beschreiben Sie Ihr Anliegen – der Agent analysiert und verarbeitet Ihre Anfrage.</li>
                  <li><strong>Ergebnisse nutzen:</strong> Erhalten Sie hochwertige Outputs, die Sie direkt einsetzen können.</li>
                </ol>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Ihre Vorteile mit dem Agent Hub</h3>
                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Keine monatlichen Kosten – einmalige Zahlung für lebenslangen Zugang</li>
                  <li>8+ spezialisierte Agenten für alle Unternehmensbereiche</li>
                  <li>Sofort einsatzbereit ohne komplexe Einrichtung</li>
                  <li>Regelmäßige Updates und neue Agenten inklusive</li>
                  <li>80% Rabatt für kurze Zeit</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">Agent Hub in der Praxis</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Ein Startup nutzt den Agent Hub für seine gesamte Content-Produktion: Cody erstellt Werbetexte, Dimarko plant Social-Media-Kampagnen und Inti unterstützt bei der Mitarbeitersuche. Alle Bereiche werden mit einem Tool abgedeckt – effizient und kostenoptimiert.
                </p>

                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={() => window.open('https://agenthub.newedgebrand.com', '_blank')}
                >
                  Loslegen
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9F91F820' }}>
                            <FileText className="w-4 h-4" style={{ color: '#9F91F8' }} />
                          </div>
                          <span className="text-sm font-medium">Cody</span>
                        </div>
                        <p className="text-xs text-gray-600">Copywriting</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4F97F020' }}>
                            <Bot className="w-4 h-4" style={{ color: '#4F97F0' }} />
                          </div>
                          <span className="text-sm font-medium">Inti</span>
                        </div>
                        <p className="text-xs text-gray-600">HR & Recruiting</p>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFED0020' }}>
                            <Lightbulb className="w-4 h-4" style={{ color: '#FFED00' }} />
                          </div>
                          <span className="text-sm font-medium">Dimarko</span>
                        </div>
                        <p className="text-xs text-gray-600">Digital Marketing</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9F91F820' }}>
                            <Bot className="w-4 h-4" style={{ color: '#9F91F8' }} />
                          </div>
                          <span className="text-sm font-medium">+9 weitere</span>
                        </div>
                        <p className="text-xs text-gray-600">Alle Bereiche</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
                Bereit für KI-gestützte Innovation?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700">
                Entdecken Sie, wie unsere KI-Agenten Ihr Business revolutionieren können.
              </p>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-12 py-4 rounded-full font-medium transition-all duration-300"
                onClick={scrollToContact}
              >
                KONTAKT AUFNEHMEN
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
