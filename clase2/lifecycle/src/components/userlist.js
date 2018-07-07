import React from 'react'

const Userlist = ({users}) => {
  return (
    users.map(user => (
      <li key={user.id}>{user.username}</li>
    ))
  )
}

export default Userlist