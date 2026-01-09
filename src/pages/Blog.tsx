import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Blog posts data - same as in BlogPost.tsx
const blogPostsData = [
  {
    slug: "automatisierung-2024",
    title: "KI-Tools im Überblick für Unternehmen: So wird Ihre KI zum 'Company Brain'",
    category: "KI & AUTOMATION",
    date: "15. November 2024",
    gradient: "from-purple-600 to-blue-600",
    image: "/assets/blog-ki-tools.png",
    intro: "KI-Tools sind in vielen Unternehmen bereits angekommen - oft als Insellösungen im Marketing, in der IT oder im Kundenservice."
  },
  {
    slug: "markenaufbau-guide",
    title: "Die 10 häufigsten Fehler bei der Einführung von KI - und wie Sie sie vermeiden",
    category: "KI & STRATEGIE",
    date: "10. November 2024",
    gradient: "from-blue-600 to-cyan-600",
    image: "/assets/blog-ki-fehler.jpg",
    intro: "Künstliche Intelligenz verspricht Produktivitätssprünge, bessere Entscheidungen und neue Geschäftsmodelle."
  },
  {
    slug: "social-media-marketing",
    title: "Social-Media-Marketing ohne 'Slop': Warum menschliche Kuration wichtiger wird",
    category: "CONTENT & SOCIAL",
    date: "5. November 2024",
    gradient: "from-pink-600 to-rose-600",
    image: "/assets/blog-ki-social-media.png",
    intro: "Social Media Feeds quellen über vor generischen KI-Inhalten. Erfahren Sie, wie echte Qualität entsteht."
  },
  {
    slug: "ki-agenten-2025",
    title: "2025: Das Jahr der KI-Agenten – Was Marketing-Teams jetzt wissen müssen",
    category: "KI & ZUKUNFT",
    date: "1. November 2024",
    gradient: "from-indigo-600 to-purple-600",
    image: "/assets/blog-ki-agenten-hero.jpg",
    intro: "Von einfachen Chatbots zu autonomen Agenten: Wie KI-Agenten Marketing-Workflows revolutionieren."
  }
];

const Blog = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  const featuredPost = blogPostsData[0];
  const otherPosts = blogPostsData.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog - NEW EDGE</title>
        <meta name="description" content="Neueste Artikel, Insights und Trends von NEW EDGE." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-8 lg:pb-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-black text-black mb-4"
            >
              Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              Insights, Strategien und Trends rund um KI, Marketing und digitale Transformation.
            </motion.p>
          </div>
        </section>

        {/* Featured + List Layout */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Featured Post - Left Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-7"
              >
                <Link to={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    {featuredPost.image ? (
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${featuredPost.gradient}`} />
                    )}
                  </div>
                  
                  <div className="text-sm font-semibold text-purple-600 mb-3 tracking-wider uppercase">
                    {featuredPost.category}
                  </div>
                  
                  <h2 className="text-2xl lg:text-4xl font-black text-black mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-4 line-clamp-3">
                    {featuredPost.intro}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Other Posts - Right Side List */}
              <div className="lg:col-span-5 space-y-0 divide-y divide-gray-200">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider pb-4 mb-0">
                  Weitere Artikel
                </div>
                
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="group flex gap-4 py-6 hover:bg-gray-50 transition-colors -mx-4 px-4"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${post.gradient}`} />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-purple-600 mb-1 tracking-wider uppercase">
                          {post.category}
                        </div>
                        
                        <h3 className="font-bold text-black group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;