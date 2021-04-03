import React from "react";
import { Link } from "react-router-dom";
import Loader from "../assets/Loader";
import "../styles/List.scss";

const List = (props) => {
  if (props.loading == true) {
    return <Loader />;
  } else {
    return (
      <section className="container-List">
        <div className="List">
          <button className="List_button">
            <Link to="/registre" className="List_button-link">
              Registre
            </Link>
          </button>
          {props.children}
        </div>
      </section>
    );
  }
};

export default List;
