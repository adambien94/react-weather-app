import React from "react";
import Hamburger from "./../SideDrawer/Hamburger/Hamburger";

const Toolbar = props => {
  return (
    <div>
      <Hamburger clicked={props.menuToggle} />
    </div>
  );
};

export default Toolbar;
