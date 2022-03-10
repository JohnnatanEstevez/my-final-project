import * as TYPES from "./types";
import { toast } from "react-toastify";

const initialSatate = {
  user: [],
  hasError: false,
  errorMessage: "",
};
//const initialSatate = [];
export function registerReducer(state = initialSatate, action) {
  switch (action.type) {
    /* case TYPES.REGISTER_USER:
      //console.log("action register user en reducer user");
      return [...state, action.payload]; */

    case TYPES.USER_REGISTER_SUCCESS:
      console.log("4.reducer SUCCESS");
      return {
        ...state,
        user: action.payload,
        hasError: false,
        errorMessage: "",
      };

    case TYPES.USER_REGISTER_ERROR:
      console.log("4.1 reducer ERROR");
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.errors,
      };

    default:
      return state;
  }
}
