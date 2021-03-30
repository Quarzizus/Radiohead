import React from "react";
import "../styles/Home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="Home">
        <article className="Home_init">
          <h2 className="Home_init-title">Radiohead concert</h2>
          <p className="Home_init-p">
            Reserva tu ticket ahora mismo y de paso mira quién más comparte tu
            pasión por el rock de los 90s y los 00. Reserva tu ticket ahora
            mismo y de paso mira
          </p>
          <button className="Home_init-button">Start</button>
        </article>
      </section>
    );
  }
}

export default Home;
