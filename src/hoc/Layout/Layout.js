import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import CityInput from "../../components/CityInput/CityInput";

class Layout extends Component {
  state = {
    sideDrawerOpened: false
  };

  render() {
    return (
      <Aux>
        <p>t</p>
        <CityInput />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
