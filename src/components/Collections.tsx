import { motion } from "framer-motion";
import bedroomImage from "@/assets/collection-bedroom.jpg";
import diningImage from "@/assets/collection-dining.jpg";
import outdoorImage from "@/assets/collection-outdoor.jpg";

const collections = [
  {
    title: "Interior Fitout",
    image: bedroomImage,
    description: "Complete interior transformation solutions",
  },
  {
    title: "Custom Furniture",
    image: diningImage,
    description: "Bespoke pieces crafted for your space",
  },
  {
    title: "Premium Finishes",
    image: outdoorImage,
    description: "Glass work and elegant installations",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive interior design and construction services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={collection.image}
                  alt={`${collection.title} collection`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-primary"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">
                {collection.title}
              </h3>
              <p className="text-muted-foreground">{collection.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
