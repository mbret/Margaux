import { combineReducers } from "redux";
import * as recipesReducer from "./recipes";
import * as navReducer from "./nav";

export default combineReducers(Object.assign(
    recipesReducer,
    navReducer
));