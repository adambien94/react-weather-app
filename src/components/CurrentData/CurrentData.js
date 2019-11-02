import React from "react";
import classes from "./CurrentData.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import { tsPropertySignature } from "@babel/types";

const CurrentData = props => {
  return (
    <div className="CurrentData">
      <WeatherIcon />
      <div className="MainInfo">
        <span className="MainTemp">12</span>
        <span className="Description">{props.description}</span>
      </div>
    </div>
  );
};

export default CurrentData;
