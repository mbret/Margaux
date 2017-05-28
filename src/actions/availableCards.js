export const removeCardsFromDeck = (deck, cards) => {
  return {
    type: 'REMOVE_CARDS_FROM_DECK',
    deck,
    cards
  }
}

export const resetAvailableCards = (deck, cards) => {
  return {
    type: 'RESET_AVAILABLE_CARDS',
  }
}