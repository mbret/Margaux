import initialState from '../store/initialState'

export default function availableCards (state = initialState.availableCards, action) {
  switch (action.type) {
    case 'REMOVE_CARDS_FROM_DECK' :
      let newDeck = state[action.deck].filter((card) => {
        return !action.cards.includes(card)
      })
      return {
        ...state,
        [action.deck]: newDeck
      }
    case 'RESET_AVAILABLE_CARDS' :
      return initialState.availableCards
    default:
      return state
  }
}
