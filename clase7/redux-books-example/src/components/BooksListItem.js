import React from 'react'

const BooksListItem = ({ title, id, toggleSelectedBook, isActive }) => {
  const className = isActive ? 'list-group-item active' : 'list-group-item';
  return (
    <li className={className}>
      <h6 onClick={() => toggleSelectedBook({title, id})}>
        {title}
      </h6>
    </li>
  )
}

export default BooksListItem