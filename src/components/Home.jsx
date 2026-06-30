import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { ReactTyped } from "react-typed";



function Home() {
    return (
        <>
            <div name="home" className="w-full px-6 py-4 mt-25 md:px-16  md:mt-40">
                <div className="flex flex-col md:flex-row ">
                    <div className="md:w-1/2 order-2 md:order-1 mt-10">
                        <h1 className="text-4xl font-bold mb-4">
                            Hi, I'm<span className="text-violet-600"> P.Madhu</span>
                        </h1>

                        <h2 className="text-2xl font-semibold mb-4">
                            I'm a
                            <ReactTyped className="text-red-600 ml-2 font-bold"
                                strings={["Full-Stack Developer", "Coder", "Programmer"]}
                                typeSpeed={40}
                                loop={true}
                            />
                        </h2>
                        <p className="text-gray-600 mb-6 font-family:'Times New Roman', Times, serif">
                            I am a B.Tech Computer Science student passionate about Web Development,
                            MERN Stack Development, and Data Structures & Algorithms. I enjoy building
                            responsive and user-friendly web applications while continuously improving
                            my problem-solving skills through coding and DSA.

                        </p>
                        <div className="flex flex-col gap-4 md:flex-row items-center justify-between mt-6">

  {/* Resume Button */}
  <button className=" bg-blue-400 text-white md:px-5 py-3 rounded-xl cursor-pointer px-3 hover:bg-blue-500 shadow-md">
    <a
      href="/Resume_22-06.pdf"
      target="_blank"
      className="flex items-center gap-2"
    >
      <IoMdDownload className="text-md md:text-2xl" />
      View Resume
    </a>
  </button>

  {/* Social Links */}
  <div className="text-center">
    <p className="text-sm font-semibold mb-4 text-amber-500">
      Coding Profiles & Social Links
    </p>

    <ul className="flex items-center justify-center gap-4">
      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://leetcode.com/u/Madhu_Piske/" target="_blank">
          <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6" />
        </a>
      </li>

      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://smartinterviews.in/profile/madhupiske" target="_blank">
          <img src="/smart_int.png" alt="Smart Interviews" className="w-6 h-6" />
        </a>
      </li>

      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://www.linkedin.com/in/madhupiske/" target="_blank">
          <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </li>

      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://github.com/Madhu816" target="_blank">
          <img src="/github.png" alt="GitHub" className="w-6 h-6" />
        </a>
      </li>
    </ul>
  </div>

                        </div>

                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                        <img className="w-72 h-72 rounded-full object-cover " src="/photo.jpeg"
                            // style={{ objectPosition: "30px 50px" }}
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />

        </>
    )
}

export default Home
