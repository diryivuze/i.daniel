import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Send, 
  MapPin, 
  FileText 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Submitted:', formData);
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/yourusername' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourusername' 
    },
    { 
      icon: Mail, 
      label: 'Email Me', 
      href: 'mailto:example@email.com' 
    },
    { 
      icon: MapPin, 
      label: 'Find Me on Map', 
      href: 'https://www.google.com/maps' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white rounded-xl mt-10 shadow-lg p-6 sm:p-12"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-2 sm:mb-10 text-orange-900 uppercase flex items-center">
          <Send className="mr-3 text-orange-700" /> Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {field === 'name' ? 'Full Name' : 'Email Address'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-3 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm sm:text-base"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 h-24 sm:h-32 text-sm sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition duration-300 text-sm sm:text-base"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm sm:text-base text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <Icon size={20} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="flex items-center gap-3 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <FileText size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;