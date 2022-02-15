import * as TYPES from "./types";
export const addUserActionCreator = (user) => ({
  type: TYPES.ADD_USER,
  payload: user,
});
export const deleteUserActionCreator = (user) => ({
  type: TYPES.DELETE_USER,
  payload: user,
});
