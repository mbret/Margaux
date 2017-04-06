import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import Home from "./home";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  BackAndroid,
  TouchableHighlight
} from 'react-native';

import IndexView from "../index-view.android";
import NewGameView from "../new-game-view.android";
import Second from "../second.android";

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});

/**
 *
 */
class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.currentGame = {};
  }

  addRecipe() {
    this.props.addRecipe();
  }

  render() {
    const routes = [
      {title: 'First Scene', index: 0, component: IndexView},
      {title: 'First Scene', index: 1, component: NewGameView},
      {title: 'Second Scene', index: 2, component: Second},
    ];

    return (
      <View style={{flex:1}}>
        <Home {...this.props} />
        <Text>Margaux app {this.props.recipeCount}</Text>
        <TouchableHighlight onPress={() => {this.addRecipe() }}>
          <Text>Add recipe</Text>
        </TouchableHighlight>
        <Navigator
          style={{flex:1}}
          initialRoute={routes[1]}
          initialRouteStack={routes}
          renderScene={(route, navigator) => {
            _navigator = navigator;
            switch (route.index) {
              case 0:
                return (<IndexView navigator={navigator} title={route.title} game={this.currentGame} />);
              case 1:
                return (<NewGameView navigator={navigator} title={route.title} game={this.currentGame} />);
              case 2:
                return (<Second navigator={navigator} title={route.title} />);
            }
          }}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);