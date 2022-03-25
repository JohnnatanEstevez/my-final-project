import * as TYPES from "./typesTodos";

const initialState = {
  todos: [],
  hasError: false,
  errorMessage: "",
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        hasError: false,
        errorMessage: "",
      };
    case TYPES.ADD_TODOS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.errors,
      };
    default:
      return state;
  }
}
