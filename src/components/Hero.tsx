import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
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
    subtitle: "EVERY DETAIL WILL BE DESIGNED AROUND WHAT MATTERS MOST TO YOU"
  }
];

const Hero = () => {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) contrast(1.0)' }}
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
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white/80 mb-6 leading-tight tracking-wide uppercase"
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
              className="text-xs md:text-sm lg:text-base text-white/70 mb-10 font-normal tracking-wide uppercase max-w-3xl mx-auto"
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
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-full"
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
