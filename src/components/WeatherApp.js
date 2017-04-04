import React, { Component } from 'react';
import SearchWeatherContainer from '../containers/SearchWeatherContainer';
import WeatherContainer from '../containers/WeatherContainer';
import '../styles.css';

class WeatherApp extends Component {
  render() {
    return (
      <div className="App">
          <SearchWeatherContainer/>
          <WeatherContainer/>
      </div>
    );
  }
}



export default WeatherApp;
