import React from "react";
import NextDay from "./NextDay/NextDay";

const NextDays = ({ data, days }) => {
  const styles = {
    nextDays: {
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      width: "100%",
      overflowX: "scroll"
    },
    day: {
      borderRight: "1px solid rgba(0,0,0,0.04)",
      flex: "1"
    }
  };

  let nextDays = null;

  if (data) {
    const [i, ...forecastData] = data;
    nextDays = forecastData.map((dayData, index) => {
      return (
        <li style={styles.day} key={`day${index}`}>
          <NextDay data={dayData} day={days[index]} />
        </li>
      );
    });
  }

  return <ul style={styles.nextDays}>{nextDays}</ul>;
};

export default NextDays;
