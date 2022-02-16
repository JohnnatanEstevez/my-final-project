import * as TYPES from "./types";

export const registerUserActionCreator = (user) => ({
  type: TYPES.REGISTER_USER,
  payload: user,
});

export const fetchRegisterStarted = () => ({
  type: TYPES.FETCH_REGISTER_STARTED,
});

export const fetchRegisterSucces = (id) => ({
  type: TYPES.FETCH_REGISTER_SUCCES,
  payload: id,
});

export const fetchRegisterError = (error) => ({
  type: TYPES.FETCH_REGISTER_ERROR,
  payload: error,
});
