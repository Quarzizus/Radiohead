import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import ContainerForm from "./ContainerForm";
import Form from "../components/Form";
import Target from "../components/Target";

const ContainerHero = () => {
  const { state, dispatch, user, setUser } = useContext(AppContext);
  const { firstName, lastName, jobTitle, twitter } = user;
  const history = useHistory();

  const handlerRegister = (e) => {
    setUser({
      ...user,
      id: state.items.length + 1,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "REGISTER",
      payload: user,
    });
    history.push("/list");
  };

  return (
    <div className="ContainerHero">
      <ContainerForm>
        <Target
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          twitter={twitter}
        />
        <Form change={handlerRegister} submit={handlerSubmit} />
      </ContainerForm>
    </div>
  );
};

export default ContainerHero;
