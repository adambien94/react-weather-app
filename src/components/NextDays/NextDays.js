import React from "react";
import NextDay from "./NextDay/NextDay";

const NextDays = props => {
  const styles = {
    nextDays: {
      display: "flex",
      justifyContent: "space-between",
      margin: "30px 0",
      listStyle: "none",
      padding: "0"
    },
    day: {
      borderRight: "1px solid rgba(0,0,0,0.04)",
      flex: "1"
    }
  };

  let test =
    props.data &&
    props.data.map(dayData => {
      return (
        <li style={styles.day} key={`day${props.data.indexOf(dayData)}`}>
          <NextDay data={dayData} />
        </li>
      );
    });

  return <ul style={styles.nextDays}>{test}</ul>;
};

export default NextDays;
