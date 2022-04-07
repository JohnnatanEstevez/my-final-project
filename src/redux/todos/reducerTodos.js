import * as TYPES from "./typesTodos";

const initialState = {
  list: [],
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TODOS_SUCCESS:
      return { list: [...state.list, action.payload] };

    case TYPES.LIST_TODOS_SUCCESS:
      return { list: action.payload };

    case TYPES.DELETE_TODO_SUCCESS:
      return {
        list: state.list.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}
