/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import GameSetup from './src/components/game-setup'

class NewGame extends Component {
  static navigationOptions = {
    title: 'Margaux',
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => navigate('GameSetup')}
          title="New game"
        />
      </View>
    )
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
})

const Margaux = StackNavigator({
  NewGame: {screen: NewGame},
  GameSetup: {screen: GameSetup}
})

AppRegistry.registerComponent('Margaux', () => Margaux)
