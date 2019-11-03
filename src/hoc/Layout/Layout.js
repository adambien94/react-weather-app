import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

class Layout extends Component {
  state = {
    sideDrawerOpened: false
  };

  sideDrawerToggleHandler = () => {
    let menuOpened = !this.state.sideDrawerOpened;
    this.setState({ sideDrawerOpened: menuOpened });
  };

  onClick = () => {
    console.log("hehe");
    this.state.sideDrawerOpened && this.sideDrawerToggleHandler();
  };

  wrapperStyles = [styles.wrapper];

  componentDidMount() {
    this.wrapperStyles = this.state.sideDrawerOpened
      ? [styles.wrapper]
      : [styles.wrapper, styles.blur];
  }

  componentDidUpdate(prevProps) {
    if (this.state.sideDrawerOpened !== prevProps.sideDrawerOpened) {
      this.wrapperStyles = this.state.sideDrawerOpened
        ? [styles.wrapper]
        : [styles.wrapper, styles.blur];
    }
  }

  // PYTANKO. czemu na update dodaje blura dopiero za drugim razem? (jeśli nie dodam do componentDidUpdate)

  render() {
    return (
      <Aux>
        <SideDrawer opened={this.state.sideDrawerOpened} />
        <div className={this.wrapperStyles.join(" ")}>
          <Backdrop clicked={this.onClick} show={this.state.sideDrawerOpened} />
          <Toolbar menuToggle={this.sideDrawerToggleHandler} />
          <main className={styles.Content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
}

export default Layout;
