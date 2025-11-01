import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Loader from "@/components/Loader";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import CareerPage from "./pages/Career";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Preload video
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = '/src/assets/banner_video.mp4';
        
        // Preload critical images
        const images = [
          '/src/assets/favicon_homade.png',
          '/src/assets/Logo.png',
          '/src/assets/hero-living.jpg'
        ];

        const imagePromises = images.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Don't fail if image doesn't load
            img.src = src;
          });
        });

        // Wait for video metadata and images
        await Promise.all([
          new Promise(resolve => {
            video.addEventListener('loadedmetadata', resolve);
            video.addEventListener('error', resolve); // Don't fail if video doesn't load
          }),
          ...imagePromises
        ]);

        setAssetsLoaded(true);
      } catch (error) {
        console.warn('Some assets failed to preload:', error);
        setAssetsLoaded(true); // Continue anyway
      }
    };

    preloadAssets();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <BrowserRouter key="app">
              <ScrollToTop />
              <FloatingWhatsApp />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
