import React from "react";
import { Link } from "react-router-dom";
import Loader from "../assets/Loader";
import "../styles/List.scss";

const List = ({ children }) => {
  return (
    <section className="container-List">
      <div className="List">
        <button className="List_button">
          <Link to="/register" className="List_button-link">
            Register
          </Link>
        </button>
        {children}
      </div>
    </section>
  );
};

export default List;
