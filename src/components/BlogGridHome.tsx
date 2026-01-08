import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: "automatisierung-2024",
    client: "NEW EDGE",
    headline: "KI-Tools im Überblick: So wird Ihre KI zum 'Company Brain'",
    category: "KI & AUTOMATION",
    date: "15. Nov 2024",
    gradient: "from-purple-600 to-blue-600",
    image: "/assets/blog-ki-tools.png"
  },
  {
    id: "markenaufbau-guide",
    client: "NEW EDGE",
    headline: "Die 10 häufigsten Fehler bei der Einführung von KI",
    category: "KI & STRATEGIE",
    date: "10. Nov 2024",
    gradient: "from-blue-600 to-cyan-600",
    image: "/assets/blog-ki-fehler.jpg"
  },
  {
    id: "ki-social-media-2025",
    client: "NEW EDGE",
    headline: "Künstliche Intelligenz im Social-Media-Marketing 2025: Qualität statt 'Slop'",
    category: "KI & SOCIAL MEDIA",
    date: "18. Dez 2024",
    gradient: "from-cyan-600 to-teal-600",
    image: "/assets/blog-ki-social-media.png"
  },
  {
    id: "ki-agenten-2025",
    client: "NEW EDGE",
    headline: "2025: Das Jahr der KI-Agenten im Marketing",
    category: "KI & MARKETING",
    date: "20. Dez 2024",
    gradient: "from-teal-600 to-green-600",
    image: "/assets/blog-ki-agenten-hero.jpg"
  }
];

export const BlogGridHome = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black">
              Insights & Wissen.
              <br />
              <span className="text-[#7C3AED]">Her mit den Artikeln.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block flex-shrink-0"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-[#7C3AED] transition-colors duration-300"
            >
              ALLE ARTIKEL
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex-shrink-0 w-[calc(50%-6px)] snap-start"
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                  {/* Image or Gradient Background */}
                  {post.image ? (
                    <>
                      <img 
                        src={post.image} 
                        alt={post.headline}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                  )}
                  
                  {/* Mobile: Always show content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                      {post.client}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight line-clamp-3">
                      {post.headline}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-0">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <div className="relative overflow-hidden aspect-square bg-gray-100">
                  {/* Image or Gradient Background */}
                  {post.image ? (
                    <>
                      <img 
                        src={post.image} 
                        alt={post.headline}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                  )}
                  
                  {/* Normal State: + Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Plus className="w-12 h-12 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Hover State: Purple Overlay */}
                  <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-6">
                    {/* Top: White Line */}
                    <div className="w-16 h-1 bg-white" />
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        {post.client}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight line-clamp-3">
                        {post.headline}
                      </h3>
                      <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                        <span className="underline">Artikel lesen</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Bottom: Category Tag */}
                    <div>
                      <span className="inline-block border border-white/80 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Show ALLE ARTIKEL button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden mt-6 text-center"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#7C3AED] transition-colors duration-300"
          >
            ALLE ARTIKEL
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};