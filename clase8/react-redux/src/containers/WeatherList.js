import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    console.log(this.props.weather);
    
    return (
      <div>
        {
          this.props.weather.length ?
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (C)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table> : 
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Ups!</h1>
              <p className="lead">There is no city to show, please add one...</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);