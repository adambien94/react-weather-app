import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <div
      className={classes.modalCard}
      style={{ display: props.show ? "block" : "none" }}
    >
      <h1 className={classes.modalTitle}>{props.title}</h1>
      <div className={classes.modalContent}>{props.children}</div>
    </div>
  );
};

export default Modal;
