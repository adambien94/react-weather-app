import React, { Component } from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import "./Forecast.css";
import NextDays from "../../components/NextDays/NextDays";
import SearchInput from "../../components/SearchInput/SearchInput";
import axios from "../../axios";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Chart from "../../components/Chart/Chart";
import widthErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class Forecast extends Component {
  state = {
    appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
    unit: "metric",
    city: "",
    country: "",
    daysNum: 5,
    forecastData: null,
    units: ["metric", "imperial"],
    daysNums: [3, 4, 5],
    showModal: false,
    modalOption: null,
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
    }&cnt=6`;
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

  setDaysNumHandler = option => {
    this.setState({ daysNum: option });
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
        ? this.state.forecastData
            .slice(1, this.state.daysNum + 1)
            .map(data => data.temp.eve)
        : [];
      const days = DAYS.map(day => {
        return `${day.slice(0, 3)}.`;
      });
      modalContent = (
        <Chart data={temps} labels={days.slice(DAYS.length - temps.length)} />
      );
    } else if (modalOption === "city on map") {
      modalContent = (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            architecto aut ea dolores.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi architecto aut ea dolores.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi architecto
            aut ea dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi architecto aut ea dolores.Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      );
    }

    return (
      <>
        <Backdrop
          show={this.state.showModal}
          clicked={this.modalToggleHandler}
        />
        <SearchInput
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
              <div>
                {this.state.forecastData
                  ? `${DAYS[new Date().getDay()]}, ${new Date().getDate()}`
                  : null}
              </div>
              <div>
                {this.state.forecastData
                  ? `${this.state.city},  ${this.state.country}`
                  : null}
              </div>
            </div>
            <NextDays
              data={this.state.forecastData}
              days={DAYS}
              daysNum={this.state.daysNum}
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
      </>
    );
  }
}

export default withErrorHandler(Forecast);
