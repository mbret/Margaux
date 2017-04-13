import * as types from "./types";
import { routes } from "../routes-config";
import { NavigationActions } from 'react-navigation'

const newGame = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.NEW_GAME
    })
    dispatch(NavigationActions.navigate({
      routeName: routes.GameSetup,
    }))
  }
}

const startGame = ({players, cards, nbCardsPerCategories}) => {
  return (dispatch) => {
    dispatch({
      type: types.START_GAME,
      players,
      cards,
      nbCardsPerCategories
    })
    // once the game start, we reset navigation stack as it's not possible to go back on game settings.
    // use left menu to go home
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: routes.PlayerTurn})
      ]
    }))
  }
}

const endTurn = ({playerIndex}) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.PROCESS_TURN,
      currentPlayerIndex: playerIndex
    })
    if (getState().game.gameOver) {
      dispatch({
        type: types.NAVIGATE,
        routeName: routes.Home
      })
    } else {
      dispatch({
        type: types.NAVIGATE,
        routeName: routes.PlayerTurn
      })
    }
  }
}

export {
  newGame,
  startGame,
  endTurn
}