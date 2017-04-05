/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
import IndexView from "./src/index-view.android";
import NewGameView from "./src/new-game-view.android";
import Second from "./src/second.android";

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
        return false;
    }
    _navigator.pop();
    return true;
});

export default class Margaux extends Component {

    constructor(props) {
        super(props);
        this.currentGame = {};
    }

    render() {
        const routes = [
            {title: 'First Scene', index: 0, component: IndexView},
            {title: 'First Scene', index: 1, component: NewGameView},
            {title: 'Second Scene', index: 2, component: Second},
        ];

        return (
            <View style={{flex:1}}>
                <Text>Margaux app</Text>
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

AppRegistry.registerComponent('Margaux', () => Margaux);
