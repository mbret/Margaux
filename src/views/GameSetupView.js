import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import initialState from '../store/initialState'

const uuidV4 = require('uuid/v4')

export default class GameSetupView extends Component {
  static navigationOptions = {
    title: 'Configuration du jeu',
    headerStyle: {
      backgroundColor: '#90a4ae'
    }
  }

  render () {
    const {navigate} = this.props.navigation
    const playersInputs = this.props.players.map((player) =>
      <View style={styles.row} key={player.id}>
        <Text>Joueur</Text>
        <TextInput
          style={{flex: 1}}
          onChangeText={(text) => this.props.onChangeNameOfPlayer(player.id, text)}
          value={player.name}
        />
        <Button onPress={() => this.props.onPressRemovePlayer(player.id)} title="Supprimer" color="#f44336" accessibilityLabel="Supprimer un joueur"/>
      </View>
    )
    return (
      <View style={styles.container}>
        {playersInputs}
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button onPress={() => this.addPlayer()} title="Ajouter un joueur" color="#1976d2" accessibilityLabel="Ajouter un joueur" disabled={!this.canAddPlayers()}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => {
              this.distributeCards()
              navigate('PlayerTurn', {playerIndex: 0, player: this.props.players[0]})
            }} title="Jouer" color="#1976d2" accessibilityLabel="Jouer"/>
          </View>
        </View>
      </View>
    )
  }

  distributeCards () {
    this.props.resetAvailableCards()
    // For each deck
    Object.keys(initialState.availableCards).forEach((key, index) => {
      let availableCards = this.shuffle(initialState.availableCards[key].slice())
      // For each player
      for (let player of this.props.players) {
        let randomCards = []
        for (let i = 0; i < 2; i++) {
          // let randomIndex = Math.floor(Math.random() * this.props.availableCards[key].length)
          randomCards.push(availableCards[0])
          availableCards.splice(0, 1)
        }
        this.props.giveCardsFromDeckToPlayer(player.id, key, randomCards)
        this.props.removeCardsFromDeck(key, randomCards)
      }
    })
  }

  // Fisher-Yates shuffle (see https://www.frankmitchell.org/2015/01/fisher-yates/)
  shuffle (array) {
    let j = 0, temp = null

    for (let i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  canAddPlayers () {
    // There must be at least 2 cards of each deck for each player
    if (this.props.players.length > 0) {
      return initialState.availableCards.places.length / this.props.players.length > 2 ||
        initialState.availableCards.characters.length / this.props.players.length > 2
    } else {
      return true
    }
  }

  addPlayer () {
    let playerId = uuidV4()
    this.props.onPressAddPlayer({
      id: playerId,
      name: 'Joueur ' + playerId.substring(0, 5)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f6',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f6'
  },
  buttonContainer: {
    margin: 20
  }
})
