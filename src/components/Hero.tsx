import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-living.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroImage}
          alt="Modern minimalist living room with grey sofa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight mb-6"
        >
          HOMADE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto tracking-wide"
        >
          Crafting spaces that feel like home
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#collections">Explore Collections</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
