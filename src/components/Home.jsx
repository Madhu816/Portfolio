import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { ReactTyped } from "react-typed";



function Home() {
  return (
    <>
      <section name="home" className="flex min-h-screen w-full items-center px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-12 md:flex-row md:gap-40 lg:gap-56">
          <div className="order-2 md:order-1 md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Hi, I'm <span className="text-violet-600">P. Madhu</span>
            </h1>

            <h2 className="mb-5 text-2xl font-semibold text-slate-800">
              I'm a <ReactTyped className="ml-2 font-bold text-red-600"
                strings={["Full-Stack Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                loop={true}
              />
            </h2>
            <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I'm a Computer Science student who enjoys building things, solving problems, and learning by doing. My focus is MERN stack development, where I use React, Node.js, Express.js, and MongoDB to create practical web applications. I also strengthen my DSA and problem-solving skills with Java through regular coding practice.
            </p>
            <div className="mt-6 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-16 md:gap-24">

              <a href="/Resume1.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <IoMdDownload className="text-xl" />
                View Resume
              </a>

              <div className="text-center">
                <p className="mb-3 text-sm font-semibold text-amber-500">
                  Coding Profiles & Social Links
                </p>

                <ul className="flex items-center justify-center gap-3">
                  <li className="flex h-9 w-9 items-center justify-around rounded-full bg-gray-300 shadow-md transition hover:bg-blue-700">
                    <a href="https://leetcode.com/u/Madhu_Piske/" target="_blank" rel="noreferrer" aria-label="LeetCode profile">
                      <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6" />
                    </a>
                  </li>

                  <li className="flex h-9 w-9 items-center justify-around rounded-full bg-gray-300 shadow-md transition hover:bg-blue-700">
                    <a href="https://smartinterviews.in/profile/madhupiske" target="_blank" rel="noreferrer" aria-label="Smart Interviews profile">
                      <img src="/smart_int.png" alt="Smart Interviews" className="w-6 h-6" />
                    </a>
                  </li>

                  <li className="flex h-9 w-9 items-center justify-around rounded-full bg-gray-300 shadow-md transition hover:bg-blue-700">
                    <a href="https://www.linkedin.com/in/madhupiske/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                      <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                  </li>

                  <li className="flex h-9 w-9 items-center justify-around rounded-full bg-gray-300 shadow-md transition hover:bg-blue-700">
                    <a href="https://github.com/Madhu816" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                      <img src="/github.png" alt="GitHub" className="w-6 h-6" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
          <div className="order-1 flex justify-center md:order-2 md:w-1/2">
            <img className="h-72 w-72 rounded-full object-cover shadow-xl ring-8 ring-slate-100" src="/myphoto.jpeg" alt="P. Madhu" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
