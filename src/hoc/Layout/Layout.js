import React, { Component } from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import { Transition, animated } from "react-spring/renderprops";

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

  wrapperclasses = [classes.wrapper];

  componentDidMount() {
    this.wrapperclasses = this.state.sideDrawerOpened
      ? [classes.wrapper]
      : [classes.wrapper, classes.blur];
  }

  componentDidUpdate(prevProps) {
    if (this.state.sideDrawerOpened !== prevProps.sideDrawerOpened) {
      this.wrapperclasses = this.state.sideDrawerOpened
        ? [classes.wrapper]
        : [classes.wrapper, classes.blur];
    }
  }

  // PYTANKO. czemu na update dodaje blura dopiero za drugim razem? (jeśli nie dodam do componentDidUpdate)
  //  jak przekazac propsa do props.children..?

  render() {
    return (
      <>
        <Transition
          native
          items={this.state.sideDrawerOpened}
          from={{
            transform: "translateX(-100%)"
          }}
          enter={{
            transform: "translateX(0)"
          }}
          leave={{
            transform: "translateX(-100%)"
          }}
        >
          {show =>
            show &&
            (animationProps => (
              <animated.div style={animationProps}>
                <SideDrawer opened={this.state.sideDrawerOpened} />
              </animated.div>
            ))
          }
        </Transition>
        <div className={this.wrapperclasses.join(" ")}>
          <Backdrop clicked={this.onClick} show={this.state.sideDrawerOpened} />
          <Toolbar menuToggle={this.sideDrawerToggleHandler} />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </>
    );
  }
}

export default Layout;
