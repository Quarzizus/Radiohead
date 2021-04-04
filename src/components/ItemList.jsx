import React from "react";
import UserImg from "./UserImg";
import { Link } from "react-router-dom";
import "../styles/ItemList.scss";

const ItemList = (props) => {
  return (
    <Link to={`/list/${props.id}`} className="Link">
      <article className="List_card">
        <picture className="List_card--contain-img">
          <UserImg
            firstName={props.firstName}
            lastName={props.lastName}
            className="List_card--img"
          />
        </picture>
        <section className="List_card-info">
          <h4 className="List_card-info--name">
            {props.firstName} {props.lastName}
          </h4>
          <h4 className="List_card-info--twitter">{props.twitter}</h4>
          <h4 className="List_card-info--Description">{props.jobTitle}</h4>
        </section>
      </article>
    </Link>
  );
};

export default ItemList;
