import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const navigation = () => (
  <nav className="fixed top-0 z-20 w-full">
    <ul className="flex justify-end">
      <li className="">
        <a
          href="https://www.facebook.com/coneflowerconsulting"
          className="block px-2 py-1 mr-4 text-white uppercase shadow-md bg-purple hover:bg-orange"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </li>
      <li className="">
        <a
          className="block px-2 py-1 mr-4 text-white uppercase shadow-md bg-purple hover:bg-orange"
          href="https://www.instagram.com/coneflowerconsulting/"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </li>
      <li className="">
        <a
          className="block px-2 py-1 mr-4 text-white uppercase shadow-md bg-purple hover:bg-orange"
          href="https://www.linkedin.com/company/coneflower-consulting/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </li>
      <li className="">
        <a
          id="contactButton"
          href="#contact"
          className="block px-4 py-2 mr-4 text-white uppercase shadow-md bg-purple hover:bg-orange"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default navigation;
