import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput
} from 'react-native'
import initialState from '../store/initialState'

const uuidV4 = require('uuid/v4')

export default class GameSetupView extends Component {
  static navigationOptions = {
    title: 'Configuration du jeu',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#039be5'
    }
  }

  render () {
    const {navigate} = this.props.navigation
    const playersInputs = this.props.players.map((player) =>
      <View style={styles.row} key={player.id}>
        {/*<Text>Joueur</Text>*/}
        <TextInput
          style={{flex: 1}}
          onChangeText={(text) => this.props.onChangeNameOfPlayer(player.id, text)}
          value={player.name}
        />
        <Button onPress={() => this.props.onPressRemovePlayer(player.id)} title="Supprimer" color="#f44336" accessibilityLabel="Supprimer un joueur"/>
      </View>
    )
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Text style={{fontFamily: 'Kalam-Bold', fontSize: 30, color: '#01579b', marginBottom: 10}}>Qui est-ce qui joue ?</Text>
          {playersInputs}
          <View style={styles.row}>
            <View style={styles.buttonContainer}>
              <Button onPress={() => this.addPlayer()} title="Ajouter un joueur" color="#039be5" accessibilityLabel="Ajouter un joueur" disabled={!this.canAddPlayers()}/>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={() => {
                this.distributeCards()
                navigate('PlayerTurn', {playerIndex: 0, player: this.props.players[0]})
              }} title="Jouer" color="#039be5" accessibilityLabel="Jouer" disabled={this.props.players.length < 2}/>
            </View>
          </View>
        </View>
      </ScrollView>
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
      return initialState.availableCards.places.length / this.props.players.length > 2 &&
        initialState.availableCards.characters.length / this.props.players.length > 2 &&
        initialState.availableCards.expressions.length / this.props.players.length > 2
    } else {
      return true
    }
  }

  addPlayer () {
    let playerId = uuidV4()
    let playerNumber = this.props.players.length + 1
    this.props.onPressAddPlayer({
      id: playerId,
      name: 'Joueur ' + playerNumber
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 20
  }
})
