/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React  from 'react'
import { Provider } from 'react-redux'
import App from './components/app'
import store from "./store";

/**
 * Root node.
 * @constructor
 */
export const Root = function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}