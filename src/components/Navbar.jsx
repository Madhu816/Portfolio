import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";


function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "Skills"
        },
        {
            id: 3,
            text: "Projects"
        },
        {
            id: 4,
            text: "Certifications"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
    return (
        <>
            <div className="flex items-center w-full px-6 py-4 md:px-16 bg-white border border-gray-300 rounded-xl shadow-md fixed top-0 left-0 right-0 z-50">

                <div className="flex items-center gap-4">
                    <img
                        src="myphoto.jpeg"
                        className="w-10 h-10 rounded-full object-cover"
                        // style={{ objectPosition: "0px -20px" }}

                        alt="Profile"
                    />

                    <h2
                        className="text-xl md:text-3xl font-bold text-lime-800"
                        style={{ fontFamily: "Poppins" }}
                    >
                        <span>P.</span>Madhu
                    </h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-end">
                    <ul className="flex items-center gap-6 font-bold">
                        {navItems.map((item, id) => (
                            <li key={id} className="hover:text-green-500 hover:underline cursor-pointer">
                                <Link to={item.text.toLowerCase()} smooth={true} duration={500} offset={-80} activeClass="active" >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Icon */}
                <div onClick={() => setMenu(!menu)} className="md:hidden ml-auto text-3xl cursor-pointer">

                    {menu ? 
                    <FaRegWindowClose /> : <FiAlignJustify />}
                </div>
            </div>

            {/* Mobile Menu - Always Visible */}
            {
                menu && (
                <div className="fixed top-10 left-0 w-full bg-white md:hidden shadow-lg z-40">                        <ul className="flex flex-col gap-4 font-bold items-center mt-70 mb-56">
                            {navItems.map((item, id) => (
                                <li key={id} className="hover:text-green-500 hover:underline cursor-pointer">
                                    <Link onClick={() => setMenu(!menu)} 
                                    to={item.text.toLowerCase()} smooth={true} duration={500} offset={-80} activeClass="active" >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                )
            }

        </>
    );
}

export default Navbar;