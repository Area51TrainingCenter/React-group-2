const ADD_BOOK = 'ADD_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

const initialState = [
  { title: 'Fight Club', id: 1 },
  { title: 'Think of a number', id: 2 },
  { title: 'Javascript the good parts', id: 3 },
]

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book]
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}

export default books