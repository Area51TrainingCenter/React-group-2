import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, cleanList } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      showAlert: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  cleanList = () => {
    this.props.cleanList()
    this.setState({ showAlert: false });
  }

  render() {
    const { showAlert, term } = this.state;
    const { weather } = this.props;
    const className = weather.length ? 'btn btn-danger' : 'btn btn-danger disabled'

    const alert = (
      <span className="input-group-append">
        <label className="col-form-label mr-2 ml-3">You are deleting all cities, are you sure?</label>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.cleanList()}>Yes</button>
        <button
          type="button" 
          className="btn btn-danger"
          onClick={() => this.setState({ showAlert: false })}>No</button>
      </span>
    )

    const actions = (
      <span className="input-group-append">
        <button
          type="submit" 
          className="btn btn-success"
          disabled={!term.length}>Add city</button>
        <button
          type="button" 
          className={className}
          disabled={!weather.length}
          onClick={() => this.setState({ showAlert: true })}>Clear cities</button>
      </span>
    )

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="City"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
        />
        { showAlert ? alert : actions }
      </form>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchWeather,
    cleanList,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);