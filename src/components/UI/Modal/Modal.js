import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <div
      className={classes.modalCard}
      style={{
        transform: props.show
          ? "translate(-50%, -50%)"
          : "translate(-50%, calc(-60vh - 100%))"
      }}
    >
      <h1 className={classes.modalTitle}>{props.title}</h1>
      <div className={classes.modalContent}>{props.children}</div>
    </div>
  );
};

export default Modal;
