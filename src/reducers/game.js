import createReducer from "../lib/create-reducer";
import * as types from "../actions/types";
import CatalogManager from "../lib/catalog-manager";

export const game = createReducer({}, {
  [types.START_GAME](state, action) {
    return {
      currentTurn: 0,
      players: action.players,
      cards: CatalogManager.retrieveUniqRandomCards(action.cards, action.players.length, action.nbCardsPerCategories),
      gameOver: false
    };
  },

  [types.PROCESS_TURN](state, action) {
    let nextTurnIndex = null;
    // we were on last player
    // game over
    if (action.currentPlayerIndex === state.players.length - 1) {
      return {
        ...state,
        currentTurn: null,
        gameOver: true
      }
    } else {
      return {
        ...state,
        currentTurn: ++nextTurnIndex,
      }
    }
  }
});