import * as types from "./types";
import { routes } from "../navigation";

export function startGame({players, cards, nbCardsPerCategories}) {
  return (dispatch, getState) => {
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
  return (dispatch, getState) => {
    dispatch({
      type: types.PROCESS_TURN,
      currentPlayerIndex: playerIndex
    })
    if (getState().game.gameOver) {
      dispatch({
        type: "Navigation/NAVIGATE",
        routeName: routes.NewGame
      })
    } else {
      dispatch({
        type: "Navigation/NAVIGATE",
        routeName: routes.PlayerTurn
      })
    }
  }
}

export function processTurn({playerIndex}) {
  return {
    type: types.END_TURN,
    currentPlayerIndex: playerIndex
  }
}