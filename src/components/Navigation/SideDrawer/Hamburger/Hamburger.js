import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = props => {
  // ☰
  return <div className={styles.Hamburger} onClick={props.clicked}></div>;
};

export default Hamburger;
