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
    image: undefined as string | undefined
  },
  {
    id: "ki-agenten-2025",
    client: "NEW EDGE",
    headline: "2025: Das Jahr der KI-Agenten im Marketing",
    category: "KI & MARKETING",
    date: "20. Dez 2024",
    gradient: "from-teal-600 to-green-600",
    image: undefined as string | undefined
  }
];

export const BlogGrid = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container-xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-black">
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
            className="hidden md:block"
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <h3 className="text-2xl font-bold text-white leading-tight">
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
          className="md:hidden mt-8 text-center"
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
    </section>
  );
};
