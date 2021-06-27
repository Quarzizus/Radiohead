import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import ContainerForm from "../containers/ContainerForm";
import Form from "../components/Form";
import Target from "../components/Target";

const ItemEdit = ({ match, history }) => {
  const [user, setUser] = useState({});
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const id = match.params.itemId;
    const userSelect = state.items[id - 1];
    setUser(userSelect);
  }, []);

  const handlerEdit = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = () => {
    dispatch({
      type: "EDIT",
      payload: user,
    });
    history.push("/list");
  };

  return (
    <div>
      <ContainerForm>
        <Target
          firstName={user.firstName}
          lastName={user.lastName}
          twitter={user.twitter}
          email={user.email}
          jobTitle={user.jobTitle}
        />
        <Form
          firstName={user.firstName}
          lastName={user.lastName}
          twitter={user.twitter}
          email={user.email}
          jobTitle={user.jobTitle}
          message={`Save changes`}
          change={handlerEdit}
          submit={handlerSubmit}
        />
      </ContainerForm>
    </div>
  );
};
// };
export default ItemEdit;
