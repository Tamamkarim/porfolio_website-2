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
    description: "",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/porfolio_website-2",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Apricus - Kahvila & Ravintola",
    description: "",
    image: "/images/projects/Ravintaloa.Kahvila.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/projakti-web-Ravintolakonsepti#",
    previewUrl: "/",
  },
  {
    id: 3, 
    title: "Booking",
    description:
      "",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/SAS-2.0-N",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce Application",
   
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/my-app",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "DIVs_website",
    description: "",
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
    title: "Lokkit_web",
    description: "Project ",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/Dockre",
    previewUrl: "/",
  },
  {
    id: 8,
    title: " Ravintola",
    description: "",
    image: "/images/projects/Raventaloa2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/Food-TK",
    previewUrl: "/",
  },
    {
    id: 9,
    title: " Game",
    description: "",
    image: "/images/projects/99.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tamamkarim/proikti_game",
    previewUrl: "/",
  },
   {
    id: 10,
    title: " Game",
    description: "",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ville5367/ohjelmisto-2#",
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
