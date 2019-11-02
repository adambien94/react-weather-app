import React, { Component } from "react";
import Forecast from "./containers/Forecast/Forecast";
import Layout from "./hoc/Layout/Layout";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Forecast />
        </Layout>
      </div>
    );
  }
}

export default App;
