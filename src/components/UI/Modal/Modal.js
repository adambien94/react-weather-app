import React from "react";

const Modal = props => {
  const styles = {
    modalCard: {
      width: "77%",
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
    },
    modalTitle: {
      textAlign: "left",
      fontSize: "17px",
      color: "rgba(0,0,0,0.5)",
      fontWeight: "500",
      lineHeight: "17px",
      paddingBottom: "11px",
      borderBottom: "1px solid rgba(0,0,0,0.04)",
      marginBottom: "21px"
    },
    modalContent: {}
  };

  const [show, setShow] = React.useState(false);

  const test = () => {
    setShow(currentShow => (currentShow = !show));
  };

  return (
    <div style={styles.modalCard}>
      <h1 style={styles.modalTitle}>{props.title}</h1>
      <div style={styles.modalContent}>{props.children}</div>
    </div>
  );
};

export default Modal;
