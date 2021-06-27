import React from "react";
import UserImg from "./UserImg";
import { Link } from "react-router-dom";
import "../styles/ItemList.scss";

const ItemList = ({ firstName, lastName, id, twitter, jobTitle }) => {
  return (
    <Link to={`/list/${id}`} className="Link">
      <article className="List_card">
        <picture className="List_card--contain-img">
          <UserImg
            firstName={firstName}
            lastName={lastName}
            className="List_card--img"
          />
        </picture>
        <section className="List_card-info">
          <h4 className="List_card-info--name">
            {firstName} {lastName}
          </h4>
          <h4 className="List_card-info--twitter">{twitter}</h4>
          <h4 className="List_card-info--Description">{jobTitle}</h4>
        </section>
      </article>
    </Link>
  );
};

export default ItemList;
