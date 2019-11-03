import React from "react";
import "./CurrentData.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

const CurrentData = props => {
  return (
    <div className="CurrentData">
      <WeatherIcon />
      <div className="MainInfo">
        {props.temp === null ? (
          <span className="MainTemp">...</span>
        ) : (
          <span className="MainTemp">{props.temp.toFixed(0)}</span>
        )}
        <span className="Description">{props.description}</span>
      </div>
    </div>
  );
};

export default CurrentData;
