import React from "react";
import classes from "./Loader.module.css";

const Loader = ({ color }) => {
  return (
    <div className={classes.loader}>
      <span className={classes.loaderDot} style={{ color: color }}>
        ☔
      </span>
      <span className={classes.loaderDot} style={{ color: color }}>
        🌞
      </span>
      <span className={classes.loaderDot} style={{ color: color }}>
        ⛄
      </span>
    </div>
  );
};

export default Loader;
