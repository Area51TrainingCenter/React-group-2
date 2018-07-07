import React, { Component } from 'react';
import UsersWrapper from './containers/UsersWrapper'
import Box from './components/Box'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Miguel Angel',
      isAdmin: true,
    }

    this.changeName = this.changeName.bind(this)
    this.changeLoadingState = this.changeLoadingState.bind(this)
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount');
  }

  changeName(newName) {
    this.setState({
      user: newName,
    })
  }

  changeLoadingState() {
    this.setState({
      isLoading: !this.state.isLoading,
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <h1>Hello World!!!</h1>
        { this.state.isAdmin ? <Box name={this.state.user} /> : 'No body' }
        <Button 
          handleClick={this.changeName}
          newName='Enrique' 
          text='Click me!'
          children="another text"/>

        <Button 
          handleClick={this.changeLoadingState} 
          text='Click me again!'>Again</Button>

        <UsersWrapper />
      </div>
    );
  }
}

export default App;
