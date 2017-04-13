import * as types from "./types";

export function startGame({players, cards, nbCardsPerCategories}) {
  return (dispatch) => {
    dispatch({
      type: types.START_GAME,
      players,
      cards,
      nbCardsPerCategories
    })
    dispatch({
      type: "Navigation/NAVIGATE",
      routeName: "PlayerTurn"
    })
  }
}

export function endTurn({playerIndex}) {
  return (dispatch) => {
    dispatch({
      type: types.PROCESS_TURN,
      currentPlayerIndex: playerIndex
    })
    dispatch({
      type: "Navigation/NAVIGATE",
      routeName: "PlayerTurn"
    })
  }
}

export function processTurn({playerIndex}) {
  return {
    type: types.END_TURN,
    currentPlayerIndex: playerIndex
  }
}