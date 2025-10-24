"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../contexts/ThemeContext";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "7",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className={`sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between ${
        isDarkMode 
          ? 'sm:border-[#33353F]' 
          : 'sm:border-slate-200 bg-white shadow-sm'
      }`}>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className={`text-4xl font-bold flex flex-row ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className={isDarkMode ? "text-[#ADB7BE] text-base" : "text-slate-600 text-base"}>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
