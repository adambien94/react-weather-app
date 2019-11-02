import React from "react";

const NextDay = props => {
  const styles = {
    nextDay: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      color: "rgba(0, 0, 0, 0.4)",
      height: "110px"
    },
    day: {
      fontSize: "11px",
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
      fontSize: "17px"
      // color: "#87B1BC"
    },
    nightTemp: {
      fontSize: "11px"
    }
  };

  return (
    <div style={styles.nextDay}>
      <div style={styles.day}>Thru.</div>
      <img src="../../../assets/weather-icon.png" style={styles.icon} />
      {/* <div style={(styles.temp, styles.nightTemp)}>
        {props.data.temp.day.toFixed(0)}°
      </div> */}
      <div style={(styles.temp, styles.dayTemp)}>
        {props.data.temp.eve.toFixed(0)}°
      </div>
      {/* <div style={(styles.temp, styles.nightTemp)}>
        {props.data.temp.night.toFixed(0)}°
      </div> */}
    </div>
  );
};

export default NextDay;
