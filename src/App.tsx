
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme-provider";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const OptimizedServices = lazy(() => import("./components/OptimizedServices"));
const OptimizedMedia = lazy(() => import("./components/OptimizedMedia"));
const OptimizedStudio = lazy(() => import("./components/OptimizedStudio"));
const OptimizedLab = lazy(() => import("./components/OptimizedLab"));
const Impressum = lazy(() => import("./pages/Impressum"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark" storageKey="new-edge-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<OptimizedServices />} />
                <Route path="/media" element={<OptimizedMedia />} />
                <Route path="/studio" element={<OptimizedStudio />} />
                <Route path="/lab" element={<OptimizedLab />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
