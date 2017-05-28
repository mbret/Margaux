import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import initialState from './initialState'
import reducers from '../reducers'

const middleware = applyMiddleware(
  thunk,
  createLogger()
)

const store = createStore(
  reducers,
  initialState,
  middleware
)

export default store
