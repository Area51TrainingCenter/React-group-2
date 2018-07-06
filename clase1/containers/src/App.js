import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coords: {},
      isLoading: false,
    }

    this.handleSuccess = this.handleSuccess.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({coords}) {
    this.setState({
      coords,
      isLoading: false,
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? 
          <p>Loading...</p> : 
          <Presentational 
            lat={this.state.coords.latitude} 
            lng={this.state.coords.longitude} />
        }
      </div>
    );
  }
}

const Presentational = (props) => {
  return (
    <div>
      <div>Lat: {props.lat}</div>
      <div>Lng: {props.lng}</div>
    </div>
  )
}

export default App;
