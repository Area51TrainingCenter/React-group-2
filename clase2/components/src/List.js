import React, { Component } from 'react'
import UsersListItem from './UsersListItem'
import AdminsListItem from './AdminsListItem'

/**
 * List Component Component
 */
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ['a', 'b', 'c', 'd', 'e'],
      admin: {
        name: 'z',
        age: 'y'
      },
      isAdminVisible: true,
    }
  }

  componentDidMount() {
    const users = 'https://jsonplaceholder.typicode.com/users'
    fetch(users).then(response => response.json()).then(data => {
      this.setState({
        users: data,
      })
    }).catch(error => {
      console.log(error);
    });
  }

  _handleUpdateAdmin() {
    this.setState({
      admin: {
        name: 'x',
        age: 'y'
      }
    });
  }

  _handleToggleAdmin() {
    this.setState({
      isAdminVisible: !this.state.isAdminVisible
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => <UsersListItem key={i} name={user.name} />)}
        </ul>
        <button onClick={() => this._handleUpdateAdmin()}>Update admin</button>
        <button onClick={() => this._handleToggleAdmin()}>Toggle admin</button>
        {this.state.isAdminVisible ? <AdminsListItem admin={this.state.admin} /> : null}
      </div>
    )
  }
}