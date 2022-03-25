import * as TYPES from "./typesTodos";

export const addTodoActionCreatorSuccess = (todo) => ({
  type: TYPES.ADD_TODOS_SUCCESS,
  payload: todo,
});

export const addTodoActionCreatorError = (error) => ({
  type: TYPES.ADD_TODOS_ERROR,
  payload: error,
});
