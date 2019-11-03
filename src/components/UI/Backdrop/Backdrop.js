import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = props => {
  return (
    <div
      className={styles.Backdrop}
      onClick={props.clicked}
      style={{ display: props.show ? "block" : "none" }}
    ></div>
  );
};

export default Backdrop;
