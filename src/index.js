import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppWithNavigation from './navigation'
import store from './store'

class Margaux extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigation/>
      </Provider>
    )
  }
}

export default Margaux
