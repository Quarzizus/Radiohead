import React from "react";
import twitter from "../images/TwitterLogo.png";
import github from "../images/GithubLogo.png";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="Footer">
      <h2 className="Footer_name">Miguel Vásquez</h2>
      <section className="Footer_container-icons">
        <a
          href="https://twitter.com/quarzizus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://github.com/Quarzizus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </section>
      <h3 className="Footer_year">2021</h3>
    </footer>
  );
};

export default Footer;
