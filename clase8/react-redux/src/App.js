import React, { Component } from 'react'
import WeatherList from './containers/WeatherList'
import WeatherSearch from './containers/WeatherSearch'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mt-4 mb-5 col-12">
            <WeatherSearch />
          </div>
          <div className="col-12">
            <WeatherList />
          </div>
        </div>
      </div>
    )
  }
}

export default App