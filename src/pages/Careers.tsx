import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import careersHeroImage from "@/assets/careers-hero.webp";
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
      <SEOHead
        title="Karriere – Arbeiten bei New Edge Brand München"
        description="Du willst an der Schnittstelle von Marke, Digital und KI arbeiten? New Edge Brand sucht Gestalter, Entwickler und KI-Strategen für München."
        canonical="/careers"
      />

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[100dvh]">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={careersHeroImage} 
              alt="NEW EDGE Office - Werksviertel München" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(17, 24, 39, 0.7), rgba(31, 41, 55, 0.3), transparent)'
            }} />
            
            {/* Copyright notice */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
              <span className="text-[10px] sm:text-xs text-white/50">© URKERN, Ivana Bilz</span>
            </div>
            
            <div className="absolute bottom-20 left-0 p-4 pb-6 sm:p-12 sm:pb-12 lg:p-16 max-w-full sm:max-w-4xl">
              <div className="inline-block mb-2 sm:mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">Join Our Team</span>
              </div>
              <h1 className="text-3xl sm:text-h1 lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 lg:mb-6 leading-tight text-white">
                Karriere bei New Edge
              </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Werden Sie Teil unseres innovativen Teams und gestalten Sie die Zukunft der 
                KI-gestützten digitalen Transformation. Bei uns arbeiten Sie an spannenden 
                Projekten mit modernsten Technologien.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 text-center text-black">
              Warum NEW EDGE?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[{
              title: "Innovation First",
              description: "Arbeiten Sie mit cutting-edge KI-Technologien und gestalten Sie die Zukunft aktiv mit."
            }, {
              title: "Work-Life Balance",
              description: "Flexible Arbeitszeiten, Remote-Möglichkeiten und 30 Tage Urlaub für Ihre Erholung."
            }, {
              title: "Weiterentwicklung",
              description: "Kontinuierliche Weiterbildung, Konferenz-Besuche und persönliches Entwicklungsbudget."
            }].map((value, index) => <div key={index} className="bg-white p-5 sm:p-8 rounded-none shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>
        {/* Über uns */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-black">
                Über uns
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                New Edge ist eine Creative-Tech-Agentur an der Schnittstelle von Kreation und Technologie. Wir verbinden Marke, Strategie und Technologie in zwei integrierten Units – Studio (Marke, Strategie & KI-Beratung) und Lab (Website, Automation & Ownership) – mit klaren Prozessen und messbaren Ergebnissen.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-center text-black">
              Offene Positionen
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">Bei Interesse sende uns eine E-Mail mit deiner aussagekräftigen Bewerbung (Lebenslauf + kurzes Anschreiben) an info@newedgebrand.com - alternativ gern über den Button.</p>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-none shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Praktikum Marketing & Projektmanagement (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 Vollzeit, 3–6 Monate</span>
                          <span>🚀 Start jederzeit</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Content & SEO: Keyword-Recherche, Redaktionsplanung, Wettbewerbs-/Benchmark-Analysen, Auswertung von Statistiken & Echtzeit-Daten</li>
                        <li>Social Media: Planung & Vorbereitung von LinkedIn-/Instagram-Posts, Community-Management, einfache Reportings</li>
                        <li>Projektmanagement: Mitarbeit in Kick-offs & Workshops, Koordination von Timings/Assets über Studio & Lab hinweg, Quality Assurance (QA)</li>
                        <li>KPI-Tracking: Monitoring von Traffic, Leads, Conversion-Rates & Social Engagement; Monats-Reports (z. B. Google Analytics/Looker)</li>
                        <li>KI-Beratung & Audit-Support: Unterstützung bei KI-Readiness-Checks, Recherche zu Automatisierungs- und KI-Tools</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Eingeschriebene:r Student:in in Marketing, Medien, WiWi o. ä.; idealerweise Pflichtpraktikum möglich</li>
                        <li>Erste Erfahrung im Marketing/PM von Vorteil, aber kein Muss</li>
                        <li>Ausgeprägtes Interesse an Branding, KI-Tools & digitaler Strategie; strukturierte & zuverlässige Arbeitsweise</li>
                        <li>Sehr gute Deutsch- und Englischkenntnisse; Teamspirit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Onboarding & Mentoring: strukturiertes digitales Onboarding, persönliches Mentoring</li>
                        <li>Weiterbildung: interne Sessions, Sprachkurse, regelmäßige Coachings</li>
                        <li>Flexibilität: Remote-first, flexible Arbeitszeiten; Büro im Münchner Kreativviertel nach Absprache</li>
                        <li>Team-Spirit: After-Work-Formate & Team-Events; sportliche Angebote (z. B. Bike-Leasing) nach Verfügbarkeit</li>
                        <li>Einblick in beide Units: Mitarbeit an Projekten aus Studio (Marke & Strategie) und Lab (Web & Automation)</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Marketing & Projektmanagement" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent backdrop-blur-md text-black border-2 border-black font-semibold rounded-none hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-none shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Vertrieb & Business Development (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 Vollzeit (unbefristet) oder Freelance</span>
                          <span>🚀 Start asap</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Mission</h4>
                      <p className="text-xs sm:text-sm">Gewinne mit uns neue Kunden im DACH-Raum und baue langfristige Geschäftsbeziehungen auf – an der Schnittstelle von Kreation, Technologie und KI.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Neukundenakquise & Outreach: Identifikation und Ansprache potenzieller Kunden (B2B) über LinkedIn, E-Mail, Telefon und Events</li>
                        <li>Beratung & Bedarfsanalyse: Erstgespräche führen, Anforderungen verstehen, passgenaue Lösungen aus Studio, Media & Lab positionieren</li>
                        <li>Angebotserstellung & Pitches: Erstellung von Angeboten, Präsentationen und Pitch-Decks in enger Abstimmung mit dem Team</li>
                        <li>Pipeline-Management: Pflege und Steuerung der Sales-Pipeline im CRM; Forecasting & Reporting</li>
                        <li>Partnerschaften & Netzwerk: Aufbau strategischer Partnerschaften; Teilnahme an Branchen-Events und Meetups</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>≥2 Jahre Erfahrung im B2B-Vertrieb, idealerweise im Agentur-, SaaS- oder Tech-Umfeld</li>
                        <li>Starke Kommunikations- und Verhandlungsfähigkeiten; sicheres Auftreten in Kundengesprächen</li>
                        <li>Verständnis für digitale Produkte, Branding und/oder KI-Lösungen – kein tiefes Tech-Wissen nötig, aber Interesse an Innovation</li>
                        <li>Eigeninitiative, Abschlussstärke und CRM-Erfahrung (z. B. HubSpot, Pipedrive)</li>
                        <li>Sehr gutes Deutsch (C2) und gutes Englisch; DACH-Netzwerk von Vorteil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Remote-first & Flex-Time: flexible Arbeitszeiten, remote/hybrid möglich</li>
                        <li>Attraktive Vergütung: Fixum + leistungsbasierte Provision; faire Konditionen für Freelancer</li>
                        <li>Modernes Umfeld: innovatives Produkt-Portfolio, kurze Entscheidungswege, direkter Draht zur Geschäftsführung</li>
                        <li>Weiterbildung: Sales-Trainings, KI-Updates und Zugang zu modernen Tools & Stacks</li>
                        <li>Wachstumspotenzial: Mitgestaltung der Vertriebsstrategie in einer wachsenden Agentur</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Vertrieb & Business Development" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent backdrop-blur-md text-black border-2 border-black font-semibold rounded-none hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-none shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Praktikum Vertrieb & Business Development (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 Vollzeit, 3–6 Monate</span>
                          <span>🚀 Start jederzeit</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Über uns</h4>
                      <p className="text-xs sm:text-sm">New Edge ist eine Creative-Tech-Agentur mit zwei Units – Studio (Marke, Strategie & KI-Beratung) und Lab (Website, Automation & Ownership). Du unterstützt unser Vertriebsteam dabei, neue Kunden zu gewinnen und bestehende Beziehungen zu pflegen.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Lead-Recherche & Prospecting: Identifikation potenzieller B2B-Kunden, Recherche zu Branchen, Unternehmen und Ansprechpartnern</li>
                        <li>Outreach-Unterstützung: Vorbereitung von E-Mail-Sequenzen, LinkedIn-Nachrichten und Gesprächsleitfäden</li>
                        <li>CRM-Pflege: Kontaktdaten anlegen, Pipeline-Updates, einfache Reportings und Auswertungen</li>
                        <li>Pitch-Vorbereitung: Mitarbeit an Präsentationen, Angeboten und Case-Study-Aufbereitungen für Studio & Lab</li>
                        <li>Markt- & Wettbewerbsanalysen: Trends im Agentur-/KI-Markt beobachten, Insights aufbereiten</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Eingeschriebene:r Student:in in BWL, Marketing, Kommunikation o. ä.; idealerweise Pflichtpraktikum möglich</li>
                        <li>Interesse an Vertrieb, Kundenbeziehungen und digitalen Geschäftsmodellen</li>
                        <li>Kommunikationsstärke, Eigeninitiative und strukturierte Arbeitsweise</li>
                        <li>Sehr gutes Deutsch (C1+) und gutes Englisch; erste CRM-Erfahrung (z. B. HubSpot) von Vorteil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Onboarding & Mentoring: strukturiertes Onboarding, persönliche Betreuung durch erfahrene Vertriebler:innen</li>
                        <li>Praxisnahe Einblicke: echte Kundenprojekte, Sales-Calls und Pitch-Situationen von Anfang an</li>
                        <li>Flexibilität: Remote-first, flexible Arbeitszeiten; Büro in München nach Absprache</li>
                        <li>Team-Spirit: After-Work-Formate, Team-Events und offene Feedback-Kultur</li>
                        <li>Karriereperspektive: bei guter Leistung Übernahme in eine Festanstellung möglich</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Vertrieb & Business Development" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent backdrop-blur-md text-black border-2 border-black font-semibold rounded-none hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-none shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Werkstudent:in – DevOps & Full-Stack (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 12–20 h/Woche</span>
                          <span>🚀 Start flexibel</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>CI/CD & Containers: Unterstützung beim Aufbau/Pflege von Pipelines; Container-Builds; Dev/Test-Environments</li>
                        <li>Full-Stack-Entwicklung: kleinere Features in internen Tools & Kunden-Dashboards (Frontend: Next.js/React; Backend: Node/TypeScript), API-Integrationen</li>
                        <li>Datenbanken & Integrationen: Postgres & Supabase; Arbeit mit REST, SQL, ETL</li>
                        <li>Automationen & Skripte: n8n-Workflows, Supabase-Integrationen, Skripte (TypeScript)</li>
                        <li>QA & Dokumentation: Tests, Doku, saubere Deliverables</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Eingeschriebene:r Student:in (Wirtschafts-)Informatik o. ä.; idealerweise ab dem 3. Semester</li>
                        <li>Erste Programmiererfahrung mit JavaScript/TypeScript; Interesse an Full-Stack & Software-Architektur</li>
                        <li>Gute Git-Kenntnisse; Basiswissen Cloud & Docker; sehr gutes Deutsch (C1); eigenständig & strukturiert; Neugier für KI/Automation</li>
                        <li>Nice-to-have: Prisma, Tailwind, Postgres, Auth/OAuth, Vektor-DBs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Mentoring & Feedback: enge Betreuung durch erfahrene Entwickler:innen, regelmäßige 1:1s</li>
                        <li>Praxisrelevante Projekte: echte Kunden-/Produkt-Use-Cases mit gesellschaftlichem Impact</li>
                        <li>Flexibilität: Remote-Optionen, flexible Arbeitszeiten; studiumskompatibel</li>
                        <li>Team-Spirit: kleines, unterstützendes Team; strukturierte Einarbeitung & klare Roadmaps</li>
                        <li>Lab-Zugang: Einblicke in produktive KI-Stacks & moderne Toolchains</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Werkstudent:in DevOps & Full-Stack" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent backdrop-blur-md text-black border-2 border-black font-semibold rounded-none hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Benefits */}
        

        {/* CTA */}
        <section className="relative py-12 sm:py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900 leading-tight">
              Finden Sie Ihre Traumposition nicht?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Senden Sie uns Ihre Initiativbewerbung! Wir sind immer auf der Suche nach 
              talentierten Menschen, die unser Team bereichern möchten.
            </p>
            <a href="mailto:info@newedgebrand.com?subject=Initiativbewerbung" className="inline-block px-8 py-4 bg-transparent backdrop-blur-md text-black border-2 border-black font-bold rounded-none hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5">
              Initiativbewerbung senden
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default Careers;