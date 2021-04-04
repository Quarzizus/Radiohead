import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";

const useIncreaseCount = (max) => {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
};

const Home = () => {
  return (
    <section className="Home">
      <article className="Home_init">
        <h2 className="Home_init-title">Radiohead concert</h2>
        <p className="Home_init-p">
          Reserva tu ticket ahora mismo y de paso mira quién más comparte tu
          pasión por el rock de los 90s y los 00.
        </p>
        <Link to="/registre">
          <button className="Home_init-button">Start</button>
        </Link>
      </article>
    </section>
  );
};

export default Home;
