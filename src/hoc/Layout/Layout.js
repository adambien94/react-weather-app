import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    sideDrawerOpened: false
  };

  sideDrawerToggleHandler = () => {
    let menuOpened = !this.state.sideDrawerOpened;
    this.setState({ sideDrawerOpened: menuOpened });
  };

  onClick = () => {
    this.state.sideDrawerOpened && this.sideDrawerToggleHandler();
  };

  render() {
    return (
      <Aux>
        <Toolbar menuToggle={this.sideDrawerToggleHandler} />
        <SideDrawer opened={this.state.sideDrawerOpened} />
        <main className={styles.Content} onClick={this.onClick}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
