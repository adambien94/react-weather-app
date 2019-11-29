import React, { Component } from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
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
    this.state.sideDrawerOpened && this.sideDrawerToggleHandler();
  };

  wrapperClasses = [classes.wrapper];

  componentDidMount() {
    this.wrapperClasses = this.state.sideDrawerOpened
      ? [classes.wrapper]
      : [classes.wrapper, classes.blur];
  }

  componentDidUpdate(prevProps) {
    if (this.state.sideDrawerOpened !== prevProps.sideDrawerOpened) {
      this.wrapperClasses = this.state.sideDrawerOpened
        ? [classes.wrapper]
        : [classes.wrapper, classes.blur];
    }
  }
  // PYTANKO. czemu na update dodaje blura dopiero za drugim razem? (jeśli nie dodam do componentDidUpdate)

  render() {
    return (
      <>
        <SideDrawer
          opened={this.state.sideDrawerOpened}
          clicked={this.sideDrawerToggleHandler}
        />
        <div className={this.wrapperClasses.join(" ")}>
          <Backdrop clicked={this.onClick} show={this.state.sideDrawerOpened} />
          <Toolbar menuToggle={this.sideDrawerToggleHandler} />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </>
    );
  }
}

export default Layout;
