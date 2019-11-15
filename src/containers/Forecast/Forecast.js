import React, { Component } from "react";
import CurrentWeather from "../../components/CurrentData/CurrentData";
import Aux from "../../hoc/Auxiliary";
import "./Forecast.css";
import NextDays from "../../components/NextDays/NextDays";
import CityInput from "../../components/CityInput/CityInput";
import axios from "../../axios";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Chart from "../../components/Chart/Chart";

class Forecast extends Component {
  state = {
    appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
    unit: "metric",
    city: "hamburg",
    description: "little rain",
    country: "PL",
    daysNum: 5,
    currentWeather: null,
    currentTemp: null,
    forecastData: null,
    posts: null,
    units: ["metric", "imperial"],
    daysNums: [3, 4, 5, 6, 7],
    showModal: false,
    modalOption: null,
    weekDays: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
    loading: false
  };

  componentDidMount = () => {
    this.getForecastHandler(this.state.city);
    this.getLocation();
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let url =
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&key=AIzaSyBxy4VqKf5amWvzDwGRAneCo6OtR_bHuyU";
        axios
          .get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=51.919438,19.145136&key=AIzaSyBxy4VqKf5amWvzDwGRAneCo6OtR_bHuyU"
          )
          .then(data => {
            console.log(data);
          });
      });
    }
  };

  getForecastHandler = city => {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city +
      this.state.appid}&units=${this.state.unit}&cnt=${this.state.daysNum + 1}`;
    this.setState({ loading: true });

    axios
      .get(url)
      .then(response => {
        const [currentWeather, ...forecastData] = response.data.list;
        const country = response.data.city.country;
        const description = currentWeather.weather[0].description;
        const currentTemp = currentWeather.temp.eve;

        setTimeout(() => {
          this.setState({
            city: city,
            currentWeather: currentWeather,
            currentTemp: currentTemp,
            forecastData: forecastData,
            country: country,
            description: description,
            loading: false
          });
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  setDaysNumHandler = async option => {
    await this.setState({ daysNum: option });
    this.getForecastHandler(this.state.city);
  };

  setUnitHandler = async option => {
    await this.setState({ unit: option });
    this.getForecastHandler(this.state.city);
  };

  modalToggleHandler = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  openModal = async option => {
    await this.setState({ modalOption: option });
    this.modalToggleHandler();
  };

  render() {
    const modalOption = this.state.modalOption;
    let modalContent = null;

    if (modalOption === "forecast chart") {
      const temps = this.state.forecastData
        ? this.state.forecastData.map(data => data.temp.eve)
        : [];
      modalContent = (
        <Chart
          data={temps}
          labels={this.state.weekDays.slice(
            this.state.weekDays.length - temps.length
          )}
        />
      );
    } else if (modalOption === "city on map") {
      modalContent = (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis iusto repellat tenetur reiciendis, animi unde ratione
            sequi delectus rerum est voluptates, neque hic consequuntur?
          </p>
          <h1>🌏</h1>
        </div>
      );
    }

    return (
      <Aux>
        <Backdrop
          show={this.state.showModal}
          clicked={this.modalToggleHandler}
        />
        <CityInput
          submit={city => this.getForecastHandler(city)}
          city={this.state.city}
        />
        <CurrentWeather
          description={this.state.description}
          temp={this.state.currentTemp}
          loading={this.state.loading}
        />
        <div className="DataWrapper">
          <nav className="forecastNav">
            <button
              className="modalBtn"
              onClick={option => this.openModal("city on map")}
            >
              city on map
            </button>
            <button
              className="modalBtn"
              onClick={option => this.openModal("forecast chart")}
            >
              forecast chart
            </button>
          </nav>
          <div className="flexContainer">
            <div className="DataInfo">
              <div>sunday, sep 25</div>
              <div>
                {this.state.city}, {this.state.country}
              </div>
            </div>
            <NextDays
              data={this.state.forecastData}
              days={this.state.weekDays}
            />
            <div className="OptionWrapper">
              <Dropdown
                value={this.state.daysNum}
                valueDescription="days"
                options={this.state.daysNums}
                clicked={option => this.setDaysNumHandler(option)}
              />
              <Dropdown
                value={this.state.unit}
                valueDescription=""
                options={this.state.units}
                clicked={option => this.setUnitHandler(option)}
              />
            </div>
          </div>
        </div>
        <Modal show={this.state.showModal} title={modalOption}>
          {modalContent}
        </Modal>
      </Aux>
    );
  }
}

export default Forecast;
