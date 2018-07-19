import React, { Component } from 'react'
import search from 'youtube-api-v3-search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import VideosContainer from './containers/VideosContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <VideosContainer />
      </div>
    );
  }
}

export default App;
