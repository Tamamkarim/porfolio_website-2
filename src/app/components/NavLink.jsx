"use client";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

const NavLink = ({ href, title }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition-all duration-300 hover:scale-105 font-medium ${
        isDarkMode 
          ? 'text-[#ADB7BE] hover:text-white hover:drop-shadow-lg' 
          : 'text-slate-700 hover:text-slate-900 hover:drop-shadow-sm relative group'
      }`}
    >
      {title}
      {/* Light mode underline effect */}
      {!isDarkMode && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
      )}
    </Link>
  );
};

export default NavLink;
