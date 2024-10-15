import { useState } from "react";
import logo from "../assets/scratch-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="relative roboto-font w-full z-40 bg-black py-4 px-10 xl:px-14 flex justify-between items-center border-b-2 border-b-red-700">
      <div className="flex flex-col items-center">
        <a href="#" className="flex md:justify-start col-span-1">
          <img src={logo} alt="Business Logo" className=" w-11 md:w-16 " />
        </a>
        <h1 className="text-xs text-red-800 text-nowrap pt-2">Scratch & Dent Repairs</h1>
      </div>

      {/* Nav links Toggle */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex w-full justify-end text-white text-2xl lg:hidden hover:text-red-700 transition-colors ease-in duration-200"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="flex flex-row items-center justify-end col-span-3">
        {/* Social Media Links */}
        <ul className="hidden text-white lg:flex flex-row space-x-2 pr-5">
          <li>
            <a
              href="#"
              className="hover:text-red-700 transition-colors ease-in duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-700 transition-colors ease-in duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-700 transition-colors ease-in duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

        {/* Nav Links */}
        <ul
          className={`absolute top-full  ${
            isActive
              ? "-translate-x-40 md:-translate-x-56 opacity-100"
              : "opacity-0 invisible"
          } -right-40 h-72 md:-right-56 transition-all duration-700 ease-in-out w-40 md:w-56 py-14 lg:h-fit lg:w-auto lg:opacity-100 lg:p-0 lg:static lg:visible space-y-6 flex flex-col lg:space-y-0 lg:space-x-2 lg:flex-row lg:justify-end lg:bg-inherit bg-red-800 text-white items-center xl:space-x-4`}
        >
          <li>
            <a
              href="#"
              className="lg:hover:text-red-700 transition-colors ease-in duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lg:hover:text-red-700 transition-colors ease-in duration-200"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lg:hover:text-red-700 transition-colors ease-in duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lg:hover:bg-red-800 lg:bg-red-700 lg:py-2 lg:px-5 lg:rounded-sm"
            >
              Quotes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
