import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleSelectedBook } from '../actions/book'
import BooksListItem from './BooksListItem'

const BooksList = ({books, toggleSelectedBook, selectedBook}) => {
  return (
    <ul className="list-group">
      {
        books.map(book => (
          <BooksListItem 
            key={book.id} 
            {...book}
            isActive={book.id === selectedBook.id}
            toggleSelectedBook={toggleSelectedBook} />
        ))
      }
    </ul>
  )
}

const mapStateToProps = state => {
  const { books, selectedBook } = state;
  return {
    books,
    selectedBook,
  }
}

const mapDispatchToProps = dispatch => {
  return (
    bindActionCreators({ toggleSelectedBook }, dispatch)
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksList)