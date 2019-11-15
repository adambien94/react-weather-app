import React from "react";
import "./CurrentData.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";

const CurrentData = props => {
  let test;

  if (props.temp === null || props.loading) {
    test = <Loader />;
  } else {
    test = <span className="MainTemp">{props.temp.toFixed(0)}</span>;
  }

  return (
    <div className="CurrentData">
      <WeatherIcon />
      <div className="MainInfo">
        {test}
        <span className="Description">{props.description}</span>
      </div>
    </div>
  );
};

export default CurrentData;
