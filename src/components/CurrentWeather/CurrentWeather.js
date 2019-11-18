import React from "react";
import classes from "./CurrentWeather.module.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";

const CurrentData = props => {
  let currentTemp;
  let description = "";

  if (props.data) {
    let [currentWeather, ...rest] = props.data;
    currentTemp = currentWeather.temp.eve;
    description = currentWeather.weather[0].description;
  }

  let mainTemp;
  if (!props.data || props.loading) {
    mainTemp = <Loader color="#ffffff" />;
  } else {
    mainTemp = (
      <span className={classes.MainTemp}>{currentTemp.toFixed(0)}</span>
    );
  }

  return (
    <div className={classes.CurrentData}>
      <WeatherIcon />
      <div className={classes.MainInfo}>
        {mainTemp}
        <span className={classes.Description}>{description}</span>
      </div>
    </div>
  );
};

export default CurrentData;
