import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your interior design services. Could you please provide more information about your offerings?"
    );
    const phoneNumber = "971501234567"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      {/* Help text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          x: isHovered ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap"
      >
        <p 
          className="text-sm text-gray-700 font-light"
          style={{ fontFamily: 'Inter', fontWeight: 300 }}
        >
          Need Help? How may I help you
        </p>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 8px 25px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        style={{ 
          boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FloatingWhatsApp;
