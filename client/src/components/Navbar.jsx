import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/experience", icon: FaBriefcase, label: "Experience" },
    { to: "/projects", icon: FaProjectDiagram, label: "Projects" },
    { to: "/contact", icon: FaEnvelope, label: "Contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-900 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="transition-transform duration-300 hover:scale-105">
            Daniel Iryivuze
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to} className="group">
              <Link 
                to={link.to} 
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors duration-300"
              >
                <link.icon className="text-lg group-hover:animate-bounce" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-orange-900 shadow-lg">
            <ul className="flex flex-col  space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.to} className="group w-full text-center">
                  <Link 
                    to={link.to} 
                    className="flex justify-center  space-x-2 hover:text-gray-200 transition-colors duration-300 py-2"
                    onClick={toggleMenu}
                  >
                    <link.icon className="text-lg group-hover:animate-bounce" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;