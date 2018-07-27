import React from 'react'
import ReactDOM from 'react-dom'
import Promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore)

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = document.getElementById('root')
root ? ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, root) : false