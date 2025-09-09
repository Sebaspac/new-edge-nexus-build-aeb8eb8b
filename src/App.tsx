
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from "react";
import { FastLoadWrapper } from "@/components/FastLoadWrapper";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Media = lazy(() => import("./pages/Media"));
const Studio = lazy(() => import("./pages/Studio"));
const Lab = lazy(() => import("./pages/Lab"));
const Team = lazy(() => import("./pages/Team"));
const Impressum = lazy(() => import("./pages/Impressum"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
  </div>
);

const App = () => {
  useEffect(() => {
    // Set document language for SEO
    document.documentElement.lang = 'de';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <FastLoadWrapper>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/media" element={<Media />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/team" element={<Team />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
          </FastLoadWrapper>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
