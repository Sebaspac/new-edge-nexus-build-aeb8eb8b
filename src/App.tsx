import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from "react";

// Minimal loading fallback - no heavy LoadingScreen
const MinimalFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

// CRITICAL: Only eager load the homepage for fastest initial load
import Index from "./pages/Index";

// Lazy load ALL other pages - they're not needed for initial render
const OptimizedMedia = lazy(() => import("./components/OptimizedMedia"));
const OptimizedStudio = lazy(() => import("./components/OptimizedStudio"));
const OptimizedLab = lazy(() => import("./components/OptimizedLab"));
const OptimizedProducts = lazy(() => import("./components/OptimizedProducts"));
const Team = lazy(() => import("./pages/Team"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const UseCases = lazy(() => import("./pages/UseCases"));
const CaseStudyAlbaNova = lazy(() => import("./pages/CaseStudyAlbaNova"));
const CaseStudyEcommerce = lazy(() => import("./pages/CaseStudyEcommerce"));
const CaseStudyVisualMerchandising = lazy(() => import("./pages/CaseStudyVisualMerchandising"));
const CaseStudySocialMedia = lazy(() => import("./pages/CaseStudySocialMedia"));
const CaseStudyRetailLab = lazy(() => import("./pages/CaseStudyRetailLab"));
const Careers = lazy(() => import("./pages/Careers"));
const About = lazy(() => import("./pages/About"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const News = lazy(() => import("./pages/News"));
const Impressum = lazy(() => import("./pages/Impressum"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Set document language for SEO
    document.documentElement.lang = 'de';
    
    // Remove hero skeleton after hydration
    const skeleton = document.getElementById('hero-skeleton');
    if (skeleton) {
      skeleton.remove();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={<MinimalFallback />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/media" element={<OptimizedMedia />} />
                  <Route path="/studio" element={<OptimizedStudio />} />
                  <Route path="/lab" element={<OptimizedLab />} />
                  <Route path="/products" element={<OptimizedProducts />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/use-cases" element={<UseCases />} />
                  <Route path="/case-study/albanova" element={<CaseStudyAlbaNova />} />
                  <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />
                  <Route path="/case-study/visual-merchandising" element={<CaseStudyVisualMerchandising />} />
                  <Route path="/case-study/social-media" element={<CaseStudySocialMedia />} />
                  <Route path="/case-study/retail-lab" element={<CaseStudyRetailLab />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;