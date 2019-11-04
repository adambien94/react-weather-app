import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = props => {
  let show = true;
  const toggleList = () => {
    show = !show;
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list} style={{ display: show ? "block" : "none" }}>
        {props.options.map((option, index) => {
          let attachedClasses =
            option === props.value
              ? [styles.item, styles.itemActive]
              : [styles.item];
          return (
            <li
              className={attachedClasses.join(" ")}
              key={`option${index}`}
              onClick={() => props.clicked(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className={styles.SelectBtn} onClick={toggleList}>
        <span className={styles.label}>{props.label}</span>
        <span className={styles.value}>
          {props.value + " " + props.valueDescription}
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
