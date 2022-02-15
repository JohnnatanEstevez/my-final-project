import { ADD_USER, DELETE_USER } from "./types";

const initialSatate = [];
export function registerReducer(state = initialSatate, action) {
  switch (action.TYPE) {
    case ADD_USER:
      console.log("Add User");
    case DELETE_USER:
      console.log("delete user");
    default:
      return state;
  }
}
