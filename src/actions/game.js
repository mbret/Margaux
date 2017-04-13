import * as types from "./types";
import { routes } from "../routes-config";

export function newGame() {
  return (dispatch, getState) => {
    dispatch({
      type: types.NEW_GAME
    })
    dispatch({
      type: "Navigation/NAVIGATE",
      routeName: routes.GameSetup
    })
  }
}

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
        routeName: routes.Home
      })
    } else {
      dispatch({
        type: "Navigation/NAVIGATE",
        routeName: routes.PlayerTurn
      })
    }
  }
}