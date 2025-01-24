import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const AllProjects = () => {
    const allProjects = [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        images: ["/api/placeholder/400/300", "/api/placeholder/400/301"],
        tools: ["React", "Node.js", "MongoDB"],
        date: "January 2023",
        link: "#",
        howItWorks: "The platform allows users to browse products, add them to the cart, and checkout with a secure payment gateway."
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 mt-16 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-900 uppercase mb-8 sm:mb-10 flex items-center">
            <GitBranch className="mr-3 text-orange-700" /> All Projects
          </h1>
          {allProjects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-12 sm:mb-16 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="lg:w-1/2">
                <div className="relative w-full h-48 sm:h-64 overflow-hidden">
                  {project.images.map((image, i) => (
                    <motion.img
                      key={i}
                      src={image}
                      alt={`Slide ${i}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-orange-900 mb-3 sm:mb-4">{project.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  <strong>How it works:</strong> {project.howItWorks}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Completed: {project.date}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-800 transition text-sm sm:text-base"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Final Design
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
export default AllProjects;