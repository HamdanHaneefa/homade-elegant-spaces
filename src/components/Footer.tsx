import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Homade Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 mb-8 font-light text-sm leading-relaxed"
            style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium Interior Design & Architecture Solutions in Dubai<br />
            Transforming spaces with precision and passion
          </motion.p>
          
          {/* Navigation Links */}
          <motion.div 
            className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/projects" 
              className="hover:text-gray-300 transition-colors font-light tracking-wide"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className="hover:text-gray-300 transition-colors font-light tracking-wide"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="hover:text-gray-300 transition-colors font-light tracking-wide"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-gray-300 transition-colors font-light tracking-wide"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
            >
              Contact
            </Link>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://www.instagram.com/homade.concept?igsh=MXB2NGdkdDAzc2wxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#" // Add LinkedIn link when available
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#" // Add Facebook link when available
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 font-light"
            style={{ fontFamily: 'Inter', fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2025 Homade. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
