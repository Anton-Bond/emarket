import { combineReducers } from 'redux';

import cards from './reducers/cards';
import pickedCards from './reducers/pickedCards';
import auth from './reducers/auth';

export default combineReducers({
  cards,
  pickedCards,
  auth
})