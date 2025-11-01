import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logoImage from "@/assets/Logo.png";
import bannerVideo from "@/assets/banner_video.mp4";

interface TextContent {
  id: number;
  title: string;
  subtitle: string;
}

const textContent: TextContent[] = [
  {
    id: 1,
    title: "CRAFTING EXTRAORDINARY INTERIOR DESIGNS?",
    subtitle: "Every detail will be designed around what matters most to you"
  }
];

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Preload video
      video.preload = "metadata";
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };

      const handleError = () => {
        setVideoError(true);
        setVideoLoaded(true); // Show fallback
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Video Loading Skeleton */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
            </div>
          )}
          
          {/* Fallback Background for Video Error */}
          {videoError && (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/src/assets/hero-living.jpg')`,
                filter: 'brightness(0.5) contrast(1.0)' 
              }}
            />
          )}

          {/* Video Element */}
          <video
            ref={videoRef}
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'brightness(0.5) contrast(1.0)' }}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true);
              setVideoLoaded(true);
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <img 
              src={logoImage} 
              alt="Homade Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto mx-auto opacity-95"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h1 
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white/80 mb-6 leading-tight tracking-wide"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                lineHeight: '1.3',
                letterSpacing: '0.02em'
              }}
            >
              {textContent[0].title}
            </h1>
            
            <motion.p 
              className="text-xs md:text-sm lg:text-base text-white/70 mb-10 font-normal tracking-wide max-w-3xl mx-auto"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                letterSpacing: '0.08em',
                lineHeight: '1.5'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {textContent[0].subtitle}
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              size="sm" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-full"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                letterSpacing: '0.15em'
              }}
              asChild
            >
              <Link to="/contact">Let's get started!</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
