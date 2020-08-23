import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  username: '',
  isAuth: false,
  isAdmin: false
};

// when reboot page
const initUser = (state, action) => {
  // Get saved data from sessionStorage
  const username = window.sessionStorage.getItem('username');
  const isAuth = window.sessionStorage.getItem('isAuth');
  const isAdmin = window.sessionStorage.getItem('isAdmin');
  if (username && isAuth && isAdmin) {
    return updateObject(state, {username, isAuth, isAdmin});
  } else {
    return {...state};
  }
}

const login = (state, action) => {
    const username = action.user.username;
    const isAdmin = action.user.isAdmin;
    const isAuth = username !== '';
    // Save data to sessionStorage
    window.sessionStorage.setItem('username', username);
    window.sessionStorage.setItem('isAuth', isAuth);
    window.sessionStorage.setItem('isAdmin', isAdmin);
    return updateObject(state, {username, isAuth, isAdmin});
};

const logout = (state, action) => {
  // Remove all saved data from sessionStorage
  window.sessionStorage.clear();
  return updateObject(state, {username: '', isAuth: false, isAdmin: false});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_USER:
      return initUser(state, action);
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.LOGOUT:
      return logout(state, action);
    default: return state;
  }
};

export default reducer;