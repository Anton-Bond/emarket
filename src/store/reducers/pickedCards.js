import {PICK_CARD, DELETE_CARDS} from '../actions/actionTypes';

const initialState = {
  cards: []
};

const pickedCards = (state = initialState, action) => {
  switch ( action.type ) {
    case PICK_CARD:
      if (action.isChecked) {
        // add card index if it picked
        return {
          cards: state.cards.concat({id: action.value})
        };
      } else {
        // delete from array if card has been unpicked
        const updatedArray = state.cards.filter(card => card.id !== action.value);
        return {
          cards: updatedArray
        };
      }

    case DELETE_CARDS:
      // clear selected cards
      return {
        cards: []
      };
    default: return state;
  }
};

export default pickedCards;