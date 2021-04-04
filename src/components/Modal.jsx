import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const Modal = (props) => {
  if (!props.open) {
    return null;
  }
  return ReactDOM.createPortal(
    <article className="Modal-C">
      <section className="Modal_options">
        <button onClick={props.onClose} className="Modal_options-button">
          X
        </button>
        {props.children}
      </section>
    </article>,
    document.getElementById("Portal")
  );
};

export default Modal;
