import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
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
            CONTACT
          </h2>
          <p 
            className="text-gray-600 text-base leading-relaxed"
            style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.7' }}
          >
            Ready to transform your space?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h3 
              className="font-medium mb-2 text-black"
              style={{ fontFamily: 'Inter', fontWeight: 500 }}
            >
              Email
            </h3>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              hello@homade.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h3 
              className="font-medium mb-2 text-black"
              style={{ fontFamily: 'Inter', fontWeight: 500 }}
            >
              Phone
            </h3>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              +971 (4) 362-6821
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 
              className="font-medium mb-2 text-black"
              style={{ fontFamily: 'Inter', fontWeight: 500 }}
            >
              Visit Us
            </h3>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              Dubai, UAE
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center"
        >
          <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
