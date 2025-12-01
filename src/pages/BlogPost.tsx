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
    title: "Die Zukunft der Automatisierung",
    category: "KI & AUTOMATION",
    date: "15. November 2024",
    author: "New Edge Team",
    gradient: "from-purple-600 to-blue-600",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sections: [
        {
          heading: "Automatisierung im digitalen Zeitalter",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },
        {
          heading: "Die Rolle von künstlicher Intelligenz",
          text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        },
        {
          heading: "Praktische Anwendungsfälle",
          text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
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
  },
  "social-media-trends": {
    title: "Social Media Trends 2025",
    category: "MARKETING",
    date: "20. Oktober 2024",
    author: "New Edge Team",
    gradient: "from-green-600 to-emerald-600",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sections: [
        {
          heading: "Die wichtigsten Trends für 2025",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "Wie Sie diese Trends nutzen können",
          text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        }
      ]
    }
  }
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
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-black mb-4 text-black">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
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
