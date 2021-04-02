import React from "react";
import ContainerForm from "../assets/ContainerForm";
import Target from "./Target";
import LoaderPost from "../components/LoaderPost";
import { Link } from "react-router-dom";
import "../styles/ItemDetails.scss";

class ItemDetails extends React.Component {
  state = {
    loading: true,
    data: {},
    error: null,
  };

  fetchData = async () => {
    const itemId = this.props.match.params.itemId;
    try {
      const response = await fetch(`http://localhost:8081/badges/${itemId}`);
      const data = await response.json();
      this.setState({
        data: data,
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.loading == true) {
      return (
        <ContainerForm>
          <LoaderPost />
        </ContainerForm>
      );
    } else {
      return (
        <div className="ContainerHero">
          <ContainerForm>
            <Target
              firstName={this.state.data.firstName}
              lastName={this.state.data.lastName}
              jobTitle={this.state.data.jobTitle}
              twitter={this.state.data.twitter}
              email={this.state.data.email}
            />
            <article className="Actions">
              <h2>Actions:</h2>
              <Link to={`/list/${this.state.data.id}/edit`}>
                <button className="Actions_button-edit">Edit</button>
              </Link>
              <button className="Actions_button-delete">Delete</button>
            </article>
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ItemDetails;
