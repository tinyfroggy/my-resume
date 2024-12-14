import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 bg-main pt-10 pb-10 pr-60 pl-60 " id='backToTop' >

        {/* My name */}
        <NavLink to="/">
        <h1 className="text-3xl text-white cursor-pointer">Kamel Mohmmed</h1>
        </NavLink>
        {/* === My name === */}

        {/* Navigation */}
        <div className="gap-10 text-lg   flex text-white font-semibold" >

          <NavLink to="/moreProjects">
            <h2 className="p-2  cursor-pointer" >Select More Work</h2>
          </NavLink>

          <NavLink to="/resume">
          <h2 className="p-2  cursor-pointer">resume</h2>
          </NavLink>

          <Link
            to="getInTouch"
            smooth={true}
            duration={700}
          >
            <h2 className="cursor-pointer hover:bg-white hover:text-main border-4  p-2  ">get in touch</h2>
          </Link>
        </div>
        {/* === Navigation === */}

      </div>
      {/* === Navbar === */}
    </>
  )
}