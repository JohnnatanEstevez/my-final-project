import {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../../services/crudTodosService";
import {
  addTodoActionCreatorSuccess,
  addTodoActionCreatorError,
  listTodoActionCreatorSuccess,
  deleteTodoActionCreatorSuccess,
  updateTodoActionCreatorsSuccess,
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

export const thunkUpdateTodo = (editRow) => {
  console.log(editRow);

  return (dispatch) => {
    updateTodo(editRow).then((res) => {
      dispatch(updateTodoActionCreatorsSuccess(res));
    });
  };
};
