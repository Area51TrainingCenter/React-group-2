import React, { Component } from 'react'

export default class AdminListItem extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.admin.name === 'x' ? false : true
  }

  componentWillUnmount() {
    console.log('bye... :(');
  }

  render() {
    const { admin } = this.props;
    return (
      <li>
          {admin.name}
      </li>
    )
  }
}