"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#tech-skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <nav className={`fixed mx-auto border top-0 left-0 right-0 z-10 backdrop-blur-md bg-opacity-95 shadow-lg transition-all duration-700 ${
      isDarkMode 
        ? 'border-blue-500/30 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-blue-500/20' 
        : 'border-indigo-200/40 bg-gradient-to-r from-white/95 via-slate-50/95 to-blue-50/95 shadow-indigo-200/30 backdrop-saturate-150'
    }`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl font-semibold transition-all duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-800 hover:text-slate-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" fill="none" viewBox="0 0 160 40">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="30%" stopColor="#8B5CF6" />
                <stop offset="70%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Opening tag < */}
            <text x="5" y="25" fontSize="16" fontFamily="monospace" fill="#10B981" fontWeight="bold">&lt;</text>
            
            {/* Integrated TK Design */}
            <g filter="url(#glow)">
              {/* Letter T with modern design */}
              <rect x="20" y="8" width="24" height="5" fill="url(#logoGradient)" rx="2.5"/>
              <rect x="30" y="8" width="5" height="24" fill="url(#logoGradient)" rx="2.5"/>
              
              {/* Letter K integrated with T - sharing the vertical line */}
              <rect x="32" y="8" width="5" height="24" fill="url(#logoGradient)" rx="2.5"/>
              {/* K upper diagonal */}
              <polygon points="37,8 37,18 47,8 52,8 42,18 37,18" fill="url(#logoGradient)"/>
              {/* K lower diagonal */}
              <polygon points="37,18 42,18 52,32 47,32 37,22" fill="url(#logoGradient)"/>
              
              {/* Connecting arc between T and K */}
              <path d="M 35 16 Q 37 14 39 16" stroke="url(#logoGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
            </g>
            
            {/* Closing tag /> */}
            <text x="60" y="25" fontSize="16" fontFamily="monospace" fill="#10B981" fontWeight="bold">/&gt;</text>
            
            {/* Curly braces with decorative elements */}
            <text x="85" y="25" fontSize="18" fontFamily="monospace" fill="#F59E0B" fontWeight="bold">&#123;</text>
            <circle cx="100" cy="20" r="2" fill="#EF4444"/>
            <circle cx="105" cy="20" r="2" fill="#3B82F6"/>
            <circle cx="110" cy="20" r="2" fill="#8B5CF6"/>
            <text x="120" y="25" fontSize="18" fontFamily="monospace" fill="#F59E0B" fontWeight="bold">&#125;</text>
          </svg>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className={`flex items-center px-3 py-2 border rounded transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'border-slate-200 text-slate-200 hover:text-white hover:border-white hover:bg-slate-800/50' 
                    : 'border-slate-400 text-slate-800 hover:text-slate-900 hover:border-slate-600 hover:bg-slate-100/70 hover:shadow-md'
                }`}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className={`flex items-center px-3 py-2 border rounded transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'border-slate-200 text-slate-200 hover:text-white hover:border-white hover:bg-slate-800/50' 
                    : 'border-slate-400 text-slate-800 hover:text-slate-900 hover:border-slate-600 hover:bg-slate-100/70 hover:shadow-md'
                }`}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:flex md:items-center md:gap-6" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
