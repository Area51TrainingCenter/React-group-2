import React from 'react'
import PropTypes from 'prop-types'

const GistsList = ({ data: gists }) => {
  return <div className="row">
    {
      gists.map(gist => {
        return <li key={gist.id} className="card col-md-2 col-xs-3">
          <h5 className="card-title">{gist.owner.login}</h5>
          <p className="card-text">{gist.description}</p>
        </li>
      })
    }
  </div>
}

GistsList.propTypes = {
  data: PropTypes.array.isRequired,
}


export default GistsList