import React, { Component } from 'react'
import Userlist from './../components/userlist'

class UserWrapper extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    fetch(usersURL)
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.setState({
            users: json,
            isLoading: false,
          })
        }, 1000);
      })
      .catch(e => console.log(e))
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        {
          isLoading ? 
          <p>Loading...</p> : 
          <Userlist users={users} />
        }
      </div>
    )
  }
}

export default UserWrapper