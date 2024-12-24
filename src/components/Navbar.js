import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import ToggleSwitch from './ToggleSwitch';


export default function Navbar({ language, onToggle, t}) {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 bg-main  md:px-20 lg:px-40 xl:px-60 py-5" id="backToTop">
        {/* My name */}
        <NavLink to="/">
          <h1 className="text-sm lg:text-4xl  text-white cursor-pointer">{t("Kamel Mohmmed")}</h1>
        </NavLink>
        {/* === My name === */}

        {/* Navigation */}
        <div className="gap-2 lg:gap-4 text-sm sm:text-base md:text-lg flex text-white font-semibold">
          <NavLink to="/moreProjects">
            <h2 className="text-sm lg:text-lg p-2 cursor-pointer">{t("Select More Work")}</h2>
          </NavLink>

          <NavLink to="/resume">
            <h2 className="text-sm lg:text-lg p-2 cursor-pointer">{t("Resume")}</h2>
          </NavLink>

          <Link to="getInTouch" smooth={true} duration={700}>
            <h2 className="cursor-pointer hover:bg-white hover:text-main border-2 border-transparent hover:border-white p-2">
              {t("Get in Touch")}
            </h2>
          </Link>

          <ToggleSwitch language={language} onToggle={onToggle} />

        </div>
        {/* === Navigation === */}
      </div>
      {/* === Navbar === */}
    </>
  );
}
