import * as types from "./types";

export function startGame({players, cards, nbCardsPerCategories}) {
    return {
      type: types.START_GAME,
      players,
      cards,
      nbCardsPerCategories
    }
}