import logo from "../assets/scratch-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  return (
    <nav className="roboto-font w-full bg-black py-4 px-10 xl:px-14 grid grid-cols-2 md:grid-cols-3 items-center border-b-2 border-b-red-700">
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
      <button className="text-white flex justify-end text-2xl lg:hidden hover:text-red-700 transition-colors ease-in duration-200">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="hidden text-white lg:flex justify-end space-x-4 xl:space-x-8">
        <li>
          <a
            href="#"
            className="hover:text-red-700 transition-colors ease-in duration-200"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-red-700 transition-colors ease-in duration-200"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-red-700 transition-colors ease-in duration-200"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-red-800 bg-red-700 py-2 px-5 rounded-sm"
          >
            Qoutes
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
