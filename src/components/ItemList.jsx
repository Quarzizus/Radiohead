import React from "react";
import "../styles/ItemList.scss";
import Gravatar from "../components/Gravatar";

class ItemList extends React.Component {
  render() {
    return (
      <Link to={`/list/${this.props.id}/edit`} id={this.props.id}>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Gravatar email={this.props.email} className="List_card--img" />
          </picture>
          <section className="List_card-info">
            <h4 className="List_card-info--name">
              {this.props.firtsName} {this.props.lastName}
            </h4>
            <h4 className="List_card-info--twitter">{this.props.twitter}</h4>
            <h4 className="List_card-info--Description">
              {this.props.jobTitle}
            </h4>
          </section>
        </article>
      </Link>
    );
  }
}

export default ItemList;
