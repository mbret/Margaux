import createReducer from "../lib/createReducer";
import * as types from "../actions/types";
import CatalogManager from "../lib/catalog-manager";

export const game = createReducer({}, {
  [types.START_GAME](state, action) {
    return {
      players: action.players,
      cards: CatalogManager.retrieveUniqRandomCards(action.cards, action.players.length, action.nbCardsPerCategories)
    };
  }
});