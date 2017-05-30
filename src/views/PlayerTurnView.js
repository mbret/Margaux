import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Text, List, Button, Card } from 'react-native-elements'

class PlayerTurnView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Tour de ${navigation.state.params.player.name}`,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#039be5'
    }
  })

  render () {
    const {navigate} = this.props.navigation
    let playerIndex = this.props.navigation.state.params.playerIndex

    {/*<View style={styles.column} key={index}>
        <View style={styles.column}>
          <Text h3>{this.getDeckTitle(deck)}</Text>
        </View>
        <View style={styles.column}>
          <List containerStyle={{marginBottom: 20}}>
            {this.props.players[playerIndex].cards[deck].map((card) =>
              <Text style={{padding: 10}} key={card}>
                {card}
              </Text>
            )}
          </List>
        </View>
      </View>*/
    }

    const playerCards = Object.keys(this.props.players[playerIndex].cards).map((deck, index) =>
      <Card
        title={this.getDeckTitle(deck)} key={index}>
        {this.props.players[playerIndex].cards[deck].map((card) =>
          <Text key={card}>
            {card}
          </Text>
        )}
      </Card>
    )

    return (
      <ScrollView style={styles.container}>
        {playerCards}
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            {!this.isLastPlayer() &&
            <Button
              onPress={() => navigate('PlayerTurn', {
                playerIndex: this.getNextPlayerIndex(),
                player: this.props.players[this.getNextPlayerIndex()]
              })}
              title="Au suivant !"
              backgroundColor='#0277bd'
              color='white'
              fontFamily='Kalam-Bold'
              fontSize={20}
              buttonStyle={{borderRadius: 100, margin: 0, padding: 10, paddingLeft: 20, paddingRight: 20}}/>
            }
            {this.isLastPlayer() &&
            <Button
              onPress={() => this.gameOver()}
              title="Finir la partie"
              backgroundColor='#ffb300'
              color='black'
              fontFamily='Kalam-Bold'
              fontSize={20}
              buttonStyle={{borderRadius: 100, margin: 0, padding: 10, paddingLeft: 20, paddingRight: 20}}/>
            }
          </View>
        </View>
      </ScrollView>
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
      case 'expressions':
        return 'Expressions'
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
    backgroundColor: '#01579b',
    padding: 20
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01579b',
    marginBottom: 20
  },
  buttonContainer: {
    margin: 20
  }
})
