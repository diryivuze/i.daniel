import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Simulated newsletter subscription
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 p-8 text-white transition-all duration-300 ease-in-out">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 transform hover:scale-105 transition duration-300">
            Daniel Iryivuze
          </h3>
          <p className="text-sm mb-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm">Designed and built by diryivuze</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubscribe} className="w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 rounded mb-4 text-gray-900 focus:ring-2 focus:ring-orange-500 transition duration-300"
              required
            />
            <button
              type="submit"
              className={`w-full ${
                subscribed 
                  ? 'bg-green-600 cursor-not-allowed' 
                  : 'bg-orange-900 hover:bg-orange-700'
              } text-white py-2 px-4 rounded transition duration-300`}
              disabled={subscribed}
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
          <div className="flex space-x-4">
            {[
              { 
                Icon: FaLinkedin, 
                href: "https://linkedin.com/in/danieliryivuze", 
                hoverColor: "hover:text-blue-500",
                ariaLabel: "LinkedIn"
              },
              { 
                Icon: FaGithub, 
                href: "https://github.com/danieliryivuze", 
                hoverColor: "hover:text-gray-500",
                ariaLabel: "GitHub"
              },
              { 
                Icon: FaTwitter, 
                href: "https://twitter.com/danieliryivuze", 
                hoverColor: "hover:text-blue-400",
                ariaLabel: "Twitter"
              }
            ].map(({ Icon, href, hoverColor, ariaLabel }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${hoverColor} transition duration-300 transform hover:scale-110`}
                aria-label={ariaLabel}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-75 animate-pulse">
        <p>Built with passion | By Daniel Iryivuze</p>
      </div>
    </footer>
  );
};

export default Footer;