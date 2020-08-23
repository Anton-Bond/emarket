import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  pokemons: [],
  viewOnly: false,
  isLoaded: false,
  error: false
};

const deleteCards = (state, action) => {
  const updatedArray = state.pokemons.filter((pokemon) => {
    return !action.pickedCards.some(item => item.id === pokemon.id);
  });
  return updateObject(state, {pokemons: updatedArray});
};

const saveChanges = (state, action) => {
  const pokemons = [...state.pokemons];
  const changedPokemon = action.pokemon;
  const updatedPokemons = pokemons.map(p => {
    if(p.id === changedPokemon.id) {
      p.title = changedPokemon.title;
      p.context = changedPokemon.context
    }
    return p;
  });
  return updateObject(state, {pokemons: updatedPokemons});
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_HAS_ERRORED:
      return updateObject(state, {error: action.hasErrored});
    case actionTypes.DATA_IS_LOADED:
      return updateObject(state, {isLoaded: action.isLoaded});
    case actionTypes.DATA_FETCH_SUCCESS:
      return updateObject(state, {pokemons: action.items});
    case actionTypes.SAVE_CHANGES:
      return saveChanges(state, action);
    case actionTypes.DELETE_CARDS:
      return deleteCards(state, action);
    case actionTypes.ADD:
      return updateObject(state, {pokemons: state.pokemons.concat(action.pokemon)});
    case actionTypes.TOGGLE_VIEW:
      return updateObject(state, {viewOnly: !state.viewOnly});
    default: return state;
  }
};

export default cards;