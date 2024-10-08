"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-center">
        <a href="https://skillicons.dev" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://skillicons.dev/icons?i=linux,notion,md,py,postgres,js,html,css,nodejs,react,git,github,c,cpp,gmail&perline=5"
            alt="Skills Icons"
            className="w-auto h-50"
          />
        </a>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-center">
        <ul className="none">
          <li></li>
        </ul>
        <Image
          src="./images/utn.png"
          alt="Education Image"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Soon...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="./images/about-image.png" 
          width={500} 
          height={500} 
          className="rounded-lg" 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student of Information Systems Engineering with a passion for developing applications of all kinds, currently more interested in being a Data Analyst.<br />
            I have experience with JavaScript, React, Python, Node.js, C, C++, Haskell, Prolog, PostgreSQL, HTML, CSS, and Git. I am a fast learner and am always looking to expand my knowledge and skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
