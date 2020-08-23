import * as actionTypes from './actionTypes';

export const deletePickedCards = (pickedCards) => {
  return {
    type: actionTypes.DELETE_CARDS,
    pickedCards
  }
}

export const pickCard = (cardId, isChecked) => {
  return {
    type: actionTypes.PICK_CARD,
    value: cardId,
    isChecked
  }
}
