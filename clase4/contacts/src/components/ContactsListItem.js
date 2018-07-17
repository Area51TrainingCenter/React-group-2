import React from 'react'

const ContactsListItem = ({ name, username, email, image }) => (
  <div className="card col-md-12">
    <div className="card-body">
      <img className="rounded-circle pull-left" src={image} alt={username} />
      <div>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
  </div>
)

export default ContactsListItem