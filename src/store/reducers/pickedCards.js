import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  cards: []
};

const pickCard = (state, action) => {
  if (action.isChecked) {
    // add card index if it picked
    return {
      cards: state.cards.concat({id: action.value})
    };
  } else {
    // delete from array if card has been unpicked
    const updatedArray = state.cards.filter(card => card.id !== action.value);
    return updateObject( state, {cards: updatedArray});
  }
}

const pickedCards = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.PICK_CARD:
      return pickCard(state, action);
    case actionTypes.DELETE_CARDS:
      // clear selected cards
      return updateObject(state, {cards: []});
    default: return state;
  }
};

export default pickedCards;