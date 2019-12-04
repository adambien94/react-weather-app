import React from "react";
import WeatherIcon from "../../CurrentWeather/WeatherIcon/WeatherIcon";

const NextDay = props => {
  const styles = {
    nextDay: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      color: "rgba(0, 0, 0, 0.73)",
      height: "100%",
      minWidth: "57px"
    },
    day: {
      fontSize: "15px",
      fontWeight: "600"
    },
    icon: {
      width: "33px",
      height: "33px"
    },
    temp: {
      fontWeight: "600"
    },
    dayTemp: {
      fontSize: "23px"
    }
  };

  let iconId = props.data.weather[0].icon;

  return (
    <div style={styles.nextDay}>
      <div style={styles.day}>{props.day}</div>

      <div style={styles.icon}>
        <WeatherIcon iconId={iconId} type="dark" />
      </div>
      <div style={(styles.temp, styles.dayTemp)}>
        {props.data.temp.eve.toFixed(0) + "°"}
      </div>
    </div>
  );
};

export default NextDay;
