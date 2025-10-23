import { Button } from "./ui/button";
import heroImage from "@/assets/hero-living.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern minimalist living room with grey sofa"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight mb-6">
          HOMADE
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto tracking-wide">
          Crafting spaces that feel like home
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#collections">Explore Collections</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
