import { useState } from "react";
import logo from "../assets/scratch-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="relative roboto-font w-full h-20 z-40 bg-black py-4 px-10 xl:px-14 grid grid-cols-2 md:grid-cols-3 items-center lg:jsu border-b-2 border-b-red-700">
      {/* Social Media Links */}
      <ul className="hidden text-white md:flex w-full space-x-4">
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
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>
      </ul>
      <a href="#" className="flex md:justify-center">
        <img src={logo} alt="Business Logo" className=" w-11 md:w-16 " />
      </a>
      {/* Nav links Toggle */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="text-white flex justify-end text-center text-2xl lg:hidden hover:text-red-700 transition-colors ease-in duration-200"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {/* Nav Links */}
      <ul
        className={`absolute top-full  ${
          isActive
            ? "-translate-x-40 md:-translate-x-56 opacity-100"
            : "opacity-0 invisible"
        } -right-40 md:-right-56 transition-all duration-700 ease-in-out w-40 md:w-56 py-14 lg:opacity-100 lg:w-full lg:p-0 lg:static lg:visible space-y-6 flex flex-col lg:space-y-0 lg:space-x-6 lg:flex-row lg:bg-inherit items-center bg-red-800 text-white lg:justify-end  xl:space-x-8`}
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
    </nav>
  );
}

export default NavBar;
