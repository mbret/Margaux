import { combineReducers } from "redux";
import * as recipesReducer from "./recipes";
import * as navReducer from "./navigation";
import * as catalogReducer from "./catalog";
import * as gameReducer from "./game";

export default combineReducers(Object.assign(
  recipesReducer,
  navReducer,
  catalogReducer,
  gameReducer,
));