import createReducer from "../lib/createReducer";

const categories = createReducer({}, {

});

const expressions = createReducer({}, {

});

const items = createReducer({}, {

});

const cards = createReducer({}, {

});

export {
  categories,
  items,
  // TODO: delete cards and expressions later
  cards,
  expressions
};