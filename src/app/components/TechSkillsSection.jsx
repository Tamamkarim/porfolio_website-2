"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const techSkills = [
  {
    name: "HTML5",
    icon: "🌐",
    color: "#E34F26",
    bgColor: "#FFF5F5"
  },
  {
    name: "CSS3", 
    icon: "🎨",
    color: "#1572B6",
    bgColor: "#F0F8FF"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    bgColor: "#FFFEF0"
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    bgColor: "#F0F8FF"
  },
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    bgColor: "#F0FDFF"
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    bgColor: "#F0FFF4"
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    bgColor: "#F8F8F8"
  },
  {
    name: "Tailwind",
    icon: "💨",
    color: "#06B6D4",
    bgColor: "#F0FDFF"
  },
  {
    name: "Express.js",
    icon: "🚀",
    color: "#000000",
    bgColor: "#F8F8F8"
  },
  {
    name: "MySQL",
    icon: "🐬",
    color: "#4479A1",
    bgColor: "#F0F8FF"
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "#47A248",
    bgColor: "#F0FFF4"
  },
  {
    name: "Git",
    icon: "📦",
    color: "#F05032",
    bgColor: "#FFF5F5"
  },
  {
    name: "GitHub",
    icon: "🐙",
    color: "#181717",
    bgColor: "#F8F8F8"
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    bgColor: "#F0F8FF"
  },
  {
    name: "VS Code",
    icon: "💻",
    color: "#007ACC",
    bgColor: "#F0F8FF"
  },
  {
    name: "Figma",
    icon: "🎯",
    color: "#F24E1E",
    bgColor: "#FFF5F5"
  },
  {
    name: "TypeScript",
    icon: "📘",
    color: "#3178C6",
    bgColor: "#F0F8FF"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    bgColor: "#F0F8FF"
  },
  {
    name: "Webpack",
    icon: "📦",
    color: "#8DD6F9",
    bgColor: "#F0FDFF"
  },
  {
    name: "Strapi",
    icon: "🔷",
    color: "#2F2E8B",
    bgColor: "#F0F8FF"
  },
  {
    name: "Postman",
    icon: "📮",
    color: "#FF6C37",
    bgColor: "#FFF5F5"
  },
  {
    name: "Bootstrap",
    icon: "🎨",
    color: "#7952B3",
    bgColor: "#F8F5FF"
  },
  {
    name: "SASS",
    icon: "💄",
    color: "#CC6699",
    bgColor: "#FFF5FA"
  },
  {
    name: "Netlify",
    icon: "🌐",
    color: "#00C7B7",
    bgColor: "#F0FFFE"
  },
  {
    name: "MUI",
    icon: "🎨",
    color: "#007FFF",
    bgColor: "#F0F8FF"
  },
  {
    name: "Trello",
    icon: "📋",
    color: "#0079BF",
    bgColor: "#F0F8FF"
  }
];

const TechSkillsSection = () => {
  const { isDarkMode } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="tech-skills" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent' 
              : 'text-slate-900'
          }`}>
            Tools & Technologies
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-[#ADB7BE]' : 'text-slate-600'
          }`}>
            Crafting digital experiences with cutting-edge technologies and industry-standard tools
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-primary-400' : 'text-indigo-600'
              }`}>{techSkills.length}+</div>
              <div className={`text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-[#ADB7BE]' : 'text-slate-500'
              }`}>Technologies</div>
            </div>
            <div className={`w-px h-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-[#33353F]' : 'bg-slate-300'
            }`}></div>
            <div className="text-center">
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-secondary-400' : 'text-purple-600'
              }`}>5+</div>
              <div className={`text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-[#ADB7BE]' : 'text-slate-500'
              }`}>Years Experience</div>
            </div>
            <div className={`w-px h-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-[#33353F]' : 'bg-slate-300'
            }`}></div>
            <div className="text-center">
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-blue-600'
              }`}>100+</div>
              <div className={`text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-[#ADB7BE]' : 'text-slate-500'
              }`}>Projects</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6"
        >
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden">
                {/* Background Card */}
                <div 
                  className={`relative overflow-hidden border rounded-2xl p-5 md:p-6 text-center transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl ${
                    isDarkMode 
                      ? 'bg-[#0F1419] border-[#1E2D3D]' 
                      : 'bg-white/90 border-slate-200 shadow-lg'
                  }`}
                  style={{
                    background: isDarkMode 
                      ? `linear-gradient(135deg, #0F1419 0%, ${skill.color}08 50%, #0F1419 100%)`
                      : `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ${skill.color}05 50%, rgba(255,255,255,0.95) 100%)`,
                    boxShadow: isDarkMode 
                      ? `0 4px 20px ${skill.color}15`
                      : `0 8px 25px ${skill.color}20`
                  }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, transparent, ${skill.color}20)`,
                      filter: 'blur(1px)'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div 
                        className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                          border: `1px solid ${skill.color}30`
                        }}
                      >
                        <span className="text-2xl md:text-3xl">{skill.icon}</span>
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div 
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: skill.color }}
                        />
                        <div 
                          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <h3 className={`font-semibold text-sm md:text-base transition-all duration-300 leading-tight ${
                      isDarkMode 
                        ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-300 group-hover:bg-clip-text' 
                        : 'text-slate-800 group-hover:text-indigo-700'
                    }`}>
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className={`mt-3 h-1 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode ? 'bg-[#1E2D3D]' : 'bg-slate-200'
                    }`}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div 
                    className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}, transparent)`,
                      clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
                    }}
                  />
                </div>
                
                {/* Enhanced Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div 
                    className="px-3 py-2 rounded-lg text-white text-xs font-medium whitespace-nowrap shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}, ${skill.color}CC)`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {skill.name}
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent"
                      style={{ borderTopColor: skill.color }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default TechSkillsSection;