import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Forecast from "./containers/Forecast/Forecast";
import TestRoute from "./containers/TestRoute/TestRoute";
import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/" exact component={Forecast} />
            <Route path="/test-route" exact component={TestRoute} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
