import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import faviconLogo from "@/assets/favicon_homade.png";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Decreased to 800ms for faster completion
          return 100;
        }
        return prevProgress + 3; // Faster progress: increased to +3
      });
    }, 40); // Faster interval: decreased to 40ms

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={faviconLogo}
          alt="Homade Logo"
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-8"
      >
        <h2 
          className="text-xl md:text-2xl font-light text-gray-800 tracking-[0.2em]"
          style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
        >
          HOMADE
        </h2>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-64 md:w-80 h-1 bg-gray-200 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-black rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Progress Percentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4"
      >
        <span 
          className="text-sm text-gray-500 font-light"
          style={{ fontFamily: 'Inter', fontWeight: 300 }}
        >
          {progress}%
        </span>
      </motion.div>

      {/* Animated Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex space-x-1 mt-6"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;
