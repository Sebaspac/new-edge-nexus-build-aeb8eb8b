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
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">Bei Interesse sende uns eine E-Mail mit deiner aussagekräftigen Bewerbung (Lebenslauf + kurzes Anschreiben) an die im Impressum/auf unserer Website genannte Kontaktadresse – alternativ gern über das Kontaktformular.</p>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full pr-4">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-2">Praktikum Marketing & Projektmanagement (m/w/d)</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>📍 Remote/München (Hybrid)</span>
                          <span>💼 3–6 Monate</span>
                          <span>🚀 Start: jederzeit</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Operative Unterstützung in Content/SEO (Keyword-Recherche, Redaktionsplan, Blog/LP-Briefings)</li>
                        <li>Social Media für LinkedIn & Instagram: Posting-Vorbereitung, Community-Pflege, Reporting</li>
                        <li>Unterstützung im Projektmanagement: Kickoffs, Timings, Status, QA, Assets & Handover</li>
                        <li>KPI-Tracking (Traffic, Leads, CTR/Conversion, Social Engagement) inkl. Monatsreporting</li>
                        <li>Mithilfe bei Webinaren/Events (Planung, Landingpages, Follow-ups via CRM)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Studium (Marketing/Medien/BWL o. ä.), starke Schreibe auf Deutsch; Tech-/KI-Affinität</li>
                        <li>Basics in SEO, Analytics/Looker, Notion/Jira/Trello; strukturierte, hands-on Arbeitsweise</li>
                        <li>Lust, KI-Tools & Automations (z. B. n8n) sicher im Marketing einzusetzen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Einblick in KI-Marketing & Automation entlang des gesamten Funnels, steile Lernkurve</li>
                        <li>Remote-first Setup, kurze Entscheidungswege, ehrliches Feedback & Mentoring</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Marketing & Projektmanagement" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full pr-4">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-2">DevOps Engineer (m/w/d)</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>📍 Remote/München (Hybrid)</span>
                          <span>💼 Fest oder Freelance</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Mission</h4>
                      <p>Baue mit uns die sichere, skalierbare Infrastruktur für das Lab (Automations, Chatbots, Microservices) und die Media-Pipelines.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cloud & IaC (AWS/GCP/Azure, Terraform/Pulumi), CI/CD (GitHub Actions), Container (Docker/K8s)</li>
                        <li>Observability (OpenTelemetry/Prometheus/Grafana), Secrets/Key-Mgmt, Cost-Control</li>
                        <li>Set-up von Data/ML-Workflows & API-Gateways (REST/Webhooks), Hardening & DSGVO-konforme Setups</li>
                        <li>Enge Zusammenarbeit mit Full-Stack & Automation (z. B. n8n, Supabase, Postgres)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>3+ Jahre DevOps/SRE, Production-Erfahrung mit Cloud, CI/CD und Container-Orchestrierung</li>
                        <li>Scripting (Bash/Python/Node), GitOps-Mindset; Security- und Privacy-Awareness</li>
                        <li>Nice-to-have: Vektor-DBs/LLM-Ops, Supabase, n8n, Queueing (SQS/Cloud Tasks), CDN/Edge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Greenfield-Setups, viel Verantwortung, kurzer Weg von Prototyp zu Produktion (Studio/Media/Lab)</li>
                        <li>Remote-first, faire Vergütung, Zugang zu modernsten KI-Stacks & Partnernetzwerk</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: DevOps Engineer" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full pr-4">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-2">Freelancer-Pool Media & Lab (m/w/d)</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>📍 Remote (EU/DACH-Zeitzone)</span>
                          <span>💼 Projektbasiert</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Gesuchte Profile</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Media: Videograf:in/Editor, Motion/3D, Social-Content-Producer (Shortform, Performance-Cuts), Audio/Podcast</li>
                        <li>Lab: Automation Builder/Prompt Engineer, Conversational-AI/Chatbot-Dev, Low-/No-Code-Prototyping (z. B. n8n)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Entwicklung Full-Funnel-Content (Awareness → Conversion) inkl. KI-gestützter Produktion & Distribution</li>
                        
                        <li>Saubere Handover-Docs, Versionierung, realistische Angebote & Timings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Starkes Portfolio/GitHub, verlässlich, klar in Kommunikation & Angebot</li>
                        <li>Erfahrung mit Marken im B2B/DACH von Vorteil; DSGVO-Verständnis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Zugriff auf Lab-Piloten/Beta-Tools, wiederkehrende Projekte im Partner-Netzwerk, transparente Zusammenarbeit</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Freelancer-Pool Media & Lab" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-4">
                      Jetzt bewerben
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full pr-4">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-2">Werkstudent:in (m/w/d) – zwischen DevOps Engineer & Full-Stack</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>📍 Remote/München (Hybrid)</span>
                          <span>💼 12–20 h/Woche</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Deine Aufgaben</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Mitarbeit an CI/CD-Pipelines, Container-Builds, Environments & Monitoring</li>
                        <li>Full-Stack-Tasks (Next.js/React, Node/TypeScript, API-Integrationen) für interne Tools & Kunden-Dashboards</li>
                        <li>Skripte & Automations (n8n/Supabase), QA & Dokus; kleine Features eigenständig shippen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Dein Profil</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Immatrikuliert in (Wirtschafts-)Informatik o. ä.; solide JS/TS-Skills, Git, Basics in Cloud/Docker</li>
                        <li>Schnell lernend, neugierig auf KI-/Automation-Workflows; saubere, getestete Deliverables</li>
                        <li>Nice-to-have: Prisma, Tailwind, Postgres, Auth/OAuth, Vektor-DBs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wir bieten</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Mentoring, klare Roadmaps, Zugang zu unserem Lab & echten Produktions-Stacks; flexible Zeiten</li>
                      </ul>
                    </div>
                    <a href="mailto:info@newedgebrand.com?subject=Bewerbung: Werkstudent:in DevOps & Full-Stack" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 mt-4">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-black">
              Finden Sie Ihre Traumposition nicht?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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