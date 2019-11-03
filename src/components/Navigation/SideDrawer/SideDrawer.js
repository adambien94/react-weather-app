import { tsPropertySignature } from "@babel/types";

import React from "react";
import styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  let attachedClasses = props.opened
    ? [styles.SideDrawer, styles.SideDrawerOpened]
    : [styles.SideDrawer];
  return <div className={attachedClasses.join(" ")}>🤙</div>;
};

export default SideDrawer;
