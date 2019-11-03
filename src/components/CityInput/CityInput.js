import React from "react";
import classes from "./CityInput.module.css";

const CityInput = props => {
  const styles = {
    cityInput: {
      border: "none",
      outline: "none",
      display: "block",
      fontSize: "19px",
      padding: "4px 0",
      margin: "0 auto",
      borderRadius: "7px",
      textAlign: "center",
      background: "rgba(255, 255, 255, 0.2)",
      color: "#fff",
      fontWeight: "300",
      textTransform: "capitalize",
      fontFamily: "Nunito"
    },
    wrapper: {
      position: "relative"
    },
    submit: {
      position: "absolute",
      top: "0",
      right: "0"
    }
  };

  let cityInput = null;

  let city = props.city;

  const updateCity = event => {
    city = event.target.value;
  };

  const onClick = () => {
    props.submit(city);
    cityInput.value = "";
    cityInput.placeholder = city;
  };

  // cityInput.addEventListener("keydown", e => {
  //   if (e.keyCode === 13) {
  //     console.log("hehe");
  //   }
  // });

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder={props.city}
        style={styles.cityInput}
        className={classes.CityInput}
        ref={input => {
          cityInput = input;
        }}
        onChange={event => updateCity(event)}
      />
      <button style={styles.submit} onClick={onClick}>
        🔍
      </button>
    </div>
  );
};

export default CityInput;
