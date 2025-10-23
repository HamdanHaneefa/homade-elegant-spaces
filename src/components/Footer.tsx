const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-wider mb-4">HOMADE</h3>
          <p className="text-primary-foreground/80 mb-8">
            Crafting spaces that feel like home
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#collections" className="hover:text-primary-foreground/70 transition-colors">
              Collections
            </a>
            <a href="#about" className="hover:text-primary-foreground/70 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary-foreground/70 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2025 Homade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
