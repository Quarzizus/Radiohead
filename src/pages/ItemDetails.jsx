import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ContainerForm from "../containers/ContainerForm";
import Target from "../components/Target";
import LoaderPost from "../assets/LoaderPost";
import DeleteItem from "../components/DeleteItem";
import { Link } from "react-router-dom";
import "../styles/ItemDetails.scss";

const ItemDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const deleteData = async () => {
    setLoading(true);
    const deleteConfig = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const itemId = props.match.params.itemId;
    try {
      const response = await fetch(
        `http://localhost:8081/badges/${itemId}`,
        deleteConfig
      );
      const data = await response.json();
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
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  if (loading == true) {
    <ContainerForm>
      <LoaderPost />
    </ContainerForm>;
  }
  return (
    <div className="ContainerHero">
      <ContainerForm>
        <Target
          firstName={data.firstName}
          lastName={data.lastName}
          jobTitle={data.jobTitle}
          twitter={data.email}
          email={"angelpepe@gmail.com"}
        />
        <article className="Actions">
          <h2>Actions</h2>
          <section className="Actions_container-buttons">
            <Link to={`/list/${data.id}/edit`}>
              <button className="Actions_button-edit">Edit</button>
            </Link>
            <button onClick={onOpen} className="Actions_button-delete">
              Delete
            </button>
          </section>
          <Modal open={open}>
            <DeleteItem onClose={onClose} deleteData={deleteData} />
          </Modal>
        </article>
      </ContainerForm>
    </div>
  );
};

export default ItemDetails;
