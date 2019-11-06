import React from "react";

const NextDay = props => {
  const styles = {
    nextDay: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      color: "rgba(0, 0, 0, 0.5)",
      height: "110px",
      minWidth: "57px"
    },
    day: {
      fontSize: "12px",
      fontWeight: "600"
    },
    icon: {
      width: "50px",
      height: "50px"
    },
    temp: {
      fontWeight: "600"
    },
    dayTemp: {
      fontSize: "21px"
    }
  };

  return (
    <div style={styles.nextDay}>
      <div style={styles.day}>{props.day}</div>
      {/* <img src="../../../assets/weather-icon.png" style={styles.icon} /> */}

      <h1 style={{ color: "rgba(0,0,0,0.5)" }}>🌤</h1>

      <div style={(styles.temp, styles.dayTemp)}>
        {props.data.temp.eve.toFixed(0)}°
      </div>
    </div>
  );
};

export default NextDay;
