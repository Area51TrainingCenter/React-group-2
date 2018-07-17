import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from './containers/Contacts'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Contacts />
      </div>
    );
  }
}

export default App;
