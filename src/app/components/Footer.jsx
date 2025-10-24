import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`footer border z-10 border-l-transparent border-r-transparent ${
      isDarkMode 
        ? 'border-t-[#33353F] text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900' 
        : 'border-t-slate-200 text-slate-900 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container p-12 flex justify-between">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" fill="none" viewBox="0 0 160 40">
            <defs>
              <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="30%" stopColor="#8B5CF6" />
                <stop offset="70%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <filter id="footerGlow">
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
            <g filter="url(#footerGlow)">
              {/* Letter T with modern design */}
              <rect x="20" y="8" width="24" height="5" fill="url(#footerLogoGradient)" rx="2.5"/>
              <rect x="30" y="8" width="5" height="24" fill="url(#footerLogoGradient)" rx="2.5"/>
              
              {/* Letter K integrated with T - sharing the vertical line */}
              <rect x="32" y="8" width="5" height="24" fill="url(#footerLogoGradient)" rx="2.5"/>
              {/* K upper diagonal */}
              <polygon points="37,8 37,18 47,8 52,8 42,18 37,18" fill="url(#footerLogoGradient)"/>
              {/* K lower diagonal */}
              <polygon points="37,18 42,18 52,32 47,32 37,22" fill="url(#footerLogoGradient)"/>
              
              {/* Connecting arc between T and K */}
              <path d="M 35 16 Q 37 14 39 16" stroke="url(#footerLogoGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
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
        </span>
        <p className={isDarkMode ? "text-slate-600" : "text-slate-500"}>All 2023 rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

