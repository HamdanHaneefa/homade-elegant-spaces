import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "@/assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg"
        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center z-[60]">
              <img 
                src={logoImage} 
                alt="Homade Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                                (link.href.startsWith("/#") && location.pathname === "/" && location.hash === link.href.substring(1));
                
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link transition-colors duration-300 relative font-light tracking-wide ${
                      isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
                    }`}
                    style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-900 hover:bg-gray-100 z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[45] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[55] md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src={logoImage} 
                    alt="Homade Logo" 
                    className="h-10 w-auto"
                  />
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.2
                      }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => {
                          handleNavClick(link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block py-4 px-4 text-lg font-light rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-gray-100 text-gray-900 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                        style={{ fontFamily: 'Inter', letterSpacing: '0.05em' }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Optional Footer Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600 text-center font-light">
                  House That Feels Like Home
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;