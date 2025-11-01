import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface ResumeDetails {
  name?: string;
  email?: string;
  phone?: string;
  skills?: string[];
  experience?: string[];
  education?: string[];
  summary?: string;
}

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

  const [resumeDetails, setResumeDetails] = useState<ResumeDetails | null>(null);
  const [isParsingResume, setIsParsingResume] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to parse resume using Eden AI API
  const parseResume = async (file: File) => {
    setIsParsingResume(true);
    try {
      const formData = new FormData();
      formData.append('files', file);
      formData.append('providers', 'extracta');
      formData.append('fallback_providers', 'affinda');
      
      // Using Eden AI Resume Parser API
      const response = await fetch('https://api.edenai.run/v2/ocr/resume_parser', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMGI5ZGYxNjktZjNmOC00YTIyLWI0ZjAtN2JkYTMzZDNiNjIyIiwidHlwZSI6ImFwaV90b2tlbiJ9.bt8XMnHjFNBAnzg6PSfpmvJrfIDm4_UfSOTBCm06YJs'
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // For debugging
        
        // Process Eden AI response
        const provider = data.extracta || data.affinda || {};
        const extractedDetails: ResumeDetails = {
          name: provider.personal_infos?.name?.raw_name || `${formData.firstName} ${formData.lastName}` || 'Name not found',
          email: provider.personal_infos?.emails?.[0] || formData.email || 'Email not found',
          phone: provider.personal_infos?.phones?.[0] || formData.phone || 'Phone not found',
          skills: provider.skills?.map((skill: any) => skill.name || skill) || [],
          experience: provider.work_experience?.map((exp: any) => 
            `${exp.title || 'Position'} at ${exp.company || 'Company'} (${exp.start_date || 'Start'} - ${exp.end_date || 'End'})`
          ) || [],
          education: provider.education?.map((edu: any) => 
            `${edu.title || edu.degree || 'Degree'} - ${edu.school || 'Institution'} (${edu.end_date || 'Year'})`
          ) || [],
          summary: provider.summary || 'Professional summary not available'
        };
        
        setResumeDetails(extractedDetails);
        
        toast({
          title: "Resume Parsed Successfully!",
          description: "Resume details have been extracted and will be included in your application.",
        });
      } else {
        throw new Error(`API Error: ${response.status}`);
      }



    } catch (error) {
      console.error('Resume parsing error:', error);
      toast({
        title: "Resume Parsing Failed",
        description: "Don't worry, your application will still be sent with the original resume file.",
        variant: "destructive"
      });
    } finally {
      setIsParsingResume(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'portfolio') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [type === 'resume' ? 'resumeFile' : 'portfolioFile']: file
    }));

    // Parse resume if file is uploaded
    if (file && type === 'resume') {
      parseResume(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create enhanced WhatsApp message template with parsed resume details
    const whatsappNumber = "971569677882"; // Homade's WhatsApp number
    
    let message = `Hello Homade Team,

I would like to apply for a position at Homade.

*Applicant Details:*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // Add parsed resume details if available
    if (resumeDetails) {
      message += `

*Resume Analysis (Auto-extracted):*`;
      
      if (resumeDetails.skills && resumeDetails.skills.length > 0) {
        message += `
Skills: ${resumeDetails.skills.join(', ')}`;
      }
      
      if (resumeDetails.experience && resumeDetails.experience.length > 0) {
        message += `
Experience: ${resumeDetails.experience.slice(0, 3).join('; ')}`;
      }
      
      if (resumeDetails.education && resumeDetails.education.length > 0) {
        message += `
Education: ${resumeDetails.education.join('; ')}`;
      }
      
      if (resumeDetails.summary) {
        message += `
Professional Summary: ${resumeDetails.summary.substring(0, 200)}...`;
      }
    }

    message += `

*Message:*
${formData.message || "I am interested in joining the Homade family and contributing to your team."}

*Resume File:*
${formData.resumeFile ? `I have attached my resume file: ${formData.resumeFile.name}` : "I will attach my resume to this chat."}

Looking forward to hearing from you about career opportunities.

Best regards,
${formData.firstName} ${formData.lastName}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success toast
    toast({
      title: "Opening WhatsApp!",
      description: resumeDetails 
        ? "Your application with parsed resume details will be sent!" 
        : "Your application details will be sent. Please attach your resume in the chat.",
    });
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
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
                  disabled={isParsingResume}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:border-slate-500 transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 disabled:opacity-50"
                  style={{ fontFamily: 'Inter', fontWeight: 400 }}
                />
                
                {/* Parsing Status */}
                {isParsingResume && (
                  <div className="flex items-center mt-2 text-blue-600">
                    <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></div>
                    <span className="text-xs" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
                      Parsing resume details...
                    </span>
                  </div>
                )}
                
                {/* Parsed Details Success */}
                {resumeDetails && !isParsingResume && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded">
                    <p className="text-xs text-green-700 font-medium mb-1" style={{ fontFamily: 'Inter' }}>
                      ✓ Resume parsed successfully! Details extracted:
                    </p>
                    <div className="text-xs text-green-600" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
                      {resumeDetails.skills && resumeDetails.skills.length > 0 && (
                        <div>Skills: {resumeDetails.skills.slice(0, 3).join(', ')}{resumeDetails.skills.length > 3 ? '...' : ''}</div>
                      )}
                      {resumeDetails.experience && resumeDetails.experience.length > 0 && (
                        <div>Experience: {resumeDetails.experience.length} entries found</div>
                      )}
                      {resumeDetails.education && resumeDetails.education.length > 0 && (
                        <div>Education: {resumeDetails.education.length} entries found</div>
                      )}
                    </div>
                  </div>
                )}
                
                <p 
                  className="text-xs text-gray-500 mt-1"
                  style={{ fontFamily: 'Inter', fontWeight: 300 }}
                >
                  Resume will be automatically analyzed and details included in your application. You'll also need to attach the file in WhatsApp.
                </p>
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
                  APPLY VIA WHATSAPP
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
