import React from "react";
import HomeAside from "../images/RadioheadHome.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  return (
    <section className="Home">
      <article className="Home_aside-container">
        <img src={HomeAside} alt="" className="Home_aside-img" />
      </article>
      <article className="Home_init">
        <h2 className="Home_init-title">Radiohead concert</h2>
        <p className="Home_init-p">
          Reserver your ticket rigth now and look who more share with you the
          passion for the 90s, 00s rock
        </p>
        <Link to="/register">
          <button className="Home_init-button">Start</button>
        </Link>
      </article>
    </section>
  );
};

export default Home;
