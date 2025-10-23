import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/Logo.png";
import heroImage from "@/assets/hero-living.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  video: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "House That Feels Like Home: B2B Apartment Furnishing in Dubai",
    subtitle: "Creating spaces that inspire and comfort",
    image: heroImage,
    video: "https://videos.pexels.com/video-files/8199166/8199166-hd_1920_1080_25fps.mp4"
  },
  {
    id: 2,
    title: "Modern Living Spaces: Contemporary Design Solutions",
    subtitle: "Where functionality meets elegance",
    image: project1,
    video: "https://videos.pexels.com/video-files/8062270/8062270-hd_1920_1080_25fps.mp4"
  },
  {
    id: 3,
    title: "Luxury Interior Design: Premium Home Solutions",
    subtitle: "Crafted with precision and passion",
    image: project2,
    video: "https://videos.pexels.com/video-files/6069469/6069469-hd_1920_1080_25fps.mp4"
  },
  {
    id: 4,
    title: "Custom Furniture & Fitouts: Tailored to Perfection",
    subtitle: "Every detail designed for you",
    image: project3,
    video: "https://videos.pexels.com/video-files/8199134/8199134-hd_1920_1080_25fps.mp4"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {carouselData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: "100%" }}
            animate={{ 
              x: index === currentSlide ? "0%" : index < currentSlide ? "-100%" : "100%"
            }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="absolute inset-0"
            style={{
              display: index === currentSlide || Math.abs(index - currentSlide) === 1 || 
                      (currentSlide === 0 && index === carouselData.length - 1) || 
                      (currentSlide === carouselData.length - 1 && index === 0) ? 'block' : 'none'
            }}
          >
            <div className="relative w-full h-full">
              {!videoErrors[item.id] ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                  onError={() => {
                    setVideoErrors(prev => ({ ...prev, [item.id]: true }));
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src={logoImage} 
              alt="Homade Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </motion.div>

          {/* Dynamic Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="w-full"
              >
                <h1 
                  className="text-lg md:text-xl lg:text-2xl font-light text-white mb-3 leading-tight"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.3' }}
                >
                  {carouselData[currentSlide].title}
                </h1>
                <p 
                  className="text-sm md:text-base text-white/90 mb-6 font-light"
                  style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.01em' }}
                >
                  {carouselData[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 text-xs font-medium tracking-wider"
              asChild
            >
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>


    </section>
  );
};

export default Hero;
