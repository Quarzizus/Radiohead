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
            <Target valuesForm={this.state.form} />
            <Form onChange={this.changeHandler} onSubmit={this.submitHandler} />
          </ContainerForm>
        </div>
      );
    }
  }
}

export default ItemEdit;
