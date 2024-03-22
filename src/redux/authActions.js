// src/redux/authActions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => ({
  type: LOGIN_SUCCESS,
  payload: { username },
});

export const logout = () => ({
  type: LOGOUT,
});
