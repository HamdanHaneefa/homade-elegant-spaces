import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gray-400 uppercase tracking-[0.3em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.3em' }}
          >
            SERVICES
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 
              className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
            >
              EXECUTIVE SUMMARY
            </h3>
            <p 
              className="text-gray-600 text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
            >
              Homade was founded to provide comprehensive consultancy services for interior design, architecture, 
              landscaping, and custom furniture solutions. We trust that everything is in line with your requirement and scope.
            </p>
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
            >
              We would like to stress that we are committed to bringing your vision to life and creating enthusiastic 
              responses. Our passion for architecture and thorough understanding of details, materials, textures, and 
              function requirements leads us to create the most precise, elegant, and timely designs.
            </p>
          </div>
        </motion.div>

        {/* Dear Client Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 
            className="text-2xl font-light text-black mb-8 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            DEAR CLIENT
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
            >
              We are presenting these relevant documents to you in order that our company can have an opportunity to participate in your company's project. It would be highly appreciated if you share your valuable time to review our documents. Therefore, we can carry out your company's project with our best efforts.
            </p>
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
            >
              We guarantee you that our company will provide you with high quality of consultation services based on 10 years of various experiences with high technical skills and competent and talented personnel.
            </p>
          </div>
        </motion.div>

        {/* THIS IS WHAT WE DO Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h3 
            className="text-2xl font-light text-black mb-12 tracking-[0.2em]"
            style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
          >
            THIS IS WHAT WE DO . .
          </h3>
          
          {/* Desktop Layout - 3 Columns */}
          <div className="hidden md:grid grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            {[
              "Planning",
              "Architecture", 
              "Interior Design",
              "Landscape",
              "MEP Design",
              "Site Styling"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                className="border border-gray-300 py-6 px-8 bg-white text-center"
              >
                <h4 
                  className="text-sm font-normal text-gray-700"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - Single Column */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {[
              "Planning",
              "Architecture", 
              "Interior Design",
              "Landscape",
              "Exhibitions",
              "MEP Design",
              "Structural Design",
              "Site Styling"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                className="border border-gray-300 py-6 px-8 bg-white text-center"
              >
                <h4 
                  className="text-sm font-normal text-gray-700"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Services;
