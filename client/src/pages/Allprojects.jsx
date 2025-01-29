import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Search, Filter } from 'lucide-react';

const AllProjects = () => {
    const allProjects = [
            {
            title: "OAK Investments Limited",
            description: "OAK Investments Limited is a Rwandan service provider dedicated to promoting environmental sustainability.",
            tools: ["React JS", "Tailwind CSS", "FastAPI"],
            images: ["../images/oaks1.JPG", "../images/oaks.JPG"],
            link: "https://oak-not-paid.netlify.app/",
            category:"Web",
            date: "March 2024",
            howItWorks: "OAK Investments Limited's website provides a user-friendly interface where customers can explore various sustainable energy solutions. Users can browse products like stoves and briquettes, learn about their environmental benefits, and make purchases directly through the website. The site also offers an educational section that explains the importance of reducing carbon footprints and how each product contributes to a cleaner and healthier environment. The company also provides installation services for the products, ensuring seamless adoption of their energy-saving solutions."
            },
            {
            title: "Artistry Hub Rwanda",
            description: "Artistry Hub Rwanda is a digital marketplace and platform designed to promote and support Rwandan artists.",
            tools: ["React JS", "Tailwind CSS", "Django"],
            images: ["../images/art.JPG", "../images/art.JPG"],
            link: "https://oak-not-paid.netlify.app/",
            category:"Web",
            date: "March 2024",
            howItWorks: "Artistry Hub Rwanda allows artists to register and create detailed profiles showcasing their artwork. The platform offers various categories for different types of art, such as painting, sculpture, photography, and more. Artists can upload images of their work, set prices, and manage sales through an integrated payment gateway. Buyers can explore a wide range of artworks, view artist portfolios, and purchase directly from the platform. The site also hosts virtual exhibitions, artist spotlights, and art-related events to engage the local and global community."
            },
            {
            title: "B&D Cars",
            description: "B&D Cars is a leading Rwandan dealership that specializes in selling new and used cars.",
            tools: ["React JS", "Tailwind CSS", "Django"],
            images: ["../images/bd.JPG", "../images/bd.JPG"],
            link: "https://bdcars.netlify.app/",
            category:"Web",
            date: "March 2024",
            howItWorks: "B&D Cars' website functions as a digital showroom, where customers can browse through a catalog of cars available for purchase. Each car listing includes detailed information such as model, price, specifications, photos, and features. Buyers can filter the listings by price range, car type, and other preferences to find their ideal vehicle. The site also provides a contact form for inquiries and scheduling test drives. Once a purchase is made, customers can arrange financing, and B&D Cars offers post-purchase services, including maintenance and warranties."
            },
            {
            title: "Confi Store",
            description: "Confi Store is an online platform that provides a wide selection of educational resources, including books, e-books, and online courses.",
            tools: ["React JS", "Tailwind CSS", "Django"],
            images: ["../images/confi1.JPG", "../images/confi.JPG"],
            link: "https://confistore.netlify.app/",
            category:"Web",
            date: "May 2024",
            howItWorks: "Confi Store offers a convenient online library where users can browse and purchase a wide range of educational materials. Books and courses are categorized by subject, making it easy for users to find relevant content for their studies or personal growth. Once a user selects an item, they can either download it or access it online. The platform supports various learning formats, including textbooks, e-books, video lectures, and interactive materials. Users can also leave reviews and ratings for the resources they purchase, helping others to find the best content."
            },
            {
            title: "IgaThrive Platform",
            description: "IgaThrive is an innovative EduTech platform designed to enhance the learning experience for students in Rwanda and beyond. ",
            tools: ["React JS", "Tailwind CSS", "Flask"],
            images: ["../images/iga.JPG", "../images/iga.JPG"],
            link: "https://igathrive.netlify.app/",
            category:"Web",
            date: "May 2024",
            howItWorks: "IgaThrive connects students to various online courses offered by local and international institutions. Students can create profiles, enroll in courses, access learning materials, and track their academic performance. The platform also integrates a school management system that allows administrators to manage student data, grades, and schedules. Teachers can upload course content, grade assignments, and communicate with students through the platform. The system's user-friendly interface ensures that both students and educators can navigate the platform easily."
            },
            {
            title: "Ozone Inventory System",
            description: "Ozone Inventory System is a comprehensive tool for businesses to manage their inventory efficiently. ",
            tools: ["React JS", "Tailwind CSS", "FastAPI"],
            images: ["../images/oz1.JPG", "../images/oz.JPG"],
            link: "https://ozoneinventorysystem.netlify.app/",
            category:"Web",
            date: "May 2024",
            howItWorks: "Ozone Inventory System helps businesses maintain accurate records of their inventory. Users can log each item with details such as quantity, price, and supplier information. The system automatically updates stock levels as sales or purchases are made, providing real-time insights into inventory status. Businesses can generate custom reports to analyze stock trends, sales, and supplier performance. The platform also supports inventory alerts, ensuring that businesses are notified when stock levels are running low, reducing the risk of running out of critical items."
            },
            // {
            //   title: "Simple To-Do List",
            //   description: "A beginner-friendly mobile app that helps users create, organize, and manage their daily tasks. The app focuses on simplicity and ease of use for anyone looking to stay organized.",
            //   images:  ["../images/art.JPG", "../images/oz.JPG"],
            //   tools: ["Flutter", "Firebase"],
            //   link: "/all",
            // category:"Web",  
            // date: "Not yet",
            //   howItWorks: "Users can add tasks by typing them into a simple input field and mark them as complete by tapping a checkbox. Tasks are stored in Firebase's Firestore, so they can be accessed across multiple devices. With its clean interface and straightforward functionality, the app is perfect for beginners exploring mobile app development."
            // },
            // {
            //   title: "Weather Info App",
            //   description: "A lightweight mobile app that displays current weather information for any location. This app is an ideal project for beginners to learn about working with APIs and displaying data dynamically.",
            //   images:  ["/api/placeholder/400/300", "/api/placeholder/400/301"],
            //   tools: ["Flutter", "OpenWeatherMap API"],
            //   link: "/all",
            // category:"Web",  
            // date: "Not yet",
            //   howItWorks: "The app fetches real-time weather data from the OpenWeatherMap API based on the user's location or input city. It displays details such as temperature, humidity, and weather conditions. The clean interface makes the app user-friendly while helping beginners learn API integration basics."
            // },
            // {
            //   title: "Expense Tracker Pro",
            //   description: "An advanced mobile app for managing personal finances, including expense tracking, budget creation, and financial insights. Expense Tracker Pro provides analytics tools to help users make informed financial decisions.",
            //   images:  ["/api/placeholder/400/300", "/api/placeholder/400/301"],
            //   tools: ["Flutter", "Firebase", "Chart.js"],
            //   link: "/all",
            // category:"Web",  
            // date: "Not yet",
            //   howItWorks: "Users can log income and expenses with categories such as food, transport, and entertainment. The app visualizes financial data using dynamic charts powered by Chart.js and provides monthly reports. Firebase ensures secure storage and multi-device syncing. Advanced features include setting financial goals and receiving insights to adjust spending habits."
            // },
            // {
            //   title: "SocialConnect - Messaging Platform",
            //   description: "An advanced mobile app for real-time messaging and social networking. SocialConnect offers features like text and multimedia messaging, profile creation, and group chats.",
            //   images:  ["/api/placeholder/400/300", "/api/placeholder/400/301"],
            //   tools: ["Flutter", "Firebase", "Cloud Functions"],
            //   link: "/all",
            // category:"Web",  
            // date: "Not yet",
            //   howItWorks: "Users can create profiles and connect with friends for one-on-one or group chats. Messages are stored securely using Firebase Firestore, and Cloud Functions handle tasks like notifications and data updates. The app supports image, video, and audio sharing, along with read receipts and typing indicators, providing a complete messaging experience."
            // },
            // {
            //   title: "Quiz Master App",
            //   description: "A mobile app designed for creating, sharing, and participating in quizzes. Quiz Master is perfect for students, teachers, and anyone who loves trivia, offering both solo and multiplayer modes.",
            //   images:  ["/api/placeholder/400/300", "/api/placeholder/400/301"],
            //   tools: ["Flutter", "Firebase", "Cloud Functions"],
            //   link: "/all",
            // category:"Web",  
            // date: "Not yet",
            //   howItWorks: "Users can create custom quizzes by selecting categories, adding questions, and setting time limits. Players can join quizzes in real-time multiplayer mode or challenge themselves in solo mode. Firebase is used to manage quiz data, store scores, and enable real-time multiplayer functionality. The app also features leaderboards to track top performers and encourage competition."
            // }
    ];
      const [searchTerm, setSearchTerm] = useState("");
      const [filterCategory, setFilterCategory] = useState("All");
    
      const filteredProjects = allProjects.filter(project =>
        (filterCategory === "All" || project.category === filterCategory) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    
      return (
        <div className="min-h-screen bg-gray-50 text-gray-900 mt-16 p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-900 uppercase mb-6 flex items-center">
              <GitBranch className="mr-3 text-orange-700" /> All Projects
            </h1>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="relative flex items-center w-full sm:w-1/2">
                <Search className="absolute left-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="w-full sm:w-1/4 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-600"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
    
            {filteredProjects.length === 0 ? (
              <p className="text-gray-600">No projects match your search.</p>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row gap-6 mb-8 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="lg:w-1/2">
                    <img src={project.images[0]} alt={project.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="lg:w-1/2 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-900 mb-3">{project.title}</h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">{project.description}</p>
                    <p className="text-sm sm:text-base text-gray-700 mb-3">
                      <strong>How it works:</strong> {project.howItWorks}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3">Completed: {project.date}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3">Category: {project.category}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-800 transition text-sm"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Final Design
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      );
    };
    
export default AllProjects;