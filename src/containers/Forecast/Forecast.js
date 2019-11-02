import React, { Component } from "react";
import CityInput from "../../components/CityInput/CityInput";
import CurrentData from "../../components/CurrentData/CurrentData";
import Aux from "../../hoc/Auxiliary";
import classes from "./Forecast.css";

class Forecast extends Component {
  state = {
    test: {
      imie: "adam",
      wiek: 9
    }
  };

  render() {
    return (
      <Aux>
        <CurrentData />
        <div className="DataWrapper">asdasds</div>
      </Aux>
    );
  }
}

export default Forecast;
