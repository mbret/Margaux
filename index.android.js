/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React  from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./src/reducers";
import App from "./src/components/app";
import { AppRegistry } from 'react-native';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

/**
 * Root node.
 * @constructor
 */
const Root = function() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('Margaux', () => Root);
