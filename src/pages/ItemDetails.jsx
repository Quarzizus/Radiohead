import React from "react";
import Modal from "../components/Modal";
import ContainerForm from "../containers/ContainerForm";
import Target from "../components/Target";
import LoaderPost from "../assets/LoaderPost";
import DeleteItem from "../components/DeleteItem";
import { Link } from "react-router-dom";
import "../styles/ItemDetails.scss";

class ItemDetails extends React.Component {
  state = {
    loading: true,
    data: {},
    error: null,
    open: false,
  };

  deleteData = async () => {
    this.setState({
      loading: true,
    });
    const deleteConfig = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const itemId = this.props.match.params.itemId;
    try {
      const response = await fetch(
        `http://localhost:8081/badges/${itemId}`,
        deleteConfig
      );
      const data = await response.json();

      this.props.history.push("/list");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
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
  onClose = () => {
    this.setState({
      open: false,
    });
  };
  onOpen = () => {
    this.setState({
      open: true,
    });
  };
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
              <h2>Actions</h2>
              <section className="Actions_container-buttons">
                <Link to={`/list/${this.state.data.id}/edit`}>
                  <button className="Actions_button-edit">Edit</button>
                </Link>
                <button onClick={this.onOpen} className="Actions_button-delete">
                  Delete
                </button>
              </section>
              <Modal open={this.state.open} onClose={this.onClose}>
                <DeleteItem
                  onClose={this.onClose}
                  deleteData={this.deleteData}
                />
              </Modal>
            </article>
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ItemDetails;
