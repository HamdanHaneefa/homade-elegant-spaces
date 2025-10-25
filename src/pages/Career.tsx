import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resumeFile: null as File | null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'portfolio') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [type === 'resume' ? 'resumeFile' : 'portfolioFile']: file
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gray-400 uppercase tracking-[0.3em]"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.3em' }}
            >
              CAREER
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 
                className="text-2xl font-light text-black mb-6 tracking-[0.2em]"
                style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.2em' }}
              >
                JOIN THE HOMADE FAMILY!
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-4">
                <p 
                  className="text-gray-600 text-base leading-relaxed"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
                >
                  We are building a team of passionate, curious, mission-focused people who are always seeking for new challenges.
                </p>
                <p 
                  className="text-gray-600 text-base leading-relaxed"
                  style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.8' }}
                >
                  Working with Homade is based on creative thinking, teamwork, and continuous growth. A place where you can fulfil your big dreams!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border border-slate-200 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-normal text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter', fontWeight: 400 }}
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors"
                    style={{ fontFamily: 'Inter', fontWeight: 400 }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-normal text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter', fontWeight: 400 }}
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors"
                    style={{ fontFamily: 'Inter', fontWeight: 400 }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label 
                  className="block text-sm font-normal text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                />
              </div>

              {/* Phone */}
              <div>
                <label 
                  className="block text-sm font-normal text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                />
              </div>

              {/* Resume */}
              <div>
                <label 
                  className="block text-sm font-normal text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'resume')}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                />
              </div>

              {/* Message */}
              <div>
                <label 
                  className="block text-sm font-normal text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Brief message about your interest..."
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors resize-vertical"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-16 py-4 bg-slate-800 text-white font-light tracking-[0.1em] hover:bg-slate-900 transition-all duration-300 border border-slate-800 hover:border-slate-900"
                  style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.1em' }}
                >
                  SUBMIT
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
