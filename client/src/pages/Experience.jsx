import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Award, 
  BarChart2 
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Intern",
      company: "Rwanda Development Board (RDB)",
      period: "June 2024 – July 2024",
      achievements: [
        "Reduced issue resolution time by 2% through efficient database management",
        "Documented processes and improved troubleshooting workflows",
        "Enhanced overall IT operations and system reliability"
      ]
    },
    {
      title: "IT Helpdesk Manager Assistant Intern",
      company: "Rwanda Governance Board (RGB)",
      period: "March 2024 – May 2024",
      achievements: [
        "Reduced issue resolution time by 4% through improved technical support",
        "Created detailed troubleshooting documentation to improve IT operations",
        "Ensured follow-ups with users for satisfaction, enhancing the overall user experience"
      ]
    },
    {
      title: "IT Technician & Event Support Specialist",
      company: "Premium Events Innovations",
      period: "August 2022 – January 2024",
      achievements: [
        "Improved customer satisfaction by 25% through effective issue resolution and service tracking",
        "Managed event sound equipment, ensuring professional audio experiences",
        "Created high-quality graphics and provided reliable client services, driving event success"
      ]
    },
    {
      title: "Hardware & Software Technician",
      company: "PIE MANIRA ELECTRONICS",
      period: "December 2019 – December 2021",
      achievements: [
        "Reduced claims resolution time by 40%, improving customer satisfaction and service delivery",
        "Provided expert technical support for complex hardware and software issues",
        "Ensured system reliability and seamless operations in a fast-paced environment"
      ]
    },
  ];

  const skills = {
    technical: [
      "Full-Stack Development",
      "Mobile Development",
      "Database Management",
      "API Integration",
      "Cloud Services"
    ],
    soft: [
      "Communication",
      "Problem-Solving",
      "Critical Thinking",
      "Teamwork",
      "Leadership"
    ]
  };

  const certifications = [
    {
      title: "AI Career Essentials Program (AICE)",
      provider: "ALX Rwanda",
      year: "2024"
    },
    {
      title: "Data Science & Data Engineering Training",
      provider: "ICT Chamber in partnership with Talent 4 Startups",
      year: "2024"
    },
    {
      title: "Certified ScrumMaster (CSM)",
      provider: "Scrum Alliance",
      year: "2021"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
      >
        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-900 flex items-center uppercase">
            <Briefcase className="mr-3 text-orange-700" /> Work Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-700 font-medium text-sm sm:text-base">{exp.company}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">{exp.period}</p>
                <ul className="list-disc pl-4 sm:pl-6 text-gray-700 text-xs sm:text-sm space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-900 flex items-center uppercase">
            <BarChart2 className="mr-3 text-orange-700" /> Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 rounded-full shadow-sm hover:bg-blue-200 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-800 rounded-full shadow-sm hover:bg-green-200 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-900 flex items-center uppercase">
            <Award className="mr-3 text-orange-700" /> Certifications & Trainings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{cert.provider}</p>
                <p className="text-xs sm:text-sm text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Experience;
