import React from 'react'
import ContactsListItem from './ContactsListItem'
import LoaderHOC from '../HOC/LoaderHOC'

const ContactsList = ({ contacts }) => (
  <div>
    {
      contacts.map(contact => <ContactsListItem key={contact.username} {...contact} />)
    }
  </div>
)

export default LoaderHOC('contacts')(ContactsList)