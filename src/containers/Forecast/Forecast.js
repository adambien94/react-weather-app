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
    city: "",
    country: "PL",
    daysNum: 5,
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
    this.getLocation();
  };

  getLocation = () => {
    if (navigator.geolocation) {
      this.setState({ loading: true });
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `weather?lat=${latitude}&lon=${longitude +
          this.state.appid}`;

        axios
          .get(url)
          .then(async response => {
            const city = response.data.name;
            await this.setState({ city: city });
            this.getForecastHandler(this.state.city);
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  };

  getForecastHandler = city => {
    const url = `forecast/daily?q=${city + this.state.appid}&units=${
      this.state.unit
    }&cnt=${this.state.daysNum + 1}`;
    this.setState({ loading: true });

    axios
      .get(url)
      .then(response => {
        const forecastData = response.data.list;
        const country = response.data.city.country;

        setTimeout(() => {
          this.setState({
            city: city,
            forecastData: forecastData,
            country: country,
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
          <p>...</p>
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
          data={this.state.forecastData}
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
