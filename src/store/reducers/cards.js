import {
  DATA_HAS_ERRORED,
  DATA_IS_LOADED,
  DATA_FETCH_SUCCESS,
  SAVE_CHANGES,
  ADD,
  DELETE_CARDS
} from '../actions/actionTypes';

const initialState = {
  pokemons: [],
  isLoaded: false,
  error: false
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case DATA_HAS_ERRORED:
      return {
        ...state,
        error: action.hasErrored
      };
    case DATA_IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      };
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        pokemons: action.items
      };
    case SAVE_CHANGES:
      const pokemons = [...state.pokemons];
      const changedPokemon = action.pokemon;
      const updatedPokemons = pokemons.map(p => {
        if(p.id === changedPokemon.id) {
          p.title = changedPokemon.title;
          p.context = changedPokemon.context
        }
        return p;
      });
      return {
        ...state,
        pokemons: updatedPokemons
      };
    case DELETE_CARDS:
        const updatedArray = state.pokemons.filter((pokemon) => {
          return !action.pickedCards.some(item => item.id === pokemon.id);
        });
      return {
        ...state,
        pokemons: updatedArray
      };
    case ADD:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.pokemon)
      }
    default: return state;
  }
};

export default cards;