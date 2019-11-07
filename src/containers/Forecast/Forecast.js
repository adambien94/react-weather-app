import React, { Component } from "react";
import CurrentData from "../../components/CurrentData/CurrentData";
import Aux from "../../hoc/Auxiliary";
import "./Forecast.css";
import NextDays from "../../components/NextDays/NextDays";
import CityInput from "../../components/CityInput/CityInput";
import axios from "../../axios";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

class Forecast extends Component {
  state = {
    appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
    unit: "metric",
    city: "hamburg",
    description: "little rain",
    country: "PL",
    daysNum: 3,
    currentData: null,
    currentTemp: null,
    forecastData: null,
    posts: null,
    units: ["metric", "imperial"],
    daysNums: [3, 4, 5, 12],
    modalShow: false
  };

  componentDidMount = () => {
    this.sendRequestHandler(this.state.city);
  };

  sendRequestHandler = city => {
    let url = `daily?q=${city + this.state.appid}&units=${
      this.state.unit
    }&cnt=${this.state.daysNum + 1}`;

    axios
      .get(url)
      .then(response => {
        const [currentData, ...[]] = response.data.list;
        const [, ...forecastData] = response.data.list;
        const country = response.data.city.country;
        const description = currentData.weather[0].description;
        const currentTemp = currentData.temp.eve;

        this.setState({
          city: city,
          currentData: currentData,
          currentTemp: currentTemp,
          forecastData: forecastData,
          country: country,
          description: description
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  setDaysNumHandler = option => {
    this.setState({ daysNum: option }, () => {
      this.sendRequestHandler(this.state.city);
    });
  };

  setUnitHandler = option => {
    this.setState({ unit: option }, () => {
      this.sendRequestHandler(this.state.city);
    });
  };

  modalToggleHandler = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.state.modalShow}
          clicked={this.modalToggleHandler}
        />
        <CityInput
          submit={city => this.sendRequestHandler(city)}
          city={this.state.city}
        />
        <CurrentData
          description={this.state.description}
          temp={this.state.currentTemp}
        />
        <div className="DataWrapper">
          <nav className="forecastNav">
            <button className="forecastBtn" onClick={this.modalToggleHandler}>
              city on map
            </button>
            <button className="forecastBtn" onClick={this.modalToggleHandler}>
              forecast chart
            </button>
          </nav>
          <div className="DataInfo">
            <div>sunday, sep 25</div>
            <div>
              {this.state.city}, {this.state.country}
            </div>
          </div>
          <NextDays data={this.state.forecastData} />
          <div className="OptionWrapper">
            <Dropdown
              label="forecast"
              value={this.state.daysNum}
              valueDescription="days"
              options={this.state.daysNums}
              clicked={option => this.setDaysNumHandler(option)}
            />
            <Dropdown
              label="units"
              value={this.state.unit}
              valueDescription=""
              options={this.state.units}
              clicked={option => this.setUnitHandler(option)}
            />
          </div>
        </div>
        <Modal show={this.state.modalShow} title="Forecast chart">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            minima possimus molestiae nobis, blanditiis eius facilis accusantium
            incidunt laborum doloremque doloribus. Ipsa ullam unde dolorum, rem
            officia tenetur aperiam harum.
          </p>
        </Modal>
      </Aux>
    );
  }
}

export default Forecast;
