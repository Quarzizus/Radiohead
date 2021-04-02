import React from "react";
import ContainerForm from "./ContainerForm";
import LoaderPost from "../assets/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";

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
  //INPUT
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
  //POST
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
      this.setState({
        loading: false,
      });
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
            <Target
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
              jobTitle={this.state.form.jobTitle}
            />
            <Form
              onChange={this.changeHandler}
              onSubmit={this.submitHandler}
              message={`Send`}
            />
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ContainerHero;
