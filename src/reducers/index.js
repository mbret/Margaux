import { combineReducers } from "redux";
import * as recipesReducer from "./recipes";
import * as navReducer from "./nav";
import * as catalogReducer from "./catalog";

export default combineReducers(Object.assign(
  recipesReducer,
  navReducer,
  catalogReducer,
));