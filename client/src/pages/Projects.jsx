import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code,
  Smartphone, 
  Palette 
} from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const projects = {
    web: [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        image: "/api/placeholder/400/300",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        date: "January 2023"
      },
    ],
    mobile: [
      {
        title: "Fitness Tracking App",
        description: "Mobile app for tracking workouts and nutrition",
        image: "/api/placeholder/400/300",
        technologies: ["Flutter", "Firebase"],
        link: "#",
        date: "March 2023"
      },
    ],
    graphics: [
      {
        title: "Brand Identity Design",
        description: "Complete brand identity package for a startup",
        image: "/api/placeholder/400/300",
        technologies: ["Figma", "Photoshop"],
        link: "#",
        date: "February 2023"
      },
    ]
  };

  const tabIcons = {
    web: <Code className="mr-2 w-5 h-5" />,
    mobile: <Smartphone className="mr-2 w-5 h-5" />,
    graphics: <Palette className="mr-2 w-5 h-5" />
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16 text-gray-900 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-900 uppercase">My Projects</h1>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {['web', 'mobile', 'graphics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition shadow-sm text-sm sm:text-base ${
                activeTab === tab
                  ? 'bg-orange-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tabIcons[tab]}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects[activeTab].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-900">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Completed: {project.date}</p>
                <a
                  href="/all-projects"
                  className="inline-block px-3 sm:px-4 py-2 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-800 transition text-sm sm:text-base"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="/all-projects"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-800 transition text-sm sm:text-base flex items-center justify-center mx-auto w-fit"
          >
            View All Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;