import { combineReducers } from 'redux'

import availableCards from './availableCards'
import players from './players'

export default combineReducers({
  players,
  availableCards
})
