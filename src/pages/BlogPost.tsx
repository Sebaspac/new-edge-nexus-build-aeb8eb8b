import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPostsData: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  gradient: string;
  content: {
    intro: string;
    sections: { heading: string; text: string }[];
  };
}> = {
  "automatisierung-2024": {
    title: "KI-Tools im Überblick für Unternehmen: So wird Ihre KI zum 'Company Brain'",
    category: "KI & AUTOMATION",
    date: "15. November 2024",
    author: "New Edge Team",
    gradient: "from-purple-600 to-blue-600",
    content: {
      intro: "KI-Tools sind in vielen Unternehmen bereits angekommen - oft als Insellösungen im Marketing, in der IT oder im Kundenservice. Gleichzeitig kämpfen Teams mit manuellen Prozessen, verstreuten Dateien und Informationssilos.\n\nRichtig eingesetzt, kann Künstliche Intelligenz weit mehr sein als 'das nächste Tool': Sie kann zu einem 'Company Brain' werden - einem zentralen, intelligenten System, das Wissen, Daten und Abläufe verbindet und Ihr Unternehmen spürbar entlastet.\n\nIn diesem Artikel erfahren Sie:\n• welche Kategorien von KI-Tools für Unternehmen wirklich relevant sind,\n• wie Sie daraus ein zusammenhängendes System - Ihr Company Brain - aufbauen,\n• und welche Rolle ein Setup wie das New Edge Studio · Media · Lab und unser AgentHub dabei spielen kann.",
      sections: [
        {
          heading: "Was wir unter einem 'Company Brain' verstehen",
          text: "Ein Company Brain ist mehr als ein Chatbot oder ein einzelnes Automations-Tool. Es ist ein Zusammenspiel aus:\n• zentralisiertem Wissen (Dokumente, Prozesse, Best Practices),\n• klar definierten Workflows (z. B. von Leads, Support-Fällen, Projekten),\n• und spezialisierten KI-Agenten, die diese Informationen nutzen, um Aufgaben zu erledigen.\n\nStatt vieler unverbundener Tools erhalten Sie:\n• einen zentralen Zugangspunkt (z. B. in Form eines Chat- oder Web-Dashboards),\n• klare Zuständigkeiten: Welche KI macht was - und wo entscheidet weiterhin der Mensch,\n• ein System, das mit Ihrem Unternehmen wächst, statt ständig neu aufgebaut werden zu müssen.\n\nGenau in diese Richtung denken wir bei New Edge mit unserem AgentHub: einem zentralen Interface, über das Sie Ihre KI-Agenten, Automationen und Datenflüsse steuern - wie ein 'Bedienpult' Ihres Company Brain."
        },
        {
          heading: "Was KI-Tools im Unternehmensalltag leisten können",
          text: "KI-Tools sind Software-Lösungen, die Aufgaben übernehmen, die früher manuell oder gar nicht erledigt wurden. Typische Einsatzfelder:\n• Texte und Inhalte erstellen oder verbessern,\n• Informationen strukturieren, zusammenfassen und durchsuchbar machen,\n• Prozesse automatisiert anstoßen und Entscheidungen vorbereiten,\n• interne und externe Fragen in natürlicher Sprache beantworten.\n\nRichtig eingeführt, führt das zu:\n• weniger Routinearbeit und Copy-Paste,\n• schnelleren Reaktionszeiten,\n• besser dokumentiertem Wissen,\n• und mehr Raum für Strategie, Kundenkontakt und Kreativität.\n\nDamit aus vielen Einzeltools ein echtes Company Brain wird, lohnt sich der Blick auf die Kategorien von KI-Anwendungen."
        },
        {
          heading: "1. Text- und Content-KI",
          text: "Diese Lösungen arbeiten mit Sprache und Text. Sie können:\n• Blogartikel, Social-Posts, Newsletter und Landingpages entwerfen,\n• E-Mails, Angebote oder Support-Antworten vorbereiten,\n• Meeting-Protokolle und lange Dokumente zusammenfassen,\n• Texte in andere Sprachen übertragen oder Tonalitäten anpassen.\n\nNutzen für Ihr Unternehmen:\n• Marketing und Sales starten nicht mehr bei Null, sondern mit starken Entwürfen.\n• Führungskräfte gewinnen Zeit, weil Zusammenfassungen und Drafts automatisch entstehen.\n• Wissenssilos schrumpfen, weil Inhalte leichter auffindbar werden.\n\nIm Studio von New Edge nutzen wir diese Tools, um Strategien, Botschaften und Markenstimmen zu schärfen - die KI dient dabei als Beschleuniger, nicht als Ersatz für Konzeptarbeit."
        },
        {
          heading: "2. Bild-, Audio- und Video-KI",
          text: "Hier geht es um visuelle und auditive Inhalte:\n• generierte Bilder für Kampagnen, Thumbnails und Mockups,\n• automatische Transkription von Meetings, Podcasts und Videos,\n• Untertitel, Snippets und Social-Clips aus langen Aufnahmen,\n• Audio-Reinigung und einfache Videoschnitte.\n\nNutzen:\n• Ihr Content-Team im Media-Bereich produziert mehr Formate mit weniger Reibungsverlust.\n• Wissen aus Calls und Meetings bleibt nicht im Kopf einzelner Personen, sondern wird als Text und Video nutzbar.\n• Onboarding, Schulungen und interne Kommunikation gewinnen an Qualität."
        },
        {
          heading: "3. Automatisierungs- und Workflow-KI",
          text: "Hier werden Tools und Datenquellen intelligent miteinander verbunden:\n• CRM, ERP, Support-Systeme, DMS, Shop, Newsletter-Tools,\n• interne Datenbanken und Cloud-Speicher.\n\nTypische Use Cases:\n• Leads aus Formularen automatisch ins CRM eintragen, qualifizieren und an Sales übergeben,\n• Rechnungen und Belege erkennen, prüfen und zur Freigabe weiterleiten,\n• Tickets und Anfragen automatisch klassifizieren, priorisieren und routen.\n\nNutzen:\n• Backoffice und Operations werden messbar entlastet.\n• Prozesslaufzeiten verkürzen sich, Fehler werden reduziert.\n• Teams können sich auf Ausnahmen und strategische Themen konzentrieren.\n\nDiese Ebene ist das Herzstück unseres Lab: Hier bauen wir Automationen, KI-Agenten und Integrationen - häufig orchestriert über unseren AgentHub und Tools wie n8n."
        },
        {
          heading: "4. Analyse- und Entscheidungs-KI",
          text: "Analyse-KI hilft, aus Daten klare Signale zu machen:\n• Kennzahlen aus verschiedenen Quellen zusammenführen,\n• Muster, Ausreißer und Trends erkennen,\n• Prognosen für Nachfrage, Auslastung oder Umsatz ableiten,\n• Handlungsempfehlungen vorschlagen.\n\nNutzen:\n• Entscheidungen basieren auf aktuellen, konsistenten Daten statt auf Bauchgefühl.\n• Führungsteams sehen frühzeitig Risiken und Chancen.\n• Tests und Experimente (z. B. Kampagnen, Preisstrategien) lassen sich schneller auswerten.\n\nIn vielen Projekten verbinden wir diese Ebene mit der Marken- und Contentarbeit aus Studio & Media, um nicht nur zu 'messen', sondern die Erkenntnisse direkt in Kommunikation, Kampagnen und Customer Journeys zurückzuspielen."
        },
        {
          heading: "Konkrete KI-Tools - Typische Bausteine eines Company-Brain-Stacks",
          text: "Welche Tools konkret passen, hängt von Ihrer IT-Landschaft und Ihren Anforderungen ab. Häufig sehen wir Kombinationen wie:\n• Text & Content: ChatGPT, Neuroflash oder ähnliche LLM-basierte Assistenten für Ideen, Drafts und Zusammenfassungen.\n• Bild, Audio, Video: DALL-E / Midjourney für Visuals, Descript und Whisper für Transkription und Bearbeitung.\n• Automatisierung & Agenten: n8n oder vergleichbare Workflow-Engines als technisches Rückgrat für KI-Agenten und Unternehmens-Automationen.\n• Daten & Dashboards: Power BI, Looker Studio oder individuelle Dashboards, die an Ihren AgentHub und Ihre Datenbanken angebunden sind.\n\nUnser Ansatz bei New Edge: Statt Ihnen eine lange Tool-Liste zu verkaufen, definieren wir erst Use Cases und Prozesse - und bauen dann aus ausgewählten Bausteinen einen klaren, wartbaren Stack."
        },
        {
          heading: "Wie Sie die passenden KI-Tools auswählen - ohne im Tool-Zoo zu landen",
          text: "Der wichtigste Grundsatz: Starten Sie nicht beim Tool, sondern beim Problem.\n\n1. Pain Points identifizieren\n• Wo gehen heute viele Stunden für wiederkehrende Tätigkeiten drauf?\n• Wo entstehen Wartezeiten oder Fehler, weil Daten und Informationen fehlen?\n\n2. Use Cases definieren\n• 'Wir möchten die Bearbeitungszeit von Support-Anfragen um 30 % senken.'\n• 'Wir möchten wöchentliche Performance-Reports automatisch erstellen lassen.'\n• 'Wir möchten internes Wissen für Mitarbeitende über einen Chat zugänglich machen.'\n\n3. Gezielt 1-2 Tools pro Use Case testen\n• Klein anfangen, klar messen, bewusst entscheiden: behalten, anpassen oder verwerfen.\n\n4. Integration & Datenschutz früh klären\n• Schnittstellen zu bestehenden Systemen, Datenflüsse, DSGVO-Konformität und Rollenrechte von Beginn an berücksichtigen.\n\nIm Idealfall entsteht daraus Schritt für Schritt ein zentrales Company Brain, statt einer Sammlung unverbundener Lösungen."
        },
        {
          heading: "Wie New Edge Sie dabei unterstützt: Studio · Media · Lab & AgentHub",
          text: "Unser Ansatz bei New Edge:\n• Studio - wir schärfen Positionierung, Story und Anwendungsfälle für KI: Welche Prozesse, welches Markenversprechen, welche Touchpoints?\n• Media - wir übersetzen das in Inhalte, Journeys und Kommunikation, die Ihre Teams und Kunden abholen.\n• Lab - wir bauen und verknüpfen Ihre KI-Agenten, Automationen, Dashboards und Workflows - häufig orchestriert über unseren AgentHub als sichtbares Interface Ihres Company Brain.\n\nDas Ergebnis: Keine losgelösten 'KI-Projekte', sondern ein durchdachtes Wachstums- und Effizienzsystem, das Strategie, Kommunikation und Technologie verbindet."
        },
        {
          heading: "Fazit: Vom Tool-Stapel zum Company Brain",
          text: "KI-Tools im Überblick zu kennen, ist hilfreich - doch der eigentliche Unterschied entsteht, wenn Sie:\n• klare Use Cases definieren,\n• eine passende Tool-Landschaft auswählen,\n• Prozesse und Menschen mitdenken,\n• und alles in einem zentralen System zusammenführen.\n\nGenau dort beginnt Ihr Company Brain: eine KI-gestützte Infrastruktur, die Wissen bündelt, Aufgaben übernimmt und Entscheidungen unterstützt.\n\nWenn Sie den Schritt vom Tool-Zoo zu einem klaren System gehen möchten, begleiten wir Sie mit Studio · Media · Lab und unserem AgentHub - von der ersten Idee bis zur skalierbaren, sicheren KI-Landschaft."
        }
      ]
    }
  },
  "markenaufbau-guide": {
    title: "Erfolgreicher Markenaufbau für KMUs",
    category: "BRANDING",
    date: "10. November 2024",
    author: "New Edge Team",
    gradient: "from-blue-600 to-cyan-600",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sections: [
        {
          heading: "Die Grundlagen erfolgreichen Brandings",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "Strategien für kleine und mittlere Unternehmen",
          text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        }
      ]
    }
  },
  "ki-workflows": {
    title: "KI-Workflows die Zeit sparen",
    category: "PRODUCTIVITY",
    date: "5. November 2024",
    author: "New Edge Team",
    gradient: "from-cyan-600 to-teal-600",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sections: [
        {
          heading: "Effizienzsteigerung durch KI",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "Implementierung in Ihrem Unternehmen",
          text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        }
      ]
    }
  },
  "digitale-transformation": {
    title: "Digitale Transformation richtig angehen",
    category: "STRATEGIE",
    date: "28. Oktober 2024",
    author: "New Edge Team",
    gradient: "from-teal-600 to-green-600",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sections: [
        {
          heading: "Der richtige Ansatz zur Digitalisierung",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "Häufige Fehler vermeiden",
          text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        }
      ]
    }
  }
};

