const ADD_BOOK = 'ADD_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'
const TOGGLE_SELECTED_BOOK = 'TOGGLE_SELECTED_BOOK'

const addBook = (title) => {
  return { 
    type: ADD_BOOK, 
    book: { 
      title, 
      id: Date.now() 
    }
  }
}

const removeBook = (id) => {
  return [
    { 
      type: REMOVE_BOOK, 
      id,
    },
    {
      type: TOGGLE_SELECTED_BOOK,
      book: {},
    }
  ]
}

export {addBook, removeBook}