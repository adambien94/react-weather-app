import React from "react";

const Modal = props => {
  const styles = {
    width: "70%",
    maxWidth: "500px",
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: "7px",
    position: "absolute",
    zIndex: "10",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.17)",
    padding: "20px",
    boxSizing: "borger-box",
    textAlign: "center",
    display: props.show ? "block" : "none"
  };

  const [show, setShow] = React.useState(false);

  const test = () => {
    setShow(currentShow => (currentShow = !show));
  };

  return <div style={styles}>{props.children}</div>;
};

export default Modal;
