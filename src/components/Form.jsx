import React from "react";
import "../styles/Form.scss";

class Form extends React.Component {
  sendHandler = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form className="Form" onSubmit={this.props.onSubmit}>
        <label>Firts Name</label>
        <input
          onChange={this.props.onChange}
          name="firstName"
          type="text"
          value={this.props.firstName}
          placeholder="Pepe"
        />
        <label>Last Name</label>
        <input
          onChange={this.props.onChange}
          name="lastName"
          type="text"
          value={this.props.lastName}
          placeholder="Perez"
        />
        <label>Job Title</label>
        <input
          onChange={this.props.onChange}
          name="jobTitle"
          type="text"
          value={this.props.jobTitle}
          placeholder="Frontend Developer"
        />
        <label>Email</label>
        <input
          onChange={this.props.onChange}
          name="email"
          type="email"
          value={this.props.email}
          placeholder="correo@example.com"
        />
        <label>Twitter</label>
        <input
          onChange={this.props.onChange}
          name="twitter"
          type="text"
          value={this.props.twitter}
          placeholder="@pepeperez"
        />
        <button onClick={this.sendHandler} className="Form_updateImage">
          Image
        </button>
        <button className="Form_send">{props.message}</button>
      </form>
    );
  }
}

export default Form;
