import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { addBook, removeBook } from './actions/books'
import BooksList from './components/BooksList'
import BookDetail from './components/BookDetail'

class App extends Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.addBook(this.newBook.value)
    this.newBook.value = '';
  }

  render() {
    const { selectedBook, removeBook } = this.props;
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-4">
            <form onSubmit={this.onSubmit}>
              <input 
                className="mb-4 form-control" 
                type="text" 
                ref={node => this.newBook = node} />
            </form>

            <BooksList />
          </div>

          <div className="col-sm-8">
            {
              _.isEmpty(selectedBook) ?
              <div className="alert alert-warning">There is no book selected</div> :
              <BookDetail {...selectedBook} removeBook={removeBook} />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({ 
      addBook,
      removeBook,
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)