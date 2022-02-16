import * as TYPES from "./types";

const initialSatate = [];
export default function registerReducer(state = initialSatate, action) {
  switch (action.type) {
    case TYPES.REGISTER_USER:
      return [...state, action.payload];

    case TYPES.FETCH_REGISTER_SUCCES:
      return {
        ...state,
        user: action.payload,
        haserror: false,
        errorMessage: "",
      };

    case TYPES.FETCH_REGISTER_ERROR:
      return {
        ...state,
        res: "",
        haserror: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
}
