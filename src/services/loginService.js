import { http } from "./http";
const url = "https://dsangel-todos-api.herokuapp.com/api";

export function postLogin(values) {
  return http(`${url}/login`, "POST", { ...values });
}
