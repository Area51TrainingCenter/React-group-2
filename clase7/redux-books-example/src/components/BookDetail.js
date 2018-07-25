import React from 'react'

const BookDetail = ({ title, id, removeBook }) => (
  <div>
    <h2>
      Title: {title} 
      <hr />
      <small className="text-muted">ID: {id}</small>
    </h2>
    <button 
      className="pull-right btn btn-sm btn-danger" 
      onClick={() => removeBook(id)}>Delete this Book</button>
  </div>
)

export default BookDetail