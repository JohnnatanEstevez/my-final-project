import { http } from "./http";
const url = "https://dsangel-todos-api.herokuapp.com/api";

export function addTodo(todo) {
  return http(`${url}/todos`, "POST", { todo: { ...todo } });
}

/* export function updateTodo(todo) {
  return http(`${url}/todos/2`, "PUT", { ...todo });
}

export function deleteTodo(todo) {
  return http(`${url}/todos/1`, "DELETE", { ...todo });
}
 */
