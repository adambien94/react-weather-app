import React from "react";
import styles from "./Hamburger.module.css";

const Backdrop = props => {
  return (
    <div className={styles.Backdrop} onClick={props.clicked}>
      ☰
    </div>
  );
};

export default Backdrop;
