import React from "react";

const WeatherIcon = ({ iconId, type }) => {
  let brightness;
  if (type === "light") {
    brightness = "brightness(200%) grayscale(1)";
  } else if (type === "dark") {
    brightness = "brightness(57%) grayscale(1)";
  }
  const styles = {
    width: "100%",
    filter: brightness
  };
  const source = `./images/${iconId}.png`;
  return <img src={source} alt="" style={styles} />;
};

export default WeatherIcon;
