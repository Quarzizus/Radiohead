import React from "react";
import "../styles/DeleteItem.scss";

const DeleteItem = (props) => {
  return (
    <article className="DeleteItem_container">
      <h2 className="DeleteItem_title">Are you sure?</h2>
      <p className="DeleteItem_p">You are about to delete this item</p>
      <section className="DeleteItem_container-buttons">
        <button className="DeleteItem-cancel" onClick={props.onClose}>
          Cancel
        </button>
        <button className="DeleteItem-delete" onClick={props.deleteData}>
          Delete
        </button>
      </section>
    </article>
  );
};

export default DeleteItem;
