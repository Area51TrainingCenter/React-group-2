import React, { Component } from 'react'
import ContactFilter from '../components/ContactFilter'
import ContactsList from '../components/ContactsList'
import fuzzysearch from 'fuzzysearch'
import { debounce } from 'lodash'

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filteredContacts: [],
    }

    this.onFilter = this.onFilter.bind(this)
  }

  componentDidMount() {
    const API = 'https://randomuser.me/api/?results=50&nat=us'
    fetch(API).then(response => response.json()).then(data => {
      const contacts = data.results.map(contact => Object.assign({}, {
        name: `${contact.name.title} ${contact.name.last} ${contact.name.first}`,
        image: contact.picture.medium,
        email: contact.email,
        username: contact.login.username,
      }));
      setTimeout(() => {
        this.setState({
          contacts,
          filteredContacts: contacts,
        })
      }, 2000)
    })
  }

  onFilter(filter) {
    const filteredContacts = this.state.contacts.filter(contact => {
      return (
        fuzzysearch(filter, contact.name) || 
        fuzzysearch(filter, contact.email) ||
        fuzzysearch(filter, contact.username)
      )
    })

    this.setState({
      filteredContacts,
    })
  }
  
  
  
  render() {
    const debounceFilter = debounce(filter => {
      this.onFilter(filter)
    }, 500)

    return (
      <div>
        <ContactFilter onFilter={debounceFilter} />
        <ContactsList contacts={this.state.filteredContacts} />
      </div>
    )
  }
}

export default Contacts