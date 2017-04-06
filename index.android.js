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
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
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
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-back'/>
            </Button>
          </Left>
          <Body><Title>Margaux</Title></Body>
          <Right/>
        </Header>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}} padder>
          <View style={styles.container}>
            <Button large rounded onPress={() => navigate('GameSetup')}><Text>New game</Text></Button>
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
  headerMode: 'none'
})

AppRegistry.registerComponent('Margaux', () => Margaux)
