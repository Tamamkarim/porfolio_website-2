import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const { isDarkMode } = useTheme();
  
  const buttonStyles = isSelected
    ? (isDarkMode ? "text-white border-primary-500" : "text-slate-900 border-indigo-500")
    : (isDarkMode 
        ? "text-[#ADB7BE] border-slate-600 hover:border-white" 
        : "text-slate-500 border-slate-300 hover:border-slate-500");
        
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-200`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
