import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const blogPosts = [
  {
    id: "automatisierung-2024",
    title: "Die Zukunft der Automatisierung",
    category: "KI & AUTOMATION",
    date: "15. Nov 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    id: "markenaufbau-guide",
    title: "Erfolgreicher Markenaufbau für KMUs",
    category: "BRANDING",
    date: "10. Nov 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: "ki-workflows",
    title: "KI-Workflows die Zeit sparen",
    category: "PRODUCTIVITY",
    date: "05. Nov 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    gradient: "from-cyan-600 to-teal-600"
  },
  {
    id: "digitale-transformation",
    title: "Digitale Transformation richtig angehen",
    category: "STRATEGIE",
    date: "28. Okt 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    gradient: "from-teal-600 to-green-600"
  },
  {
    id: "social-media-trends",
    title: "Social Media Trends 2025",
    category: "MARKETING",
    date: "20. Okt 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    gradient: "from-green-600 to-emerald-600"
  }
];

export const BlogGrid = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container-xl relative z-10">
        {/* Header with Title and All Articles Link */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-black"
            >
              Insights & Wissen.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Bleiben Sie informiert über die neuesten Trends und Best Practices.
            </motion.p>
          </div>
          
          {/* All Articles Link - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Link
              to="/blog"
              className="group flex items-center gap-2 text-lg font-bold text-black hover:text-purple-600 transition-colors"
            >
              ALLE ARTIKEL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                
                {/* Default State: Plus Icon */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  <Plus className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>

                {/* Hover State: Content */}
                <div className="absolute inset-0 bg-purple-600/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="text-white/80 text-xs font-semibold mb-2 tracking-wider">
                    {post.category}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="text-white/70 text-sm">
                    {post.date}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All Articles Button - Visible only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden flex justify-center"
        >
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-lg font-bold text-black hover:text-purple-600 transition-colors"
          >
            ALLE ARTIKEL
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
