export const addPlayer = (player) => {
  return {
    type: 'ADD_PLAYER',
    player
  }
}

export const updateNameOfPlayer = (playerId, name) => {
  return {
    type: 'UPDATE_NAME_OF_PLAYER',
    playerId,
    name
  }
}

export const removePlayer = (playerId) => {
  return {
    type: 'REMOVE_PLAYER',
    playerId
  }
}

export const giveCardsFromDeckToPlayer = (playerId, deck, cards) => {
  return {
    type: 'GIVE_CARDS_FROM_DECK_TO_PLAYER',
    playerId,
    deck,
    cards
  }
}