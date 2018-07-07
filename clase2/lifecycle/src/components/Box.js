import React, { Component } from 'react'

class Box extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.name === 'Jose'
  // }

  componentWillUnmount() {
    console.log('bye!!!');
  }

  render() {
    return <h2>Hello {this.props.name}</h2>
  }
}

export default Box;