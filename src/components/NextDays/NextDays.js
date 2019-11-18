import React from "react";
import NextDay from "./NextDay/NextDay";
import Loader from "../Loader/Loader";

const NextDays = ({ data, days, daysNum }) => {
  const styles = {
    nextDays: {
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      width: "100%"
    },
    day: {
      borderRight: "1px solid rgba(0,0,0,0.04)",
      flex: "1"
    },
    loader: {
      margin: "0 auto",
      paddingBottom: "37px"
    }
  };

  let nextDays = null;

  if (data) {
    const forecastData = data.slice(1, daysNum + 1);
    nextDays = forecastData.map((dayData, index) => {
      const day = `${days[index + 1].slice(0, 3)}.`;
      return (
        <li style={styles.day} key={`day${index}`}>
          <NextDay data={dayData} day={day} />
        </li>
      );
    });
  } else {
    nextDays = (
      <div style={styles.loader}>
        <Loader color="rgba(0,0,0,0.13)" />
      </div>
    );
  }

  return <ul style={styles.nextDays}>{nextDays}</ul>;
};

export default NextDays;
