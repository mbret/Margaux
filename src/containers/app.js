import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { addNavigationHelpers } from 'react-navigation';
import StackNavigator from "./stack-navigator";

/**
 * Main app container.
 * It mainly contains the navigator.
 */
class App extends Component {

  render() {
    return (
        <StackNavigator navigation={addNavigationHelpers({
          // @see https://reactnavigation.org/docs/navigators/navigation-prop
          // navigation prop is needed for component StackNavigator.
          // -> All component (screens) that are transitioned through StackNavigator will have 'navigation' prop available.
          // navigation.dispatch is used internally by the component (we do not need it, we can inject it through connect)
          // navigation.state contain info about the state (name, params, ...)
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />
    );
  }
}

export default connect(
  // Map state to props
  (state) => {
    return {
      nav: state.nav
    };
  },
  // Map dispatch to props
  (dispatch) => {
    return Object.assign({
      dispatch
    }, bindActionCreators(ActionCreators, dispatch));
  }
)(App);