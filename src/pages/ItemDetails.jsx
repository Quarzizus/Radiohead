import React, { useEffect, useState, useContext } from "react";
import Modal from "../components/Modal";
import ContainerForm from "../containers/ContainerForm";
import Target from "../components/Target";
import LoaderPost from "../assets/LoaderPost";
import DeleteItem from "../components/DeleteItem";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/ItemDetails.scss";

const ItemDetails = ({ match, history }) => {
  const { state, dispatch } = useContext(AppContext);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = match.params.itemId;
    const user = state.items[id - 1];
    setUser(user);
  }, []);

  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  const handlerRemove = () => {
    dispatch({
      type: "REMOVE",
      payload: user.id,
    });
    history.push("/list");
  };

  return (
    <div className="ContainerHero">
      <ContainerForm>
        <Target
          firstName={user.firstName}
          lastName={user.lastName}
          jobTitle={user.jobTitle}
          twitter={user.twitter}
          email={user.email}
        />
        <article className="Actions">
          <h2>Actions</h2>
          <section className="Actions_container-buttons">
            <Link to={`/list/${user.id}/edit`}>
              <button className="Actions_button-edit">Edit</button>
            </Link>
            <button onClick={onOpen} className="Actions_button-delete">
              Delete
            </button>
          </section>
          <Modal open={open} onClose={onClose}>
            <DeleteItem onClose={onClose} remove={handlerRemove} />
          </Modal>
        </article>
      </ContainerForm>
    </div>
  );
};

export default ItemDetails;
