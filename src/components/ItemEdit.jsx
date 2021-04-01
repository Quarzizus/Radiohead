import React from "react";
import ContainerForm from "../assets/ContainerForm";
import LoaderPost from "../components/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";
import api from "../api";

class ItemEdit extends React.Component {
  state = {
    // Start us with a fetch
    loading: true,
    error: null,
    form: {
      firtsName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
    },
  };
  changeHandler = (e) => {
    this.setState({
      form: {
        // dejamos caer los valores anteriores
        ...this.state.form,
        // y los sobreescribimos,
        // trabajando con corchetes y variables
        [e.target.name]: e.target.value,
      },
    });
  };

  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const itemId = this.props.match.params.itemId;
      const response = await fetch(`http://localhost/8080/list/${itemId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = response.json();
      this.setState({
        loading: false,
        form: data,
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
        <div className="ItemEdit">
          <ContainerForm>
            <LoaderPost />
          </ContainerForm>
        </div>
      );
    } else {
      return (
        <div>
          <ContainerForm>
            <Target valuesForm={this.state.form} />
            <Form onChange={this.changeHandler} onSubmit={this.submitHandler} />
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ItemEdit;
