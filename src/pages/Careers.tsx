import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(107, 114, 128, 0.3), rgba(75, 85, 99, 0.2), rgba(55, 65, 81, 0.1))'
          }}>
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.2), transparent)'
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
            <p className="text-center text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">Bei Interesse sende uns eine E-Mail mit deiner aussagekräftigen Bewerbung (Lebenslauf + kurzes Anschreiben) an die im Impressum/auf unserer Website genannte Kontaktadresse – alternativ gern über das Kontaktformular.</p>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8">
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 w-full pr-2 sm:pr-4">
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Praktikum Marketing & Projektmanagement (m/w/d)</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 3–6 Monate</span>
                          <span>🚀 jederzeit</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Operative Unterstützung in Content/SEO (Keyword-Recherche, Redaktionsplan, Blog/LP-Briefings)</li>
                        <li>Social Media für LinkedIn & Instagram: Posting-Vorbereitung, Community-Pflege, Reporting</li>
                        <li>Unterstützung im Projektmanagement: Kickoffs, Timings, Status, QA, Assets & Handover</li>
                        <li>KPI-Tracking (Traffic, Leads, CTR/Conversion, Social Engagement) inkl. Monatsreporting</li>
                        <li>Mithilfe bei Webinaren/Events (Planung, Landingpages, Follow-ups via CRM)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Studium (Marketing/Medien/BWL o. ä.), starke Schreibe auf Deutsch; Tech-/KI-Affinität</li>
                        <li>Basics in SEO, Analytics/Looker, Notion/Jira/Trello; strukturierte, hands-on Arbeitsweise</li>
                        <li>Lust, KI-Tools & Automations (z. B. n8n) sicher im Marketing einzusetzen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Einblick in KI-Marketing & Automation entlang des gesamten Funnels, steile Lernkurve</li>
                        <li>Remote-first Setup, kurze Entscheidungswege, ehrliches Feedback & Mentoring</li>
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
                          <span>💼 Fest/Freelance</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Mission</h4>
                      <p className="text-xs sm:text-sm">Baue mit uns die sichere, skalierbare Infrastruktur für das Lab (Automations, Chatbots, Microservices) und die Media-Pipelines.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Cloud & IaC (AWS/GCP/Azure, Terraform/Pulumi), CI/CD (GitHub Actions), Container (Docker/K8s)</li>
                        <li>Observability (OpenTelemetry/Prometheus/Grafana), Secrets/Key-Mgmt, Cost-Control</li>
                        <li>Set-up von Data/ML-Workflows & API-Gateways (REST/Webhooks), Hardening & DSGVO-konforme Setups</li>
                        <li>Enge Zusammenarbeit mit Full-Stack & Automation (z. B. n8n, Supabase, Postgres)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>3+ Jahre DevOps/SRE, Production-Erfahrung mit Cloud, CI/CD und Container-Orchestrierung</li>
                        <li>Scripting (Bash/Python/Node), GitOps-Mindset; Security- und Privacy-Awareness</li>
                        <li>Nice-to-have: Vektor-DBs/LLM-Ops, Supabase, n8n, Queueing (SQS/Cloud Tasks), CDN/Edge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Greenfield-Setups, viel Verantwortung, kurzer Weg von Prototyp zu Produktion (Studio/Media/Lab)</li>
                        <li>Remote-first, faire Vergütung, Zugang zu modernsten KI-Stacks & Partnernetzwerk</li>
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
                          <span>💼 Projektbasiert</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Gesuchte Profile</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Media: Videograf:in/Editor, Motion/3D, Social-Content-Producer (Shortform, Performance-Cuts), Audio/Podcast</li>
                        <li>Lab: Automation Builder/Prompt Engineer, Conversational-AI/Chatbot-Dev, Low-/No-Code-Prototyping (z. B. n8n)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Entwicklung Full-Funnel-Content (Awareness → Conversion) inkl. KI-gestützter Produktion & Distribution</li>
                        <li>Saubere Handover-Docs, Versionierung, realistische Angebote & Timings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Starkes Portfolio/GitHub, verlässlich, klar in Kommunikation & Angebot</li>
                        <li>Erfahrung mit Marken im B2B/DACH von Vorteil; DSGVO-Verständnis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Zugriff auf Lab-Piloten/Beta-Tools, wiederkehrende Projekte im Partner-Netzwerk, transparente Zusammenarbeit</li>
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
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2 leading-tight">Werkstudent:in (m/w/d) – DevOps & Full-Stack</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <span>📍 Remote/München</span>
                          <span>💼 12–20 h/Woche</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-3 sm:pt-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Mitarbeit an CI/CD-Pipelines, Container-Builds, Environments & Monitoring</li>
                        <li>Full-Stack-Tasks (Next.js/React, Node/TypeScript, API-Integrationen) für interne Tools & Kunden-Dashboards</li>
                        <li>Skripte & Automations (n8n/Supabase), QA & Dokus; kleine Features eigenständig shippen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Immatrikuliert in (Wirtschafts-)Informatik o. ä.; solide JS/TS-Skills, Git, Basics in Cloud/Docker</li>
                        <li>Schnell lernend, neugierig auf KI-/Automation-Workflows; saubere, getestete Deliverables</li>
                        <li>Nice-to-have: Prisma, Tailwind, Postgres, Auth/OAuth, Vektor-DBs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-black mb-1.5 sm:mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                        <li>Mentoring, klare Roadmaps, Zugang zu unserem Lab & echten Produktions-Stacks; flexible Zeiten</li>
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