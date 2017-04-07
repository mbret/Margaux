/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base'
import { StackNavigator } from 'react-navigation'
import GameSetup from './src/components/game-setup'

class NewGame extends Component {
  static navigationOptions = {
    title: 'Margaux'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}} padder>
          <View style={styles.container}>
            <Button large rounded onPress={() => navigate('GameSetup')}><Text>Nouvelle partie</Text></Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const Margaux = StackNavigator({
  NewGame: {screen: NewGame},
  GameSetup: {screen: GameSetup}
}, {
  navigationOptions: {
    header: {
      style: {backgroundColor: '#3f51b5'},
      titleStyle: {color: 'white'},
      tintColor: 'white'
    }
  }
})

AppRegistry.registerComponent('Margaux', () => Margaux)
