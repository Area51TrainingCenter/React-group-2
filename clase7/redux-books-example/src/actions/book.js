const TOGGLE_SELECTED_BOOK = 'TOGGLE_SELECTED_BOOK'

const toggleSelectedBook = (book) => {
  return {
    type: TOGGLE_SELECTED_BOOK,
    book,
  }
}

export { toggleSelectedBook }