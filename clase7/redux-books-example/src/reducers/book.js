const TOGGLE_SELECTED_BOOK = 'TOGGLE_SELECTED_BOOK'

const book = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED_BOOK:
      return {...action.book}
    default:
      return state;
  }
}

export default book