import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            About Homade
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Quiet Luxury, Timeless Comfort
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Homade is where understated sophistication meets serene comfort. Our
            philosophy embraces the beauty of simplicity, crafting homes that radiate
            quiet luxury and authenticity.
          </p>
          <p>
            Every corner of a home reflects moments, memories, and connections. At
            Homade, we help you create a space that is entirely your own — a place of
            comfort, beauty, and individuality, where each piece contributes to your
            unique narrative.
          </p>
          <p>
            Our mission is to design and manufacture furniture that invites both
            relaxation and conversation. We carefully select suppliers who share our
            vision of excellence, ensuring that every piece embodies the Homade
            spirit — combining craftsmanship, comfort, and elegance at every
            touchpoint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Instant Elegance</h3>
            <p className="text-muted-foreground">
              Quick delivery from our curated collection
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Custom Design</h3>
            <p className="text-muted-foreground">
              Bespoke pieces tailored to your vision
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Personal consultations for your perfect space
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
