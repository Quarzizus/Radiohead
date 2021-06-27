import React from "react";
import "../styles/DeleteItem.scss";

const DeleteItem = ({ onClose, remove }) => {
  return (
    <article className="DeleteItem_container">
      <h2 className="DeleteItem_title">Are you sure?</h2>
      <p className="DeleteItem_p">You are about to delete this item</p>
      <section className="DeleteItem_container-buttons">
        <button className="DeleteItem-cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="DeleteItem-delete" onClick={remove}>
          Delete
        </button>
      </section>
    </article>
  );
};

export default DeleteItem;
