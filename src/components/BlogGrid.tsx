import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: "ki-agenten-2025",
    client: "NEW EDGE",
    headline: "2025: Das Jahr der KI-Agenten im Marketing",
    excerpt: "Entdecken Sie, wie KI-Agenten das Marketing revolutionieren und welche Strategien für 2025 entscheidend sind.",
    category: "KI & MARKETING",
    date: "20. Dez 2024",
    gradient: "from-teal-600 to-green-600",
    image: "/assets/blog-ki-agenten-hero.jpg"
  },
  {
    id: "ki-social-media-2025",
    client: "NEW EDGE",
    headline: "Künstliche Intelligenz im Social-Media-Marketing 2025: Qualität statt 'Slop'",
    excerpt: "Warum menschliche Kuration wichtiger denn je ist.",
    category: "KI & SOCIAL MEDIA",
    date: "18. Dez 2024",
    gradient: "from-cyan-600 to-teal-600",
    image: "/assets/blog-ki-social-media.png"
  },
  {
    id: "automatisierung-2024",
    client: "NEW EDGE",
    headline: "KI-Tools im Überblick: So wird Ihre KI zum 'Company Brain'",
    excerpt: "Die besten Tools für Ihr Unternehmen.",
    category: "KI & AUTOMATION",
    date: "15. Nov 2024",
    gradient: "from-purple-600 to-blue-600",
    image: "/assets/blog-ki-tools.png"
  },
  {
    id: "markenaufbau-guide",
    client: "NEW EDGE",
    headline: "Die 10 häufigsten Fehler bei der Einführung von KI",
    excerpt: "Vermeiden Sie diese Stolpersteine.",
    category: "KI & STRATEGIE",
    date: "10. Nov 2024",
    gradient: "from-blue-600 to-cyan-600",
    image: "/assets/blog-ki-fehler.jpg"
  }
];

export const BlogGrid = () => {
  // Latest article (first in array)
  const latestPost = blogPosts[0];
  // Remaining articles
  const otherPosts = blogPosts.slice(1);

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black">
            Insights & Wissen.
            <br />
            <span className="text-[#7C3AED]">Her mit den Artikeln.</span>
          </h2>
        </motion.div>

        {/* Main Layout: Featured Left + List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
          {/* Featured Article (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/blog/${latestPost.id}`} className="block group">
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[4/3] bg-gray-100 rounded-2xl">
                {latestPost.image ? (
                  <>
                    <img 
                      src={latestPost.image} 
                      alt={latestPost.headline}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${latestPost.gradient}`} />
                )}
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 mb-4 uppercase tracking-wider">
                    {latestPost.category}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                    {latestPost.headline}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                    {latestPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span>{latestPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Trending Articles (Right) */}
          <div className="flex flex-col">
            {/* Trending Header */}
            <div className="flex items-center gap-3 mb-4 lg:mb-6 bg-gray-100 rounded-xl p-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-[#7C3AED] rounded-full" style={{ height: `${12 + i * 4}px` }} />
                  ))}
                </div>
              </div>
              <span className="font-bold text-gray-900">Trending Artikel</span>
            </div>

            {/* Article List */}
            <div className="flex flex-col divide-y divide-gray-100">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden bg-gray-100">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.headline}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${post.gradient}`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight line-clamp-2 group-hover:text-[#7C3AED] transition-colors">
                        {post.headline}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="text-[#7C3AED] font-medium">{post.category}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
