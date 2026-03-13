
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import StructuredData from "@/components/StructuredData";

// Eager load only critical pages for faster initial load
import Index from "./pages/Index";
import OptimizedStudio from "./components/OptimizedStudio";
import OptimizedLab from "./components/OptimizedLab";

// Lazy load all secondary pages for better performance
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const UseCases = lazy(() => import("./pages/UseCases"));
const CaseStudyAlbaNova = lazy(() => import("./pages/CaseStudyAlbaNova"));
const CaseStudyEcommerce = lazy(() => import("./pages/CaseStudyEcommerce"));
const CaseStudyVisualMerchandising = lazy(() => import("./pages/CaseStudyVisualMerchandising"));
const CaseStudySocialMedia = lazy(() => import("./pages/CaseStudySocialMedia"));
const CaseStudyRetailLab = lazy(() => import("./pages/CaseStudyRetailLab"));
const Careers = lazy(() => import("./pages/Careers"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Contact = lazy(() => import("./pages/Contact"));
const KiAudit = lazy(() => import("./pages/KiAudit"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => {
  useEffect(() => {
    // Set document language for SEO
    document.documentElement.lang = 'de';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <StructuredData />
              <Suspense fallback={<LoadingScreen progress={100} />}>
                <Routes>
                <Route path="/" element={<Index />} />
                  <Route path="/studio" element={<OptimizedStudio />} />
                  <Route path="/lab" element={<OptimizedLab />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/case-study/albanova" element={<CaseStudyAlbaNova />} />
            <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />
            <Route path="/case-study/visual-merchandising" element={<CaseStudyVisualMerchandising />} />
            <Route path="/case-study/social-media" element={<CaseStudySocialMedia />} />
            <Route path="/case-study/retail-lab" element={<CaseStudyRetailLab />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="/kontakt" element={<Contact />} />
                  <Route path="/ki-audit" element={<KiAudit />} />
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
