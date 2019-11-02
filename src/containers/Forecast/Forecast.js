import React, { Component } from "react";
import CurrentData from "../../components/CurrentData/CurrentData";
import Aux from "../../hoc/Auxiliary";
import classes from "./Forecast.css";
import NextDays from "../../components/NextDays/NextDays";
import CityInput from "../../components/CityInput/CityInput";
import axios from "../../axios";

class Forecast extends Component {
  state = {
    appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
    units: "metric",
    city: "opole",
    description: "little rain",
    country: "PL",
    daysNum: 5,
    currentData: null,
    forecastData: null,
    posts: null
  };

  componentDidMount = () => {
    this.testFunHandler("opole");
  };

  testFunHandler = city => {
    let url =
      "daily?q=" +
      city +
      this.state.appid +
      "&units=" +
      this.state.units +
      "&cnt=" +
      this.state.daysNum;

    axios
      .get(url)
      .then(response => {
        const [currentData, ...[]] = response.data.list;
        const [, ...forecastData] = response.data.list;
        const country = response.data.city.country;
        const description = currentData.weather[0].description;
        this.setState({
          city: city,
          currentData: currentData,
          forecastData: forecastData,
          country: country,
          description: description
        });
        console.log(this.state.forecastData[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Aux>
        <CityInput submit={city => this.testFunHandler(city)} />
        <CurrentData description={this.state.description} />
        <div className="DataWrapper">
          <div className="DataInfo">
            <div>sunday, sep 25</div>
            <div>
              {this.state.city}, {this.state.country}
            </div>
          </div>
          <NextDays data={this.state.forecastData} />
        </div>
      </Aux>
    );
  }
}

export default Forecast;
