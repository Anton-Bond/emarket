import * as actionTypes from './actionTypes';

export const login = (user) => {
  return {
    type: actionTypes.LOGIN,
    user
  }
}

export const asyncLogin = (form) => {
  return (dispatch) => {
    return  new Promise((resolve, reject) => {
      const username = form.username.value;
      if (username === 'testAdmin@gmail.com') {
        if (form.password.value === '12345yuiopp') {
          // correct admin login
          resolve(dispatch(login({username, isAdmin: true})));
        } else {
          // wrong admin password
          reject(dispatch(login({username: '', isAdmin: false})));
        }
      } else {
        // any user logs in
        resolve(dispatch(login({username, isAdmin: false})));
      }
    })
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}

export const initUser = () => {
  return {
    type: actionTypes.INIT_USER
  }
}
