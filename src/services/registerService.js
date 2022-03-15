import { http } from "./http";
const url = "https://dsangel-todos-api.herokuapp.com/api";

export function postRegister(values) {
  return http(`${url}/register`, "POST", { user: { ...values } });
}
