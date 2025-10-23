import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ExploreServices = () => {
  const services = [
    {
      title: "Interior Fitout",
      description: "Complete interior transformation solutions",
      icon: "🏠"
    },
    {
      title: "Custom Furniture",
      description: "Bespoke pieces crafted for your space",
      icon: "🪑"
    },
    {
      title: "MEP Services",
      description: "Technical excellence in every detail",
      icon: "⚡"
    },
    {
      title: "Gypsum Work",
      description: "Professional ceiling and partition solutions",
      icon: "🏗️"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
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
          <p 
            className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed mt-8"
            style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.7' }}
          >
            Discover our comprehensive range of interior design and construction services 
            tailored to transform your space into something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 
                className="text-xl font-medium mb-3 text-black"
                style={{ fontFamily: 'Inter', fontWeight: 500 }}
              >
                {service.title}
              </h3>
              <p 
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.6' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-8 py-4"
            asChild
          >
            <Link to="/services">
              <span 
                className="font-medium tracking-wide"
                style={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.025em' }}
              >
                VIEW ALL SERVICES
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreServices;
