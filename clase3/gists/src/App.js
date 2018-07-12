import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import GistsList from './components/GistsList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      gists: [],
    }
  }

  componentDidMount() {
    const gistsAPI = 'https://api.github.com/users/gaearon/gists'
    fetch(gistsAPI).then(response => response.json()).then(data => {
      this.setState({ gists: data })
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <div className="container">
        <GistsList gists={this.state.gists} />
      </div>
    );
  }
}

export default App;
