import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from "../app-navigator";

/**
 * Main app container.
 * It mainly contains the navigator.
 */
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
        })} />
    );
  }
}

export default connect(
  /**
   * Map state to props
   */
  (state) => {
    return {
      nav: state.nav
    };
  },
  /**
   * Map dispatch to props
   */
  (dispatch) => {
    return Object.assign({
      dispatch
    }, bindActionCreators(ActionCreators, dispatch));
  }
)(App);