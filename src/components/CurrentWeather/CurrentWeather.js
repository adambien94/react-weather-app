import React from "react";
import classes from "./CurrentWeather.module.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";

const CurrentWeather = props => {
  let currentTemp;
  let description = "";
  let iconId;

  if (props.data) {
    let [currentWeather, ...rest] = props.data;
    currentTemp = currentWeather.temp.eve;
    description = currentWeather.weather[0].description;
    iconId = currentWeather.weather[0].icon;
  }

  let mainTemp;
  let weatherIcon;
  if (!props.data || props.loading) {
    mainTemp = <Loader color="#ffffff" />;
    weatherIcon = null;
  } else {
    mainTemp = (
      <span className={classes.MainTemp}>{currentTemp.toFixed(0)}</span>
    );
    weatherIcon = <WeatherIcon iconId={iconId} type="light" />;
  }

  return (
    <div className={classes.CurrentData}>
      <div className={classes.IconWrapper}>{weatherIcon}</div>
      <div className={classes.MainInfo}>
        {mainTemp}
        <span className={classes.Description}>{description}</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
