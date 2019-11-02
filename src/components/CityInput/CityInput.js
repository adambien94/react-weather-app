import React from "react";
import classes from "./CityInput.css";
import { tsPropertySignature } from "@babel/types";

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
    ":placeholder": {
      color: "rgba(255, 255, 255, 0.6)"
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

  let city = "";

  const updateCity = event => {
    city = event.target.value;
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder={props.city}
        style={styles.cityInput}
        className="CityInput"
        onChange={event => updateCity(event)}
      />
      <button style={styles.submit} onClick={() => props.submit(city)}>
        sub
      </button>
    </div>
  );
};

export default CityInput;
