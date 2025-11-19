
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

// Eager load main pages for better performance
import Index from "./pages/Index";
import OptimizedMedia from "./components/OptimizedMedia";
import OptimizedStudio from "./components/OptimizedStudio";
import OptimizedLab from "./components/OptimizedLab";
import OptimizedProducts from "./components/OptimizedProducts";
import Team from "./pages/Team";
import CaseStudies from "./pages/CaseStudies";
import UseCases from "./pages/UseCases";
import CaseStudyAlbaNova from "./pages/CaseStudyAlbaNova";
import CaseStudyEcommerce from "./pages/CaseStudyEcommerce";
import CaseStudySocialMedia from "./pages/CaseStudySocialMedia";
import CaseStudyRetailLab from "./pages/CaseStudyRetailLab";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import News from "./pages/News";

// Only lazy load rarely visited pages
const Impressum = lazy(() => import("./pages/Impressum"));
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
              <Suspense fallback={<LoadingScreen progress={100} />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/media" element={<OptimizedMedia />} />
                  <Route path="/studio" element={<OptimizedStudio />} />
                  <Route path="/lab" element={<OptimizedLab />} />
                  <Route path="/products" element={<OptimizedProducts />} />
            <Route path="/team" element={<Team />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/case-study/albanova" element={<CaseStudyAlbaNova />} />
            <Route path="/case-study/retail-lab" element={<CaseStudyRetailLab />} />
            <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />
            <Route path="/case-study/social-media" element={<CaseStudySocialMedia />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/blog" element={<Blog />} />
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
