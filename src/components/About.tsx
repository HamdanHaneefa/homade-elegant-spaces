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

        {/* About Company Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p 
            className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
          >
            Homade is a UAE-based interior design and custom furniture company specializing in premium interior fitout solutions. 
            We create handcrafted, customized furniture and complete interior transformations that reflect our clients' unique vision and lifestyle.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 
            className="text-2xl font-light text-black mb-6 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            VISION
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
            >
              To become the leading handcrafted furniture store in UAE and expand our presence to other countries, 
              creating exceptional customized interior solutions that transform spaces into personalized havens. 
              We are committed to bringing your vision to life with unparalleled craftsmanship and innovative design.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-2xl font-light text-black mb-6 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            MISSION
          </h3>
          
          <p 
            className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto mb-16"
            style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
          >
            To establish ourselves as the premier handcrafted furniture store and interior fitout specialist in UAE, 
            while strategically expanding to other countries. We are dedicated to building long-term relationships with our clients, 
            exceeding their expectations through customized solutions, and creating extraordinary spaces that reflect their unique style and needs.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            OUR FOUNDERS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Placeholder for founder image */}
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h4 
                  className="text-xl font-light text-black mb-2 tracking-wide"
                  style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
                >
                  John Doe
                </h4>
                <p 
                  className="text-gray-500 text-sm mb-4"
                  style={{ fontFamily: 'Inter', fontWeight: 300 }}
                >
                  Co-Founder & Creative Director
                </p>
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.6' }}
                >
                  With over 15 years of experience in interior design and furniture craftsmanship, 
                  John brings innovative vision and creative excellence to every project.
                </p>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Placeholder for founder image */}
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h4 
                  className="text-xl font-light text-black mb-2 tracking-wide"
                  style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
                >
                  Jane Smith
                </h4>
                <p 
                  className="text-gray-500 text-sm mb-4"
                  style={{ fontFamily: 'Inter', fontWeight: 300 }}
                >
                  Co-Founder & Operations Director
                </p>
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.6' }}
                >
                  Jane's expertise in project management and business operations ensures seamless execution 
                  and exceptional client service from concept to completion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="flex justify-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
