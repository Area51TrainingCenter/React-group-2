import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import GistsList from './components/GistsList'
import withData from './HOC/withData'

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
    const GistsListByUrl = withData('https://api.github.com/users/phuochau/gists')(GistsList)
    const GistsListByUsername = withData(props => `https://api.github.com/users/${props.username}/gists`)(GistsList)
    return (
      <div className="container">
        <GistsListByUrl />
        <GistsListByUsername username="ryanflorence" />
        <GistsListByUsername username="paulrrdiaz" />
        <GistsList data={this.state.gists} />
      </div>
    );
  }
}

export default App;
