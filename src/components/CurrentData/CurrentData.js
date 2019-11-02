import React from "react";
import classes from "./CurrentData.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

const CurrentData = () => {
  return (
    <div className="CurrentData">
      <WeatherIcon />
      <div className="MainInfo">
        <span className="MainTemp">12</span>
        <span className="Info">light rain</span>
      </div>
    </div>
  );
};

export default CurrentData;
