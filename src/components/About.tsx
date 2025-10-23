import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gray-400 uppercase tracking-[0.3em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.3em' }}
          >
            ABOUT
          </h2>
        </motion.div>

        {/* About Memar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            ABOUT MEMAR
          </h3>
          
          <p 
            className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto mb-12"
            style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
          >
            MEMAR company is an architectural, interior design and engineer practices located in Dubai. Established in 2007, with experience in 
            more than 150 achievements world wide of commercial, governmental, hospitality and residential projects.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            VISION
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
            >
              Our unparalleled respectful, knowledgeable and honest service is prime reason our clients choose to continually do business with us.
              We would like to stress at this point that We are committed to bring your vision to life and to elicit enthusiastic emotive response.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <h3 
            className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            MISSION
          </h3>
          
          <p 
            className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto mb-16"
            style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
          >
            Seeking long term relationship with our clients, meeting their expectations, continuous team building with different backgrounds, 
            creating an extraordinary and innovative atmosphere.
          </p>

          {/* Start Project Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <Link to="/contact">
              <motion.button
                className="relative group px-12 py-4 border border-gray-300 bg-transparent text-gray-600 font-light tracking-[0.1em] overflow-hidden"
                style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.1em' }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Default Text */}
                <motion.span
                  className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full"
                  style={{ fontSize: '0.875rem' }}
                >
                  START PROJECT
                </motion.span>
                
                {/* Hover Text */}
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-black font-medium transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ fontSize: '0.875rem' }}
                >
                  CONTACT US
                </motion.span>

                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gray-100 -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
