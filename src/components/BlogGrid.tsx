import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
const blogPosts = [{
  id: "ki-agenten-2025",
  client: "NEW EDGE",
  headline: "2025: Das Jahr der KI-Agenten im Marketing",
  excerpt: "Entdecken Sie, wie KI-Agenten das Marketing revolutionieren und welche Strategien für 2025 entscheidend sind.",
  category: "KI & MARKETING",
  date: "20. Dez 2024",
  gradient: "from-teal-600 to-green-600",
  image: "/assets/blog-ki-agenten-hero.jpg"
}, {
  id: "ki-social-media-2025",
  client: "NEW EDGE",
  headline: "Künstliche Intelligenz im Social-Media-Marketing 2025: Qualität statt 'Slop'",
  excerpt: "Warum menschliche Kuration wichtiger denn je ist.",
  category: "KI & SOCIAL MEDIA",
  date: "18. Dez 2024",
  gradient: "from-cyan-600 to-teal-600",
  image: "/assets/blog-ki-social-media.png"
}, {
  id: "automatisierung-2024",
  client: "NEW EDGE",
  headline: "KI-Tools im Überblick: So wird Ihre KI zum 'Company Brain'",
  excerpt: "Die besten Tools für Ihr Unternehmen.",
  category: "KI & AUTOMATION",
  date: "15. Nov 2024",
  gradient: "from-purple-600 to-blue-600",
  image: "/assets/blog-ki-tools.png"
}, {
  id: "markenaufbau-guide",
  client: "NEW EDGE",
  headline: "Die 10 häufigsten Fehler bei der Einführung von KI",
  excerpt: "Vermeiden Sie diese Stolpersteine.",
  category: "KI & STRATEGIE",
  date: "10. Nov 2024",
  gradient: "from-blue-600 to-cyan-600",
  image: "/assets/blog-ki-fehler.jpg"
}];
export const BlogGrid = () => {
  // Latest article (first in array)
  const latestPost = blogPosts[0];
  // Remaining articles
  const otherPosts = blogPosts.slice(1);
  return <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black">
            Artikel & <span className="text-[#7C3AED]">Insights</span>
          </h2>
        </motion.div>

        {/* Blog Grid - Same layout as CaseStudiesGrid */}
        <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex-shrink-0 w-[75%] snap-start md:w-auto"
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <div className="relative overflow-hidden aspect-square bg-gray-900">
                  {/* Image */}
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.headline}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${post.gradient}`} />
                  )}
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Normal State: + Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Hover State: Purple Overlay */}
                  <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                    {/* Top: White Line */}
                    <div className="w-8 md:w-16 h-0.5 md:h-1 bg-white" />
                    
                    {/* Content */}
                    <div className="space-y-1 md:space-y-3">
                      <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
                        {post.client}
                      </span>
                      <h3 className="text-sm md:text-2xl font-bold text-white leading-tight line-clamp-3">
                        {post.headline}
                      </h3>
                      <div className="hidden md:flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                        <span className="underline">Artikel lesen</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Bottom: Category Tag */}
                    <div>
                      <span className="inline-block border border-white/80 px-2 md:px-4 py-1 md:py-1.5 text-[8px] md:text-xs font-bold text-white uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
};