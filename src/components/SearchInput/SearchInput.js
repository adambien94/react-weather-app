import React from "react";
import classes from "./SearchInput.module.css";

const CityInput = props => {
  const styles = {
    cityInput: {
      border: "none",
      outline: "none",
      display: "block",
      fontSize: "21px",
      padding: "5px 0",
      width: "250px",
      margin: "0 auto",
      borderRadius: "7px",
      textAlign: "center",
      background: "rgba(255, 255, 255, 0.15)",
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
        onClick={() => {
          cityInput.placeholder = "";
        }}
      />
      <div
        style={styles.submit}
        onClick={onClick}
        className={classes.SearchBtn}
      ></div>
    </div>
  );
};

export default CityInput;
