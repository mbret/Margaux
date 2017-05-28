import initialState from '../store/initialState'

export default function players (state = initialState.players, action) {
  switch (action.type) {
    case 'ADD_PLAYER' :
      return [
        ...state,
        action.player
      ]
    case 'UPDATE_NAME_OF_PLAYER' :
      return state.map(player => {
        if (player.id === action.playerId) {
          return {...player, name: action.name}
        }
        return player
      })
    case 'REMOVE_PLAYER' :
      let indexOfPlayerToRemove = state.findIndex((player) => {
        return player.id === action.playerId
      })
      return [
        ...state.slice(0, indexOfPlayerToRemove),
        ...state.slice(indexOfPlayerToRemove + 1)
      ]
    case 'GIVE_CARDS_FROM_DECK_TO_PLAYER' :
      return state.map(player => {
        if (player.id === action.playerId) {
          return {
            ...player,
            cards: {
              ...player.cards,
              [action.deck]: action.cards
            }
          }
        }
        return player
      })
    default:
      return state
  }
}
