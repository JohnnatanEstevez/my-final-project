import { addTodo, getTodo, deleteTodo } from "../../services/crudTodosService";
import {
  addTodoActionCreatorSuccess,
  addTodoActionCreatorError,
  listTodoActionCreatorSuccess,
  deleteTodoActionCreatorSuccess,
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

export const thunkListTodo = () => {
  return (dispatch) => {
    return getTodo().then((res) => {
      dispatch(listTodoActionCreatorSuccess(res));
    });
  };
};

export const thunkDeleteTodo = (todo) => {
  return (dispatch) => {
    deleteTodo(todo.id)
      .then(() => {
        dispatch(deleteTodoActionCreatorSuccess(todo));
      })

      .catch((error) => {
        console.log(error);
      });
  };
};
