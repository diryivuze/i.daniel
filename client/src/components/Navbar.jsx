import React, { useState, useEffect } from 'react';
import { Camera, Home, Briefcase, FolderKanban, Mail, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('/');

  const navLinks = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/projects", icon: FolderKanban, label: "Projects" },
    { to: "/contact", icon: Mail, label: "Contact" }
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed w-full transition-all duration-300 ease-in-out ${
        visible ? 'top-0' : '-top-20'
      } left-0 right-0 z-50 bg-orange-900 text-white shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href='/'>

             <img src='../images/logowhite.png' className='w-full h-24 transition-colors duration-300 '/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === link.to 
                    ? 'bg-orange-800 text-white' 
                    : 'hover:bg-orange-800/50'
                }`}
                onClick={() => setActiveSection(link.to)}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-orange-800 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === link.to 
                    ? 'bg-orange-800 text-white' 
                    : 'hover:bg-orange-800/50'
                }`}
                onClick={() => {
                  setActiveSection(link.to);
                  setIsMenuOpen(false);
                }}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
