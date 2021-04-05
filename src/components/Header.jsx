import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import Banana from "../images/banana.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="container-icon">
        <img src={Banana} className="Header_icon" width="25%" />
      </Link>
      <ul className="Header_menu">
        <li>
          <Link to="/list" className="link">
            List
          </Link>
        </li>
        <li>
          <Link to="/registre" className="link">
            Registre
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/Quarzizus/radiohead-concert"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
