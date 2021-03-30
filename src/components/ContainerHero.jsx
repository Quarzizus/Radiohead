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
  submitHandler = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });
      // prop from reactRouter
      // this is redirect to list
      this.props.history.push("/list");
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
