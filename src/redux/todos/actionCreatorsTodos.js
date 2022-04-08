import * as TYPES from "./typesTodos";

export const addTodoActionCreatorSuccess = ({ data }) => ({
  type: TYPES.ADD_TODOS_SUCCESS,
  payload: data,
});

export const addTodoActionCreatorError = (error) => ({
  type: TYPES.ADD_TODOS_ERROR,
  payload: error,
});

export const listTodoActionCreatorSuccess = ({ data }) => ({
  type: TYPES.LIST_TODOS_SUCCESS,
  payload: data,
});

export const listTodoActionCreatorError = (error) => ({
  type: TYPES.LIST_TODOS_SUCCESS,
  payload: error,
});

export const deleteTodoActionCreatorSuccess = (todo) => ({
  type: TYPES.DELETE_TODO_SUCCESS,
  payload: todo,
});

export const updateTodoActionCreatorsSuccess = ({ data }) => ({
  type: TYPES.UPDATE_TODO_SUCCESS,
  payload: data,
});
