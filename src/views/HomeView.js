import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class HomeView extends Component {
  static navigationOptions = {
    title: 'Margaux',
    headerStyle: {
      backgroundColor: '#90a4ae'
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenue sur Margaux!
        </Text>
        <Text style={styles.instructions}>
          Pour jouer, cliquez sur le bouton ci-dessous.
        </Text>
        <Button onPress={() => navigate('GameSetup')} title="Nouvelle partie" color="#1976d2" accessibilityLabel="Nouvelle partie"/>
        <Text style={styles.instructions}>
          Vous serez invité à configurer votre partie.{'\n'}
          Définissez le nombre de joueurs et le nombre de cartes allouées aux joueurs.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f6'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
    padding: 10
  }
})
