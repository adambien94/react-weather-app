import React from "react";
import classes from "./SideDrawer.module.css";
import { NavLink } from "react-router-dom";

const SideDrawer = props => {
  const attachedClasses = props.opened
    ? [classes.SideDrawer, classes.SideDrawerOpened]
    : [classes.SideDrawer];

  return (
    <div className={attachedClasses.join(" ")}>
      🤙
      <ul>
        <li>
          <NavLink
            activeClassName={classes.active}
            exact
            to="/"
            onClick={props.clicked}
          >
            Forecast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test-route"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            Test route
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
