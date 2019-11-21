import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import TestMap from "../../Map/Map";

const Dropdown = props => {
  const [show, setShow] = React.useState(false);

  const toggleList = () => {
    setShow(currentShow => (currentShow = !show));
  };

  const itemClick = option => {
    option !== props.value && props.clicked(option);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list} style={{ display: show ? "block" : "none" }}>
        {props.options.map((option, index) => {
          let attachedClasses =
            option === props.value
              ? [classes.item, classes.itemActive]
              : [classes.item];
          return (
            <li
              className={attachedClasses.join(" ")}
              key={`option${index}`}
              onClick={() => itemClick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className={classes.SelectBtn} onClick={toggleList}>
        <span className={classes.value}>
          {props.value + " " + props.valueDescription}
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
