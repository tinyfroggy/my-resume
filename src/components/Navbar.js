import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 bg-main px-3 md:px-20 lg:px-40 xl:px-60 py-5" id="backToTop">
        {/* My name */}
        <NavLink to="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white cursor-pointer">Kamel Mohmmed</h1>
        </NavLink>
        {/* === My name === */}

        {/* Navigation */}
        <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-sm sm:text-base md:text-lg flex text-white font-semibold">
          <NavLink to="/moreProjects">
            <h2 className="p-2 cursor-pointer hover:text-gray-300">Select More Work</h2>
          </NavLink>

          <NavLink to="/resume">
            <h2 className="p-2 cursor-pointer hover:text-gray-300">Resume</h2>
          </NavLink>

          <Link to="getInTouch" smooth={true} duration={700}>
            <h2 className="cursor-pointer hover:bg-white hover:text-main border-4 border-transparent hover:border-white p-2">
              Get in Touch
            </h2>
          </Link>
        </div>
        {/* === Navigation === */}
      </div>
      {/* === Navbar === */}
    </>
  );
}
