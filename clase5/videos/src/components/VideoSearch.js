import React, { Component } from "react"

class VideoSearch extends Component {
  state = {
    term: ''
  }
  
  handleChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Search</div>
        </div>
        <input
          className="form-control"
          value={this.state.term}
          placeholder="type something..."
          onChange={e => this.handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default VideoSearch