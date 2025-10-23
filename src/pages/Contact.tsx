import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    attachment: null as File | null,
  });

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachment: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-gray-400 uppercase tracking-[0.3em]"
              style={{ fontFamily: 'Inter', fontWeight: 300, letterSpacing: '0.3em' }}
            >
              CONTACT
            </h1>
            <p 
              className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.7' }}
            >
              Ready to transform your space? Contact us today for a consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gray-50 border-gray-200 h-full">
                <CardContent className="p-8">
                  <h2 
                    className="text-2xl font-medium mb-8 text-black tracking-wide"
                    style={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.05em' }}
                  >
                    Contacts
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Business Hours */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold text-black">MON-THU 10:00 - 22:00</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold text-black">FRI-SUN 10:00 - 00:00</span>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <a href="tel:+97143626821" className="text-black hover:text-gray-600 transition-colors">
                          +971 (4) 362-6821
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <a href="mailto:info@dantonehome.com" className="text-black hover:text-gray-600 transition-colors">
                          info@homade.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                        <div>
                          <p className="text-black font-medium">All showrooms Dantone</p>
                          <p className="text-gray-600 text-sm mt-1">Visit our premium showrooms</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-black font-medium mb-4">Follow us</p>
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 
                      className="text-2xl font-medium text-black tracking-wide"
                      style={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.05em' }}
                    >
                      Feedback
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label 
                        className="block text-sm font-medium text-gray-600 mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-gray-200 focus:border-black focus:ring-black"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label 
                        className="block text-sm font-medium text-gray-600 mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        Phone
                      </label>
                      <div className="flex">
                        <select className="border border-gray-200 rounded-l-md px-3 py-2 bg-gray-50 text-sm">
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                        </select>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex-1 rounded-l-none border-l-0 border-gray-200 focus:border-black focus:ring-black"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label 
                        className="block text-sm font-medium text-gray-600 mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        E-mail
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-gray-200 focus:border-black focus:ring-black"
                        required
                      />
                    </div>

                    {/* Comment Field */}
                    <div>
                      <label 
                        className="block text-sm font-medium text-gray-600 mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        Comment
                      </label>
                      <Textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border-gray-200 focus:border-black focus:ring-black resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Attachment Field */}
                    <div>
                      <label 
                        className="block text-sm font-medium text-gray-600 mb-2"
                        style={{ fontFamily: 'Inter', fontWeight: 500 }}
                      >
                        Attachment
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                          accept="image/*,.pdf,.doc,.docx"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer text-gray-600 hover:text-black transition-colors"
                        >
                          <span className="underline">Upload scan</span> or drag and drop here
                        </label>
                        {formData.attachment && (
                          <p className="text-sm text-black mt-2">{formData.attachment.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Privacy Policy */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={acceptPrivacy}
                        onChange={(e) => setAcceptPrivacy(e.target.checked)}
                        className="mt-1"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I understand and accept{" "}
                        <a href="#" className="text-black underline hover:no-underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-semibold"
                      disabled={!acceptPrivacy}
                    >
                      SEND
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
