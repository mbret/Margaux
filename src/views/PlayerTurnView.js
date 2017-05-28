import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { NavigationActions } from 'react-navigation'

class PlayerTurnView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Tour de: ${navigation.state.params.player.name}`,
    headerStyle: {
      backgroundColor: '#90a4ae'
    }
  })

  render () {
    const {navigate} = this.props.navigation
    let playerIndex = this.props.navigation.state.params.playerIndex

    const playerCards = Object.keys(this.props.players[playerIndex].cards).map((deck, index) =>
      <View style={styles.column} key={index}>
        <View style={styles.column}>
          <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>{this.getDeckTitle(deck)}</Text>
        </View>
        <View style={styles.column}>
          {this.props.players[playerIndex].cards[deck].map((card) =>
            <Text style={{textAlign: 'center'}} key={card}>{card}</Text>
          )}
        </View>
      </View>
    )

    return (
      <View style={styles.container}>
        {playerCards}
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            {!this.isLastPlayer() &&
            <Button onPress={() => navigate('PlayerTurn', {
              playerIndex: this.getNextPlayerIndex(),
              player: this.props.players[this.getNextPlayerIndex()]
            })} title="Joueur suivant" color="#1976d2" accessibilityLabel="Joueur suivant"/>
            }
            {this.isLastPlayer() &&
            <Button onPress={() => this.gameOver()} title="Finir la partie" color="#1976d2" accessibilityLabel="Finir la partie"/>
            }
          </View>
        </View>
      </View>
    )
  }

  isLastPlayer () {
    let currentPlayerIndex = this.props.navigation.state.params.playerIndex
    return currentPlayerIndex === this.props.players.length - 1
  }

  getNextPlayerIndex () {
    let currentPlayerIndex = this.props.navigation.state.params.playerIndex
    return currentPlayerIndex + 1
  }

  getDeckTitle (deck) {
    switch (deck) {
      case 'characters':
        return 'Personnages'
      case 'places':
        return 'Lieux'
      default:
        return ''
    }
  }

  gameOver () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Home'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(
  mapStateToProps
)(PlayerTurnView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f6',
    padding: 20
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f6',
    marginBottom: 20
  },
  buttonContainer: {
    margin: 20
  }
})
