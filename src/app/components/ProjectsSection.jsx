"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built using React. Showcases projects, skills, and experiences with a responsive design and smooth animations.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/porfolio_website-2",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Apricus - Kahvila & Ravintola",
    description: "Modern web application for restaurant management with customer service and advanced admin tools. Features responsive design, shopping cart system, authentication, and menu management.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/apricus-restaurant",
    previewUrl: "/",
  },
  {
    id: 3, 
    title: "Booking",
    description:
      "A task management application built with React and TypeScript. This project demonstrates state management, custom hooks, and a clean component structure.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/SAS-2.0-N",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "An e-commerce application that allows users to browse products, add items to their cart, and proceed to checkout. Built with React, it incorporates features like dynamic product listings, responsive design, and state management using strapi.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/my-app",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "DIVs_website",
    description: "A responsive website for DIVs Company showcasing services, portfolio, and client testimonials. Built with modern web technologies to provide a user-friendly experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DIVSCompany/DIVs_website",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Full-stack",
    description: "Project 6 description",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/Dockre",
    previewUrl: "/",
  },
  {
    id: 8,
    title: " Lokkit_web",
    description: "Lokkit_web is a dynamic web application designed to manage and organize various business services. Built using modern web technologies, this project demonstrates a seamless user experience with real-time data handling and interactive UI components.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/Lokkit-website-main",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className={`text-center text-4xl font-bold mt-4 mb-8 md:mb-12 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        My Projects
      </h2>
      <div className={`flex flex-row justify-center items-center gap-2 py-6 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl || project.sourceCodeLink}
              previewUrl={project.previewUrl || project.liveLink}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
