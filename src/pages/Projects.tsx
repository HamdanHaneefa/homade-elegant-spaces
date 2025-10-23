import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential",
    image: project1,
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    category: "Residential",
    image: project2,
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Residential",
    image: project3,
  },
  {
    id: 4,
    title: "Executive Office",
    category: "Commercial",
    image: project4,
  },
  {
    id: 5,
    title: "Elegant Dining Room",
    category: "Mixed-Use",
    image: project5,
  },
  {
    id: 6,
    title: "Spa Bathroom",
    category: "Residential",
    image: project6,
  },
];

const categories = ["All", "Residential", "Commercial", "Mixed-Use"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gray-400 uppercase tracking-[0.3em]"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.3em' }}
            >
              PROJECTS
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-black border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
                style={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="text-center text-white">
                      <h3 
                        className="text-2xl font-medium mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-sm tracking-wider"
                        style={{ fontFamily: 'Inter', fontWeight: 400, letterSpacing: '0.05em' }}
                      >
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
