import CatalogManager from './lib/catalog-manager'
import catalog from './resources/catalog'
import { normalizedCategories } from './resources/example-state-normalized'
import { normalizedGame } from './resources/example-state-normalized'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'

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
// Here are some help to know what to put inside
const store = configureStore({
  ...CatalogManager.normalizeCatalogForState(catalog),
  ...normalizedCategories.entities,
  game: normalizedGame.entities
})

export default store;