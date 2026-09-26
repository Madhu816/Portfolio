

import React, { useState } from "react";
import Proimages from "./Proimages";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project() {
  const projects = [
    {
      title: "AI-Powered Food Recommendation System",
      description: [
        "Developed a full-stack food ordering platform with restaurant, food, and menu management using the MERN stack.",
        "Integrated OpenRouter API to provide AI-powered food recommendations based on user preferences and food choices.",
        "Implemented JWT authentication, REST APIs, product management, and responsive user/admin interfaces.",
      ],
      liveDemo: "https://ai-powered-food-recommendation-syst-pink.vercel.app/",
      sourceCode: "https://github.com/Madhu816",
      technologies: [
        "React.js", "Node.js", "Express.js", "MongoDB","OpenRouter API", "node-modules", "JWT", "HTML5", "CSS3"],
      images: [
        "/ai_pow_mern0.jpg",
        "/ai_pow_mern1.jpg",
        "/ai_pow_mern2.jpg",
        "/ai_pow_mern3.jpg",
        "/ai_pow_mern4.jpg",
        "/ai_pow_mern5.jpg",
        "/ai_pow_mern6.jpg",
        "/ai_pow_mern7.jpg",
      ],
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
      technologies: ["React.js", "YouTube Data API v3", "JavaScript (ES6+)", "Tailwind CSS", "HTML/CSS"],
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
      liveDemo: "https://portfolio-khaki-ten-nvlt5loduh.vercel.app/",
      sourceCode: "https://github.com/Madhu816/Portfolio",
      images: ["/portfolio_1.png", "/portfolio_2.png", "/portfolio_3.png"],
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
    setProjectIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((currentIndex) =>
      (currentIndex - 1 + projects.length) % projects.length
    );
  };

  const project = projects[projectIndex];

  return (
    <>
      <section name="projects" className="w-full bg-slate-50 px-5 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-4xl font-bold text-green-700 md:text-5xl">
          Projects
        </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
  A showcase of projects where I apply my technical skills to solve real-world problems,
  explore new technologies, and build responsive, user-friendly applications.
</p>

        <div className="mt-10 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-6">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="rounded-full p-2 text-2xl text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:text-3xl"
          >
            <IoIosArrowDropleft />
          </button>

          <h2 className="text-center text-sm font-bold md:text-2xl">
            <span className="text-green-700">Project {projectIndex + 1}</span>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-700">{projects.length}</span>
            <span className="mx-2 text-slate-400">:</span>
            <span className="rounded-2xl px-3 py-1 text-sm text-orange-600 md:text-2xl">
              {project.title}
            </span>
          </h2>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="rounded-full p-2 text-2xl text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:text-3xl"
          >
            <IoIosArrowDropright />
          </button>
        </div>

        <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-10">
              <p className="mb-4 text-sm font-medium text-orange-700">Featured project</p>
              <h3 className="mx-auto block w-fit rounded-xl px-3 py-1 text-2xl font-bold text-black-600 md:text-3xl">
                {project.title}
              </h3>

              <ul className="mt-7 list-disc space-y-3 pl-6 text-left text-base text-gray-700 md:text-lg">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiExternalLink aria-hidden="true" className="text-base" />
                  Live demo
                </a>
                <a href={project.sourceCode} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FaGithub aria-hidden="true" className="text-base" />
                  Source code
                </a>
              </div>
            </div>

            <div className="flex min-h-70 items-center justify-center border-t border-slate-200 bg-white p-5 md:min-h-full md:border-l md:border-t-0 md:p-8">
              <Proimages images={project.images} />
            </div>
          </div>
        </article>
        </div>
      </section>
    </>
  );
}

export default Project;