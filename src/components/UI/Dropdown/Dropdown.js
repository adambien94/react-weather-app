import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import TestMap from "../../Map/Map";
import { Transition, animated } from "react-spring/renderprops";

const Dropdown = props => {
  const [show, setShow] = React.useState(false);

  const toggleList = () => {
    setShow(currentShow => (currentShow = !show));
  };

  const itemClick = option => {
    option !== props.value && props.clicked(option);
    setTimeout(() => {
      toggleList();
    }, 79);
  };

  return (
    <div className={classes.wrapper}>
      <Transition
        native
        items={show}
        from={{
          opacity: 1,
          transform: "translateY(0px)"
        }}
        enter={{
          opacity: 1,
          transform: "translateY(0)"
        }}
        leave={{
          opacity: 0,
          transform: "translateY(23px)"
        }}
        config={{
          mass: 1,
          tension: 470,
          friction: 26
        }}
      >
        {show =>
          show &&
          (animationProps => (
            <animated.div style={animationProps}>
              <ul className={classes.list}>
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
            </animated.div>
          ))
        }
      </Transition>
      <div className={classes.SelectBtn} onClick={toggleList}>
        <span className={classes.value}>
          {props.value + " " + props.valueDescription}
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
