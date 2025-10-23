import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    category: "Interior Fitout",
    badge: "Complete Solutions",
    description: "Transform your space with our comprehensive interior fitout services",
    services: [
      "TV Units & Entertainment Centers",
      "Custom Wardrobes & Closets",
      "Bedroom Furniture Sets",
      "Laundry Cabinets & Storage",
      "Modular Kitchen Design",
      "Kids Bedroom Sets",
      "Dressing Tables & Vanities"
    ],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    color: "bg-gray-50 border-gray-200"
  },
  {
    category: "Custom Made Furniture",
    badge: "Bespoke Design",
    description: "Handcrafted furniture pieces designed specifically for your space",
    services: [
      "Console Tables",
      "Coffee Tables & Side Tables",
      "Dining Tables & Chairs",
      "Custom Sofas & Seating",
      "Office Desks & Workstations",
      "Reception Desks",
      "Retail Kiosks & Displays"
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-white border-gray-300"
  },
  {
    category: "Mirror & Glass Work",
    badge: "Premium Finishes",
    description: "Elegant mirror and glass installations that add sophistication",
    services: [
      "Custom Mirror Installations",
      "Glass Partitions",
      "Decorative Glass Panels",
      "Mirror Backsplashes",
      "Glass Shelving Systems",
      "Shower Glass Enclosures",
      "Glass Doors & Windows"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    color: "bg-gray-100 border-gray-300"
  },
  {
    category: "MEP Services",
    badge: "Technical Excellence",
    description: "Complete mechanical, electrical, and plumbing solutions",
    services: [
      "Tile Installation & Design",
      "Electrical Systems & Wiring",
      "Plumbing & Water Systems",
      "Demolition & Site Preparation",
      "HVAC Installation",
      "Lighting Design & Setup",
      "Smart Home Integration"
    ],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    color: "bg-gray-50 border-gray-200"
  },
  {
    category: "Gypsum Work",
    badge: "Structural Design",
    description: "Professional gypsum solutions for modern interiors",
    services: [
      "False Ceiling Design",
      "Partition Walls",
      "Decorative Ceiling Features",
      "Gypsum Board Installation",
      "Acoustic Ceiling Solutions",
      "LED Integration in Ceilings",
      "Custom Architectural Features"
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-white border-gray-300"
  }
];

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
              className="text-xl font-medium mb-6 text-black tracking-wide"
              style={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              EXECUTIVE SUMMARY
            </h3>
            <p 
              className="text-gray-600 text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
            >
              Homade was founded to provide comprehensive consultancy services for interior design, architecture, 
              landscaping, and custom furniture solutions. We trust that everything is in line with your requirement and scope.
            </p>
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
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
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
            >
              We are presenting these relevant documents to you in order that our company can have an opportunity to participate in your company's project. It would be highly appreciated if you share your valuable time to review our documents. Therefore, we can carry out your company's project with our best efforts.
            </p>
            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8' }}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="border border-gray-300 p-4 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer group"
              >
                <h4 
                  className="text-sm font-normal text-gray-700 tracking-wide text-center group-hover:text-black transition-colors duration-300"
                  style={{ fontFamily: 'Inter', fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group"
              >
                <Card className="overflow-hidden bg-white border-0 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:border-gray-200">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`lg:col-span-2 p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''} flex flex-col justify-center`}>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="mb-6">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="mb-4 px-4 py-1 text-xs font-light border-gray-300 text-gray-600 bg-transparent"
                                style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.1em' }}
                              >
                                {service.badge}
                              </Badge>
                            </motion.div>
                            
                            <motion.h3 
                              className="text-2xl md:text-3xl font-light mb-4 text-black tracking-wide leading-tight"
                              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.02em' }}
                              whileHover={{ 
                                letterSpacing: '0.04em',
                                transition: { duration: 0.3 }
                              }}
                            >
                              {service.category}
                            </motion.h3>
                            
                            <motion.p 
                              className="text-gray-500 text-base mb-6 leading-relaxed font-light"
                              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.7' }}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                            >
                              {service.description}
                            </motion.p>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 
                              className="text-base font-light mb-4 text-black tracking-wide"
                              style={{ fontFamily: 'Inter', fontWeight: 400, letterSpacing: '0.05em' }}
                            >
                              Our Services Include:
                            </h4>
                            
                            <div className="grid grid-cols-1 gap-2">
                              {service.services.map((item, itemIndex) => (
                                <motion.div
                                  key={item}
                                  initial={{ opacity: 0, x: -30 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ 
                                    duration: 0.5, 
                                    delay: 0.5 + (itemIndex * 0.1),
                                    type: "spring",
                                    stiffness: 80
                                  }}
                                  whileHover={{ 
                                    x: 5,
                                    transition: { duration: 0.2 }
                                  }}
                                  className="flex items-center space-x-3 group/item py-1"
                                >
                                  <motion.div 
                                    className="w-1 h-1 bg-black rounded-full flex-shrink-0"
                                    whileHover={{ 
                                      scale: 1.5,
                                      backgroundColor: "#6b7280"
                                    }}
                                    transition={{ duration: 0.2 }}
                                  />
                                  <span 
                                    className="text-sm font-light text-gray-600 group-hover/item:text-black transition-colors duration-300"
                                    style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.02em' }}
                                  >
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className={`lg:col-span-1 relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} overflow-hidden`}>
                        <motion.div
                          className="relative w-full h-full"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <img
                            src={service.image}
                            alt={`${service.category} services`}
                            className="w-full h-full object-cover min-h-[300px] lg:min-h-[350px] transition-all duration-700 group-hover:scale-105"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                            initial={{ opacity: 0.3 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.4 }}
                          />
                          
                          {/* Subtle overlay animation */}
                          <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 0.1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-24"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <Card className="bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-16">
                <motion.h3 
                  className="text-3xl font-light mb-6 text-black tracking-wide"
                  style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.05em' }}
                  whileHover={{ 
                    letterSpacing: '0.1em',
                    transition: { duration: 0.3 }
                  }}
                >
                  Ready to Transform Your Space?
                </motion.h3>
                <p 
                  className="text-lg mb-8 text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
                >
                  Let's discuss your project and bring your vision to life with our comprehensive design and construction services.
                </p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    letterSpacing: '0.1em'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-12 py-4 font-light hover:bg-gray-800 transition-all duration-300 tracking-wide border border-black hover:border-gray-800"
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '0.875rem', letterSpacing: '0.1em' }}
                >
                  GET FREE CONSULTATION
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
