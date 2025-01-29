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
        title: "OAK Investments Limited",
        description: "OAK Investments Limited is a Rwandan service provider dedicated to promoting environmental sustainability.",
        images: "../images/oaks.JPG",
        tools: ["React JS", "Tailwind CSS", "FastAPI"],
        link: "/all-projects",
        date: "January 2025",
      },
      {
        title: "Artistry Hub Rwanda",
        description: "Artistry Hub Rwanda is a digital marketplace and platform designed to promote and support Rwandan artists.",
        images: "../images/art.JPG",
        tools: ["React JS", "Tailwind CSS", "Django"],
        link: "/all-projects",
        date: "December 2024",
      },
      {
        title: "B&D Cars",
        description: "B&D Cars is a leading Rwandan dealership that specializes in selling new and used cars.",
        images: "../images/bd.JPG",
        tools: ["React JS", "Tailwind CSS", "Django"],
        link: "/all-projects",
        date: "December 2024",
      },
      {
        title: "Confi Store",
        description: "Confi Store is an online platform that provides a wide selection of educational resources, including books, e-books, and online courses.",
        images: "../images/confi.JPG",
        tools: ["React JS", "Tailwind CSS", "FastAPI"],
        link: "/all-projects",
        date: "December 2024",
      },
      {
        title: "IgaThrive Platform",
        description: "IgaThrive is an innovative EduTech platform designed to enhance the learning experience for students in Rwanda and beyond. ",
        images: "../images/iga.JPG",
        tools: ["React JS", "Tailwind CSS", "Flask"],
        link: "/all-projects",
        date: "November 2024",
      },
      {
        title: "Ozone Inventory System",
        description: "Ozone Inventory System is a comprehensive tool for businesses to manage their inventory efficiently. ",
        images: "../images/oz.JPG",
        tools: ["React JS", "Tailwind CSS", "FastAPI"],
        link: "/all-projects",
        date: "Ocyober 2024",
      }
    ],
    mobile: [
      // {
      //   title: "Simple To-Do List",
      //   description: "A beginner-friendly mobile app that helps users create, organize, and manage their daily tasks. The app focuses on simplicity and ease of use for anyone looking to stay organized.",
      //   images: "/api/placeholder/400/300",
      //   tools: ["Flutter", "Firebase"],
      //   link: "/all-projects",
      //   date: "Not yet",
      //   Howitworks: "Users can add tasks by typing them into a simple input field and mark them as complete by tapping a checkbox. Tasks are stored in Firebase's Firestore, so they can be accessed across multiple devices. With its clean interface and straightforward functionality, the app is perfect for beginners exploring mobile app development."
      // },
      // {
      //   title: "Weather Info App",
      //   description: "A lightweight mobile app that displays current weather information for any location. This app is an ideal project for beginners to learn about working with APIs and displaying data dynamically.",
      //   images: "/api/placeholder/400/300",
      //   tools: ["Flutter", "OpenWeatherMap API"],
      //   link: "/all-projects",
      //   date: "Not yet",
      //   Howitworks: "The app fetches real-time weather data from the OpenWeatherMap API based on the user's location or input city. It displays details such as temperature, humidity, and weather conditions. The clean interface makes the app user-friendly while helping beginners learn API integration basics."
      // },
      // {
      //   title: "Expense Tracker Pro",
      //   description: "An advanced mobile app for managing personal finances, including expense tracking, budget creation, and financial insights. Expense Tracker Pro provides analytics tools to help users make informed financial decisions.",
      //   images: "/api/placeholder/400/300",
      //   tools: ["Flutter", "Firebase", "Chart.js"],
      //   link: "/all-projects",
      //   date: "Not yet",
      //   Howitworks: "Users can log income and expenses with categories such as food, transport, and entertainment. The app visualizes financial data using dynamic charts powered by Chart.js and provides monthly reports. Firebase ensures secure storage and multi-device syncing. Advanced features include setting financial goals and receiving insights to adjust spending habits."
      // },
      // {
      //   title: "SocialConnect - Messaging Platform",
      //   description: "An advanced mobile app for real-time messaging and social networking. SocialConnect offers features like text and multimedia messaging, profile creation, and group chats.",
      //   images: "/api/placeholder/400/300",
      //   tools: ["Flutter", "Firebase", "Cloud Functions"],
      //   link: "/all-projects",
      //   date: "Not yet",
      //   Howitworks: "Users can create profiles and connect with friends for one-on-one or group chats. Messages are stored securely using Firebase Firestore, and Cloud Functions handle tasks like notifications and data updates. The app supports image, video, and audio sharing, along with read receipts and typing indicators, providing a complete messaging experience."
      // },
      // {
      //   title: "Quiz Master App",
      //   description: "A mobile app designed for creating, sharing, and participating in quizzes. Quiz Master is perfect for students, teachers, and anyone who loves trivia, offering both solo and multiplayer modes.",
      //   images: "/api/placeholder/400/300",
      //   tools: ["Flutter", "Firebase", "Cloud Functions"],
      //   link: "/all-projects",
      //   date: "Not yet",
      //   Howitworks: "Users can create custom quizzes by selecting categories, adding questions, and setting time limits. Players can join quizzes in real-time multiplayer mode or challenge themselves in solo mode. Firebase is used to manage quiz data, store scores, and enable real-time multiplayer functionality. The app also features leaderboards to track top performers and encourage competition."
      // }
    ],
    Design: [
      // {
      //   "title": "Brand Identity Design",
      //   "description": "Complete brand identity package for a startup, including logo design, color palette, typography, and brand guidelines to ensure consistent communication across all platforms.",
      //   "images": "/api/placeholder/400/300",
      //   "tools": ["Figma", "Photoshop"],
      //   "link": "/all-projects",
      //   "date": "February 2023"
      // },
      // {
      //   "title": "Mobile App UI/UX Design",
      //   "description": "A beginner project for designing a simple mobile app interface, including wireframes, basic prototyping, and user flow diagrams.",
      //   "images": "/api/placeholder/400/300",
      //   "tools": ["Figma", "Adobe XD"],
      //   "link": "/all-projects",
      //   "date": "March 2023"
      // },
      // {
      //   "title": "Web Landing Page Design",
      //   "description": "A UI/UX design project for creating an attractive and functional landing page layout, focusing on responsive design and usability.",
      //   "images": "/api/placeholder/400/300",
      //   "tools": ["Figma", "Sketch"],
      //   "link": "/all-projects",
      //   "date": "April 2023"
      // },
      // {
      //   "title": "E-commerce Website UI/UX Design",
      //   "description": "An advanced project to design a full e-commerce website interface, including homepage, product pages, and checkout flows. The focus is on user experience and accessibility.",
      //   "images": "/api/placeholder/400/300",
      //   "tools": ["Figma", "Adobe XD", "Photoshop"],
      //   "link": "/all-projects",
      //   "date": "May 2023"
      // },
      // {
      //   "title": "Dashboard UI Design",
      //   "description": "An advanced project involving the creation of a data dashboard interface for business analytics, featuring charts, graphs, and interactive filters.",
      //   "images": "/api/placeholder/400/300",
      //   "tools": ["Figma", "Tableau", "Illustrator"],
      //   "link": "/all-projects",
      //   "date": "June 2023"
      // }
    ]
  };

  const tabIcons = {
    web: <Code className="mr-2 w-5 h-5" />,
    mobile: <Smartphone className="mr-2 w-5 h-5" />,
    Design: <Palette className="mr-2 w-5 h-5" />
  };

  // Define currentProjects based on activeTab
  const currentProjects = projects[activeTab] || [];

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
          {['web', 'mobile', 'Design'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition shadow-sm text-sm sm:text-base ${activeTab === tab
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
        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
              >
                <img
                  src={project.images}
                  alt={project.title}
                  className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-900">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tools.map((tech, i) => (
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
                    href={project.link}
                    className="inline-block px-3 sm:px-4 py-2 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-800 transition text-sm sm:text-base"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg sm:text-xl">
            Nothing is matching to your search
          </div>
        )}

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
