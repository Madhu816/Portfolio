

import React, { useState } from "react";
import Proimages from "./Proimages";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Project() {
  const projects = [
    {
      title: "Swiggy Food Delivery App",
      description: [
        "Developed a full-stack food delivery platform with restaurant and menu browsing.",
        "Add, remove, and update items in the shopping cart.",
        "Built responsive frontend and scalable backend using the MERN stack.",
      ],
      liveDemo: "https://swiggy-mern-project-wyvq.vercel.app/",
      sourceCode: "https://github.com/Madhu816/Swiggy-MERN-Project",
      technologies: [
        "React.js","Node.js","Express.js","MongoDB","JWT","HTML5", "CSS3"],
      images: ["/swiggy-1.png", "/swiggy-2.png", "/swiggy-3.png","/swiggy-4.png","/swiggy-5.png","/swiggy-6.png"],
    },
    {
      title: "YouTube Clone",
      description: [
        "Search and browse videos from different categories.",
        "Watch videos with an integrated video player and channel information.",
        "Responsive design with a modern user experience across all devices.",
      ],
      liveDemo: "https://youtube-cyan-three.vercel.app/",
      sourceCode: "https://github.com/Madhu816/Youtube",
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML/CSS"],
      images: ["/yt-1.png", "/yt-2.png", "/yt-3.png"],
    },

    {
      title: "Portfolio Website",
      description: [
        "Modern responsive portfolio website.",
        "Built with React and Tailwind CSS.",
        "Showcases skills, projects, and achievements.",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "YouTube Data API v3",],
      images: ["/madhu.jpg", "/madhu.jpg"],
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
    setProjectIndex((projectIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex(
      (projectIndex - 1 + projects.length) % projects.length
    );
  };

  const project = projects[projectIndex];

  return (
    <>
      <div name="projects">
        <h1 className="text-4xl font-bold text-green-700 mt-10 text-center">
          Projects
        </h1>
        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
          A collection of projects that reflect my passion for software development, problem-solving, and building impactful applications using modern technologies.
        </p>

        {/* Top Navigation */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button onClick={prevProject}>
            <IoIosArrowDropleft className="text-3xl md:text-5xl cursor-pointer" />
          </button>

          <h2 className=" text-sm md:text-2xl font-bold">
            Project {projectIndex + 1} / {projects.length} : <span className="text-sm text-blue-600 md:text-2xl border border-yellow-500 px-3 rounded-2xl ">{project.title}</span>
          </h2>

          <button onClick={nextProject}>
            <IoIosArrowDropright className="text-3xl md:text-5xl cursor-pointer" />
          </button>
        </div>

        {/* Project Card */}
        <div className="mt-10 w-[85%] mx-auto border border-gray-300 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

            {/* Left */}
            <div className="border border-gray-300 rounded-xl p-6">
              <div className="text-center">
                <h1 className=" text-xl inline-block md:text-2xl font-bold border border-black px-4 py-2 rounded-lg">
                  {project.title}
                </h1>
              </div>

              <ul className="list-disc pl-6 space-y-4 mt-6 text-gray-700">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mt-6">
                {project.technologies.map((tech, index) => (
                  <button
                    key={index}
                    className="bg-green-400 text-white px-2 py-1 rounded-xl text-sm text-center hover:bg-green-600"
                  >
                    {tech}
                  </button>
                ))}

              </div>

              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800">
                  <a href={project.liveDemo} target="_blank">
                    Live Demo
                  </a>
                </button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800">
                  <a href={project.sourceCode} target="_blank">
                    Source Code
                  </a>
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <Proimages images={project.images} />
            </div>

          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
}

export default Project;