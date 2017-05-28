import { connect } from 'react-redux'
import { addPlayer } from '../actions/players'
import { removePlayer } from '../actions/players'
import { updateNameOfPlayer } from '../actions/players'
import { giveCardsFromDeckToPlayer } from '../actions/players'
import { removeCardsFromDeck } from '../actions/availableCards'
import { resetAvailableCards } from '../actions/availableCards'
import GameSetupView from './GameSetupView'

const mapStateToProps = (state) => {
  return {
    players: state.players,
    availableCards: state.availableCards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressAddPlayer: (player) => {
      dispatch(addPlayer(player))
    },
    onPressRemovePlayer: (playerId) => {
      dispatch(removePlayer(playerId))
    },
    onChangeNameOfPlayer: (playerId, name) => {
      dispatch(updateNameOfPlayer(playerId, name))
    },
    giveCardsFromDeckToPlayer: (playerId, deck, cards) => {
      dispatch(giveCardsFromDeckToPlayer(playerId, deck, cards))
    },
    removeCardsFromDeck: (deck, cards) => {
      dispatch(removeCardsFromDeck(deck, cards))
    },
    resetAvailableCards: () => {
      dispatch(resetAvailableCards())
    }
  }
}

const GameSetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSetupView)

export default GameSetupContainer