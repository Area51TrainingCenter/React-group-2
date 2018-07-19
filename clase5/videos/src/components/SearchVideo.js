import React, { Component } from 'react';

class SearchVideo extends Component {
    constructor() {
        super();
        this.state = {
            filter: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            filter: e.target.value,
        })
    }

    render() {
        const { loadData } = this.props;
        return (
            <div className="input-group col-md-9 buscador">
                <input
                    type="text"
                    className="form-control"
                    onChange={e => loadData(e.target.value)} />
                <div className="input-group-append">
                    <span className="input-group-text">Search</span>
                </div>
            </div>
        )
    }
}

export default SearchVideo