import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import VanillaTilt from 'vanilla-tilt'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      hasError: false,
      contacts: [],
    }
  }

  componentDidMount() {
    VanillaTilt.init(this.node, {
      speed: 300,
    })
  }

  handleChange = e => {
    const hasError = e.target.value.length < 3;
    const isPresent = this.state.contacts.some(c => c.name === e.target.value)
    this.setState({
      hasError,
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.nativeEvent);
    
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name" />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text" 
              name="lastName"
              className="form-control"
              placeholder="Last name" />
          </div>
          <div className="form-group">
            <button onClick={this.onSubmit} type="submit">Submit</button>
          </div>
        </form>
        {
          this.state.hasError ?
            <div className="alert alert-danger">
            <p>there is an error</p>
          </div> : null
        }

        <div ref={element => this.node = element} className="alert alert-primary" role="alert">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, assumenda nam modi voluptatem inventore ipsam quam molestiae exercitationem dignissimos laboriosam laborum accusantium cum rerum in harum mollitia nemo veniam asperiores.</p>
        </div>
      </div>
    );
  }
}

export default App;
