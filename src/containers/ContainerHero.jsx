import ContainerForm from "./ContainerForm";
import LoaderPost from "../assets/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";
import React, { useState } from "react";

const ContainerHero = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    twitter: "",
  });

  //INPUT
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //POST
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    try {
      await fetch(`http://localhost:8081/badges`, config);
      setLoading(false);
      console.log(form);
      props.history.push("/list");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading == true) {
    <div className="ContainerHero">
      <ContainerForm>
        <LoaderPost />
      </ContainerForm>
    </div>;
  }
  return (
    <div className="ContainerHero">
      <ContainerForm>
        <Target
          firstName={form.firstName}
          lastName={form.lastName}
          twitter={form.twitter}
          email={form.email}
          jobTitle={form.jobTitle}
        />
        <Form
          onChange={changeHandler}
          onSubmit={submitHandler}
          message={`Send`}
        />
      </ContainerForm>
    </div>
  );
};

export default ContainerHero;
