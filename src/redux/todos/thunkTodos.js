import { addTodo } from "../../services/crudTodosService";
import {
  addTodoActionCreatorSuccess,
  addTodoActionCreatorError,
} from "./actionCreatorsTodos";

export const thunkAddTodo = (todo) => {
  return (dispatch) => {
    addTodo(todo)
      .then((res) => {
        dispatch(addTodoActionCreatorSuccess(res));
      })
      .catch((error) => {
        dispatch(addTodoActionCreatorError(error));
      });
  };
};
