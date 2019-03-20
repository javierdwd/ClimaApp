import React, { Component } from "react";
import "./App.css";

import Top from './components/Top';
import Bottom from './components/Bottom';

const endpoint = 'https://wt-7aae5801f0beb40510fbf7db372fc5c9-0.sandbox.auth0-extend.com/clima-apixu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      clima: {}
    };
  }

  componentDidMount() {
    fetch(endpoint)
    .then(response => response.json())
    .then(jsonData => {
      jsonData.current.condition.icon = jsonData.current.condition.icon.replace(
        "64x64",
        "128x128");

      this.setState({ clima: jsonData, isLoaded: true })
    });
  }

  render() {
    const { location, current, forecast } = this.state.clima;
    
    return this.state.isLoaded ? (
      <div className="App">
        <div className="container">
          <Top current={current} location={location} />

          <Bottom days={forecast.forecastday} />
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>  
    );
  }
}

export default App;