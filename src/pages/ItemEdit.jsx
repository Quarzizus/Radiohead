import React from "react";
import ContainerForm from "../assets/ContainerForm";
import LoaderPost from "../components/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";

class ItemEdit extends React.Component {
  state = {
    // Start us with a fetch true
    loading: true,
    error: null,
    form: {
      id: "",
      avatarUrl: "",
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
    const itemId = this.props.match.params.itemId;
    const putConfig = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.form),
    };
    try {
      await fetch(`http://localhost:8081/badges/${itemId}`, putConfig);
      this.setState({
        loading: false,
        error: null,
      });
      this.props.history.push("/list");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  fetchData = async (e) => {
    const itemId = this.props.match.params.itemId;
    try {
      const response = await fetch(`http://localhost:8081/badges/${itemId}`);
      const data = await response.json();
      this.setState({
        loading: false,
        error: null,
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
            <Target
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              jobTitle={this.state.form.jobTitle}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
            />
            <Form
              onChange={this.changeHandler}
              onSubmit={this.submitHandler}
              message={`Save changes`}
              firtsName={this.state.form.firtsName}
              lastName={this.state.form.lastName}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
              jobTitle={this.state.form.jobTitle}
            />
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ItemEdit;
