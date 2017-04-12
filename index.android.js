/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React  from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './src/reducers'
import App from './src/components/app'
import { AppRegistry } from 'react-native'
import CatalogManager from './src/lib/catalog-manager'
import catalog from './src/resources/catalog'
import { normalizedCategories } from './src/resources/example-state-normalized'
import { normalizedGame } from './src/resources/example-state-normalized'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

/**
 * configure the redux store.
 * - apply middleware
 * - create and return the store
 * @param {Object} initialState
 * @returns {*}
 */
function configureStore (initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

  return createStore(reducer, initialState, enhancer)
}

// Create the app store.
// Initial state contain the static catalog.
const store = configureStore(Object.assign({}, {
    ...CatalogManager.normalizeCatalogForState(catalog),
    ...normalizedCategories.entities,
    game: normalizedGame.entities
  }
))

/**
 * Root node.
 * @constructor
 */
const Root = function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent('Margaux', () => Root)
