import * as TYPES from "./types";

const initialSatate = {
  user: [],
  hasError: false,
  errorMessage: "",
};
export function registerReducer(state = initialSatate, action) {
  switch (action.type) {
    case TYPES.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        hasError: false,
        errorMessage: "",
      };

    case TYPES.USER_REGISTER_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.errors,
      };

    default:
      return state;
  }
}
