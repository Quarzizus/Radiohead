import React from "react";
import "../styles/ItemList.scss";
import Gravatar from "../components/Gravatar";

class ItemList extends React.Component {
  render() {
    return (
      <article className="List_card" id={this.props.id}>
        <picture className="List_card--contain-img">
          <Gravatar email={this.props.email} className="List_card--img" />
        </picture>
        <section className="List_card-info">
          <h4 className="List_card-info--name">
            {this.props.firstName} {this.props.lastName}
          </h4>
          <h4 className="List_card-info--twitter">{this.props.twitter}</h4>
          <h4 className="List_card-info--Description">{this.props.jobTitle}</h4>
        </section>
      </article>
    );
  }
}

export default ItemList;
