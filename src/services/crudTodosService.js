import { http } from "./http";
const url = "https://dsangel-todos-api.herokuapp.com/api";

export function addTodo(todo) {
  return http(`${url}/todos`, "POST", { todo: { ...todo } });
}

export function getTodo() {
  return http(`${url}/todos`);
}

export function deleteTodo(id) {
  return http(`${url}/todos/${id}`, "DELETE");
}
export function updateTodo(todo) {
  return http(`${url}/todos/${todo.id}`, "PUT", {
    todo: { description: todo.description },
  });
}
