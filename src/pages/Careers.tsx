import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import careersHeroImage from "@/assets/careers-hero.png";
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
          <div className="w-full relative h-[60vh] sm:h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={careersHeroImage} 
                alt="NEW EDGE Office - Werk3 München" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(17, 24, 39, 0.7), rgba(31, 41, 55, 0.3), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-4 pb-6 sm:p-12 sm:pb-12 lg:p-16 max-w-full sm:max-w-4xl">
                <div className="inline-block mb-2 sm:mb-4">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">Join Our Team</span>
                </div>
                <h1 className="text-3xl sm:text-h1 lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 lg:mb-6 leading-tight text-white">
NEW EDGE
                <br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #6b7280, #9ca3af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>CAREERS</span>
                </h1>
              </div>
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
            }].map((value, index) => <div key={index} className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>)}
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
                <AccordionItem value="item-1" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8">
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
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Über uns</h4>
                      <p className="text-xs sm:text-sm">New Edge ist eine Creative-Tech-Agentur an der Schnittstelle von Kreation und Technologie. Wir verbinden Branding, Medienproduktion und Automatisierung in einem integrierten Modell (Studio | Media | Lab) – mit klaren Prozessen und messbaren Ergebnissen.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Content & SEO: Keyword-Recherche, Redaktionsplanung, Wettbewerbs-/Benchmark-Analysen, Auswertung von Statistiken & Echtzeit-Daten</li>
                        <li>Social Media: Planung & Vorbereitung von LinkedIn-/Instagram-Posts, Community-Management, einfache Reportings</li>
                        <li>Projektmanagement: Mitarbeit in Kick-offs & Workshops, Koordination von Timings/Assets, Quality Assurance (QA)</li>
                        <li>KPI-Tracking: Monitoring von Traffic, Leads, Conversion-Rates & Social Engagement; Monats-Reports (z. B. Google Analytics/Looker)</li>
                        <li>Webinare & Events: Unterstützung bei Planung/Begleitung, Landing-Pages & Follow-ups im CRM</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Eingeschriebene:r Student:in in Marketing, Medien, WiWi o. ä.; idealerweise Pflichtpraktikum möglich</li>
                        <li>Erste Erfahrung im Marketing/PM von Vorteil, aber kein Muss</li>
                        <li>Ausgeprägtes Interesse an Marketing-Trends & KI-Tools; sehr gute MS-Office-Skills (v. a. PowerPoint); strukturierte & zuverlässige Arbeitsweise</li>
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
                        <li>Internationales Umfeld: Einblick in moderne KI-Marketing-Projekte über alle Units</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Marketing & Projektmanagement" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">DevOps Engineer (m/w/d)</h3>
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
                      <p className="text-xs sm:text-sm">Baue mit uns eine sichere, skalierbare Infrastruktur für unser Lab (Automations, Chatbots, Microservices) und unsere Media-Pipelines.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>CI/CD & Automatisierung: Aufbau & Pflege moderner Pipelines (z. B. GitHub Actions/Jenkins/GitLab CI); Build-/Deploy-Prozesse; Code-Qualität (Reviews, statische Analysen)</li>
                        <li>Cloud & IaC: Planung/Betrieb in AWS/GCP/Azure; Terraform/Pulumi; Kostenkontrolle, Secret-Management, DSGVO-konforme Setups</li>
                        <li>Container & Orchestrierung: Docker, Kubernetes/OpenShift; Cluster-Betrieb; Observability (OpenTelemetry, Prometheus, Grafana)</li>
                        <li>Data/ML & APIs: Setup von Data-/ML-Workflows; API-Gateways (REST/Webhooks); Deployment-Automatisierung & Hardening</li>
                        <li>Incident-Handling & Support: Analyse & Priorisierung von Incidents; Enabling für Dev/Automation-Teams (Low/No-Code, n8n, Supabase, Postgres)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>≥3 Jahre Erfahrung in DevOps/SRE; produktive Cloud-Umgebungen, CI/CD & Container-Orchestrierung</li>
                        <li>Praxis mit Git/GitLab, Build-Tools (z. B. Jenkins, Maven, Sonar) und Bash/Python/Node</li>
                        <li>Erfahrung mit Observability, Secret-Management, Kostenkontrolle & IT-Security; GitOps-Mindset</li>
                        <li>Nice-to-have: Vektor-DBs, LLM-Ops, Supabase, n8n, Queues (SQS/Cloud Tasks), CDN/Edge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Remote-first & Flex-Time: flexible Arbeitszeiten, remote/hybrid möglich</li>
                        <li>Weiterbildung & Zertifizierungen: z. B. AWS, Kubernetes, Atlassian</li>
                        <li>Stabilität & Greenfield: langfristige Projekte plus Greenfield-Setups im Lab</li>
                        <li>Modernes Umfeld: agile Teams, flache Hierarchien, offener Austausch</li>
                        <li>Vergütung: marktüblich & erfahrungsabhängig (Festanstellung) bzw. fairer Tagessatz (Freelance). Richtwert nennen wir im Gespräch</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: DevOps Engineer" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Freelancer-Pool Media & Lab (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote (DACH)</span>
                          <span>💼 Projektbasiert/Freelance</span>
                          <span>🚀 Start laufend</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Gesuchte Profile</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Media: Videograf:in/Editor, Motion/3D-Designer:in, Social-Content-Producer (Short-Form, Performance-Cuts), Audio/Podcast-Producer</li>
                        <li>Lab: Automation Builder/Prompt Engineer, Conversational-AI/Chatbot-Developer, Low-/No-Code-Prototyping (z. B. n8n, Supabase, Postgres)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Full-Funnel-Content: Short-Form-Video/Reels, Performance-Cuts, Audio-Bearbeitung, 3D/Motion-Grafiken – von Awareness bis Conversion</li>
                        <li>Editing & Creation: Zuschneiden/Optimieren von Kurzvideos (typisch: 15 Reels ≤2 Min), präzises Storytelling</li>
                        <li>Conversational AI & Automations: Konzeption/Umsetzung von Chatbots (Voice/Phone, WhatsApp, Web/App), Customer-Journeys & Beratung</li>
                        <li>Low/No-Code-Prototyping: Automationen & Integrationen mit REST-APIs, Webhooks, SDKs; saubere Doku & Handover</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Media-Talente: starkes Portfolio in Video/Audio/Motion; Erfahrung mit Short-Form-Edits; sehr gutes Deutsch für DACH-Content</li>
                        <li>Lab-Talente: Erfahrung/Interesse in Conversational AI, Prompt Engineering oder Automations; sicher im Umgang mit REST/JSON/Webhooks; Plus: Erfahrung als PO/PM im Tech-Umfeld</li>
                        <li>Soft Skills: Verlässlichkeit, klare Kommunikation, Termintreue, hohe Eigeninitiative; DACH-B2B-Erfahrung & DSGVO-Awareness von Vorteil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Pilotprojekte & Beta-Tools: Zugriff auf unser Lab & moderne KI-Stacks</li>
                        <li>Wiederkehrende Projekte: langfristige Kooperationen je nach Kapazität</li>
                        <li>Transparente Zusammenarbeit: klare Briefings, faire Vergütung pro Deliverable/Projekt, direkte Kommunikation</li>
                        <li>Remote-first: flexible Zeiten; Meetings/Workshops online</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Freelancer-Pool Media & Lab" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8">
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
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Werkstudent:in DevOps & Full-Stack" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4">
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
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-black leading-tight">
              Finden Sie Ihre Traumposition nicht?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Senden Sie uns Ihre Initiativbewerbung! Wir sind immer auf der Suche nach 
              talentierten Menschen, die unser Team bereichern möchten.
            </p>
            <a href="mailto:info@newedgebrand.com?subject=Initiativbewerbung" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform duration-300">
              Initiativbewerbung senden
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default Careers;