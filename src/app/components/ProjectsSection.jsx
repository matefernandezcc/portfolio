"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bus RealTime GPS",
    description: "Get the real-time location of a bus in Buenos Aires.",
    image: "./images/projects/1.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/matefernandezcc/RealTime-GPS-Colectivos",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SaldoSube for Alexa",
    description: "Know the balance of your public tranport card through your Amazon Alexa device.",
    image: "./images/projects/2.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/matefernandezcc/SaldoSube-for-Alexa",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CuandoSubo for Alexa",
    description: "Integration of CuandoSubo App for Amazon Alexa devices using triggerCMD",
    image: "./images/projects/3.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/matefernandezcc/CuandoSubo-for-Alexa",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Congruence Equations Calculator",
    description: "Linear Congruence Equation solver",
    image: "./images/projects/4.png",
    tag: ["All", "C and C++"],
    gitUrl: "https://github.com/matefernandezcc/congruence-Calculator",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Convolution for image compression",
    description: "Gaussian blur and some fft images transformations using convolution",
    image: "./images/projects/5.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/matefernandezcc/Convolution",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AFIP 2 CAE",
    description: "Rename AFIP files with CAE",
    image: "./images/projects/6.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/matefernandezcc/AFIP_CAE",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C and C++"
          isSelected={tag === "C and C++"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
