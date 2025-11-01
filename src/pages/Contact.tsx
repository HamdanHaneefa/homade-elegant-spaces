import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ChevronDown, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState("+971");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Country codes data
  const countries = [
    { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
    { code: "+355", flag: "🇦🇱", name: "Albania" },
    { code: "+213", flag: "🇩🇿", name: "Algeria" },
    { code: "+376", flag: "🇦🇩", name: "Andorra" },
    { code: "+244", flag: "🇦🇴", name: "Angola" },
    { code: "+54", flag: "🇦🇷", name: "Argentina" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+43", flag: "🇦🇹", name: "Austria" },
    { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
    { code: "+973", flag: "🇧🇭", name: "Bahrain" },
    { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+32", flag: "🇧🇪", name: "Belgium" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+1", flag: "🇨🇦", name: "Canada" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+45", flag: "🇩🇰", name: "Denmark" },
    { code: "+20", flag: "🇪🇬", name: "Egypt" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+62", flag: "🇮🇩", name: "Indonesia" },
    { code: "+98", flag: "🇮🇷", name: "Iran" },
    { code: "+964", flag: "🇮🇶", name: "Iraq" },
    { code: "+39", flag: "🇮🇹", name: "Italy" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+962", flag: "🇯🇴", name: "Jordan" },
    { code: "+965", flag: "🇰🇼", name: "Kuwait" },
    { code: "+961", flag: "🇱🇧", name: "Lebanon" },
    { code: "+60", flag: "🇲🇾", name: "Malaysia" },
    { code: "+52", flag: "🇲🇽", name: "Mexico" },
    { code: "+31", flag: "🇳🇱", name: "Netherlands" },
    { code: "+64", flag: "🇳🇿", name: "New Zealand" },
    { code: "+47", flag: "🇳🇴", name: "Norway" },
    { code: "+968", flag: "🇴🇲", name: "Oman" },
    { code: "+92", flag: "🇵🇰", name: "Pakistan" },
    { code: "+63", flag: "🇵🇭", name: "Philippines" },
    { code: "+48", flag: "🇵🇱", name: "Poland" },
    { code: "+974", flag: "🇶🇦", name: "Qatar" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" },
    { code: "+27", flag: "🇿🇦", name: "South Africa" },
    { code: "+82", flag: "🇰🇷", name: "South Korea" },
    { code: "+34", flag: "🇪🇸", name: "Spain" },
    { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+46", flag: "🇸🇪", name: "Sweden" },
    { code: "+41", flag: "🇨🇭", name: "Switzerland" },
    { code: "+66", flag: "🇹🇭", name: "Thailand" },
    { code: "+90", flag: "🇹🇷", name: "Turkey" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  ];

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  const selectedCountry = countries.find(country => country.code === selectedCountryCode);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message template
    const whatsappNumber = "971569677882"; // Homade's WhatsApp number
    const message = `Hello Homade Team,

I would like to inquire about your services.

*Contact Details:*
Name: ${formData.name}
Phone: ${selectedCountryCode}${formData.phone}
Email: ${formData.email}

*Message:*
${formData.comment || "I'm interested in learning more about your interior design services."}

Looking forward to hearing from you.

Best regards,
${formData.name}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
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
              style={{ fontFamily: 'Inter', fontWeight: 300, lineHeight: '1.7' }}
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
                      <div className="flex relative">
                        <div className="relative">
                          <button
                            type="button"
                            className="border border-gray-200 rounded-l-md px-3 py-2 bg-gray-50 text-sm flex items-center space-x-2 min-w-[80px]"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <span>{selectedCountry?.flag}</span>
                            <span>{selectedCountryCode}</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          
                          {isDropdownOpen && (
                            <div className="absolute top-full left-0 z-50 w-80 bg-white border border-gray-200 rounded-md shadow-lg max-h-64 overflow-hidden">
                              <div className="p-2 border-b border-gray-200">
                                <div className="relative">
                                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search countries..."
                                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-black"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="max-h-48 overflow-y-auto">
                                {filteredCountries.map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-sm"
                                    onClick={() => {
                                      setSelectedCountryCode(country.code);
                                      setIsDropdownOpen(false);
                                      setSearchTerm("");
                                    }}
                                  >
                                    <span>{country.flag}</span>
                                    <span>{country.code}</span>
                                    <span className="text-gray-600">{country.name}</span>
                                  </button>
                                ))}
                                {filteredCountries.length === 0 && (
                                  <div className="px-4 py-2 text-sm text-gray-500">
                                    No countries found
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
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
