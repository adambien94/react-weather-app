import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import classes from "./Chart.module.css";

const Chart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "label",
        data: data,
        backgroundColor: [
          "#7AA7F9",
          "#7AA7F9",
          "#7AA7F9",
          "#7AA7F9",
          "#7AA7F9",
          "#7AA7F9",
          "#7AA7F9"
        ],
        barThickness: 7
      }
    ]
  };

  return (
    <div className={classes.chart}>
      {data ? (
        <Bar
          data={chartData}
          width={100}
          height={70}
          options={{
            title: {
              display: false
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    color: "rgba(0,0,0,0.03)"
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(0,0,0,0)"
                  }
                }
              ]
            }
          }}
        />
      ) : (
        <p>no data 😑</p>
      )}
    </div>
  );
};

export default Chart;
