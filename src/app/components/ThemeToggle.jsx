"use client";
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center w-12 h-6 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg
        ${isDarkMode 
          ? 'bg-gradient-to-r from-slate-700 to-slate-800 shadow-slate-500/20' 
          : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-indigo-400/30 hover:shadow-indigo-400/50'
        }
      `}
      whileTap={{ scale: 0.95 }}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Background track */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isDarkMode 
          ? 'border border-white/20' 
          : 'border border-white/50 bg-gradient-to-r from-blue-100/30 to-purple-100/30'
      }`}></div>
      
      {/* Sliding toggle */}
      <motion.div
        className={`
          absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500
          ${isDarkMode 
            ? 'bg-slate-200 text-slate-800 shadow-lg' 
            : 'bg-white text-blue-600 shadow-xl shadow-blue-300/40 ring-2 ring-blue-200/50'
          }
        `}
        animate={{
          x: isDarkMode ? -12 : 12,
          rotate: isDarkMode ? 0 : 180,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {/* Icon */}
        <motion.span 
          className="text-xs"
          animate={{
            scale: isDarkMode ? 1 : 1.2,
          }}
          transition={{
            duration: 0.3
          }}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </motion.span>
        
        {/* Glowing effect for sun */}
        {!isDarkMode && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-300/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 text-xs">
        <motion.span 
          className={`transition-all duration-500 ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-20 scale-75'}`}
          animate={{
            rotate: isDarkMode ? [0, 10, -10, 0] : 0
          }}
          transition={{
            duration: 3,
            repeat: isDarkMode ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          🌙
        </motion.span>
        <motion.span 
          className={`transition-all duration-500 ${isDarkMode ? 'opacity-20 scale-75' : 'opacity-100 scale-110'}`}
          animate={{
            rotate: isDarkMode ? 0 : [0, 180, 360],
            scale: isDarkMode ? 0.75 : [1, 1.1, 1]
          }}
          transition={{
            duration: isDarkMode ? 0.5 : 4,
            repeat: isDarkMode ? 0 : Infinity,
            ease: "linear"
          }}
        >
          ☀️
        </motion.span>
      </div>
      
      {/* Sparkle effects for light mode */}
      {!isDarkMode && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-0.5 h-0.5 bg-indigo-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5
            }}
          />
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;