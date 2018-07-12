import React, { Component } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.setState({
      count: type === '+' ? this.state.count + 1 : this.state.count - 1,
    })
  }

  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} />
        <Button handleClick={this.handleClick}>+</Button>
        <Button handleClick={this.handleClick}>-</Button>
      </div>
    );
  }
}

export default App;