// Helper function to render text with proper bullet points
const renderTextWithBullets = (text: string) => {
  // Split by double newlines to get paragraphs
  const blocks = text.split('\n\n');
  
  return blocks.map((block, blockIndex) => {
    // Check if block contains bullet points
    if (block.includes('\n•') || block.startsWith('•')) {
      const lines = block.split('\n');
      const elements: JSX.Element[] = [];
      let currentList: string[] = [];
      let introText = '';
      
      lines.forEach((line, lineIndex) => {
        if (line.startsWith('•')) {
          currentList.push(line.substring(1).trim());
        } else if (line.trim()) {
          // If we have accumulated list items, render them first
          if (currentList.length > 0) {
            elements.push(
              <ul key={`list-${blockIndex}-${lineIndex}`} className="list-disc list-inside my-4 space-y-2">
                {currentList.map((item, i) => (
                  <li key={i} className="text-lg text-gray-700">{item}</li>
                ))}
              </ul>
            );
            currentList = [];
          }
          introText = line;
          elements.push(
            <p key={`text-${blockIndex}-${lineIndex}`} className="text-lg text-gray-700 leading-relaxed mb-2">
              {line}
            </p>
          );
        }
      });
      
      // Render any remaining list items
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${blockIndex}-final`} className="list-disc list-inside my-4 space-y-2">
            {currentList.map((item, i) => (
              <li key={i} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
        );
      }
      
      return <div key={blockIndex}>{elements}</div>;
    }
    
    // Regular paragraph without bullets
    return (
      <p key={blockIndex} className="text-lg text-gray-700 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogPostsData[slug] : null;

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

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Artikel nicht gefunden - NEW EDGE</title>
        </Helmet>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black mb-4">Artikel nicht gefunden</h1>
            <Link to="/blog" className="text-purple-600 hover:underline">
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - NEW EDGE</title>
        <meta name="description" content={post.content.intro} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section with Gradient */}
        <section className={`relative w-full min-h-[70vh] flex items-end bg-gradient-to-br ${post.gradient}`}>
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-16 pt-32 relative z-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Übersicht
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white/90 text-sm font-semibold mb-4 tracking-wider uppercase">
                {post.category}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="text-xl text-gray-700 leading-relaxed mb-12">
                {renderTextWithBullets(post.content.intro)}
              </div>

              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-black mb-4 text-black">
                    {section.heading}
                  </h2>
                  <div className="text-lg text-gray-700 leading-relaxed">
                    {renderTextWithBullets(section.text)}
                  </div>
                </div>
              ))}

              {/* Call to Action */}
              <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl">
                <h3 className="text-2xl font-black mb-4 text-black">
                  Lassen Sie uns Ihr Projekt besprechen
                </h3>
                <p className="text-gray-700 mb-6">
                  Interessiert an ähnlichen Lösungen für Ihr Unternehmen? Kontaktieren Sie uns für ein unverbindliches Gespräch.
                </p>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-purple-600 transition-colors"
                >
                  Kontakt aufnehmen
                </button>
              </div>
            </motion.article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
