import { combineReducers } from 'redux';

import cards from './reducers/cards';
import pickedCards from './reducers/pickedCards';

export default combineReducers({
  cards,
  pickedCards
})