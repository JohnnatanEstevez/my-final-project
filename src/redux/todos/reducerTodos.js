import * as TYPES from "./typesTodos";

const initialState = [];

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TODOS_SUCCESS:
      return [...state, action.payload];

    case TYPES.LIST_TODOS_SUCCESS:
      return action.payload;

    case TYPES.DELETE_TODO_SUCCESS:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TYPES.UPDATE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    default:
      return state;
  }
}
