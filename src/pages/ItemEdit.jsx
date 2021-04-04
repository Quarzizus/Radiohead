import React, { useEffect, useState } from "react";
import ContainerForm from "../containers/ContainerForm";
import LoaderPost from "../assets/LoaderPost";
import Form from "../components/Form";
import Target from "../components/Target";

const ItemEdit = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    avatarUrl: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const itemId = props.match.params.itemId;
    const putConfig = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    try {
      await fetch(`http://localhost:8081/badges/${itemId}`, putConfig);
      setLoading(false);
      props.history.push("/list");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const itemId = props.match.params.itemId;
      try {
        const response = await fetch(`http://localhost:8081/badges/${itemId}`);
        const data = await response.json();
        setForm(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (loading == true) {
    <div className="ItemEdit">
      <ContainerForm>
        <LoaderPost />
      </ContainerForm>
    </div>;
  }
  return (
    <div>
      <ContainerForm>
        <Target
          firstName={form.firstName}
          lastName={form.lastName}
          jobTitle={form.jobTitle}
          twitter={form.twitter}
          email={form.email}
        />
        <Form
          onChange={changeHandler}
          onSubmit={submitHandler}
          firstName={form.firstName}
          lastName={form.lastName}
          twitter={form.twitter}
          email={form.email}
          jobTitle={form.jobTitle}
          message={`Save changes`}
        />
      </ContainerForm>
    </div>
  );
};
export default ItemEdit;
