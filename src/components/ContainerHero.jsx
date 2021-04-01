import React from "react";
import ContainerForm from "../assets/ContainerForm";
import LoaderPost from "../components/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";
import api from "../api";

class ContainerHero extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
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
  submitHandler = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.form),
    };
    try {
      await fetch(`http://localhost:8081/badges`, config);
      this.props.history.push("/list");
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading == true) {
      return (
        <div className="ContainerHero">
          <ContainerForm>
            <LoaderPost />
          </ContainerForm>
        </div>
      );
    } else {
      return (
        <div className="ContainerHero">
          <ContainerForm>
            <Target valuesForm={this.state.form} />
            <Form onChange={this.changeHandler} onSubmit={this.submitHandler} />
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ContainerHero;
