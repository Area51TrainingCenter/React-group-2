import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
// import App from './App'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      break;
    case 'DECREMENT':
      return state - 1
      break;
    default:
      return state
      break;
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  ReactDOM.render(<App />, root)
})

class App extends React.Component {
  render() {
    return (
      <div>
        <div>{store.getState()}</div>
        <button 
          onClick={() => store.dispatch(
            { type: 'INCREMENT' })}>Increment</button>
        <button 
          onClick={() => store.dispatch(
            { type: 'DECREMENT' })}>Decrement</button>
      </div>
    )
  }
}


const root = document.getElementById('root')
root ? ReactDOM.render(<App />, root) : false