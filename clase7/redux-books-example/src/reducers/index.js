import { combineReducers } from 'redux'
import books from './books'
import book from './book'

const reducers = combineReducers({
  books,
  selectedBook: book,
})

export default reducers