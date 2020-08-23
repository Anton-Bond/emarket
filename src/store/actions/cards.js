import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const dataHasErrored = (bool) => {
  return {
      type: actionTypes.DATA_HAS_ERRORED,
      hasErrored: bool
  };
}

export const dataIsLoaded = (bool) => {
  return {
      type: actionTypes.DATA_IS_LOADED,
      isLoaded: bool
  };
}

export const dataFetchSuccess = (items) => {
  return {
      type: actionTypes.DATA_FETCH_SUCCESS,
      items
  };
}

export const asyncDataFetch = (url) => {
  return (dispatch) => {

    // fetdh data from server
    axios
      .get(url)
      .then((response) => {
        if (response.statusText !== 'OK') {
            throw Error(response.statusText);
        }

        dispatch(dataIsLoaded(true));

        return response;
      })
      .then((response) => {
        const pokemons = response.data.slice(0, 15);
        const updatedPokemons = pokemons.map((pokemon) => {
          return {
            id: uuidv1(),
            title: pokemon.Name,
            context: pokemon.About,
          };
        });
        dispatch(dataFetchSuccess(updatedPokemons));
      })
      .catch(() => dispatch(dataHasErrored(true)));
  };
}

export const saveChanges = (pokemon) => {
  return {
    type: actionTypes.SAVE_CHANGES,
    pokemon
  }
}

export const addNew = (pokemon) => {
  return {
    type: actionTypes.ADD,
    pokemon
  }
}

export const toggleView = () => {
  return {
    type: actionTypes.TOGGLE_VIEW
  }
}