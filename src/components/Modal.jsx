import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const Modal = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <article className="Modal-C">
      <section className="Modal_options">
        <button onClick={onClose} className="Modal_options-button">
          X
        </button>
        {children}
      </section>
    </article>,
    document.getElementById("Portal")
  );
};

export default Modal;
