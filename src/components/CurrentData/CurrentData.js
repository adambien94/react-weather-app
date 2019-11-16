import React from "react";
import "./CurrentData.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";

const CurrentData = props => {
  let mainTemp;

  let currentTemp;
  let description = "";

  if (props.data) {
    let [currentWeather, ...rest] = props.data;
    currentTemp = currentWeather.temp.eve;
    description = currentWeather.weather[0].description;
  }

  if (!props.data || props.loading) {
    mainTemp = <Loader />;
  } else {
    mainTemp = <span className="MainTemp">{currentTemp.toFixed(0)}</span>;
  }

  return (
    <div className="CurrentData">
      <WeatherIcon />
      <div className="MainInfo">
        {mainTemp}
        <span className="Description">{description}</span>
      </div>
    </div>
  );
};

export default CurrentData;
