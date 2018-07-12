import React from 'react'
import PropTypes from 'prop-types'

const Userlist = ({users}) => {
  return (
    users.map(user => (
      <li key={user.id}>{user.username}</li>
    ))
  )
}

Userlist.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    x: PropTypes.string.isRequired,
  })),
}

export default Userlist