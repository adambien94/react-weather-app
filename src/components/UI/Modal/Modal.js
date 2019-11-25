import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ title, children }) => {
  return (
    <div className={classes.modalCard}>
      <h1 className={classes.modalTitle}>{title}</h1>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
