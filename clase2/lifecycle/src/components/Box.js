import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Box.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
}

export default Box;