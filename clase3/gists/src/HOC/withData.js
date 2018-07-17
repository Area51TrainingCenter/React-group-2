import React from 'react'

const withData = url => Component => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
      }
    }
    componentDidMount() {
      const gistsAPI = typeof url === 'function' ? 
        url(this.props) : 
        url; 
        
      fetch(gistsAPI)
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(e => console.log(e)); 
    }

    render() {
      return <Component {...this.state} />
    }
  }
}

export default withData