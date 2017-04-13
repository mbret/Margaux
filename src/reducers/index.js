import { combineReducers } from "redux";
import * as navReducer from "./navigation";
import * as catalogReducer from "./catalog";
import * as gameReducer from "./game";

export default combineReducers(Object.assign(
  navReducer,
  catalogReducer,
  gameReducer,
));