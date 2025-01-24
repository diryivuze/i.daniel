import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';

const roles = [
  { role: 'Web Designer', image: '../images/web.avif' },
  { role: 'Mobile Developer', image: '../images/mobile.png' },
  { role: 'Graphic Designer', image: '../images/graphic design.avif' },
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: 'React.js', icon: '/images/react.png', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Vue.js', icon: '/images/vue js.png', description: 'A progressive framework for building UIs.' },
    { name: 'Node.js', icon: '/images/node js.png', description: 'A runtime for server-side JavaScript applications.' },
    { name: 'FastAPI', icon: '/images/firstAPI.png', description: 'A modern web framework for Python.' },
    { name: 'Flutter', icon: '/images/flutter.png', description: 'A UI toolkit for natively compiled apps.' },
    { name: 'Tailwind CSS', icon: '/images/tailwind.png', description: 'A utility-first CSS framework.' },
    { name: 'Bootstrap', icon: '/images/bootstrap.png', description: 'A CSS framework for responsive design.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
            {roles[currentRoleIndex].role}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg mb-6 px-4"
          >
            Crafting innovative solutions for your needs
          </motion.p>
          <Link
            to="/projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-900 hover:bg-orange-700 rounded-full text-white shadow-lg text-base sm:text-lg"
          >
            Explore my work
          </Link>
        </motion.div>

        {/* Background Image Animation */}
        <motion.div
          key={roles[currentRoleIndex].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center filter brightness-75"
          style={{ backgroundImage: `url('${roles[currentRoleIndex].image}')` }}
        ></motion.div>

        {/* Social Media Icons */}
        <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 sm:space-y-6">
          <a
            href="https://github.com"
            target='_blank'
            className="block p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 shadow-lg tooltip"
            title="Visit my GitHub"
          >
            <Github size={20} sm:size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="block p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 shadow-lg tooltip"
            title="Connect on LinkedIn"
          >
            <Linkedin size={20} sm:size={24} />
          </a>
          <a
            href="mailto:example@example.com"
            className="block p-2 bg-green-600 text-white rounded-full hover:bg-green-500 shadow-lg tooltip"
            title="Send me an email"
          >
            <Mail size={20} sm:size={24} />
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden border-4 border-orange-600 rounded-full shadow-lg">
              <img 
                src="../images/Photo.jpg" 
                alt="Daniel Iryivuze" 
                className="w-full h-full object-cover hover:scale-110 transition-transform" 
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">Daniel Iryivuze</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                I am a dedicated software developer specializing in full-stack and mobile development. 
                My goal is to create scalable, user-friendly applications that meet and exceed client expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
        <div>
          <h3 className="text-2xl sm:text-3xl text-center font-bold mb-6 uppercase">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-24 justify-center items-center rounded-full p-4 h-full object-cover hover:scale-110  transition-transform" 
                />
                <span className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">{tech.name}</span>
                <p className="text-[10px] sm:text-xs text-gray-500">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 uppercase">Book me in</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Building responsive, high-performance websites with a focus on user experience.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Mobile App Development</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Creating robust, cross-platform mobile applications tailored to your needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Graphic Design</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Designing stunning visuals that communicate your brand's message effectively.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;