import React from "react";
import classes from "./SideDrawer.module.css";
import { Link } from "react-router-dom";

const SideDrawer = props => {
  const attachedClasses = props.opened
    ? [classes.SideDrawer, classes.SideDrawerOpened]
    : [classes.SideDrawer];

  return (
    <div className={attachedClasses.join(" ")}>
      🤙
      <ul>
        <li>
          <Link to="/" onClick={props.clicked}>
            Forecast
          </Link>
        </li>
        <li>
          <Link to="/test-route" onClick={props.clicked}>
            Test route
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
