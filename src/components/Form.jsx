import React from "react";
import "../styles/Form.scss";

const Form = (props) => {
  const sendHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="Form" onSubmit={props.onSubmit}>
      <label>Firts Name</label>
      <input
        onChange={props.onChange}
        name="firstName"
        type="text"
        value={props.firstName}
        placeholder="Pepe"
      />
      <label>Last Name</label>
      <input
        onChange={props.onChange}
        name="lastName"
        type="text"
        value={props.lastName}
        placeholder="Perez"
      />
      <label>Job Title</label>
      <input
        onChange={props.onChange}
        name="jobTitle"
        type="text"
        value={props.jobTitle}
        placeholder="Frontend Developer"
      />
      <label>Email</label>
      <input
        onChange={props.onChange}
        name="email"
        type="email"
        value={props.email}
        placeholder="correo@example.com"
      />
      <label>Twitter</label>
      <input
        onChange={props.onChange}
        name="twitter"
        type="text"
        value={props.twitter}
        placeholder="@pepeperez"
      />
      <button className="Form_send">{props.message}</button>
    </form>
  );
};

export default Form;
