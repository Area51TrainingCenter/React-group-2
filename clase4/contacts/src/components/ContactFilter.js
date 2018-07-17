import React from 'react'

class ContactFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    const { onFilter } = this.props;
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Search</span>
        </div>
        <input 
          type="text" 
          className="form-control"
          onChange={e => onFilter(e.target.value)} />
      </div>
    )
  }
} 

export default ContactFilter