import React from 'react'

const GistsList = ({gists}) => {
  return <ul className="list-group">
    {
      gists.map(gist => (
        <li key={gist.id} className="list-group-item">{gist.description}</li>
      ))
    }
  </ul>
}

export default GistsList