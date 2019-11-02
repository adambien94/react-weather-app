import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";

class Layout extends Component {
  state = {
    sideDrawerOpened: false
  };

  render() {
    return (
      <Aux>
        <p>t</p>
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
