import createReducer from "../lib/create-reducer";
import * as types from "../actions/types";
import CatalogManager from "../lib/catalog-manager";

const initialGameState = {
  currentTurn: 0,
  players: [],
  cards: [],
  gameOver: false
};

export const game = createReducer(initialGameState, {
  // reset state of game to initial state
  [types.NEW_GAME]() {
    return initialGameState;
  },

  // prepare game state with players, cards, ...
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