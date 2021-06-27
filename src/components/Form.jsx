import React from "react";
import "../styles/Form.scss";

const Form = ({ change, submit }) => {
  return (
    <form className="Form">
      <label>First Name</label>
      <input
        onChange={change}
        name="firstName"
        type="text"
        // placeholder={firstName}
      />
      <label>Last Name</label>
      <input
        onChange={change}
        name="lastName"
        type="text"
        // placeholder={lastName}
      />
      <label>Job Title</label>
      <input
        onChange={change}
        name="jobTitle"
        type="text"
        // placeholder={jobTitle}
      />
      <label>Email</label>
      <input
        onChange={change}
        name="email"
        type="email"
        // placeholder={email}
      />
      <label>Twitter</label>
      <input
        onChange={change}
        name="twitter"
        type="text"
        // placeholder={twitter}
      />
      <button className="Form_send" onClick={submit}>
        Send
      </button>
    </form>
  );
};

export default Form;
