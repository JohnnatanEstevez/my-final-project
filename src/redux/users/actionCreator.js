import * as TYPES from "./types";

export const userRegisterStarted = () => ({
  type: TYPES.USER_REGISTER_STARTED,
});

export const userRegisterSuccess = (res) => ({
  type: TYPES.USER_REGISTER_SUCCESS,
  payload: res,
});

export const userRegisterError = (error) => ({
  type: TYPES.USER_REGISTER_ERROR,
  payload: error,
});

export const userLoginStarted = () => ({
  type: TYPES.USER_LOGIN_STARTED,
});

export const userLoginSuccess = (res) => ({
  type: TYPES.USER_LOGIN_SUCCESS,
  payload: res,
});

export const userLoginError = (error) => ({
  type: TYPES.USER_LOGIN_ERROR,
  payload: error,
});
